// src/components/Contact.jsx

import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './Contact.css';
import { siteContents } from '../data/contents';

function Contact() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [visitDate, setVisitDate] = useState(null);
  const [agree, setAgree] = useState(true);
  const [detailsVisible, setDetailsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!name.trim()) {
      alert(siteContents.contact.alerts.nameRequired);
      return;
    }
    if (!phone.trim()) {
      alert(siteContents.contact.alerts.phoneRequired);
      return;
    }
    if (!visitDate) {
      alert(siteContents.contact.alerts.visitDateRequired);
      return;
    }
    if (!agree) {
      alert(siteContents.contact.alerts.agreeRequired);
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage('');

    const formData = new FormData();
    formData.append('Name', name);
    formData.append('Mobile', phone);
    formData.append('Visit_Day', visitDate ? visitDate.toLocaleDateString('ko-KR') : '미지정');
    formData.append('Visit_Time', '미지정');
    formData.append('AgreeYN', agree ? 'Y' : 'N');
    // 기본 문의 내용을 함께 전송합니다.
    formData.append('Inquiry', '성수 드림빌드 문의합니다.');
    
    const phpApiUrl = 'send_sms.php'; 

    try {
      const response = await fetch(phpApiUrl, {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();
      setSubmitMessage(result.message);

      if (result.success) {
        setName('');
        setPhone('');
        setVisitDate(null);
        setAgree(false);
      }
    } catch (error) {
      setSubmitMessage(siteContents.contact.alerts.networkError);
      console.error('Fetch Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-content" data-aos="fade-up">
        <div className="contact-header">
          <h2>{siteContents.contact.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: siteContents.contact.description }} />
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group-container">
            <div className="form-group">
              <label htmlFor="name">{siteContents.contact.form.name}</label>
              <input type="text" id="name" name="name" placeholder={siteContents.contact.form.namePlaceholder} value={name} onChange={(e) => setName(e.target.value)} disabled={isSubmitting} />
            </div>
            <div className="form-group">
              <label htmlFor="phone">{siteContents.contact.form.phone}</label>
              <input type="tel" id="phone" name="phone" placeholder={siteContents.contact.form.phonePlaceholder} value={phone} onChange={(e) => setPhone(e.target.value)} disabled={isSubmitting} />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="visitDate">{siteContents.contact.form.visitDate}</label>
            <div className="date-picker-container">
              <DatePicker
                id="visitDate"
                selected={visitDate}
                onChange={(date) => setVisitDate(date)}
                dateFormat="yyyy / MM / dd"
                placeholderText={siteContents.contact.form.visitDatePlaceholder}
                className="date-picker-input"
                disabled={isSubmitting}
                autoComplete="off"
              />
            </div>
          </div>
          <div className="privacy-policy">
            <div className="privacy-checkbox-container">
              <input type="checkbox" id="privacy-agree" checked={agree} onChange={(e) => setAgree(e.target.checked)} disabled={isSubmitting} />
              <label htmlFor="privacy-agree">{siteContents.contact.form.agree}</label>
              <span className="privacy-details-toggle" onClick={() => setDetailsVisible(!detailsVisible)}>
                {detailsVisible ? siteContents.contact.form.detailsToggleOpen : siteContents.contact.form.detailsToggleClose}
              </span>
            </div>
            
            {detailsVisible && (
              <div className="privacy-content">
                <strong>{siteContents.contact.privacyPolicy.title}</strong>
                <p>{siteContents.contact.privacyPolicy.item1}</p>
                <p>{siteContents.contact.privacyPolicy.item2}</p>
                <p>{siteContents.contact.privacyPolicy.item3}</p>
              </div>
            )}
          </div>
          <button type="submit" className="submit-button" disabled={isSubmitting}>
            {isSubmitting ? siteContents.contact.form.submittingButton : siteContents.contact.form.submitButton}
          </button>
          {submitMessage && <p className="submit-message">{submitMessage}</p>}
        </form>
      </div>
    </section>
  );
}

export default Contact;