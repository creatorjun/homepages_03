import React from 'react';
import './Flats.css';

const flatsData = [
  {
    id: 1,
    imgSrc: "images/flats_01.webp",
    altText: "A타입 평면도",
    type: "A-type",
    area: "전용 59㎡",
  },
  {
    id: 2,
    imgSrc: "images/flats_02.webp",
    altText: "B타입 평면도",
    type: "B-type",
    area: "전용 71㎡",
  },
  {
    id: 3,
    imgSrc: "images/flats_03.webp",
    altText: "C-type 평면도",
    type: "C-type",
    area: "전용 84㎡",
  },
];

function Flats() {
  return (
    <section id="flats" className="flats">
      <div className="section-title" data-aos="fade-up">
        <h2>FLATS</h2>
        <p>라이프스타일에 맞춰 선택하는<br />총 459세대 다양한 타입의 평면</p>
      </div>
      <div className="flats-grid" data-aos="fade-up" data-aos-delay="200">
        {flatsData.map(flat => (
          <div className="flat-item" key={flat.id}>
            <img src={flat.imgSrc} alt={flat.altText} />
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