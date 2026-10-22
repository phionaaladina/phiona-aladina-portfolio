import React from "react";
import { Container } from "react-bootstrap";
import ScrollReveal from "../components/ScrollReveal";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import "../styles/About.css";

const scrollToSection = (event, id) => {
  event.preventDefault();
  document.getElementById(id)?.scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
  });
  window.history.replaceState(null, "", `#${id}`);
};

const About = () => (
  <section className="about-section" aria-labelledby="about-heading">
    <Container>
      <ScrollReveal animation="fade-up">
        <div className="about-wrap">

          {/* Text */}
          <div className="about-text-col">
            <h2 id="about-heading" className="about-greeting">
              Hello,
            </h2>

            <p>
              I'm <strong>Aladina</strong>, a Software Engineer, Digital Skills Educator,
              and Mentor based in Kampala, Uganda.
            </p>

            <p>
              I build practical digital solutions and use technology and education to
              create opportunities for others.
            </p>

            <p>
              Growing up I have always wanted to be a Doctor. However, due to financial challenges
              I  to leave medical school. A decade ago, as a first born, I found myself taking on jobs as a cleaner, beautician,
              and nanny to support my four siblings and myself. Discovering Computer
              Science opened a new path I hadn't imagined. My journey taught me that
              where we begin, or the circumstances we face,{" "}
              <strong>need not determine where we end up.</strong>
            </p>

            <p>
              Today, I've trained and mentored{" "}
              <strong className="about-highlight">1,000+ young women, youth, and children</strong>{" "}
              across Uganda in digital literacy, coding, life skills, and entrepreneurship.
            </p>

            <p>
              My mission is to bridge digital gaps, nurture creativity, and create
              opportunities for people to discover their potential and change the
              trajectory of their lives, regardless of their circumstances.
            </p>

            {/* CTA */}
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

          {/* Photo */}
          <div className="about-photo-col">
            <img
              src={process.env.PUBLIC_URL + "/sitting.jpeg"}
              alt="Fiona A. Aladina, Software Engineer and Tech Educator"
              className="about-photo"
              loading="lazy"
            />
          </div>

        </div>
      </ScrollReveal>
    </Container>
  </section>
);

export default About;
