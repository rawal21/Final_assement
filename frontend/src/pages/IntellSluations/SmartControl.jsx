
import React from 'react';
import v1 from "../../images/videos/subVideo13.mp4";
import styles from "./SmartControl.module.css"
import { Container, Row, Col } from 'react-bootstrap';

function SmartControl() {

  return (
    <div className=" container text-white" style={{backgroundColor : 'black'}}>
      {/* Header */}
      <div className="text-start py-5 ms-auto">
        <h2 className='text-center'>Smart Control Systems for Modern Data Centers
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

        <section class="text-white py-5">
  <div class="container">
    <div class="text-center mb-5">
      <h2 class="fw-bold">Take Control — From Anywhere</h2>
      <p class="lead">
        With CentralAxis Smart Control Systems, you get full command over key infrastructure components — remotely, securely, and intelligently. From power cycling and access control to environmental automation and service requests, every control is built to reduce response times and operational overhead.
      </p>
    </div>

    <h3 class="text-center fw-bold mb-4">Key Smart Control Capabilities</h3>

    <div class="row text-start">
      <div class="col-md-4 mb-4">
        <h5 class="fw-semibold">Remote Power Control</h5>
        <ul>
          <li>Power cycle servers and racks remotely</li>
          <li>Integrate with smart PDUs and UPS systems</li>
          <li>Enforce safety protocols and approval workflows</li>
        </ul>
      </div>

      <div class="col-md-4 mb-4">
        <h5 class="fw-semibold">Environmental Automation</h5>
        <ul>
          <li>Automate cooling adjustments based on sensor data</li>
          <li>Link temperature/humidity changes to control actions</li>
          <li>Improve efficiency while avoiding human error</li>
        </ul>
      </div>

      <div class="col-md-4 mb-4">
        <h5 class="fw-semibold">Access & Entry Management</h5>
        <ul>
          <li>Control badge access by schedule, role, or request</li>
          <li>Digitally authorize visitors and on-site work</li>
          <li>Integrates with facility security systems</li>
        </ul>
      </div>

      <div class="col-md-4 mb-4">
        <h5 class="fw-semibold">Policy-Based Workflows</h5>
        <ul>
          <li>Automate tasks based on thresholds or ticket status</li>
          <li>Trigger control actions from ITSM or CMDB events</li>
          <li>Audit every control action with logs and approvals</li>
        </ul>
      </div>

      <div class="col-md-4 mb-4">
        <h5 class="fw-semibold">Integration with Smart Hands</h5>
        <ul>
          <li>Assign tasks to on-site teams from the control portal</li>
          <li>Link control actions to change tickets or service orders</li>
          <li>Track and verify execution in real time</li>
        </ul>
      </div>

      <div class="col-md-4 mb-4">
        <h5 class="fw-semibold">Secure Control Infrastructure</h5>
        <ul>
          <li>Encrypted, role-based access to all control features</li>
          <li>Multi-factor control approval for sensitive operations</li>
          <li>Detailed audit trail for compliance and accountability</li>
        </ul>
      </div>
    </div>
  </div>
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
    <h3>Control Smarter. Operate Safer.
</h3>
    <p>CentralAxis brings smart control to every layer of your data center — with the precision, speed, and accountability you need to operate at scale.</p>
    <button className="btn btn-light">Schedule a Demo</button>
  </div>
</div>


    </div>
  );
}

export default SmartControl;
