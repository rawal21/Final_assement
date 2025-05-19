import React from "react";
import img1 from "../../images/subImg11.webp"

const EN50600Compliance = () => {
  return (
    <div className="container text-white small py-4">
      <h2 className="mb-3">EN 50600 Compliance for Data Centers</h2>

      <h5>What is EN 50600 for Data Centers?</h5>
      <p>
        EN 50600 is a comprehensive European standard series that provides detailed requirements and
        recommendations for data center facilities and infrastructures. This internationally recognized
        standard enables a modular approach to data center design, operation, and efficiency.
      </p>
      <p>
        The standard allows organizations to classify different aspects of their data center independently,
        providing greater flexibility and precision in facility assessment.
      </p>

      <div className="text-center my-4">
        <img src={img1} alt="EN 50600 Classification System" className="img-fluid" />
      </div>

      <h5>Why EN 50600 Matters for Data Centers</h5>
      <ul>
        <li>Flexibility: Independent classification of different infrastructure components.</li>
        <li>International Recognition: Widely accepted standard, especially in European markets.</li>
        <li>Comprehensive Coverage: Addresses all critical facility infrastructure elements.</li>
        <li>Risk Management: Structured approach to availability and security requirements.</li>
        <li>Cost Optimization: Ability to target investments where they matter most.</li>
      </ul>

      <h5>EN 50600 Classification System</h5>
      <p>EN 50600 uses a class-based system (1–4) for different facility aspects:</p>
      <ul>
        <li>Power Distribution Systems (Class 1–4)</li>
        <li>Environmental Control Systems (Class 1–4)</li>
        <li>Telecommunications Cabling Infrastructure (Class 1–4)</li>
        <li>Physical Security Systems (Class 1–4)</li>
        <li>Data Center Management and Operation (Class 1–4)</li>
      </ul>
      <p>
        Each class represents increasing levels of availability and functionality, allowing facilities to
        optimize their infrastructure based on specific business needs.
      </p>

      <h5>How CentralAxis Helps with EN 50600 Compliance</h5>
      <ul>
        <li>Component-level monitoring and classification assessment</li>
        <li>Real-time tracking of availability metrics for all infrastructure systems</li>
        <li>Customizable dashboards for different EN 50600 components</li>
        <li>Gap analysis tools for achieving desired classification levels</li>
        <li>Performance monitoring and optimization recommendations</li>
        <li>Documentation support for certification process</li>
        <li>Regular compliance checks and reporting</li>
      </ul>
    </div>
  );
};

export default EN50600Compliance;
