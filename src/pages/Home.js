import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Users, Code, Trophy } from "lucide-react";
import "../styles/Home.css";

const Home = () => {
  return (
    <section className="home-page">
      <Container className="main-content">
        {/* Hero Section */}
        <Row className="hero-section align-items-center">
          {/* Hero Text */}
          <Col md={6} className="hero-text mb-4 mb-md-0">
            {/* <div className="welcome-badge">
              Welcome to my professional portfolio
            </div> */}
           
            <h1 className="hero-title">Fiona A. Aladina</h1>
           
            <p className="hero-subtitle">
              Empowering Growth, Resilience, and Digital Innovation
            </p>
           
            <p className="hero-description">
              Software engineer, tech trainer, and community leader dedicated to helping young people develop essential digital skills and fostering innovation in technology education.
            </p>
           
            <div className="hero-buttons">
              <Button className="custom-btn-primary">
                View My Work
              </Button>
              <Button className="custom-btn-orange">
                Get in Touch
              </Button>
            </div>
          </Col>

          {/* Hero Image */}
          <Col md={6} className="hero-image-container text-center">
            <div className="image-wrapper">
              {/* Decorative rings */}
              <div className="ring-outer"></div>
              <div className="ring-inner"></div>
             
              {/* Profile image */}
              <img
                src="/mep.jpg"
                // src="/menw.jpg"
                alt="Fiona A. Aladina - Software Engineer & Tech Trainer"
                className="hero-image img-fluid"
              />
            </div>
          </Col>
        </Row>

        {/* Stats Section */}
        <Row className="stats-section mt-5 text-center">
          <Col md={4} className="stat-card mb-3">
            <div className="stat-content">
              <div className="stat-icon stat-icon-users">
                <Users />
              </div>
              <h2 className="stat-number stat-number-blue">800+</h2>
              <p>Women trained in ICT, life skills, and entrepreneurship</p>
            </div>
          </Col>
         
          <Col md={4} className="stat-card mb-3">
            <div className="stat-content">
              <div className="stat-icon stat-icon-code">
                <Code />
              </div>
              <h2 className="stat-number stat-number-orange">100+</h2>
              <p>Young people equipped with technology skills through Makerspace programs</p>
            </div>
          </Col>
         
          <Col md={4} className="stat-card mb-3">
            <div className="stat-content">
              <div className="stat-icon stat-icon-trophy">
                <Trophy />
              </div>
              <h2 className="stat-number stat-number-gradient">5+</h2>
              <p>Years of experience in program leadership and mentorship</p>
            </div>
          </Col>
        </Row>

        {/* Footer section
        <div className="footer-message mt-5 text-center">
          <div className="love-code-badge">
            Crafted with passion for technology and education
          </div>
        </div> */}
      </Container>
    </section>
  );
};

export default Home;


// import React from "react";
// import { Container, Row, Col, Button } from "react-bootstrap";
// import "../styles/Home.css";

// const Home = () => {
//   return (
//     <section className="home-page">
//       <Container className="main-content">
//         {/* Hero Section */}
//         <Row className="hero-section align-items-center">
//           {/* Hero Text */}
//           <Col md={6} className="hero-text mb-4 mb-md-0">
//             <div className="welcome-badge">
//               Welcome to my professional portfolio
//             </div>
            
//             <h1 className="hero-title">Fiona A. Aladina</h1>
            
//             <p className="hero-subtitle">
//               Empowering Growth, Resilience, and Digital Innovation
//             </p>
            
//             <p className="hero-description">
//               Software engineer, tech trainer, and community leader dedicated to helping young people develop essential digital skills and fostering innovation in technology education.
//             </p>
            
//             <div className="hero-buttons">
//               <Button className="custom-btn-primary">
//                 View My Work
//               </Button>
//               <Button className="custom-btn-orange">
//                 Get in Touch
//               </Button>
//             </div>
//           </Col>

//           {/* Hero Image */}
//           <Col md={6} className="hero-image-container text-center">
//             <div className="image-wrapper">
//               {/* Decorative rings */}
//               <div className="ring-outer"></div>
//               <div className="ring-inner"></div>
              
//               {/* Profile image */}
//               <img
//                 src="/mep.jpg"
//                 alt="Fiona A. Aladina - Software Engineer & Tech Trainer"
//                 className="hero-image img-fluid"
//               />
              
//               {/* Decorative elements */}
//               <div className="badge-achievement"></div>
//               <div className="badge-innovation"></div>
//             </div>
//           </Col>
//         </Row>

//         {/* Stats Section */}
//         <Row className="stats-section mt-5 text-center">
//           <Col md={4} className="stat-card mb-3">
//             <div className="stat-content">
//               <div className="stat-icon stat-icon-users">
                
//               </div>
//               <h2 className="stat-number stat-number-blue">800+</h2>
//               <p>Women trained in ICT, life skills, and entrepreneurship</p>
//             </div>
//           </Col>
          
//           <Col md={4} className="stat-card mb-3">
//             <div className="stat-content">
//               <div className="stat-icon stat-icon-code">
                
//               </div>
//               <h2 className="stat-number stat-number-orange">100+</h2>
//               <p>Young people equipped with technology skills through Makerspace programs</p>
//             </div>
//           </Col>
          
//           <Col md={4} className="stat-card mb-3">
//             <div className="stat-content">
//               <div className="stat-icon stat-icon-trophy">
                
//               </div>
//               <h2 className="stat-number stat-number-gradient">5+</h2>
//               <p>Years of experience in program leadership and mentorship</p>
//             </div>
//           </Col>
//         </Row>

//         {/* Footer section */}
//         <div className="footer-message mt-5 text-center">
//           <div className="love-code-badge">
//             Crafted with passion for technology and education
//           </div>
//         </div>
//       </Container>
//     </section>
//   );
// };

// export default Home;