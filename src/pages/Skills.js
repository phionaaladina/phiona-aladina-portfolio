// import React from "react";
// import "../styles/Skills.css";

// const skills = [
//   {
//     title: "Web Development",
//     note: "Building responsive and functional websites using modern technologies like HTML, CSS, JavaScript, React, and Node.js.",
//     icon: "fas fa-code",
//     category: "technical"
//   },
//   {
//     title: "Training & Capacity Building",
//     note: "Designing and delivering ICT, digital literacy, and entrepreneurship training programs that empower youth and women.",
//     icon: "fas fa-chalkboard-teacher",
//     category: "leadership"
//   },
//   {
//     title: "Mentorship",
//     note: "Guiding learners and early-career professionals through personal and professional development.",
//     icon: "fas fa-user-friends",
//     category: "leadership"
//   },
//   {
//     title: "Coaching",
//     note: "Supporting individuals to build clarity, resilience, and goal-setting strategies for growth.",
//     icon: "fas fa-bullseye",
//     category: "leadership"
//   },
//   {
//     title: "IT Support",
//     note: "Providing technical support, troubleshooting, and maintenance to ensure smooth system operations.",
//     icon: "fas fa-tools",
//     category: "technical"
//   },
// //   {
// //     title: "Project Management",
// //     note: "Planning, coordinating, and executing projects effectively with focus on impact and sustainability.",
// //     icon: "fas fa-tasks",
// //     category: "management"
// //   },
//   {
//     title: "Innovation & Emerging Tech",
//     note: "Exploring and applying technologies like VR, 3D printing, and AI to solve real-world challenges.",
//     icon: "fas fa-lightbulb",
//     category: "technical"
//   }
// ];

// const Skills = () => {
//   return (
//     <section className="skills-section">
//       <div className="container">
//         <div className="skills-header">
//           <div className="section-badge">
//             Core Competencies
//           </div>
//           <h2 className="skills-title">My Skills & Expertise</h2>
//           <p className="skills-subtitle">
//             A comprehensive blend of technical proficiency, educational leadership, and innovative problem-solving
//           </p>
//         </div>
        
//         <div className="row skills-grid">
//           {skills.map((skill, index) => (
//             <div className="col-lg-4 col-md-6 mb-4" key={index}>
//               <div className={`skill-card skill-card-${skill.category}`}>
//                 <div className="skill-icon-wrapper">
//                   <div className={`skill-icon skill-icon-${skill.category}`}>
//                     <i className={skill.icon}></i>
//                   </div>
//                 </div>
                
//                 <div className="skill-content">
//                   <h5 className="skill-title">{skill.title}</h5>
//                   <p className="skill-description">{skill.note}</p>
//                 </div>
                
//                 <div className={`skill-accent skill-accent-${skill.category}`}></div>
//               </div>
//             </div>
//           ))}
//         </div>
        
//         <div className="skills-footer">
//           <div className="skills-cta">
//             <p>Ready to collaborate on your next project?</p>
//             <button className="cta-button">
//               Let's Work Together
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;


// import React from "react";
// import "../styles/Skills.css";

// const skills = [
//   {
//     title: "Web & Software Development",
//     note: "Building responsive websites, web apps, and custom solutions using HTML, CSS, JavaScript, React, and Node.js.",
//     icon: "fas fa-code",
//     category: "technical"
//   },
//   {
//     title: "Digital Training & Mentorship",
//     note: "Delivering ICT, digital literacy, and entrepreneurship training while guiding learners and early-career professionals for career and personal growth.",
//     icon: "fas fa-chalkboard-teacher",
//     category: "leadership"
//   },
//   {
//     title: "Technical Support & IT Operations",
//     note: "Troubleshooting, system maintenance, and ensuring smooth IT operations for organizations and individuals.",
//     icon: "fas fa-tools",
//     category: "technical"
//   },
//   {
//     title: "Innovation & Emerging Technology",
//     note: "Exploring VR, 3D printing, AI, and other technologies to create practical solutions to real-world challenges.",
//     icon: "fas fa-lightbulb",
//     category: "technical"
//   },
//   {
//     title: "Project Management & Leadership",
//     note: "Planning, coordinating, and executing projects with focus on impact, team guidance, and sustainable results.",
//     icon: "fas fa-tasks",
//     category: "management"
//   }
// ];

// const Skills = () => {
//   return (
//     <section className="skills-section">
//       <div className="container">
//         {/* Header */}
//         <div className="skills-header">
//           <div className="section-badge">Core Competencies</div>
//           <h2 className="skills-title">My Skills & Expertise</h2>
//           <p className="skills-subtitle">
//             A balanced mix of technical proficiency, leadership, and innovative problem-solving
//           </p>
//         </div>

//         {/* Skills Grid */}
//         <div className="row skills-grid">
//           {skills.map((skill, index) => (
//             <div className="col-lg-4 col-md-6 mb-4" key={index}>
//               <div className={`skill-card skill-card-${skill.category}`}>
//                 <div className="skill-icon-wrapper">
//                   <div className={`skill-icon skill-icon-${skill.category}`}>
//                     <i className={skill.icon}></i>
//                   </div>
//                 </div>

//                 <div className="skill-content">
//                   <h5 className="skill-title">{skill.title}</h5>
//                   <p className="skill-description">{skill.note}</p>
//                 </div>

//                 <div className={`skill-accent skill-accent-${skill.category}`}></div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* CTA */}
//         <div className="skills-footer">
//           <div className="skills-cta">
//             <p>Ready to collaborate on your next project?</p>
//             <button className="cta-button">Let's Work Together</button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Skills;


import React from "react";
import "../styles/Skills.css";

const skills = [
  {
    title: "Web & Software Development",
    note: "Building responsive websites, web apps, and custom solutions using HTML, CSS, JavaScript, React, and Node.js.",
    icon: "fas fa-code",
    category: "technical"
  },
  {
    title: "Digital Training",
    note: "Delivering ICT, digital literacy, and entrepreneurship programs that empower youth and women.",
    icon: "fas fa-chalkboard-teacher",
    category: "leadership"
  },
  {
    title: "Mentorship & Coaching",
    note: "Guiding learners and professionals through career, skill, and personal development.",
    icon: "fas fa-user-friends",
    category: "leadership"
  },
  {
    title: "Technical Support & IT Operations",
    note: "Troubleshooting, system maintenance, and ensuring smooth IT operations.",
    icon: "fas fa-tools",
    category: "technical"
  },
  {
    title: "Innovation & Emerging Technology",
    note: "Exploring VR, 3D printing, AI, and other technologies to create practical solutions.",
    icon: "fas fa-lightbulb",
    category: "technical"
  },
  {
    title: "Project Management & Leadership",
    note: "Planning, coordinating, and executing projects with focus on impact, team guidance, and sustainability.",
    icon: "fas fa-tasks",
    category: "management"
  }
];

const Skills = () => {
  return (
    <section className="skills-section">
      <div className="container">
        {/* Header */}
        <div className="skills-header">
          <div className="section-badge">Core Competencies</div>
          <h2 className="skills-title">My Skills & Expertise</h2>
          <p className="skills-subtitle">
            A balanced mix of technical proficiency, leadership, and innovative problem-solving
          </p>
        </div>

        {/* Skills Grid */}
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

        {/* CTA */}
        <div className="skills-footer">
          <div className="skills-cta">
            <p>Ready to collaborate on your next project?</p>
            <button className="cta-button">Let's Work Together</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
