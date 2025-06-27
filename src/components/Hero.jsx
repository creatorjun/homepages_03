import React from 'react';

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-text">
        <p className="sub-heading">
          분양전환형 10년 장기전세아파트
          <br />
          동작의 마지막 6억원대
        </p>
        <h1>
          서울의 <span className="highlight">퍼스트</span>
          <br />
          동작의 <span className="highlight">라스트</span>
        </h1>
      </div>
      <img
        src="/images/poll.webp"
        alt="7호선 상도역, 서부선 신상도역 역세권"
        className="hero-poll-image"
      />
    </section>
  );
}

export default Hero;