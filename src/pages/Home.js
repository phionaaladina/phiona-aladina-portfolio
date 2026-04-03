// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { Users, Code, Trophy, Sparkles } from "lucide-react";
// import "../styles/Home.css";

// const Home = () => {
//   const stats = [
//     { icon: <Users size={16} />, count: "1000+", label: "Digitally Skilled" },
//     { icon: <Code size={16} />, count: "5+", label: "Software Solutions" },
//     // { icon: <Sparkles size={16} />, count: "100+", label: "Creators Trained" },
//     { icon: <Trophy size={16} />, count: "5+", label: "Years of Experience" }
//   ];

//   return (
//     <section className="home-hero">
//       {/* Soft Pink Blob Upper Right */}
//       <div className="hero-blob-tr"></div>
//       <div className="hero-blob-bl"></div>

//       <Container className="home-hero-container">
//         <Row className="align-items-center g-0 h-100">
//           {/* Circular Profile Image */}
//           <Col lg={5} className="d-flex justify-content-center hero-img-col">
//             <div className="hero-avatar animate-fade-in">
//               <div className="hero-avatar-ring">
//                 <img
//                   src={process.env.PUBLIC_URL + "/prof1.jpeg"}
//                   alt="Fiona A. Aladina"
//                   className="hero-avatar-img"
//                 />
//               </div>
//               {/* Small floating badge */}
//               <div className="hero-float-badge">
//                 <Code size={14} />
//                 Software Engineer
//               </div>
//             </div>
//           </Col>

//           {/* Main Text Content */}
//           <Col lg={7} className="ps-lg-5 text-center text-lg-start hero-text-col">
//             <div className="hero-body">

//               {/* Eyebrow tag */}
//               <span className="hero-eyebrow animate-up">Welcome.</span>

//               {/* Main Title — replaced Hello / A Bit About Me */}
//               <h1 className="hero-title animate-up delay-1">
//                 Fiona A. <span className="hero-title-pink">Aladina</span>
//               </h1>
//               <p className="hero-role animate-up delay-2">
//                 Software Engineer · Digital Skills Trainer · Mentor
//               </p>
//               <p className="hero-bio animate-up delay-2">
//                 I build impactful software and empower young people through digital skills, coding education, and mentorship across Sub-Saharan Africa.
//               </p>

//               {/* Impact Stats — strict single row */}
//               <div className="hero-stats animate-up delay-3">
//                 {stats.map((s, i) => (
//                   <div key={i} className="hero-stat-item">
//                     <span className="hero-stat-count">{s.count}</span>
//                     <span className="hero-stat-label">{s.label}</span>
//                   </div>
//                 ))}
//               </div>

//               {/* CTA Buttons */}
//               <div className="hero-ctas animate-up delay-4">
//                 <Link to="/about"    className="cta-btn cta-btn-pink">About Me</Link>
//                 <Link to="/projects" className="cta-btn cta-btn-rose">View Projects</Link>
//                 <Link to="/contact"  className="cta-btn cta-btn-outline">Contact Me</Link>
//               </div>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default Home;



// import React, { useEffect, useRef } from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { Users, Code, Trophy, ArrowDown, Sparkles } from "lucide-react";

