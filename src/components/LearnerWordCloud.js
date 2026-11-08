import React from "react";
import { Container } from "react-bootstrap";
import ScrollReveal from "./ScrollReveal";
import "../styles/LearnerWordCloud.css";

/*
 * Words learners use to describe learning with Phiona.
 *
 * tier  — size hierarchy: 1 dominant · 2 medium-large · 3 medium · 4 supporting
 * tone  — brand colour token: "blue" | "slate" | "gray"
 * x, y  — desktop position (word centre) on a 1080 × 580 reference canvas;
 *         converted to percentages so the composition scales as one piece
 * r     — slight rotation in degrees (softened on tablet, removed on mobile)
 *
 * Array order is also the reading / tablet-mobile flow order, interleaving
 * sizes so the smaller layouts stay balanced.
 */
const words = [
  { text: "Approachable", tier: 2, tone: "slate", x: 250, y: 62 },
  { text: "Confidence", tier: 4, tone: "gray", x: 560, y: 42 },
  { text: "Patient", tier: 1, tone: "blue", x: 262, y: 162 },
  { text: "Kind", tier: 2, tone: "slate", x: 528, y: 132, r: -4 },
  { text: "Knowledgeable", tier: 3, tone: "gray", x: 800, y: 72 },
  { text: "Attentive", tier: 4, tone: "gray", x: 168, y: 232 },
  { text: "Supportive", tier: 2, tone: "blue", x: 790, y: 160 },
  { text: "Helpful", tier: 3, tone: "slate", x: 560, y: 200 },
  { text: "Growth", tier: 4, tone: "gray", x: 985, y: 118 },
  { text: "Inspiring", tier: 3, tone: "gray", x: 160, y: 300, r: -4 },
  { text: "Encouraging", tier: 1, tone: "slate", x: 572, y: 292 },
  { text: "Understanding", tier: 3, tone: "gray", x: 935, y: 248 },
  { text: "Patient teacher", tier: 4, tone: "gray", x: 905, y: 205 },
  { text: "Lively", tier: 3, tone: "slate", x: 960, y: 322, r: 4 },
  { text: "Empowering", tier: 2, tone: "blue", x: 232, y: 398, r: -3 },
  { text: "Committed", tier: 3, tone: "gray", x: 505, y: 380 },
  { text: "Clear", tier: 3, tone: "slate", x: 700, y: 384 },
  { text: "Independence", tier: 4, tone: "gray", x: 885, y: 398 },
  { text: "Motivating", tier: 4, tone: "gray", x: 300, y: 556 },
  { text: "Practical", tier: 1, tone: "blue", x: 640, y: 472 },
  { text: "Inclusive", tier: 2, tone: "slate", x: 290, y: 486 },
  { text: "Energetic", tier: 3, tone: "gray", x: 950, y: 474, r: -3 },
  { text: "Creative", tier: 3, tone: "slate", x: 92, y: 482, r: 3 },
  { text: "Practical teaching", tier: 4, tone: "gray", x: 645, y: 548 },
];

const CANVAS_W = 1080;
const CANVAS_H = 580;
const STAGGER = 45; // ms between words as the cloud fades in

// Reveal the dominant words first, then each smaller tier
const revealIndex = new Map(
  [...words]
    .sort((a, b) => a.tier - b.tier)
    .map((word, i) => [word.text, i])
);

const LearnerWordCloud = () => (
  <section className="lx-section" aria-labelledby="lx-heading">
    <Container>
      <ScrollReveal animation="fade-up" once>
        <header className="lx-header">
          <h2 id="lx-heading" className="lx-heading section-accent">
            How learners describe <span>learning with me</span>
          </h2>
        </header>
      </ScrollReveal>

      <ScrollReveal
        as="ul"
        animation="fade"
        duration={400}
        threshold={0.2}
        once
        className="lx-cloud"
        aria-label="Words learners use to describe learning with me"
      >
        {words.map(({ text, tier, tone, x, y, r = 0 }) => (
          <li
            key={text}
            className={`lx-word lx-tier-${tier} lx-tone-${tone}`}
            style={{
              "--x": `${(x / CANVAS_W) * 100}%`,
              "--y": `${(y / CANVAS_H) * 100}%`,
              "--r": `${r}deg`,
              "--d": `${revealIndex.get(text) * STAGGER}ms`,
            }}
          >
            <span className="lx-word-inner">{text}</span>
          </li>
        ))}
      </ScrollReveal>
    </Container>
  </section>
);

export default LearnerWordCloud;
