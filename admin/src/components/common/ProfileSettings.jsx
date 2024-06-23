import React, { useState, useEffect } from 'react';
import { SunIcon, MoonIcon, EyeIcon, EyeOffIcon } from '@heroicons/react/outline';
import { useTheme } from '../../ThemeProvider';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProfileSettings = () => {
    const { mode, toggleMode } = useTheme();
    const { currentUser, setCurrentUser } = useAuth();
    const navigate = useNavigate();

    // Initialize state variables with empty values
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [notification, setNotification] = useState('');

    // Set state from currentUser when component mounts
    useEffect(() => {
        if (currentUser) {
            setUsername(currentUser.username || '');
            setEmail(currentUser.email || '');
            setPassword(currentUser.password || '');
        }
    }, [currentUser]);

    const togglePasswordVisibility = () => {
        setShowPassword(prevShowPassword => !prevShowPassword);
    };

    const updateProfile = async () => {
        try {
            const response = await axios.put(`http://localhost:3000/dev/updateadmin/${currentUser.id}`, {
                id: currentUser.id, // Ensure the id is included
                username,
                email,
                password
            });
            // Update currentUser in the context
            setCurrentUser({
                ...currentUser,
                username,
                email,
                password
            });
            return response.data;
        } catch (error) {
            console.error('Error updating profile:', error);
            throw new Error('Failed to update profile');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await updateProfile();

            // Show notification and redirect
            setNotification('Profile details updated successfully.');
            setTimeout(() => {
                setNotification('');
                navigate('/dashboard');
            }, 3000); // Redirect after 3 seconds
        } catch (error) {
            console.error('Error updating profile:', error);
            // Handle error updating profile
        }
    };

    return (
        <div className={`min-h-screen flex items-center justify-center bg-${mode === 'dark' ? 'gray-900' : 'gray-100'}`}>
            <div className={`bg-${mode === 'dark' ? 'gray-800' : 'white'} p-8 rounded shadow-md w-full max-w-md`}>
                <div className="flex justify-between items-center mb-6">
                    <h2 className={`text-2xl font-bold text-${mode === 'dark' ? 'white' : 'black'}`}>Update your details</h2>
                    <button onClick={toggleMode}>
                        {mode === 'dark' ? <SunIcon className="w-6 h-6 text-yellow-500" /> : <MoonIcon className="w-6 h-6 text-gray-500" />}
                    </button>
                </div>
                {notification && (
                    <div className="bg-green-500 text-white p-3 mb-4 rounded">
                        {notification}
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className={`block text-${mode === 'dark' ? 'white' : 'gray-700'} text-sm font-bold mb-2`} htmlFor="username">
                            Username:
                        </label>
                        <input
                            className="w-full p-3 border rounded"
                            id="username"
                            type="text"
                            placeholder='Enter your new username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            autoComplete='off'
                        />
                    </div>
                    <div className="mb-4">
                        <label className={`block text-${mode === 'dark' ? 'white' : 'gray-700'} text-sm font-bold mb-2`} htmlFor="email">
                            Email:
                        </label>
                        <input
                            className="w-full p-3 border rounded"
                            id="email"
                            type="email"
                            placeholder='Enter your new email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete='off'
                        />
                    </div>
                    <div className="mb-4">
                        <label className={`block text-${mode === 'dark' ? 'white' : 'gray-700'} text-sm font-bold mb-2`} htmlFor="password">
                            Password:
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                className="w-full p-3 border rounded"
                                placeholder='Enter your new password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button
                                type="button"
                                className="absolute right-2 top-3 text-gray-500"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? <EyeOffIcon className="w-6 h-6" /> : <EyeIcon className="w-6 h-6" />}
                            </button>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-3 rounded hover:bg-blue-700"
                    >
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ProfileSettings;
