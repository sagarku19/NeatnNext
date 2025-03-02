import React from 'react';
// Optionally, import a founder image if you have one
// import founderImage from '../assets/founder.jpg'; // Replace with the actual image path
import { Link } from 'react-router-dom'; // Importing Link for navigation

const AboutFounder = () => {
  const styles = {
    container: {
      padding: '40px',
      textAlign: 'center',
      backgroundColor: '#f1f1f1', // Light grey background
    },
    heading: {
      fontSize: '2.5rem',
      color: '#333', // Dark grey color for the heading
      marginBottom: '20px',
    },
    founderCard: {
      display: 'inline-block',
      width: '80%',
      maxWidth: '800px',
      padding: '20px',
      backgroundColor: '#fff', // White background for the founder card
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Light shadow for card
      textAlign: 'center',
    },
    founderImage: {
      borderRadius: '50%',
      width: '150px',
      height: '150px',
      objectFit: 'cover', // Ensures the image covers the circle nicely
      marginBottom: '20px',
    },
    founderName: {
      fontSize: '1.8rem',
      color: '#333',
      marginBottom: '10px',
    },
    founderBio: {
      fontSize: '1rem',
      color: '#777', // Lighter grey for the bio text
      lineHeight: '1.6', // Better readability with line height
    },
    contactButton: {
      marginTop: '30px',
      padding: '12px 25px',
      fontSize: '1.5rem',
      backgroundColor: '#ffcc00', // Blue button color
    //   color: '#fff',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      textDecoration: 'none', // Remove underline from link
    },
    contactButtonHover: {
      backgroundColor: '#ffcc00', // Darker blue when hovered
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>About the Founder</h2>
      <div style={styles.founderCard}>
        {/* Uncomment the line below and replace the path to display the founder image */}
        {/* <img src={founderImage} alt="Founder" style={styles.founderImage} /> */}
        <h3 style={styles.founderName}>NeatnNext Firm</h3>
        <hr />
        <p style={styles.founderBio}>
          We at NeatnNext are a group of five tech enthusiasts with a shared passion for revolutionizing the laundry industry. With years of experience in technology, our team set out to create a seamless and efficient experience for both customers and laundry service providers.
          <br />
          <br />
          NeatnNext was born from our vision to make laundry services more accessible, reliable, and user-friendly, breaking the barriers between customers and their everyday laundry needs.
        </p>
        {/* Contact Us Button */}
        <Link to="/contact">
          <button style={styles.contactButton}>
            Contact Us
          </button>
        </Link>
      </div>
    </div>
  );
};

export default AboutFounder;
