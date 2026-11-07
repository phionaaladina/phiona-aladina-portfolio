import React from "react";
import { Container } from "react-bootstrap";
import "../styles/StatsStrip.css";

const stats = [
  { value: "1,000+", label: "Learners trained" },
  { value: "6+", label: "Years in tech" },
  { value: "5+", label: "Solutions built" },
];

const StatsStrip = () => (
  <div className="stats-strip" aria-label="Impact at a glance">
    <Container>
      <ul className="stats-strip-list">
        {stats.map(({ value, label }) => (
          <li className="stats-strip-item" key={label}>
            <strong className="stats-strip-value">{value}</strong>
            <span className="stats-strip-label">{label}</span>
          </li>
        ))}
      </ul>
    </Container>
  </div>
);

export default StatsStrip;
