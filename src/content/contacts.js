const text = {
  Contacts: {
    ru: 'Контакты',
    en: 'Contacts'
  },
  Address: {
    ru: ' Москва, Гагаринский переулок дом 16, офис 1',
    en: 'Moscow, Gagarinsky per., 16, office 1'
  },
  'Work hours': {
    ru: 'Время работы',
    en: 'Work hours'
  },
  'Call me back': {
    ru: 'Перезвоните мне',
    en: 'Call me back'
  }
};

function contentIn(lang) {
  return function(phraseId) {
    return text[phraseId] || phraseId;
  };
}

export default contentIn;
