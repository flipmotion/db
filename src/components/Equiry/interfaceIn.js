const text = {
  "fill the from and we'll call back": {
    en: 'Fill the form below and we will call you back',
    ru: 'Заполните форму ниже и мы вам перезвоним'
  }
};

// This fn closes in interface from the text array above and
// lang variable from properties to provide a function that just
// serves desired phrases by phrase ids.
// Use it like this:
// const phrase = interfaceIn(props.lang)
// and then...
/// phrase('some phrase id')
export default function interfaceIn(lang) {
  return function(phraseId) {
    const phrase = text[phraseId];
    if (!phrase) throw new Error(`Phrase id '${phraseId}' was not found`);
    // Falls back
    return phrase[lang] || phrase['ru'] || phrase[0];
  };
}