// /* ── Inline styles (no external CSS needed beyond variables.css) ── */
// const S = {
//   section: {
//     minHeight: "100vh",
//     background: "#ffffff",
//     position: "relative",
//     overflow: "hidden",
//     display: "flex",
//     alignItems: "center",
//     padding: "90px 0 60px",
//     fontFamily: "'Cormorant Garamond', Georgia, serif",
//   },
//   /* ── Mesh background ── */
//   mesh: {
//     position: "absolute",
//     inset: 0,
//     background: `
//       radial-gradient(ellipse 60% 55% at 85% 10%, rgba(219,39,119,0.07) 0%, transparent 70%),
//       radial-gradient(ellipse 40% 40% at 10% 80%, rgba(244,114,182,0.06) 0%, transparent 70%),
//       radial-gradient(ellipse 30% 30% at 60% 90%, rgba(219,39,119,0.04) 0%, transparent 70%)
//     `,
//     pointerEvents: "none",
//     zIndex: 0,
//   },
//   /* ── Vertical accent line ── */
//   accentLine: {
//     position: "absolute",
//     left: "50%",
//     top: "10%",
//     bottom: "10%",
//     width: "1px",
//     background: "linear-gradient(to bottom, transparent, rgba(219,39,119,0.15) 30%, rgba(219,39,119,0.15) 70%, transparent)",
//     zIndex: 1,
//   },
//   /* ── Image column ── */
//   imgCol: {
//     position: "relative",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     paddingBottom: "2rem",
//     zIndex: 2,
//   },
//   avatarWrap: {
//     position: "relative",
//     width: "min(360px, 70vw)",
//     height: "min(360px, 70vw)",
//   },
//   /* Stacked ring layers */
//   ringOuter: {
//     position: "absolute",
//     inset: "-16px",
//     borderRadius: "50%",
//     border: "1px solid rgba(219,39,119,0.12)",
//     animation: "spin 20s linear infinite",
//   },
//   ringMiddle: {
//     position: "absolute",
//     inset: "-8px",
//     borderRadius: "50%",
//     border: "1px dashed rgba(219,39,119,0.18)",
//     animation: "spin 14s linear infinite reverse",
//   },
//   avatarRing: {
//     width: "100%",
//     height: "100%",
//     borderRadius: "50%",
//     overflow: "hidden",
//     boxShadow: "0 0 0 5px #fff, 0 0 0 8px rgba(219,39,119,0.10), 0 32px 80px rgba(219,39,119,0.12)",
//     position: "relative",
//     zIndex: 2,
//   },
//   avatarImg: {
//     width: "100%",
//     height: "100%",
//     objectFit: "cover",
//     display: "block",
//     transition: "transform 0.8s cubic-bezier(0.25, 0.8, 0.25, 1)",
//   },
//   badge: {
//     position: "absolute",
//     bottom: "14px",
//     right: "-18px",
//     background: "#fff",
//     border: "1px solid #fce7f3",
//     borderRadius: "50px",
//     padding: "0.5rem 1.1rem",
//     fontSize: "0.78rem",
//     fontWeight: 700,
//     fontFamily: "'DM Sans', sans-serif",
//     color: "#db2777",
//     display: "flex",
//     alignItems: "center",
//     gap: "0.45rem",
//     boxShadow: "0 8px 28px rgba(219,39,119,0.12)",
//     zIndex: 3,
//     whiteSpace: "nowrap",
//     animation: "floatY 4s ease-in-out infinite",
//   },
//   /* Decorative dot grid */
//   dotGrid: {
//     position: "absolute",
//     top: "-30px",
//     left: "-40px",
//     width: "120px",
//     height: "120px",
//     backgroundImage: "radial-gradient(circle, rgba(219,39,119,0.25) 1.5px, transparent 1.5px)",
//     backgroundSize: "14px 14px",
//     zIndex: 1,
//     opacity: 0.7,
//   },
//   /* ── Text column ── */
//   textCol: {
//     paddingBottom: "2rem",
//     zIndex: 2,
//     position: "relative",
//   },
//   body: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "0.75rem",
//   },
//   eyebrow: {
//     fontFamily: "'DM Sans', sans-serif",
//     fontSize: "0.75rem",
//     fontWeight: 600,
//     letterSpacing: "0.18em",
//     color: "#db2777",
//     textTransform: "uppercase",
//     display: "flex",
//     alignItems: "center",
//     gap: "0.6rem",
//     marginBottom: "0.1rem",
//   },
//   eyebrowLine: {
//     display: "inline-block",
//     width: "28px",
//     height: "1.5px",
//     background: "#db2777",
//     borderRadius: "2px",
//   },
//   title: {
//     fontFamily: "'Cormorant Garamond', Georgia, serif",
//     fontSize: "clamp(2.6rem, 5vw, 3.6rem)",
//     fontWeight: 700,
//     color: "#18181b",
//     letterSpacing: "-0.025em",
//     lineHeight: 1.0,
//     margin: 0,
//   },
//   titlePink: {
//     color: "#db2777",
//     fontStyle: "italic",
//   },
//   role: {
//     fontFamily: "'DM Sans', sans-serif",
//     fontSize: "clamp(0.82rem, 1.3vw, 0.95rem)",
//     fontWeight: 500,
//     color: "#71717a",
//     margin: 0,
//     letterSpacing: "0.01em",
//   },
//   roleDot: {
//     color: "#db2777",
//     margin: "0 0.3rem",
//   },
//   bio: {
//     fontFamily: "'DM Sans', sans-serif",
//     fontSize: "1rem",
//     color: "#52525b",
//     lineHeight: 1.75,
//     maxWidth: "480px",
//     margin: "0 0 0.4rem 0",
//   },
//   /* ── Stats ── */
//   statsRow: {
//     display: "flex",
//     alignItems: "stretch",
//     gap: 0,
//     background: "#fdf2f8",
//     border: "1px solid #fce7f3",
//     borderRadius: "20px",
//     padding: "1rem 0.4rem",
//     width: "fit-content",
//     maxWidth: "100%",
//   },
//   statItem: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     padding: "0.2rem 1.6rem",
//     flexShrink: 0,
//   },
//   statDivider: {
//     width: "1px",
//     background: "#fce7f3",
//     margin: "0.2rem 0",
//     alignSelf: "stretch",
//     flexShrink: 0,
//   },
//   statCount: {
//     fontFamily: "'Cormorant Garamond', Georgia, serif",
//     fontSize: "1.7rem",
//     fontWeight: 700,
//     color: "#db2777",
//     lineHeight: 1,
//     letterSpacing: "-0.02em",
//   },
//   statLabel: {
//     fontFamily: "'DM Sans', sans-serif",
//     fontSize: "0.6rem",
//     fontWeight: 700,
//     color: "#a1a1aa",
//     textTransform: "uppercase",
//     letterSpacing: "0.09em",
//     marginTop: "0.25rem",
//     whiteSpace: "nowrap",
//   },
//   /* ── CTAs ── */
//   ctas: {
//     display: "flex",
//     gap: "0.85rem",
//     flexWrap: "wrap",
//     paddingTop: "0.4rem",
//     alignItems: "center",
//   },
//   btnPrimary: {
//     display: "inline-flex",
//     alignItems: "center",
//     justifyContent: "center",
//     padding: "0.8rem 2rem",
//     borderRadius: "50px",
//     fontFamily: "'DM Sans', sans-serif",
//     fontWeight: 700,
//     fontSize: "0.88rem",
//     textDecoration: "none",
//     letterSpacing: "0.02em",
//     background: "linear-gradient(135deg, #db2777 0%, #be185d 100%)",
//     color: "#fff",
//     boxShadow: "0 6px 22px rgba(219,39,119,0.28)",
//     transition: "transform 0.25s ease, box-shadow 0.25s ease",
//     border: "none",
//   },
//   btnRose: {
//     display: "inline-flex",
//     alignItems: "center",
//     justifyContent: "center",
//     padding: "0.8rem 2rem",
//     borderRadius: "50px",
//     fontFamily: "'DM Sans', sans-serif",
//     fontWeight: 700,
//     fontSize: "0.88rem",
//     textDecoration: "none",
//     letterSpacing: "0.02em",
//     background: "linear-gradient(135deg, #ec4899, #f472b6)",
//     color: "#fff",
//     boxShadow: "0 6px 22px rgba(236,72,153,0.22)",
//     transition: "transform 0.25s ease, box-shadow 0.25s ease",
//     border: "none",
//   },
//   btnOutline: {
//     display: "inline-flex",
//     alignItems: "center",
//     justifyContent: "center",
//     padding: "0.78rem 1.8rem",
//     borderRadius: "50px",
//     fontFamily: "'DM Sans', sans-serif",
//     fontWeight: 700,
//     fontSize: "0.88rem",
//     textDecoration: "none",
//     letterSpacing: "0.02em",
//     background: "transparent",
//     color: "#18181b",
//     border: "1.5px solid #fce7f3",
//     transition: "all 0.25s ease",
//   },
//   /* ── Scroll cue ── */
//   scrollCue: {
//     position: "absolute",
//     bottom: "28px",
//     left: "50%",
//     transform: "translateX(-50%)",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     gap: "6px",
//     zIndex: 5,
//     animation: "floatY 2.5s ease-in-out infinite",
//     cursor: "pointer",
//     opacity: 0.55,
//   },
//   scrollCueText: {
//     fontFamily: "'DM Sans', sans-serif",
//     fontSize: "0.6rem",
//     fontWeight: 600,
//     letterSpacing: "0.12em",
//     textTransform: "uppercase",
//     color: "#a1a1aa",
//   },
// };

