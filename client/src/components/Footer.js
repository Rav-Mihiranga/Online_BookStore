import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'; // or use '../../styles/Footer.css' based on your folder

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4 className="footer-heading">📚 BookNest</h4>
          <p className="footer-text">
            Your gateway to endless stories and knowledge. Explore. Discover. Read.
          </p>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/" className="footer-link">Home</Link></li>
            <li><Link to="/explore" className="footer-link">Books</Link></li>
            <li><Link to="/login" className="footer-link">Login</Link></li>
            <li><Link to="/register" className="footer-link">Register</Link></li>
            <li><Link to="/profile" className="footer-link">Profile</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Customer Service</h4>
          <ul className="footer-links">
            <li><Link to="/faq" className="footer-link">FAQ</Link></li>
            <li><Link to="/shipping" className="footer-link">Shipping Policy</Link></li>
            <li><Link to="/returns" className="footer-link">Returns</Link></li>
            <li><Link to="/privacy" className="footer-link">Privacy Policy</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4 className="footer-heading">Connect With Us</h4>
          <div className="social-links">
            <a href="https://facebook.com" className="social-link" aria-label="Facebook">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://twitter.com" className="social-link" aria-label="Twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" className="social-link" aria-label="Instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <p className="footer-text">contact@booknest.com</p>
          <p className="footer-text">+94 77 123 4567</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} BookNest. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
