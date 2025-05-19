import React from 'react';
import img1 from "../../images/subImg6.webp"
import img2 from "../../images/subImg7.webp"

const EPDSustainability = () => {
  return (
    <div className="container text-white small py-5">
      <h2 className="fw-bold">Environmental Product Declarations (EPDs) for Data Center Sustainability</h2>

      <h5 className="fw-semibold mt-4">What are EPDs?</h5>
      <p>
        Environmental Product Declarations (EPDs) are standardized documents that provide transparent and comparable information about the life-cycle environmental impact of products. For data centers, EPDs can cover various components, from servers and networking equipment to cooling systems and building materials.
      </p>
      <p>
        EPDs are based on Life Cycle Assessments (LCAs) and provide quantified environmental information on the entire lifecycle of a product, from raw material extraction to end-of-life disposal or recycling.
      </p>

      <h5 className="fw-semibold mt-4">Why EPDs Matter for Data Centers</h5>
      <ul>
        <li>Transparency: EPDs provide clear, verified environmental impact data.</li>
        <li>Informed Decision-Making: Helps in choosing more sustainable products and technologies.</li>
        <li>Regulatory Compliance: Supports meeting environmental regulations and standards.</li>
        <li>Green Certifications: Facilitates achieving certifications like LEED or BREEAM.</li>
        <li>Competitive Advantage: Demonstrates commitment to sustainability to clients and stakeholders.</li>
      </ul>

      <h5 className="fw-semibold mt-4">EPD Implementation in Data Centers</h5>
      <div className="row">
        <div className="col-md-6 mb-3">
          <img src={img1} alt="EPD Preparation Stages" className="img-fluid" />
          <small className="d-block mt-1">Figure 1: Life cycle stages covered in an EPD.</small>
        </div>
        <div className="col-md-6 mb-3">
          <img src={img2}alt="Impact Categories" className="img-fluid" />
          <small className="d-block mt-1">Figure 2: Environmental impact categories typically included in EPDs.</small>
        </div>
      </div>

      <h5 className="fw-semibold mt-4">How CentralAxis Supports EPD Implementation</h5>
      <p>
        CentralAxis offers comprehensive solutions to help data centers implement and leverage EPDs:
      </p>
      <ul>
        <li>EPD database integration for easy access to product environmental data</li>
        <li>LCA tools for conducting assessments on data center components</li>
        <li>Reporting features to generate EPD-compliant documentation</li>
        <li>Analysis tools to compare products based on their environmental impact</li>
        <li>Integration with green building certification processes</li>
      </ul>

      <div className=" p-4 mt-5 rounded">
        <h6 className="fw-semibold">Embrace Sustainability with EPD-Driven Insights</h6>
        <p>
          Ready to enhance your data center's environmental performance? Discover how CentralAxis can help you leverage EPDs for sustainable growth and operational excellence.
        </p>
        <p><a href="#" className="text-white text-decoration-underline">Schedule a Demo</a></p>
      </div>
    </div>
  );
};

export default EPDSustainability;
