import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Send, Mail, Phone, MapPin, Linkedin, Github, Instagram, Youtube, CheckCircle, AlertCircle } from "lucide-react";
import ScrollReveal from "../components/ScrollReveal";
import "../styles/Contact.css";

const details = [
  { icon: Mail, label: "Email", value: "phionaaladina@gmail.com", href: "mailto:phionaaladina@gmail.com" },
  { icon: Phone, label: "Phone", value: "+256 773 874 765", href: "tel:+256773874765" },
  { icon: MapPin, label: "Location", value: "Kampala, Uganda" },
];

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/phionaaladina" },
  { icon: Github, label: "GitHub", href: "https://github.com/phionaaladina" },
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/Its_Aladina" },
  { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/channel/UCAzqZP6oRDRgInhLlQH3gog" },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ submitting: false, submitted: false, error: null });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: "6ab40fdb-2ef6-41fe-b022-d867a4200617",
          name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `Portfolio Contact from ${formData.name}`,
        }),
      });
      const result = await response.json();
      if (result.success) {
        setStatus({ submitting: false, submitted: true, error: null });
        setFormData({ name: "", email: "", message: "" });
      } else throw new Error(result.message);
    } catch {
      setStatus({ submitting: false, submitted: false, error: "Failed to send. Please email me directly." });
    }
  };

  return (
    <div className="ct-section">
      <Container>
        <ScrollReveal animation="fade-up" once>
          <div className="ct-head">
            <h2 className="ct-heading section-accent">Let’s <span>Connect</span></h2>
          </div>
        </ScrollReveal>

        <ScrollReveal animation="fade-up" delay={100} once>
          <div className="ct-card">
            {/* ── Left: details ── */}
            <aside className="ct-info">
              <h3 className="ct-info-title">Contact details</h3>

              <ul className="ct-details">
                {details.map(({ icon: Icon, label, value, href }) => (
                  <li key={label} className="ct-detail">
                    <span className="ct-detail-icon"><Icon size={18} /></span>
                    <span className="ct-detail-text">
                      <span className="ct-detail-label">{label}</span>
                      {href ? <a href={href}>{value}</a> : <span>{value}</span>}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="ct-socials">
                {socials.map(({ icon: Icon, label, href }) => (
                  <a key={label} href={href} target="_blank" rel="noreferrer" className="ct-social" aria-label={label}>
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </aside>

            {/* ── Right: form ── */}
            <div className="ct-form-wrap">
              {status.submitted ? (
                <div className="ct-success" role="status">
                  <CheckCircle size={52} />
                  <h3>Message sent!</h3>
                  <p>Thank you for reaching out. I’ll reply as soon as possible.</p>
                  <button
                    type="button"
                    onClick={() => setStatus({ ...status, submitted: false })}
                    className="ct-submit ct-submit--inline"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="ct-form">
                  <h3 className="ct-form-title">Send a message</h3>

                  {status.error && (
                    <div className="ct-error" role="alert">
                      <AlertCircle size={17} /> {status.error}
                    </div>
                  )}

                  <div className="ct-row">
                    <label className="ct-field">
                      <span className="ct-label">Name</span>
                      <input
                        type="text" name="name" value={formData.name}
                        onChange={handleChange} className="ct-input"
                        autoComplete="name" placeholder="Your name" required
                      />
                    </label>
                    <label className="ct-field">
                      <span className="ct-label">Email</span>
                      <input
                        type="email" name="email" value={formData.email}
                        onChange={handleChange} className="ct-input"
                        autoComplete="email" placeholder="you@example.com" required
                      />
                    </label>
                  </div>

                  <label className="ct-field">
                    <span className="ct-label">Message</span>
                    <textarea
                      name="message" value={formData.message}
                      onChange={handleChange} className="ct-input ct-textarea"
                      rows="5" placeholder="Tell me about your project or idea…"
                      required
                    />
                  </label>

                  <button type="submit" className="ct-submit" disabled={status.submitting}>
                    {status.submitting ? "Sending…" : "Send Message"} <Send size={17} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </div>
  );
};

export default Contact;
