'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Navigation = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div className='navigation'>
      <input
        type='checkbox'
        className='navigation__checkbox'
        id='navi-toggle'
        checked={checked}
        onChange={() => setChecked(!checked)}
      ></input>
      <label
        htmlFor='navi-toggle'
        className='navigation__button'
      >
        <span className='navigation__icon'>&nbsp;</span>
      </label>
      <div className='navigation__background'>&nbsp;</div>
      <nav className='navigation__nav'>
        <ul className='navigation__list'>
          <li className='navigation__item'>
            <Link
              href='#about'
              className='navigation__link'
              onClick={() => setChecked(!checked)}
            >
              ABOUT
            </Link>
          </li>
          <li className='navigation__item'>
            <Link
              href='#feature'
              className='navigation__link'
              onClick={() => setChecked(!checked)}
            >
              CAPABILITIES
            </Link>
          </li>
          <li className='navigation__item'>
            <Link
              href='#mission'
              className='navigation__link'
              onClick={() => setChecked(!checked)}
            >
              WHY XP
            </Link>
          </li>
          <li className='navigation__item'>
            <Link
              href='#process'
              className='navigation__link'
              onClick={() => setChecked(!checked)}
            >
              PAST PERFORMANCE
            </Link>
          </li>
          <li className='navigation__item'>
            <Link
              href='#process'
              className='navigation__link'
              onClick={() => setChecked(!checked)}
            >
              PARTNERS
            </Link>
          </li>
          <li
            className='navigation__item'
            onClick={() => setChecked(!checked)}
          >
            <Link
              href='#contact'
              className='navigation__link'
            >
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
