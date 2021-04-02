class Card {
  static id = 0;

  constructor(title, subtitle, imgMobile, imgDesktop) {
    this.id = Card.id += 1;
    this.title = title;
    this.subtitle = subtitle;
    this.imgMobile = imgMobile;
    this.imgDesktop = imgDesktop;
  }
}

const cardList = [
  new Card(
    'Deep',
    'Earth',
    'https://i.imgur.com/qyFW8t9.jpg',
    'https://i.imgur.com/5U6m8Ft.jpg'
  ),
  new Card(
    'Night',
    'Arcade',
    'https://i.imgur.com/NX9FwwR.jpg',
    'https://i.imgur.com/hPPtpPu.jpg'
  ),
  new Card(
    'Soccer',
    'Team VR',
    'https://i.imgur.com/bCRdBwF.jpg',
    'https://i.imgur.com/SEnAxjx.jpg'
  ),
  new Card(
    'The',
    'Grid',
    'https://i.imgur.com/dncGObU.jpg',
    'https://i.imgur.com/NQ8hwGh.jpg)'
  ),
  new Card(
    'From Up',
    'Above VR',
    'https://i.imgur.com/ESqXZdX.jpg',
    'https://i.imgur.com/XfDpIX5.jpg'
  ),
  new Card(
    'Pocket',
    'Borealis',
    'https://i.imgur.com/ldlSKX7.jpg',
    'https://i.imgur.com/CFSt33v.jpg'
  ),
  new Card(
    'The',
    'Curiosity',
    'https://i.imgur.com/FC5AWyK.jpg',
    'https://i.imgur.com/Sn7iiHm.jpg'
  ),
  new Card(
    'Make It',
    'Fisheye',
    'https://i.imgur.com/WGTR5zi.jpg',
    'https://i.imgur.com/XfGXf3E.jpg'
  ),
];

export default cardList;
