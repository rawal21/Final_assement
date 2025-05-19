import React from 'react';
import img1 from "../../images/subImg8.webp"
import img2 from "../../images/subImg9.webp"
import styles from "./Dccic.module.css"
import v2 from "../../images/videos/subVideo9.webm"

const DCOICompliance = () => {
  return (
    <div className="container text-white small py-5">
      <h2 className="fw-bold">Data Center Optimization Initiative (DCOI) Compliance</h2>

      <h5 className="fw-semibold mt-4">What is DCOI?</h5>
      <p>
        The Data Center Optimization Initiative (DCOI) is a United States federal government mandate designed to improve the efficiency and performance of federal data centers. Established in 2016 and updated in 2019, DCOI aims to optimize and consolidate data centers across federal agencies.
      </p>

      <div className="my-3">
        <img src={img1} alt="DCOI Compliance" className="img-fluid" />
      </div>

      <h5 className="fw-semibold mt-4">Key DCOI Requirements</h5>
      <p>DCOI mandates several key optimization metrics:</p>
      <ul>
        <li>Virtualization: Increase virtual machine-to-server ratio</li>
        <li>Energy Metering: Install energy metering in all data centers</li>
        <li>Power Usage Effectiveness (PUE): Maintain a PUE of 1.5 or lower (1.4 for new data centers)</li>
        <li>Facility Utilization: Improve space utilization and maintain high server utilization</li>
        <li>Cloud Migration: Prioritize cloud-based solutions over on-premises infrastructure</li>
      </ul>

      <table className="table table-bordered  mt-4">
        <thead>
          <tr>
            <th>Metric</th>
            <th>Requirement</th>
            <th>Min/Max Value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Virtualization</td>
            <td>Increase virtual machine-to-server ratio</td>
            <td>Min: 4:1 ratio</td>
          </tr>
          <tr>
            <td>Energy Metering</td>
            <td>Install energy metering in all data centers</td>
            <td>100% of data centers</td>
          </tr>
          <tr>
            <td>Power Usage Effectiveness (PUE)</td>
            <td>Maintain a low PUE</td>
            <td>Max: 1.5 (1.4 for new)</td>
          </tr>
          <tr>
            <td>Facility Utilization</td>
            <td>Improve space and server utilization</td>
            <td>Min: 80% utilization</td>
          </tr>
        </tbody>
      </table>
      <small>Figure 3: Visual representation of key DCOI requirements and targets.</small>

      <h5 className="fw-semibold mt-4">How CentralAxis Facilitates DCOI Compliance</h5>
      <p>
        CentralAxis offers a comprehensive suite of tools and features designed to meet and exceed DCOI requirements, helping agencies optimize their data center operations and achieve compliance:
      </p>
      <ul>
        <li>
          <strong>Power Management and PUE Tracking:</strong>
          <ul>
            <li>Real-time energy consumption monitoring</li>
            <li>Automated PUE calculation and alerts</li>
            <li>PUE forecasting and optimization tools</li>
          </ul>
        </li>
        <li>
          <strong>Virtualization Management:</strong>
          <ul>
            <li>VM-to-server ratio tracking</li>
            <li>Automated VM load balancing and idle VM detection</li>
          </ul>
        </li>
        <li>
          <strong>Energy Metering and Environmental Monitoring:</strong>
          <ul>
            <li>Facility-wide energy metering integration</li>
            <li>Environmental sensors and correlation with energy usage</li>
            <li>Automated energy reporting</li>
          </ul>
        </li>
        <li>
          <strong>Utilization Rate Tracking and Optimization:</strong>
          <ul>
            <li>Real-time server/storage monitoring</li>
            <li>Resource identification and forecasting</li>
          </ul>
        </li>
        <li>
          <strong>Cloud Migration and Hybrid Infrastructure Management:</strong>
          <ul>
            <li>Cloud readiness assessments</li>
            <li>Cost comparison tools</li>
            <li>Unified management interface</li>
          </ul>
        </li>
        <li>
          <strong>Compliance Reporting and Analytics:</strong>
          <ul>
            <li>OMB-compliant report generation</li>
            <li>AI-based predictive compliance tools</li>
          </ul>
        </li>
        <li>
          <strong>Integration and Interoperability:</strong>
          <ul>
            <li>Integration with federal IT systems</li>
            <li>Support for common data formats and APIs</li>
            <li>Compatibility with hybrid environments</li>
          </ul>
        </li>
      </ul>

      <div className="bg-dark p-4 mt-5 rounded">
        <h6 className="fw-semibold">PUE Compliance Dashboard</h6>
        <img src={img2} alt="PUE Compliance Dashboard" className="img-fluid" />
        <p className="mt-2"><small>Example dashboard with DCOI compliance metrics in real time.</small></p>
      </div>
      <div className={`mb-5 position-relative text-center py-5 ${styles.backgroundWrapper}`}>
        {/* Background Video */}
        <video
          className={styles.backgroundVideo}
          src={v2}
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
};

export default DCOICompliance;
