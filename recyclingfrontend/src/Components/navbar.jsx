import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from './image/logo2.png';

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const navToggle = () => {
    setIsActive(!isActive); // Toggle the active state
  };

  return (
    <nav className="nav">
    <div className="logo">
        <Link to="/" className="nav__brand">
                <img src={logo} alt="Logo" style={{ display: 'block' }}/>
               </Link>
    </div>

      <ul className={`nav__menu ${isActive ? "nav__active" : ""}`}>
        <li className="nav__item">
          <Link to="/home" className="nav__link">
            Ana Sayfa
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/about" className="nav__link">
            Kurumsal
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/services" className="nav__link">
            Hizmetlerimiz
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/info" className="nav__link">
            Yararlı Bilgiler
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/contact" className="nav__link">
            İletişim
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/login" className="nav__link">
            Giriş/Üye Ol
          </Link>
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
