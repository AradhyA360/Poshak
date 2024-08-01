// Footer.js
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>About Poshak</h3>
          <p>
            Poshak is your one-stop shop for all your fashion needs. We offer a
            wide range of clothing and accessories for men, women, and children.
            Our mission is to provide high-quality products at affordable
            prices.
          </p>
        </div>
        <div className="footer-section links">
          <h3>Customer Service</h3>
          <ul>
            <li>
              <a href="#faq" className="footer-link">
                FAQ
              </a>
            </li>
            <li>
              <a href="#returns" className="footer-link">
                Returns & Refunds
              </a>
            </li>
            <li>
              <a href="#shipping" className="footer-link">
                Shipping Information
              </a>
            </li>
            <li>
              <a href="#contact-us" className="footer-link">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-section links">
          <h3>Company</h3>
          <ul>
            <li>
              <a href="#about-us" className="footer-link">
                About Us
              </a>
            </li>
            <li>
              <a href="#careers" className="footer-link">
                Careers
              </a>
            </li>
            <li>
              <a href="#privacy-policy" className="footer-link">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#terms-of-service" className="footer-link">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-section social">
          <h3>Follow Us</h3>
          <div className="social-media-icons">
            <a
              href="https://facebook.com"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="https://twitter.com"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://instagram.com"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://linkedin.com"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Poshak. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
