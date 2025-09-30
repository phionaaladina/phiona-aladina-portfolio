// // import React, { useState } from "react";
// // import "../styles/Contact.css";

// // const Contact = () => {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     message: ""
// //   });

// //   const [isSubmitting, setIsSubmitting] = useState(false);

// //   const handleChange = (e) => {
// //     setFormData({ ...formData, [e.target.name]: e.target.value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setIsSubmitting(true);
    
// //     // Simulate form submission
// //     setTimeout(() => {
// //       alert("Message submitted! Thank you for reaching out. I'll get back to you soon!");
// //       setFormData({ name: "", email: "", message: "" });
// //       setIsSubmitting(false);
// //     }, 1500);
// //   };

// //   return (
// //     <section className="contact-section" id="contact">
// //       <div className="container">
// //         {/* Header */}
// //         <div className="contact-header">
// //           <div className="section-badge">
// //             <i className="fas fa-envelope"></i>
// //             Let's Connect
// //           </div>
// //           <h2 className="contact-title">Get In Touch</h2>
// //           <p className="contact-subtitle">
// //             Ready to collaborate? I'd love to hear about your project and discuss how we can work together!
// //           </p>
// //         </div>

// //         <div className="row contact-content">
// //           {/* Contact Info */}
// //           <div className="col-lg-5 col-md-6 mb-4">
// //             <div className="contact-info-card">
// //               <div className="contact-info-header">
// //                 <div className="info-icon">
// //                   <i className="fas fa-heart"></i>
// //                 </div>
// //                 <h4>Let's Chat!</h4>
// //                 <p>I'm always excited to connect with fellow innovators and collaborators</p>
// //               </div>

// //               <div className="contact-methods">
// //                 <div className="contact-item">
// //                   <div className="contact-item-icon email-icon">
// //                     <i className="fas fa-envelope"></i>
// //                   </div>
// //                   <div className="contact-item-content">
// //                     <h6>Email Me</h6>
// //                     <p>phionaaladina@gmail.com</p>
// //                   </div>
// //                 </div>

// //                 <div className="contact-item">
// //                   <div className="contact-item-icon phone-icon">
// //                     <i className="fas fa-phone"></i>
// //                   </div>
// //                   <div className="contact-item-content">
// //                     <h6>Call or Text</h6>
// //                     <p>+256 773874765</p>
// //                   </div>
// //                 </div>

// //                 <div className="contact-item">
// //                   <div className="contact-item-icon location-icon">
// //                     <i className="fas fa-map-marker-alt"></i>
// //                   </div>
// //                   <div className="contact-item-content">
// //                     <h6>Location</h6>
// //                     <p>Kampala, Uganda</p>
// //                   </div>
// //                 </div>
// //               </div>

// //               {/* Social Media */}
// //               <div className="social-section">
// //                 <h6 className="social-title">Connect on Social</h6>
// //                 <div className="social-links">
// //                   <a href="https://www.linkedin.com/in/phionaaladina/" target="_blank" rel="noreferrer" className="social-link linkedin">
// //                     <i className="fab fa-linkedin-in"></i>
// //                     <span>LinkedIn</span>
// //                   </a>
// //                   <a href="https://twitter.com/yourhandle" target="_blank" rel="noreferrer" className="social-link twitter">
// //                     <i className="fab fa-twitter"></i>
// //                     <span>Twitter</span>
// //                   </a>
// //                   <a href="https://facebook.com/yourprofile" target="_blank" rel="noreferrer" className="social-link facebook">
// //                     <i className="fab fa-facebook-f"></i>
// //                     <span>Facebook</span>
// //                   </a>
// //                   <a href="https://github.com/phionaaladina" target="_blank" rel="noreferrer" className="social-link github">
// //                     <i className="fab fa-github"></i>
// //                     <span>GitHub</span>
// //                   </a>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>

// //           {/* Contact Form */}
// //           <div className="col-lg-7 col-md-6">
// //             <div className="contact-form-card">
// //               <div className="form-header">
// //                 <div className="form-icon">
// //                   <i className="fas fa-paper-plane"></i>
// //                 </div>
// //                 <h4>Send me a message</h4>
// //                 <p>I typically respond within 24 hours</p>
// //               </div>

