import React from 'react';
import { XIcon } from '@heroicons/react/outline';

const NotificationSidebar = ({ onClose, mode }) => {
    const sidebarClass = mode === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black';
    const contentClass = mode === 'dark' ? 'bg-gray-700 text-white' : 'bg-white text-black';

    return (
        <div className="fixed inset-0 overflow-hidden z-50 bg-black bg-opacity-50 transition-opacity duration-300">
            <div className={`absolute inset-y-0 right-0 max-w-full w-64 shadow-xl transform transition-transform duration-300 ${sidebarClass}`}>
                <div className="flex justify-between items-center p-4 border-b border-gray-600">
                    <h3 className="text-lg font-semibold">Notifications</h3>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-700 focus:outline-none">
                        <XIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className={`${contentClass} p-4`}>
                    <div className="text-sm">Notification content here</div>
                </div>
            </div>
        </div>
    );
};

export default NotificationSidebar;
