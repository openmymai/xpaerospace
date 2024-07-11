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
                <div class='form__group'>
                  <input
                    type='text'
                    class='form__input'
                    placeholder='คำนำหน้า'
                    id='title'
                    required
                  />
                  <label
                    for='title'
                    class='form__label'
                  >
                    คำนำหน้า
                  </label>
                </div>
                <div class='form__group'>
                  <input
                    type='text'
                    class='form__input'
                    placeholder='ชื่อ'
                    id='firstname'
                    required
                  />
                  <label
                    for='firstname'
                    class='form__label'
                  >
                    ชื่อ
                  </label>
                </div>
                <div class='form__group'>
                  <input
                    type='text'
                    class='form__input'
                    placeholder='นามสกุล'
                    id='lastname'
                    required
                  />
                  <label
                    for='lastname'
                    class='form__label'
                  >
                    นามสกุล
                  </label>
                </div>

                <div class='form__group'>
                  <input
                    type='text'
                    class='form__input'
                    placeholder='บริษัท'
                    id='company'
                    required
                  />
                  <label
                    for='company'
                    class='form__label'
                  >
                    บริษัท
                  </label>
                </div>

                <div class='form__group'>
                  <input
                    type='text'
                    class='form__input'
                    placeholder='ที่อยู่'
                    id='address'
                    required
                  />
                  <label
                    for='address'
                    class='form__label'
                  >
                    ที่อยู่
                  </label>
                </div>

                <div class='form__group'>
                  <input
                    type='text'
                    class='form__input'
                    placeholder='จังหวัด'
                    id='province'
                    required
                  />
                  <label
                    for='province'
                    class='form__label'
                  >
                    จังหวัด
                  </label>
                </div>

                <div class='form__group'>
                  <input
                    type='text'
                    class='form__input'
                    placeholder='รหัสไปรษณีย์'
                    id='postal'
                    required
                  />
                  <label
                    for='postal'
                    class='form__label'
                  >
                    รหัสไปรษณีย์
                  </label>
                </div>

                <div class='form__group'>
                  <input
                    type='text'
                    class='form__input'
                    placeholder='โทร'
                    id='phone'
                    required
                  />
                  <label
                    for='phone'
                    class='form__label'
                  >
                    โทร
                  </label>
                </div>

                <div class='form__group'>
                  <input
                    type='text'
                    class='form__input'
                    placeholder='อีเมล์'
                    id='email'
                    required
                  />
                  <label
                    for='email'
                    class='form__label'
                  >
                    อีเมล์
                  </label>
                </div>

                <label class='text'>ลักษณะโครงการ</label>

                <div class='form__group u-margin-bottom-medium'>
                  <div class='form__checkbox-group'>
                    <input
                      type='checkbox'
                      class='form__checkbox-input'
                      id='military'
                      name='size'
                    />
                    <label
                      for='military'
                      class='form__checkbox-label'
                    >
                      <span class='form__checkbox-button'></span>
                      การทหาร
                    </label>
                  </div>

                  <div class='form__checkbox-group'>
                    <input
                      type='checkbox'
                      class='form__checkbox-input'
                      id='commercial'
                      name='size'
                    />
                    <label
                      for='commercial'
                      class='form__checkbox-label'
                    >
                      <span class='form__checkbox-button'></span>
                      พาณิชย์
                    </label>
                  </div>

                  <div class='form__checkbox-group'>
                    <input
                      type='checkbox'
                      class='form__checkbox-input'
                      id='private'
                      name='size'
                    />
                    <label
                      for='private'
                      class='form__checkbox-label'
                    >
                      <span class='form__checkbox-button'></span>
                      เอกชน
                    </label>
                  </div>
                </div>

                <label class='text'>รายละเอียด</label>
                <div class='form__group'>
                  <textarea
                    class='form__input'
                    placeholder='โปรดระบุว่าคำขอนี้มีไว้สำหรับการจัดซื้อจัดจ้าง, ระบบการบิน,
                     การปรับปรุงห้องนักบิน, การสร้างต้นแบบ, การทดสอบการบิน, การฝึกนักบิน, และ/หรือ การฝึกอบรมช่างเครื่อง'
                    id='description'
                    rows='3'
                    required
                  />
                  <label
                    for='description'
                    class='form__label'
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
