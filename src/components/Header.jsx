// src/components/Header.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Link 임포트
import './Header.css';
import { siteContents } from '../data/contents';

function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header>
      <div className="logo">
        {/* 로고 클릭 시 홈으로 이동하도록 Link 컴포넌트 사용 */}
        <Link to="/" onClick={handleLinkClick}>
          <img src="images/logo.webp" alt={siteContents.header.logoAlt} />
        </Link>
      </div>
      <nav className={isMenuOpen ? 'menu active' : 'menu'}>
        <ul>
          {siteContents.header.navLinks.map((link) => (
            <li key={link.href}>
              {/* a 태그를 Link 컴포넌트로 변경 */}
              <Link to={link.href} onClick={handleLinkClick}>
                {link.text}
              </Link>
            </li>
          ))}
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