import React, { useState } from 'react';
import { FaCommentDots } from 'react-icons/fa';
import './SmsPopup.css';

function SmsPopup() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [message, setMessage] = useState('');
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleToggle = () => {
    if (!isExpanded) {
      setSubmitMessage('');
      setMessage('');
      setPhone('');
    }
    setIsExpanded(!isExpanded);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!message.trim()) {
      alert('메세지를 입력해주세요.');
      return;
    }
    if (!phone.trim()) {
      alert('연락처를 입력해주세요.');
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    const formData = new FormData();
    formData.append('Message', message);
    formData.append('Mobile', phone);

    const phpApiUrl = 'send_message.php';

    try {
      const response = await fetch(phpApiUrl, {
        method: 'POST',
        body: formData,
      });

      // PHP에서 JSON 형식으로 응답을 보낼 것을 가정하고 .json()으로 파싱합니다.
      const result = await response.json();

      // PHP 스크립트의 응답에 따라 메시지를 설정합니다.
      setSubmitMessage(result.message);

      if (result.success) {
        setMessage('');
        setPhone('');
        setTimeout(() => {
          setIsExpanded(false);
        }, 2000);
      }
    } catch (error) {
      setSubmitMessage('네트워크 오류 또는 서버 응답에 문제가 발생했습니다. 확인 후 다시 시도해주세요.');
      console.error('Fetch Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={`sms-widget-container ${isExpanded ? 'expanded' : ''}`}>
      {isExpanded ? (
        <div className="sms-form-wrapper">
          <div className="sms-form-header">
            <h3>문자 상담</h3>
            <button onClick={handleToggle} className="sms-close-button">&times;</button>
          </div>
          <form onSubmit={handleSubmit} className="sms-form-content">
            <div className="sms-form-group">
              <textarea
                id="sms-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="문의하실 내용을 입력하세요."
                disabled={isSubmitting}
              />
            </div>
            <div className="sms-form-group">
              <input
                type="tel"
                id="sms-phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="'-' 없이 숫자만 입력"
                disabled={isSubmitting}
              />
            </div>
            <button type="submit" className="sms-submit-button" disabled={isSubmitting}>
              {isSubmitting ? '전송 중...' : '전송'}
            </button>
            {submitMessage && <p className="sms-submit-message">{submitMessage}</p>}
          </form>
        </div>
      ) : (
        <button className="sms-icon-button" onClick={handleToggle}>
          <FaCommentDots size={24} />
        </button>
      )}
    </div>
  );
}

export default SmsPopup;