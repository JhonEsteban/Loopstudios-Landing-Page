import React from 'react';

import '../assets/styles/components/OurCreationsItem.scss';

const OurCreationsItem = ({ title, subtitle, imgMobile, imgDesktop }) => (
  <article className='creations-item'>
    <picture>
      <source
        media='(min-width: 720px)'
        srcSet={imgDesktop}
        className='creations-item__image'
      />
      <img
        src={imgMobile}
        alt={`${title} ${subtitle}`}
        className='creations-item__image'
      />
    </picture>

    <p className='creations-item__text'>
      <span>{title}</span>
      {subtitle}
    </p>
  </article>
);

export default OurCreationsItem;
