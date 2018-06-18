const text = {
  "fill the from and we'll call back": {
    en: 'Fill the form below and we will call you back',
    ru: 'Заполните форму ниже и вы вам перезвоним'
  }
};

// Use it as a closure, locking in the lang variable:
// const phrase = (phraseId) => interfaceIn(lang, phraseId)
// phrase('Enter something here')
export default function interfaceIn(lang, phraseId) {
  const phrase = text[phraseId];
  if (!phrase) throw new Error(`Phrase id '${phraseId}' was not found`);
  // Falls back
  return phrase[lang] || phrase['ru'] || phrase[0];
}
