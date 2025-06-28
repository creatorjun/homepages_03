import React, { useEffect } from 'react';
// import { Helmet } from 'react-helmet-async'; // 더 이상 필요 없으므로 이 줄을 삭제합니다.
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

import Header from './components/Header';
import Hero from './components/Hero';
import Premium from './components/Premium';
import Location from './components/Location';
import Flats from './components/Flats';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import FooterContentArea from './components/FooterContentArea';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import Popup from './components/Popup';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      {/* ===== SEO Meta Tags (리액트 19 네이티브 방식) ===== */}
      <title>상도 힐스 더원 - 동작의 마지막 6억원대 10년 장기전세아파트</title>
      <meta name="description" content="7호선 상도역, 서부선 신상도역 더블 역세권. 강남, 여의도, 용산 20분대 접근. 복층형 특화설계와 풀퍼니시드 시스템을 갖춘 상도 힐스 더원의 분양 정보를 확인하세요." />
      
      {/* Open Graph (소셜 미디어 공유용) */}
      <meta property="og:title" content="상도 힐스 더원" />
      <meta property="og:description" content="동작의 마지막 6억원대, 10년 장기전세아파트" />
      <meta property="og:image" content="/images/og_image.jpg" />
      <meta property="og:url" content="https://YOUR_WEBSITE_URL" />
      <meta property="og:type" content="website" />
      {/* ======================================================= */}

      <Header />
      <main>
        <Hero />
        <Premium />
        <Location />
        <Flats />
        <Gallery />
        <Contact />
      </main>
      <FooterContentArea />
      <Footer />
      <FloatingButtons />
      <Popup />
    </>
  );
}

export default App;