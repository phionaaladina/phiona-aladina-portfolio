import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FileText, Send } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import "../styles/About.css";

const chapters = [
  {
    title: "Who I Am",
    bold: "Software Engineer and Tech Educator",
    text: `I'm Fiona A., a Software Engineer and Tech Educator passionate about empowering young people through technology, innovation, and mentorship.`
  },
  {
    title: "My Journey",
    bold: "resilience and purpose",
    text: `My journey is one of resilience and purpose. Growing up in a challenging environment taught me strength, compassion, and perseverance. I worked as a cleaner, beautician, and nanny (my favorite role) to make ends meet for my four siblings and myself before discovering my passion for technology. Over the past decade, I have also navigated episodes of depression, serious mental health struggles, and suicidal thoughts, and sought counseling to support my wellbeing. These experiences are part of my story, and have deepened my empathy and strengthened my commitment to creating opportunities for others to rise and thrive.`
  },
  {
    title: "Breaking Barriers",
    bold: "dare to dream beyond their circumstances",
    text: `It shaped my drive to break barriers and create opportunities, not only for myself but for my siblings and others who dare to dream beyond their circumstances. After leaving medical school because of tuition challenges, I took a casual job to care for my siblings. I was fortunate to discover a passion for technology, enroll in a Computer Science course, and complete it. That journey continues to shape the impact I hope to make for others.`
  },
  {
    title: "My Impact",
    bold: "1000 young women, youth, and children",
    text: `Over the years, I've trained and mentored more than 1000 young women, youth, and children in digital literacy, coding, life skills, and entrepreneurship. I've seen technology transform lives, helping learners gain confidence and build careers they once thought impossible.`
  },
  {
    title: "My Belief",
    bold: "Every setback carries a lesson",
    text: `I believe that we can always rise again. Every setback carries a lesson, and every effort, no matter how small, brings us closer to the future we imagine.`
  },
  {
    title: "My Mission",
    bold: "bridge digital gaps, inspire creativity, and nurture the next generation",
    text: `Today, my mission is to bridge digital gaps, inspire creativity, and nurture the next generation of innovators through inclusive learning and impactful tech solutions.`
  }
];

const renderText = (ch) => {
  if (!ch.bold) return ch.text;
  const [before, after] = ch.text.split(ch.bold);
  return <>{before}<strong>{ch.bold}</strong>{after}</>;
};

const About = () => (
  <div className="editorial-page">
    <Container>

      {/* ── Top: Unified Masthead ── */}
      <ScrollReveal animation="fade-up">
        <div className="editorial-masthead">
          <div className="masthead-main-text-about">
            <h1 className="masthead-title">Fiona A. <span>Aladina</span></h1>
            <div className="masthead-roles-row">
              <span className="role-tag">Software Engineer</span>
              <span className="role-dash">/</span>
              <span className="role-tag">Digital Skills Trainer</span>
              <span className="role-dash">/</span>
              <span className="role-tag">Mentor</span>
            </div>
          </div>

          <div className="masthead-ctas">
            <a
              href="/aladina_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-btn-primary"
            >
              <FileText size={15} /> View Resume
            </a>
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                window.history.replaceState(null, "", "#projects");
              }}
              className="editorial-btn-secondary"
            >
              View Projects
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                window.history.replaceState(null, "", "#contact");
              }}
              className="editorial-btn-ghost"
            >
              <Send size={15} /> Get In Touch
            </a>
          </div>
        </div>
      </ScrollReveal>

      <ScrollReveal animation="fade" delay={100}>
        <div className="editorial-rule" />
      </ScrollReveal>

      {/* ── Chapters ── */}
      <div className="about-chapters">
        {chapters.map((ch, i) => (
          <ScrollReveal key={i} animation="fade-up" delay={i * 80}>
            <Row className="chapter-row">
              <Col xs={12} md={3} className="chapter-title-col">
                <h2 className="chapter-title">{ch.title}</h2>
              </Col>
              <Col xs={12} md={9} className="chapter-text-col">
                <p className="chapter-body">{renderText(ch)}</p>
              </Col>
            </Row>
          </ScrollReveal>
        ))}
      </div>

    </Container>
  </div>
);

export default About;
