import React from 'react';
import img1 from "../../images/subImg3.webp";
import img2 from "../../images/subImg4.webp";
import img3 from "../../images/subImg5.webp";
import styles from "./DataCenter.module.css";
import v2 from "../../images/videos/subVideo9.webm";

const DataCenterEfficiency = () => {
  return (
    <section className="text-white py-5">
      <div className="container">
        <h2 className="fw-bold mb-4">Understanding Data Center Efficiency Metrics</h2>

        <h4 className="fw-semibold">Power Usage Effectiveness (PUE)</h4>
        <p>
          Power Usage Effectiveness (PUE) is the most widely adopted metric for data center energy efficiency.
          Developed by The Green Grid, PUE measures the ratio of total facility energy consumption to IT equipment
          energy consumption. A perfect PUE score would be 1.0, indicating all power is used by IT equipment.
        </p>

        <div className={`mb-5 ${styles.responsiveImageWrapper}`}>
          <img src={img1} alt="PUE Compliance Dashboard" className={styles.responsiveImage} />
        </div>

        <h5 className="fw-semibold">Data Center Performance per Energy (DPPE)</h5>
        <p>
          DPPE is a comprehensive metric that evaluates data center energy efficiency through four key components:
        </p>
        <ul>
          <li>IT Equipment Energy Efficiency (ITEE)</li>
          <li>IT Equipment Utilization (ITEU)</li>
          <li>Facility Energy Efficiency (FEE)</li>
          <li>Green Energy Coefficient (GEC)</li>
        </ul>

        <div className={`mb-5 ${styles.responsiveImageWrapper}`}>
          <img src={img2} alt="DPPE Chart" className={styles.responsiveImage} />
        </div>

        <h5 className="fw-semibold">Data Center Energy Productivity (DCEP)</h5>
        <p>
          DCEP measures the useful work produced by a data center divided by the total energy consumed to produce that
          work. This metric provides a more nuanced view of data center efficiency by focusing on productivity rather
          than just power consumption.
        </p>

        <strong>Measuring Useful Work:</strong>
        <ul>
          <li>Task completion metrics</li>
          <li>Network throughput</li>
          <li>Storage utilization</li>
          <li>Computing cycles completed</li>
        </ul>

        <strong>Energy Assessment:</strong>
        <ul>
          <li>Total facility energy consumption</li>
          <li>Time-based energy analysis</li>
          <li>Workload-specific energy tracking</li>
          <li>Environmental impact considerations</li>
        </ul>

        <div className={`mb-5 ${styles.responsiveImageWrapper}`}>
          <img src={img3} alt="DCEP Chart" className={styles.responsiveImage} />
        </div>

        <h5 className="fw-semibold">How CentralAxis Tracks These Metrics</h5>
        <p><strong>PUE Monitoring:</strong></p>
        <ul>
          <li>Real-time PUE calculation and tracking</li>
          <li>Automated alerts for PUE threshold violations</li>
          <li>Historical PUE trend analysis</li>
          <li>Cooling efficiency optimization recommendations</li>
        </ul>

        <p><strong>DPPE Management:</strong></p>
        <ul>
          <li>Component-level DPPE tracking</li>
          <li>Green energy usage monitoring</li>
          <li>IT equipment efficiency analysis</li>
          <li>Facility optimization suggestions</li>
        </ul>

        <p><strong>DCEP Analysis:</strong></p>
        <ul>
          <li>Workload productivity measurement</li>
          <li>Energy consumption correlation</li>
          <li>Performance optimization recommendations</li>
          <li>Custom DCEP reporting and analytics</li>
        </ul>

        <div className={`mb-5 position-relative text-center py-5 ${styles.backgroundWrapper}`}>
          {/* Background Video */}
          <video
            className={`${styles.backgroundVideo} w-100 h-100`}
            src={v2}
            autoPlay
            loop
            muted
            playsInline
          />

          {/* Overlay content */}
          <div className="position-relative text-white z-1 px-3">
            <h3>Optimize Your Data Center Efficiency</h3>
            <p>
              Ready to improve your data center's efficiency metrics? Let CentralAxis help you implement comprehensive
              monitoring and optimization
            </p>
            <p>strategies for PUE, DPPE, and DCEP.</p>
            <button className="btn btn-light">Schedule a Chat</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataCenterEfficiency;
