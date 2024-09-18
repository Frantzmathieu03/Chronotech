import React, { createContext, useState, useEffect } from 'react';

export const ThemeContext = createContext();

const Theme = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const themes = {
        light: 'light-theme',
        dark: 'dark-theme',
        classic: 'classic-theme',
    };

    const handleThemeChange = (e) => setTheme(e.target.value);

    // Apply the theme to the body when the theme state changes
    useEffect(() => {
        document.body.className = themes[theme]; // Set body class based on selected theme
    }, [theme, themes]);

    return (
      <ThemeContext.Provider value={{ theme, handleThemeChange }}>
          {children}
      </ThemeContext.Provider>
  );
};

export default Theme;
