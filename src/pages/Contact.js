import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Send, Mail, Phone, MapPin, Linkedin, Github, Twitter, CheckCircle, AlertCircle, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import "../styles/Contact.css";

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
    <div className="editorial-page">
      <Container>

        {/* ── Page Masthead (Editorial Layout) ── */}
        <div className="editorial-masthead">
          <div className="masthead-main-text">
            <div className="masthead-eyebrow">Get In Touch</div>
            <h1 className="masthead-title">Let's Build <span>Something Great</span></h1>
            <p className="masthead-sub">
              Have a project, opportunity, or just want to say hi? My inbox is always open.
            </p>
          </div>

          <div className="masthead-ctas">
            <a
              href="/aladina_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="editorial-btn-primary"
            >
              <FileText size={15} /> View Resume
            </a>
            <Link to="/projects" className="editorial-btn-secondary">
              Our Projects
            </Link>
          </div>
        </div>

        <div className="editorial-rule" />

        <Row className="g-4 align-items-start">

          {/* Left: Info */}
          <Col lg={4}>
            <div className="contact-info-card">
              <div className="contact-info-title">Contact Info</div>

              <div className="contact-detail-row">
                <div className="contact-detail-icon"><Mail size={18} /></div>
                <div className="contact-detail-info">
                  <h4>Email</h4>
                  <a href="mailto:phionaaladina@gmail.com">phionaaladina@gmail.com</a>
                </div>
              </div>

              <div className="contact-detail-row">
                <div className="contact-detail-icon"><Phone size={18} /></div>
                <div className="contact-detail-info">
                  <h4>Phone</h4>
                  <a href="tel:+256773874765">+256 773 874 765</a>
                </div>
              </div>

              <div className="contact-detail-row">
                <div className="contact-detail-icon"><MapPin size={18} /></div>
                <div className="contact-detail-info">
                  <h4>Location</h4>
                  <p>Kampala, Uganda</p>
                </div>
              </div>

              <div className="contact-socials">
                <a href="https://linkedin.com/in/phiona-aladina" target="_blank" rel="noreferrer" className="contact-social-btn"><Linkedin size={17} /></a>
                <a href="https://github.com/phionaaladina"       target="_blank" rel="noreferrer" className="contact-social-btn"><Github size={17} /></a>
                <a href="https://twitter.com/phionaaladina" target="_blank" rel="noreferrer" className="contact-social-btn">
                  <Twitter size={17} />
                </a>
              </div>
            </div>
          </Col>

          {/* Right: Form */}
          <Col lg={8}>
            <div className="contact-form-card">
              <div className="form-card-title">Send a Message</div>
              <p className="form-card-sub">I'll get back to you within 24 hours.</p>

              {status.submitted ? (
                <div className="contact-success">
                  <CheckCircle size={52} color="#db2777" />
                  <h4>Message Sent!</h4>
                  <p>Thank you for reaching out. I'll reply as soon as possible.</p>
                  <button
                    onClick={() => setStatus({ ...status, submitted: false })}
                    className="contact-submit-btn"
                    style={{ maxWidth: 240, margin: '0 auto' }}
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {status.error && (
                    <div className="contact-error">
                      <AlertCircle size={17} /> {status.error}
                    </div>
                  )}
                  <Row className="g-3 mb-3">
                    <Col md={6}>
                      <input
                        type="text" name="name" value={formData.name}
                        onChange={handleChange} className="contact-input"
                        placeholder="Your name" required
                      />
                    </Col>
                    <Col md={6}>
                      <input
                        type="email" name="email" value={formData.email}
                        onChange={handleChange} className="contact-input"
                        placeholder="Email address" required
                      />
                    </Col>
                  </Row>
                  <div className="mb-4">
                    <textarea
                      name="message" value={formData.message}
                      onChange={handleChange} className="contact-input"
                      rows="6" placeholder="Tell me about your project or idea..."
                      required
                    />
                  </div>
                  <button type="submit" className="contact-submit-btn" disabled={status.submitting}>
                    {status.submitting ? "Sending..." : "Send Message"} <Send size={17} />
                  </button>
                </form>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;