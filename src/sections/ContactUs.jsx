// ContactUs.js
import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <section className="contact-us">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>
          We'd love to hear from you! Reach out to us through any of the
          following ways:
        </p>
        <div className="contact-details">
          <div className="contact-item">
            <i className="fas fa-envelope"></i>
            <div className="contact-info">
              <h3>Email</h3>
              <p>
                <a href="mailto:support@poshak.com">support@poshak.com</a>
              </p>
            </div>
          </div>
          <div className="contact-item">
            <i className="fas fa-phone-alt"></i>
            <div className="contact-info">
              <h3>Toll-Free Number</h3>
              <p>
                <a href="tel:1800-123-4567">1800-123-4567</a>
              </p>
            </div>
          </div>
          <div className="contact-item">
            <i className="fas fa-map-marker-alt"></i>
            <div className="contact-info">
              <h3>Address</h3>
              <p>
                123 Fashion Street, Suite 101,
                <br />
                New York, NY 10001, USA
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
