
import React from 'react';
import v1 from "../../images/videos/subVideo10.mp4";
import styles from "./DigitTwins.module.css"
import { Container, Row, Col } from 'react-bootstrap';

function DigitTwins() {

  return (
    <div className=" container text-white" style={{backgroundColor : 'black'}}>
      {/* Header */}
      <div className="text-start py-5 ms-auto">
        <h2 className='text-center'>Real-Time Digital Twin of Your Data Center
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

    <section className="py-5 text-white">
      <Container>
        {/* Main Heading */}
        <Row className="mb-4">
          <Col lg={8} className="mx-auto text-center">
            <h1 className="display-5 fw-bold mb-3">A Live 3D View of Your Infrastructure</h1>
            <p className="lead">
              The CentralAxis Digital Twin creates a real-time 3D replica of your data center, synced directly with your DCIM environment. From rack-level views to temperature overlays, gain full visibility, faster troubleshooting, and smarter planning — all in one immersive interface.
            </p>
          </Col>
        </Row>

        {/* Divider */}
        <hr className="my-5 bg-white opacity-25" />

        {/* Capabilities Section */}
        <Row>
          <Col className="text-center mb-5">
            <h2 className="fw-bold">Digital Twin Capabilities</h2>
          </Col>
        </Row>

        <Row className="g-4">
          {/* 3D Rack & Room Views */}
          <Col md={6} lg={4}>
            <div className="p-3">
              <h4 className="fw-bold mb-3">3D Rack & Room Views</h4>
              <ul className="list-unstyled">
                <li className="mb-2 d-flex">
                  <span className="me-2">•</span>
                  <span>Full 3D replication of rooms, racks, and assets</span>
                </li>
                <li className="mb-2 d-flex">
                  <span className="me-2">•</span>
                  <span>Pan, zoom, and rotate with intuitive controls</span>
                </li>
                <li className="d-flex">
                  <span className="me-2">•</span>
                  <span>Hover and click for live status and metadata</span>
                </li>
              </ul>
            </div>
          </Col>

          {/* Real-Time Synchronization */}
          <Col md={6} lg={4}>
            <div className="p-3">
              <h4 className="fw-bold mb-3">Real-Time Synchronization</h4>
              <ul className="list-unstyled">
                <li className="mb-2 d-flex">
                  <span className="me-2">•</span>
                  <span>Instantly reflects asset moves, adds, or changes</span>
                </li>
                <li className="mb-2 d-flex">
                  <span className="me-2">•</span>
                  <span>No manual syncing or refresh required</span>
                </li>
                <li className="d-flex">
                  <span className="me-2">•</span>
                  <span>Backed by live DCIM data feeds</span>
                </li>
              </ul>
            </div>
          </Col>

          {/* Live Heat Maps */}
          <Col md={6} lg={4}>
            <div className="p-3">
              <h4 className="fw-bold mb-3">Live Heat Maps</h4>
              <ul className="list-unstyled">
                <li className="mb-2 d-flex">
                  <span className="me-2">•</span>
                  <span>Real-time thermal overlays across aisles and racks</span>
                </li>
                <li className="mb-2 d-flex">
                  <span className="me-2">•</span>
                  <span>Visualize hot spots, airflow, and cooling impact</span>
                </li>
                <li className="d-flex">
                  <span className="me-2">•</span>
                  <span>Integrates with environmental sensors</span>
                </li>
              </ul>
            </div>
          </Col>

          {/* Capacity & Planning Layers */}
          <Col md={6} lg={4}>
            <div className="p-3">
              <h4 className="fw-bold mb-3">Capacity & Planning Layers</h4>
              <ul className="list-unstyled">
                <li className="mb-2 d-flex">
                  <span className="me-2">•</span>
                  <span>View space, power, and cooling utilization</span>
                </li>
                <li className="mb-2 d-flex">
                  <span className="me-2">•</span>
                  <span>Simulate placement scenarios in 3D</span>
                </li>
                <li className="d-flex">
                  <span className="me-2">•</span>
                  <span>Plan for growth with predictive overlays</span>
                </li>
              </ul>
            </div>
          </Col>

          {/* Asset-Level Drilldown */}
          <Col md={6} lg={4}>
            <div className="p-3">
              <h4 className="fw-bold mb-3">Asset-Level Drilldown</h4>
              <ul className="list-unstyled">
                <li className="mb-2 d-flex">
                  <span className="me-2">•</span>
                  <span>Click into any asset to view live status & details</span>
                </li>
                <li className="mb-2 d-flex">
                  <span className="me-2">•</span>
                  <span>Track power draw, temperature, and network links</span>
                </li>
                <li className="d-flex">
                  <span className="me-2">•</span>
                  <span>Overlay alerts, maintenance status, or tickets</span>
                </li>
              </ul>
            </div>
          </Col>

          {/* Custom Visualizations */}
          <Col md={6} lg={4}>
            <div className="p-3">
              <h4 className="fw-bold mb-3">Custom Visualizations</h4>
              <ul className="list-unstyled">
                <li className="mb-2 d-flex">
                  <span className="me-2">•</span>
                  <span>Highlight custom KPIs or SLA zones</span>
                </li>
                <li className="mb-2 d-flex">
                  <span className="me-2">•</span>
                  <span>Toggle layers like cabling, power, network, or alerts</span>
                </li>
                <li className="d-flex">
                  <span className="me-2">•</span>
                  <span>Filter views by team, customer, or site</span>
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
    <h3>Experience Your Data Center Like Never Before
</h3>
    <p>Bring your operations to life with a true digital twin that shows everything in real time — and in 3D.</p>
    <button className="btn btn-light">Schedule a Demo</button>
  </div>
</div>


    </div>
  );
}

export default DigitTwins;
