import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPaw,
  faHandHoldingHeart,
  faCalendar,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons"; // Import solid icons for better visibility
import "../Styles/Footer.css";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>
            Email:{" "}
            <a href="mailto:info@tailwaggingadoptions.com">
              info@tailwaggingadoptions.com
            </a>
          </p>
          <p>Phone: +91 7411516558</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/">
                <FontAwesomeIcon icon={faHome} /> Home
              </a>
            </li>
            <li>
              <a href="/AdoptablePetsPage">
                <FontAwesomeIcon icon={faPaw} /> Adoptable Pets
              </a>
            </li>
            <li>
              <a href="/adoption-process">
                <FontAwesomeIcon icon={faHandHoldingHeart} /> Adoption Process
              </a>
            </li>
            <li>
              <a href="/events">
                <FontAwesomeIcon icon={faCalendar} /> Events
              </a>
            </li>
            <li>
              <a href="/donate">
                <FontAwesomeIcon icon={faMoneyBill} /> Donate
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#" className="icon">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a href="#" className="icon">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#" className="icon">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Waging Tails Rescue. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
