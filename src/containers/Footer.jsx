import React from 'react';

import FooterMenu from '../components/FooterMenu';
import AboutUs from '../components/AboutUs';

import '../assets/styles/containers/Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="wrapper">
        <FooterMenu />
        <AboutUs />
      </div>
    </footer>
  );
};

export default Footer;
