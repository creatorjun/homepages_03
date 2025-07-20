// src/components/Gallery.jsx

import React, { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import './Gallery.css';
import { siteContents } from '../data/contents';
import SectionTitle from './SectionTitle';

// 갤러리 대표 이미지 하나만 사용하도록 수정합니다.
const galleryImages = [
  {
    id: 1,
    thumb: `images/gallery-1.webp`,
    full: `images/gallery-1.webp`,
    alt: `${siteContents.gallery.imageAltTemplate} 1`
  }
];

const slides = galleryImages.map(item => ({
  src: item.full,
}));

function Gallery() {
  const [index, setIndex] = useState(-1);

  return (
    <section id="gallery" className="gallery">
      <SectionTitle
        title={siteContents.gallery.title}
        description={siteContents.gallery.description}
      />
      
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