import React from "react";
import { Container } from "react-bootstrap";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import "../styles/Home.css";

const scrollToSection = (event, id) => {
  event.preventDefault();
  document.getElementById(id)?.scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
  });
  window.history.replaceState(null, "", `#${id}`);
};

const Home = () => {
  return (
    <section
      className="home-hero"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + "/aladinafiona.jpeg"})`
      }}
    >
      {/* Background cinematic overlay */}
      <div className="hero-overlay" />

      <Container className="home-hero-container">
        {/* Text sits directly over the soft image overlay for a more connected hero. */}
        <div className="hero-frosted-card hero-anim">
          <h1 className="hero-main-heading">
            I build digital solutions and empower young people to shape their futures through technology.
          </h1>

          {/* Proof Stats */}
          <div className="hero-card-stats">
            <div className="card-stat-item">
              <strong className="card-stat-number">1,000+</strong>
              <span className="card-stat-label">People Trained</span>
            </div>
            <div className="card-stat-divider" />
            <div className="card-stat-item">
              <strong className="card-stat-number">6+</strong>
              <span className="card-stat-label">Years in Tech</span>
            </div>
            <div className="card-stat-divider" />
            <div className="card-stat-item">
              <strong className="card-stat-number">5+</strong>
              <span className="card-stat-label">Solutions Built</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="hero-card-actions">
            <a
              href={process.env.PUBLIC_URL + "/aladina_resume.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn-primary"
            >
              My Resume <ArrowUpRight size={16} />
            </a>
            <a
              href="#contact"
              onClick={(event) => scrollToSection(event, "contact")}
              className="hero-btn-outline"
            >
              Let's Connect <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Home;