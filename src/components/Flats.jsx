// src/components/Flats.jsx

import React from 'react';
import './Flats.css';
import { siteContents } from '../data/contents';
import SectionTitle from './SectionTitle';

function Flats() {
  // 대표 타입(A-type) 정보만 사용하도록 수정합니다.
  const representativeFlat = siteContents.flats.items[0];

  return (
    <section id="flats" className="flats">
      <SectionTitle
        title={siteContents.flats.title}
        description={siteContents.flats.description.split('<br />')}
      />
      <div className="flats-grid" data-aos="fade-up" data-aos-delay="200">
        {representativeFlat && (
          <div className="flat-item" key={representativeFlat.id}>
            {/* 이미지 파일명을 flats-1.webp로 수정합니다. */}
            <img src={`images/flats-1.webp`} alt={representativeFlat.altText} />
            <div className="flat-info">
              <h4>{representativeFlat.type}</h4>
              <p>{representativeFlat.area}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Flats;