// //               <form className="contact-form" onSubmit={handleSubmit}>
// //                 <div className="form-group">
// //                   <label htmlFor="name" className="form-label">
// //                     <i className="fas fa-user"></i>
// //                     Your Name
// //                   </label>
// //                   <input
// //                     type="text"
// //                     className="form-control"
// //                     id="name"
// //                     name="name"
// //                     value={formData.name}
// //                     onChange={handleChange}
// //                     required
// //                     placeholder=""
// //                   />
// //                 </div>

// //                 <div className="form-group">
// //                   <label htmlFor="email" className="form-label">
// //                     <i className="fas fa-envelope"></i>
// //                     Email Address
// //                   </label>
// //                   <input
// //                     type="email"
// //                     className="form-control"
// //                     id="email"
// //                     name="email"
// //                     value={formData.email}
// //                     onChange={handleChange}
// //                     required
// //                     placeholder="your.email@example.com"
// //                   />
// //                 </div>

// //                 <div className="form-group">
// //                   <label htmlFor="message" className="form-label">
// //                     <i className="fas fa-comment-dots"></i>
// //                     Your Message
// //                   </label>
// //                   <textarea
// //                     className="form-control"
// //                     id="message"
// //                     name="message"
// //                     rows="5"
// //                     value={formData.message}
// //                     onChange={handleChange}
// //                     required
// //                     placeholder="Tell me about your project, ideas, or just say hello! I'd love to hear from you..."
// //                   ></textarea>
// //                 </div>

// //                 <button 
// //                   type="submit" 
// //                   className={`contact-btn ${isSubmitting ? 'submitting' : ''}`}
// //                   disabled={isSubmitting}
// //                 >
// //                   {isSubmitting ? (
// //                     <>
// //                       <i className="fas fa-spinner fa-spin"></i>
// //                       Sending...
// //                     </>
// //                   ) : (
// //                     <>
// //                       <i className="fas fa-paper-plane"></i>
// //                       Send Message
// //                     </>
// //                   )}
// //                 </button>
// //               </form>
// //             </div>
// //           </div>
// //         </div>

// //         {/* Footer Message */}
// //         <div className="contact-footer">
// //           <div className="footer-message">
// //             <i className="fas fa-star"></i>
// //             <span>Looking forward to hearing from you!</span>
// //             <i className="fas fa-star"></i>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Contact;
// import React, { useState } from "react";
// import "../styles/Contact.css";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     message: ""
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     // Simulate form submission
//     setTimeout(() => {
//       alert("Message submitted! Thank you for reaching out. I'll get back to you soon! 💙");
//       setFormData({ name: "", email: "", phone: "", message: "" });
//       setIsSubmitting(false);
//     }, 1500);
//   };

//   return (
//     <section className="contact-section" id="contact">
//       <div className="container">
//         {/* Header */}
//         <div className="contact-header">
//           <div className="section-badge">
//             <i className="fas fa-envelope"></i>
//             Let's Connect
//           </div>
//           <h2 className="contact-title">Get In Touch</h2>
//           <p className="contact-subtitle">
//             Ready to collaborate? I'd love to hear about your project and discuss how we can work together!
//           </p>
//         </div>

//         <div className="row contact-content">
//           {/* Contact Info */}
//           <div className="col-lg-5 col-md-6 mb-4">
//             <div className="contact-info-card">
//               <div className="contact-info-header">
//                 <div className="info-icon">
//                   <i className="fas fa-heart"></i>
//                 </div>
//                 <h4>Let's Chat!</h4>
//                 <p>I'm always excited to connect with fellow innovators and collaborators</p>
//               </div>

//               <div className="contact-methods">
//                 <div className="contact-item">
//                   <div className="contact-item-icon email-icon">
//                     <i className="fas fa-envelope"></i>
//                   </div>
//                   <div className="contact-item-content">
//                     <h6>Email Me</h6>
//                     <p>
//                       <i className="fas fa-at"></i>
//                       fiona.aladina@example.com
//                     </p>
//                   </div>
//                 </div>

