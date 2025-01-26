import React from "react";

import "./footer.css"; // Import footer styles

import nnlg from "../assets/Media-img/nnlg.png"; // Logo
import ln from "../assets/Media-img/ln.png";
import ig from "../assets/Media-img/ig.png";
import tw from "../assets/Media-img/tw.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        {/* Section 1: Logo and Tagline */}
        <div className="footer-logo">
          <h2>
            <span>NeatnNext Laundry</span>
          </h2>
          <p>Fresh Fab Next to You.</p>
        </div>

        {/* Section 2: Content divided into 4 parts */}
        <div className="footer-content">
          {/* Part 1: Logo & Slogan */}
          <div className="footer-logo-section">
            <a href="/">
            <img src={nnlg} alt="NeatnNext Logo" className="footer-logo-img" />
            </a>
            <h3>&copy; {new Date().getFullYear()} NeatnNext Firm.</h3>
          </div>

          {/* Part 2: Quick Links */}
          <div className="footer-links-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/prices">Prices</a></li>
              <li><a href="/faq">FAQ</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/aboutfounder">About Founder</a></li>
              <li><a href="/terms-and-conditions">T&Cs</a></li>
              <li><a href="/privacy-policy">Privacy Policy</a></li>
            </ul>
          </div>


          {/* Part 4: Contact Info */}
          <div className="footer-contact-section">
            <h3>Contact Information</h3>
            <p>NeatnNext Firm Laundry  </p>
            <p>Mail Address: Satgaon, ButiBori MIDC, Nagpur, (MH) - 441108</p>
            <p>
              Email: <a href="mailto:neatnnext@gmail.com">neatnnext@gmail.com</a>
            </p>
            <p>Show us some love on social media!</p>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={ln} alt="LinkedIn" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={ig} alt="Instagram" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                <img src={tw} alt="Twitter" />
              </a>
            </div>
          </div>
        </div>

        <hr /> {/* Horizontal line */}

        {/* Section 3: Footer Bottom */}
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} NeatnNext Firm. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <a href="/terms-and-conditions">Terms & Conditions</a>
            <a href="/privacy-policy">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
