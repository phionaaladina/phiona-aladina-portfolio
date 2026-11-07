import React, { useCallback, useEffect, useRef, useState } from "react";
import {
  Accessibility,
  X,
  Minus,
  Plus,
  RotateCcw,
  Eye,
  BookOpen,
  Brain,
  Zap,
  Keyboard,
  Ear,
  AlignJustify,
  MoveHorizontal,
  Type,
  AlignLeft,
  Underline,
  Link2,
  Heading,
  Contrast,
  Moon,
  Repeat,
  Palette,
  Droplet,
  MousePointer2,
  Ruler,
  RectangleHorizontal,
  Focus,
  ImageOff,
  Pause,
  MousePointerClick,
  Volume2,
  Square,
} from "lucide-react";
import "../styles/AccessibilityWidget.css";

const STORAGE_KEY = "a11y-prefs-v2";
const TEXT_MIN = 100;
const TEXT_MAX = 150;
const TEXT_STEP = 10;

const DEFAULTS = {
  textSize: 100,
  colorMode: "none", // none | contrast | dark | invert | mono | lowsat
  lineHeight: false,
  textSpacing: false,
  readable: false,
  alignLeft: false,
  underlineLinks: false,
  highlightLinks: false,
  highlightHeadings: false,
  bigCursor: false,
  readingGuide: false,
  readingMask: false,
  focusHighlight: false,
  hideImages: false,
  noMotion: false,
  readOnClick: false,
};

// boolean pref → class on <html>
const CLASS_MAP = {
  lineHeight: "a11y-line-height",
  textSpacing: "a11y-text-spacing",
  readable: "a11y-readable",
  alignLeft: "a11y-align-left",
  underlineLinks: "a11y-underline-links",
  highlightLinks: "a11y-highlight-links",
  highlightHeadings: "a11y-highlight-headings",
  bigCursor: "a11y-big-cursor",
  focusHighlight: "a11y-focus",
  hideImages: "a11y-hide-images",
  noMotion: "a11y-no-motion",
  readOnClick: "a11y-read-click",
};

const COLOR_MODES = ["contrast", "dark", "invert", "mono", "lowsat"];

const PROFILES = [
  { id: "lowVision", icon: Eye, title: "Low vision", desc: "Larger text, high contrast, focus highlight",
    prefs: { textSize: 130, colorMode: "contrast", focusHighlight: true } },
  { id: "dyslexia", icon: BookOpen, title: "Dyslexia", desc: "Readable font and wider spacing",
    prefs: { readable: true, textSpacing: true, lineHeight: true } },
  { id: "adhd", icon: Brain, title: "Focus / ADHD", desc: "Reading mask, no animations",
    prefs: { readingMask: true, noMotion: true } },
  { id: "seizure", icon: Zap, title: "Seizure safe", desc: "Stops motion, lowers saturation",
    prefs: { noMotion: true, colorMode: "lowsat" } },
  { id: "motor", icon: Keyboard, title: "Motor / keyboard", desc: "Big cursor, strong focus outline",
    prefs: { bigCursor: true, focusHighlight: true } },
  { id: "screenReader", icon: Ear, title: "Screen reader", desc: "Read on click, underlined links",
    prefs: { readOnClick: true, underlineLinks: true } },
];

const CONTENT_TOGGLES = [
  { key: "lineHeight", label: "Line height", icon: AlignJustify },
  { key: "textSpacing", label: "Text spacing", icon: MoveHorizontal },
  { key: "readable", label: "Readable font", icon: Type },
  { key: "alignLeft", label: "Align text left", icon: AlignLeft },
  { key: "underlineLinks", label: "Underline links", icon: Underline },
  { key: "highlightLinks", label: "Highlight links", icon: Link2 },
  { key: "highlightHeadings", label: "Highlight headings", icon: Heading },
];

const COLOR_TOGGLES = [
  { mode: "contrast", label: "High contrast", icon: Contrast },
  { mode: "dark", label: "Dark contrast", icon: Moon },
  { mode: "invert", label: "Invert colours", icon: Repeat },
  { mode: "mono", label: "Monochrome", icon: Palette },
  { mode: "lowsat", label: "Low saturation", icon: Droplet },
];

const NAV_TOGGLES = [
  { key: "bigCursor", label: "Big cursor", icon: MousePointer2 },
  { key: "readingGuide", label: "Reading guide", icon: Ruler },
  { key: "readingMask", label: "Reading mask", icon: RectangleHorizontal },
  { key: "focusHighlight", label: "Focus highlight", icon: Focus },
  { key: "hideImages", label: "Hide images", icon: ImageOff },
  { key: "noMotion", label: "Stop animations", icon: Pause },
  { key: "readOnClick", label: "Read on click", icon: MousePointerClick },
];

const READABLE_SELECTOR = "p, h1, h2, h3, h4, h5, h6, li, figcaption, blockquote, label, td, th";

const loadPrefs = () => {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
    return saved ? { ...DEFAULTS, ...saved } : DEFAULTS;
  } catch {
    return DEFAULTS;
  }
};

