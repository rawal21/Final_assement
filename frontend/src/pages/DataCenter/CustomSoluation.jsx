import React from 'react';


function CustomSolutions() {
  return (
    <div className="  bg-black text-white">
      {/* Header */}
      <div className="container text-center py-5">
        <h2>Custom Solutions Built for Your Data Center</h2>
        <p className="text-light fs-5 mt-3">
          Every data center is different — so we build to match.
        </p>
        <p className="text-muted">
          Whether you’re migrating to a new site, mapping legacy networks, or need a custom integration built around your workflow —
          the CentralAxis team can help. We deliver full-service, flexible solutions tailored to your infrastructure, processes, and business goals.
        </p>
      </div>

      {/* What We Can Deliver */}
      <div className="container py-4">
        <h4 className="text-center mb-5">What We Can Deliver</h4>
        <div className="row text-start">
          <div className="col-md-4 mb-4">
            <h6>Data Center Migrations</h6>
            <ul>
              <li>End-to-end asset tracking and transfer coordination</li>
              <li>Dependency mapping and risk analysis</li>
              <li>Visual migration plans with milestone tracking</li>
            </ul>
          </div>
          <div className="col-md-4 mb-4">
            <h6>Legacy Network Mapping</h6>
            <ul>
              <li>Auto-discovery of devices and logical paths</li>
              <li>Visual topology maps across racks and layers</li>
              <li>Integration with existing documentation and diagrams</li>
            </ul>
          </div>
          <div className="col-md-4 mb-4">
            <h6>Custom Dashboards & Interfaces</h6>
            <ul>
              <li>Tailored UIs for different teams or tenants</li>
              <li>Role-based access to specific views and data</li>
              <li>Interactive maps, KPI panels, and visualizations</li>
            </ul>
          </div>
          <div className="col-md-4 mb-4">
            <h6>Workflow Automation</h6>
            <ul>
              <li>Custom ticketing and change processes</li>
              <li>API connectors to ITSM, BMS, CMDB, or HR systems</li>
              <li>Scheduled tasks, triggers, and automation rules</li>
            </ul>
          </div>
          <div className="col-md-4 mb-4">
            <h6>Advanced Reporting & Exports</h6>
            <ul>
              <li>Exportable compliance and audit reports</li>
              <li>Custom data pipelines and historical trend reports</li>
              <li>Data federation from multiple DCIM sources</li>
            </ul>
          </div>
          <div className="col-md-4 mb-4">
            <h6>Tailored Integrations</h6>
            <ul>
              <li>Connect legacy tools with modern APIs</li>
              <li>Bridge gaps between cloud and on-prem environments</li>
              <li>Build middleware or adapters around custom business logic</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className={`text-center py-5 `}>
        <h4>Let’s Build Your Ideal Data Center Solution</h4>
        <p className="text-muted">
          CentralAxis is more than just a platform — it’s a partner. From migration to modernization,
          we collaborate with your team to design and deliver high-impact solutions that scale.
        </p>
        <button className="btn btn-light mt-2">Book a Consultation</button>
      </div>

      {/* Footer */}
      <footer className="text-center text-muted py-3 small bg-black">
        © 2025 CentralAxis. All rights reserved.
      </footer>
    </div>
  );
}

export default CustomSolutions;
