
import React from 'react';
import v1 from "../../images/videos/subVideo5.mp4";
import styles from "./Monitor.module.css"
import { Container, Row, Col, Button, Nav, Tab } from 'react-bootstrap';

function InsightsAnalytics() {
  return (
    <div className="text-white" style={{backgroundColor : 'black'}}>
      {/* Header */}
      <div className="text-start py-5 ms-auto">
        <h2 className='text-center'>Custom Insights & Analytics</h2>
      </div>

      {/* Responsive Video Section */}
      <div className="container mb-5">
        <div className="ratio ratio-16x9">
          <video
            src={v1}
            muted
            autoPlay
            loop
            playsInline
            className="w-100 h-100"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <p className="text-center mt-2 small">Real-time monitoring and asset management dashboard</p>
      </div>

      <section className={styles.detailsSection}>
        <Container className="text-light py-5">
          <h3 className="text-center mb-4">Unified Visibility Across Your Infrastructure</h3>
          <p className="text-center">
            CentralAxis brings together performance and operational data from all corners of your data center into a single analytics engine.
          </p>
          <Row className="mt-5">
            <Col md={4}>
              <h5>GPU & Memory Utilization</h5>
              <ul>
                <li>Track usage trends over time</li>
                <li>Set alerts for usage anomalies</li>
                <li>Support placement decisions</li>
              </ul>
            </Col>
            <Col md={4}>
              <h5>CPU & Compute Health</h5>
              <ul>
                <li>Monitor processor utilization</li>
                <li>Analyze spikes and dips</li>
                <li>Identify underperforming systems</li>
              </ul>
            </Col>
            <Col md={4}>
              <h5>PDU & UPS Utilization</h5>
              <ul>
                <li>Analyze load distribution</li>
                <li>Track voltage/current trends</li>
                <li>Detect inefficiencies early</li>
              </ul>
            </Col>
          </Row>

          <Row className="mt-4">
            <Col md={4}>
              <h5>Custom Metrics & Sensors</h5>
              <ul>
                <li>Bring telemetry from existing devices</li>
                <li>Build custom dashboards</li>
                <li>Correlate environment with workload</li>
              </ul>
            </Col>
            <Col md={4}>
              <h5>Correlation Heatmaps</h5>
              <ul>
                <li>Visualize metric interdependencies</li>
                <li>Detect root cause patterns</li>
                <li>Enable anomaly detection</li>
              </ul>
            </Col>
            <Col md={4}>
              <h5>Historical Trend Analysis</h5>
              <ul>
                <li>Look back at weeks or months</li>
                <li>Compare performance</li>
                <li>Support resource planning</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call to Action */}
     {/* Call to Action with video background */}
<div className={`mb-5 position-relative text-center py-5 ${styles.backgroundWrapper}`}>
  {/* Background Video */}
  <video
    className={styles.backgroundVideo}
    src={v1}
    autoPlay
    loop
    muted
    playsInline
  />

  {/* Overlay content */}
  <div className="position-relative text-white z-1">
    <h3>Unlock Deep Operational Intelligence
</h3>
    <p>CentralAxis Custom Insights empowers your team to see the whole picture, react faster, and plan smarter.

</p>
    <button className="btn btn-light">Schedule a Demo</button>
  </div>
</div>


    </div>
  );
}

export default InsightsAnalytics;
