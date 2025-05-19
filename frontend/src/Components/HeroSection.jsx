import React from 'react';
import { Container } from 'react-bootstrap';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <div className='mt-5'>

    <section className={styles.heroSection}>
      <figure className={styles.glow}></figure>

      <Container>
        <h1 className={styles.title}>Data Center Management Software</h1>
        <p className={styles.description}>
          Increase uptime, reduce costs, automate operations, and stay compliant.
        </p>
        
        <p className={styles.supportingText}>
          Built for colocations, data centers, and cloud providers
        </p>
        <a href="https://calendly.com/margarita-centralaxis/30min?month=2025-05">

        <button className={styles.ctaButton}>Request Demo</button>
        </a>
      </Container>
    </section>
    </div>
  );
};

export default HeroSection;