const speechSupported = typeof window !== "undefined" && "speechSynthesis" in window;

const Tile = ({ on, label, icon: Icon, onClick }) => (
  <button type="button" className={`a11y-tile ${on ? "is-on" : ""}`} aria-pressed={on} onClick={onClick}>
    <Icon size={20} />
    <span>{label}</span>
  </button>
);

const AccessibilityWidget = () => {
  const [open, setOpen] = useState(false);
  const [prefs, setPrefs] = useState(loadPrefs);
  const [speaking, setSpeaking] = useState(false);
  const panelRef = useRef(null);
  const buttonRef = useRef(null);
  const guideRef = useRef(null);
  const maskTopRef = useRef(null);
  const maskBottomRef = useRef(null);

  /* ── apply preferences to the page ─────────────────────── */
  useEffect(() => {
    const root = document.documentElement;
    Object.entries(CLASS_MAP).forEach(([key, cls]) => root.classList.toggle(cls, !!prefs[key]));
    COLOR_MODES.forEach((m) => root.classList.toggle(`a11y-color-${m}`, prefs.colorMode === m));
    root.style.fontSize = prefs.textSize !== 100 ? `${prefs.textSize}%` : "";
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
    } catch {
      /* storage unavailable — settings still apply for this visit */
    }
  }, [prefs]);

  /* ── read aloud ─────────────────────────────────────────── */
  const stopReading = useCallback(() => {
    if (!speechSupported) return;
    window.speechSynthesis.cancel();
    setSpeaking(false);
  }, []);

  const speak = useCallback((text) => {
    if (!speechSupported || !text) return;
    const synth = window.speechSynthesis;
    synth.cancel();
    // speak in sentence-sized chunks; long utterances get cut off in some browsers
    const chunks = text.replace(/\s+/g, " ").match(/[^.!?]+[.!?]*/g) || [text];
    chunks.forEach((chunk, i) => {
      const u = new SpeechSynthesisUtterance(chunk.trim());
      if (i === chunks.length - 1) u.onend = () => setSpeaking(false);
      synth.speak(u);
    });
    setSpeaking(true);
  }, []);

  const readPage = () => speak(document.querySelector("main")?.innerText || "");

  useEffect(() => () => stopReading(), [stopReading]);

  /* ── read on click ──────────────────────────────────────── */
  useEffect(() => {
    if (!prefs.readOnClick) return;
    const onClick = (e) => {
      if (e.target.closest(".a11y-widget, a, button, input, textarea, select")) return;
      const el = e.target.closest(READABLE_SELECTOR);
      if (el) speak(el.innerText);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [prefs.readOnClick, speak]);

  /* ── reading guide / mask follow the pointer ───────────── */
  useEffect(() => {
    if (!prefs.readingGuide && !prefs.readingMask) return;
    const onMove = (e) => {
      const y = e.clientY;
      if (guideRef.current) guideRef.current.style.transform = `translateY(${y - 6}px)`;
      if (maskTopRef.current) maskTopRef.current.style.height = `${Math.max(0, y - 55)}px`;
      if (maskBottomRef.current) maskBottomRef.current.style.top = `${y + 55}px`;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [prefs.readingGuide, prefs.readingMask]);

  /* ── keyboard: Alt + A toggles, Esc closes ──────────────── */
  useEffect(() => {
    const onKey = (e) => {
      if (e.altKey && e.code === "KeyA") {
        e.preventDefault();
        setOpen((o) => !o);
      } else if (e.key === "Escape" && open) {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  /* ── click outside closes; focus moves into panel ──────── */
  useEffect(() => {
    if (!open) return;
    panelRef.current?.querySelector("button")?.focus();
    const onDown = (e) => {
      if (!panelRef.current?.contains(e.target) && !buttonRef.current?.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  const toggle = (key) => setPrefs((p) => ({ ...p, [key]: !p[key] }));
  const setColor = (mode) => setPrefs((p) => ({ ...p, colorMode: p.colorMode === mode ? "none" : mode }));
  const setText = (v) => setPrefs((p) => ({ ...p, textSize: Math.min(TEXT_MAX, Math.max(TEXT_MIN, v)) }));

  const profileOn = (profile) => Object.entries(profile.prefs).every(([k, v]) => prefs[k] === v);
  const toggleProfile = (profile) =>
    setPrefs((p) => {
      if (profileOn(profile)) {
        const off = {};
        Object.keys(profile.prefs).forEach((k) => { off[k] = DEFAULTS[k]; });
        return { ...p, ...off };
      }
      return { ...p, ...profile.prefs };
    });

  const reset = () => {
    stopReading();
    setPrefs(DEFAULTS);
  };

  const isCustomised = JSON.stringify(prefs) !== JSON.stringify(DEFAULTS);

  return (
    <div className="a11y-widget">
      {/* pointer-following reading aids */}
      {prefs.readingGuide && <div className="a11y-guide" ref={guideRef} aria-hidden="true" />}
      {prefs.readingMask && (
        <>
          <div className="a11y-mask a11y-mask--top" ref={maskTopRef} aria-hidden="true" />
          <div className="a11y-mask a11y-mask--bottom" ref={maskBottomRef} aria-hidden="true" />
        </>
      )}

      {open && (
        <div className="a11y-panel" role="dialog" aria-label="Accessibility tools" id="a11y-panel" ref={panelRef}>
          <div className="a11y-panel-head">
            <div>
              <h2 className="a11y-panel-title">Accessibility tools</h2>
              <p className="a11y-panel-sub">
                Adjust the site to suit your needs. <kbd>Alt</kbd> + <kbd>A</kbd>
              </p>
            </div>
            <button
              type="button"
              className="a11y-close"
              onClick={() => { setOpen(false); buttonRef.current?.focus(); }}
              aria-label="Close accessibility tools"
            >
              <X size={18} />
            </button>
          </div>

          <div className="a11y-body">
            {/* Profiles */}
            <section className="a11y-section">
              <h3 className="a11y-section-title">Quick profiles</h3>
              <div className="a11y-profiles">
                {PROFILES.map((profile) => {
                  const Icon = profile.icon;
                  const on = profileOn(profile);
                  return (
                    <button
                      key={profile.id}
                      type="button"
                      className={`a11y-profile ${on ? "is-on" : ""}`}
                      aria-pressed={on}
                      onClick={() => toggleProfile(profile)}
                    >
                      <span className="a11y-profile-icon"><Icon size={18} /></span>
                      <span className="a11y-profile-text">
                        <strong>{profile.title}</strong>
                        <span>{profile.desc}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </section>

            {/* Text size */}
            <section className="a11y-section">
              <h3 className="a11y-section-title">Text size</h3>
              <div className="a11y-textsize">
                <button type="button" onClick={() => setText(prefs.textSize - TEXT_STEP)}
                  disabled={prefs.textSize <= TEXT_MIN} aria-label="Decrease text size">
                  <Minus size={16} />
                </button>
                <input
                  type="range"
                  min={TEXT_MIN}
                  max={TEXT_MAX}
                  step={TEXT_STEP}
                  value={prefs.textSize}
                  onChange={(e) => setText(Number(e.target.value))}
                  aria-label="Text size"
                  aria-valuetext={`${prefs.textSize}%`}
                />
                <button type="button" onClick={() => setText(prefs.textSize + TEXT_STEP)}
                  disabled={prefs.textSize >= TEXT_MAX} aria-label="Increase text size">
                  <Plus size={16} />
                </button>
                <span className="a11y-textsize-value">{prefs.textSize}%</span>
              </div>
            </section>

            {/* Content */}
            <section className="a11y-section">
              <h3 className="a11y-section-title">Content</h3>
              <div className="a11y-grid">
                {CONTENT_TOGGLES.map(({ key, label, icon }) => (
                  <Tile key={key} on={prefs[key]} label={label} icon={icon} onClick={() => toggle(key)} />
                ))}
              </div>
            </section>

            {/* Colour */}
            <section className="a11y-section">
              <h3 className="a11y-section-title">Colour &amp; contrast</h3>
              <div className="a11y-grid">
                {COLOR_TOGGLES.map(({ mode, label, icon }) => (
                  <Tile key={mode} on={prefs.colorMode === mode} label={label} icon={icon} onClick={() => setColor(mode)} />
                ))}
              </div>
            </section>

            {/* Navigation */}
            <section className="a11y-section">
              <h3 className="a11y-section-title">Navigation &amp; focus</h3>
              <div className="a11y-grid">
                {NAV_TOGGLES.map(({ key, label, icon }) => (
                  <Tile key={key} on={prefs[key]} label={label} icon={icon} onClick={() => toggle(key)} />
                ))}
              </div>
            </section>

            {/* Read aloud */}
            {speechSupported && (
              <section className="a11y-section">
                <h3 className="a11y-section-title">Read aloud</h3>
                <div className="a11y-read">
                  <button type="button" className="a11y-read-btn" onClick={readPage}>
                    <Volume2 size={17} /> Read this page
                  </button>
                  <button type="button" className="a11y-read-btn a11y-read-btn--stop" onClick={stopReading} disabled={!speaking}>
                    <Square size={15} /> Stop reading
                  </button>
                </div>
              </section>
            )}
          </div>

          <div className="a11y-foot">
            <button type="button" className="a11y-reset" onClick={reset} disabled={!isCustomised}>
              <RotateCcw size={15} /> Reset all settings
            </button>
          </div>
        </div>
      )}

      <button
        type="button"
        ref={buttonRef}
        className={`a11y-fab ${isCustomised ? "is-active" : ""}`}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="a11y-panel"
        aria-label="Accessibility tools (Alt + A)"
        title="Accessibility tools (Alt + A)"
      >
        <Accessibility size={26} strokeWidth={2.2} />
      </button>
    </div>
  );
};

export default AccessibilityWidget;
