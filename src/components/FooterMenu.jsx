import React from 'react';

import logo from '../assets/images/logo.svg';

import Navigation from './Navigation';

const FooterMenu = () => (
  <section className='footer__menu'>
    <img src={logo} alt='footer logo' className='logo' />
    <nav className='nav'>
      <Navigation />
    </nav>
  </section>
);

export default FooterMenu;
