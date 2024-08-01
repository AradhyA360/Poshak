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
              href="#home"
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#shop"
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="nav-link"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
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
