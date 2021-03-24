import React from 'react';

const Navigation = () => {
  return (
    <nav className="nav">
      <ul className="menu">
        <li className="menu__item">
          <a href="/" className="menu__link">
            About
          </a>
        </li>
        <li className="menu__item">
          <a href="/" className="menu__link">
            Careers
          </a>
        </li>
        <li className="menu__item">
          <a href="/" className="menu__link">
            Event
          </a>
        </li>
        <li className="menu__item">
          <a href="/" className="menu__link">
            Products
          </a>
        </li>
        <li className="menu__item">
          <a href="/" className="menu__link">
            Support
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
