import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={`${styles.center} container`}>
      <p className={`${styles.btn}`}>Build for AI</p>
      <div>
        <h4 style={{ fontSize: "clamp(1.5rem, 5vw, 2.25rem)", color: "#FAFAFA" }}>
          Modernizing the Digital Backbone
        </h4>
        <p style={{ color: "#71717A", fontSize: "clamp(1rem, 2.5vw, 1.25rem)" }}>
          Data center software (DCIM, BMS and EPMS) has stagnated. We've built a better way
        </p>
      </div>
    </div>
  );
}
