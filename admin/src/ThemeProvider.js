import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [mode, setMode] = useState(() => {
        const storedMode = localStorage.getItem('mode');
        return storedMode ? storedMode : 'light';
    });

    const toggleMode = () => {
        const newMode = mode === 'dark' ? 'light' : 'dark';
        setMode(newMode);
        localStorage.setItem('mode', newMode);
    };

    return (
        <ThemeContext.Provider value={{ mode, toggleMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
