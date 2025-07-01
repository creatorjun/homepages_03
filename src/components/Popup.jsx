import React, { useState, useEffect, useCallback } from 'react';
import './Popup.css';

const setCookie = (name, value, days) => {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
};

function Popup({ isVisible, isClosing, onClose }) {
  const [dontShowToday, setDontShowToday] = useState(false);

  const handleCloseTrigger = useCallback(() => {
    if (dontShowToday) {
      setCookie('popup_closed_today', 'true', 1);
    }
    onClose();
  }, [dontShowToday, onClose]);
  
  useEffect(() => {
    const onScroll = () => {
      handleCloseTrigger();
    };

    if (isVisible && !isClosing) {
      window.addEventListener('scroll', onScroll, { once: true });
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [isVisible, isClosing, handleCloseTrigger]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
        handleCloseTrigger();
    }
  }

  if (!isVisible) {
    return null;
  }

  return (
    <div className="popup-overlay" onClick={handleOverlayClick}>
      <div className={`popup ${isClosing ? 'closing' : ''}`}>
        <button className="popup-close" onClick={handleCloseTrigger}>&times;</button>
        
        <img src="images/popup.webp" alt="팝업 안내" className="popup-image" />
        
        <div className="popup-action">
          <a href="#contact" className="popup-button" onClick={(e) => {
            e.preventDefault(); 
            document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
            handleCloseTrigger();
          }}>
            상담신청 바로가기
          </a>
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