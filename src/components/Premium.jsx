import React from 'react';
import './Premium.css';
// react-icons에서 사용할 아이콘들을 임포트합니다.
import { FaTrain, FaExchangeAlt, FaTree, FaChartLine, FaShoppingCart, FaDraftingCompass, FaWater, FaCouch } from 'react-icons/fa';

const premiumItems = [
  {
    id: 1,
    icon: <FaTrain />, // 아이콘 컴포넌트로 변경
    title: "초역세권",
    text: "7호선 상도역",
  },
  {
    id: 2,
    icon: <FaExchangeAlt />,
    title: "더블 역세권",
    text: "서부선 예정",
  },
  {
    id: 3,
    icon: <FaTree />,
    title: "숲세권",
    text: "상도 근린공원",
  },
  {
    id: 4,
    icon: <FaChartLine />,
    title: "개발호재",
    text: "장승배기 종합행정타운",
  },
  {
    id: 5,
    icon: <FaShoppingCart />,
    title: "풍부한 생활 인프라",
    text: "반경 1km 내",
  },
  {
    id: 6,
    icon: <FaDraftingCompass />,
    title: "특화 설계",
    text: "복층형 구조",
  },
  {
    id: 7,
    icon: <FaWater />,
    title: "한강 조망권",
    text: "일부 호실",
  },
  {
    id: 8,
    icon: <FaCouch />,
    title: "풀퍼니시드",
    text: "빌트인 시스템",
  },
];

function Premium() {
  return (
    <section id="premium" className="premium">
      <div className="section-title" data-aos="fade-up">
        <h2>PREMIUM</h2>
      </div>

      <img 
        src="/images/premium.webp" 
        alt="상도 힐스 더원 프리미엄 조감도"
        className="premium-main-image"
        data-aos="fade-up"
        data-aos-delay="100"
      />

      <div className="premium-grid" data-aos="fade-up" data-aos-delay="200">
        {premiumItems.map(item => (
          <div className="premium-item" key={item.id}>
            {/* 아이콘을 렌더링하는 부분 */}
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