import React from 'react';
import { useNavegation } from '../hooks/useNavegation';

import logo from '../assets/images/logo.svg';
import hamburgerIcon from '../assets/images/icon-hamburger.svg';
import closeIcon from '../assets/images/icon-close.svg';

import '../assets/styles/components/Header.scss';

const Header = () => {
  const { navigation, toggleOpenNavigation, closeNavigation } = useNavegation();

  return (
    <header className='header hero-image'>
      <div className='wrapper'>
        <section className='header__container'>
          <img src={logo} alt='logo' className='header__logo' />

          <img
            onClick={toggleOpenNavigation}
            src={navigation ? closeIcon : hamburgerIcon}
            alt='hamburger icon'
            className='header__icon'
          />
          <nav
            className={`nav ${navigation ? 'active' : ''}`}
            onClick={closeNavigation}
          >
            <ul className='menu'>
              <li className='menu__item'>
                <a href='/' className='menu__link'>
                  About
                </a>
              </li>
              <li className='menu__item'>
                <a href='/' className='menu__link'>
                  Careers
                </a>
              </li>
              <li className='menu__item'>
                <a href='/' className='menu__link'>
                  Event
                </a>
              </li>
              <li className='menu__item'>
                <a href='/' className='menu__link'>
                  Products
                </a>
              </li>
              <li className='menu__item'>
                <a href='/' className='menu__link'>
                  Support
                </a>
              </li>
            </ul>
          </nav>
        </section>

        <section className='main-card'>
          <h1 className='main-card__title'>
            Immersive experiences that deliver
          </h1>
        </section>
      </div>
    </header>
  );
};

export default Header;
