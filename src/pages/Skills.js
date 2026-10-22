import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRight, ArrowUpRight, Download } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import "../styles/Skills.css";

const skillsPillars = [
  {
    id: "training",
    number: "01",
    eyebrow: "01 / TECHNICAL EDUCATION & INCLUSION",
    title: "Digital Skills Training",
    accent: "orange",
    image: "/class.jpeg",
    description: "Designing and delivering practical digital skills programs that help young people and underserved communities participate in the digital economy.",
    highlight: "1,000+ learners trained across Uganda.",
    label: "Key areas",
    areasParagraph: "Web Development & Programming, Basic ICT & Digital Literacy, Cybersecurity Fundamentals, Digital Marketing, Graphic Design & Creative Media, Cloud Computing, Soft Skills & Career Mentorship, and Entrepreneurship & Freelancing.",
    ctaText: "Partner on Training",
    ctaLink: "#contact"
  },
  {
    id: "engineering",
    number: "02",
    eyebrow: "02 / DEVELOPMENT & INFRASTRUCTURE",
    title: "Full-Stack Development & IT",
    accent: "blue",
    image: "/itsupport1.jpg",
    description: "Building responsive digital products, integrating APIs, managing databases, and supporting reliable technology infrastructure.",
    highlight: "5+ solutions built.",
    label: "Key areas",
    areasParagraph: "React & Next.js, Node.js & Python, REST APIs, PostgreSQL & MySQL, Git & CI/CD, Hardware Diagnostics, and Network & Lab Setup.",
    ctaText: "Explore Projects",
    ctaLink: "#projects"
  }
];

const impactImages = [
  { image: "/class.jpeg", title: "Classroom Digital Training" },
  { image: "/cldn.jpg", title: "Youth Tech Mentorship" },
  { image: "/partc.jpg", title: "Hands-on Coding Sessions" },
  { image: "/itsupport1.jpg", title: "Technical Support & Troubleshooting" },
  { image: "/itsupport.jpg", title: "Keeping Learning Labs Running" },
  { image: "/training.jpg", title: "Digital Skills in the Community" }
];

const scrollToSection = (event, id) => {
  event.preventDefault();
  document.getElementById(id)?.scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
  });
  window.history.replaceState(null, "", `#${id}`);
};

const Skills = () => (
  <div className="skills-clean-page">
    <section className="skills-hero-clean">
      <Container>
        <ScrollReveal>
          <div className="skills-hero-content">
            <div className="editorial-masthead skills-editorial-masthead">
              <div className="masthead-main-text">
                <p className="masthead-eyebrow">What I Do</p>
                <h2 className="masthead-title">Technology with <span>purpose</span></h2>
                <p className="masthead-sub">
                  I build useful digital products and create practical learning opportunities that help more people take part in the digital world.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>

    <section className="skills-pillars-clean">
      <Container>
        <Row className="g-5">
          {skillsPillars.map((pillar, index) => {
            const imageRight = index % 2 !== 0;
            const targetId = pillar.ctaLink.slice(1);
            return (
              <Col key={pillar.id} xs={12}>
                <ScrollReveal delay={index * 100}>
                  <article className={`side-pillar-card ${imageRight ? "img-right" : ""}`}>
                    <div className="side-pillar-img-wrap">
                      <img
                        src={process.env.PUBLIC_URL + pillar.image}
                        alt={pillar.title}
                        className={`side-pillar-img ${pillar.id === "training" ? "side-pillar-img-classroom" : ""}`}
                        loading="lazy"
                      />
                      <span className={`side-pillar-img-badge badge-${pillar.accent}`} aria-hidden="true">
                        <span className="badge-num">{pillar.number}</span>
                      </span>
                    </div>

                    <div className={`side-pillar-body body-${pillar.accent}`}>
                      <p className="side-pillar-eyebrow">{pillar.eyebrow}</p>
                      <h3 className="side-pillar-title">{pillar.title}</h3>
                      <p className="side-pillar-tagline">{pillar.description}</p>
                      <p className={`split-pillar-highlight highlight-${pillar.accent}`}>{pillar.highlight}</p>
                      <p className="side-pillar-areas-paragraph">
                        <strong className="areas-lead-label">{pillar.label}: </strong>
                        {pillar.areasParagraph}
                      </p>
                      <a
                        href={pillar.ctaLink}
                        onClick={(event) => scrollToSection(event, targetId)}
                        className={`pillar-btn-link link-${pillar.accent} side-pillar-cta`}
                      >
                        {pillar.ctaText} <ArrowUpRight size={16} />
                      </a>
                    </div>
                  </article>
                </ScrollReveal>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>

    <section className="skills-gallery-section" aria-labelledby="impact-heading">
      <Container>
        <ScrollReveal>
          <div className="skills-gallery-heading">
            <h2 id="impact-heading">Impact <span>in Action</span></h2>
            <p>A look at the learning, mentorship, and hands-on technical work behind my programs.</p>
          </div>
        </ScrollReveal>
        <div className="skills-gallery-grid">
          {impactImages.map((item, index) => (
            <ScrollReveal
              key={item.image}
              delay={index * 60}
              className={`skills-bento-item skills-bento-item-${index + 1}`}
            >
              <figure className="skills-gallery-card">
                <img
                  src={process.env.PUBLIC_URL + item.image}
                  alt={item.title}
                  className="skills-gallery-image"
                  loading="lazy"
                />
              </figure>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>

    <section
      className="skills-cta-full"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/class.jpeg"})`,
      }}
    >
      <div className="skills-cta-overlay" />
      <Container className="skills-cta-container">
        <ScrollReveal>
          <div className="cta-content">
            <h2 className="cta-title">Let’s Build Something Meaningful</h2>
            <p className="cta-desc">
              Whether you need software development expertise or a partner to deliver impactful digital skills programs, let’s explore how we can work together.
            </p>
            <div className="cta-btn-group">
              <a
                href="#contact"
                onClick={(event) => scrollToSection(event, "contact")}
                className="btn-cta-orange"
              >
                Let’s Connect <ArrowRight size={17} />
              </a>
              <a
                href={process.env.PUBLIC_URL + "/aladina_resume.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cta-outline"
              >
                <Download size={16} /> View Resume
              </a>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  </div>
);

export default Skills;