//                 <div className="contact-item">
//                   <div className="contact-item-icon phone-icon">
//                     <i className="fas fa-phone"></i>
//                   </div>
//                   <div className="contact-item-content">
//                     <h6>Call or Text</h6>
//                     <p>
//                       <i className="fas fa-mobile-alt"></i>
//                       +256 7XXXXXXXXX
//                     </p>
//                   </div>
//                 </div>

//                 <div className="contact-item">
//                   <div className="contact-item-icon location-icon">
//                     <i className="fas fa-map-marker-alt"></i>
//                   </div>
//                   <div className="contact-item-content">
//                     <h6>Location</h6>
//                     <p>
//                       <i className="fas fa-map-pin"></i>
//                       Entebbe, Central Region, Uganda
//                     </p>
//                   </div>
//                 </div>
//               </div>

//               {/* Social Media */}
//               <div className="social-section">
//                 <h6 className="social-title">Connect on Social</h6>
//                 <div className="social-links">
//                   <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" className="social-link linkedin">
//                     <i className="fab fa-linkedin-in"></i>
//                     <span>LinkedIn</span>
//                   </a>
//                   <a href="https://twitter.com/yourhandle" target="_blank" rel="noreferrer" className="social-link twitter">
//                     <i className="fab fa-x-twitter"></i>
//                     <span>X (Twitter)</span>
//                   </a>
//                   <a href="https://facebook.com/yourprofile" target="_blank" rel="noreferrer" className="social-link facebook">
//                     <i className="fab fa-facebook-f"></i>
//                     <span>Facebook</span>
//                   </a>
//                   <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="social-link github">
//                     <i className="fab fa-github"></i>
//                     <span>GitHub</span>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div className="col-lg-7 col-md-6">
//             <div className="contact-form-card">
//               <div className="form-header">
//                 <div className="form-icon">
//                   <i className="fas fa-paper-plane"></i>
//                 </div>
//                 <h4>Send me a message</h4>
//                 <p>I typically respond within 24 hours</p>
//               </div>

//               <form className="contact-form" onSubmit={handleSubmit}>
//                 <div className="form-group">
//                   <label htmlFor="name" className="form-label">
//                     <i className="fas fa-user"></i>
//                     Your Name
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="email" className="form-label">
//                     <i className="fas fa-envelope"></i>
//                     Email Address
//                   </label>
//                   <input
//                     type="email"
//                     className="form-control"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                   />
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="phone" className="form-label">
//                     <i className="fas fa-phone"></i>
//                     Phone Number
//                   </label>
//                   <input
//                     type="tel"
//                     className="form-control"
//                     id="phone"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                   />
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="message" className="form-label">
//                     <i className="fas fa-comment-dots"></i>
//                     Your Message
//                   </label>
//                   <textarea
//                     className="form-control"
//                     id="message"
//                     name="message"
//                     rows="5"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                   ></textarea>
//                 </div>

//                 <button 
//                   type="submit" 
//                   className={`contact-btn ${isSubmitting ? 'submitting' : ''}`}
//                   disabled={isSubmitting}
//                 >
//                   {isSubmitting ? (
//                     <>
//                       <i className="fas fa-spinner fa-spin"></i>
//                       Sending...
//                     </>
//                   ) : (
//                     <>
//                       <i className="fas fa-paper-plane"></i>
//                       Send Message
//                     </>
//                   )}
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>

//         {/* Footer Message */}
//         <div className="contact-footer">
//           <div className="footer-message">
//             <i className="fas fa-star"></i>
//             <span>Looking forward to hearing from you!</span>
//             <i className="fas fa-star"></i>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
// import React, { useState } from "react";
// import "../styles/Contact.css";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: ""
//   });

//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     // Simulate form submission
//     setTimeout(() => {
//       alert("Message submitted! Thank you for reaching out. I'll get back to you soon!");
//       setFormData({ name: "", email: "", message: "" });
//       setIsSubmitting(false);
//     }, 1500);
//   };

