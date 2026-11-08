import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { AllTestimonials } from "../components/LearnerTestimonials";
import "../styles/LearnerTestimonials.css";

// Dedicated page: every learner story, all cards visible
const LearnerStories = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    const previousTitle = document.title;
    document.title = "Learner Stories | Fiona A. Aladina";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <section className="lt-section lt-page" aria-labelledby="lt-page-heading">
      <Container>
        <Link to="/#impact" className="lt-back">
          <ArrowLeft size={18} /> Back to portfolio
        </Link>

        <header className="lt-header">
          <h1 id="lt-page-heading" className="lt-heading section-accent is-static">
            Learner <span>Stories</span>
          </h1>
        </header>

        <AllTestimonials />

        <p className="lt-permission">Shared with permission from learners.</p>
      </Container>
    </section>
  );
};

export default LearnerStories;
