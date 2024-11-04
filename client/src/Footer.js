// Footer.js
import React from 'react';
import './Footer.css'; // Import CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <div className="footer-section">
            <h4>Services</h4>
            <ul>
              <li><a href="#tutoring">Tutoring</a></li>
              <li><a href="#resources">Learning Resources</a></li>
              <li><a href="#workshops">Workshops</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>About Us</h4>
            <ul>
              <li><a href="#about">Our Story</a></li>
              <li><a href="#team">Meet the Team</a></li>
              <li><a href="#careers">Careers</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <ul>
              <li><a href="#contact">Contact Us</a></li>
              <li><a href="#support">Support</a></li>
              <li><a href="#faq">FAQs</a></li>
            </ul>
          </div>
        </div>
        <div className="social-links">
          <h4>Follow Us</h4>
          <ul>
            <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          </ul>
        </div>
        <p>&copy; {new Date().getFullYear()} Little Learners. All rights reserved.</p>
        <p>Contact us: info@littlelearners.com</p>
      </div>
    </footer>
  );
};

export default Footer;
