import React from "react";
import { Link } from "react-router-dom";
import { Send, MonitorSmartphone, GraduationCap } from "lucide-react";
import "../styles/Skills.css";

const Skills = () => {
  return (
    <section className="skills-page-premium">
      <div className="container">
        {/* ── Editorial Masthead ── */}
        <div className="editorial-masthead">
          <div className="masthead-main-text">
            <div className="masthead-eyebrow">Expertise</div>
            <h1 className="masthead-title">Skills & <span>Capabilities</span></h1>
            <p className="masthead-sub">
              Building Solutions. Empowering People.
            </p>
          </div>
          
          <div className="masthead-ctas">
            <Link to="/contact" className="editorial-btn-primary">
              <Send size={15} strokeWidth={2.5} /> Get In Touch
            </Link>
          </div>
        </div>

        <div className="editorial-rule" />

        {/* ── 2 Main Arms Section ── */}
        <div className="row g-5">
          {/* Arm 1: Full-Stack Development */}
          <div className="col-lg-6">
            <div className="skills-arm-card dev-arm">
              {/* <div className="arm-icon-box">
                <MonitorSmartphone size={30} strokeWidth={1.5} />
              </div> */}
              <h2 className="arm-title">Full-Stack Development</h2>
              <p className="arm-intro">
                I build scalable, user-focused applications from front to back, combining clean code with thoughtful design to create intuitive and engaging user experiences.
              </p>

              <div className="arm-subgroup">
                <h3 className="subgroup-title">Core Stack</h3>
                <div className="skill-tag-cloud">
                  {["React", "Next.js", "Python", "Node.js", "MySQL", "REST APIs", "Git", "CI/CD"].map((s, i) => (
                    <span key={i} className="skill-tag-clean">{s}</span>
                  ))}
                </div>
              </div>

              <div className="arm-subgroup">
                <h3 className="subgroup-title">What I Deliver</h3>
                <ul className="arm-list">
                  <li>Clean Architecture</li>
                  <li>API Development</li>
                  <li>Performance Optimization</li>
                  <li>Responsive Design</li>
                  <li>User-Friendly Interfaces</li>
                  <li>End-to-End Execution</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Arm 2: Digital Skills Training */}
          <div className="col-lg-6">
            <div className="skills-arm-card trainer-arm">
              {/* <div className="arm-icon-box alternate">
                <GraduationCap size={30} strokeWidth={1.5} />
              </div> */}
              <h2 className="arm-title">Digital Skills Training</h2>
              <p className="arm-intro">
                I design and deliver hands-on learning experiences that make technology practical, accessible, and impactful, with a core focus on <strong>Accessibility & Inclusive Design</strong>.
              </p>

              <div className="arm-subgroup">
                <h3 className="subgroup-title">What I Do</h3>
                <ul className="arm-list">
                  <li>Technical Training</li>
                  <li>Inclusive Tech Training</li>
                  <li>IT Support Foundations</li>
                  <li>Curriculum Design</li>
                  <li>Mentorship</li>
                  <li>Workshop Facilitation</li>
                </ul>
              </div>

              <div className="arm-subgroup">
                <h3 className="subgroup-title">Leadership & Impact</h3>
                <ul className="arm-list">
                  <li>Community Engagement</li>
                  <li>Strategic Planning</li>
                  <li>Impact-Driven Execution</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* ── Footer CTA ── */}
        <div className="skills-minimal-footer">
          <div className="footer-cta-content">
            <h3>Ready to build something meaningful?</h3>
            <Link to="/contact" className="footer-cta-link-clean">
              Get in touch <Send size={18} strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
