import React from 'react';
// import './EUCompliance.css'; // Custom CSS for dark theme and styling

const EUCompliance = () => {
  return (
    <div className="container-fluid text-white py-5">
      <div className="container">
        <h2 className="fw-bold display-5">EU Data Centre Regulation 2023/1791 Compliance</h2>
        <h4 className="mt-3">Understanding the EU Data Centre Directive</h4>
        <p className="mt-3">
          The EU Directive 2023/1791 introduces comprehensive reporting requirements for data centres across the European Union, 
          focusing on transparency, energy efficiency, and sustainability of digital infrastructure.
        </p>
        <p>
          This landmark regulation mandates detailed reporting on energy consumption, technical capabilities, and environmental impact for data centres.
        </p>

        <div className="row mt-5">
          {/* Reporting Requirements */}
          <div className="col-md-4 mb-4">
            <div className="p-4 border rounded bg-black h-100">
              <h5 className="fw-bold">Reporting Requirements</h5>
              <ul className="mt-3 list-unstyled">
                <li>• Installed IT Power Demand</li>
                <li>• Total Energy Consumption</li>
                <li>• Water Usage Effectiveness</li>
                <li>• Renewable Energy Consumption</li>
                <li>• Server and Storage Capacity</li>
                <li>• Data Traffic Volumes</li>
                <li>• Waste Heat Reuse</li>
              </ul>
            </div>
          </div>

          {/* Sustainability Indicators */}
          <div className="col-md-4 mb-4">
            <div className="p-4 border rounded bg-black h-100">
              <h5 className="fw-bold">Sustainability Indicators</h5>
              <ul className="mt-3 list-unstyled">
                <li>• Power Usage Effectiveness (PUE)</li>
                <li>• Water Usage Effectiveness (WUE)</li>
                <li>• Energy Reuse Factor (ERF)</li>
                <li>• Renewable Energy Factor (REF)</li>
              </ul>
              <p className="fst-italic mt-2">Measures efficiency and impact</p>
            </div>
          </div>

          {/* CentralAxis Compliance Solutions */}
          <div className="col-md-4 mb-4">
            <div className="p-4 border rounded bg-black h-100">
              <h5 className="fw-bold">CentralAxis Compliance Solutions</h5>
              <ul className="mt-3 list-unstyled">
                <li>• Automated Data Collection</li>
                <li>• Real-time Metric Tracking</li>
                <li>• Comprehensive Reporting</li>
                <li>• Energy Monitoring</li>
                <li>• Renewable Integration Assessment</li>
                <li>• Waste Heat Optimization</li>
                <li>• Compliance Documentation</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EUCompliance;
