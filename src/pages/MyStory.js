import React from "react";
import { Link } from "react-router-dom";
import { Sparkles, Heart, Zap, Award, ArrowRight, BookOpen } from "lucide-react";
import "../styles/MyStory.css";

const MyStory = () => {
  return (
    <section className="mystory-section-premium">
      {/* Background Blobs */}
      <div className="mystory-bg-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>

      <div className="container">
        {/* Header */}
        <div className="mystory-header-premium">
          <h1 className="mystory-title-premium"> Resilience & Growth</h1>
          <p className="mystory-subtitle-premium">
            A personal narrative of overcoming challenges and dedicated community impact.
          </p>
        </div>

        <div className="row mystory-content-grid">
          {/* Image Column */}
          <div className="col-lg-5 mb-5 mb-lg-0">
            <div className="mystory-visual-card">
              <div className="mystory-img-wrapper">
                <img
                  src={process.env.PUBLIC_URL + "/fiona.png"}
                  alt="Fiona A. Aladina"
                  className="mystory-main-img"
                />
                <div className="img-backdrop"></div>
              </div>
              
              <div className="floating-stat-card">
                <div className="stat-icon"><Heart size={20} /></div>
                <div className="stat-text">
                  <strong>500+</strong>
                  <span>Impacted Lives</span>
                </div>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div className="col-lg-7">
            <div className="mystory-description-premium">
              <div className="story-snippet card-glass">
                <div className="snippet-icon"><Zap size={24} /></div>
                <h3>The Firstborn's Path</h3>
                <p>
                  As the firstborn in my family, I learned the weight of responsibility early. This shaped my commitment to resilience, leadership, and the relentless pursuit of growth—not just for myself, but for those who look up to me.
                </p>
              </div>

              <div className="story-snippet card-glass">
                <div className="snippet-icon"><Award size={24} /></div>
                <h3>Empowering Communities</h3>
                <p>
                  Over the years, I've had the privilege of training hundreds of young women and youth in ICT, digital literacy, and entrepreneurship. My mission is to dismantle barriers and provide the tools necessary for others to rise above their circumstances.
                </p>
              </div>

              <div className="story-snippet card-glass">
                <div className="snippet-icon"><BookOpen size={24} /></div>
                <h3>A Vision for the Future</h3>
                <p>
                  Beyond technology, my focus remains on mentorship and creating sustainable opportunities. I believe in fostering innovation that makes a meaningful, tangible impact in local communities.
                </p>
              </div>

              <div className="mystory-actions">
                <Link to="/about" className="btn-story-secondary">
                  Back to About <ArrowRight size={18} />
                </Link>
                <Link to="/contact" className="btn-story-primary">
                  Let's Connect <ArrowRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyStory;
