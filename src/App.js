import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

// Standard Styling
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './index.css';
import './App.css';

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import ScrollToTop from "./components/ScrollToTop";
import StatsStrip from "./components/StatsStrip";
import AccessibilityWidget from "./components/AccessibilityWidget";

// Sections
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const PortfolioPage = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if user loaded the site with a hash or path
    const hash = window.location.hash.replace("#", "");
    const path = location.pathname.replace("/", "");
    const target = hash || (path && path !== "" ? path : null);

    if (target && ["home", "about", "skills", "projects", "contact"].includes(target)) {
      const timer = setTimeout(() => {
        const el = document.getElementById(target);
        if (el) {
          el.scrollIntoView({
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth"
          });
        }
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <div className="portfolio-continuous-flow">
      <section id="home" className="portfolio-section">
        <Home />
      </section>

      <StatsStrip />

      <section id="about" className="portfolio-section">
        <About />
      </section>

      <section id="skills" className="portfolio-section">
        <Skills />
      </section>

      <section id="projects" className="portfolio-section">
        <Projects />
      </section>

      <section id="contact" className="portfolio-section">
        <Contact />
      </section>
    </div>
  );
};

const AppContent = () => {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />

      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<PortfolioPage />} />
          <Route path="/about" element={<PortfolioPage />} />
          <Route path="/skills" element={<PortfolioPage />} />
          <Route path="/projects" element={<PortfolioPage />} />
          <Route path="/contact" element={<PortfolioPage />} />
          <Route path="/services" element={<PortfolioPage />} />
          <Route path="*" element={<PortfolioPage />} />
        </Routes>
      </main>

      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
      <AccessibilityWidget />
    </div>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
