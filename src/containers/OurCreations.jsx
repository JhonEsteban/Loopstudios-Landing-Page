import React from 'react';

import '../assets/styles/containers/OurCreations.scss';

import cardList from '../helpers/cardList';

import OurCreationsItem from '../components/OurCreationsItem';

const OurCreations = () => {
  return (
    <section className="our-creations">
      <h2 className="our-creations__title">Our creations</h2>

      <div className="our-creations__list">
        {cardList.map((card) => {
          return <OurCreationsItem key={card.id} {...card} />;
        })}
      </div>

      <button className="our-creations__btn">See All</button>
    </section>
  );
};

export default OurCreations;
