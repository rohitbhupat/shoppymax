import React, { useEffect, useState } from 'react';
import Layout from '../Layout';
import StatsCard from './StatsCard';
import RecentActivities from './RecentActivities';
import { useTheme } from '../../ThemeProvider';
import axios from 'axios';

const Dashboard = () => {
    const { mode } = useTheme();
    const [adminName, setAdminName] = useState('');

    useEffect(() => {
        const fetchAdminName = async () => {
            try {
                const response = await axios.get('http://localhost:3000/dev/getadmin'); // Adjust URL as per your API Gateway endpoint
                setAdminName(response.data[0]?.username); // Assuming API returns an array with admin data
            } catch (error) {
                console.error('Error fetching admin name:', error);
                // Handle error fetching admin name
            }
        };

        fetchAdminName();
    }, []);

    return (
        <Layout>
            <div className={`flex flex-col min-h-screen h-screen ${mode === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
                <div className="flex-grow">
                    <br/>
                    <h1 className={`text-2xl font-bold mb-4 ${mode === 'dark' ? 'text-white' : 'text-black'}`}>Dashboard</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <StatsCard title="Total Users" value="1000" mode={mode} />
                        <StatsCard title="Total Orders" value="500" mode={mode} />
                        {/* Add more stats cards here */}
                    </div>
                    {/* <RecentActivities mode={mode} /> */}
                    {/* Add more dashboard components here */}
                </div>
            </div>
        </Layout>
    );
};

export default Dashboard;
