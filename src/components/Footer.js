import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Linkedin, Github, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import "../styles/Footer.css";

const scrollToSection = (event, id) => {
  event.preventDefault();
  document.getElementById(id)?.scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
  });
  window.history.replaceState(null, "", `#${id}`);
};

const Footer = () => {
  return (
    <footer className="footer-premium">
      <Container>
        <Row className="gy-4">
          <Col lg={4} md={6}>
            <ScrollReveal animation="fade-up" delay={50}>
              <div className="footer-brand">
                <h3>Fiona A. Aladina</h3>
                <p>
                  Software Engineer and Tech Educator dedicated to bridging digital gaps
                  and empowering the next generation through technology and mentorship.
                </p>
                <div className="footer-socials">
                  <a href="https://www.linkedin.com/in/phionaaladina" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin size={18} />
                  </a>
                  <a href="https://github.com/phionaaladina" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github size={18} />
                  </a>

                  <a href="https://instagram.com/Its_Aladina" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <Instagram size={18} />
                  </a>
                  <a href="https://www.youtube.com/channel/UCAzqZP6oRDRgInhLlQH3gog" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                    <Youtube size={18} />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          </Col>

          <Col lg={2} md={6} className="offset-lg-1">
            <ScrollReveal animation="fade-up" delay={100}>
              <div className="footer-links">
                <h4>Quick Links</h4>
                <ul>
                  <li>
                    <a
                      href="#home"
                      onClick={(event) => scrollToSection(event, "home")}
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#about"
                      onClick={(event) => scrollToSection(event, "about")}
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="#skills"
                      onClick={(event) => scrollToSection(event, "skills")}
                    >
                      What I Do
                    </a>
                  </li>
                  <li>
                    <a
                      href="#projects"
                      onClick={(event) => scrollToSection(event, "projects")}
                    >
                      Projects
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      onClick={(event) => scrollToSection(event, "contact")}
                    >
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </Col>

          <Col lg={2} md={6}>
            <ScrollReveal animation="fade-up" delay={150}>
              <div className="footer-links">
                <h4>Resources</h4>
                <ul>
                  <li><a href="/aladina_resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
                </ul>
              </div>
            </ScrollReveal>
          </Col>

          <Col lg={3} md={6}>
            <ScrollReveal animation="fade-up" delay={200}>
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
            </ScrollReveal>
          </Col>
        </Row>

        <ScrollReveal animation="fade" delay={220}>
          <div className="footer-bottom">
            <p>&copy; {new Date().getFullYear()} <span>Fiona A. Aladina</span>. All rights reserved.</p>
          </div>
        </ScrollReveal>
      </Container>
    </footer>
  );
};

export default Footer;
