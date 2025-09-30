import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/MyStory.css";

const MyStory = () => {
  return (
    <section className="my-story py-5">
      <Container>
        <Row className="mb-4">
          <Col className="text-center">
            <h1 className="story-title">My Story</h1>
            <p className="story-subtitle">
              A journey of resilience, growth, and empowering young people through skills.
            </p>
          </Col>
        </Row>

        <Row className="story-content align-items-center">
          <Col md={6} className="mb-4 mb-md-0">
            <img
              src="/images/fiona.png"
              alt="Fiona A. Aladina"
              className="story-image img-fluid rounded"
            />
          </Col>
          <Col md={6}>
            <p>
              I’m Fiona A. Aladina, a software engineer, tech educator, and community leader. 
              From a young age, I’ve faced challenges that taught me resilience, leadership, and 
              the power of persistence. Being the firstborn in my family, I took on responsibility 
              early, which shaped my commitment to growth and helping others rise above their 
              circumstances.
            </p>
            <p>
              Over the years, I’ve trained hundreds of young women and youth in ICT, life skills, 
              and entrepreneurship. My mission is to equip others with digital skills and mindset 
              tools to unlock their potential, embrace growth, and never give up.
            </p>
            <p>
              Beyond tech, I focus on personal development, mentorship, and creating opportunities 
              for young people to innovate and make meaningful impact in their communities.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default MyStory;
