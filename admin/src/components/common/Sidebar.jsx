import React from 'react';
import { HomeIcon, UserIcon, CogIcon } from '@heroicons/react/outline';
import { useTheme } from '../../ThemeProvider';

const Sidebar = () => {
    const { mode } = useTheme();

    return (
        <div className={`w-64 ${mode === 'dark' ? 'bg-gray-800' : 'bg-gray-200'} p-4 flex-shrink-0 h-screen`}>
            <ul className="space-y-2">
                <li className="group">
                    <a href="#" className={`flex items-center space-x-2 p-2 rounded-md hover:bg-${mode === 'dark' ? 'gray-700' : 'gray-300'}`}>
                        <HomeIcon className={`h-5 w-5 ${mode === 'dark' ? 'text-white' : 'text-gray-700'} group-hover:text-blue-500`} />
                        <span className={`${mode === 'dark' ? 'text-white' : 'text-gray-700'} group-hover:text-blue-500`}>Home</span>
                    </a>
                </li>
                <li className="group">
                    <a href="#" className={`flex items-center space-x-2 p-2 rounded-md hover:bg-${mode === 'dark' ? 'gray-700' : 'gray-300'}`}>
                        <UserIcon className={`h-5 w-5 ${mode === 'dark' ? 'text-white' : 'text-gray-700'} group-hover:text-blue-500`} />
                        <span className={`${mode === 'dark' ? 'text-white' : 'text-gray-700'} group-hover:text-blue-500`}>Profile</span>
                    </a>
                </li>
                <li className="group">
                    <a href="#" className={`flex items-center space-x-2 p-2 rounded-md hover:bg-${mode === 'dark' ? 'gray-700' : 'gray-300'}`}>
                        <CogIcon className={`h-5 w-5 ${mode === 'dark' ? 'text-white' : 'text-gray-700'} group-hover:text-blue-500`} />
                        <span className={`${mode === 'dark' ? 'text-white' : 'text-gray-700'} group-hover:text-blue-500`}>Settings</span>
                    </a>
                </li>
                {/* Add more sidebar items here */}
            </ul>
        </div>
    );
};

export default Sidebar;