// const keyframes = `
//   @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600;1,700&family=DM+Sans:wght@400;500;600;700&display=swap');

//   @keyframes spin {
//     from { transform: rotate(0deg); }
//     to   { transform: rotate(360deg); }
//   }
//   @keyframes floatY {
//     0%, 100% { transform: translateY(0); }
//     50%       { transform: translateY(-8px); }
//   }
//   @keyframes fadeSlideUp {
//     from { opacity: 0; transform: translateY(22px); }
//     to   { opacity: 1; transform: translateY(0); }
//   }
//   .hero-anim { opacity: 0; animation: fadeSlideUp 0.9s cubic-bezier(0.25,0.8,0.25,1) forwards; }
//   .hero-anim-d1 { animation-delay: 0.05s; }
//   .hero-anim-d2 { animation-delay: 0.18s; }
//   .hero-anim-d3 { animation-delay: 0.30s; }
//   .hero-anim-d4 { animation-delay: 0.42s; }
//   .hero-anim-d5 { animation-delay: 0.56s; }

//   .cta-hover-primary:hover { transform: translateY(-3px) !important; box-shadow: 0 12px 32px rgba(219,39,119,0.38) !important; }
//   .cta-hover-rose:hover    { transform: translateY(-3px) !important; box-shadow: 0 12px 32px rgba(236,72,153,0.32) !important; }
//   .cta-hover-outline:hover { background: #fdf2f8 !important; color: #db2777 !important; border-color: #db2777 !important; }

