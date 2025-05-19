import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const AiPoweredDic = () => {
  return (
    <div className="py-5  text-white">
      <Container>
        {/* Hero Section */}
        <Row className="mb-5">
          <Col lg={10} className="mx-auto text-center">
            <h1 className="display-5 fw-bold mb-3">AI-Powered Automated Discovery</h1>
            <p className="lead fw-bold mb-4">Discover, Classify, and Sync — Automatically</p>
            <p className="mb-4">
              CentralAxis dramatically reduces the time and effort needed to manage your data center inventory. With AI-powered automated discovery, new assets are detected the moment they come online, classified with accurate metadata, and integrated seamlessly into your DCM — no spreadsheets or manual entry required.
            </p>
          </Col>
        </Row>

        {/* Benefits Section */}
        <Row className="mb-5">
          <Col lg={10} className="mx-auto">
            <h2 className="fw-bold mb-4 text-center">Built to Save Hours — and Prevent Errors</h2>
            
            <Row className="g-4">
              {/* Repeatable Feature Boxes */}
              {[
                {
                  title: "Zero-Touch Asset Detection",
                  items: [
                    "Instant detection of new servers, network gear, PDUs, and more",
                    "No agent install or manual scanning required",
                    "Captures model, location, and serial details automatically",
                  ]
                },
                {
                  title: "AI-Powered Classification",
                  items: [
                    "Auto-fills manufacturer, model, and specs using AI inference",
                    "Cross-references public databases and internal lookup tables",
                    "Normalizes naming and metadata for consistency",
                  ]
                },
                {
                  title: "Dynamic Port & Cable Mapping",
                  items: [
                    "Detects plugged/unplugged ports in real time",
                    "Tracks cable path changes across racks and panels",
                    "Maintains accurate live connection topology",
                  ]
                },
                {
                  title: "Change Detection & Auto-Updates",
                  items: [
                    "Captures infrastructure changes as they happen",
                    "No manual audits or reconciliations needed",
                    "Alert or log any unexpected changes in assets or cabling",
                  ]
                },
                {
                  title: "Bulk Import Friendly",
                  items: [
                    "Ingests spreadsheets, exports, or CMDB data",
                    "Enriches incomplete records automatically",
                    "Supports custom mapping rules and field merging",
                  ]
                },
                {
                  title: "Audit-Ready Accuracy",
                  items: [
                    "Complete history of discovery events",
                    "Track who/what/when of every asset and change",
                    "Ensure compliance with confidence",
                  ]
                },
              ].map((feature, idx) => (
                <Col md={6} lg={4} key={idx}>
                  <div className="h-100 p-4">
                    <h4 className="fw-bold mb-3">{feature.title}</h4>
                    <ul className="list-unstyled">
                      {feature.items.map((point, i) => (
                        <li key={i} className="mb-2 d-flex">
                          <span className="me-2">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        {/* CTA Section */}
        <Row className="mt-5">
          <Col lg={8} className="mx-auto text-center">
            <div className="border-top pt-5">
              <h2 className="fw-bold mb-3">Spend Less Time Managing — and More Time Optimizing</h2>
              <p className="lead mb-4">
                With automated discovery from CentralAxis, you can eliminate hours of manual effort, reduce errors, and maintain real-time visibility across your infrastructure.
              </p>
              <Button style={{ backgroundColor: "white", color: "black" }} size="lg" className="px-4">
                Schedule a Demo
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AiPoweredDic;
