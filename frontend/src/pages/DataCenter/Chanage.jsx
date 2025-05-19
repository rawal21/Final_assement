import React from 'react';
import styles from './Chanage.module.css';
import img1 from "../../images/subimag2.png"
import v1 from "../../images/videos/subvideo4.mp4" 

function ChangeManagement() {
  return (
    <div className="bg-black text-white">
      {/* Section 1: Header and Intro */}
      <div className="container text-center py-5">
        <h2>Intelligent Change Management</h2>
        <div className="row mt-5 align-items-center">
          <div className="col-md-6">
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
          <div className="col-md-6 text-start">
            <h5>Change Made Easy</h5>
            <p>
              CentralAxis simplifies change management with a built-in work order system that seamlessly guides tasks from creation to completion.
              Empower your data center team with automated workflows, smart routing, and complete visibility.
            </p>
            <ul>
              <li>Streamlined request-to-complete change process</li>
              <li>Integrated work order creation, approval & fulfillment</li>
              <li>Minimized swivel-chair management and inbox chaos</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Section 2: Visual Work Orders */}
      <div className="container text-center py-5">
        <h4>Visual, Accurate Work Orders</h4>
        <p className="text-light">
          Deliver clarity to every team member with visual work orders that contain everything needed to get the job done right—on time and the first time.
        </p>
        <div className="row align-items-center mt-4">
          <div className="col-md-6 text-start">
            <ul>
              <li>Visual rack elevations and diagrams included</li>
              <li>Smart routing to appropriate teams based on task type</li>
              <li>Complete, accurate working instructions pre-filled</li>
              <li>Work quality ensured through standardized templates</li>
            </ul>
          </div>
          <div className="col-md-6">
            <img src={img1} alt="New Server Rack Installation" className="img-fluid rounded shadow" />
          </div>
        </div>
      </div>

      {/* Section 3: Monitor & Report */}
      <div className="container py-5">
        <h4 className="text-center mb-4">Monitor, Manage & Report Across Systems</h4>
        <div className="row text-start">
          <div className="col-md-4">
            <h6>Unified Change Oversight</h6>
            <ul>
              <li>Real-time status tracking of all open change requests</li>
              <li>Central dashboard for managing work across sites</li>
              <li>Audit trail of changes with detailed timestamps</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h6>ITSM & CMDB Sync</h6>
            <ul>
              <li>Consolidated data shared between DC & IT CMDBs</li>
              <li>Eliminate manual entry with bidirectional syncing</li>
              <li>Supports standard and custom field mappings</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h6>Data Accuracy & Visibility</h6>
            <ul>
              <li>Ensure all stakeholders see the same data</li>
              <li>Improve decision-making with consistent updates</li>
              <li>Reduce errors with automated verification processes</li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section with Video */}
      <div className={` mb-5 position-relative text-center py-5 ${styles.videoBackgroundWrapper}`}>
        <video
          className={styles.videoBackground}
          src={v1}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="position-relative z-1 text-white">
          <h4>Optimize Your Change Management Workflow</h4>
          <p>Empower your data center operations team with intelligent, integrated change workflows.</p>
          <button className="btn btn-light">Schedule a Demo</button>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-muted py-3 small bg-black">
        © 2025 CentralAxis. All rights reserved.
      </footer>
    </div>
  );
}

export default ChangeManagement;
