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
    formData.append('message', message);
    formData.append('phone', phone);

    const phpApiUrl = 'send_message.php';

    try {
      const response = await fetch(phpApiUrl, {
        method: 'POST',
        body: formData,
      });

      const result = await response.text();

      if (result.includes('SUCCESS')) {
        setSubmitMessage('메세지가 성공적으로 전송되었습니다.');
        setMessage('');
        setPhone('');
        setTimeout(() => {
          setIsExpanded(false);
        }, 2000);
      } else {
        setSubmitMessage('오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
      }
    } catch (error) {
      setSubmitMessage('네트워크 오류가 발생했습니다. 확인 후 다시 시도해주세요.');
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