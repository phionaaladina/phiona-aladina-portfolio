import React, { useState, useEffect, useCallback } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { X, ChevronLeft, ChevronRight, ArrowRight, Maximize2, FileText, Send } from 'lucide-react';
import '../styles/Gallery.css';

const galleryItems = [
  { id: 1, image: process.env.PUBLIC_URL + "/partc.jpg",     category: "Training",    title: "Interactive Learning",    caption: "Participant engaged in a technical training session assignment." },
  { id: 2, image: process.env.PUBLIC_URL + "/cldn.jpg",      category: "Mentorship",  title: "Youth Tech Mentorship",  caption: "Empowering the next generation with foundational tech skills." },
  { id: 3, image: process.env.PUBLIC_URL + "/itsupport1.jpg",category: "IT Support",  title: "Hardware Support",       caption: "Hands-on computer repair and hardware maintenance." },
  { id: 4, image: process.env.PUBLIC_URL + "/itsupport.jpg", category: "IT Support",  title: "System Maintenance",     caption: "Expert troubleshooting and system diagnostics." },
  { id: 5, image: process.env.PUBLIC_URL + "/partc1.jpg",    category: "Training",    title: "Graduation Moment",      caption: "Celebrating a milestone with graduating program participants." },
  { id: 6, image: process.env.PUBLIC_URL + "/training.jpg",  category: "Training",    title: "Workshops Lead",         caption: "Conducting technical workshops for community growth." },
  // { id: 7, image: process.env.PUBLIC_URL + "/unipg.png",     category: "Projects",    title: "UniHub Platform",        caption: "Robust e-commerce solution with integrated payments." },
  // { id: 8, image: process.env.PUBLIC_URL + "/meraki.png",    category: "Projects",    title: "Meraki Action",          caption: "Comprehensive non-profit digital presence." },
  // { id: 9, image: process.env.PUBLIC_URL + "/bms.png",       category: "Projects",    title: "Inventory Suite",        caption: "Efficient inventory management system for databases." },
];

const categories = ["All", ...new Set(galleryItems.map(i => i.category))];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState(null); // index in filteredItems

  const filtered = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter(i => i.category === activeCategory);

  const open  = (idx) => setLightbox(idx);
  const close = ()    => setLightbox(null);
  const prev  = useCallback((e) => { e?.stopPropagation(); setLightbox(i => (i - 1 + filtered.length) % filtered.length); }, [filtered.length]);
  const next  = useCallback((e) => { e?.stopPropagation(); setLightbox(i => (i + 1) % filtered.length); }, [filtered.length]);

  // Keyboard navigation
  useEffect(() => {
    if (lightbox === null) return;
    const handler = (e) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft')  prev();
      if (e.key === 'Escape')     close();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [lightbox, next, prev]);

  // Lock body scroll when lightbox open
  useEffect(() => {
    document.body.style.overflow = lightbox !== null ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [lightbox]);

  return (
    <div className="editorial-page">
      <Container>

        {/* ── Page Masthead (Editorial Layout) ── */}
        <div className="editorial-masthead">
          <div className="masthead-main-text">
            <div className="masthead-eyebrow">Visual Journey</div>
            <h1 className="masthead-heading">Impact <span>in Action</span></h1>
            <p className="masthead-sub">
              Training sessions, community workshops, IT support, and the projects I've brought to life.
            </p>
          </div>

          <div className="masthead-ctas">
            <Link to="/projects" className="editorial-btn-primary">
               View Projects
            </Link>
            <Link to="/contact" className="editorial-btn-secondary">
               Work With Me
            </Link>
          </div>
        </div>

        <div className="editorial-rule" />

        {/* ── Filter Pills ── */}
        <div className="gallery-filters">
          {categories.map(cat => (
            <button
              key={cat}
              className={`gallery-filter-pill ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ── Masonry-style Grid ── */}
        <div className="gallery-grid">
          {filtered.map((item, idx) => (
            <div key={item.id} className="gallery-tile" onClick={() => open(idx)}>
              <img src={item.image} alt={item.title} className="gallery-tile-img" />
              <div className="gallery-tile-overlay">
                <Maximize2 size={20} className="tile-expand-icon" />
                <div className="tile-meta">
                  <span className="tile-category">{item.category}</span>
                  <h3 className="tile-title">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-rule" />

        {/* ── Proper CTA ── */}
        <div className="gallery-cta-card">
          <div className="cta-card-content">
            <h2 className="cta-card-title">Curious about the code?</h2>
            <p className="cta-card-sub">
              Explore the technical breakdown, architectures, and full source code of my featured projects.
            </p>
            <Link to="/projects" className="cta-card-btn">
              Explore My Projects <ArrowRight size={18} />
            </Link>
          </div>
        </div>

      </Container>

      {/* ── LIGHTBOX — rendered as fixed full-screen overlay ── */}
      {lightbox !== null && (
        <div className="lb-backdrop" onClick={close}>
          {/* Close */}
          <button className="lb-close" onClick={close}><X size={22} /></button>

          {/* Prev */}
          <button className="lb-nav lb-prev" onClick={prev}><ChevronLeft size={28} /></button>

          {/* Content panel — stop propagation so clicking image doesn't close */}
          <div className="lb-panel" onClick={e => e.stopPropagation()}>
            <div className="lb-img-wrap">
              <img
                key={filtered[lightbox].id}   /* key forces re-render on image change */
                src={filtered[lightbox].image}
                alt={filtered[lightbox].title}
                className="lb-img"
              />
            </div>
            <div className="lb-info">
              <span className="lb-category">{filtered[lightbox].category}</span>
              <h2 className="lb-title">{filtered[lightbox].title}</h2>
              <p className="lb-caption">{filtered[lightbox].caption}</p>
              <div className="lb-counter">
                {lightbox + 1} / {filtered.length}
              </div>
            </div>
          </div>

          {/* Next */}
          <button className="lb-nav lb-next" onClick={next}><ChevronRight size={28} /></button>
        </div>
      )}
    </div>
  );
};

export default Gallery;