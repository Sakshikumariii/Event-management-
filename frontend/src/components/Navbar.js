import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css'; // Your custom styles
import { MenuItems } from './MenuItems';
import { FaBars } from 'react-icons/fa'; // Example icon from React Icons

const Navbar = () => {
  const auth = localStorage.getItem('user');
  const user = auth ? JSON.parse(auth) : null;
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const logout = () => {
    localStorage.removeItem('user');
    navigate('/signup');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand text-white" to="/">
          Event
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
          aria-label="Toggle navigation"
          aria-controls="navbarSupportedContent"
          aria-expanded={isOpen}
        >
          <FaBars />
        </button>
        <div className={`collapse navbar-collapse justify-content-between ${isOpen ? 'show' : ''}`} id="navbarSupportedContent">
          <ul className="navbar-nav">
            {MenuItems.map((item, index) => (
              <li key={index} className="nav-item">
                <Link className={`nav-link ${item.cName}`} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="navbar-nav ml-auto">
            {auth && user && (
              <>
                <li className="nav-item">
                  <span className="nav-link text-white">{user.name}</span>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" onClick={logout} to="/signup">
                    Logout
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
