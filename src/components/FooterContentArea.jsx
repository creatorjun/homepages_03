import React from 'react';
import './FooterContentArea.css';
import { siteContents } from '../data/contents';

function FooterContentArea() {
  return (
    <div className="footer-content-area">
      <div className="footer-logo">
        <img src="images/logo.webp" alt={siteContents.footerContent.logoAlt} />
      </div>
      <div className="footer-info">
        <p><strong>{siteContents.footerContent.siteName}</strong></p>
        <p>{siteContents.footerContent.address}</p>
      </div>
    </div>
  );
}

export default FooterContentArea;