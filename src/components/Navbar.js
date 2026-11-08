import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../styles/Navbar.css";

const navItems = [
  { id: "about", label: "About" },
  { id: "skills", label: "What I Do" },
  { id: "impact", label: "Impact" },
  { id: "gallery", label: "Gallery" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
  { id: "resume", label: "Resume", href: process.env.PUBLIC_URL + "/aladina_resume.pdf", isButton: true }
];

const CustomNavbar = () => {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const closeNav = () => setExpanded(false);

  // Add a subtle shadow + frosted background once the page scrolls
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ScrollSpy: track which section is currently in view as user scrolls
  useEffect(() => {
    const sectionIds = ["home", "about", "skills", "impact", "gallery", "projects", "contact"];

    const handleScroll = () => {
      // Separate pages (e.g. Learner Stories) have no sections to track
      if (!document.getElementById("home")) {
        setActiveSection(null);
        return;
      }

      // If user has scrolled almost to the very bottom, activate contact
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 60) {
        setActiveSection("contact");
        return;
      }

      const scrollPos = window.scrollY + 140; // optical offset below navbar
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section) {
          const top = section.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update active state and scroll if URL hash or pathname changes
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    const path = location.pathname.replace("/", "");
    const target = hash || path;
    if (!document.getElementById("home")) {
      setActiveSection(null);
      return;
    }
    if (target &&["home", "about", "skills", "impact", "gallery", "projects", "contact"].includes(target)) {
      setActiveSection(target);
    }
  }, [location]);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    closeNav();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({
        behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
      });
      window.history.replaceState(null, "", `#${id}`);
      setActiveSection(id);
    } else {
      window.location.href = `/#${id}`;
    }
  };

  return (
    <Navbar 
      className={`custom-navbar ${scrolled ? "is-scrolled" : ""}`}
      expand="lg" 
      sticky="top"
      expanded={expanded}
      onToggle={setExpanded}
    >
      <Container>
        <Navbar.Brand 
          href="#home" 
          onClick={(e) => handleNavClick(e, "home")}
          aria-label="Fiona A. Aladina, home"
        >
          <span className="brand-name">Aladina</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto align-items-lg-center">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              if (item.href) {
                return (
                  <Nav.Link
                    key={item.id}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={closeNav}
                    className={item.isButton ? "nav-contact-button" : undefined}
                  >
                    {item.label}
                  </Nav.Link>
                );
              }
              if (item.isButton) {
                return (
                  <Nav.Link
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`nav-contact-button ${isActive ? "active" : ""}`}
                  >
                    {item.label}
                  </Nav.Link>
                );
              }
              return (
                <Nav.Link
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  active={isActive}
                >
                  {item.label}
                </Nav.Link>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;