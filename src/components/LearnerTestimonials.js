import React from "react";
import { Container } from "react-bootstrap";
import { UserRound } from "lucide-react";
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

const TestimonialCard = ({ name, attribution, highlight, quote, variant, delay }) => (
  <ScrollReveal animation="fade-up" delay={delay} once>
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
  </ScrollReveal>
);

const TestimonialColumns = ({ columns, variant }) => (
  <div className={`lt-columns lt-columns--${variant}`}>
    {columns.map((column, c) => (
      <div className="lt-column" key={c}>
        {column.map((t, i) => (
          <TestimonialCard
            key={`${variant}-${c}-${i}`}
            {...t}
            variant={variant}
            delay={c * 120}
          />
        ))}
      </div>
    ))}
  </div>
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

      <TestimonialColumns columns={featuredColumns} variant="featured" />
      <TestimonialColumns columns={shortColumns} variant="short" />

      <p className="lt-permission">Shared with permission from learners.</p>
    </Container>
  </section>
);

export default LearnerTestimonials;
