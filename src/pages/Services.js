// import React from "react";
// import { Link } from "react-router-dom";
// import "../styles/Services.css";

// const Services = () => {
//   const services = [
//     {
//       id: 1,
//       icon: "fas fa-code",
//       title: "Software Development",
//       description: "Custom web and mobile applications built with modern technologies. From concept to deployment, I create scalable solutions tailored to your needs.",
//       features: [
//         "Full-stack web development",
//         "Responsive design",
//         "API integration",
//         "Database design"
//       ]
//     },
//     {
//       id: 2,
//       icon: "fas fa-chalkboard-teacher",
//       title: "Tech Training & Workshops",
//       description: "Comprehensive training programs in digital literacy, coding, and technology skills for youth, women, and organizations.",
//       features: [
//         "Digital literacy programs",
//         "Coding bootcamps",
//         "Tech for beginners",
//         "Custom workshops"
//       ]
//     },
//     {
//       id: 3,
//       icon: "fas fa-users-cog",
//       title: "Community Programs",
//       description: "Design and implementation of tech education initiatives, MakerSpace programs, and community empowerment projects.",
//       features: [
//         "Program development",
//         "Curriculum design",
//         "Mentorship programs",
//         "Impact assessment"
//       ]
//     },
//     {
//       id: 4,
//       icon: "fas fa-laptop-code",
//       title: "Web Solutions",
//       description: "Professional websites and web applications for businesses, organizations, and individuals looking to establish their online presence.",
//       features: [
//         "Business websites",
//         "E-commerce platforms",
//         "Content management systems",
//         "Website maintenance"
//       ]
//     },
//     {
//       id: 5,
//       icon: "fas fa-user-tie",
//       title: "Tech Consulting",
//       description: "Strategic guidance on technology adoption, digital transformation, and building tech capacity in organizations.",
//       features: [
//         "Technology strategy",
//         "Digital transformation",
//         "Process automation",
//         "Tech capacity building"
//       ]
//     },
//     {
//       id: 6,
//       icon: "fas fa-hands-helping",
//       title: "Mentorship",
//       description: "One-on-one mentorship for aspiring developers, tech enthusiasts, and young professionals entering the tech industry.",
//       features: [
//         "Career guidance",
//         "Technical skills development",
//         "Project reviews",
//         "Industry insights"
//       ]
//     }
//   ];

//   return (
//     <div className="services-page">
//       <div className="container">
//         {/* Header */}
//         <div className="services-header">
//           <h1 className="section-title">My Services</h1>
//           <p className="section-subtitle">
//             Empowering individuals and organizations through technology, education, and innovation
//           </p>
//         </div>

//         {/* Services Grid */}
//         <div className="services-grid">
//           {services.map((service) => (
//             <div key={service.id} className="service-card">
//               <div className="service-icon">
//                 <i className={service.icon}></i>
//               </div>
//               <h3 className="service-title">{service.title}</h3>
//               <p className="service-description">{service.description}</p>
//               <ul className="service-features">
//                 {service.features.map((feature, index) => (
//                   <li key={index}>
//                     <i className="fas fa-check"></i>
//                     <span>{feature}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         {/* CTA Section */}
//         <div className="services-cta">
//           <h2>Ready to Work Together?</h2>
//           <p>Let's discuss how I can help bring your ideas to life</p>
//           <Link to="/contact" className="cta-button">
//             Get In Touch
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;


// import React from "react";
// import "../styles/Services.css";

// const Services = () => {
//   const services = [
//     {
//       id: 1,
//       icon: "fas fa-laptop-code",
//       title: "Custom Software Development",
//       description: "Web and mobile applications tailored to your needs."
//     },
//     {
//       id: 2,
//       icon: "fas fa-chalkboard-teacher",
//       title: "1-on-1 Training",
//       description: "Personalized coaching in Web Development, ICT, and Graphic Design."
//     },
//     {
//       id: 3,
//       icon: "fas fa-users",
//       title: "Tech Workshops & Mentorship",
//       description: "Group workshops and mentorship programs to empower learners."
//     }
//   ];

//   return (
//     <section className="services-section" id="services">
//       <div className="container">
//         <h2 className="section-title">Services</h2>
//         <div className="services-grid">
//           {services.map((service) => (
//             <div key={service.id} className="service-card">
//               <i className={service.icon}></i>
//               <h3>{service.title}</h3>
//               <p>{service.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;



import React from "react";
import { Link } from "react-router-dom";
import "../styles/Services.css";

const Services = () => {
  const services = [
    {
      id: 1,
      icon: "fas fa-laptop-code",
      title: "Software Development",
      description: "Web and mobile applications tailored to your needs, built with modern technologies.",
      features: ["Full-stack web development", "Responsive design", "API integration", "Database design"]
    },
    {
      id: 2,
      icon: "fas fa-chalkboard-teacher",
      title: "1-on-1 Training",
      description: "Personalized coaching in Web Development, ICT, and Graphic Design to help you grow your skills.",
      features: ["Web development", "Basic ICT", "Graphic design", "Project guidance"]
    },
    {
      id: 3,
      icon: "fas fa-users",
      title: "Training & Mentorship",
      description: "Group workshops and mentorship programs for children, youth, and organizations to empower through tech.",
      features: ["Digital literacy programs", "Coding workshops", "Mentorship sessions", "Community projects"]
    }
  ];

  return (
    <div className="services-page">
      <div className="container">
        {/* Header */}
        <div className="services-header">
          <h1 className="section-title">My Services</h1>
          <p className="section-subtitle">
            Empowering individuals and organizations through technology, education, and innovation
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, index) => (
                  <li key={index}>
                    <i className="fas fa-check"></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="services-cta">
          <h2>Ready to Work Together?</h2>
          <p>Let's discuss how I can help bring your ideas to life</p>
          <Link to="/contact" className="cta-button">
            Get In Touch
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
