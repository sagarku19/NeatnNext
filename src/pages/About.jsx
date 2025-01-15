import React from "react";
import './about.css';
import img2 from '../assets/ln2.jpeg';
import img3 from '../assets/ln3.jpeg';

const About = () => (
  <div className="about-container">
    <h1>About Us</h1>
    <p className="about-description">
      At NeatnNext Laundry, we pride ourselves on delivering high-quality,
      affordable laundry services to our community. With years of experience,
      we ensure your clothes are always fresh, clean, and folded to perfection.
      We offer a range of services designed to meet all your laundry needs.
    </p>
    
    <h2>Our Services</h2>
    <p className="services-description">
      Whether it's everyday laundry, delicate items, or dry cleaning, we’ve got you covered.
      Our professional team ensures the best care for your clothes.
    </p>

    <h2>Our Values</h2>
    <p className="values-description">
      We are committed to providing excellent customer service, fast turnaround times, and eco-friendly practices.
    </p>

    <div className="about-images">
      {/* <div className="image-card">
        <img
          src="https://via.placeholder.com/300x200"
          alt="Laundry service"
          className="about-image"
        />
        <p className="image-caption">Expert Laundry Care</p>
      </div> */}
      <div className="image-card">
        <img
          src={img2}
          alt="Dry cleaning"
          className="about-image"
        />
        <p className="image-caption">Professional Dry Cleaning</p>
      </div>
      <div className="image-card">
        <img
          src={img3}
          alt="Fast Service"
          className="about-image"
        />
        <p className="image-caption">Fast and Reliable Service</p>
      </div>
    </div>
  </div>
);

export default About;

