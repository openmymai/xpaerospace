'use client';

import React, { useState } from 'react';

const Navigation = () => {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <div id='navigation'>
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
              <li
                className='navigation__item'
                onClick={() => setChecked(!checked)}
              >
                <a
                  href='#'
                  className='navigation__link'
                >
                  ABOUT
                </a>
              </li>
              <li
                className='navigation__item'
                onClick={() => setChecked(!checked)}
              >
                <a
                  href='#'
                  className='navigation__link'
                >
                  CAPABILITIES
                </a>
              </li>
              <li
                className='navigation__item'
                onClick={() => setChecked(!checked)}
              >
                <a
                  href='#'
                  className='navigation__link'
                >
                  WHY XP
                </a>
              </li>
              <li
                className='navigation__item'
                onClick={() => setChecked(!checked)}
              >
                <a
                  href='#'
                  className='navigation__link'
                >
                  PAST PERFORMANCE
                </a>
              </li>
              <li
                className='navigation__item'
                onClick={() => setChecked(!checked)}
              >
                <a
                  href='#'
                  className='navigation__link'
                >
                  PARTNERS
                </a>
              </li>
              <li
                className='navigation__item'
                onClick={() => setChecked(!checked)}
              >
                <a
                  href='#'
                  className='navigation__link'
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
