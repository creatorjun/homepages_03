import React, { useState } from 'react';

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
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
          <li><a href="#premium">프리미엄</a></li>
          <li><a href="#location">입지환경</a></li>
          <li><a href="#flats">세대안내</a></li>
          <li><a href="#gallery">갤러리</a></li>
          <li><a href="#contact">상담신청</a></li>
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