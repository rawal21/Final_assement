import React from 'react';
// import v1 from '../images/videos/networking-b.mp4';
import video2 from '../../images/videos/subvedio2.mp4'; // Replace with actual path
import img1 from '../../images/subimg1.png'; // Replace with actual image
import styles from './AssetMan.module.css';

function AssetManagement() {
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

      {/* Section 2: Image right, content left */}
      <div className="container py-5">
        <h4 className="text-center mb-5">Automated Discovery & Effortless Onboarding</h4>
        <div className="row align-items-center flex-column-reverse flex-md-row">
          <div className="col-md-6">
            <p>Our intelligent discovery engine automatically identifies and catalogs your entire infrastructure...</p>
            <ul>
              <li><strong>Zero-touch discovery:</strong> Automated scanning detects new devices</li>
              <li><strong>Bulk import capabilities:</strong> Import assets with mapping from spreadsheets</li>
              <li><strong>Intelligent classification:</strong> ML-powered engine populates metadata</li>
            </ul>
          </div>
          <div className="col-md-6 mb-4 mb-md-0">
            <img src={img1} alt="Asset UI" className="img-fluid rounded shadow" />
          </div>
        </div>
      </div>

      {/* Section 3: Features */}
      <div className="container py-5">
        <h4 className="text-center mb-5">Comprehensive DCIM Features</h4>
        <div className="row">
          <div className="col-md-4">
            <h6>Real-Time Asset Tracking</h6>
            <ul>
              <li>Precise location tracking</li>
              <li>Change detection and tracking</li>
              <li>Relationship mapping</li>
              <li>Customizable dashboards</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h6>Synchronized Data Management</h6>
            <ul>
              <li>Integration with CMDB & ITSM</li>
              <li>Real-time sync across systems</li>
              <li>Single source of truth</li>
              <li>Role-based access controls</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h6>Comprehensive Lifecycle Management</h6>
            <ul>
              <li>Procurement to decommissioning</li>
              <li>Warranty and contract management</li>
              <li>Predictive maintenance</li>
              <li>TCO planning</li>
            </ul>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4">
            <h6>Advanced Capacity Planning</h6>
            <ul>
              <li>Real-time space/power/cooling monitoring</li>
              <li>What-if modeling</li>
              <li>AI-driven utilization optimization</li>
              <li>Automated capacity reservation</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h6>Complete Asset Change History</h6>
            <ul>
              <li>Log of all modifications</li>
              <li>Service records & timestamps</li>
              <li>Audit trail of config changes</li>
              <li>Performance trend analysis</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h6>Parent-Child Relationship Tracking</h6>
            <ul>
              <li>Dependency visualization</li>
              <li>Impact analysis</li>
              <li>Service mapping automation</li>
              <li>Root cause identification</li>
            </ul>
          </div>
        </div>
      </div>

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
          <h4>Transform Your Asset Management Today</h4>
          <p>Experience the difference that intelligent, automated asset management can make...</p>
          <button className="btn btn-light">Schedule a Demo</button>
        </div>
      </div>

      
    
    </div>
  );
}

export default AssetManagement;
