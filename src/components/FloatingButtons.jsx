import React from 'react';

function FloatingButtons() {
  return (
    <div className="floating-button-container">
      <a href="tel:1666-8682" className="floating-call-button call">
        <span>대표전화 1666 - 8682 </span>
      </a>
      <a href="#contact" className="floating-call-button reservation">
        <span>상담 신청</span>
      </a>
    </div>
  );
}

export default FloatingButtons;