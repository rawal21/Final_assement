
import React from 'react';
import v1 from "../../images/videos/subVideo1.mp4";
import styles from "./Monitor.module.css"

function Monitor() {
  const features = {
    "Advanced Performance Monitoring": [
      "Real-time server and application performance tracking with ML-powered anomaly detection",
      "Predictive analytics for capacity planning and resource optimization",
      "Custom alerting thresholds with automated incident response",
      "Historical trend analysis and performance forecasting"
    ],
    "Power & Environmental Monitoring": [
      "Granular power monitoring with per-device energy profiling",
      "Advanced PUE optimization with AI-driven recommendations",
      "3D thermal mapping with predictive cooling analytics",
      "Environmental sensor integration and compliance tracking"
    ],
    "Asset Lifecycle Management": [
      "Automated asset discovery and inventory management",
      "Predictive maintenance scheduling with failure prediction",
      "Warranty and service contract tracking",
      "Asset utilization optimization and replacement planning"
    ],
    "Infrastructure Analytics": [
      "Comprehensive infrastructure health scoring",
      "Cost analysis and optimization recommendations",
      "Capacity trending and growth forecasting",
      "Custom reporting and compliance documentation"
    ]
  };

  const benefits = {
    "Operational Excellence": [
      "Reduce downtime through predictive maintenance",
      "Optimize resource utilization",
      "Streamline maintenance workflows"
    ],
    "Cost Optimization": [
      "Reduce energy consumption by up to 40%",
      "Extend equipment lifespan",
      "Optimize maintenance costs"
    ],
    "Risk Management": [
      "Ensure regulatory compliance",
      "Prevent equipment failures",
      "Enhance security monitoring"
    ]
  };

  return (
    <div className="text-white" style={{backgroundColor : 'black'}}>
      {/* Header */}
      <div className="text-start py-5 ms-auto">
        <h2>Infrastructure Monitoring & Asset Management</h2>
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

      {/* Features Section */}
      <div className="container py-5">
        <h3>Comprehensive Monitoring Features</h3>
        <div className="row">
          {Object.entries(features).map(([title, items], index) => (
            <div className="col-md-6 mt-4" key={index}>
              <h5>{title}</h5>
              <ul>
                {items.map((item, idx) => <li key={idx}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container py-5">
        <h3>Key Benefits</h3>
        <div className="row">
          {Object.entries(benefits).map(([title, items], index) => (
            <div className="col-md-4 mt-3" key={index}>
              <h5>{title}</h5>
              <ul>
                {items.map((item, idx) => <li key={idx}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>

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
    <h3>Try It Today</h3>
    <p>See how CentralAxis can transform your infrastructure management</p>
    <button className="btn btn-light">Schedule a Chat</button>
  </div>
</div>


    </div>
  );
}

export default Monitor;
