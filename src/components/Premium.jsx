import React from 'react';
import './Premium.css';
import { siteContents } from '../data/contents';
import SectionTitle from './SectionTitle';

function Premium() {
  return (
    <section id="premium" className="premium">
      <SectionTitle title={siteContents.premium.title} />

      <img
        src="images/premium.webp"
        alt={siteContents.premium.mainImageAlt}
        className="premium-main-image"
        data-aos="fade-up"
        data-aos-delay="100"
      />

      <div className="premium-grid" data-aos="fade-up" data-aos-delay="200">
        {siteContents.premium.items.map(item => (
          <div className="premium-item" key={item.id}>
            <div className="premium-item-icon">
              {item.icon}
            </div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Premium;