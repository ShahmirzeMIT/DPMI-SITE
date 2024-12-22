
const UnlockPotential = () => {
  return (
    <div style={styles.container}>
      <div style={styles.heading}>
        <div style={styles.iconBox}>
          <span style={styles.icon}>⚡</span>
        </div>
        <h1 style={styles.title}>
          <span style={styles.orange}>Unlock</span>{' '}
          <span style={styles.blue}>Your Potential</span>
        </h1>
      </div>
      <p style={styles.subtitle}>
        Slogan for new Approach in Digital Product Management Digital Transformation
      </p>
      <p style={styles.description}>
        Learn from Experts and Enhance Your Skills.
      </p>
      <div style={styles.buttons}>
        <button style={styles.findClass}>Find a class</button>
        <button style={styles.viewPricing}>View Pricing</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center' as const,
   
    padding: '2rem',
    color: '#333',
    borderTop: '1px solid #FF9800',
    marginTop: '10px',
  },
  heading: {
    display: 'inline-flex',
    alignItems: 'center',
    marginBottom: '1rem',
  },
  iconBox: {
    backgroundColor: '#FFF4D6',
    borderRadius: '8px',
    padding: '8px',
    marginRight: '10px',
  },
  icon: {
    fontSize: '1.2rem',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 'bold',
    margin: 0,
  },
  orange: {
    color: '#FF9800',
  },
  blue: {
    color: '#0078FF',
  },
  subtitle: {
    fontSize: '1.2rem',
    margin: '10px 0',
  },
  description: {
    fontSize: '1rem',
    color: '#777',
    marginBottom: '20px',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
  },
  findClass: {
    backgroundColor: '#FF9800',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
  viewPricing: {
    backgroundColor: '#F2F2F2',
    color: '#333',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 20px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
};

export default UnlockPotential;
