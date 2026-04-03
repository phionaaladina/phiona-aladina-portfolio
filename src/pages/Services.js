import React from "react";
import { Link } from "react-router-dom";
import { Laptop, GraduationCap, Users, CheckCircle, ArrowRight, Sparkles } from "lucide-react";
import "../styles/Services.css";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <Laptop size={32} />,
      title: "Software Development",
      description: "Custom web and mobile applications tailored to your business needs, built with high-performance modern technologies.",
      features: ["Full-stack web development", "Responsive design", "API integration", "Database architecture"],
      accent: "blue"
    },
    {
      id: 2,
      icon: <GraduationCap size={32} />,
      title: "1-on-1 Training",
      description: "Personalized coaching sessions in Web Development, ICT basics, and Graphic Design to accelerate your learning curve.",
      features: ["Web development skills", "Basic ICT literacy", "Graphic design basics", "Personal project guidance"],
      accent: "orange"
    },
    {
      id: 3,
      icon: <Users size={32} />,
      title: "Workshops & Mentorship",
      description: "Group workshops and structured mentorship programs designed to empower children, youth, and organizations.",
      features: ["Digital literacy bootcamps", "Coding for kids", "Professional mentorship", "Community tech projects"],
      accent: "green"
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
          <h1 className="services-title-premium">Professional Services</h1>
          <p className="services-subtitle-premium">
            Bridging the gap between technical innovation and community empowerment through tailored digital solutions.
          </p>
        </div>

        {/* Services Grid - Using Bootstrap Grid */}
        <div className="row g-4 services-grid-premium">
          {services.map(service => (
            <div key={service.id} className="col-lg-4 col-md-6">
              <div className={`service-card-premium accent-${service.accent}`}>
                <div className="service-icon-wrapper-premium">
                  {service.icon}
                </div>
                <h3 className="service-card-title">{service.title}</h3>
                <p className="service-desc-premium">{service.description}</p>
                
                <ul className="service-features-premium">
                  {service.features.map((feature, index) => (
                    <li key={index} className="feature-item-premium">
                      <CheckCircle size={18} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="service-card-footer">
                  <Link to="/contact" className="service-link-premium">
                    Request Service <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section - Fixed & Styled */}
        <div className="services-footer-cta">
          <div className="footer-card-premium">
            <div className="cta-content-wrapper">
              <Sparkles size={32} className="cta-icon" />
              <h3>Ready to Start Your Next Project?</h3>
              <p>Whether it's a new software solution or a teaching opportunity, I'm ready to help you succeed.</p>
              <Link to="/contact" className="btn-services-cta">
                Let's Talk Today <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
