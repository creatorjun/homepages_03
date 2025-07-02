import React from 'react';
import './Location.css';
import { siteContents } from '../data/contents';
import SectionTitle from './SectionTitle';

function Location() {
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

      <div className="location-advantage-grid" data-aos="fade-up" data-aos-delay="300">
        {siteContents.location.advantages.map((item) => (
          <div className="location-item" key={item.id}>
            <img src={`images/location_0${item.id}.webp`} alt={item.heading} className="location-image" />
            <div className="location-text-overlay">
              <span className="location-title">{item.title}</span>
              <h3>{item.heading}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Location;