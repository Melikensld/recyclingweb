
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from './Contexts/authContext';
import "./navbar.css";
import logo from './image/logo2.png';
import {FiLogOut} from "react-icons/fi";

function Navbar() {
  const [isActive, setIsActive] = useState(false);
  const { isAuthenticated, logout } = useAuth();

  const navToggle = () => {
    setIsActive(!isActive);
  };

  return (
      <nav className="nav">
        <div className="logo">
          <Link to="/" className="nav__brand">
            <img src={logo} alt="Logo" style={{ display: 'block' }} />
          </Link>
        </div>

        <ul className={`nav__menu ${isActive ? "nav__active" : ""}`}>
          <li className="nav__item">
            <Link to="/home" className="nav__link">
              Home Page
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/about" className="nav__link">
              About Us
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/info" className="nav__link">
              Useful Information
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/contact" className="nav__link">
              Contact Us
            </Link>
          </li>
          <li className="nav__item">
                      <Link to="/flask" className="nav__link">
                        Save Trees
                      </Link>
                    </li>
          <li className="nav__item">
            {isAuthenticated ? (
                <div className="auth-links">
                    <Link to="/profile" className="nav__link">Profile</Link>
                    <button onClick={logout} className="logout-button">
                        <FiLogOut className="logout-icon" />
                    </button>
                </div>
            ) : (
                <Link to="/login" className="nav__link">Sign In/Sign Up</Link>
            )}
          </li>
        </ul>
        <div onClick={navToggle} className={`nav__toggler ${isActive ? "toggle" : ""}`}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
  );
}

export default Navbar;
