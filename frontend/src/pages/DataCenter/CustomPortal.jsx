
import React from 'react';
import v1 from "../../images/videos/subVideo6.mp4";
import styles from "./CustomPortal.module.css"
import { Container, Row, Col } from 'react-bootstrap';

function CustomPortal() {

  return (
    <div className=" container text-white" style={{backgroundColor : 'black'}}>
      {/* Header */}
      <div className="text-start py-5 ms-auto">
        <h2 className='text-center'>Colocation Customer Portal
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

          <section className={styles.sectionWrapper}>
      <Container className="text-center text-light py-5">
        <h3 className="mb-3">
          What if your colocation customers had real-time insight — and real control?
        </h3>
        <p className="mb-5">
          CentralAxis gives you a fully integrated, white-labeled customer portal that connects directly to your DCIM data.
          Let customers view power usage, manage access, submit orders, and track historical invoices — all in one unified interface.
        </p>

        <h4 className="mb-4">Key Features for Your Colocation Clients</h4>

        <Row className="text-start">
          <Col md={4} className="mb-4">
            <h5>Live Power Monitoring</h5>
            <ul>
              <li>Real-time visibility into power usage and trends</li>
              <li>Branch circuit monitoring and alerts</li>
              <li>Usage summaries by cabinet or service ID</li>
            </ul>
          </Col>

          <Col md={4} className="mb-4">
            <h5>Access Control</h5>
            <ul>
              <li>Request and schedule access to the facility</li>
              <li>Manage authorized users per customer site</li>
              <li>Track access logs and approvals in one place</li>
            </ul>
          </Col>

          <Col md={4} className="mb-4">
            <h5>Order & Service Cart</h5>
            <ul>
              <li>Request new IP addresses or VLANs</li>
              <li>Order smart hands, hardware, or installs</li>
              <li>Track order history and status updates</li>
            </ul>
          </Col>
        </Row>

        <Row className="text-start">
          <Col md={4} className="mb-4">
            <h5>Invoice History</h5>
            <ul>
              <li>View billing history and itemized charges</li>
              <li>Export invoices for reconciliation</li>
              <li>Optional integration with billing platforms</li>
            </ul>
          </Col>

          <Col md={4} className="mb-4">
            <h5>White-Labeled Experience</h5>
            <ul>
              <li>Custom branding and customer-specific views</li>
              <li>Modular layout based on service entitlements</li>
              <li>Multi-tenant secure architecture</li>
            </ul>
          </Col>

          <Col md={4} className="mb-4">
            <h5>Built-In with CentralAxis</h5>
            <ul>
              <li>No bolt-ons or separate systems needed</li>
              <li>Leverages existing DCIM data and logic</li>
              <li>Rapid deployment and customer onboarding</li>
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
    <h3>Give Your Colocation Customers the Experience They Deserve
</h3>
    <p>With CentralAxis, you can offer a modern, data-rich portal as a built-in part of your colocation service.</p>
    <button className="btn btn-light">Schedule a Demo</button>
  </div>
</div>


    </div>
  );
}

export default CustomPortal;
