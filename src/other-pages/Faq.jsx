import React from "react";

const FAQ = () => {
  const styles = {
    container: {
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      boxSizing: 'border-box',
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
      fontSize: '1.4rem',
      color: '#444',
      marginTop: '20px',
      marginBottom: '10px',
      textAlign: 'left',
   
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
    li: {
      marginBottom: '10px',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.contentContainer}>
        <h1 style={styles.h1}>Frequently Asked Questions (FAQs)</h1>
        <hr /><hr />
        <h2 style={styles.h2}>1. How do I book a laundry service?</h2>
        <p style={styles.p}>
          Download the NeatnNext User App, browse available shops in your area, select services, and confirm your booking.
        </p>

        <h2 style={styles.h2}>2. Can I track my order?</h2>
        <p style={styles.p}>
          Yes, you can track your order status and delivery updates through the app.
        </p>

        <h2 style={styles.h2}>3. What if my laundry is damaged?</h2>
        <p style={styles.p}>
          In case of damages, report the issue within 48 hours through the app. Compensation will be determined based on evidence provided.
        </p>

        <h2 style={styles.h2}>4. How are payments processed?</h2>
        <p style={styles.p}>
          Payments are securely processed via third-party gateways. NeatnNext does not handle or store sensitive payment details.
        </p>

        <h2 style={styles.h2}>5. Can I change my delivery address after placing an order?</h2>
        <p style={styles.p}>
          Delivery address changes may be possible before the shop processes your order. Check the app for options or contact support.
        </p>

        <h2 style={styles.h2}>6. What happens if a shop cancels my order?</h2>
        <p style={styles.p}>
          If a shop cancels your order, you will be notified, and a full refund will be processed to your original payment method.
        </p>

        <h2 style={styles.h2}>7. How do I contact customer support?</h2>
        <p style={styles.p}>
          You can reach us through the following methods:
          <ul style={styles.ul}>
            <li>Email: <a href="mailto:neatnnext@gmail.com">neatnnext@gmail.com</a></li>
            <li>Phone: +91 81022 72557</li>
            <li>In-app chat feature</li>
          </ul>
        </p>
      </div>
    </div>
  );
};

export default FAQ;
