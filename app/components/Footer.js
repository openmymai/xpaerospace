'use client';

import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <div>
      <section
        id='footer'
        className='section-footer'
      >
        <footer className='footer'>
          <div className='footer__block'>
            <div className='footer__footer-flex'>
              <div className='footer__top flex'>
                <div className='footer__logo'>
                  <div className='image-wrapper'>
                    <Image
                      src='/img/xpatlogo.png'
                      alt='xplogo'
                      width={300}
                      height={100}
                    />
                  </div>
                </div>
              </div>

              <div className='footer__single-block'>
                <h3 className='heading-tertiary u-margin-bottom-small'>
                  XP Aerospace (Thailand) Co.,Ltd.
                </h3>
                <h4>37/121 หมู่ที่ 2</h4>
                <h4>ถ.บางศรีเมือง ต.บางกร่าง</h4>
                <h4>อ.เมือง จ.นนทบุรี 11000</h4>
                <h4>โทร (66) 2882 8288</h4>
                <h4>แฟกซ์ (66) 2882 8288</h4>
              </div>

              <div className='footer__single-block'>
                <h3 className='heading-tertiary u-margin-bottom-small'>
                  CAPABILITIES
                </h3>
                <h4>
                  การจัดซื้อจัดจ้างการบิน
                  <br />
                  การบำรุงรักษาและการอัพเกรดเครื่องบิน
                  <br />
                  การทดสอบและรับรองการบิน
                  <br />
                  การฝึกอบรมการบินและการบินและการบิน
                  <br />
                </h4>
              </div>

              <div className='footer__single-block footer__footer-links'>
                <ul>
                  <li>
                    <i className='bi bi-chevron-right'></i>
                    <Link href='#about'>เกี่ยวกับ</Link>
                  </li>
                  <li>
                    <i className='bi bi-chevron-right'></i>
                    <Link href='#feature'>ทำไมต้อง XP</Link>
                  </li>
                  <li>
                    <i className='bi bi-chevron-right'></i>
                    <Link href='#mission'>ผลงานที่ผ่านมา</Link>
                  </li>
                  <li>
                    <i className='bi bi-chevron-right'></i>
                    <Link href='#process'>คู่ค้าของเรา</Link>
                  </li>
                  <li>
                    <i className='bi bi-chevron-right'></i>
                    <Link href='#contact'>ติดต่อเรา</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Footer;
