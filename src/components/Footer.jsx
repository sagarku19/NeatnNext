import React from "react";
import "./footer.css"; // Import footer styles

import ln from "../assets/Media-img/ln.png";
import ig from "../assets/Media-img/ig.png";
import tw from "../assets/Media-img/tw.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        {/* Footer Logo and Tagline */}
        <div className="footer-logo">
          <h2>
            <span>NeatnNext Laundry</span>
          </h2>
          <p>Fresh Fab Next to You.</p>
        </div>

        {/* Navigation Links */}
        <ul className="footer-links">
          <li><a href="/">Home</a></li>
          <li><a href="/about">About Us</a></li>
          <li><a href="/services">Services</a></li>
          {/* <li><a href="/contact">Contact</a></li> */}
        </ul>

        {/* Contact Information */}
        <ul className="footer-contact">
          <li>Phone: +91 81022 72557</li>
          <li>Email: neatnnext@gmail.com</li>
          <li>Satgaon, ButiBori MIDC, Nagpur, (MH) - 441108</li>
        </ul>

        {/* Social Media Links */}
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={ln} alt="LinkedIn" style={{ width: '40px', height: '40px' }} /></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <img src={ig} alt="Instagram" style={{ width: '40px', height: '40px' }} /></a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={tw} alt="Twitter" style={{ width: '40px', height: '40px' }} /></a>
        </div>
      </div>

      <p>&copy; {new Date().getFullYear()} NeatnNext Laundry. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
