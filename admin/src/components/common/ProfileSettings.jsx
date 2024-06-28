import React, { useState, useEffect } from 'react';
import { SunIcon, MoonIcon, EyeIcon, EyeOffIcon } from '@heroicons/react/outline';
import { useTheme } from '../../ThemeProvider';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { updateAdmin } from '../../api';

const ProfileSettings = () => {
    const { mode, toggleMode } = useTheme();
    const { currentUser, setCurrentUser } = useAuth();
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [notification, setNotification] = useState('');
    const [error, setError] = useState('');

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
            const response = await updateAdmin(currentUser.id, {
                username,
                email,
                password
            });
            return response; // Assuming response is handled appropriately in handleSubmit
        } catch (error) {
            console.error('Error updating profile:', error);
            throw new Error('Failed to update profile');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            await updateProfile();
            setNotification('Profile details updated successfully.');
            setTimeout(() => {
                setNotification('');
                navigate('/dashboard');
            }, 3000);
        } catch (error) {
            console.error('Error updating profile:', error);
            setError('Failed to update profile');
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
                {error && (
                    <div className="bg-red-500 text-white p-3 mb-4 rounded">
                        {error}
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
