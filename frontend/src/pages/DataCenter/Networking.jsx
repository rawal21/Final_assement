import React from 'react';

import styles from './Network.module.css';
import v1 from "../../images/videos/subvideo3.mp4"

function NetworkMonitoring() {
  return (
    <div className="bg-black text-white">
      {/* Title + Circuit List Section */}
      <div className="text-start py-5">
        <h2>Network Monitoring</h2>
        <div className="text-center mt-4">
           <video
                      src={v1}
                      muted
                      autoPlay
                      loop
                      playsInline
                      className="w-100 h-100"
                      style={{ objectFit: 'cover' }}
                    />
          <p className="text-muted mt-2 small">CentralAxis Network Monitoring and Visualization Platform</p>
        </div>
      </div>

      {/* Advanced Solutions */}
      <div className="container py-5">
        <h4 className="text-center mb-4">Advanced Network Monitoring Solutions</h4>
        <p className="text-center text-light">
          CentralAxis provides comprehensive network monitoring with real-time visualization, port mapping, and intelligent connection tracking.
          Gain deep insights into your network topology, traffic patterns, and device connectivity.
        </p>
      </div>

      {/* Capabilities Grid */}
      <div className="container py-5">
        <h5 className="text-center mb-4">Network Monitoring Capabilities</h5>
        <div className="row">
          <div className="col-md-6">
            <h6>Real-time Network Visualization</h6>
            <ul>
              <li>Interactive topology maps with live updates</li>
              <li>Device and connection status monitoring</li>
              <li>Activity tracking and analysis</li>
              <li>Bandwidth heat maps</li>
            </ul>
          </div>
          <div className="col-md-6">
            <h6>Connection Analytics</h6>
            <ul>
              <li>Real-time connection logging</li>
              <li>Port and service discovery</li>
              <li>Traffic protocol analysis</li>
              <li>Connection pattern analysis</li>
            </ul>
          </div>

          <div className="col-md-6 mt-4">
            <h6>Performance Monitoring</h6>
            <ul>
              <li>Latency and throughput metrics</li>
              <li>Port-level stats</li>
              <li>Bottleneck identification</li>
              <li>Threshold alerts</li>
            </ul>
          </div>
          <div className="col-md-6 mt-4">
            <h6>Advanced Diagnostics</h6>
            <ul>
              <li>Health checks</li>
              <li>Packet inspection</li>
              <li>Connection quality monitoring</li>
              <li>Path analysis tools</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Monitoring Benefits */}
      <div className="container py-5">
        <h5 className="text-center mb-4">Monitoring Benefits</h5>
        <div className="row text-center">
          <div className="col-md-4">
            <h6>Visibility</h6>
            <ul className="list-unstyled">
              <li>Topology mapping</li>
              <li>Connection tracking</li>
              <li>Port monitoring</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h6>Analysis</h6>
            <ul className="list-unstyled">
              <li>Traffic pattern insights</li>
              <li>Trend analysis</li>
              <li>Bottleneck detection</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h6>Optimization</h6>
            <ul className="list-unstyled">
              <li>Network tuning</li>
              <li>Issue detection</li>
              <li>Planning insights</li>
            </ul>
          </div>
        </div>
      </div>

      {/* CTA Section with Video Background */}
      <div className={`position-relative text-center py-5 ${styles.videoBackgroundWrapper}`}>
        <video
          className={styles.videoBackground}
          src={v1}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="position-relative z-1 text-white">
          <h4>Try It Today</h4>
          <p>Experience comprehensive network monitoring with CentralAxis</p>
          <button className="btn btn-light">Schedule a Chat</button>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center text-muted py-3 small bg-black">
        © 2025 CentralAxis. All rights reserved.
      </footer>
    </div>
  );
}

export default NetworkMonitoring;
