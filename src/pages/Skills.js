import React from "react";
import { Container } from "react-bootstrap";
import { ArrowRight, GraduationCap, Code2, Mic } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import "../styles/Skills.css";

const skillsPillars = [
  {
    id: "training",
    icon: GraduationCap,
    title: "Digital Skills Training",
    accent: "orange",
    description: "Hands-on training in practical digital skills, from everyday tools to workplace software, giving learners the confidence to thrive in a digital world.",
    cta: { label: "Partner on training", target: "contact" }
  },
  {
    id: "engineering",
    icon: Code2,
    title: "Software Development",
    accent: "blue",
    description: "Building digital products that solve real problems, taking ideas from concept to working solutions that are practical, reliable and easy to use.",
    cta: { label: "See my projects", target: "projects" }
  },
  {
    id: "speaking",
    icon: Mic,
    title: "Workshops & Mentorship",
    accent: "orange",
    description: "Workshops, speaking engagements and mentorship that share lived experience and practical insight to help people build confidence and grow.",
    cta: { label: "Book a workshop or talk", target: "contact" }
  }
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
                <h2 className="masthead-title wid-heading section-accent">What I <span>Do</span></h2>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>

    <section className="skills-pillars-clean">
      <Container>
        <div className="wid-grid">
          {skillsPillars.map(({ id, icon: Icon, title, accent, description, cta }, index) => (
            <ScrollReveal key={id} delay={index * 100} once className="wid-cell">
              <article className={`wid-item wid-${accent}`}>
                <span className="wid-icon" aria-hidden="true"><Icon size={34} strokeWidth={1.75} /></span>
                <h3 className="wid-title">{title}</h3>
                <p className="wid-text">{description}</p>
                <a
                  href={`#${cta.target}`}
                  onClick={(event) => scrollToSection(event, cta.target)}
                  className="wid-link"
                >
                  {cta.label} <ArrowRight size={16} />
                </a>
              </article>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA banner with photo — commented out for now. Delete this comment's opening and closing lines to bring it back.
        <ScrollReveal animation="fade-up" once>
          <div className="wid-cta wid-cta--photo">
            <div className="wid-cta-text">
              <h2 className="wid-cta-title">Have an idea or a story to share?</h2>
              <p className="wid-cta-sub">I’d love to hear from you.</p>
              <a
                href="#contact"
                onClick={(event) => scrollToSection(event, "contact")}
                className="wid-cta-btn"
              >
                Start a Conversation <ArrowRight size={18} />
              </a>
            </div>
            <div className="wid-cta-photo">
              <img
                src={process.env.PUBLIC_URL + "/aboutimg.png"}
                alt="Phiona Aladina smiling while working on her laptop"
                loading="lazy"
              />
            </div>
          </div>
        </ScrollReveal>
        */}
      </Container>
    </section>

  </div>
);

export default Skills;
