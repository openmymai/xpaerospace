'use client';

import React, { useState } from 'react';

export default function ContactUsForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function onSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    setError(null); // Clear previous errors when a new request starts

    try {
      const formData = new FormData(event.currentTarget);
      const response = await fetch('/api/submit', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('');
      }

      // Handle response if necessary
      const data = await response.json();
      // ...
    } catch (error) {
      // Capture the error message to display to the user
      setError(error.message);
      console.error(error);
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
                    placeholder='คำนำหน้า'
                    id='title'
                    required
                  />
                  <label
                    htmlFor='title'
                    className='form__label'
                  >
                    คำนำหน้า
                  </label>
                </div>
                <div className='form__group'>
                  <input
                    type='text'
                    className='form__input'
                    placeholder='ชื่อ'
                    id='firstname'
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
                    placeholder='บริษัท'
                    id='company'
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
                    placeholder='จังหวัด'
                    id='province'
                    required
                  />
                  <label
                    htmlFor='province'
                    className='form__label'
                  >
                    จังหวัด
                  </label>
                </div>

                <div className='form__group'>
                  <input
                    type='text'
                    className='form__input'
                    placeholder='รหัสไปรษณีย์'
                    id='postal'
                    required
                  />
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
                    placeholder='โทร'
                    id='phone'
                    required
                  />
                  <label
                    htmlFor='phone'
                    className='form__label'
                  >
                    โทร
                  </label>
                </div>

                <div className='form__group'>
                  <input
                    type='text'
                    className='form__input'
                    placeholder='อีเมล์'
                    id='email'
                    required
                  />
                  <label
                    htmlFor='email'
                    className='form__label'
                  >
                    อีเมล์
                  </label>
                </div>

                <label className='text'>ลักษณะโครงการ</label>

                <div className='form__group u-margin-bottom-medium'>
                  <div className='form__checkbox-group'>
                    <input
                      type='checkbox'
                      className='form__checkbox-input'
                      id='military'
                      name='size'
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
                      name='size'
                    />
                    <label
                      htmlFor='commercial'
                      className='form__checkbox-label'
                    >
                      <span className='form__checkbox-button'></span>
                      พาณิชย์
                    </label>
                  </div>

                  <div className='form__checkbox-group'>
                    <input
                      type='checkbox'
                      className='form__checkbox-input'
                      id='private'
                      name='size'
                    />
                    <label
                      htmlFor='private'
                      className='form__checkbox-label'
                    >
                      <span className='form__checkbox-button'></span>
                      เอกชน
                    </label>
                  </div>
                </div>

                <label className='text'>รายละเอียด</label>
                <div className='form__group'>
                  <textarea
                    className='form__input'
                    placeholder='โปรดระบุว่าคำขอนี้มีไว้สำหรับการจัดซื้อจัดจ้าง, ระบบการบิน,
                     การปรับปรุงห้องนักบิน, การสร้างต้นแบบ, การทดสอบการบิน, การฝึกนักบิน, และ/หรือ การฝึกอบรมช่างเครื่อง'
                    id='description'
                    rows='3'
                    required
                  />
                  <label
                    htmlFor='description'
                    className='form__label'
                  >
                    รายละเอียด
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
