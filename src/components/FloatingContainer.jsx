import React, { useState } from 'react';
import { FaCommentDots, FaBell } from 'react-icons/fa';
import './FloatingContainer.css';

function FloatingContainer({ onShowPopup }) {
  const [isSmsExpanded, setIsSmsExpanded] = useState(false);
  const [smsMessage, setSmsMessage] = useState('');
  const [smsPhone, setSmsPhone] = useState('');
  const [isSmsSubmitting, setIsSmsSubmitting] = useState(false);
  const [smsSubmitMessage, setSmsSubmitMessage] = useState('');

  const handleSmsToggle = () => {
    if (!isSmsExpanded) {
      setSmsSubmitMessage('');
      setSmsMessage('');
      setSmsPhone('');
    }
    setIsSmsExpanded(!isSmsExpanded);
  };

  const handleSmsSubmit = async (event) => {
    event.preventDefault();

    if (!smsMessage.trim()) {
      alert('메세지를 입력해주세요.');
      return;
    }
    if (!smsPhone.trim()) {
      alert('연락처를 입력해주세요.');
      return;
    }

    setIsSmsSubmitting(true);
    setSmsSubmitMessage('');

    const formData = new FormData();
    formData.append('Message', smsMessage);
    formData.append('Mobile', smsPhone);

    const phpApiUrl = 'send_message.php';

    try {
      const response = await fetch(phpApiUrl, {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();
      setSmsSubmitMessage(result.message);

      if (result.success) {
        setSmsMessage('');
        setSmsPhone('');
        setTimeout(() => {
          setIsSmsExpanded(false);
        }, 2000);
      }
    } catch (error) {
      setSmsSubmitMessage('네트워크 오류 또는 서버 응답에 문제가 발생했습니다. 확인 후 다시 시도해주세요.');
      console.error('Fetch Error:', error);
    } finally {
      setIsSmsSubmitting(false);
    }
  };

  return (
    <>
      <div className="floating-button-container">
        <a href="tel:1666-8682" className="floating-call-button call">
          <span>분양문의</span>
          <span className="call-number">
            <img src="images/phone.png" alt="전화 아이콘" className="call-icon" />
            1666-8682
          </span>
        </a>
        <div className="bottom-button-row">
          <a href="#contact" className="floating-call-button reservation">
            <span>상담 신청</span>
          </a>
          <button className="floating-call-button popup-show" onClick={onShowPopup}>
            <FaBell />
            <span>팝업보기</span>
          </button>
        </div>
      </div>

      <div className={`sms-widget-container ${isSmsExpanded ? 'expanded' : ''}`}>
        {isSmsExpanded ? (
          <div className="sms-form-wrapper">
            <div className="sms-form-header">
              <h3>문자 상담</h3>
              <button onClick={handleSmsToggle} className="sms-close-button">&times;</button>
            </div>
            <form onSubmit={handleSmsSubmit} className="sms-form-content">
              <div className="sms-form-group">
                <textarea
                  id="sms-message"
                  value={smsMessage}
                  onChange={(e) => setSmsMessage(e.target.value)}
                  placeholder="문의하실 내용을 입력하세요."
                  disabled={isSmsSubmitting}
                />
              </div>
              <div className="sms-form-group">
                <input
                  type="tel"
                  id="sms-phone"
                  value={smsPhone}
                  onChange={(e) => setSmsPhone(e.target.value)}
                  placeholder="'-' 없이 숫자만 입력"
                  disabled={isSmsSubmitting}
                />
              </div>
              <button type="submit" className="sms-submit-button" disabled={isSmsSubmitting}>
                {isSmsSubmitting ? '전송 중...' : '전송'}
              </button>
              {smsSubmitMessage && <p className="sms-submit-message">{smsSubmitMessage}</p>}
            </form>
          </div>
        ) : (
          <button className="sms-icon-button" onClick={handleSmsToggle}>
            <FaCommentDots size={24} />
            <span>문자전송</span>
          </button>
        )}
      </div>
    </>
  );
}

export default FloatingContainer;