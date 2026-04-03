import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";
import "../styles/Navbar.css";

const CustomNavbar = () => {
  const location = useLocation();
  const [expanded, setExpanded] = useState(false);

  const closeNav = () => setExpanded(false);

  return (
    <Navbar 
      className="custom-navbar" 
      expand="lg" 
      sticky="top"
      expanded={expanded}
      onToggle={setExpanded}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" onClick={closeNav}>
          <span className="brand-name">Aladina</span>
          <span className="brand-tagline">Software Engineer | Digital Skills Trainer</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" onClick={closeNav} active={location.pathname === "/"}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/projects" onClick={closeNav} active={location.pathname === "/projects"}>
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/skills" onClick={closeNav} active={location.pathname === "/skills"}>
              Skills
            </Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={closeNav} active={location.pathname === "/about"}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/gallery" onClick={closeNav} active={location.pathname === "/gallery"}>
              Gallery
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={closeNav} active={location.pathname === "/contact"}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;