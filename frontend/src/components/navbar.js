import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assests/logo.jpg'; 
import './navbar.css';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
        <div className="text-container">
          <span className="welcome-text">Welcome to SureTrust</span>
          <span className="social-service-text">Social Service Initiative</span>
        </div>
      </div>
      <div className="navbar-right">
        <div className="dropdown">
          <button className="dropbtn" onClick={handleDropdownToggle}>
            Menu
          </button>
          {dropdownOpen && (
            <div className="dropdown-content">
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
              <Link to="/services">Services</Link>
              <Link to="/photo-gallery">Photo Gallery</Link>
              <Link to="/courses">Courses</Link>
            </div>
          )}
        </div>
        <Link to="/login" className="nav-link">Login</Link>
        <Link to="/signup" className="nav-link">Sign Up</Link>
      </div>
    </nav>
  );
};

export default Navbar;
