class Card {
  static id = 0;

  constructor(title, subtitle, url) {
    this.id = Card.id += 1;
    this.title = title;
    this.subtitle = subtitle;
    this.img = url;
  }
}

const cardList = [
  new Card('Deep', 'Earth', 'https://i.imgur.com/qyFW8t9.jpg'),
  new Card('Night', 'Arcade', 'https://i.imgur.com/NX9FwwR.jpg'),
  new Card('Soccer', 'Team VR', 'https://i.imgur.com/bCRdBwF.jpg'),
  new Card('The', 'Grid', 'https://i.imgur.com/dncGObU.jpg'),
  new Card('From Up', 'Above VR', 'https://i.imgur.com/ESqXZdX.jpg'),
  new Card('Pocket', 'Borealis', 'https://i.imgur.com/ldlSKX7.jpg'),
  new Card('The', 'Curiosity', 'https://i.imgur.com/FC5AWyK.jpg'),
  new Card('Make It', 'Fisheye', 'https://i.imgur.com/WGTR5zi.jpg'),
];

export default cardList;
