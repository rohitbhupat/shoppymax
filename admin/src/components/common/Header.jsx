import React, { useState } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { BellIcon, SunIcon, MoonIcon } from '@heroicons/react/outline';
import { Link } from 'react-router-dom';
import { useTheme } from '../../ThemeProvider';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames'; // Ensure you import classNames

const Header = () => {
    const { mode, toggleMode } = useTheme();
    const { currentUser, logout } = useAuth();
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <header className={classNames('text-white p-4 fixed w-full top-0 z-10', {
            'bg-gray-900': mode === 'dark',
            'bg-gray-200 text-gray-800': mode !== 'dark'
        })}>
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo Modal */}
                {isModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                        <div className={`modal-container bg-white p-8 max-w-md rounded-lg shadow-lg ${mode === 'dark' ? 'dark' : ''}`}>
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

                <div className={`text-xl font-bold cursor-pointer ${mode === 'dark' ? 'text-white' : 'text-gray-800'}`} onClick={openModal}>
                    ShoppyMax Dashboard
                </div>

                <div className="flex items-center">
                    <button onClick={toggleMode} className="mr-4">
                        {mode === 'dark' ? (
                            <SunIcon className="w-6 h-6 text-yellow-500" />
                        ) : (
                            <MoonIcon className="w-6 h-6 text-gray-500" />
                        )}
                    </button>

                    <Menu as="div" className="relative">
                        <div>
                            <Menu.Button className={`relative p-1 text-gray-500 focus:ring-white focus:ring-offset-${mode === 'dark' ? 'gray-800' : 'gray-800'}`}>
                                <span className="sr-only">View notifications</span>
                                <BellIcon className={`h-6 w-6 ${mode === 'dark' ? 'text-white' : 'text-gray-500'}`} aria-hidden="true" />
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
                            <Menu.Items className={`absolute -right-12 z-10 mt-2 w-40 origin-top-right rounded-md ${mode === 'dark' ? 'bg-gray-900' : 'bg-white'} py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                                        style={{ maxHeight: '20rem', overflowY: 'auto' }}>
                                <Menu.Item>
                                    {({ active }) => (
                                        <Link to="#" className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm ${mode === 'dark' ? 'text-white' : 'text-gray-700'} hover:text-gray-900`}>
                                            Notifications here
                                        </Link>
                                    )}
                                </Menu.Item>
                            </Menu.Items>
                        </Transition>
                    </Menu>

                    <Menu as="div" className="relative ml-3">
                        <div>
                            <Menu.Button className={`flex items-center text-sm focus:ring-white focus:ring-offset-2 focus:ring-offset-${mode === 'dark' ? 'gray-800' : 'gray-800'}`}>
                                <span className={`text-${mode === 'dark' ? 'gray-200' : 'gray-800'} mr-2`}>Welcome, {currentUser ? currentUser.username : 'Guest'}</span>
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
                            <Menu.Items className={`absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md ${mode === 'dark' ? 'bg-gray-900' : 'bg-white'} py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
                                        style={{ maxHeight: '20rem', overflowY: 'auto' }}>
                                <Menu.Item>
                                    {({ active }) => (
                                        <Link to="/profilesettings" className={`${active ? 'bg-gray-100' : ''} block px-4 py-2 text-sm ${mode === 'dark' ? 'text-white' : 'text-gray-700'} hover:text-gray-900`}>
                                            Your Profile
                                        </Link>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <button onClick={handleLogout} className={`${active ? 'bg-gray-100' : ''} block w-full text-left px-4 py-2 text-sm ${mode === 'dark' ? 'text-white' : 'text-gray-700'} hover:text-gray-900`}>
                                            Sign out
                                        </button>
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