//   return (
//     <section className="contact-section" id="contact">
//       <div className="container">
//         {/* Header */}
//         <div className="contact-header">
//           <div className="section-badge">
//             <i className="fas fa-envelope"></i>
//             Let's Connect
//           </div>
//           <h2 className="contact-title">Get In Touch</h2>
//           <p className="contact-subtitle">
//             Ready to collaborate? I'd love to hear about your project and discuss how we can work together!
//           </p>
//         </div>

//         <div className="row contact-content">
//           {/* Contact Info */}
//           <div className="col-lg-5 col-md-6 mb-4">
//             <div className="contact-info-card">
//               <div className="contact-info-header">
//                 <div className="info-icon">
//                   <i className="fas fa-heart"></i>
//                 </div>
//                 <h4>Let's Chat!</h4>
//                 <p>I'm always excited to connect with fellow innovators and collaborators</p>
//               </div>

//               <div className="contact-methods">
//                 <div className="contact-item">
//                   <div className="contact-item-icon email-icon">
//                     <i className="fas fa-envelope"></i>
//                   </div>
//                   <div className="contact-item-content">
//                     <h6>Email Me</h6>
//                     <p>phionaaladina@gmail.com</p>
//                   </div>
//                 </div>

//                 <div className="contact-item">
//                   <div className="contact-item-icon phone-icon">
//                     <i className="fas fa-phone"></i>
//                   </div>
//                   <div className="contact-item-content">
//                     <h6>Call or Text</h6>
//                     <p>+256 773874765</p>
//                   </div>
//                 </div>

//                 <div className="contact-item">
//                   <div className="contact-item-icon location-icon">
//                     <i className="fas fa-map-marker-alt"></i>
//                   </div>
//                   <div className="contact-item-content">
//                     <h6>Location</h6>
//                     <p>Kampala, Uganda</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Social Media */}
//               <div className="social-section">
//                 <h6 className="social-title">Connect on Social</h6>
//                 <div className="social-links">
//                   <a href="https://www.linkedin.com/in/phionaaladina/" target="_blank" rel="noreferrer" className="social-link linkedin">
//                     <i className="fab fa-linkedin-in"></i>
//                     <span>LinkedIn</span>
//                   </a>
//                   <a href="https://twitter.com/yourhandle" target="_blank" rel="noreferrer" className="social-link twitter">
//                     <i className="fab fa-twitter"></i>
//                     <span>Twitter</span>
//                   </a>
//                   <a href="https://facebook.com/yourprofile" target="_blank" rel="noreferrer" className="social-link facebook">
//                     <i className="fab fa-facebook-f"></i>
//                     <span>Facebook</span>
//                   </a>
//                   <a href="https://github.com/phionaaladina" target="_blank" rel="noreferrer" className="social-link github">
//                     <i className="fab fa-github"></i>
//                     <span>GitHub</span>
//                   </a>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Contact Form */}
//           <div className="col-lg-7 col-md-6">
//             <div className="contact-form-card">
//               <div className="form-header">
//                 <div className="form-icon">
//                   <i className="fas fa-paper-plane"></i>
//                 </div>
//                 <h4>Send me a message</h4>
//                 <p>I typically respond within 24 hours</p>
//               </div>

//               <form className="contact-form" onSubmit={handleSubmit}>
//                 <div className="form-group">
//                   <label htmlFor="name" className="form-label">
//                     <i className="fas fa-user"></i>
//                     Your Name
//                   </label>
//                   <input
//                     type="text"
//                     className="form-control"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                     placeholder=""
//                   />
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="email" className="form-label">
//                     <i className="fas fa-envelope"></i>
//                     Email Address
//                   </label>
//                   <input
//                     type="email"
//                     className="form-control"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                     placeholder="your.email@example.com"
//                   />
//                 </div>

