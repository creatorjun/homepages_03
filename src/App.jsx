import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS css import
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
      duration: 1000, // 애니메이션 지속 시간 (밀리초)
      once: true,     // 한 번만 애니메이션 실행
    });
  }, []);

  return (
    <>
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