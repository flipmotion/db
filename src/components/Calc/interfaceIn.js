// My homemade i18n solution.
//
// text is an array of all the phrases used in the app interface.
// Each entree has a key phrase and actual phrases in all the
// languages supported.
//
// For iternationalized content, see content directory.
const text = {
  'choose services': {
    en: 'Please choose one or more services',
    ru: 'Пожалуйста выберите одну или несколько услуг'
  },
  calculate: {
    ru: 'Рассчитайте стоимость работ',
    en: 'Calculate the cost of works'
  },
  'calculation result': {
    en: 'The preliminary cost of the works',
    ru: 'Предварительная стоимость работ'
  },
  'leave an enquiry': {
    en: 'Leave an enquiry',
    ru: 'Оставьте заявку'
  },
  'and we will calulcate': {
    en: ', and will make a more precise calculation',
    ru: ', и мы сделаем для вас более точный расчет'
  }
};

// Use it as a closure, locking in the lang variable:
// const phrase = (phraseId) => interfaceIn(lang, phraseId)
// phrase('Enter something here')
export default function interfaceIn(lang, phraseId) {
  const phrase = text[phraseId];
  if (!phrase) throw new Error(`Phrase id '${phraseId}' was not found`);
  // Falls back to the first translation if `lang` translation is not found.
  return phrase[lang] || phrase['ru'] || phrase[0];
}
