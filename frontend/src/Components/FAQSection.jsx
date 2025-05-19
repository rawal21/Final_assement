import styles from './FAQSection.module.css';
import { Container, Row, Col } from 'react-bootstrap';

export default function FAQSection() {
  const faqs = [
    {
      question: 'Are these solutions applicable to me if I am operating a co-location?',
      answer:
        'Yes! Our solutions are designed to help co-location operators manage their infrastructure more efficiently and effectively.',
    },
    {
      question: 'How do you ensure data privacy and security?',
      answer:
        'We adhere to strict data privacy regulations and implement robust security measures to protect sensitive information.',
    },
    {
      question: 'How does pricing work?',
      answer:
        'Depending on your requirements, we offer flexible pricing models.',
    },
    {
      question: 'Do you provide ongoing support and maintenance for your solutions?',
      answer:
        'Absolutely – we offer comprehensive support and maintenance as well as customization for your needs.',
    },
    {
      question: 'How do I get started?',
      answer:
        'Set up a demo and we\'ll guide you through our offerings and start a trial!',
    },
  ];

  return (
    <section className={` mt-5 ${styles.faqSection}`}>
      <Container>
        <div className="text-center mb-5">
          <div className={styles.faqTag}>FAQs</div>
          <h2 className={styles.title}>Frequently asked questions</h2>
          <p className={styles.subtitle}>
            Find answers to common questions about our solutions.
          </p>
        </div>
        <Row className="gy-4">
          {faqs.map((item, index) => (
            <Col md={6} lg={4} key={index}>
              <div className={styles.faqItem}>
                <h5 className={styles.question}>{item.question}</h5>
                <p className={styles.answer}>{item.answer}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
