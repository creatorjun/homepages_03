// src/components/FooterContentArea.jsx

import React from 'react';
import './FooterContentArea.css';
import { siteContents } from '../data/contents';

function FooterContentArea() {
  return (
    <div className="footer-content-area">
      {/* 1. 기존 로고와 정보를 묶어주는 div를 추가합니다. */}
      <div className="footer-main-content">
        <div className="footer-logo">
          <img src="images/logo.webp" alt={siteContents.footerContent.logoAlt} />
        </div>
        <div className="footer-info">
          <p><strong>{siteContents.footerContent.siteName}</strong></p>
          <p>{siteContents.footerContent.address}</p>
          {/* 2. agencyInfo를 다시 원래대로 표시합니다. */}
          <p>{siteContents.footerContent.agencyInfo}</p>
        </div>
      </div>
      {/* 3. 새로 추가한 텍스트를 별도의 p 태그로 표시합니다. */}
      <p className="footer-centered-notice">
        {siteContents.footerContent.centeredNotice}
      </p>
    </div>
  );
}

export default FooterContentArea;