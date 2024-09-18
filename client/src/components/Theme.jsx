import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const Theme = ({ children }) => {
    const [theme, setTheme] = useState('light');

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const themes = {
    light: {
      backgroundColor: '#FFFFFF',
      color: '#000000',
    },
    dark: {
      backgroundColor: '#121212',
      color: '#FFFFFF',
    },
    classic: {
      backgroundColor: '#FFDDC1',
      color: '#22179E',
    },
  };

  const handleThemeChange = (e) => setTheme(e.target.value);

  return (
    <ThemeContext.Provider value={{ theme, handleThemeChange }}>
      <div style={themes[theme]}>
        <header style={{ padding: '10px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
            <label htmlFor="theme-select" style={{ marginBottom: '5px' }}>Choose Theme:</label>
            <select id="theme-select" onChange={handleThemeChange} value={theme} style={{ padding: '5px' }}>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="classic">Classic ChronoTech</option>
            </select>
          </div>
        </header>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export default Theme;