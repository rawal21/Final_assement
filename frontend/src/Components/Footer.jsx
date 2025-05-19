import styles from './Footer.module.css';
import { Container } from 'react-bootstrap';
import logo from '../images/mainlogo.webp'; // Replace with your actual logo path

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container className="d-flex align-items-center py-3">
        <img src={logo} alt="Logo" className={styles.logo} />
        <span className={styles.text}>Copyright © 2025</span>
      </Container>
    </footer>
  );
}
