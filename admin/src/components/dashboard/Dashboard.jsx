import React from 'react';
import { useTheme } from '../../ThemeProvider';
import Header from '../common/Header';
import Footer from '../common/Footer';
import Sidebar from '../common/Sidebar';
import StatsCard from './StatsCard';
import RecentActivities from './RecentActivities';

const Dashboard = () => {
    const { mode, toggleMode } = useTheme();

    return (
        <div className={`flex flex-col min-h-screen ${mode === 'dark' ? 'dark' : ''}`}>
            <Header mode={mode} toggleMode={toggleMode} adminName="Admin" />
            <div className="flex flex-1 pt-16">
                <Sidebar mode={mode} />
                <main className="flex-1 p-4">
                    <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <StatsCard title="Total Users" value="1000" mode={mode} />
                        <StatsCard title="Total Orders" value="500" mode={mode} />
                        {/* Add more stats cards here */}
                    </div>
                    <RecentActivities mode={mode} />
                    {/* Add more dashboard components here */}
                </main>
            </div>
            <Footer />
        </div>
    );
};

export default Dashboard;
