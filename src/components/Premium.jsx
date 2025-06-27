import React from 'react';

const premiumItems = [
  {
    id: 1,
    imgSrc: "/images/premium_icon_01.webp",
    alt: "프리미엄 아이콘 1",
    title: "초역세권",
    text: "7호선 상도역",
  },
  {
    id: 2,
    imgSrc: "/images/premium_icon_02.webp",
    alt: "프리미엄 아이콘 2",
    title: "더블 역세권",
    text: "서부선 예정",
  },
  {
    id: 3,
    imgSrc: "/images/premium_icon_03.webp",
    alt: "프리미엄 아이콘 3",
    title: "숲세권",
    text: "상도 근린공원",
  },
  {
    id: 4,
    imgSrc: "/images/premium_icon_04.webp",
    alt: "프리미엄 아이콘 4",
    title: "개발호재",
    text: "장승배기 종합행정타운",
  },
  {
    id: 5,
    imgSrc: "/images/premium_icon_05.webp",
    alt: "프리미엄 아이콘 5",
    title: "풍부한 생활 인프라",
    text: "반경 1km 내",
  },
  {
    id: 6,
    imgSrc: "/images/premium_icon_06.webp",
    alt: "프리미엄 아이콘 6",
    title: "특화 설계",
    text: "복층형 구조",
  },
  {
    id: 7,
    imgSrc: "/images/premium_icon_07.webp",
    alt: "프리미엄 아이콘 7",
    title: "한강 조망권",
    text: "일부 호실",
  },
  {
    id: 8,
    imgSrc: "/images/premium_icon_08.webp",
    alt: "프리미엄 아이콘 8",
    title: "풀퍼니시드",
    text: "빌트인 시스템",
  },
];

function Premium() {
  return (
    <section id="premium" className="premium">
      <div className="section-title" data-aos="fade-up">
        <h2>PREMIUM</h2>
        <p>상도 힐스 더원에서만 누릴 수 있는 프리미엄</p>
      </div>
      <div className="premium-grid" data-aos="fade-up" data-aos-delay="200">
        {premiumItems.map(item => (
          <div className="premium-item" key={item.id}>
            <img src={item.imgSrc} alt={item.alt} />
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Premium;