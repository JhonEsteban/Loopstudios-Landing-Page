import React from 'react';

import facebookIcon from '../assets/images/icon-facebook.svg';
import twitterIcon from '../assets/images/icon-twitter.svg';
import pinterestIcon from '../assets/images/icon-pinterest.svg';
import instagramIcon from '../assets/images/icon-instagram.svg';

const SocialMedia = () => (
  <div className='social-media'>
    <div className='icon'>
      <img src={facebookIcon} alt='facebook icon' />
    </div>
    <div className='icon'>
      <img src={twitterIcon} alt='twitter icon' />
    </div>
    <div className='icon'>
      <img src={pinterestIcon} alt='pinterest icon' />
    </div>
    <div className='icon'>
      <img src={instagramIcon} alt='instagram icon' />
    </div>
  </div>
);

export default SocialMedia;
