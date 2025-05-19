import styles from './DemoBanner.module.css';
import { Container, Button } from 'react-bootstrap';

export default function DemoBanner() {
  return (
    <div className={`{styles.bannerWrapper} container mt-5`}>
      <div className={styles.banner}>
        <Container className="text-center text-white d-flex flex-column justify-content-center align-items-center h-100">
          <h2 className={styles.title}>Book a Demo</h2>
          <p className={styles.subtitle}>
            See how CentralAxis can revolutionize your data center operations.
          </p>
          <Button className={styles.ctaBtn}>Schedule Now</Button>
        </Container>
      </div>
    </div>
  );
}
