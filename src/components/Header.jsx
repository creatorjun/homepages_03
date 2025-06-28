import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  // 메뉴 항목 클릭 시 메뉴를 닫는 함수를 추가합니다.
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <div className="logo">
        <a href="#">
          <img src="/images/logo.webp" alt="(대표) 상도 힐스 더원 로고" />
        </a>
      </div>
      <nav className={isMenuOpen ? 'menu active' : 'menu'}>
        <ul>
          <li><a href="#premium" onClick={handleLinkClick}>프리미엄</a></li>
          <li><a href="#location" onClick={handleLinkClick}>입지환경</a></li>
          <li><a href="#flats" onClick={handleLinkClick}>타입안내</a></li>
          <li><a href="#gallery" onClick={handleLinkClick}>갤러리</a></li>
          <li><a href="#contact" onClick={handleLinkClick}>상담신청</a></li>
        </ul>
      </nav>
      <button className="menu-toggle" onClick={handleMenuToggle}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </header>
  );
}

export default Header;