// src/components/Flats.jsx

import React, { useState } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import './Flats.css';
import { siteContents } from '../data/contents';
import SectionTitle from './SectionTitle';

// 모든 평면도 이미지를 하나의 배열로 만듭니다.
const allFlatImages = siteContents.flats.items.flatMap(item => [item.image1, item.image2]);
const slides = allFlatImages.map(src => ({ src }));

function Flats() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  return (
    <section id="flats" className="flats">
      <SectionTitle
        title={siteContents.flats.title}
        description={siteContents.flats.description.split('<br />')}
      />
      <div className="flats-grid" data-aos="fade-up" data-aos-delay="200">
        {siteContents.flats.items.map((flat, index) => (
          <div className="flat-item" key={flat.id}>
            <div className="flat-image-container">
              <img
                src={flat.image1}
                alt={`${flat.altText} 1`}
                onClick={() => setLightboxIndex(index * 2)}
              />
              <img
                src={flat.image2}
                alt={`${flat.altText} 2`}
                onClick={() => setLightboxIndex(index * 2 + 1)}
              />
            </div>
            <div className="flat-info">
              <h4>{flat.type}</h4>
              {/* area 배열을 map으로 순회하며 | 기준으로 줄바꿈 처리 */}
              {flat.area.map((line, lineIndex) => (
                <p key={lineIndex}>
                  {line.split('|').map((text, textIndex, arr) => (
                    <React.Fragment key={textIndex}>
                      {text.trim()}
                      {textIndex < arr.length - 1 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Lightbox
        open={lightboxIndex >= 0}
        close={() => setLightboxIndex(-1)}
        index={lightboxIndex}
        slides={slides}
      />
    </section>
  );
}

export default Flats;