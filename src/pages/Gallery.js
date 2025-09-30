import React, { useState } from 'react';
import '../styles/Gallery.css';

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      image: "../partc.jpg",
      caption: "Particpant doing an assignment during a training session",
      category: "Training",
      title: "Training & Mentorship"
    },
    {
      id: 2,
      image: "../cldn.jpg",
      caption: "Training and mentoring young children in tech skills",
      category: "Training",
      title: "Training & Mentorship"
    },
    {
      id: 3,
      image: "../itsupport1.jpg",
      caption: "Computer repair and maintenance.",
      category: "IT Support",
      title: "IT Support"
    },
    {
      id: 4,
      image: "../itsupport.jpg",
      caption: "Computer maintenance and troubleshooting",
      category: "IT Support",
      title: "IT Support"
    },
    {
      id: 5,
      image: "../partc1.jpg",
      caption: "Photo moment during a participant graduation ceremony",
      category: "Training",
      title: "Participant Graduation"
    },
    {
      id: 6,
      image: "../training.jpg",
      caption: "Conducting a technical training session",
      category: "Training",
      title: "Training & Mentorship"
    }//,
    // {
    //   id: 7,
    //   image: "https://via.placeholder.com/400x300/3097c6/ffffff?text=Mobile+App",
    //   caption: "Developing cross-platform mobile applications",
    //   category: "Development",
    //   title: "Mobile App Development"
    // },
    // {
    //   id: 8,
    //   image: "https://via.placeholder.com/400x300/f26117/ffffff?text=Community",
    //   caption: "Participating in tech community events and meetups",
    //   category: "Community",
    //   title: "Community Engagement"
    // },
    // {
    //   id: 9,
    //   image: "https://via.placeholder.com/400x300/378e4d/ffffff?text=Innovation",
    //   caption: "Exploring new technologies and innovative approaches",
    //   category: "Innovation",
    //   title: "Technology Innovation"
    // }
  ];

  const categories = ["All", ...new Set(galleryItems.map(item => item.category))];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = selectedCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  const openLightbox = (item) => {
    setSelectedImage(item);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setSelectedImage(filteredItems[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = filteredItems.findIndex(item => item.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setSelectedImage(filteredItems[prevIndex]);
  };

  return (
    <div className="gallery-page">
      <div className="container">
        {/* Header Section */}
        <div className="gallery-header">
          <h1 className="gallery-title">My Gallery</h1>
          <p className="gallery-subtitle">
            A visual journey through my professional experiences and achievements
          </p>
        </div>

        {/* Category Filter */}
        <div className="category-filter">
          {categories.map(category => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredItems.map(item => (
            <div key={item.id} className="gallery-item" onClick={() => openLightbox(item)}>
              <div className="gallery-image-container">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="gallery-image"
                />
                <div className="gallery-overlay">
                  <div className="gallery-overlay-content">
                    <h3 className="gallery-item-title">{item.title}</h3>
                    <span className="gallery-category-badge">{item.category}</span>
                  </div>
                </div>
              </div>
              <div className="gallery-caption">
                <h4 className="caption-title">{item.title}</h4>
                <p className="caption-text">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="no-items">
            <p>No gallery items found for the selected category.</p>
          </div>
        )}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-container" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}>
              ×
            </button>
            <button className="lightbox-prev" onClick={prevImage}>
              ‹
            </button>
            <button className="lightbox-next" onClick={nextImage}>
              ›
            </button>
            
            <div className="lightbox-content">
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title}
                className="lightbox-image"
              />
              <div className="lightbox-info">
                <span className="lightbox-category">{selectedImage.category}</span>
                <h3 className="lightbox-title">{selectedImage.title}</h3>
                <p className="lightbox-caption">{selectedImage.caption}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;