//   .avatar-ring-hover:hover img { transform: scale(1.04); }

//   @media (max-width: 991px) {
//     .hero-scroll-cue { display: none; }
//     .hero-accent-line { display: none; }
//   }
// `;

// const stats = [
//   { count: "1000+", label: "Digitally Skilled" },
//   { count: "5+",    label: "Software Solutions" },
//   { count: "5+",    label: "Years Experience" },
// ];

// const Home = () => {
//   return (
//     <>
//       <style>{keyframes}</style>

//       <section style={S.section}>
//         {/* Background mesh */}
//         <div style={S.mesh} />
//         {/* Subtle vertical line */}
//         <div style={S.accentLine} className="hero-accent-line" />

//         <Container style={{ position: "relative", zIndex: 2 }}>
//           <Row className="align-items-center g-0">

//             {/* ── Image Column ── */}
//             <Col lg={5} style={S.imgCol}>
//               <div style={{ position: "relative" }} className="hero-anim">
//                 {/* Dot grid decoration */}
//                 <div style={S.dotGrid} />

//                 <div style={S.avatarWrap}>
//                   {/* Spinning outer rings */}
//                   <div style={S.ringOuter} />
//                   <div style={S.ringMiddle} />

//                   {/* Avatar */}
//                   <div style={S.avatarRing} className="avatar-ring-hover">
//                     <img
//                       src={process.env.PUBLIC_URL + "/prof1.jpeg"}
//                       alt="Fiona A. Aladina"
//                       style={S.avatarImg}
//                     />
//                   </div>

//                   {/* Floating badge */}
//                   <div style={S.badge}>
//                     <Code size={13} strokeWidth={2.2} />
//                     Software Engineer
//                   </div>
//                 </div>
//               </div>
//             </Col>

//             {/* ── Text Column ── */}
//             <Col lg={7} className="ps-lg-5 text-center text-lg-start" style={S.textCol}>
//               <div style={S.body}>

//                 {/* Eyebrow */}
//                 <span className="hero-anim hero-anim-d1" style={{ ...S.eyebrow, justifyContent: "center" }}
//                   /* on large screens align left */
//                 >
//                   <span style={S.eyebrowLine} />
//                   Welcome
//                   <span style={S.eyebrowLine} />
//                 </span>

//                 {/* Title */}
//                 <h1 className="hero-anim hero-anim-d2" style={S.title}>
//                   Fiona A.{" "}
//                   <span style={S.titlePink}>Aladina</span>
//                 </h1>

//                 {/* Role */}
//                 <p className="hero-anim hero-anim-d2" style={S.role}>
//                   Software Engineer
//                   <span style={S.roleDot}>·</span>
//                   Digital Skills Trainer
//                   <span style={S.roleDot}>·</span>
//                   Mentor
//                 </p>

//                 {/* Bio */}
//                 <p className="hero-anim hero-anim-d3" style={S.bio}>
//                   I build impactful software and empower young people through digital
//                   skills, coding education, and mentorship across Sub-Saharan Africa.
//                 </p>

