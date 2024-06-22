import React from 'react';

const StatsCard = ({ title, value }) => {
    return (
        <div className="bg-white shadow rounded-lg p-4 text-center">
            <h2 className="text-lg font-bold mb-2">{title}</h2>
            <p className="text-xl">{value}</p>
        </div>
    );
};

export default StatsCard;
