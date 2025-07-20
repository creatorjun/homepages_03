// src/App.jsx

import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // 라우터 관련 컴포넌트 임포트
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';

// 공통 레이아웃 컴포넌트
import Header from './components/Header';
import FooterContentArea from './components/FooterContentArea';
import Footer from './components/Footer';
import Popup from './components/Popup';
import FloatingContainer from './components/FloatingContainer';

// 페이지 컴포넌트
import Home from './pages/Home';
import PremiumPage from './pages/PremiumPage';
import LocationPage from './pages/LocationPage';
import FlatsPage from './pages/FlatsPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

import { siteContents } from './data/contents.jsx';

const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
};

function App() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isPopupClosing, setIsPopupClosing] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
    // 페이지 이동 시에도 팝업 쿠키 체크 로직은 유지
    if (getCookie('popup_closed_today') !== 'true') {
      // setIsPopupVisible(true); // 페이지 이동마다 팝업이 뜨는 것을 방지하기 위해 주석 처리하거나, 첫 로딩 시에만 뜨도록 조정이 필요할 수 있습니다.
    }
  }, []);

  const handlePopupOpen = () => {
    if (isPopupVisible) return;
    setIsPopupClosing(false);
    setIsPopupVisible(true);
  };

  const handlePopupClose = useCallback(() => {
    if (isPopupClosing) return;

    setIsPopupClosing(true);
    setTimeout(() => {
      setIsPopupVisible(false);
      setIsPopupClosing(false);
    }, 500);
  }, [isPopupClosing]);

  return (
    <Router>
      <title>{siteContents.meta.title}</title>
      <meta name="description" content={siteContents.meta.description} />
      <meta property="og:title" content={siteContents.meta.ogTitle} />
      <meta property="og:description" content={siteContents.meta.ogDescription} />
      <meta property="og:image" content="images/og_image.jpg" />
      <meta property="og:url" content={siteContents.meta.ogUrl} />
      <meta property="og:type" content="website" />

      {/* 모든 페이지에 공통으로 보일 컴포넌트 */}
      <Header />
      
      <main>
        {/* 주소 경로에 따라 다른 페이지를 보여주는 부분 */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/premium" element={<PremiumPage />} />
          <Route path="/location" element={<LocationPage />} />
          <Route path="/flats" element={<FlatsPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      {/* 모든 페이지에 공통으로 보일 컴포넌트 */}
      <FooterContentArea />
      <Footer />
      <FloatingContainer onShowPopup={handlePopupOpen} />
      <Popup
        isVisible={isPopupVisible}
        isClosing={isPopupClosing}
        onClose={handlePopupClose}
      />
    </Router>
  );
}

export default App;