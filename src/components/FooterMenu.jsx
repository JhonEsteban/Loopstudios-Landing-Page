import React from 'react';

import logo from '../assets/images/logo.svg';

import Navigation from './Navigation';

const FooterMenu = () => {
  return (
    <section className="footer__menu">
      <img src={logo} alt="footer logo" className="logo" />
      <Navigation />
    </section>
  );
};

export default FooterMenu;
