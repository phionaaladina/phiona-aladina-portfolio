import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  ArrowUpRight,
  Download,
  ArrowRight,
  Users,
  Target,
  Award,
  Layers
} from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import "../styles/Skills.css";

/* ── 2 Image-Led Full-Width Pillar Cards ── */
const skillsPillars = [
  {
    id: "training",
    number: "01",
    eyebrow: "TECHNICAL EDUCATION & INCLUSION",
    title: "Digital Skills Training",
    accent: "orange",
    image: "/partc.jpg",
    tagline: "Empowering youth, women, PWDs, and refugees through hands-on, outcome-focused digital education.",
    highlight: "1,000+ learners trained across Uganda.",
    skillsList: [
      "Web Development & Programming",
      "Basic ICT & Digital Literacy",
      "Cybersecurity Fundamentals",
      "Digital Marketing",
      "Graphic Design & Creative Media",
      "Cloud Computing",
      "Soft Skills & Career Mentorship",
      "Entrepreneurship & Freelancing"
    ],
    ctaText: "Partner on Training",
    ctaLink: "#contact"
  },
  {
    id: "engineering",
    number: "02",
    eyebrow: "FULL-STACK CODE & IT INFRASTRUCTURE",
    title: "Full Stack Development & IT",
    accent: "blue",
    image: "/itsupport1.jpg",
    tagline: "Building responsive web and mobile apps, REST APIs, and keeping the full tech stack running smoothly.",
    highlight: "5+ production solutions shipped.",
    skillsList: [
      "React & Next.js",
      "Node.js & Python",
      "REST APIs & PostgreSQL/MySQL",
      "Hardware Diagnostics",
      "Network & Lab Setup",
      "Git & CI/CD"
    ],
    ctaText: "Explore Projects",
    ctaLink: "#projects"
  }
];




const impactImages = [
  { image: "/partc.jpg", category: "Training", title: "Interactive Learning" },
  { image: "/cldn.jpg", category: "Mentorship", title: "Youth Tech Mentorship" },
  { image: "/itsupport1.jpg", category: "IT Support", title: "Hardware Support" },
  { image: "/itsupport.jpg", category: "IT Support", title: "System Maintenance" },
  { image: "/partc1.jpg", category: "Training", title: "Celebrating Achievement" },
  { image: "/training.jpg", category: "Training", title: "Community Workshops" }
];

/* ── Counter Hook ── */
function useCountUp(target, duration = 1600, suffix = "") {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let startTime = null;
    const step = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);

  return { ref, display: count + suffix };
}

