import React from 'react';
import './Footer.css';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4 footer-section">
            <h4>About Us</h4>
            <p>
              CTAE Coders Carousel is a community of passionate developers,
              designers, and problem solvers. Join us to unleash your potential!
            </p>
          </div>
          <div className="col-md-4 footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4 footer-section">
            <h4>Follow Us</h4>
            <div className="footer-social-links">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 CTAE Coders Carousel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
