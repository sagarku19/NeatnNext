import React from "react";
import washFoldImg from "../assets/ln9.jpg";
import dryCleanImg from "../assets/ln8.jpg";
import ironingImg from "../assets/ln7.jpg";
import pickupDeliveryImg from "../assets/ln4.jpeg";
import './services.css'; // Import the CSS file for styles

const Services = () => (
  <div className="services-container">
    <h1 className="services-title">Our Services</h1>
    <p className="services-description">
      At NeatnNext, we offer a range of professional laundry services to meet all your laundry needs. Our services are designed to save you time while delivering excellent quality. Check out our popular services below!
    </p>
    
    <div className="services-list">
      <div className="service-item">
        <img src={washFoldImg} alt="Wash & Fold" className="service-image" />
        <h2>Wash & Fold</h2>
        <p>We clean and neatly fold your clothes, so they’re ready to wear. Ideal for your everyday laundry needs.</p>
      </div>

      <div className="service-item">
        <img src={dryCleanImg} alt="Dry Cleaning" className="service-image" />
        <h2>Dry Cleaning</h2>
        <p>For your delicate fabrics, we provide premium dry cleaning services to ensure your clothes stay fresh and pristine.</p>
      </div>

      <div className="service-item">
        <img src={ironingImg} alt="Ironing" className="service-image" />
        <h2>Ironing</h2>
        <p>We iron your clothes to perfection, ensuring they’re wrinkle-free and looking sharp.</p>
      </div>

      <div className="service-item">
        <img src={pickupDeliveryImg} alt="Pickup & Delivery" className="service-image" />
        <h2>Pickup & Delivery</h2>
        <p>Convenient and reliable pickup and delivery service, so you don’t have to leave your home or office.</p>
      </div>
    </div>
  </div>
);

export default Services;
