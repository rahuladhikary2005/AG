import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Very important for toggle to work
import { Link } from 'react-router-dom'; // Use this if you're using React Router
import '../index.css';


const Navbar = () => {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('theme') || 'light';
    } catch (e) {
      return 'light';
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('theme-light', 'theme-dark');
    root.classList.add(theme === 'dark' ? 'theme-dark' : 'theme-light');
    try { localStorage.setItem('theme', theme); } catch (e) {}
  }, [theme]);

  const toggleTheme = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm py-2 px-4">
      <div className="container-fluid">
        {/* Logo */}
        <a className="navbar-brand text-danger fw-bold" href="/" style={{cursor: 'pointer'}}>AmbulanceGalaxy</a>

        {/* Toggler Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible content */}
        <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
          {/* Center Nav Links */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex flex-column flex-lg-row gap-0 gap-lg-4">
            <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/services">Services</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/contact">Contact</Link>
            </li>
            {/* Chat accessible via floating icon; link removed from navbar */}
          </ul>


          {/* Buttons (Right) */}
          <div className="d-flex gap-2 align-items-center">
            <button className="btn btn-danger">Book Now</button>
            <Link to="/auth" className="btn btn-outline-secondary">
              Login
            </Link>
            <button
              aria-label="Toggle theme"
              title="Toggle light / dark"
              className="btn btn-sm btn-outline-secondary ms-2 theme-toggle"
              onClick={toggleTheme}
            >
              {theme === 'dark' ? '🌙' : '☀️'}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
