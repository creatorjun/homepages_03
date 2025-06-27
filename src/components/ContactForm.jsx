// src/components/ContactForm.jsx

import React, { useState } from 'react';

function ContactForm() {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault(); // 폼의 기본 제출 동작을 막습니다.
        
        // 여기에 script.js의 fnFormCheck() 같은 유효성 검사 로직 추가
        if (name.trim() === '' || mobile.trim() === '') {
            alert('성함과 연락처를 모두 입력해주세요.');
            return;
        }

        setIsSubmitting(true);

        const formData = new FormData();
        formData.append('Name', name);
        formData.append('Mobile', mobile);
        formData.append('AgreeYN', 'Y');

        try {
            // 중요: send_sms.php 파일이 있는 실제 서버 주소를 넣어야 합니다.
            const response = await fetch('http://당신의서버주소/send_sms.php', {
                method: 'POST',
                body: formData,
            });

            const result = await response.json();

            if (result.success) {
                alert(result.message);
                // 폼 초기화
                setName('');
                setMobile('');
            } else {
                alert('오류: ' + result.message);
            }
        } catch (error) {
            console.error('폼 제출 오류:', error);
            alert('전송 중 오류가 발생했습니다.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="content-section">
            <h2>관심고객 등록</h2>
            <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">성함</label>
                    <input 
                        type="text" id="name" name="Name" required 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">연락처</label>
                    <input 
                        type="tel" id="phone" name="Mobile" required placeholder="'-' 없이 숫자만 입력"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                    />
                </div>
                {/* ... 개인정보 동의 등 나머지 부분 ... */}
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? '전송 중...' : '관심고객 등록하기'}
                </button>
            </form>
        </section>
    );
}

export default ContactForm;