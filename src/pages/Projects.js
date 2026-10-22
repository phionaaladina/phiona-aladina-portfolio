import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Github, ExternalLink } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import '../styles/Projects.css';

const scrollToSection = (event, id) => {
  event.preventDefault();
  document.getElementById(id)?.scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
  });
  window.history.replaceState(null, "", `#${id}`);
};

const projects = [
  {
    id: 3,
    num: "01",
    title: "MamaGym Wear 256",
    category: "E-Commerce",
    description: "An e-commerce platform for fitness apparel featuring product management, a shopping cart, checkout, and user and admin dashboards.",
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
    description: "A digital platform for MIYA Initiative, supporting its work to build digital citizens through practical training, ethical technology use, and inclusive communities across Africa.",
    image: "/miya.png",
    tech: ["Next.js", "TailwindCSS", "MySQL", "Node.js"],
    github: "https://miyainitiative.com/",
    live: "https://miyainitiative.com/"
  }
];

const Projects = () => (
  <div className="editorial-page">
    <Container>

      {/* ── Page Masthead (Editorial Layout) ── */}
      <ScrollReveal animation="fade-up">
        <div className="editorial-masthead">
          <div className="masthead-main-text">
            <div className="masthead-eyebrow">Project Portfolio</div>
            <h1 className="masthead-title">Featured <span>Work</span></h1>
            <p className="masthead-sub">
              A selection of software solutions, digital platforms, and community initiatives I’ve contributed to.
            </p>
          </div>

        </div>
      </ScrollReveal>

      <ScrollReveal animation="fade" delay={100}>
        <div className="editorial-rule" />
      </ScrollReveal>

      {/* ── Project List ── */}
      <div className="project-list">
        {projects.map((p, i) => {
          const flip = i % 2 !== 0; // alternate image side
          return (
            <div key={p.id} className="project-row">
              <Row className={`align-items-center g-5 ${flip ? 'flex-row-reverse' : ''}`}>

                {/* Screenshot */}
                <Col lg={6}>
                  <ScrollReveal animation={flip ? "fade-left" : "fade-right"} delay={80}>
                    <div className="project-img-wrap">
                      <img src={process.env.PUBLIC_URL + p.image} alt={`${p.title} website screenshot`} className="project-screenshot" />
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
                  </ScrollReveal>
                </Col>

                {/* Info */}
                <Col lg={6}>
                  <ScrollReveal animation={flip ? "fade-right" : "fade-left"} delay={140}>
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
                  </ScrollReveal>
                </Col>
              </Row>
              {/* Row divider */}
              {i < projects.length - 1 && <div className="project-row-divider" />}
            </div>
          );
        })}
      </div>

      <div className="projects-rule" />

    </Container>
  </div>
);

export default Projects;