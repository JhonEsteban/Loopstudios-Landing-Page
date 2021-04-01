import React from 'react';
import { useNavegation } from '../hooks/useNavegation';

import logo from '../assets/images/logo.svg';
import hamburgerIcon from '../assets/images/icon-hamburger.svg';
import closeIcon from '../assets/images/icon-close.svg';

import '../assets/styles/components/Header.scss';
import Navigation from './Navigation';

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
            onClick={closeNavigation}
            className={`nav ${navigation ? 'active' : ''}`}
          >
            <Navigation />
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
