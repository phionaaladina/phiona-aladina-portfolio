import React from "react";
import { Container } from "react-bootstrap";
import { Linkedin, Github, Instagram, Youtube } from "lucide-react";
import "../styles/Footer.css";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "What I Do" },
  { id: "impact", label: "Impact" },
  { id: "projects", label: "Projects" },
  { id: "resume", label: "Resume", href: process.env.PUBLIC_URL + "/aladina_resume.pdf" },
];

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/phionaaladina" },
  { icon: Github, label: "GitHub", href: "https://github.com/phionaaladina" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/Its_Aladina" },
  { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/channel/UCAzqZP6oRDRgInhLlQH3gog" },
];

const scrollToSection = (event, id) => {
  event.preventDefault();
  // On pages without this section (e.g. Learner Stories), go to it on the home page
  if (!document.getElementById(id)) {
    window.location.href = `/#${id}`;
    return;
  }
  document.getElementById(id).scrollIntoView({
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
  });
  window.history.replaceState(null, "", `#${id}`);
};

const Footer = () => (
  <footer className="ft">
    <Container>
      <div className="ft-top">
        <div className="ft-brand">
          <a href="#home" onClick={(e) => scrollToSection(e, "home")} className="ft-logo">
            Aladina
          </a>
          <p className="ft-tagline">Where we begin need not determine where we end up.</p>
        </div>

        <nav className="ft-nav" aria-label="Footer">
          {links.map(({ id, label, href }) =>
            href ? (
              <a key={id} href={href} target="_blank" rel="noopener noreferrer">{label}</a>
            ) : (
              <a key={id} href={`#${id}`} onClick={(e) => scrollToSection(e, id)}>{label}</a>
            )
          )}
        </nav>

        <div className="ft-socials">
          {socials.map(({ icon: Icon, label, href }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>

      <div className="ft-bottom">
        <p>&copy; {new Date().getFullYear()} Phiona Aladina</p>
      </div>
    </Container>
  </footer>
);

export default Footer;
