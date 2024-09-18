import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo_chronotech.png';
import { ThemeContext } from './Theme';

const Header = () => {
  const { theme, handleThemeChange } = useContext(ThemeContext);

  return (
    <header>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="Chronotech Logo" style={{ width: '120px', height: 'auto' }}/>
        </Link>
      </div>
      <nav className="nav-links">
        <Link to="/about">About</Link>
        <Link to="/">Projects</Link>
      </nav>
      <div className="cta-buttons">
        <button id="login">
          <Link to="/login">Log In</Link>
        </button>
        <button><Link to="/signup">Sign Up</Link></button>
      </div>
      <div className="theme-selector">
        <label htmlFor="theme-select" style={{ marginRight: '10px' }}>Choose Theme:</label>
        <select id="theme-select" onChange={handleThemeChange} value={theme} style={{ padding: '5px' }}>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="classic">Classic ChronoTech</option>
        </select>
      </div>
    </header>
  );
}

export default Header;
