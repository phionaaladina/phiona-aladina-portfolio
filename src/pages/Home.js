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
    <section className="home-hero">
      {/* Soft decorative background shapes */}
      <div className="hero-bg-shape hero-bg-shape--one" aria-hidden="true" />
      <div className="hero-bg-shape hero-bg-shape--two" aria-hidden="true" />
      <div className="hero-bg-shape hero-bg-shape--three" aria-hidden="true" />

      <Container className="home-hero-container">
        <div className="hero-grid">
          {/* Text column */}
          <div className="hero-content hero-anim">
            <div className="hero-text">
              <h1 className="hero-main-heading">
                Where we begin <span className="hero-accent">need not determine</span>{" "}
                where we end up.
              </h1>
              <p className="hero-lead">
                I help individuals see beyond their circumstances, build digital skills
                and create better futures through technology and mentorship.
              </p>
            </div>

            <div className="hero-card-actions">
              <a
                href={process.env.PUBLIC_URL + "/aladina_resume.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-btn-primary"
              >
                My Resume <ArrowUpRight size={18} />
              </a>
              <a
                href="#contact"
                onClick={(event) => scrollToSection(event, "contact")}
                className="hero-btn-outline"
              >
                Let's Connect <ArrowRight size={18} />
              </a>
            </div>
          </div>

          {/* Portrait column */}
          <div className="hero-visual hero-anim hero-anim--delay">
            <div className="hero-portrait-ring">
              <img
                src={process.env.PUBLIC_URL + "/newprof.png"}
                alt="Phiona Aladina"
                className="hero-portrait"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Home;
