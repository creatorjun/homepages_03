import React from 'react';

function Location() {
  return (
    <section id="location" className="location">
      <div className="section-title" data-aos="fade-up">
        <h2>LOCATION</h2>
        <p>서울의 중심에서 누리는 교통, 교육, 생활의 완벽한 입지</p>
      </div>
      <div className="location-content" data-aos="fade-up" data-aos-delay="200">
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
        <div className="location-map">
          <img src="/images/location_map.webp" alt="상도 힐스 더원 위치 지도" />
        </div>
      </div>
    </section>
  );
}

export default Location;