'use client';

import React, { useState, useEffect, useRef } from 'react';
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
              <Image
                src='/img/xplogo.png'
                alt='client1'
                width={50}
                height={25}
              />
            </Link>
          </div>
          <div className='hidden sm:flex'>
            <ul className='hidden sm:flex'>
              <Link href='/'>
                <li className='ml-10 uppercase hover:boder-b text-xl'>ABOUT</li>
              </Link>
              <Link href='/'>
                <li className='ml-10 uppercase hover:boder-b text-xl'>
                  CAPABILITIES
                </li>
              </Link>
              <Link href='/'>
                <li className='ml-10 uppercase hover:boder-b text-xl'>
                  WHY XP
                </li>
              </Link>
              <Link href='/'>
                <li className='ml-10 uppercase hover:boder-b text-xl'>
                  PAST PERFORMANCE
                </li>
              </Link>
              <Link href='/'>
                <li className='ml-10 uppercase hover:boder-b text-xl'>
                  PARTNERS
                </li>
              </Link>
              <Link href='/'>
                <li className='ml-10 uppercase hover:boder-b text-xl'>
                  CONTACT
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
            menuOpen
              ? 'fixed left-0 top-0 w-[100%] sm:hidden h-screen bg-[#ecf0f3] p10 ease-in duration-300 z-80'
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-300 z-80'
          }
        >
          <div className='flex py-6 pr-6 w-full items-center justify-end z-60'>
            <div
              onClick={handleNav}
              className='cursor-pointer'
            >
              <IoClose size={20} />
            </div>
          </div>
          <div className='flex-col py-4 text-xl'>
            <ul>
              <Link href='/'>
                <li
                  onClick={() => setMenuOpen(false)}
                  className='px-4 py-4 cursor-pointer text-2xl'
                >
                  ABOUT
                </li>
              </Link>
              <Link href='/'>
                <li
                  onClick={() => setMenuOpen(false)}
                  className='px-4 py-4 cursor-pointer text-2xl'
                >
                  CAPABILITIES
                </li>
              </Link>
              <Link href='/'>
                <li
                  onClick={() => setMenuOpen(false)}
                  className='px-4 py-4 cursor-pointer text-2xl'
                >
                  WHY XP
                </li>
              </Link>
              <Link href='/'>
                <li
                  onClick={() => setMenuOpen(false)}
                  className='px-4 py-4 cursor-pointer text-2xl'
                >
                  PAST PERFORMANCE
                </li>
              </Link>

              <Link href='/'>
                <li
                  onClick={() => setMenuOpen(false)}
                  className='px-4 py-4 cursor-pointer text-2xl'
                >
                  PARTNERS
                </li>
              </Link>
              <Link href='/'>
                <li
                  onClick={() => setMenuOpen(false)}
                  className='px-4 py-4 cursor-pointer text-2xl'
                >
                  CONTACT
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
