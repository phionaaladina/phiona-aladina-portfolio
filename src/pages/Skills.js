import React from "react";
import "../styles/Skills.css";

const skills = [
  {
    title: "Web Development",
    note: "Building responsive and functional websites using modern technologies like HTML, CSS, JavaScript, React, and Node.js.",
    icon: "fas fa-code",
    category: "technical"
  },
  {
    title: "Training & Capacity Building",
    note: "Designing and delivering ICT, digital literacy, and entrepreneurship training programs that empower youth and women.",
    icon: "fas fa-chalkboard-teacher",
    category: "leadership"
  },
  {
    title: "Mentorship",
    note: "Guiding learners and early-career professionals through personal and professional development.",
    icon: "fas fa-user-friends",
    category: "leadership"
  },
  {
    title: "Coaching",
    note: "Supporting individuals to build clarity, resilience, and goal-setting strategies for growth.",
    icon: "fas fa-bullseye",
    category: "leadership"
  },
  {
    title: "IT Support",
    note: "Providing technical support, troubleshooting, and maintenance to ensure smooth system operations.",
    icon: "fas fa-tools",
    category: "technical"
  },
//   {
//     title: "Project Management",
//     note: "Planning, coordinating, and executing projects effectively with focus on impact and sustainability.",
//     icon: "fas fa-tasks",
//     category: "management"
//   },
  {
    title: "Innovation & Emerging Tech",
    note: "Exploring and applying technologies like VR, 3D printing, and AI to solve real-world challenges.",
    icon: "fas fa-lightbulb",
    category: "technical"
  }
];

const Skills = () => {
  return (
    <section className="skills-section">
      <div className="container">
        <div className="skills-header">
          <div className="section-badge">
            Core Competencies
          </div>
          <h2 className="skills-title">My Skills & Expertise</h2>
          <p className="skills-subtitle">
            A comprehensive blend of technical proficiency, educational leadership, and innovative problem-solving
          </p>
        </div>
        
        <div className="row skills-grid">
          {skills.map((skill, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              <div className={`skill-card skill-card-${skill.category}`}>
                <div className="skill-icon-wrapper">
                  <div className={`skill-icon skill-icon-${skill.category}`}>
                    <i className={skill.icon}></i>
                  </div>
                </div>
                
                <div className="skill-content">
                  <h5 className="skill-title">{skill.title}</h5>
                  <p className="skill-description">{skill.note}</p>
                </div>
                
                <div className={`skill-accent skill-accent-${skill.category}`}></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="skills-footer">
          <div className="skills-cta">
            <p>Ready to collaborate on your next project?</p>
            <button className="cta-button">
              Let's Work Together
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;