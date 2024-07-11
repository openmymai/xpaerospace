'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { IoReorderTwoOutline, IoClose } from 'react-icons/io5';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <nav className='fixed top-0 bg-white/50 backdrop-blur-xl w-full h-20 shadow-xl z-50'>
        <div className='flex justify-between items-center h-full px-12'>
          <div>
            <Link href='/'>
              <div className='image-wrapper'>
                <Image
                  src='/img/xpatlogo.png'
                  alt='xpatlogo'
                  width={60}
                  height={20}
                />
              </div>
            </Link>
          </div>
          <div className='hidden md:flex'>
            <ul className='hidden md:flex'>
              <li className='ml-10 uppercase hover:border-b border-transparent border-b hover:border-white text-xl'>
                <Link href='/about'>เกี่ยวกับ</Link>
              </li>

              <li className='ml-10 uppercase hover:border-b border-transparent border-b hover:border-white text-xl dropdown'>
                <Link href='/capabilities'>ความสามารถ </Link>
                <i className='bi bi-chevron-down toggle-dropdown'></i>
                <ul>
                  <li>
                    <Link href='/aviationprocurement'>
                      การจัดซื้อจัดจ้างการบิน
                    </Link>
                  </li>
                  <li>
                    <Link href='/avionicsmodernization'>
                      Avionics Modernization
                    </Link>
                  </li>
                  <li>
                    <Link href='/aircraftmaintenance'>การบำรุงรักษาการบิน</Link>
                  </li>
                  <li>
                    <Link href='/flighttesting'>
                      การทดสอบและการรับรองการบิน
                    </Link>
                  </li>
                  <li>
                    <Link href='/flighttraining'>การอบรมการบิน</Link>
                  </li>
                </ul>
              </li>
              <li className='ml-10 uppercase hover:border-b border-transparent border-b hover:border-white text-xl'>
                <Link href='/whyxp'>ทำไมต้อง XP</Link>
              </li>

              <li className='ml-10 uppercase hover:border-b border-transparent border-b hover:border-white text-xl'>
                <Link href='/pastperformance'>ผลงานที่ผ่านมา</Link>
              </li>

              <li className='ml-10 uppercase hover:border-b border-transparent border-b hover:border-white text-xl'>
                <Link href='/partners'>คู่ค้าของเรา</Link>
              </li>

              <li className='ml-10 uppercase hover:border-b border-transparent border-b hover:border-white text-xl'>
                <Link href='/contactus'>ติดต่อเรา</Link>
              </li>
            </ul>
          </div>
          <div
            onClick={handleNav}
            className='md:hidden cursor-pointer pl-18'
          >
            <IoReorderTwoOutline size={25} />
          </div>
        </div>
        <div
          className={
            !menuOpen
              ? 'fixed right-[-100%] top-0 w-[100%] h-screen p-5 ease-in-out duration-700 z-80'
              : 'fixed right-0 top-0 w-[100%] md:hidden h-screen bg-[#fff] p-5 ease-in-out duration-700 z-80'
          }
        >
          <div className='flex w-full px-4 items-center justify-end z-60'>
            <div
              onClick={handleNav}
              className='cursor-pointer'
            >
              <IoClose size={20} />
            </div>
          </div>
          <div className='flex-col py-4'>
            <ul>
              <li
                onClick={() => setMenuOpen(false)}
                className='ml-10 py-4 hover:border-b border-transparent border-b hover:border-red-700 cursor-pointer text-2xl'
              >
                <Link href='/about'>เกี่ยวกับ</Link>
              </li>

              <li
                onClick={() => setMenuOpen(false)}
                className='ml-10 py-4 hover:border-b border-transparent border-b hover:border-red-700 cursor-pointer text-2xl'
              >
                <Link href='/capabilities'>ความสามารถ</Link>
              </li>

              <li
                onClick={() => setMenuOpen(false)}
                className='ml-10 py-4 hover:border-b border-transparent border-b hover:border-red-700 cursor-pointer text-2xl'
              >
                <Link href='/whyxp'>ทำไมต้อง XP</Link>
              </li>

              <li
                onClick={() => setMenuOpen(false)}
                className='ml-10 py-4 hover:border-b border-transparent border-b hover:border-red-700 cursor-pointer text-2xl'
              >
                <Link href='/pastperformance'>ผลงานที่ผ่านมา</Link>
              </li>

              <li
                onClick={() => setMenuOpen(false)}
                className='ml-10 py-4 hover:border-b border-transparent border-b hover:border-red-700 cursor-pointer text-2xl'
              >
                <Link href='/partners'>คู่ค้าของเรา</Link>
              </li>

              <li
                onClick={() => setMenuOpen(false)}
                className='ml-10 py-4 hover:border-b border-transparent border-b hover:border-red-700 cursor-pointer text-2xl'
              >
                <Link href='/contactus'>ติดต่อเรา</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
