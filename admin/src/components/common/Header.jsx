import React, { useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { BellIcon, SunIcon, MoonIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import { useTheme } from '../../ThemeProvider';
// import WebsiteLogo from '../../assets/logo.png'; // Replace with your logo path

const Header = ({ adminName }) => {
    const { mode, toggleMode } = useTheme();
    const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <header className={`bg-gray-800 text-white p-4 fixed w-full top-0 z-10 ${mode === 'dark' ? 'dark' : ''}`}>
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo Modal */}
                {isModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                        <div className={`modal-container bg-white p-8 max-w-md rounded-lg shadow-lg ${mode === 'dark' ? 'dark' : ''}`}>
                            {/* Replace with your logo or website name content */}
                            {/* <img src={WebsiteLogo} alt="Logo" className="w-32 h-32 mb-4 mx-auto" /> */}
                            <div className={`text-3xl font-bold text-center mb-4 ${mode === 'dark' ? 'text-gray-800' : 'text-gray-800'}`}>
                                ShoppyMax Dashboard
                            </div>
                            <button
                                className={`block mx-auto px-4 py-2 rounded hover:bg-gray-700 ${mode === 'dark' ? 'bg-gray-700 text-white' : 'bg-gray-700 text-white'}`}
                                onClick={closeModal}
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}

                {/* Logo or Website Name */}
                <div className="text-xl font-bold cursor-pointer" onClick={openModal}>
                    {/* For logo: */}
                    {/* <img src={WebsiteLogo} alt="Logo" className="w-8 h-8 mr-2" /> */}
                    ShoppyMax Dashboard
                </div>

                <div className="flex items-center">
                    {/* Dark/Light Mode Button */}
                    <button onClick={toggleMode} className="mr-4">
                        {mode === 'dark' ? (
                            <SunIcon className="w-6 h-6 text-yellow-500" />
                        ) : (
                            <MoonIcon className="w-6 h-6 text-gray-500" />
                        )}
                    </button>

                    {/* Notification Dropdown */}
                    <Menu as="div" className="relative">
                        <div>
                            <Menu.Button className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span className="sr-only">View notifications</span>
                                <BellIcon className="h-6 w-6" aria-hidden="true" />
                            </Menu.Button>
                        </div>
                        {/* Notification Sidebar */}
                        <Transition
                            as={React.Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <Menu.Item>
                                    {({ active }) => (
                                        <div className={`${active ? 'bg-gray-100' : ''} px-4 py-2 text-sm text-gray-700`}>
                                            Notifications here
                                        </div>
                                    )}
                                </Menu.Item>
                            </Menu.Items>
                        </Transition>
                    </Menu>

                    {/* Profile Dropdown */}
                    <Menu as="div" className="relative ml-3">
                        <div>
                            <Menu.Button className="flex items-center rounded-full bg-gray-800 text-sm focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span className="text-white mr-2">Welcome, {adminName}</span>
                            </Menu.Button>
                        </div>
                        <Transition
                            as={React.Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <Menu.Item>
                                    {({ active }) => (
                                        <Link
                                            to="/profile-settings"
                                            className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm text-gray-700`}
                                        >
                                            Your Profile
                                        </Link>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm text-gray-700`}
                                        >
                                            Sign out
                                        </a>
                                    )}
                                </Menu.Item>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </div>
            </div>
        </header>
    );
};

export default Header;
