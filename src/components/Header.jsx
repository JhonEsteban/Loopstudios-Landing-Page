import React from 'react';

import logo from '../assets/images/logo.svg';
import hamburgerIcon from '../assets/images/icon-hamburger.svg';

import '../assets/styles/components/Header.scss';

const Header = () => {
  return (
    <header className="header hero-image">
      <div className="wrapper">
        <section className="header__container">
          <img src={logo} alt="logo" className="header__logo" />

          <img
            src={hamburgerIcon}
            alt="hamburger icon"
            className="header__icon"
          />
        </section>

        <section className="main-card">
          <h1 className="main-card__title">
            Immersive experiences that deliver
          </h1>
        </section>
      </div>
    </header>
  );
};

export default Header;
