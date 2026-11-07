import React from 'react';
import { Container } from 'react-bootstrap';
import { Github, ArrowUpRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import '../styles/Projects.css';

// github: add a repository URL to show a "Code" link on the card (leave null to hide it)
const projects = [
  {
    id: "mamagym",
    title: "MamaGym Wear 256",
    category: "E-Commerce",
    description: "Online store for fitness apparel with cart, checkout and an admin dashboard.",
    image: "/mamagym.png",
    tech: ["Next.js", "TailwindCSS", "MySQL", "Node.js"],
    github: null,
    live: "https://mamagymwear256.com/"
  },
  {
    id: "miya",
    title: "MIYA Initiative",
    category: "Web Platform",
    description: "Platform for MIYA's digital-citizenship training and community across Africa.",
    image: "/miya.png",
    tech: ["Next.js", "TailwindCSS", "MySQL", "Node.js"],
    github: null,
    live: "https://miyainitiative.com/"
  }
];

const Projects = () => (
  <div className="pj-section">
    <Container>
      <ScrollReveal animation="fade-up" once>
        <h2 className="pj-heading section-accent">Featured <span>Work</span></h2>
      </ScrollReveal>

      <div className="pj-grid">
        {projects.map((p, i) => (
          <ScrollReveal key={p.id} animation="fade-up" delay={i * 120} once className="pj-cell">
            <article className="pj-card">
              <a
                href={p.live}
                target="_blank"
                rel="noopener noreferrer"
                className="pj-shot"
                aria-label={`Visit ${p.title}`}
              >
                <span className="pj-browser-bar" aria-hidden="true">
                  <i /><i /><i />
                </span>
                <img
                  src={process.env.PUBLIC_URL + p.image}
                  alt={`${p.title} homepage`}
                  loading="lazy"
                />
              </a>

              <div className="pj-body">
                <span className="pj-category">{p.category}</span>
                <h3 className="pj-title">{p.title}</h3>
                <p className="pj-desc">{p.description}</p>

                <ul className="pj-tech" aria-label="Built with">
                  {p.tech.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>

                <div className="pj-links">
                  <a href={p.live} target="_blank" rel="noopener noreferrer" className="pj-link">
                    Visit site <ArrowUpRight size={16} />
                  </a>
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="pj-link pj-link--muted">
                      <Github size={16} /> Code
                    </a>
                  )}
                </div>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </Container>
  </div>
);

export default Projects;
