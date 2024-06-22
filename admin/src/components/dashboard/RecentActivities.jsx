import React from 'react';

const RecentActivities = () => {
    return (
        <div className="bg-white shadow rounded-lg p-4 mt-4">
            <h2 className="text-lg font-bold mb-2">Recent Activities</h2>
            <ul>
                <li className="mb-2">Activity 1</li>
                <li className="mb-2">Activity 2</li>
                <li className="mb-2">Activity 3</li>
                {/* Add more activities here */}
            </ul>
        </div>
    );
};

export default RecentActivities;
