import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo-container">
        <a href="/" className="logo">
          POSHAK
        </a>
      </div>
      <div className={`nav ${isMenuOpen ? "open" : ""}`}>
        <ul className="nav-links">
          <li>
            <a
              href="#men"
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Men
            </a>
          </li>
          <li>
            <a
              href="#women"
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Women
            </a>
          </li>
          <li>
            <a
              href="#Kids"
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Kids
            </a>
          </li>
          <li>
            <a
              href="#accessories"
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Accessories
            </a>
          </li>
        </ul>
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for products..."
          className="search-input"
        />
      </div>
      <div className="header-buttons">
        <a href="#login" className="auth-button login-button">
          Log In
        </a>
        <a href="#signup" className="auth-button signup-button">
          Sign Up
        </a>
        <a href="#cart" className="cart-icon">
          <i className="fas fa-shopping-cart"></i>
        </a>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
    </header>
  );
};

export default Header;
