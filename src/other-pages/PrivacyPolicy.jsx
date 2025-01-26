import React from "react";

import img from "../assets/laundry1.jpg";

const PrivacyPolicy = () => {
  const styles = {
    container: {
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      boxSizing: 'border-box',
    },
    imageContainer: {
      textAlign: 'center',
      marginTop: '20px',
    },
    image: {
      width: '100%',
      maxWidth: '600px',
      height: 'auto',
      borderRadius: '8px',
    },
    contentContainer: {
      textAlign: 'left',
      padding: '20px',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    },
    h1: {
      fontSize: '2.5rem',
      color: '#333',
      marginBottom: '10px',
      textAlign: 'center',
    },
    h2: {
      fontSize: '2.0rem',
      color: '#444',
      marginTop: '20px',
      marginBottom: '10px',
      textAlign: 'center',
    },
    h3: {
      fontSize: '1.5rem',
      color: '#444',
      marginTop: '20px',
      marginBottom: '10px',
      textAlign: 'center',
    },
    p: {
      fontSize: '1rem',
      color: '#555',
      lineHeight: '1.6',
      marginBottom: '15px',
    },
    ul: {
      fontSize: '1rem',
      color: '#555',
      lineHeight: '1.6',
      marginBottom: '15px',
      paddingLeft: '20px',
    },
  };

  return (
    <div style={styles.container}>

      <div style={styles.contentContainer}>
        <h1 style={styles.h1}>Privacy Policy</h1>
        <hr />
        <hr />
        
        <h2 style={styles.h2}>Data We Collect</h2>
        <ul style={styles.ul}>
          <li><strong>Personal Information:</strong> Name, email, phone number, and address.</li>
          <li><strong>Service Data:</strong> Order history, ratings, and service preferences.</li>
          <li><strong>Location Data:</strong> GPS data for proximity-based recommendations and delivery tracking.</li>
          <li><strong>Payment Information:</strong> Transaction details (via secure third-party processors).</li>
        </ul>

        <h2 style={styles.h2}>How We Use Your Data</h2>
        <hr />
        <ul style={styles.ul}>
          <li>To connect customers with laundry services and manage order processing.</li>
          <li>To improve app functionality through data analytics.</li>
          <li>To ensure secure payment processing and refund management.</li>
          <li>To communicate updates, promotions, and important service information.</li>
        </ul>

        <h2 style={styles.h2}>Data Security</h2>
        <hr />
        <ul style={styles.ul}>
          <li>All personal data is encrypted during transmission and storage.</li>
          <li>Access to sensitive information is limited to authorized personnel.</li>
          <li>Regular security audits are performed to safeguard user data.</li>
        </ul>

        <h2 style={styles.h2}>User Rights</h2>
        <hr />
        <ul style={styles.ul}>
          <li>Users can access, update, or delete their personal information through app settings.</li>
          <li>Location tracking can be disabled, but it may limit functionality.</li>
          <li>Users have the right to request a copy of their data and to opt-out of promotional communications.</li>
          <li>Users can request the deletion of their data in accordance with applicable laws and regulations.</li>
        </ul>

        <h2 style={styles.h2}>Third-Party Data Sharing</h2>
        <hr />
        <p style={styles.p}>
          NeatnNext does not sell or share your personal data with third parties, except for service providers who help us process payments, deliver services, and improve app functionality. All third-party partners are required to adhere to strict privacy and security standards.
        </p>

        <h2 style={styles.h2}>Cookies and Tracking Technologies</h2>
        <hr />
        <ul style={styles.ul}>
          <li>NeatnNext uses cookies to enhance user experience, personalize content, and analyze app performance.</li>
          <li>Users can manage cookie preferences through browser settings.</li>
        </ul>

        <h2 style={styles.h2}>Changes to Privacy Policy</h2>
        <hr />
        <p style={styles.p}>
          NeatnNext reserves the right to update this Privacy Policy at any time. Any changes will be posted on this page with an updated "Last Revised" date. It is your responsibility to review this policy periodically for any updates.
        </p>

        <h2 style={styles.h2}>Contact Us</h2>
        <hr />
        <p style={styles.p}>
          If you have any questions or concerns about this Privacy Policy, please contact us at neatnnext@gmail.com.
        </p>
      </div>

      {/* <div style={styles.imageContainer}>
        <img src={img} alt="Privacy Policy" style={styles.image} />
      </div> */}
    </div>
  );
};

export default PrivacyPolicy;
