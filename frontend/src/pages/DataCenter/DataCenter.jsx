
import React from 'react';
import v1 from "../../images/videos/subVideo8.mp4";
import v2 from "../../images/videos/subVideo9.webm";
import styles from "./DataCenter.module.css"
import { Container, Row, Col, Card } from 'react-bootstrap';

function DetaCenter() {

  return (
    <div className="text-white" style={{backgroundColor : 'black'}}>
      {/* Header */}
      <div className=" container text-start py-5 ms-auto">
        <h2>Data Center Planning</h2>
      </div>

      {/* Responsive Video Section */}
      <div className="container mb-5">
        <div className="ratio ratio-16x9">
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
        <p className="text-center mt-2 small">Real-time monitoring and asset management dashboard</p>
      </div>

        <section className="py-5 ">
      <Container>
        <h2 className="text-center text-white mb-5">Key Planning Features</h2>
        
        <Row className="g-4">
          {/* Interactive Rack Selection */}
          <Col md={6} lg={4}>
            <Card className="h-100 border-0 text-white bg-transparent">
              <Card.Body className="p-0">
                <Card.Title className="h5">Interactive Rack Selection</Card.Title>
                <ul className="list-unstyled mt-3">
                  <li className="mb-2 d-flex">
                    <span className="me-2">•</span>
                    <span>Visual 3D modeling of data center layout</span>
                  </li>
                  <li className="mb-2 d-flex">
                    <span className="me-2">•</span>
                    <span>Drag-and-drop rack placement and configuration</span>
                  </li>
                  <li className="d-flex">
                    <span className="me-2">•</span>
                    <span>Real-time updates on space utilization</span>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          
          {/* Pooling Infrastructure Planning */}
          <Col md={6} lg={4}>
            <Card className="h-100 border-0 text-white bg-transparent">
              <Card.Body className="p-0">
                <Card.Title className="h5">Pooling Infrastructure Planning</Card.Title>
                <ul className="list-unstyled mt-3">
                  <li className="mb-2 d-flex">
                    <span className="me-2">•</span>
                    <span>Heat load calculations based on selected equipment</span>
                  </li>
                  <li className="mb-2 d-flex">
                    <span className="me-2">•</span>
                    <span>Cooling system recommendations and sizing</span>
                  </li>
                  <li className="d-flex">
                    <span className="me-2">•</span>
                    <span>Airflow modeling and optimization</span>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          
          {/* Benefits of CentralAxis Planning */}
          <Col md={6} lg={4}>
            <Card className="h-100 border-0 text-white bg-transparent">
              <Card.Body className="p-0">
                <Card.Title className="h5">Benefits of CentralAxis Planning</Card.Title>
                <ul className="list-unstyled mt-3">
                  <li className="mb-2 d-flex">
                    <span className="me-2">•</span>
                    <span>Optimized space utilization and capacity planning</span>
                  </li>
                  <li className="mb-2 d-flex">
                    <span className="me-2">•</span>
                    <span>Reduced time and cost in data center design and deployment</span>
                  </li>
                  <li className="mb-2 d-flex">
                    <span className="me-2">•</span>
                    <span>Improved energy efficiency through precise infrastructure sizing</span>
                  </li>
                  <li className="mb-2 d-flex">
                    <span className="me-2">•</span>
                    <span>Future-proofing through scalable design and growth forecasting</span>
                  </li>
                  <li className="d-flex">
                    <span className="me-2">•</span>
                    <span>Risk mitigation through comprehensive infrastructure analysis</span>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          
          {/* Power Requirement Analysis */}
          <Col md={6} lg={4}>
            <Card className="h-100 border-0 text-white bg-transparent">
              <Card.Body className="p-0">
                <Card.Title className="h5">Power Requirement Analysis</Card.Title>
                <ul className="list-unstyled mt-3">
                  <li className="mb-2 d-flex">
                    <span className="me-2">•</span>
                    <span>Instant power consumption estimates based on rack selection</span>
                  </li>
                  <li className="mb-2 d-flex">
                    <span className="me-2">•</span>
                    <span>Power distribution planning and optimization</span>
                  </li>
                  <li className="d-flex">
                    <span className="me-2">•</span>
                    <span>Capacity planning for UPS and backup systems</span>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
          
          {/* Network Infrastructure Planning */}
          <Col md={6} lg={4}>
            <Card className="h-100 border-0 text-white bg-transparent">
              <Card.Body className="p-0">
                <Card.Title className="h5">Network Infrastructure Planning</Card.Title>
                <ul className="list-unstyled mt-3">
                  <li className="mb-2 d-flex">
                    <span className="me-2">•</span>
                    <span>Automated cable length calculations and routing</span>
                  </li>
                  <li className="mb-2 d-flex">
                    <span className="me-2">•</span>
                    <span>Network topology visualization and optimization</span>
                  </li>
                  <li className="d-flex">
                    <span className="me-2">•</span>
                    <span>Bandwidth requirement forecasting</span>
                  </li>
                </ul>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>


      {/* Call to Action */}
     {/* Call to Action with video background */}
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
}

export default DetaCenter;
