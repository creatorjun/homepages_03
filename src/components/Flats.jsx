import React from 'react';
import './Flats.css';
import { siteContents } from '../data/contents';
import SectionTitle from './SectionTitle';

function Flats() {
  return (
    <section id="flats" className="flats">
      <SectionTitle
        title={siteContents.flats.title}
        description={siteContents.flats.description.split('<br />')}
      />
      <div className="flats-grid" data-aos="fade-up" data-aos-delay="200">
        {siteContents.flats.items.map(flat => (
          <div className="flat-item" key={flat.id}>
            <img src={`images/flats_0${flat.id}.webp`} alt={flat.altText} />
            <div className="flat-info">
              <h4>{flat.type}</h4>
              <p>{flat.area}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Flats;