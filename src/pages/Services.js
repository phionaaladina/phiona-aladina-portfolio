import React from "react";
import { Link } from "react-router-dom";
import { Laptop, GraduationCap, Users, Cpu, Wrench, ArrowRight, Sparkles, Download } from "lucide-react";
import "../styles/Services.css";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <Laptop size={28} />,
      eyebrow: "01 / BUILD",
      title: "Full-Stack Web & App Engineering",
      description: "Developing scalable, accessible web applications and APIs using React, Next.js, Node.js, and Python with seamless UX.",
      tags: ["React & Next.js", "Node.js & Python", "REST APIs", "Mobile-First"],
      image: "/itsupport.jpg",
      accent: "blue",
      link: "/projects",
      linkText: "View Code Projects"
    },
    {
      id: 2,
      icon: <GraduationCap size={28} />,
      eyebrow: "02 / TEACH",
      title: "Technical Training & Curriculum",
      description: "Designing outcome-driven coding curricula. Trained 1,000+ youth with an 80% outcome rate into jobs and new ventures.",
      tags: ["1,000+ Trained", "Python & Web", "80% Placement", "E-Learning"],
      image: "/training.jpg",
      accent: "orange",
      link: "/contact",
      linkText: "Partner on Training"
    },
    {
      id: 3,
      icon: <Users size={28} />,
      eyebrow: "03 / EMPOWER",
      title: "Inclusive Mentorship & Accessibility",
      description: "Championing disability inclusion and female tech leadership, certified in Ugandan Sign Language with 1-on-1 career coaching.",
      tags: ["Sign Language", "Disability a11y", "Career Coaching", "iUPSHIFT"],
      image: "/cldn.jpg",
      accent: "green",
      link: "/contact",
      linkText: "Connect for Mentorship"
    },
    {
      id: 4,
      icon: <Cpu size={28} />,
      eyebrow: "04 / INNOVATE",
      title: "Emerging Tech & Makerspace Labs",
      description: "Spearheaded WITU Makerspace launch with Team 4 Tech & Cadence; integrating 3D printing and VR to inspire STEM careers.",
      tags: ["3D Printing", "VR / AR", "Team4Tech Partner", "Micro:bit"],
      image: "/partc1.jpg",
      accent: "purple",
      link: "/about",
      linkText: "Learn About Impact"
    },
    {
      id: 5,
      icon: <Wrench size={28} />,
      eyebrow: "05 / SUPPORT",
      title: "IT Infrastructure & Lab Management",
      description: "Maintaining reliable multi-station computer labs, diagnostics, network configurations, and e-learning platforms with minimal downtime.",
      tags: ["Lab Diagnostics", "Hardware Support", "Network Setup", "Uptime"],
      image: "/itsupport1.jpg",
      accent: "blue",
      link: "/contact",
      linkText: "Discuss Lab Support"
    }
  ];

  return (
    <section className="services-page-premium">
      {/* Background Blobs for depth */}
      <div className="services-bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <div className="container">
        {/* Header Section */}
        <div className="services-header-premium">
          <p className="services-kicker">WHAT I DO &amp; DELIVER</p>
          <h1 className="services-title-premium">Build. Teach. Empower<span>.</span></h1>
          <p className="services-subtitle-premium">
            Full-stack engineering, accessible technical education, and dependable digital systems built for real-world impact.
          </p>

          <div className="services-action-pills mt-3">
            <a
              href={process.env.PUBLIC_URL + "/aladina_resume.pdf"}
              target="_blank"
              rel="noopener noreferrer"
              className="services-resume-link"
              download="Fiona_Aladina_Resume.pdf"
            >
              <Download size={15} /> Download Resume (PDF)
            </a>
          </div>
        </div>

        {/* Services Grid */}
        <div className="row g-4 services-grid-premium">
          {services.map(service => (
            <div key={service.id} className="col-lg-4 col-md-6">
              <div className={`service-card-premium accent-${service.accent}`}>
                <div className="service-card-visual">
                  <img src={process.env.PUBLIC_URL + service.image} alt={service.title} />
                  <span className="service-icon-wrapper-premium">{service.icon}</span>
                  <span className="service-card-number">{service.eyebrow}</span>
                </div>
                <div className="service-card-content">
                  <h3 className="service-card-title">{service.title}</h3>
                  <p className="service-desc-premium">{service.description}</p>

                  {/* Tags */}
                  <div className="service-tags-strip mt-3 mb-2">
                    {service.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="service-tag-pill">{tag}</span>
                    ))}
                  </div>

                  <Link to={service.link} className="service-link-premium" aria-label={`Learn more about ${service.title}`}>
                    {service.linkText} <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="services-footer-cta">
          <div className="footer-card-premium">
            <div className="cta-content-wrapper">
              <Sparkles size={32} className="cta-icon" />
              <h3>Looking for an engineer and tech enabler?</h3>
              <p>Let’s build something useful, accessible, and high-impact together.</p>
              <div className="d-flex justify-content-center gap-3 flex-wrap">
                <Link to="/contact" className="btn-services-cta">
                  Let's Talk Today <ArrowRight size={18} />
                </Link>
                <a
                  href={process.env.PUBLIC_URL + "/aladina_resume.pdf"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-services-cta-secondary"
                  download="Fiona_Aladina_Resume.pdf"
                >
                  <Download size={17} /> Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
