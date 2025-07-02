import React, { useState } from 'react';
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
        <a href="#">
          <img src="images/logo.webp" alt={siteContents.header.logoAlt} />
        </a>
      </div>
      <nav className={isMenuOpen ? 'menu active' : 'menu'}>
        <ul>
          {siteContents.header.navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={handleLinkClick}>
                {link.text}
              </a>
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