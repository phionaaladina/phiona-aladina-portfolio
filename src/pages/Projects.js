import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Github, ExternalLink, ArrowRight, FileText } from 'lucide-react';
import '../styles/Projects.css';

const projects = [
  {
    id: 3,
    num: "01",
    title: "MamaGym Wear 256",
    category: "E-Commerce",
    description: "A full e-commerce platform for selling fitness apparel and accessories, with shopping cart, checkout, and product management. With fully functional admin and user dashboards.",
    image: "/mamagym.png",
    tech: ["Next.js", "TailwindCSS", "MySQL", "Node.js"],
    github: "https://github.com/phionaaladina",
    live: "https://mamagymwear256.com/"
  },
  {
    id: 1,
    num: "02",
    title: "MIYA Initiative Website",
    category: "Web Platform",
    description: "MIYA Initiative builds digital citizens through practical training, ethical technology use, and inclusive community across Africa.",
    image: "/miya.png",
    tech: ["Next.js", "TailwindCSS", "MySQL", "Node.js"],
    github: "https://miyainitiative.com/",
    live: "https://miyainitiative.com/"
  },
  {
    id: 2,
    num: "03",
    title: "HerStr't Foundation",
    category: "Non-Profit Website",
    description: "A platform for a non-profit dedicated to empowering young women and youth, sharing mission, programs, and impact stories.",
    image: "/herstrt.png",
    tech: ["Next.js", "TailwindCSS", "Node.js", "MySQL"],
    github: "https://github.com/phionaaladina",
    live: "http://herstrtfoundation.org/"
  },
  {
    id: 4,
    num: "04",
    title: "UniHub Solutions Uganda",
    category: "Full-Stack E-Commerce",
    description: "A full-stack e-commerce solution with user authentication, secure checkout, and a comprehensive admin dashboard.",
    image: process.env.PUBLIC_URL + "/unipg.png",
    tech: ["React", "Node.js", "Python", "MySQL"],
    github: "https://github.com/phionaaladina",
    live: "https://unihubug.com"
  },
  {
    id: 5,
    num: "05",
    title: "Meraki Action Initiative",
    category: "Non-Profit Website",
    description: "A non-profit website dedicated to empowering young women and youth through education and skill development programs.",
    image: process.env.PUBLIC_URL + "/meraki.png",
    tech: ["WordPress", "Elementor", "PHP", "Security"],
    github: "https://github.com/phionaaladina",
    live: "https://merakiinitiative.org"
  },
  {
    id: 6,
    num: "06",
    title: "Book Management System",
    category: "Web Application",
    description: "An intuitive digital library system for efficient cataloging, real-time searching, and database management operations.",
    image: process.env.PUBLIC_URL + "/bms.png",
    tech: ["JavaScript", "HTML", "CSS", "Local Storage"],
    github: "https://github.com/phionaaladina/BOOK-MANAGEMENT-SYSTEM-JAVASCRIPT-PROJECT",
    live: "https://phionaaladina.github.io/BOOK-MANAGEMENT-SYSTEM-JAVASCRIPT-PROJECT/"
  }
];

const Projects = () => (
  <div className="editorial-page">
    <Container>

      {/* ── Page Masthead (Editorial Layout) ── */}
      <div className="editorial-masthead">
        <div className="masthead-main-text">
          <div className="masthead-eyebrow">Project Portfolio</div>
          <h1 className="masthead-title">Featured <span>Work</span></h1>
          <p className="masthead-sub">
            A curated selection of software solutions, non-profit platforms, and community initiatives.
          </p>
        </div>

        <div className="masthead-ctas">
          <a
            href="/aladina_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="editorial-btn-primary"
          >
             <FileText size={15} /> View Resume
          </a>
          <Link to="/contact" className="editorial-btn-secondary">
             Get In Touch
          </Link>
        </div>
      </div>

      <div className="editorial-rule" />

      {/* ── Project List ── */}
      <div className="project-list">
        {projects.map((p, i) => {
          const flip = i % 2 !== 0; // alternate image side
          return (
            <div key={p.id} className="project-row">
              <Row className={`align-items-center g-5 ${flip ? 'flex-row-reverse' : ''}`}>

                {/* Screenshot */}
                <Col lg={6}>
                  <div className="project-img-wrap">
                    <img src={p.image} alt={p.title} className="project-screenshot" />
                    {/* Number badge */}
                    <div className="project-num-badge">{p.num}</div>
                    {/* Hover overlay */}
                    <div className="project-img-overlay">
                      <div className="overlay-links">
                        <a href={p.github} target="_blank" rel="noopener noreferrer" className="overlay-link">
                          <Github size={18} /> Code
                        </a>
                        {p.live && p.live !== '#' && (
                          <a href={p.live} target="_blank" rel="noopener noreferrer" className="overlay-link overlay-link-pink">
                            <ExternalLink size={18} /> Live Site
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </Col>

                {/* Info */}
                <Col lg={6}>
                  <div className={`project-info ${flip ? 'info-flip' : ''}`}>
                    <span className="project-category">{p.category}</span>
                    <h2 className="project-title">{p.title}</h2>
                    <p className="project-desc">{p.description}</p>
                    <div className="project-tech">
                      {p.tech.map((t, idx) => (
                        <span key={idx} className="tech-pill">{t}</span>
                      ))}
                    </div>
                    <div className="project-actions">
                      {p.live && p.live !== '#' && (
                        <a href={p.live} target="_blank" rel="noopener noreferrer" className="proj-btn-primary">
                          View Live <ExternalLink size={14} />
                        </a>
                      )}
                      <a href={p.github} target="_blank" rel="noopener noreferrer" className="proj-btn-ghost">
                        <Github size={15} /> GitHub
                      </a>
                    </div>
                  </div>
                </Col>
              </Row>
              {/* Row divider */}
              {i < projects.length - 1 && <div className="project-row-divider" />}
            </div>
          );
        })}
      </div>

      <div className="projects-rule" />

      {/* ── Footer CTA ── */}
      <div className="projects-footer-cta">
        <p className="footer-cta-label">Curious about my visual work?</p>
        <Link to="/gallery" className="footer-cta-link">
          Visit the Gallery <ArrowRight size={16} />
        </Link>
      </div>

    </Container>
  </div>
);

export default Projects;