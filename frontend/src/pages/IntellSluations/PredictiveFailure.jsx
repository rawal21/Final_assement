
import React from 'react';
import v1 from "../../images/videos/subVideo12.mp4";
import styles from "./PredictiveFailure.module.css"
import { Container, Row, Col } from 'react-bootstrap';

function PredictiveFailure() {

  return (
    <div className=" container text-white" style={{backgroundColor : 'black'}}>
      {/* Header */}
      <div className="text-start py-5 ms-auto">
        <h2 className='text-center'>Predictive Failure Detection & Smart Alerting
</h2>
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
            className="w-60 h-60"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <p className="text-center mt-2 small">Real-time monitoring and asset management dashboard</p>
      </div>

         <section className="py-5">
      <Container>
        {/* Hero Section */}
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <h2 className="display-5 fw-bold mb-3">Real Issues. Zero Noise.</h2>
            <p className="lead">
              CentralAxis monitors your infrastructure for both real-time failures and early warning signals. Our intelligent alerting engine filters out the noise, prioritizes true risk, and integrates with the tools your team already uses — like ServiceNow, Jira, and more.
            </p>
          </Col>
        </Row>

        {/* What Makes Different Section */}
        <Row className="mb-4">
          <Col className="text-center">
            <h3 className="fw-bold">What Makes CentralAxis Different</h3>
          </Col>
        </Row>

        {/* Features Grid */}
        <Row className="g-4">
          {/* Predictive Failure Models */}
          <Col md={6} lg={4}>
            <div className="h-100 p-3">
              <h4 className="fw-bold mb-3">Predictive Failure Models</h4>
              <ul className="list-unstyled">
                <li className="mb-2 d-flex">
                  <span className="me-2">•</span>
                  <span>Analyzes patterns to detect early signs of failure</span>
                </li>
                <li className="mb-2 d-flex">
                  <span className="me-2">•</span>
                  <span>Monitors sensors, power, environment, and asset behavior</span>
                </li>
                <li className="d-flex">
                  <span className="me-2">•</span>
                  <span>Supports proactive maintenance workflows</span>
                </li>
              </ul>
            </div>
          </Col>

          {/* Smart Alert Filtering */}
          <Col md={6} lg={4}>
            <div className="h-100 p-3">
              <h4 className="fw-bold mb-3">Smart Alert Filtering</h4>
              <ul className="list-unstyled">
                <li className="mb-2 d-flex">
                  <span className="me-2">•</span>
                  <span>Reduces false alarms and alert storms</span>
                </li>
                <li className="mb-2 d-flex">
                  <span className="me-2">•</span>
                  <span>Correlates events to avoid duplicates</span>
                </li>
                <li className="d-flex">
                  <span className="me-2">•</span>
                  <span>Escalates only high-risk, confirmed issues</span>
                </li>
              </ul>
            </div>
          </Col>

          {/* Root Cause Correlation */}
          <Col md={6} lg={4}>
            <div className="h-100 p-3">
              <h4 className="fw-bold mb-3">Root Cause Correlation</h4>
              <ul className="list-unstyled">
                <li className="mb-2 d-flex">
                  <span className="me-2">•</span>
                  <span>Links alerts to physical, network, and power dependencies</span>
                </li>
                <li className="mb-2 d-flex">
                  <span className="me-2">•</span>
                  <span>Heatmap-based fault tracing and impact zones</span>
                </li>
                <li className="d-flex">
                  <span className="me-2">•</span>
                  <span>Drives faster incident resolution</span>
                </li>
              </ul>
            </div>
          </Col>

          {/* Ticketing Integration */}
          <Col md={6} lg={4}>
            <div className="h-100 p-3">
              <h4 className="fw-bold mb-3">Ticketing Integration</h4>
              <ul className="list-unstyled">
                <li className="mb-2 d-flex">
                  <span className="me-2">•</span>
                  <span>Auto-create tickets in ServiceNow, Jira, Zendesk, and more</span>
                </li>
                <li className="mb-2 d-flex">
                  <span className="me-2">•</span>
                  <span>Bi-directional sync for ticket status and updates</span>
                </li>
                <li className="d-flex">
                  <span className="me-2">•</span>
                  <span>Custom routing rules by site, team, or asset type</span>
                </li>
              </ul>
            </div>
          </Col>

          {/* Real-Time Dashboards */}
          <Col md={6} lg={4}>
            <div className="h-100 p-3">
              <h4 className="fw-bold mb-3">Real-Time Dashboards</h4>
              <ul className="list-unstyled">
                <li className="mb-2 d-flex">
                  <span className="me-2">•</span>
                  <span>Live view of all active and predicted incidents</span>
                </li>
                <li className="mb-2 d-flex">
                  <span className="me-2">•</span>
                  <span>Group alerts by location, severity, or asset class</span>
                </li>
                <li className="d-flex">
                  <span className="me-2">•</span>
                  <span>Enable operations to act before failures occur</span>
                </li>
              </ul>
            </div>
          </Col>

          {/* Custom Alert Policies */}
          <Col md={6} lg={4}>
            <div className="h-100 p-3">
              <h4 className="fw-bold mb-3">Custom Alert Policies</h4>
              <ul className="list-unstyled">
                <li className="mb-2 d-flex">
                  <span className="me-2">•</span>
                  <span>Set thresholds based on asset, site, or risk profile</span>
                </li>
                <li className="mb-2 d-flex">
                  <span className="me-2">•</span>
                  <span>Integrate business logic into alert rules</span>
                </li>
                <li className="d-flex">
                  <span className="me-2">•</span>
                  <span>Enable silent alerts for observability without noise</span>
                </li>
              </ul>
            </div>
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
    <h3>Spot Problems Early — and Solve Them Fast
</h3>
    <p>Spot Problems Early — and Solve Them Fast</p>
    <button className="btn btn-light">Schedule a Demo</button>
  </div>
</div>


    </div>
  );
}

export default PredictiveFailure;
