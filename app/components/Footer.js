import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer>
      <div className='mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8'>
        <div className='md:flex md:justify-between'>
          <div className='mb-6 md:mb-0'>
            <Link
              href='/'
              className='flex items-center'
            >
              <div className='image-wrapper'>
                <Image
                  src='/img/xpatlogo.png'
                  alt='xplogo'
                  width={300}
                  height={100}
                />
              </div>
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3'>
            <div>
              <h2 className='mb-6 text-2xl font-semibold text-gray-900 uppercase dark:text-white'>
                บริษัท เอ็กซ์พี แอร์โรเสปซ (ประเทศไทย) จำกัด
              </h2>
              <ul className='text-gray-500 dark:text-gray-400 text-2xl'>
                <li>37/121 หมู่ที่ 9 ถนน บางศรีเมือง</li>
                <li>ต.บางกร่าง อ.เมืองนนทบุรี</li>
                <li>จ.นนทบุรี 11000</li>
                <li>โทร 662 882 8288</li>
                <li>โทร 662 882 8309</li>
              </ul>
            </div>
            <div>
              <h2 className='mb-6 text-2xl font-semibold text-gray-900 uppercase dark:text-white'>
                ความสามารถ
              </h2>
              <ul className='text-gray-500 dark:text-gray-400 text-xl'>
                <li>
                  <Link
                    href='/aviationprocurement'
                    className='hover:text-red-600'
                  >
                    การจัดซื้อจัดจ้างการบิน
                  </Link>
                </li>

                <li>
                  <Link
                    href='/avionicsmodernization'
                    className='hover:text-red-600'
                  >
                    Avionics ที่ทันสมัย
                  </Link>
                </li>

                <li>
                  <Link
                    href='/aircraftmaintenance'
                    className='hover:text-red-600'
                  >
                    การบำรุงรักษาและการอัพเกรดเครื่องบิน
                  </Link>
                </li>

                <li>
                  <Link
                    href='/flighttesting'
                    className='hover:text-red-600'
                  >
                    การทดสอบและรับรองการบิน
                  </Link>
                </li>

                <li>
                  <Link
                    href='/flighttraining'
                    className='hover:text-red-600'
                  >
                    การฝึกอบรมการบิน
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ul className='text-gray-500 dark:text-gray-400 text-2xl'>
                <li>
                  <i className='bi bi-chevron-right'></i>
                  <Link
                    href='/about'
                    className='hover:text-red-600'
                  >
                    เกี่ยวกับ
                  </Link>
                </li>
                <li>
                  <i className='bi bi-chevron-right'></i>
                  <Link
                    href='/whyxp'
                    className='hover:text-red-600'
                  >
                    ทำไมต้อง XP
                  </Link>
                </li>
                <li>
                  <i className='bi bi-chevron-right'></i>
                  <Link
                    href='/pastperformance'
                    className='hover:text-red-600'
                  >
                    ผลงานที่ผ่านมา
                  </Link>
                </li>
                <li>
                  <i className='bi bi-chevron-right'></i>
                  <Link
                    href='/partners'
                    className='hover:text-red-600'
                  >
                    พันธมิตรของเรา
                  </Link>
                </li>
                <li>
                  <i className='bi bi-chevron-right'></i>
                  <Link
                    href='/contactus'
                    className='hover:text-red-600'
                  >
                    ติดต่อ
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
        <div className='sm:flex sm:items-center sm:justify-between'>
          <span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
            © 2024{' '}
            <Link
              href='/'
              className='hover:text-red-600'
            >
              XP Aerospace (Thailand)™
            </Link>
            . All Rights Reserved.
            {' | '}
            <Link
              href='/privacy'
              className='hover:text-red-600'
            >
              Privacy Policy
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
