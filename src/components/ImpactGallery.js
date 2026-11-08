import React from "react";
import { Container } from "react-bootstrap";
import ScrollReveal from "./ScrollReveal";
import "../styles/Skills.css"; // gallery styles (.gal-*) live here

const impactImages = [
  "/class.jpeg",
  "/cldn.jpg",
  "/partc.jpg",
  "/itsupport1.jpg",
  "/itsupport.jpg",
  "/training.jpg"
];

const ImpactGallery = () => (
  <section className="gal-section" aria-labelledby="gallery-heading">
    <Container>
      <ScrollReveal once>
        <h2 id="gallery-heading" className="gal-heading section-accent">Impact <span>in Action</span></h2>
      </ScrollReveal>
      <div className="gal-grid">
        {impactImages.map((image, index) => (
          <ScrollReveal
            key={image}
            animation="zoom-in"
            delay={index * 90}
            once
            className={`gal-item gal-item-${index + 1}`}
          >
            <figure className="gal-card">
              <img
                src={process.env.PUBLIC_URL + image}
                alt={`Phiona Aladina's work in action (${index + 1} of ${impactImages.length})`}
                className="gal-img"
                loading="lazy"
              />
            </figure>
          </ScrollReveal>
        ))}
      </div>
    </Container>
  </section>
);

export default ImpactGallery;
