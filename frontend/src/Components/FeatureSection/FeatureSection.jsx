import styles from "./FeatureSection.module.css";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaEnvelope,
  FaBolt,
  FaNetworkWired,
  FaSmile,
  FaObjectGroup,
} from "react-icons/fa";

export default function FeatureSection() {
  return (
    <section className={`mt-5 mb-5 ${styles.section}`}>
      <Container>
        <Row className="gy-5 align-items-start">
          {/* Left Column */}
          <Col lg={6} className={styles.textColumn}>
            <div className={styles.tag}>Built for Scale</div>
            <h2 className={styles.title}>Dynamic Resource Management</h2>
            <p className={styles.subtitle}>
              Seamlessly expand from racks to data centers. Our system grows with you,
              automatically managing resources across your entire infrastructure.
            </p>
          </Col>

          {/* Right Column */}
          <Col lg={6}>
            {[
              {
                icon: <FaEnvelope className={styles.icon} />,
                title: "Resource Management",
                desc: "See all of your resources in one place, update issues, and dynamically plan your resources.",
              },
              {
                icon: <FaBolt className={styles.icon} />,
                title: "Deployment Automation",
                desc: "From design, sourcing, supply, manufacturing, and deployment – our system automates the entire process.",
              },
              {
                icon: <FaNetworkWired className={styles.icon} />,
                title: "Networking",
                desc: "Ensure that your networking infrastructure is always in place and ready to scale with your deployments.",
              },
              {
                icon: <FaSmile className={styles.icon} />,
                title: "Firmware Versioning",
                desc: "Ensure that your firmware is always up to date and secure with our automated versioning system.",
              },
              {
                icon: <FaObjectGroup className={styles.icon} />,
                title: "Digital Twins",
                desc: "Plan capacity intelligently with our digital twin technology.",
              },
            ].map((item, idx) => (
              <div className={styles.featureCard} key={idx}>
                <div className={styles.iconWrapper}>{item.icon}</div>
                <div>
                  <h5>{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
}
