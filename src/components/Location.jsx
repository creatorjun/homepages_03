// src/components/Location.jsx

import React from 'react';
import './Location.css';
import { siteContents } from '../data/contents.jsx';
import SectionTitle from './SectionTitle';

function Location() {
  // 대표 입지환경 정보 하나만 사용합니다.
  const representativeAdvantage = siteContents.location.advantages[0];

  return (
    <section id="location" className="location">
      <SectionTitle
        title={siteContents.location.title}
        description={siteContents.location.description}
      />

      <div className="location-content" data-aos="fade-up" data-aos-delay="200">
        <div className="location-map">
          <img src="images/location.webp" alt={siteContents.location.mapImageAlt} />
        </div>
        <div className="location-text">
          {siteContents.location.sections.map((section, index) => (
            <React.Fragment key={index}>
              <h3>{section.title}</h3>
              <ul>
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* 입지환경 그리드를 단일 대표 항목으로 변경 */}
      <div className="location-advantage-grid">
        {representativeAdvantage && (
          <div
            className="location-item"
            key={representativeAdvantage.id}
            data-aos="fade-up"
          >
            {/* 이미지 파일명을 location-1.webp로 수정 */}
            <img src={`images/location-1.webp`} alt={representativeAdvantage.heading} className="location-image" />
            <div className="location-text-overlay">
              <span className="location-title">{representativeAdvantage.title}</span>
              <h3>{representativeAdvantage.heading}</h3>
              <p>{representativeAdvantage.description}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Location;