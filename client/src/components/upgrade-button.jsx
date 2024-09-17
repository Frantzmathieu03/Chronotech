import React, { useState } from 'react';

const UpgradePage = () => {
  const [upgradeSuccessful, setUpgradeSuccessful] = useState(false);

  const handleUpgrade = () => {
    // Simulate a successful upgrade
    setUpgradeSuccessful(true);
  };

  return (
    <div style={styles.page}>
      <header style={styles.header}>
        <h1 style={styles.title}>Upgrade Your Subscription</h1>
        <p style={styles.description}>
          Upgrade to our premium plan and enjoy unlimited task creation, priority support, and more!
        </p>
      </header>
      <section style={styles.benefits}>
        <h2 style={styles.heading}>Benefits of Upgrading</h2>
        <ul style={styles.benefitList}>
          <li style={styles.benefitItem}>Create unlimited tasks</li>
          <li style={styles.benefitItem}>Access premium features</li>
          <li style={styles.benefitItem}>Priority support</li>
        </ul>
      </section>
      <section style={styles.pricing}>
        <h2 style={styles.heading}>Pricing</h2>
        <p style={styles.price}>$9.99/month</p>
      </section>
      <section style={styles.payment}>
        <h2 style={styles.heading}>Secure Payment</h2>
        {upgradeSuccessful ? (
          <p style={styles.successMessage}>Your upgrade was successful!</p>
        ) : (
          <button onClick={handleUpgrade} style={styles.button}>
            Upgrade Now
          </button>
        )}
      </section>
    </div>
  );
};

// Inline styles
const styles = {
  page: {
    padding: '20px',
    maxWidth: '800px',
    margin: 'auto',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#2e2e2e',
    color: '#f0f0f0',
  },
  header: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  title: {
    fontSize: '2em',
    color: '#f0f0f0',
  },
  description: {
    fontSize: '1.2em',
    color: '#d0d0d0',
  },
  benefits: {
    marginBottom: '20px',
  },
  heading: {
    fontSize: '1.5em',
    marginBottom: '10px',
    color: '#f0f0f0',
  },
  benefitList: {
    listStyleType: 'none',
    padding: 0,
  },
  benefitItem: {
    fontSize: '1.1em',
    color: '#c0c0c0',
  },
  pricing: {
    marginBottom: '20px',
  },
  price: {
    fontSize: '1.5em',
    color: '#f0f0f0',
  },
  payment: {
    marginTop: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#333',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    cursor: 'pointer',
  },
  successMessage: {
    fontSize: '1.2em',
    color: '#4caf50',
  },
};

export default UpgradePage;
