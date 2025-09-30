import React, { useState } from 'react';
import '../styles/Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "UNIHUB SOLUTIONS UGANDA PLATFORM",
      description: "A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      image: "../unipg.png",
      technologies: ["React", "Node.js", "Python", "MySQL","Bootstrap"],
      githubUrl: "https://github.com/username/ecommerce-platform",
      liveUrl: "https://unihubug.com",
      category: "Web Development"
    },
    {
      id: 2,
      title: "MERAKI ACTION INITIATIVE WEBSITE",
      description: "A non-profit organization website built with WordPress and Elementor, featuring a blog, donation system, and event management.",
      image: "../meraki.png",
      technologies: ["Wordpress", "Elementor", "PHP", "MySQL"],
      githubUrl: "https://github.com/username/task-manager",
      liveUrl: "https://merakiinitiative.org",
      category: "Web Development"
    },
    {
      id: 3,
      title: "BOOK MANAGEMENT SYSTEM",
      description: " A book management system that allows users to add, edit, delete, and search for books in a library database.",
      image: "../bms.png",
      technologies: ["JavaScript", "HTML", "CSS"],
      githubUrl: "https://github.com/phionaaladina/BOOK-MANAGEMENT-SYSTEM-JAVASCRIPT-PROJECT",
      liveUrl: "https://phionaaladina.github.io/BOOK-MANAGEMENT-SYSTEM-JAVASCRIPT-PROJECT/",
      category: "Web Development"
    }//,
    // {
    //   id: 4,
    //   title: "Mobile Fitness Tracker",
    //   description: "A React Native mobile app for tracking workouts, nutrition, and fitness goals with offline capability.",
    //   image: "https://via.placeholder.com/400x250/45b3e0/ffffff?text=Fitness+Tracker",
    //   technologies: ["React Native", "SQLite", "AsyncStorage", "Expo"],
    //   githubUrl: "https://github.com/username/fitness-tracker",
    //   liveUrl: null,
    //   category: "Mobile Development"
    // },
    // {
    //   id: 5,
    //   title: "AI Chat Bot",
    //   description: "An intelligent chatbot built with Python and natural language processing to provide customer support automation.",
    //   image: "https://via.placeholder.com/400x250/45b3e0/ffffff?text=AI+ChatBot",
    //   technologies: ["Python", "NLTK", "Flask", "Machine Learning"],
    //   githubUrl: "https://github.com/username/ai-chatbot",
    //   liveUrl: "https://chatbot-demo.com",
    //   category: "AI/ML"
    // },
    // {
    //   id: 6,
    //   title: "Portfolio Website",
    //   description: "A responsive portfolio website showcasing my work and skills, built with modern web technologies.",
    //   image: "https://via.placeholder.com/400x250/45b3e0/ffffff?text=Portfolio+Website",
    //   technologies: ["React", "CSS3", "React Router", "Responsive Design"],
    //   githubUrl: "https://github.com/username/portfolio",
    //   liveUrl: "https://fiona-aladina.com",
    //   category: "Web Development"
    // }
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
      </div>
    </div>
  );
};

export default Projects;