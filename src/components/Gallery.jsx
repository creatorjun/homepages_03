import React, { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import './Gallery.css';

const galleryImages = [];
for (let i = 1; i <= 28; i++) {
  galleryImages.push({
    id: i,
    thumb: `/images/gallery${i}.jpg`,
    full: `/images/gallery${i}.jpg`,
    alt: `갤러리 이미지 ${i}`
  });
}

const slides = galleryImages.map(item => ({
  src: item.full,
}));

function Gallery() {
  const [index, setIndex] = useState(-1);

  return (
    <section id="gallery" className="gallery">
      <div className="section-title" data-aos="fade-up">
        <h2>GALLERY</h2>
        <p>상도 힐스 더원의 하이엔드 인테리어를 미리 만나보세요</p>
      </div>
      
      <div className="gallery-grid" data-aos="fade-up" data-aos-delay="200">
        {galleryImages.map((image, idx) => (
          <div 
            className="gallery-item" 
            key={image.id} 
            onClick={() => setIndex(idx)}
            style={{ cursor: 'pointer' }}
          >
            <img src={image.thumb} alt={image.alt} />
          </div>
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={slides}
      />
    </section>
  );
}

export default Gallery;