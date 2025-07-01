import React, { useState } from 'react';
import DatePicker from 'react-datepicker'; // DatePicker 임포트
import 'react-datepicker/dist/react-datepicker.css'; // DatePicker 스타일 임포트
import './Contact.css';

function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [visitDate, setVisitDate] = useState(null); // 방문 희망일 상태 추가
  const [agree, setAgree] = useState(true);
  const [detailsVisible, setDetailsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name.trim()) {
      alert('이름을 입력해주세요.');
      return;
    }
    if (!phone.trim()) {
      alert('연락처를 입력해주세요.');
      return;
    }
    // 방문 희망일 유효성 검사 추가
    if (!visitDate) {
      alert('방문 희망일을 선택해주세요.');
      return;
    }
    if (!agree) {
      alert('개인정보 수집 및 이용에 동의해주세요.');
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    const formData = new FormData();
    // PHP에서 사용하는 Key값(Name, Mobile, AgreeYN 등)과 일치시킵니다.
    formData.append('Name', name);
    formData.append('Mobile', phone);
    formData.append('Visit_Day', visitDate ? visitDate.toLocaleDateString('ko-KR') : '미지정');
    // 현재 폼에서는 방문 시간을 받지 않으므로 '미지정'으로 보냅니다.
    formData.append('Visit_Time', '미지정');
    // 동의 여부 값을 'Y' 또는 'N'으로 명확하게 보냅니다.
    formData.append('AgreeYN', agree ? 'Y' : 'N');
    
    const phpApiUrl = 'send_sms.php'; 

    try {
      const response = await fetch(phpApiUrl, {
        method: 'POST',
        body: formData,
      });

      // PHP에서 JSON 형식으로 응답을 보내므로 .json()으로 파싱합니다.
      const result = await response.json();

      // PHP 스크립트의 응답에 따라 메시지를 설정합니다.
      setSubmitMessage(result.message);

      // 성공 시 입력 필드 초기화
      if (result.success) {
        setName('');
        setPhone('');
        setVisitDate(null);
        setAgree(false);
      }
    } catch (error) {
      setSubmitMessage('네트워크 오류 또는 서버 응답에 문제가 발생했습니다. 확인 후 다시 시도해주세요.');
      console.error('Fetch Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-content" data-aos="fade-up">
        <div className="contact-header">
          <h2>상담신청</h2>
          <p>상도 힐스 더원에 대해 궁금한 점이 있으신가요?<br />전문 상담사가 신속하게 안내해 드립니다.</p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group-container">
            <div className="form-group">
              <label htmlFor="name">이름</label>
              <input type="text" id="name" name="name" placeholder="이름을 입력하세요" value={name} onChange={(e) => setName(e.target.value)} disabled={isSubmitting} />
            </div>
            <div className="form-group">
              <label htmlFor="phone">연락처</label>
              <input type="tel" id="phone" name="phone" placeholder="'-' 없이 숫자만 입력" value={phone} onChange={(e) => setPhone(e.target.value)} disabled={isSubmitting} />
            </div>
          </div>
          {/* 방문 희망일 선택 필드 */}
          <div className="form-group">
            <label htmlFor="visitDate">방문 희망일</label>
            {/* 아이콘을 위한 부모 필드 */}
            <div className="date-picker-container">
              <DatePicker
                id="visitDate"
                selected={visitDate}
                onChange={(date) => setVisitDate(date)}
                dateFormat="yyyy / MM / dd"
                placeholderText="방문 희망일을 선택하세요"
                className="date-picker-input"
                disabled={isSubmitting}
                autoComplete="off"
              />
            </div>
          </div>
          <div className="privacy-policy">
            <div className="privacy-checkbox-container">
              <input type="checkbox" id="privacy-agree" checked={agree} onChange={(e) => setAgree(e.target.checked)} disabled={isSubmitting} />
              <label htmlFor="privacy-agree">개인정보 수집 및 이용 동의</label>
              <span className="privacy-details-toggle" onClick={() => setDetailsVisible(!detailsVisible)}>
                {detailsVisible ? '[내용 닫기]' : '[내용 보기]'}
              </span>
            </div>
            
            {detailsVisible && (
              <div className="privacy-content">
                <strong>개인정보 수집 및 이용 안내</strong>
                <p>1. 수집하는 개인정보 항목: 이름, 연락처</p>
                <p>2. 수집 및 이용 목적: 분양 상담 및 안내, 마케팅 활용</p>
                <p>3. 보유 및 이용 기간: 수집일로부터 1년 (고객 동의 철회 시 즉시 파기)</p>
              </div>
            )}
          </div>
          <button type="submit" className="submit-button" disabled={isSubmitting}>
            {isSubmitting ? '전송 중...' : '상담신청'}
          </button>
          {submitMessage && <p className="submit-message">{submitMessage}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;