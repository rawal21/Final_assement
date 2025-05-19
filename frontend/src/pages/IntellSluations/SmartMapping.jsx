
import React from 'react';
import v1 from "../../images/videos/subVideo11.mp4";
import styles from "./SmartMapping.module.css"
import { Container, Row, Col } from 'react-bootstrap';

function SmartMapping() {

  return (
    <div className=" container text-white" style={{backgroundColor : 'black'}}>
      {/* Header */}
      <div className="text-start py-5 ms-auto">
        <h2 className='text-center'>End-to-End Power Mapping & Optimization
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
      <h2 class="fw-bold">Complete Visibility from Source to Rack</h2>
      <p class="lead">
        CentralAxis gives you full-stack insight into power distribution — from transformers and UPS systems to busways, branch circuits, PDUs, and individual racks. Visualize your power infrastructure, track real-time utilization, and quickly identify the impact of upstream issues.
      </p>
    </div>

    <h3 class="text-center fw-bold mb-4">Key Capabilities of Power Mapping</h3>

    <div class="row text-start">
      <div class="col-md-4 mb-4">
        <h5 class="fw-semibold">Upstream-to-Downstream Tracing</h5>
        <ul>
          <li>Map power flow from utility feed to rack level</li>
          <li>Track dependencies across UPS, panels, circuits, and PDUs</li>
          <li>Visualize chain of impact during outages or anomalies</li>
        </ul>
      </div>

      <div class="col-md-4 mb-4">
        <h5 class="fw-semibold">Live Circuit & PDU Monitoring</h5>
        <ul>
          <li>Track voltage, current, and power draw in real time</li>
          <li>Set alerts for load thresholds or fluctuations</li>
          <li>Support preventative maintenance with trend data</li>
        </ul>
      </div>

      <div class="col-md-4 mb-4">
        <h5 class="fw-semibold">Busway & Panel Board Visualization</h5>
        <ul>
          <li>View connection points across horizontal and vertical paths</li>
          <li>Identify unused breakers or capacity bottlenecks</li>
          <li>Supports legacy and modern power systems</li>
        </ul>
      </div>

      <div class="col-md-4 mb-4">
        <h5 class="fw-semibold">Impact Analysis & Fault Mapping</h5>
        <ul>
          <li>Quickly trace which racks are affected by an upstream failure</li>
          <li>Visual alerts for any cascading effects</li>
          <li>Supports rapid incident resolution workflows</li>
        </ul>
      </div>

      <div class="col-md-4 mb-4">
        <h5 class="fw-semibold">Energy Optimization Insights</h5>
        <ul>
          <li>Identify underutilized circuits and power zones</li>
          <li>Balance loads and optimize distribution efficiency</li>
          <li>Drive sustainability and cost-reduction goals</li>
        </ul>
      </div>

      <div class="col-md-4 mb-4">
        <h5 class="fw-semibold">Dynamic Power Dashboards</h5>
        <ul>
          <li>Real-time views of power draw by zone, room, or rack</li>
          <li>Custom KPI panels for energy, redundancy, and alerts</li>
          <li>Supports export, API, and role-based access</li>
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
    <h3>Map, Monitor, and Optimize Your Power Infrastructure
</h3>
    <p>CentralAxis brings power data to life — so you can prevent issues, maximize uptime, and run a smarter data center.</p>
    <button className="btn btn-light">Schedule a Demo</button>
  </div>
</div>


    </div>
  );
}

export default SmartMapping;
