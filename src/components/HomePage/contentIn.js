const text = {
  'real estate services': {
    ru: 'Услуги в сфере элитной недвижимости',
    en: 'Real estate services'
  },
  'punch line': {
    ru:
      'Мы разработаем для вас проект любой сложности, получим разрешение на строительство или реконструкцию, проведем строительные работы, создадим дизайн интерьера и предложим техническое обслуживание',
    en:
      'We will develop for you the project of any complexity, we will receive permission for construction or reconstruction, we will carry out construction works, we will create interior design and we will offer maintenance'
  },
  'our works': {
    ru: 'Наши работы',
    en: 'Our works'
  }
};

function contentIn(lang) {
  return function(phraseId) {
    return (text[phraseId] && text[phraseId][lang]) || phraseId;
  };
}

export default contentIn;
