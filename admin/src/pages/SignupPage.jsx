import React, { useState, useEffect } from 'react';
import { SunIcon, MoonIcon, EyeIcon, EyeOffIcon } from '@heroicons/react/outline';
import { addAdmin } from '../api';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [mode, setMode] = useState(() => {
        const storedMode = localStorage.getItem('mode');
        return storedMode ? storedMode : 'light';
    }); // 'dark' or 'light'
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        localStorage.setItem('mode', mode);
    }, [mode]);

    const toggleMode = () => {
        setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await addAdmin({ username, email, password });
            navigate('/dashboard');
        } catch (err) {
            setError('Error signing up');
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    return (
        <div className={`min-h-screen flex items-center justify-center bg-${mode === 'dark' ? 'gray-900' : 'gray-100'}`}>
            <div className={`bg-${mode === 'dark' ? 'gray-800' : 'white'} p-8 rounded shadow-md w-full max-w-md`}>
            <div className="flex justify-between items-center mb-6">
                <h2 className={`text-2xl font-bold mb-6 text-center text-${mode === 'dark' ? 'white' : 'black'}`}>Admin Signup</h2>
                <button onClick={toggleMode}>
                            {mode === 'dark' ? (
                                <SunIcon className="w-6 h-6 text-yellow-500" />
                            ) : (
                                <MoonIcon className="w-6 h-6 text-gray-500" />
                            )}
                        </button>
                    </div>
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className={`block text-${mode === 'dark' ? 'white' : 'gray-700'} mb-2`}>Username:</label>
                        <input
                            type="text"
                            className="w-full p-3 border rounded"
                            placeholder='Enter your username'
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className={`block text-${mode === 'dark' ? 'white' : 'gray-700'} mb-2`}>Email:</label>
                        <input
                            type="email"
                            className="w-full p-3 border rounded"
                            value={email}
                            placeholder='Enter your email'
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-6 relative">
                        <label className={`block text-${mode === 'dark' ? 'white' : 'gray-700'} mb-2`}>Password:</label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                className="w-full p-3 border rounded"
                                placeholder='Enter your password'
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
                        Signup
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SignupPage;
