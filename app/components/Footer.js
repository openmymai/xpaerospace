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
              <h2 className='mb-6 text-xl font-semibold text-gray-900 uppercase dark:text-white'>
                บริษัท เอ็กซ์พี แอร์โรเสปซ (ประเทศไทย) จำกัด
              </h2>
              <ul className='text-gray-500 dark:text-gray-400 font-medium'>
                <li>37/121 หมู่ที่ 9 ถนน บางศรีเมือง</li>
                <li>ต.บางกร่าง อ.เมืองนนทบุรี</li>
                <li>จ.นนทบุรี 11000</li>
                <li>โทร 662 882 8288</li>
                <li>โทร 662 882 8309</li>
              </ul>
            </div>
            <div>
              <h2 className='mb-6 text-xl font-semibold text-gray-900 uppercase dark:text-white'>
                Capabilities
              </h2>
              <ul className='text-gray-500 dark:text-gray-400 font-large'>
                <li>การจัดซื้อจัดจ้างการบิน</li>
                <li>การบำรุงรักษาและการอัพเกรดเครื่องบิน</li>
                <li>การทดสอบและรับรองการบิน</li>
                <li>การฝึกอบรมการบิน</li>
              </ul>
            </div>
            <div>
              <h2 className='mb-6 text-xl font-semibold text-gray-900 uppercase dark:text-white'>
                ลิงค์ที่สำคัญ
              </h2>
              <ul className='text-gray-500 dark:text-gray-400 font-large'>
                <li>
                  <Link
                    href='/about'
                    className='hover:underline'
                  >
                    เกี่ยวกับ
                  </Link>
                </li>
                <li>
                  <Link
                    href='/whyxp'
                    className='hover:underline'
                  >
                    ทำไมต้อง XP
                  </Link>
                </li>
                <li>
                  <Link
                    href='/whyxp'
                    className='hover:underline'
                  >
                    ผลงานที่ผ่านมา
                  </Link>
                </li>
                <li>
                  <Link
                    href='/whyxp'
                    className='hover:underline'
                  >
                    คู่ค้า
                  </Link>
                </li>
                <li>
                  <Link
                    href='/whyxp'
                    className='hover:underline'
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
            <a
              href='https://flowbite.com/'
              className='hover:underline'
            >
              XP Aerospace (Thailand)™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
