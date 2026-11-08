import React, { useCallback, useEffect, useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { UserRound, ChevronLeft, ChevronRight, Pause, Play, ArrowRight } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import "../styles/LearnerTestimonials.css";

/*
 * Learner testimonials — shared with permission.
 * Lightly edited excerpts of each learner's own feedback: shortened for
 * readability while keeping their meaning, experiences and voice.
 * Learners are identified by their Christian name only.
 *
 * highlight — one of the learner's own sentences (must match the text
 *             exactly) that is visually emphasised; nothing is added.
 *
 * Cards are pre-arranged into two columns of roughly equal length so the
 * desktop layout stays balanced; on mobile the columns stack in order.
 */

// Featured stories — slightly larger cards
const featuredColumns = [
  [
    {
      name: "Anita",
      highlight: "Now I feel I can actually do the work, not just talk about it.",
      quote: [
        "Before the training, I could use basic tools like Word, email and WhatsApp, but I didn’t feel very confident. I would panic when trying new tools or platforms.",
        "I learned to use Google Workspace, Calendly, Trello, Asana, Canva and Zapier. I’ve used these skills to build my CV and Upwork profile, organize my applications and schedule, and start applying for remote work.",
        "You explained things simply, were patient, and made us feel free to ask questions. The practical lessons and encouragement boosted my confidence. Now I feel I can actually do the work, not just talk about it.",
      ],
    },
    {
      name: "Victoria",
      highlight: "Your training was a game changer for me.",
      quote: [
        "Before the training, I had no computer skills. I couldn’t even open or close a computer.",
        "I can now use Microsoft Word, Excel and PowerPoint. I can even teach my fellows some of the things I learned.",
        "What stood out was how practical and encouraging the training was. You explained and repeated everything to make sure we understood. Your training was a game changer for me. You made me believe in myself.",
      ],
    },
  ],
  [
    {
      name: "Gloria",
      highlight: "She creates an environment where everyone feels included, encouraged and motivated to learn.",
      quote: [
        "Before the training, I had basic computer knowledge but limited confidence using spreadsheets, data entry and graphic design tools.",
        "Through Ms Aladina Phiona’s sessions, I gained skills in spreadsheets, data entry and Canva. Class presentations also helped boost my confidence in using digital tools and expressing myself professionally.",
        "My experience has been amazing and enriching. I particularly appreciate her patience, commitment and practical teaching approach. She creates an environment where everyone feels included, encouraged and motivated to learn.",
      ],
    },
    {
      name: "Joan",
      highlight: "It was the best thing that happened to me",
      quote: [
        "I didn’t have confidence or knowledge of basic ICT. Having Aladina as my trainer, today I can use a computer so well.",
        "I learned Word, PowerPoint and Excel, and these skills are helping me build my healing brand and organization.",
        "I joined while recovering from a serious illness and dealing with brain fog. She was very patient and considerate of my learning pace. It was the best thing that happened to me, and I’m so grateful for her help.",
      ],
    },
  ],
];

// Compact cards
const shortColumns = [
  [
    {
      name: "Ruth",
      highlight: "She encouraged me to try things by myself",
      quote: [
        "Before the training, my confidence was low. I could use WhatsApp and my phone for basic things, but I was afraid of computers and digital tools for my business.",
        "I learned Google Forms, Google Docs, WhatsApp for Business and how to search for information and prices online. I now use these skills in Ruth Data Services and my bakery to serve customers and promote my cakes online.",
        "The trainer was patient, explained things simply, and gave practical examples. She encouraged me to try things by myself and made me feel free to ask questions.",
      ],
    },
    {
      name: "Maureen",
      highlight: "I love how practical your teaching is.",
      quote: [
        "Before the training, I only used basic digital tools and had limited confidence trying new ones.",
        "I learned to use advanced tools and now apply them in my work to complete tasks faster and more efficiently.",
        "I love how practical your teaching is. You make sure none of us misses anything, share resources and links, and remind us to join meetings. I’m glad we’re still learning with you as our facilitator.",
      ],
    },
    {
      name: "Aurelia",
      highlight: "I gained computer skills and can now teach my friends.",
      quote: [
        "My knowledge was minimal before the training. I gained computer skills and can now teach my friends.",
        "You were patient with us.",
      ],
    },
    {
      name: "Sandra",
      highlight: "I learned PowerPoint, which helps me a lot with presentations at work.",
      quote: [
        "I was not good at using the keyboard with both hands. I learned PowerPoint, which helps me a lot with presentations at work.",
        "It was a lively experience for me.",
      ],
    },
  ],
  [
    {
      name: "Rhoda",
      highlight: "I can now prepare well-formatted work reports",
      quote: [
        "Before the training, I had basic digital knowledge but lacked confidence, especially in Microsoft Excel.",
        "I learned Excel, document formatting and editing, and professional email writing. I can now prepare well-formatted work reports, and my communication and presentation confidence have improved.",
        "Phiona is a good trainer with the ability to transfer knowledge. I particularly appreciate her patience, energy and ability to make sure everyone understands what is being taught.",
      ],
    },
    {
      name: "Ritah",
      highlight: "You are patient enough to move with the slowest student until they understand what you are teaching.",
      quote: [
        "I had very little knowledge and was not confident at all.",
        "Starting from Basic Computing, I gained skills in professional email writing, Word, Excel and PowerPoint. I can now confidently write emails when applying for jobs and organize and successfully present PowerPoint presentations.",
        "You are patient enough to move with the slowest student until they understand what you are teaching.",
      ],
    },
    {
      name: "Sophia",
      highlight: "You were approachable, kind and helpful.",
      quote: [
        "Before the training, I really didn’t know much about computers. After the training, I became more confident, improved my typing speed and learned how to use a mouse.",
        "I also learned Microsoft Excel, which I previously knew nothing about.",
        "You were approachable, kind and helpful.",
      ],
    },
    {
      // Anonymous at the learner's request — no name anywhere
      name: null,
      attribution: "Digital Skills Training Participant",
      highlight: "You gave quality time to those of us who knew absolutely nothing.",
      quote: [
        "I totally lacked knowledge about digital technology.",
        "I have now learned how to analyse students’ marks.",
        "You gave quality time to those of us who knew absolutely nothing.",
      ],
    },
  ],
];

// Wrap the highlighted sentence (if present in this paragraph) in <mark>
const renderParagraph = (text, highlight) => {
  const at = highlight ? text.indexOf(highlight) : -1;
  if (at === -1) return text;
  return (
    <>
      {text.slice(0, at)}
      <mark className="lt-hl">{highlight}</mark>
      {text.slice(at + highlight.length)}
    </>
  );
};

// Card content shared by the grid and the carousel
const CardBody = ({ name, attribution, highlight, quote, variant }) => (
  <figure className={`lt-card lt-card--${variant}`}>
    <span className="lt-mark" aria-hidden="true">“</span>
    <figcaption className="lt-person">
      <span className="lt-avatar" aria-hidden="true">
        {name ? name.charAt(0) : <UserRound size={20} strokeWidth={1.75} />}
      </span>
      <span className="lt-name">{name || attribution}</span>
    </figcaption>
    <blockquote className="lt-quote">
      {quote.map((paragraph, i) => (
        <p key={i}>{renderParagraph(paragraph, highlight)}</p>
      ))}
    </blockquote>
  </figure>
);

/* ── Grid layout (all cards visible) ── */
const TestimonialColumns = ({ columns, variant }) => (
  <div className={`lt-columns lt-columns--${variant}`}>
    {columns.map((column, c) => (
      <div className="lt-column" key={c}>
        {column.map((t, i) => (
          <ScrollReveal key={`${variant}-${c}-${i}`} animation="fade-up" delay={c * 120} once>
            <CardBody {...t} variant={variant} />
          </ScrollReveal>
        ))}
      </div>
    ))}
  </div>
);

/* ── Carousel layout (two testimonials at a time, auto-advancing) ── */
// Columns are interleaved so the slide order alternates between them
const interleave = ([a, b]) => a.flatMap((item, i) => (b[i] ? [item, b[i]] : [item]));
const featuredSlides = interleave(featuredColumns).map((t) => ({ ...t, variant: "featured" }));
const shortSlides = interleave(shortColumns).map((t) => ({ ...t, variant: "short" }));
const allSlides = [...featuredSlides, ...shortSlides];

const AUTOPLAY_MS = 7000; // time each pair stays on screen

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
  document.documentElement.classList.contains("a11y-no-motion");

// Two cards per page on tablet/desktop, one on phones
const usePerPage = () => {
  const query = "(min-width: 768px)";
  const [perPage, setPerPage] = useState(() => (window.matchMedia(query).matches ? 2 : 1));
  useEffect(() => {
    const mq = window.matchMedia(query);
    const update = () => setPerPage(mq.matches ? 2 : 1);
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return perPage;
};

const TestimonialCarousel = ({ slides, label = "Learner testimonials" }) => {
  const perPage = usePerPage();
  const pages = [];
  for (let i = 0; i < slides.length; i += perPage) pages.push(slides.slice(i, i + perPage));
  const total = pages.length;

  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(() => !prefersReducedMotion());
  const [held, setHeld] = useState(false); // hover or keyboard focus inside
  const touchStartX = useRef(null);

  // Keep the index valid when the layout switches between 1 and 2 per page
  useEffect(() => {
    setCurrent((c) => Math.min(c, total - 1));
  }, [total]);

  const goTo = useCallback((i) => setCurrent((i + total) % total), [total]);
  const prev = () => goTo(current - 1);
  const next = useCallback(() => setCurrent((c) => (c + 1) % total), [total]);

  // Auto-advance; pauses while hovered, focused, or paused by the visitor
  useEffect(() => {
    if (!playing || held || total < 2) return undefined;
    const timer = setInterval(next, AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [playing, held, next, total]);

  const onKeyDown = (e) => {
    if (e.key === "ArrowLeft") { e.preventDefault(); prev(); }
    if (e.key === "ArrowRight") { e.preventDefault(); next(); }
  };

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
    touchStartX.current = null;
  };

  const labelFor = (page) => page.map((t) => t.name || t.attribution).join(" and ");

  return (
    <ScrollReveal animation="fade-up" once>
      <div
        className="lt-carousel"
        role="region"
        aria-roledescription="carousel"
        aria-label={label}
        onKeyDown={onKeyDown}
        onMouseEnter={() => setHeld(true)}
        onMouseLeave={() => setHeld(false)}
        onFocus={() => setHeld(true)}
        onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setHeld(false); }}
      >
        {/* All pages share one grid cell, so the height never jumps */}
        <div
          className="lt-slides"
          aria-live={playing && !held ? "off" : "polite"}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {pages.map((page, i) => {
            const state = i === current ? "is-active" : i < current ? "is-before" : "is-after";
            return (
              <div
                key={`${perPage}-${i}`}
                className={`lt-slide lt-slide--${perPage}up ${state}`}
                role="group"
                aria-roledescription="slide"
                aria-label={`${i + 1} of ${total}: ${labelFor(page)}`}
                aria-hidden={i !== current}
                inert={i !== current}
              >
                {page.map((t) => (
                  <CardBody key={t.name || t.attribution} {...t} />
                ))}
              </div>
            );
          })}
        </div>

        <div className="lt-controls">
          <button type="button" className="lt-arrow" onClick={prev} aria-label="Previous testimonials">
            <ChevronLeft size={22} strokeWidth={1.75} />
          </button>

          <div className="lt-dots">
            {pages.map((page, i) => (
              <button
                key={i}
                type="button"
                className={`lt-dot ${i === current ? "is-active" : ""}`}
                onClick={() => goTo(i)}
                aria-label={`Show ${labelFor(page)}`}
                aria-current={i === current ? "true" : undefined}
              >
                <span aria-hidden="true" />
              </button>
            ))}
          </div>

          <button type="button" className="lt-arrow" onClick={next} aria-label="Next testimonials">
            <ChevronRight size={22} strokeWidth={1.75} />
          </button>

          <button
            type="button"
            className="lt-arrow lt-play"
            onClick={() => setPlaying((p) => !p)}
            aria-label={playing ? "Pause automatic rotation" : "Start automatic rotation"}
          >
            {playing ? <Pause size={18} strokeWidth={1.75} /> : <Play size={18} strokeWidth={1.75} />}
          </button>
        </div>
      </div>
    </ScrollReveal>
  );
};


// Compare layouts:
//   "hybrid"   — four featured stories as cards, shorter ones in a carousel
//   "carousel" — all twelve, two at a time
//   "grid"     — all twelve cards visible
const LAYOUT = "carousel";

// Every story as cards — used by the grid layout and the Learner Stories page
export const AllTestimonials = () => (
  <>
    <TestimonialColumns columns={featuredColumns} variant="featured" />
    <TestimonialColumns columns={shortColumns} variant="short" />
  </>
);

const LearnerTestimonials = () => (
  <section className="lt-section" aria-labelledby="lt-heading">
    <Container>
      <ScrollReveal animation="fade-up" once>
        <header className="lt-header">
          <h2 id="lt-heading" className="lt-heading section-accent">
            Learner <span>Stories</span>
          </h2>
        </header>
      </ScrollReveal>

      {LAYOUT === "hybrid" ? (
        <>
          <TestimonialColumns columns={featuredColumns} variant="featured" />
          <div className="lt-more">
            <TestimonialCarousel slides={shortSlides} label="More learner testimonials" />
          </div>
        </>
      ) : LAYOUT === "carousel" ? (
        <TestimonialCarousel slides={allSlides} />
      ) : (
        <AllTestimonials />
      )}

      {LAYOUT !== "grid" && (
        <div className="lt-readall-wrap">
          <Link to="/learner-stories" className="lt-readall">
            Read all learner stories <ArrowRight size={18} />
          </Link>
        </div>
      )}

      <p className="lt-permission">Shared with permission from learners.</p>
    </Container>
  </section>
);

export default LearnerTestimonials;
