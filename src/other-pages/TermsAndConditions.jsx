import React from "react";

import img from "../assets/laundry1.jpg";

const TermsAndConditions = () => {
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
        <h1 style={styles.h1}>Terms and Conditions</h1>
        <hr />
        <hr />
        <p style={styles.p}>
          Welcome to NeatnNext, the platform designed to connect customers with laundry service providers and delivery personnel. By accessing or using our services, you agree to these Terms and Conditions. If you do not agree, please discontinue using the platform. We may revise these terms from time to time, with changes effective immediately upon posting. Continued use of NeatnNext constitutes acceptance of the updated terms.
        </p>
        
        <h2 style={styles.h2}>Introduction</h2>
        <p style={styles.p}>
          NeatnNext provides services via three dedicated apps:
          <ul style={styles.ul}>
            <li>User App – For customers to browse, book, and manage laundry services.</li>
            <li>Shop Owner App – For laundry shops to manage their services, orders, and profiles.</li>
            <li>Delivery Personnel App – For delivery staff to track and complete pickup and delivery requests.</li>
          </ul>
        </p>

        <h2 style={styles.h2}>User Roles and Responsibilities</h2>
        <hr />
        <h3 style={styles.h3}>Customer Panel</h3>
        <ul style={styles.ul}>
          <li>Customers can browse laundry services based on their location, service reviews, pricing, and delivery options.</li>
          <li>Accurate personal information, including contact details and delivery addresses, must be provided during registration and bookings.</li>
          <li>Customers must ensure their laundry items comply with the shop’s policies (e.g., material restrictions or item types).</li>
          <li>Payments must be made through the app’s secure payment gateway. No cash payments are supported.</li>
          <li>Customers can cancel or modify bookings within a specific time frame (outlined for each shop). Late cancellations may incur a fee.</li>
          <li>Honest and constructive ratings/reviews are encouraged to help maintain service quality.</li>
          <li>In the event of disputes, customers should report issues through the app’s support system.</li>
        </ul>

        <h3 style={styles.h3}>Shop Panel</h3>
        <ul style={styles.ul}>
          <li>Shops must maintain accurate and updated service listings, including pricing, delivery times, and service descriptions.</li>
          <li>Shops are responsible for ensuring timely service fulfillment, adhering to quality standards, and handling items with care.</li>
          <li>Shops must update the app immediately if there are delays or unexpected disruptions in service.</li>
          <li>All updates to service offerings or pricing are subject to admin approval.</li>
          <li>Shops must address customer inquiries and disputes in a professional and timely manner.</li>
          <li>Repeated complaints about poor service may lead to penalties, including suspension from the platform.</li>
        </ul>

        <h3 style={styles.h3}>Delivery Personnel</h3>
        <ul style={styles.ul}>
          <li>Delivery personnel are responsible for the safe and timely pickup and delivery of all laundry items.</li>
          <li>Delivery personnel must adhere to assigned schedules and update the app in case of delays or issues.</li>
          <li>Professional conduct must be maintained when interacting with customers and shops.</li>
          <li>Safety guidelines and delivery protocols outlined by NeatnNext must be strictly followed.</li>
          <li>Repeated poor performance, mishandling of items, or customer complaints may lead to termination of their account.</li>
        </ul>

        <h3 style={styles.h3}>Admin Panel</h3>
        <ul style={styles.ul}>
          <li>Admins oversee platform operations, ensuring compliance with these Terms and Conditions.</li>
          <li>Admins reserve the right to approve or deny updates to service listings or delivery assignments.</li>
          <li>Admins may suspend or terminate accounts for breaches of terms, repeated customer complaints, or fraudulent activities.</li>
          <li>Admins facilitate dispute resolution between customers, shops, and delivery personnel.</li>
          <li>Admins ensure all parties adhere to safety, hygiene, and quality standards.</li>
        </ul>

        <h2 style={styles.h2}>Payments, Refunds, and Cancellations</h2>
        <hr />
        <ul style={styles.ul}>
          <li>All payments are securely processed via third-party gateways. NeatnNext does not store sensitive payment information.</li>
          <li>Refunds are issued only in cases such as service failures, cancellations within the allowed time frame, or incorrect charges.</li>
          <li>Refund eligibility will be determined based on provided evidence, customer feedback, and app records.</li>
          <li>Partial refunds may apply in cases of partially fulfilled services or damaged items.</li>
          <li>Customers must report any service-related issues within 48 hours of delivery for refunds or compensation to be considered.</li>
        </ul>

        <h2 style={styles.h2}>Prohibited Activities</h2>
        <hr />
        <ul style={styles.ul}>
          <li>Posting false reviews, engaging in fraudulent transactions, or misrepresenting service quality.</li>
          <li>Attempting to bypass security measures or disrupting the platform’s functionality.</li>
          <li>Using the platform for illegal purposes, such as laundering items obtained illegally.</li>
          <li>Harassing or threatening other users, shop owners, or delivery personnel.</li>
          <li>Providing inaccurate or misleading information during registration or service bookings.</li>
        </ul>

        <h2 style={styles.h2}>Account Termination</h2>
        <hr />
        <ul style={styles.ul}>
          <li>NeatnNext reserves the right to suspend or terminate accounts for violating these Terms and Conditions.</li>
          <li>Users with terminated accounts may contact support for an appeal. Appeals will be reviewed within 7 business days.</li>
          <li>Accounts inactive for an extended period (e.g., 12 months) may be deactivated. Users will be notified before account deactivation.</li>
        </ul>

        <h2 style={styles.h2}>Governing Law</h2>
        <hr />
        <p style={styles.p}>These terms are governed by the laws of India. Legal disputes shall be resolved in the courts of Sheohar, Bihar - 843329.</p>
      </div>
      {/* <div style={styles.imageContainer}>
        <img src={img} alt="Terms and Conditions" style={styles.image} />
      </div> */}
    </div>
  );
};

export default TermsAndConditions;
