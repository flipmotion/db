const topMenu = [
  {
    to: '/portfolio',
    text: {
      ru: 'Портфолио',
      en: 'Portfolio'
    }
  },
  {
    to: '/services',
    text: {
      ru: 'Услуги',
      en: 'Services'
    }
  },
  {
    to: '/calc',
    text: {
      ru: 'Цены',
      en: 'Prices'
    }
  }
];

const bottomMenu = [
  {
    to: '/feedback',
    text: {
      ru: 'Отзывы',
      en: 'Feedback'
    }
  },
  {
    to: '/policy',
    text: {
      ru: 'Политика конфиденциальности',
      en: 'Privacy policy'
    }
  },
  {
    to: '/contacts',
    text: {
      ru: 'Контакты',
      en: 'Contacts'
    }
  }
];

export function topMenuIn(lang) {
  return topMenu.map(el => ({
    to: el.to,
    text: el.text[lang]
  }));
}

export function bottomMenuIn(lang) {
  return bottomMenu.map(el => ({
    to: el.to,
    text: el.text[lang]
  }));
}
