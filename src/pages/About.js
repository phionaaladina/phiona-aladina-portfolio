import React from "react";
import { Container } from "react-bootstrap";
import ScrollReveal from "../components/ScrollReveal";
import {
  ArrowRight,
  ArrowUpRight,
  Stethoscope,
  HeartHandshake,
  Laptop,
  Rocket,
} from "lucide-react";
import "../styles/About.css";

const scrollToSection = (event, id) => {
  event.preventDefault();
  document.getElementById(id)?.scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
  });
  window.history.replaceState(null, "", `#${id}`);
};

const journey = [
  {
    icon: Stethoscope,
    title: "The Dream",
    text: "Aspiring doctor growing up. Dropped out of medical school due to financial challenges. My parents left.",
  },
  {
    icon: HeartHandshake,
    title: "The Hustle",
    text: "Cleaner · Beautician · Nanny. Supporting myself and four siblings. Overwhelmed, depressed, suicidal.",
  },
  {
    icon: Laptop,
    title: "The Turning Point",
    text: "Discovered technology, became a digital skills trainer and studied Computer Science on scholarship. Went through counselling.",
  },
  {
    icon: Rocket,
    title: "Today",
    text: "Passionate tech trainer · Software developer · Mentor. 1,000+ young people trained and optimistic about the future.",
  },
];

const About = () => (
  <section className="about-section" aria-labelledby="about-heading">
    <Container>
      <ScrollReveal animation="fade-up" once>
        <span className="about-eyebrow">About Me</span>
        <h2 id="about-heading" className="about-heading section-accent">
          My <span className="about-name">Journey</span>
        </h2>
      </ScrollReveal>

      {/* ── Horizontal timeline (vertical on mobile) ── */}
      <ol className="tl-list">
        {journey.map(({ icon: Icon, title, text }, i) => (
          <ScrollReveal
            as="li"
            animation="fade-up"
            delay={i * 120}
            once
            key={title}
            className={[
              "tl-item",
              i % 2 === 0 ? "tl-item--title-top" : "tl-item--title-bottom",
              i === journey.length - 1 ? "tl-item--now" : "",
            ].join(" ")}
          >
            <div className="tl-head">
              <span className="tl-num">0{i + 1}</span>
              <h3 className="tl-title">{title}</h3>
            </div>

            <div className="tl-node">
              <span className="tl-icon"><Icon size={22} /></span>
            </div>

            <div className="tl-detail">
              <span className="tl-stem" aria-hidden="true" />
              <p className="tl-text">{text}</p>
            </div>
          </ScrollReveal>
        ))}
      </ol>

      {/* ── Mission statement ─────────────────────── */}
      <ScrollReveal animation="fade-up" once>
        <div className="about-mission">
          <p className="about-mission-text">
            Where we begin <span className="about-mission-script">need not determine</span>{" "}
            where we end up.
          </p>
          <p className="about-mission-sub">
            I bridge digital gaps, equip people with practical skills and create opportunities
            for them to realise their potential.
          </p>
          <div className="about-cta-row">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className="about-cta-btn"
            >
              Let's Work Together <ArrowRight size={16} />
            </a>
            <a
              href={process.env.PUBLIC_URL + "/aladina_resume.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              className="about-cta-ghost"
            >
              My Resume <ArrowUpRight size={15} />
            </a>
          </div>
        </div>
      </ScrollReveal>
    </Container>
  </section>
);

export default About;
