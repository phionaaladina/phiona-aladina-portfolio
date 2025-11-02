// import { Navbar, Nav, Container } from "react-bootstrap";
// import { Link } from "react-router-dom"; // <- import Link
// import "../styles/Navbar.css";

// const CustomNavbar = () => {
//   return (
//     <Navbar className="custom-navbar" expand="lg" sticky="top">
//       <Container>
//         <Navbar.Brand as={Link} to="/">Fiona A. Aladina</Navbar.Brand>
//         <Navbar.Toggle aria-controls="navbar-nav" />
//         <Navbar.Collapse id="navbar-nav">
//           <Nav className="ms-auto">
//             <Nav.Link as={Link} to="/">Home</Nav.Link>
//             <Nav.Link as={Link} to="/about">About</Nav.Link>
//             {/* <Nav.Link as={Link} to="/my-story">My Story</Nav.Link> */}
//             <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
//             <Nav.Link as={Link} to="/skills">Skills</Nav.Link>
//             <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
//             <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// };

// export default CustomNavbar;


import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const CustomNavbar = () => {
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
          Fiona A. Aladina
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" onClick={closeNav}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" onClick={closeNav}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/projects" onClick={closeNav}>
              Projects
            </Nav.Link>
            <Nav.Link as={Link} to="/skills" onClick={closeNav}>
              Skills
            </Nav.Link>
            <Nav.Link as={Link} to="/gallery" onClick={closeNav}>
              Gallery
            </Nav.Link>
            <Nav.Link as={Link} to="/services" onClick={closeNav}>
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/contact" onClick={closeNav}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;