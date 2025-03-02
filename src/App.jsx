import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

import TermsAndConditions from "./other-pages/TermsAndConditions";
import PrivacyPolicy from "./other-pages/PrivacyPolicy";
import FAQ from "./other-pages/Faq";
import Prices from "./other-pages/Prices";
import AboutFounder from "./other-pages/AboutFounder";


import Footer from "./components/Footer";

import wb from "./assets/Media-img/whb.png";
import "./styles.css"; // Import the CSS file
import "./components/whatsapp.css";

const App = () => {
  const [isOpen, setIsOpen] = useState(false); // State to track the menu open/close

  // Toggle the hamburger menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Collapse the menu when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <Router>
      <div className="container">
        <header>
          <div className="header-content">
            <h1 className="logo">NeatnNext</h1>
            {/* Hamburger Icon */}
            <button className="hamburger" onClick={toggleMenu}>
              <div className={`line ${isOpen ? "open" : ""}`}></div>
              <div className={`line ${isOpen ? "open" : ""}`}></div>
              <div className={`line ${isOpen ? "open" : ""}`}></div>
            </button>

            {/* Navigation Links */}
            <nav className={`nav ${isOpen ? "open" : ""}`}>
              <ul className="nav-links">
                <li>
                  <Link to="/" className="navLink" onClick={handleLinkClick}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="navLink" onClick={handleLinkClick}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="navLink" onClick={handleLinkClick}>
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="navLink" onClick={handleLinkClick}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {/* Main content */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />  
            <Route path="/faq" element={<FAQ />} /> 
            <Route path="/prices" element={<Prices />} /> 
            <Route path="/aboutfounder" element={<AboutFounder />} /> 
          </Routes>
        </main>

        {/* Footer */}
        <Footer />

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/917972303745?text=Hii" 
          className="whatsapp-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={wb} 
            alt="WhatsApp"
            className="whatsapp-icon"
          />
        </a>
      </div>
    </Router>
  );
};

export default App;
