import React from 'react';

import '../assets/styles/components/OurCreationsItem.scss';

const OurCreationsItem = ({ title, subtitle, img }) => (
  <article className="creations-item">
    <img src={img} alt={`${title} ${subtitle}`} />

    <p className="creations-item__text">
      <span>{title}</span>
      {subtitle}
    </p>
  </article>
);

export default OurCreationsItem;
