// import React from "react";
// import { Link } from "react-router-dom";
// import "../styles/About.css";

// const About = () => {
//   return (
//     <section className="about-section" id="about">
//       <div className="container">
//         {/* Header */}
//         <div className="about-header">
//           <h1 className="section-title">About Me</h1>
//         </div>

//         {/* Main Content */}
//         <div className="about-main">
//           {/* About Content - Left Side */}
//           <div className="about-content">
//             <h2 className="about-name">Fiona A. Aladina</h2>
//             <p className="about-role">
//               Software Engineer | Tech Educator | Community Leader
//             </p>

//             <div className="about-text">
//               <p>
//                 I’m Fiona Aladina — a Software Engineer, Tech Educator, and
//                 community leader passionate about empowering young people
//                 through technology, innovation, and mentorship.
//               </p>

//               <p>
//                 My journey is one of <strong>resilience and purpose</strong>.
//                 Growing up as the firstborn in a challenging environment taught
//                 me strength, compassion, and the power of perseverance. From
//                 work It shaped my drive to break barriers and create
//                 opportunities, not only for myself but for my siblings and
//                 others who dare to dream beyond their circumstances.
//               </p>

//               <p>
//                 Over the years, I’ve trained and mentored more than{" "}
//                 <strong>800 young women, youth, and children</strong> in digital
//                 literacy, coding, life skills, and entrepreneurship. I’ve seen
//                 technology transform lives, helping learners gain confidence,
//                 launch businesses, and build careers they once thought
//                 impossible.
//               </p>

//               <p>
//                 I believe that{" "}
//                 <em>
//                   we can always rise again, no matter what life throws our way
//                 </em>
//                 . Every setback carries a lesson, and every effort, no matter
//                 how small, brings us closer to the future we imagine.
//               </p>

//               <p>
//                 Today, my mission is to{" "}
//                 <strong>
//                   bridge digital gaps, inspire creativity, and nurture the next
//                   generation of innovators
//                 </strong>{" "}
//                 through inclusive learning and impactful tech solutions.
//               </p>
//             </div>

//             {/* Simple Skills */}
//             <div className="about-skills">
//               <span className="skill-badge">
//                 <i className="fas fa-code"></i> Software Development
//               </span>
//               <span className="skill-badge">
//                 <i className="fas fa-chalkboard-teacher"></i> Tech Education
//               </span>
//               <span className="skill-badge">
//                 <i className="fas fa-users"></i> Community Leadership
//               </span>
//             </div>

//             {/* CTA Buttons */}
//             <div className="about-cta">
//               <Link to="/contact" className="btn-primary">
//                 Get In Touch
//               </Link>
//               <Link to="/projects" className="btn-secondary">
//                 View My Work
//               </Link>
//               <a
//                 href="/aladina_resume.pdf"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="btn-resume"
//               >
//                 <i className="fas fa-file-pdf"></i> View Resume
//               </a>
//             </div>
//           </div>

//           {/* Profile Image - Right Side */}
//           <div className="profile-image">
//             <img
//               src={process.env.PUBLIC_URL + "/abt1.jpg"}
//               alt="Fiona A. Aladina"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


import React from "react";
import { Link } from "react-router-dom";
import "../styles/About.css";

const About = () => {
  return (
    <section className="about-section" id="about">
      <div className="container">
        {/* Header */}
        <div className="about-header">
          <h1 className="section-title">About Me</h1>
        </div>

        {/* Main Content */}
        <div className="about-main">
          {/* About Content - Left Side */}
          <div className="about-content">
            <h2 className="about-name">Fiona A. Aladina</h2>
            <p className="about-role">
              Software Engineer | Tech Educator | Community Leader
            </p>

            <div className="about-text">
              <p>
                I’m Fiona Aladina, a <strong>Software Engineer</strong>,{" "}
                <strong>Tech Educator</strong>, and <strong>Community Leader</strong> passionate about
                empowering young people through technology, innovation, and mentorship.
              </p>

              <p>
                My journey is one of <strong>resilience and purpose</strong>.
                Growing up as the firstborn in a challenging environment taught
                me strength, compassion, and the power of perseverance.{" "}
                From working as a{" "}
                <strong>cleaner, beautician, and nanny (my favorite role) to make ends meet for my 4 siblings and myself</strong>, 
                to getting into computer science and discovering my passion for{" "}
                <strong>technology and empowering others</strong>. 
                Each experience, though humble, shaped my empathy and fueled my desire 
                to create opportunities for others to rise and thrive.
              </p>

              <p>
                It shaped my drive to break barriers and create
                opportunities, not only for myself but for my siblings and
                others who dare to dream beyond their circumstances.
              </p>

              <p>
                Over the years, I’ve trained and mentored more than{" "}
                <strong>800 young women, youth, and children</strong> in digital
                literacy, coding, life skills, and entrepreneurship. I’ve seen
                technology transform lives, helping learners gain confidence,
                launch businesses, and build careers they once thought
                impossible.
              </p>

              <p>
                I believe that{" "}
                <em>
                  we can always rise again, no matter what life throws our way
                </em>
                . Every setback carries a lesson, and every effort, no matter
                how small, brings us closer to the future we imagine.
              </p>

              <p>
                Today, my mission is to{" "}
                <strong>
                  bridge digital gaps, inspire creativity, and nurture the next
                  generation of innovators
                </strong>{" "}
                through inclusive learning and impactful tech solutions.
              </p>
            </div>

            {/* Simple Skills */}
            <div className="about-skills">
              <span className="skill-badge">
                <i className="fas fa-code"></i> Software Development
              </span>
              <span className="skill-badge">
                <i className="fas fa-chalkboard-teacher"></i> Tech Education
              </span>
              <span className="skill-badge">
                <i className="fas fa-users"></i> Community Leadership
              </span>
            </div>

            {/* CTA Buttons */}
            <div className="about-cta">
              <Link to="/contact" className="btn-primary">
                Get In Touch
              </Link>
              <Link to="/projects" className="btn-secondary">
                View My Work
              </Link>
              <a
                href="/aladina_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-resume"
              >
                <i className="fas fa-file-pdf"></i> View Resume
              </a>
            </div>
          </div>

          {/* Profile Image - Right Side */}
          <div className="profile-image">
            <img
              src={process.env.PUBLIC_URL + "/abt1.jpg"}
              alt="Fiona A. Aladina"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
