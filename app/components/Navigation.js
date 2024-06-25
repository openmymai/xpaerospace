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
      <nav className='fixed bg-white/50 backdrop-blur-xl w-full h-24 shadow-xl z-50'>
        <div className='flex justify-between items-center h-full px-4'>
          <div>
            <Link href='/'>
              <div className='image-wrapper'>
                <Image
                  src='/img/xpatlogo.png'
                  alt='client1'
                  width={60}
                  height={20}
                />
              </div>
            </Link>
          </div>
          <div className='hidden sm:flex'>
            <ul className='hidden sm:flex'>
              <Link href='/about'>
                <li className='ml-10 uppercase hover:border-b border-transparent border-b hover:border-white text-xl'>
                  เกี่ยวกับ
                </li>
              </Link>
              <Link href='/'>
                <li className='ml-10 uppercase hover:border-b border-transparent border-b hover:border-white text-xl'>
                  ความสามารถ
                </li>
              </Link>
              <Link href='/'>
                <li className='ml-10 uppercase hover:border-b border-transparent border-b hover:border-white text-xl'>
                  ทำไมต้อง XP
                </li>
              </Link>
              <Link href='/'>
                <li className='ml-10 uppercase hover:border-b border-transparent border-b hover:border-white text-xl'>
                  ผลงานที่ผ่านมา
                </li>
              </Link>
              <Link href='/'>
                <li className='ml-10 uppercase hover:border-b border-transparent border-b hover:border-white text-xl'>
                  คู่ค้าของเรา
                </li>
              </Link>
              <Link href='#contact'>
                <li className='ml-10 uppercase hover:border-b border-transparent border-b hover:border-white text-xl'>
                  ติดต่อเรา
                </li>
              </Link>
            </ul>
          </div>
          <div
            onClick={handleNav}
            className='md:hidden cursor-pointer pl-24'
          >
            <IoReorderTwoOutline size={25} />
          </div>
        </div>
        <div
          className={
            !menuOpen
              ? 'fixed right-[-100%] top-0 w-[100%] h-screen p-8 ease-in-out duration-700 z-80'
              : 'fixed right-0 top-0 w-[100%] sm:hidden h-screen bg-[#fff] p-8 ease-in-out duration-700 z-80'
          }
        >
          <div className='flex w-full items-center justify-end z-60'>
            <div
              onClick={handleNav}
              className='cursor-pointer'
            >
              <IoClose size={20} />
            </div>
          </div>
          <div className='flex-col py-4'>
            <ul>
              <Link href='/'>
                <li
                  onClick={() => setMenuOpen(false)}
                  className='ml-10 py-4 hover:border-b border-transparent border-b hover:border-red-700 cursor-pointer text-2xl'
                >
                  เกี่ยวกับ
                </li>
              </Link>
              <Link href='/'>
                <li
                  onClick={() => setMenuOpen(false)}
                  className='ml-10 py-4 hover:border-b border-transparent border-b hover:border-red-700 cursor-pointer text-2xl'
                >
                  ความสามารถ
                </li>
              </Link>
              <Link href='/'>
                <li
                  onClick={() => setMenuOpen(false)}
                  className='ml-10 py-4 hover:border-b border-transparent border-b hover:border-red-700 cursor-pointer text-2xl'
                >
                  ทำไมต้อง XP
                </li>
              </Link>
              <Link href='/'>
                <li
                  onClick={() => setMenuOpen(false)}
                  className='ml-10 py-4 hover:border-b border-transparent border-b hover:border-red-700 cursor-pointer text-2xl'
                >
                  ผลงานที่ผ่านมา
                </li>
              </Link>

              <Link href='/'>
                <li
                  onClick={() => setMenuOpen(false)}
                  className='ml-10 py-4 hover:border-b border-transparent border-b hover:border-red-700 cursor-pointer text-2xl'
                >
                  คู่ค้าของเรา
                </li>
              </Link>
              <Link href='#contact'>
                <li
                  onClick={() => setMenuOpen(false)}
                  className='ml-10 py-4 hover:border-b border-transparent border-b hover:border-red-700 cursor-pointer text-2xl'
                >
                  ติดต่อเรา
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
