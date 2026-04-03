import React from "react";
import { Link } from "react-router-dom";
import { Code, Users, GraduationCap, Settings, Lightbulb, ClipboardList, Send } from "lucide-react";
import "../styles/Skills.css";

const skills = [
  {
    title: "Web & Software Development",
    note: "Crafting modern, responsive, and performance-optimized web solutions with a focus on user experience and clean code.",
    icon: <Code size={28} />,
    category: "technical",
    tags: ["React", "JavaScript", "Node.js", "MySQL", "Bootstrap", "Next.js"]
  },
  {
    title: "Digital Training & Education",
    note: "Empowering youth and women through tailored ICT literacy programs and entrepreneurship workshops.",
    icon: <GraduationCap size={28} />,
    category: "leadership",
    tags: ["Curriculum Design", "ICT Literacy", "Workshops", "e-Learning"]
  },
  {
    title: "Mentorship & Coaching",
    note: "Guiding emerging professionals through career pathing, skill acquisition, and personal growth strategies.",
    icon: <Users size={28} />,
    category: "leadership",
    tags: ["Career Pathing", "Public Speaking", "Goal Setting", "EQ"]
  },
  {
    title: "IT Support & Infrastructure",
    note: "Reliable technical support, system maintenance, and network troubleshooting for optimal business operations.",
    icon: <Settings size={28} />,
    category: "technical",
    tags: ["Hardware Support", "Network Admin", "Cloud Tools", "Security"]
  },
  {
    title: "Innovation & Emerging Tech",
    note: "Driving digital transformation by exploring VR/AR, 3D printing applications, and AI integration.",
    icon: <Lightbulb size={28} />,
    category: "technical",
    tags: ["3D Printing", "Virtual Reality", "AI Tools", "Prototyping"]
  },
  {
    title: "Project Management",
    note: "Strategic planning and execution of community-focused projects with a commitment to sustainable impact.",
    icon: <ClipboardList size={28} />,
    category: "management",
    tags: ["Agile", "Stakeholder Management", "M&E", "Strategic Planning"]
  }
];

const Skills = () => {
  return (
    <section className="skills-page-premium">
      {/* Background Blobs */}
      <div className="skills-bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>
      
      <div className="container">
        {/* Header */}
        <div className="skills-header-premium">
          <h1 className="skills-title-premium">Skills & Capabilities</h1>
          <p className="skills-subtitle-premium">
            A fusion of technical excellence and strategic leadership, dedicated to building impactful digital solutions.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="row skills-grid-premium">
          {skills.map((skill, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              <div className={`skill-card-premium skill-card-${skill.category}`}>
                <div className="skill-card-inner">
                  <div className="skill-icon-outer">
                    <div className={`skill-icon-bg skill-icon-${skill.category}`}>
                      {skill.icon}
                    </div>
                  </div>

                  <div className="skill-content-premium">
                    <h3 className="skill-name-premium">{skill.title}</h3>
                    <p className="skill-desc-premium">{skill.note}</p>
                    
                    <div className="skill-tags-premium">
                      {skill.tags.map((tag, tIdx) => (
                        <span key={tIdx} className={`skill-tag-pill tag-${skill.category}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={`skill-accent-bar accent-${skill.category}`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="skills-footer-cta">
          <div className="cta-card-premium">
            <div className="cta-info">
              <h3>Ready to build something together?</h3>
              <p>I'm always open to discussing new projects, technical challenges, or community initiatives.</p>
            </div>
            <Link to="/contact" className="btn-contact-premium">
              Get In Touch <Send size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