//                 {/* Stats */}
//                 <div className="hero-anim hero-anim-d4" style={{ display: "flex", justifyContent: "inherit" }}>
//                   <div style={S.statsRow}>
//                     {stats.map((s, i) => (
//                       <React.Fragment key={i}>
//                         {i > 0 && <div style={S.statDivider} />}
//                         <div style={S.statItem}>
//                           <span style={S.statCount}>{s.count}</span>
//                           <span style={S.statLabel}>{s.label}</span>
//                         </div>
//                       </React.Fragment>
//                     ))}
//                   </div>
//                 </div>

//                 {/* CTAs */}
//                 <div className="hero-anim hero-anim-d5" style={{ ...S.ctas, justifyContent: "inherit" }}>
//                   <Link to="/about"    style={S.btnPrimary} className="cta-hover-primary">About Me</Link>
//                   <Link to="/projects" style={S.btnRose}    className="cta-hover-rose">View Projects</Link>
//                   <Link to="/contact"  style={S.btnOutline} className="cta-hover-outline">Contact Me</Link>
//                 </div>

//               </div>
//             </Col>
//           </Row>
//         </Container>

//         {/* Scroll cue */}
//         <div style={S.scrollCue} className="hero-scroll-cue" onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}>
//           <span style={S.scrollCueText}>Scroll</span>
//           <ArrowDown size={14} color="#a1a1aa" strokeWidth={2} />
//         </div>
//       </section>
//     </>
//   );
// };

// export default Home;




import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Code, ArrowDown } from "lucide-react";
import "../styles/Home.css";

const stats = [
  { count: "1000+", label: "Digitally Skilled" },
  { count: "5+",    label: "Software Solutions" },
  { count: "5+",    label: "Years Experience" },
];

const Home = () => {
  return (
    <section className="home-hero">

      {/* Background mesh */}
      <div className="hero-mesh" />

      {/* Vertical accent line */}
      <div className="hero-accent-line" />

      <Container className="home-hero-container">
        <Row className="align-items-center g-0">

          {/* Image Column */}
          <Col lg={5} className="hero-img-col">
            <div className="hero-anim" style={{ position: "relative" }}>

              <div className="hero-dot-grid" />

              <div className="hero-avatar-wrap">
                <div className="hero-ring-outer" />
                <div className="hero-ring-middle" />

                <div className="hero-avatar-ring">
                  <img
                    src={process.env.PUBLIC_URL + "/prof1.jpeg"}
                    alt="Fiona A. Aladina"
                    className="hero-avatar-img"
                  />
                </div>

                <div className="hero-float-badge">
                  <Code size={13} strokeWidth={2.2} />
                  Tech Enthusiast
                </div>
              </div>
            </div>
          </Col>

          {/* Text Column */}
          <Col lg={7} className="ps-lg-5 text-center text-lg-start hero-text-col">
            <div className="hero-body">

              <span className="hero-eyebrow hero-anim hero-anim-d1">
                <span className="hero-eyebrow-line" />
                Welcome
                <span className="hero-eyebrow-line" />
              </span>

              <h1 className="hero-title hero-anim hero-anim-d2">
                Fiona A. Aladina{" "}
                {/* <span className="hero-title-pink">Aladina</span> */}
              </h1>

              <p className="hero-role hero-anim hero-anim-d2">
                Software Engineer
                <span className="hero-role-dot">·</span>
                Digital Skills Trainer
                <span className="hero-role-dot">·</span>
                Mentor
              </p>

              <p className="hero-bio hero-anim hero-anim-d3">
                I build impactful software and empower young people through digital
                skills, coding education, and mentorship.
              </p>

              <div className="hero-anim hero-anim-d4">
                <div className="hero-stats">
                  {stats.map((s, i) => (
                    <React.Fragment key={i}>
                      {i > 0 && <div className="hero-stat-divider" />}
                      <div className="hero-stat-item">
                        <span className="hero-stat-count">{s.count}</span>
                        <span className="hero-stat-label">{s.label}</span>
                      </div>
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <div className="hero-ctas hero-anim hero-anim-d5">
                <Link to="/about"    className="cta-btn cta-btn-pink">About Me</Link>
                <Link to="/projects" className="cta-btn cta-btn-rose">View Projects</Link>
                <Link to="/contact"  className="cta-btn cta-btn-outline">Contact Me</Link>
              </div>

            </div>
          </Col>
        </Row>
      </Container>

      <div
        className="hero-scroll-cue"
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
      >
        <span className="hero-scroll-cue-text">Scroll</span>
        <ArrowDown size={14} color="#a1a1aa" strokeWidth={2} />
      </div>

    </section>
  );
};

export default Home;