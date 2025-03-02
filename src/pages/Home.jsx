import React from "react";
import img from "../assets/laundry1.jpg";
import img2 from "../assets/ln5.jpg"; // Add more images
import img3 from "../assets/ln10.jpg"; // Add more images
import "./home.css"; // Import home page styles

const Home = () => (
  <div className="home-container">
    {/* Welcome Section */}
    <section className="welcome-section">
      <h1>Welcome to NeatnNext</h1>
      <p>A Lundry Marketplace for all your Laundry needs!</p>
      <img src={img} alt="Laundry Service" className="hero-image" />
    </section>

    {/* Services Section */}
    <section className="services-section">
      <h2>Our Services Providers Offers</h2>
      <div className="service-cards">
        <div className="service-card">
          <h3>Wash & Fold</h3>
          <p>
            Efficient and thorough wash & fold services for all your clothes.
          </p>
        </div>
        <div className="service-card">
          <h3>Dry Cleaning</h3>
          <p>High-quality dry cleaning for delicate fabrics and garments.</p>
        </div>
        <div className="service-card">
          <h3>Ironing</h3>
          <p>Professional ironing to give your clothes that perfect finish.</p>
        </div>
        <div className="service-card">
          <h3>Pickup & Delivery</h3>
          <p>Convenient pickup and delivery services for your laundry.</p>
        </div>
      </div>
    </section>

    {/* Image Gallery Section */}
    <section className="gallery-section">
      <h2>Gallery</h2>
      <div className="image-grid">
        <img src={img2} alt="Laundry Work 1" />
        <img src={img3} alt="Laundry Work 2" />
        {/* <img src={img} alt="Laundry Work 3" /> */}
        {/* Add more images as needed */}
      </div>
    </section>

    {/* Testimonial Section */}
    <section className="testimonial-section">
      <h2>What Our Customers Say</h2>
      <div className="testimonials">
        <div className="testimonial">
          <p>
            "NeatnNext made laundry so easy! Found a great service nearby, and
            now I never worry about washing clothes."
          </p>
          <h4>- Saurabh Dwivedi</h4>
        </div>
        <div  className="testimonial">
          <p>
            "Super fast service! Got my clothes cleaned and delivered the very
            next day—right on time!"
          </p>
          <h4>- Dilip Satpute</h4>
        </div>
      </div>
    </section>

    {/* Coming Soon Section */}

    {/* CTA Section */}
    <section className="cta-section">
      <h2>Our App is Coming Soon!</h2>
      <p>Get ready for a whole new level of convenience!</p>
      <button className="cta-btn">
        <a href="/contact">Contact Us</a>
      </button>
    </section>
  </div>
);

export default Home;
