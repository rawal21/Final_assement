import styles from './HeroBanner.module.css';

export default function HeroBanner() {
  return (
    <div className=' container mt-5 mb-5'>

    <div className={`container-fluid d-flex justify-content-between  align-items-center ${styles.heroBanner}`}>
      <div>
        <h1 className={styles.title}>We've Built the Future of Data Centers</h1>
        <p className={styles.subtitle}>Contact our team for a demo</p>
      </div>
      <div className="d-flex gap-3 mt-3 mt-lg-0">
        <a href="https://calendly.com/margarita-centralaxis/30min?month=2025-05">

        <button className={styles.primaryBtn}>Set Up a Time</button>
        </a>
        <a href="#">

        <button className={styles.darkBtn}>Learn More</button>
        </a>
      </div>
    </div>
    </div>
  );
}
