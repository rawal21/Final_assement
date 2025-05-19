import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ISOComplianceSection = () => {
  return (
    <section className="py-4 text-white">
      <Container>
        {/* Main Title */}
        <Row className="mb-4">
          <Col>
            <h1 className="fw-bold fs-3">ISO/IEC 30134-2 Compliance for Data Centers</h1>
          </Col>
        </Row>

        {/* What is ISO/IEC 30134-2 */}
        <Row className="mb-4">
          <Col>
            <h2 className="fw-bold fs-4 mb-3">What is ISO/IEC 30134-2?</h2>
            <p className="small">
              ISO/IEC 30134-2 is an international standard that specifies the requirements for determining the Power Usage Effectiveness (PUE) of a data center. It provides a consistent and globally recognized method for calculating and reporting PUE.
            </p>
            <p className="small">
              This standard is part of the ISO/IEC 30134 series, which focuses on data center Key Performance Indicators (KPIs).
            </p>
          </Col>
        </Row>

        {/* Why It Matters */}
        <Row className="mb-4">
          <Col>
            <h2 className="fw-bold fs-4 mb-3">Why ISO/IEC 30134-2 Matters</h2>
            <ul className="small list-unstyled">
              <li className="mb-2 d-flex">
                <span className="me-2">•</span>
                <span>Standardization: Ensures consistent PUE calculation across the industry.</span>
              </li>
              <li className="mb-2 d-flex">
                <span className="me-2">•</span>
                <span>Benchmarking: Allows for fair comparison between different data centers.</span>
              </li>
              <li className="mb-2 d-flex">
                <span className="me-2">•</span>
                <span>Efficiency improvement: Provides a clear metric for tracking and improving energy efficiency.</span>
              </li>
              <li className="mb-2 d-flex">
                <span className="me-2">•</span>
                <span>Regulatory Compliance: Many regions are adopting this standard for energy efficiency regulations.</span>
              </li>
              <li className="d-flex">
                <span className="me-2">•</span>
                <span>Credibility: Demonstrates commitment to recognized international standards.</span>
              </li>
            </ul>
          </Col>
        </Row>

        {/* Key Aspects */}
        <Row className="mb-4">
          <Col>
            <h2 className="fw-bold fs-4 mb-3">Key Aspects of ISO/IEC 30134-2</h2>
            <p className="small mb-3">
              ISO/IEC 30134 series KPIs
            </p>
            <p className="small mb-3">
              80% KPI of Energy Management System
            </p>
            <p className="small mb-3">
              What is new?
            </p>
            <p className="small fst-italic">
              Figure 1. Key aspects and requirements of ISO/IEC 30134-2 standards
            </p>
            <p className="small fst-italic">
              Figure 2. Additional information about ISO/IEC 30134-2
            </p>
          </Col>
        </Row>

        {/* PUE Calculation */}
        <Row className="mb-4">
          <Col>
            <h2 className="fw-bold fs-4 mb-3">PUE Calculation According to ISO/IEC 30134-2</h2>
            <p className="small mb-3">
              The standard defines PUE as:
            </p>
            <p className="small fw-bold mb-4">
              PUE = Total Data Center Energy / IT Equipment Energy
            </p>
            <p className="small mb-3">
              Key considerations in the calculation include:
            </p>
            <ul className="small list-unstyled">
              <li className="mb-2 d-flex">
                <span className="me-2">•</span>
                <span>Clear definition of data center boundaries</span>
              </li>
              <li className="mb-2 d-flex">
                <span className="me-2">•</span>
                <span>Specified measurement points for energy consumption</span>
              </li>
              <li className="mb-2 d-flex">
                <span className="me-2">•</span>
                <span>Guidelines for measurement intervals and data collection</span>
              </li>
              <li className="mb-2 d-flex">
                <span className="me-2">•</span>
                <span>Categorization of PUE measurement (PUE), PUE1, PUE2, PUE3)</span>
              </li>
              <li className="d-flex">
                <span className="me-2">•</span>
                <span>Reporting requirements and data presentation</span>
              </li>
            </ul>
          </Col>
        </Row>

        {/* How CentralAxis Helps */}
        <Row className="mb-4">
          <Col>
            <h2 className="fw-bold fs-4 mb-3">How CentralAxis Helps with ISO/IEC 30134-2 Compliance</h2>
            <p className="small mb-3">
              CentralAxis offers comprehensive solutions to help data centers achieve and maintain compliance with ISO/IEC 30134-2.
            </p>
            <ul className="small list-unstyled">
              <li className="mb-2 d-flex">
                <span className="me-2">•</span>
                <span>Automated PUE calculation according to the standard</span>
              </li>
              <li className="mb-2 d-flex">
                <span className="me-2">•</span>
                <span>Real-time energy monitoring and data collection</span>
              </li>
              <li className="mb-2 d-flex">
                <span className="me-2">•</span>
                <span>Clear visualization of PUE trends and components</span>
              </li>
              <li className="mb-2 d-flex">
                <span className="me-2">•</span>
                <span>Customizable reporting tools for ISO/IEC 30134-2 requirements</span>
              </li>
              <li className="mb-2 d-flex">
                <span className="me-2">•</span>
                <span>Alerting systems for PUE threshold violations</span>
              </li>
              <li className="mb-2 d-flex">
                <span className="me-2">•</span>
                <span>Recommendations for PUE improvement based on collected data</span>
              </li>
              <li className="d-flex">
                <span className="me-2">•</span>
                <span>Integration with other data center management tools</span>
              </li>
            </ul>
          </Col>
        </Row>

        {/* Benefits */}
        <Row>
          <Col>
            <h2 className="fw-bold fs-4 mb-3">Benefits of ISO/IEC 30134-2 Compliance</h2>
            <p className="small mb-3">
              Energy Effectivity
            </p>
            <p className="small mb-3">
              ISO/IEC 30134-2
            </p>
            <p className="small fst-italic">
              Figure 2. Benefits of achieving ISO/IEC 30134-2 compliance for data centers.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ISOComplianceSection;