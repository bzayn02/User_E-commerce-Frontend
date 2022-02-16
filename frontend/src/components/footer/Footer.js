import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './footer.css';

const categories = [
  'Mobile',
  'TVs',
  'Laptops',
  'Computers',
  'Camera',
  'Wearables',
  'Audio & Home Theatres',
];

export const Footer = () => {
  return (
    <div className="footer-text bg-secondary">
      <hr />
      <Container>
        {' '}
        <Row>
          <Col md="4">
            {' '}
            <div>
              <span>Categories</span>
              <ul>
                {categories.map((category, i) => (
                  <li>{category}</li>
                ))}
              </ul>
            </div>
          </Col>
          <Col md="4">
            {' '}
            <div>
              <span>Quick links</span>
              <ul className="type-none">
                {categories.map((category, i) => (
                  <li>{category}</li>
                ))}
              </ul>
            </div>
          </Col>
          <Col md="4">
            {' '}
            <div>
              <span>Our mission</span>
              <p>Quality products, sustainability, premium products.</p>
            </div>
          </Col>
        </Row>
      </Container>
      <hr />
      <Container>
        <div className="text-center">
          {' '}
          <span>
            &copy; {new Date().getFullYear()}, dawn-online-store Developed by
            Bijay{' '}
          </span>
        </div>
      </Container>
    </div>
  );
};
