import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo">
            <span className="logo-icon">🍕</span>
            <span className="logo-text">FoodieExpress</span>
          </div>
          <p className="footer-description">
            Delicious food delivered to your doorstep in minutes. 
            Fresh, fast, and always satisfying.
          </p>
          <div className="social-links">
            <a href="#" className="social-link">📘</a>
            <a href="#" className="social-link">📷</a>
            <a href="#" className="social-link">🐦</a>
            <a href="#" className="social-link">📺</a>
          </div>
        </div>
        
        <div className="footer-section">
          <h4>Company</h4>
          <ul className="footer-links">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>For Foodies</h4>
          <ul className="footer-links">
            <li><a href="#">Code of Conduct</a></li>
            <li><a href="#">Community</a></li>
            <li><a href="#">Blogger Help</a></li>
            <li><a href="#">Mobile Apps</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>For Restaurants</h4>
          <ul className="footer-links">
            <li><a href="#">Partner With Us</a></li>
            <li><a href="#">Apps For You</a></li>
            <li><a href="#">Restaurant Dashboard</a></li>
            <li><a href="#">Business Growth</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Learn More</h4>
          <ul className="footer-links">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Cookie Policy</a></li>
            <li><a href="#">Investor Relations</a></li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p>&copy; 2024 FoodieExpress. All rights reserved.</p>
          <div className="app-links">
            <a href="#" className="app-link">
              <span>📱</span>
              Download App
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;