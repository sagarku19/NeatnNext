import React from 'react';

const Prices = () => {
  const styles = {
    container: {
      padding: '40px',
      backgroundColor: '#f9f9f9',
      textAlign: 'center',
    },
    heading: {
      fontSize: '2.5rem',
      color: '#333',
      marginBottom: '20px',
    },
    priceCard: {
      display: 'inline-block',
      width: '300px',
      margin: '20px',
      padding: '30px',
      borderRadius: '10px',
      backgroundColor: '#fff',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      textAlign: 'center',
    },
    priceTitle: {
      fontSize: '1.8rem',
      color: '#333',
      marginBottom: '15px',
    },
    priceValue: {
      fontSize: '2.5rem',
      color: '#5cb85c',
      marginBottom: '15px',
    },
    priceDescription: {
      fontSize: '1rem',
      color: '#777',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Our Prices</h2>
      <div style={styles.priceCard}>
        <h3 style={styles.priceTitle}>Will be updated soon...</h3>
        <p style={styles.priceValue}>₹xxx</p>
        {/* <p style={styles.priceDescription}>Basic laundry cleaning, quick turnaround.</p> */}
      </div>
      {/* <div style={styles.priceCard}>
        <h3 style={styles.priceTitle}>Premium Service</h3>
        <p style={styles.priceValue}>₹399</p>
        <p style={styles.priceDescription}>Special care, longer service, and delicate items.</p>
      </div>
      <div style={styles.priceCard}>
        <h3 style={styles.priceTitle}>Express Service</h3>
        <p style={styles.priceValue}>₹499</p>
        <p style={styles.priceDescription}>Fast delivery within 24 hours.</p>
      </div> */}
    </div>
  );
};

export default Prices;
