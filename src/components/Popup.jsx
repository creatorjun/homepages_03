import React, { useState, useEffect } from 'react';
import './Popup.css';

// 쿠키 관련 헬퍼 함수
const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
};

const setCookie = (name, value, days) => {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
};

function Popup() {
  const [isVisible, setIsVisible] = useState(false);
  const [dontShowToday, setDontShowToday] = useState(false);

  useEffect(() => {
    if (getCookie('popup_closed_today') !== 'true') {
      setIsVisible(true);
    }
  }, []);

  const handleClose = () => {
    if (dontShowToday) {
      setCookie('popup_closed_today', 'true', 1);
    }
    setIsVisible(false);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
        handleClose();
    }
  }

  if (!isVisible) {
    return null;
  }

  return (
    <div className="popup-overlay" onClick={handleOverlayClick}>
      <div className="popup">
        <div className="popup-header">
          <h2>방문예약 특별혜택</h2>
          <button className="popup-close" onClick={handleClose}>&times;</button>
        </div>
        <div className="popup-content">
          <p>홈페이지를 통해 방문예약 후 계약하시는 고객님께는<br /><strong>특별한 혜택</strong>을 드립니다.</p>
          <a href="#contact" className="popup-button" onClick={handleClose}>상담신청 바로가기</a>
        </div>
        <div className="popup-footer">
          <input 
            type="checkbox" 
            id="popup-today-close" 
            checked={dontShowToday}
            onChange={(e) => setDontShowToday(e.target.checked)}
          />
          <label htmlFor="popup-today-close">오늘 하루 보지 않기</label>
        </div>
      </div>
    </div>
  );
}

export default Popup;