/* ══════════════════════════════════════════════════════════════ */
const Skills = () => {
  const trained = useCountUp(1000, 1800, "+");
  const outcome = useCountUp(80, 1400, "%");
  const years   = useCountUp(6, 1200, "+");

  return (
    <div className="skills-clean-page">

      {/* ═══════ HEADER / OVERVIEW ═══════ */}
      <section className="skills-hero-clean">
        <Container>
          <ScrollReveal>
            <div className="skills-hero-content">
              <div className="editorial-masthead skills-editorial-masthead">
                <div className="masthead-main-text">
                  <h1 className="masthead-title">
                    Technical Expertise &amp; <span>Real-World Impact</span>
                  </h1>
                  <p className="masthead-sub">
                    Computer scientist and digital skills leader with <strong>6+ years</strong> building production software,
                    training 1,000+ youth, and optimizing IT systems.
                  </p>
                </div>
              </div>
              <div className="editorial-rule skills-editorial-rule" />

              {/* 3 Top Impact Cards */}
              <div className="hero-metrics-grid">
                <div className="metric-box" ref={trained.ref}>
                  <Users size={18} className="metric-icon icon-orange" />
                  <div className="metric-val">{trained.display}</div>
                  <div className="metric-lbl">Youth &amp; Women Trained</div>
                </div>

                <div className="metric-box" ref={outcome.ref}>
                  <Target size={18} className="metric-icon icon-blue" />
                  <div className="metric-val">{outcome.display}</div>
                  <div className="metric-lbl">Job / Venture Outcome</div>
                </div>

                <div className="metric-box" ref={years.ref}>
                  <Award size={18} className="metric-icon icon-gray" />
                  <div className="metric-val">{years.display}</div>
                  <div className="metric-lbl">Years Experience</div>
                </div>
              </div>

              <div className="hero-actions">
                <a
                  href={process.env.PUBLIC_URL + "/aladina_resume.pdf"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-brand-primary"
                  download="Fiona_Aladina_Resume.pdf"
                >
                  <Download size={16} /> Download Resume
                </a>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    window.history.replaceState(null, "", "#contact");
                  }}
                  className="btn-brand-secondary"
                >
                  Contact Me <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* ═══════ 2 CLEAN PILLAR CARDS ═══════ */}
      <section className="skills-pillars-clean">
        <Container>
          <ScrollReveal>
            <div className="section-title-center">
              <h2 className="clean-section-h2">
                <Layers size={22} className="h2-icon" /> Core Skill Pillars
              </h2>
            </div>
          </ScrollReveal>

          <Row className="g-5">
            {skillsPillars.map((pillar, i) => {
              const imageRight = i % 2 !== 0; // alternate: card 0 = img left, card 1 = img right
              return (
                <Col key={pillar.id} xs={12}>
                  <ScrollReveal delay={i * 100}>
                    <div className={`side-pillar-card ${imageRight ? "img-right" : ""}`}>

                      {/* Image Side */}
                      <div className="side-pillar-img-wrap">
                        <img
                          src={process.env.PUBLIC_URL + pillar.image}
                          alt={pillar.title}
                          className="side-pillar-img"
                          loading="lazy"
                        />
                        <div className={`side-pillar-img-badge badge-${pillar.accent}`}>
                          <span className="badge-num">{pillar.number}</span>
                        </div>
                      </div>

                      {/* Text Side */}
                      <div className={`side-pillar-body body-${pillar.accent}`}>
                        <p className="side-pillar-eyebrow">{pillar.eyebrow}</p>
                        <h3 className="side-pillar-title">{pillar.title}</h3>
                        <p className="side-pillar-tagline">{pillar.tagline}</p>
                        <div className={`split-pillar-highlight highlight-${pillar.accent}`}>
                          {pillar.highlight}
                        </div>

                        <div className="side-pillar-divider" />

                        <div className="pillar-skills-label">
                          {pillar.id === "training" ? "Areas I Train:" : "Tech Stack:"}
                        </div>
                        <div className="pillar-skills-tags">
                          {pillar.skillsList.map((skill, sIdx) => (
                            <span key={sIdx} className={`pillar-skill-tag tag-${pillar.accent}`}>
                              {skill}
                            </span>
                          ))}
                        </div>

                        <a
                          href={pillar.ctaLink}
                          onClick={(e) => {
                            e.preventDefault();
                            const targetId = pillar.ctaLink.replace("#", "");
                            document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
                            window.history.replaceState(null, "", pillar.ctaLink);
                          }}
                          className={`pillar-btn-link link-${pillar.accent} side-pillar-cta`}
                        >
                          {pillar.ctaText} <ArrowUpRight size={16} />
                        </a>
                      </div>

                    </div>
                  </ScrollReveal>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>



      {/* ═══════ IMPACT IN ACTION ═══════ */}
      <section className="skills-gallery-section">
        <Container>
          <ScrollReveal>
            <div className="skills-gallery-heading">
              <h2>Impact <span>in Action</span></h2>
              <p>A look at the learning, mentorship, and hands-on technical work behind my programs.</p>
            </div>
          </ScrollReveal>
          <div className="skills-gallery-grid">
            {impactImages.map((item, index) => (
              <ScrollReveal key={item.image} delay={index * 70}>
                <figure className="skills-gallery-card">
                  <img
                    src={process.env.PUBLIC_URL + item.image}
                    alt={item.title}
                    className="skills-gallery-image"
                    loading="lazy"
                  />
                  <figcaption className="skills-gallery-caption">
                    <span>{item.category}</span>
                    <h3>{item.title}</h3>
                  </figcaption>
                </figure>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ═══════ PUNCHY RECRUITER CTA ═══════ */}
      <section className="skills-cta-clean">
        <Container>
          <ScrollReveal>
            <div className="clean-cta-box">
              <div className="cta-content">
                <h2 className="cta-title">Ready to build or scale impactful digital solutions?</h2>
                <p className="cta-desc">
                  Whether you need a full-stack engineer for production software or a technical lead to design and deliver high-impact training programs, I'm ready.
                </p>
                <div className="cta-btn-group">
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                      window.history.replaceState(null, "", "#contact");
                    }}
                    className="btn-cta-blue"
                  >
                    Let's Connect <ArrowRight size={17} />
                  </a>
                  <a
                    href={process.env.PUBLIC_URL + "/aladina_resume.pdf"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-cta-outline"
                    download="Fiona_Aladina_Resume.pdf"
                  >
                    <Download size={16} /> Download Resume
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

    </div>
  );
};

export default Skills;
