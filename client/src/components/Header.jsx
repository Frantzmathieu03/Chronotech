import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo_chronotech.png';

const Header = () => {
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
    </header>
  );
}

export default Header;
