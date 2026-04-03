import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Linkedin, Github, Twitter, Mail, Phone, MapPin } from "lucide-react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-premium">
      <Container>
        <Row className="gy-4">
          <Col lg={4} md={6}>
            <div className="footer-brand">
              <h3>Fiona A. Aladina</h3>
              <p>
                Software Engineer and Tech Educator dedicated to bridging digital gaps 
                and empowering the next generation of innovators through technology 
                and mentorship.
              </p>
              <div className="footer-socials">
                <a href="https://linkedin.com/in/phiona-aladina" target="_blank" rel="noopener noreferrer">
                  <Linkedin size={18} />
                </a>
                <a href="https://github.com/fiona-aladina" target="_blank" rel="noopener noreferrer">
                  <Github size={18} />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Twitter size={18} />
                </a>
              </div>
            </div>
          </Col>

          <Col lg={2} md={6} className="offset-lg-1">
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
          </Col>

          <Col lg={2} md={6}>
            <div className="footer-links">
              <h4>Resources</h4>
              <ul>
                <li><Link to="/contact">Contact</Link></li>
                <li><a href="/aladina_resume.pdf" target="_blank">Resume</a></li>
              </ul>
            </div>
          </Col>

          <Col lg={3} md={6}>
            <div className="footer-contact">
              <h4>Contact</h4>
              <div className="contact-item">
                <Mail size={16} />
                <a href="mailto:phionaaladina@gmail.com">phionaaladina@gmail.com</a>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <a href="tel:+256773874765">+256 773 874 765</a>
              </div>
              <div className="contact-item">
                <MapPin size={16} />
                <span>Kampala, Uganda</span>
              </div>
            </div>
          </Col>
        </Row>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} <span>Fiona A. Aladina</span>. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
