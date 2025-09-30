import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="custom-footer mt-auto py-4">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start mb-3 mb-md-0">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Fiona A. Aladina. All rights reserved.
            </p>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <a
              href="https://www.linkedin.com/in/fiona-aladina"
              target="_blank"
              rel="noopener noreferrer"
              className="me-3"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href="https://github.com/fiona-aladina"
              target="_blank"
              rel="noopener noreferrer"
              className="me-3"
            >
              <i className="bi bi-github"></i>
            </a>
            <a
              href="https://twitter.com/fiona-aladina"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="bi bi-twitter"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
