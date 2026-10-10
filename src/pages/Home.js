import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import "../styles/Home.css";

/* ── Animated Counter Hook ───────────────────────────────────── */
function useCountUp(target, duration = 1800, suffix = "") {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [started, target, duration]);

  return { ref, display: count + suffix };
}

/* ── Component ───────────────────────────────────────────────── */
const Home = () => {
  const trained = useCountUp(1000, 1800, "+");
  const years = useCountUp(6, 1200, "+");
  const built = useCountUp(5, 1000, "+");

  return (
    <section className="home-hero">
      {/* Background ambient mesh */}
      <div className="hero-mesh" />

      <Container className="home-hero-container">
        <Row className="align-items-center g-5">

          {/* Left: Avatar Column with Floating Role Pills */}
          <Col lg={5} className="hero-img-col">
            <div className="hero-anim" style={{ position: "relative" }}>
              <div className="hero-dot-grid" />

              <div className="hero-avatar-wrap">
                <div className="hero-image-card">
                  <img
                    src={process.env.PUBLIC_URL + "/prof1.jpeg"}
                    alt="Aladina"
                    className="hero-avatar-img"
                  />
                  {/* <div className="hero-image-caption">
                    <span className="caption-mark"><Sparkles size={14} /></span>
                    <span>Building with purpose</span>
                  </div> */}
                </div>

                <div className="hero-orbit orbit-one" />
                <div className="hero-orbit orbit-two" />
                {/* <div className="hero-image-badge">
                  <span className="badge-dot" />
                  Open to meaningful work
                </div> */}
              </div>
            </div>
          </Col>

          {/* Right: Narrative Content Column */}
          <Col lg={7} className="ps-lg-4 text-center text-lg-start hero-text-col">
            <div className="hero-body">

              {/* 1. Headline */}
              <div className="hero-hook-title hero-anim hero-anim-d1">
                <h1 className="hero-headline">
                  <span className="hook-line">Passionate Digital Skills Trainer</span>
                  <span className="hook-line hook-highlight">Software Developer</span>
                </h1>
              </div>

              {/* 2. Personal Bio */}
              <p className="hero-bio hero-anim hero-anim-d2">
                From building digital solutions to teaching young people practical tech skills that can change the trajectory of their lives, I’m passionate about making technology understandable, useful, and accessible.
              </p>

              {/* 3. Proof Stats — clean, no pill */}
              <div className="hero-proof-bar hero-anim hero-anim-d3">
                <span className="proof-item" ref={trained.ref}>
                  <strong className="proof-stat">{trained.display}</strong>
                  <span className="proof-label">people trained</span>
                </span>
                <span className="proof-item" ref={years.ref}>
                  <strong className="proof-stat">{years.display}</strong>
                  <span className="proof-label">years in tech</span>
                </span>
                <span className="proof-item" ref={built.ref}>
                  <strong className="proof-stat">{built.display}</strong>
                  <span className="proof-label">solutions built</span>
                </span>
              </div>

              {/* 4. CTAs */}
              <div className="hero-ctas hero-anim hero-anim-d4">
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
                    window.history.replaceState(null, "", "#projects");
                  }}
                  className="cta-btn cta-btn-primary"
                >
                  View My Work <ArrowRight size={16} className="ms-1" />
                </a>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    window.history.replaceState(null, "", "#contact");
                  }}
                  className="cta-btn cta-btn-outline"
                >
                  Let's Connect <ArrowUpRight size={16} className="ms-1" />
                </a>
              </div>

            </div>
          </Col>

        </Row>
      </Container>
    </section>
  );
};

export default Home;