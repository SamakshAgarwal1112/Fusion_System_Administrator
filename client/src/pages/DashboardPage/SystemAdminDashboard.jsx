import React, { useState } from 'react';
import { StatsGrid } from '../../components/StatsGrid/StatsGrid';
import { StatsRing } from '../../components/StatsRing/StatsRing';
import { StatsControls } from '../../components/StatsControls/StatsControls';
import { FeaturesCards } from '../../components/FeaturesCards/FeaturesCards';
import { Container, Title, Space, SimpleGrid, Divider, Button, Flex } from '@mantine/core';
import { Simple } from '../../charts/BarChart/Simple/Simple';
import { Icon3dCubeSphere } from '@tabler/icons-react';



const SystemAdminDashboard = () => {

    const [dashboardStats, setDashboardStats] = useState([
        { title: 'Total Users', icon: 'user', value: '5,173', diff: 34, time: "in last year" },
        { title: 'Total Roles', icon: 'settings', value: '56', diff: -13, time: "in last year" },
        { title: 'Archived Users', icon: 'arch', value: '573', diff: -30, time: "in last year" },
        { title: 'Deleted Users', icon: 'del', value: '2,543', diff: 18, time: "in last year" },
    ])

    const [userRoleData, setUserRoleData] = useState(
        [
            { year: 2019, Students: 1200, Professors: 900, Others: 200 },
            { year: 2020, Students: 1900, Professors: 1200, Others: 400 },
            { year: 2021, Students: 400, Professors: 1000, Others: 200 },
            { year: 2022, Students: 1000, Professors: 200, Others: 800 },
            { year: 2023, Students: 800, Professors: 1400, Others: 1200 },
            { year: 2024, Students: 750, Professors: 600, Others: 1000 },
        ]
    )

    const [userRoleColors, setUserRoleColours] = useState(
        [
            { name: 'Students', color: 'violet.6' },
            { name: 'Professors', color: 'blue.6' },
            { name: 'Others', color: 'teal.6' },
        ]
    )

    return (
        <Container fluid my="md">
            {/* Heading */}
            <Flex
                direction={{ base: 'column', sm: 'row' }}
                gap={{ base: 'sm', sm: 'lg' }}
                justify={{ sm: 'center' }}
            >
                <Button
                    variant="gradient"
                    size="xl"
                    radius="xs"
                    gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
                    sx={{
                        display: 'block',
                        width: { base: '100%', sm: 'auto' },
                        whiteSpace: 'normal',
                        padding: '1rem',
                        textAlign: 'center',
                    }}
                >
                    <Title
                        order={1}
                        sx={{
                            fontSize: { base: 'lg', sm: 'xl' },
                            lineHeight: 1.2,
                            wordBreak: 'break-word',
                        }}
                    >
                        Dashboard
                    </Title>
                </Button>
            </Flex>

            {/* Stats */}
            <StatsGrid data={dashboardStats} />

            <Space h="sm" />

            <Divider
                my="xs"
                // variant="dashed"
                labelPosition="center"
                label={
                    <>
                        <Icon3dCubeSphere size={12} />
                    </>
                }
            />

            {/* Quick Actions */}
            <FeaturesCards />

            {/* Spacing between sections */}
            <Space h="xl" />

            <Divider
                my="xs"
                // variant="dashed"
                labelPosition="center"
                label={
                    <>
                        <Icon3dCubeSphere size={12} />
                    </>
                }
            />

            <Space h="xl" />
            <Space h="xl" />

            <SimpleGrid
                cols={{ base: 1, md: 2 }}
                spacing={{ base: 10, sm: 'xl' }}
                verticalSpacing={{ base: 'md', sm: 'xl' }}
            >
                {/* bar graph */}
                <Simple title={"User Role Distribution By Year"} data={userRoleData} colors={userRoleColors} />
                <StatsControls />
            </SimpleGrid>

            <Space h="xl" />
            <Space h="xl" />

            <Divider
                my="xs"
                // variant="dashed"
                labelPosition="center"
                label={
                    <>
                        <Icon3dCubeSphere size={12} />
                    </>
                }
            />

            <Space h="xl" />

            {/* Recent Actions */}
            <StatsRing />
        </Container>
    );
};

export default SystemAdminDashboard;
