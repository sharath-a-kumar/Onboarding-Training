// components/Footer.js

import React from 'react';
import '../Styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3> 
          <p>Email: TailWaggingAdoptions.com</p>
          <p>Phone: (123) 456-7890</p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/AdoptablePetsPage">Adoptable Pets</a></li>
            <li><a href="/adoption-process">Adoption Process</a></li>
            <li><a href="/events">Events</a></li>
            <li><a href="/donate">Donate</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            {/* Add your social media icons here */}
            <a href="#" className="icon">Facebook</a>
            <a href="#" className="icon">Twitter</a>
            <a href="#" className="icon">Instagram</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Love Pets. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
