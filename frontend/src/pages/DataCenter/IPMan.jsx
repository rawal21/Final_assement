import React from 'react';
import video2 from '../../images/videos/subvideo7.mp4'; 
import { Container, Row, Col, Button, Nav, Tab } from 'react-bootstrap';
import styles from './IPMan.module.css';

function IPMan() {
  return (
    <div className=" text-white">
      {/* Section 1: Video left, content right */}
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <video src={video2} autoPlay muted loop playsInline className="w-100 rounded shadow" />
          </div>
          <div className="col-md-6">
            <h4>Effortless Asset Management for Modern Data Centers</h4>
            <p>CentralAxis delivers streamlined data center infrastructure management...</p>
            <ul>
              <li><strong>Automated Discovery:</strong> Identify and catalog your entire infrastructure automatically</li>
              <li><strong>Real-Time Tracking:</strong> Monitor assets with precise location and status information</li>
              <li><strong>Synchronized Data:</strong> Maintain a single source of truth across your organization</li>
              <li><strong>Comprehensive Lifecycle:</strong> Manage assets from procurement to decommissioning</li>
            </ul>
          </div>
        </div>
      </div>

      <section className={`text-light py-5 ${styles.section}`}>
      <Container>
        <h3 className="text-center mb-5">Powerful IPAM Features Built for Scale</h3>
        <Row className="mb-4">
          <Col md={4}>
            <h5>Automated Discovery</h5>
            <ul>
              <li>Continuously scans the network to detect new devices</li>
              <li>Auto-updates inventory when changes are made</li>
              <li>Integrates with switch, router, and DHCP data</li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Visual IP Address Map</h5>
            <ul>
              <li>Interactive UI to browse IP blocks and usage</li>
              <li>Color-coded status indicators for availability</li>
              <li>Subnet visualizations with drill-down views</li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>IP Conflict Prevention</h5>
            <ul>
              <li>Detects duplicate or overlapping assignments instantly</li>
              <li>Alerts and blocks unauthorized changes</li>
              <li>Ensures policy-compliant IP usage</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <h5>DHCP/DNS Integration</h5>
            <ul>
              <li>Integrates with leading DNS & DHCP servers</li>
              <li>Keeps records consistent across network systems</li>
              <li>Real-time updates to leases and name resolutions</li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Role-Based Access & Auditing</h5>
            <ul>
              <li>Granular user permissions by region, site, or subnet</li>
              <li>Detailed logs of every assignment and change</li>
              <li>Compliance-ready reporting and export tools</li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Self-Service & API Access</h5>
            <ul>
              <li>Enable teams to request and reserve IPs via self-service</li>
              <li>APIs for provisioning, querying, and updating IP info</li>
              <li>Integrate with CI/CD and infrastructure-as-code tools</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>

    

      {/* Section 4: Call-to-action with background video */}
      <div className={` mb-5 position-relative text-center py-5 ${styles.videoBackgroundWrapper}`} >
        <video
          className={styles.videoBackground}
          src={video2}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="position-relative z-1 text-white">
          <h4>Take Control of Your IP Infrastructure</h4>
          <p>Discover how CentralAxis IPAM can bring visibility, control, and efficiency to your network.</p>
          <button className="btn btn-light">Schedule a Demo</button>
        </div>
      </div>

      
    
    </div>
  );
}

export default IPMan;