//                 <div className="form-group">
//                   <label htmlFor="message" className="form-label">
//                     <i className="fas fa-comment-dots"></i>
//                     Your Message
//                   </label>
//                   <textarea
//                     className="form-control"
//                     id="message"
//                     name="message"
//                     rows="5"
//                     value={formData.message}
//                     onChange={handleChange}
//                     required
//                     placeholder="Tell me about your project, ideas, or just say hello! I'd love to hear from you..."
//                   ></textarea>
//                 </div>

//                 <button 
//                   type="submit" 
//                   className={`contact-btn ${isSubmitting ? 'submitting' : ''}`}
//                   disabled={isSubmitting}
//                 >
//                   {isSubmitting ? (
//                     <>
//                       <i className="fas fa-spinner fa-spin"></i>
//                       Sending...
//                     </>
//                   ) : (
//                     <>
//                       <i className="fas fa-paper-plane"></i>
//                       Send Message
//                     </>
//                   )}
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>

//         {/* Footer Message */}
//         <div className="contact-footer">
//           <div className="footer-message">
//             <i className="fas fa-star"></i>
//             <span>Looking forward to hearing from you!</span>
//             <i className="fas fa-star"></i>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;
import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert("Message submitted! Thank you for reaching out. I'll get back to you soon! 💙");
      setFormData({ name: "", email: "", phone: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        {/* Header */}
        <div className="contact-header">
          <div className="section-badge">
            <i className="fas fa-envelope"></i>
            Let's Connect
          </div>
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-subtitle">
            Ready to collaborate? I'd love to hear about your project and discuss how we can work together!
          </p>
        </div>

        <div className="row contact-content">
          {/* Contact Info */}
          <div className="col-lg-5 col-md-6 mb-4">
            <div className="contact-info-card">
              <div className="contact-info-header">
                <div className="info-icon">
                  <i className="fas fa-heart"></i>
                </div>
                <h4>Let's Chat!</h4>
                <p>I'm always excited to connect with fellow innovators and collaborators</p>
              </div>

              <div className="contact-methods">
                <div className="contact-item">
                  <div className="contact-item-icon email-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-item-content">
                    <h6>Email Me</h6>
                    <p>
                      <i className="fas fa-at"></i>
                      fiona.aladina@example.com
                    </p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-item-icon phone-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="contact-item-content">
                    <h6>Call or Text</h6>
                    <p>
                      <i className="fas fa-mobile-alt"></i>
                      +256 7XXXXXXXXX
                    </p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-item-icon location-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="contact-item-content">
                    <h6>Location</h6>
                    <p>
                      <i className="fas fa-map-pin"></i>
                      Entebbe, Central Region, Uganda
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="social-section">
                <h6 className="social-title">Connect on Social</h6>
                <div className="social-links">
                  <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" className="social-link linkedin">
                    <i className="fab fa-linkedin-in"></i>
                    <span>LinkedIn</span>
                  </a>
                  <a href="https://twitter.com/yourhandle" target="_blank" rel="noreferrer" className="social-link twitter">
                    <i className="fab fa-x-twitter"></i>
                    <span>X (Twitter)</span>
                  </a>
                  <a href="https://facebook.com/yourprofile" target="_blank" rel="noreferrer" className="social-link facebook">
                    <i className="fab fa-facebook-f"></i>
                    <span>Facebook</span>
                  </a>
                  <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" className="social-link github">
                    <i className="fab fa-github"></i>
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-7 col-md-6">
            <div className="contact-form-card">
              <div className="form-header">
                <div className="form-icon">
                  <i className="fas fa-paper-plane"></i>
                </div>
                <h4>Send me a message</h4>
                <p>I typically respond within 24 hours</p>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    <i className="fas fa-user"></i>
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    <i className="fas fa-envelope"></i>
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    <i className="fas fa-phone"></i>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    <i className="fas fa-comment-dots"></i>
                    Your Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className={`contact-btn ${isSubmitting ? 'submitting' : ''}`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i>
                      Sending...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane"></i>
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer Message */}
        <div className="contact-footer">
          <div className="footer-message">
            <i className="fas fa-star"></i>
            <span>Looking forward to hearing from you!</span>
            <i className="fas fa-star"></i>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;