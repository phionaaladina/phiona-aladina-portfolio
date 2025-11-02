// import React, { useState } from 'react';
// import '../styles/Projects.css';

// const Projects = () => {
//   const projects = [
//     {
//       id: 1,
//       title: "UNIHUB SOLUTIONS UGANDA PLATFORM",
//       description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
//       image: process.env.PUBLIC_URL + "/unipg.png",
//       technologies: ["React", "Node.js", "Python", "MySQL","Bootstrap"],
//       githubUrl: "https://github.com/username/ecommerce-platform",
//       liveUrl: "https://unihubug.com",
//       category: "Web Development"
//     },
//     {
//       id: 2,
//       title: "MERAKI ACTION INITIATIVE WEBSITE",
//       description: "A non-profit organization website built with WordPress and Elementor, featuring a blog, donation system, and event management.",
//       image: process.env.PUBLIC_URL + "/meraki.png",
//       technologies: ["Wordpress", "Elementor", "PHP", "MySQL"],
//       githubUrl: "https://github.com/username/task-manager",
//       liveUrl: "https://merakiinitiative.org",
//       category: "Web Development"
//     },
//     {
//       id: 3,
//       title: "BOOK MANAGEMENT SYSTEM",
//       description: "A book management system that allows users to add, edit, delete, and search for books in a library database.",
//       image: process.env.PUBLIC_URL + "/bms.png",
//       technologies: ["JavaScript", "HTML", "CSS"],
//       githubUrl: "https://github.com/phionaaladina/BOOK-MANAGEMENT-SYSTEM-JAVASCRIPT-PROJECT",
//       liveUrl: "https://phionaaladina.github.io/BOOK-MANAGEMENT-SYSTEM-JAVASCRIPT-PROJECT/",
//       category: "Web Development"
//     }
//   ];

//   const categories = ["All", ...new Set(projects.map(project => project.category))];
//   const [selectedCategory, setSelectedCategory] = useState("All");

//   const filteredProjects = selectedCategory === "All"
//     ? projects
//     : projects.filter(project => project.category === selectedCategory);

//   return (
//     <div className="projects-page">
//       <div className="container">
//         {/* Header Section */}
//         <div className="projects-header">
//           <h1 className="projects-title">My Projects</h1>
//           <p className="projects-subtitle">
//             A showcase of my development work and creative solutions
//           </p>
//         </div>

//         {/* Category Filter */}
//         <div className="category-filter">
//           {categories.map(category => (
//             <button
//               key={category}
//               className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
//               onClick={() => setSelectedCategory(category)}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         {/* Projects Grid */}
//         <div className="projects-grid">
//           {filteredProjects.map(project => (
//             <div key={project.id} className="project-card">
//               <div className="project-image-container">
//                 <img 
//                   src={project.image} 
//                   alt={project.title}
//                   className="project-image"
//                 />
//                 <div className="project-overlay">
//                   <div className="project-links">
//                     <a 
//                       href={project.githubUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="project-link github-link"
//                     >
//                       GitHub
//                     </a>
//                     {project.liveUrl && (
//                       <a 
//                         href={project.liveUrl}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="project-link demo-link"
//                       >
//                         Live Demo
//                       </a>
//                     )}
//                   </div>
//                 </div>
//               </div>

//               <div className="project-content">
//                 <div className="project-header">
//                   <span className="category-badge">{project.category}</span>
//                   <h3 className="project-title">{project.title}</h3>
//                 </div>

//                 <p className="project-description">{project.description}</p>

//                 <div className="technologies">
//                   {project.technologies.map((tech, index) => (
//                     <span key={index} className="tech-badge">
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {filteredProjects.length === 0 && (
//           <div className="no-projects">
//             <p>No projects found for the selected category.</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Projects;






import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "UNIHUB SOLUTIONS UGANDA PLATFORM",
      description: "A full-stack e-commerce solution built with React, Node.js, and MySQL. Features include user authentication, Guest Checkout, and admin dashboard.",
      image: process.env.PUBLIC_URL + "/unipg.png",
      technologies: ["React", "Node.js", "Python", "MySQL","Bootstrap"],
      githubUrl: "https://github.com/username/ecommerce-platform",
      liveUrl: "https://unihubug.com",
      category: "Web Development"
    },
    {
      id: 2,
      title: "MERAKI ACTION INITIATIVE WEBSITE",
      description: "A non-profit organization website built with WordPress and Elementor, featuring a blog, donation system, and event management.",
      image: process.env.PUBLIC_URL + "/meraki.png",
      technologies: ["Wordpress", "Elementor", "PHP", "MySQL"],
      githubUrl: "https://github.com/username/task-manager",
      liveUrl: "https://merakiinitiative.org",
      category: "Web Development"
    },
    {
      id: 3,
      title: "BOOK MANAGEMENT SYSTEM",
      description: "A book management system that allows users to add, edit, delete, and search for books in a library database.",
      image: process.env.PUBLIC_URL + "/bms.png",
      technologies: ["JavaScript", "HTML", "CSS"],
      githubUrl: "https://github.com/phionaaladina/BOOK-MANAGEMENT-SYSTEM-JAVASCRIPT-PROJECT",
      liveUrl: "https://phionaaladina.github.io/BOOK-MANAGEMENT-SYSTEM-JAVASCRIPT-PROJECT/",
      category: "Web Development"
    }
  ];

  const categories = ["All", ...new Set(projects.map(project => project.category))];
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="projects-page">
      <div className="container">
        {/* Header Section */}
        <div className="projects-header">
          <h1 className="projects-title">My Projects</h1>
          <p className="projects-subtitle">
            A showcase of my development work and creative solutions
          </p>
          <Link to="/gallery" className="gallery-link-btn">
            View Gallery <i className="fas fa-arrow-right"></i>
          </Link>
        </div>

        {/* Category Filter */}
        <div className="category-filter">
          {categories.map(category => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-image-container">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link github-link"
                    >
                      GitHub
                    </a>
                    {project.liveUrl && (
                      <a 
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link demo-link"
                      >
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>

              <div className="project-content">
                <div className="project-header">
                  <span className="category-badge">{project.category}</span>
                  <h3 className="project-title">{project.title}</h3>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="no-projects">
            <p>No projects found for the selected category.</p>
          </div>
        )}

        {/* Gallery CTA Section */}
        <div className="gallery-cta">
          <h3>Want to see more of my work?</h3>
          <p>Check out my gallery for additional projects and creative work</p>
          <Link to="/gallery" className="gallery-cta-btn">
            Explore Gallery <i className="fas fa-images"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;