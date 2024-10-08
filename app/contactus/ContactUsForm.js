'use client';

import React, { useState } from 'react';
import validator from 'validator';

export default function ContactUsForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [postalError, setPostalError] = useState('');

  // Email Validation
  const validateEmail = (e) => {
    var email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailError('');
    } else {
      setEmailError('กรุณาป้อนอีเมล์ที่ถูกต้อง');
    }
  };

  const validatePhone = (e) => {
    const phone = e.target.value;

    if (/^\d*$/.test(phone)) {
      // Regular expression to match exactly 10 digits
      const regex = /^\d{10}$/;
      if (phone.length === 0 || regex.test(phone)) {
        setPhoneError(phone.length === 10 ? '' : '');
      } else {
        setPhoneError('หมายเลขโทรศัพท์ของท่านต้องมีจำนวน 10 หลัก');
      }
    } else {
      setPhoneError('กรุณาป้อนตัวเลขเท่านั้น');
    }
  };

  const validatePostal = (e) => {
    const postal = e.target.value;

    if (/^\d*$/.test(postal)) {
      // Regular expression to match exactly 5 digits
      const regex = /^\d{5}$/;
      if (postal.length === 0 || regex.test(postal)) {
        setPostalError(postal.length === 5 ? '' : '');
      } else {
        setPostalError('รหัสไปรษณีย์ของท่านต้องมีจำนวน 5 หลัก');
      }
    } else {
      setPostalError('กรุณาป้อนตัวเลขเท่านั้น');
    }
  };

  async function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    setError(null); // Clear previous errors when a new request starts
    setEmailError('');
    setPhoneError('');
    setPostalError('');

    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch('/api/contactus', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        console.log('falling over');
        throw new Error(`response status: ${response.status}`);
      }

      // Handle response if necessary
      const responseData = await response.json();
      console.log(responseData['message']);
      // alert('ส่งข้อมูลสำเร็จ');
    } catch (error) {
      // Capture the error message to display to the user
      setError(error.message);
      console.error(error);
      alert('มีข้อผิดพลาด, กรุณาส่งข้อมูลอีกครั้ง');
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <div>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <section className='section-contactus-form'>
        <div className='row'>
          <div className='contact'>
            <div className='contact__form'>
              <form
                onSubmit={onSubmit}
                className='row mb-3'
              >
                <div className='form__group'>
                  <input
                    type='text'
                    className='form__input'
                    placeholder='ชื่อ'
                    id='firstname'
                    name='firstname'
                    required
                  />
                  <label
                    htmlFor='firstname'
                    className='form__label'
                  >
                    ชื่อ
                  </label>
                </div>
                <div className='form__group'>
                  <input
                    type='text'
                    className='form__input'
                    placeholder='นามสกุล'
                    id='lastname'
                    name='lastname'
                    required
                  />
                  <label
                    htmlFor='lastname'
                    className='form__label'
                  >
                    นามสกุล
                  </label>
                </div>

                <div className='form__group'>
                  <input
                    type='text'
                    className='form__input'
                    placeholder='หัวข้อ'
                    id='title'
                    name='title'
                    required
                  />
                  <label
                    htmlFor='title'
                    className='form__label'
                  >
                    หัวข้อ
                  </label>
                </div>

                <div className='form__group'>
                  <input
                    type='text'
                    className='form__input'
                    placeholder='บริษัท'
                    id='company'
                    name='company'
                    required
                  />
                  <label
                    htmlFor='company'
                    className='form__label'
                  >
                    บริษัท
                  </label>
                </div>

                <div className='form__group'>
                  <input
                    type='text'
                    className='form__input'
                    placeholder='ที่อยู่'
                    id='address'
                    name='address'
                    required
                  />
                  <label
                    htmlFor='address'
                    className='form__label'
                  >
                    ที่อยู่
                  </label>
                </div>

                <div className='form__group'>
                  <input
                    type='text'
                    className='form__input'
                    placeholder='เมือง'
                    id='province'
                    name='province'
                    required
                  />
                  <label
                    htmlFor='province'
                    className='form__label'
                  >
                    เมือง
                  </label>
                </div>

                <div className='form__group'>
                  <input
                    type='text'
                    className='form__input'
                    placeholder='รหัสไปรษณีย์'
                    id='postal'
                    name='postal'
                    required
                    onChange={(e) => validatePostal(e)}
                  />
                  {!postalError ? (
                    ''
                  ) : (
                    <span style={{ fontWeight: 'bold', color: 'red' }}>
                      {postalError}
                    </span>
                  )}
                  <label
                    htmlFor='postal'
                    className='form__label'
                  >
                    รหัสไปรษณีย์
                  </label>
                </div>

                <div className='form__group'>
                  <input
                    type='text'
                    className='form__input'
                    placeholder='เบอร์โทรศัพท์'
                    id='phone'
                    name='phone'
                    required
                    onChange={(e) => validatePhone(e)}
                  />
                  {!phoneError ? (
                    ''
                  ) : (
                    <span style={{ fontWeight: 'bold', color: 'red' }}>
                      {phoneError}
                    </span>
                  )}
                  <label
                    htmlFor='phone'
                    className='form__label'
                  >
                    เบอร์โทรศัพท์
                  </label>
                </div>

                <div className='form__group'>
                  <input
                    type='text'
                    className='form__input'
                    placeholder='อีเมล์'
                    id='email'
                    name='email'
                    required
                    onChange={(e) => validateEmail(e)}
                  />
                  {!emailError ? (
                    ''
                  ) : (
                    <span style={{ fontWeight: 'bold', color: 'red' }}>
                      {emailError}
                    </span>
                  )}
                  <label
                    htmlFor='email'
                    className='form__label'
                  >
                    อีเมล์
                  </label>
                </div>

                <label className='text'>ประเภทโครงการ</label>

                <div className='form__group u-margin-bottom-medium'>
                  <div className='form__checkbox-group'>
                    <input
                      type='checkbox'
                      className='form__checkbox-input'
                      id='military'
                      name='military'
                    />
                    <label
                      htmlFor='military'
                      className='form__checkbox-label'
                    >
                      <span className='form__checkbox-button'></span>
                      การทหาร
                    </label>
                  </div>

                  <div className='form__checkbox-group'>
                    <input
                      type='checkbox'
                      className='form__checkbox-input'
                      id='commercial'
                      name='commercial'
                    />
                    <label
                      htmlFor='commercial'
                      className='form__checkbox-label'
                    >
                      <span className='form__checkbox-button'></span>
                      เชิงพาณิชย์
                    </label>
                  </div>

                  <div className='form__checkbox-group'>
                    <input
                      type='checkbox'
                      className='form__checkbox-input'
                      id='privatetype'
                      name='privatetype'
                    />
                    <label
                      htmlFor='privatetype'
                      className='form__checkbox-label'
                    >
                      <span className='form__checkbox-button'></span>
                      เอกชน
                    </label>
                  </div>
                </div>

                <label className='text'>คำอธิบายคำขอโครงการการบิน</label>
                <div className='form__group'>
                  <textarea
                    className='form__input'
                    placeholder='โปรดระบุว่า คำขอนี้เป็นไปเพื่อการจัดซื้อจัดจ้าง, ระบบการบิน, 
                      การปรับปรุงห้องนักบิน, การสร้างต้นแบบ, การทดสอบการบิน, 
                      การฝึกนักบิน และ/หรือ การฝึกอบรบช่างเครื่อง'
                    id='description'
                    rows='3'
                    name='description'
                    required
                  />
                  <label
                    htmlFor='description'
                    className='form__label'
                  >
                    คำอธิบายคำขอโครงการการบิน
                  </label>
                </div>

                <div className='form__group'>
                  <button
                    type='submit'
                    disabled={isLoading}
                    className='btn btn--red'
                  >
                    {isLoading ? 'Loading...' : 'ส่ง'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
