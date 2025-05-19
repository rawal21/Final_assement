import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import img1 from '../../images/subImg13.webp';
import img2 from '../../images/subImg14.webp';

const LEEDComplianceSection = () => {
  return (
    <section className="py-4 text-white">
      <Container fluid="lg">
        {/* Main Title */}
        <Row className="mb-4">
          <Col>
            <h1 className="fw-bold fs-3 text-center text-md-start">LEED Compliance for Data Centers</h1>
          </Col>
        </Row>

        {/* What is LEED */}
        <Row className="mb-4">
          <Col>
            <h2 className="fw-bold fs-4 mb-3">What is LEED?</h2>
            <p className="small">
              LEED (Leadership in Energy and Environmental Design) is a globally recognized green building certification program developed by the U.S. Green Building Council (USGBC). It provides a framework for healthy, highly efficient, and cost-saving green buildings.
            </p>
            <p className="small">
              For data centers, LEED certification demonstrates a commitment to sustainability, energy efficiency, and environmental responsibility.
            </p>
          </Col>
        </Row>

        {/* Why LEED Matters */}
        <Row className="mb-4">
          <Col>
            <h2 className="fw-bold fs-4 mb-3">Why LEED Matters for Data Centers</h2>
            <ul className="small list-unstyled">
              {[
                "Energy Efficiency: LEED-certified data centers consume less energy, reducing operational costs.",
                "Environmental Impact: Certification ensures reduced carbon footprint and resource consumption.",
                "Water Conservation: LEED promotes water-efficient cooling systems and landscaping.",
                "Corporate Responsibility: Demonstrates commitment to sustainability and environmental stewardship.",
                "Market Differentiation: LEED certification can be a competitive advantage in the data center industry."
              ].map((item, index) => (
                <li key={index} className="mb-2 d-flex">
                  <span className="me-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Col>
        </Row>

        {/* LEED Certification Levels */}
        <Row className="mb-4 align-items-center">
          <Col xs={12} md={6}>
            <img src={img1} alt="LEED Levels" className="img-fluid" />
          </Col>
          <Col xs={12} md={6}>
            <h2 className="fw-bold fs-4 mb-3">LEED Certification Levels</h2>
            <p className="small fst-italic">
              Figure 1: LEED certification levels - Certified, Silver, Gold, and Platinum.
            </p>
          </Col>
        </Row>

        {/* Key LEED Credits */}
        <Row className="mb-4">
          <Col>
            <h2 className="fw-bold fs-4 mb-3">Key LEED Credits for Data Centers</h2>
            <p className="small">
              Data centers can earn LEED points in several categories, including:
            </p>
            <ul className="small list-unstyled">
              {[
                "Energy and Atmosphere: Optimize energy performance, use renewable energy",
                "Water Efficiency: Reduce water usage in cooling systems",
                "Materials and Resources: Use sustainable materials, manage waste",
                "Indoor Environmental Quality: Maintain good air quality, thermal comfort",
                "Innovation: Implement cutting-edge green technologies",
                "Regional Priority: Address geographically specific environmental priorities"
              ].map((item, index) => (
                <li key={index} className="mb-2 d-flex">
                  <span className="me-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Col>
        </Row>

        {/* How CentralAxis Helps */}
        <Row className="mb-4">
          <Col>
            <h2 className="fw-bold fs-4 mb-3">How CentralAxis Helps with LEED Compliance</h2>
            <p className="small">
              CentralAxis offers comprehensive solutions to help data centers achieve and maintain LEED certification:
            </p>
            <ul className="small list-unstyled">
              {[
                "Energy monitoring and optimization tools",
                "Water usage tracking and efficiency recommendations",
                "Waste management and recycling program support",
                "Indoor environmental quality monitoring",
                "Automated reporting for LEED documentation",
                "Continuous performance tracking for maintaining certification"
              ].map((item, index) => (
                <li key={index} className="mb-2 d-flex">
                  <span className="me-2">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Col>
        </Row>

        {/* LEED Certification Process */}
        <Row>
          <Col xs={12} md={6}>
            <img src={img2} alt="LEED Process" className="img-fluid" />
          </Col>
          <Col xs={12} md={6}>
            <h2 className="fw-bold fs-4 mb-3">LEED Certification Process</h2>
            <p className="small fst-italic mt-2">
              Figure 2: Operational LEED certification categories for data centers
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LEEDComplianceSection;
