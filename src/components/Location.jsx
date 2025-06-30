import React from 'react';
import './Location.css';

const locationData = [
  {
    id: 1,
    imageSrc: 'images/location_01.webp',
    title: '입지환경 1',
    heading: '새로운 주거타운 형성',
    description: '2025년 6월 예정인 장승배기 종합행정타운과 상도14·15구역과 모아타운 개발로 생활편의성 및 주거환경 개선 기대',
  },
  {
    id: 2,
    imageSrc: 'images/location_02.webp',
    title: '입지환경 2',
    heading: '뛰어난 교통 접근성',
    description: '2030년 개통 예정인 신상도역(예정) 초역세권, 7호선 상도역 도보 500m 거리로 서울-경기권 이동이 편리한 교통 인프라',
  },
  {
    id: 3,
    imageSrc: 'images/location_03.webp',
    title: '입지환경 3',
    heading: '우수한 교육 환경',
    description: '단지 앞 상도초 및 도보 이동가능한 초·중·고 학군, 중앙대, 숭실대 등 명문 사립대학교 인근에 위치, 동작도서관, 국사봉도서관 등 우수한 교육환경',
  },
  {
    id: 4,
    imageSrc: 'images/location_04.webp',
    title: '입지환경 4',
    heading: '다양한 생활 인프라',
    description: '롯데백화점 관악점, 롯데시네마 신림점, 이마트 여의도점 인근에 위치, 서울대보라매병원, 중앙대병원 등 의료시설이 가까이 위치해 높은 생활의 질',
  },
  {
    id: 5,
    imageSrc: 'images/location_05.webp',
    title: '입지환경 5',
    heading: '자연친화적 주거환경',
    description: '한강과 인접한 우수한 경관지역으로 단지 인상도근린공원, 국사봉공원, 보라매공원 등 단지 인근에 위치',
  },
  {
    id: 6,
    imageSrc: 'images/location_06.webp',
    title: '입지환경 6',
    heading: '프리미엄 특화 설계',
    description: '생활의 가치를 높이는 혁신적인 평면과 고품격 마감재, 풀퍼니시드 시스템으로 완성된 주거 공간',
  },
];

function Location() {
  return (
    <section id="location" className="location">
      <div className="section-title" data-aos="fade-up">
        <h2>LOCATION</h2>
        <p>서울의 중심에서 누리는 교통, 교육, 생활의 완벽한 입지</p>
      </div>

      <div className="location-content" data-aos="fade-up" data-aos-delay="200">
        <div className="location-map">
          <img src="images/location.webp" alt="상도 힐스 더원 위치 지도" />
        </div>
        <div className="location-text">
          <h3>교통의 중심</h3>
          <ul>
            <li>7호선 상도역, 장승배기역과 서부선(예정) 더블역세권</li>
            <li>강남, 여의도, 용산 등 서울 주요 도심 20분대 접근</li>
          </ul>
          <h3>교육의 중심</h3>
          <ul>
            <li>상도초, 장승중, 성남고 등 다수의 초중고 인접</li>
            <li>중앙대, 숭실대, 서울대 등 명문대 밀집 지역</li>
          </ul>
          <h3>생활의 중심</h3>
          <ul>
            <li>롯데백화점, 이마트, 중앙대병원 등 풍부한 편의시설</li>
            <li>상도근린공원, 용마산, 국사봉 등 쾌적한 자연환경</li>
          </ul>
        </div>
      </div>

      <div className="location-advantage-grid" data-aos="fade-up" data-aos-delay="300">
        {locationData.map((item) => (
          <div className="location-item" key={item.id}>
            <img src={item.imageSrc} alt={item.heading} className="location-image" />
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