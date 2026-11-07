import React, { useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import "../styles/StatsStrip.css";

const stats = [
  { value: 1000, suffix: "+", label: "Learners trained" },
  { value: 6, suffix: "+", label: "Years in tech" },
  { value: 5, suffix: "+", label: "Solutions built" },
];

const DURATION = 2000; // ms
const START_DELAY = 500; // ms — lets the hero settle so the count is noticed

// Counts from 0 to `value` once the strip scrolls into view
const CountUp = ({ value, suffix, start }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!start) return;
    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      document.documentElement.classList.contains("a11y-no-motion")
    ) {
      setCurrent(value);
      return;
    }
    let frame;
    let t0;
    const tick = (now) => {
      if (t0 === undefined) t0 = now;
      const p = Math.min((now - t0) / DURATION, 1);
      const eased = 1 - Math.pow(1 - p, 3); // ease-out
      setCurrent(Math.round(eased * value));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    const timer = setTimeout(() => {
      frame = requestAnimationFrame(tick);
    }, START_DELAY);
    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(frame);
    };
  }, [start, value]);

  return (
    <>
      {current.toLocaleString("en-US")}
      {suffix}
    </>
  );
};

const StatsStrip = () => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="stats-strip" aria-label="Impact at a glance" ref={ref}>
      <Container>
        <ul className="stats-strip-list">
          {stats.map(({ value, suffix, label }) => (
            <li className="stats-strip-item" key={label}>
              <strong className="stats-strip-value">
                <CountUp value={value} suffix={suffix} start={inView} />
              </strong>
              <span className="stats-strip-label">{label}</span>
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
};

export default StatsStrip;
