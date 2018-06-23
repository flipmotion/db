const text = {
  'fill the from': {
    en: 'Fill the form',
    ru: 'Заполните форму'
  },
  "thanks for the eqnuiry, we'll call you back": {
    en: "Thanks for the eqnuiry, we'll call you back",
    ru: 'Спасибо на обращение, мы обязательно вам перезвоним'
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
    return phrase ? phrase[lang] : phraseId;
  };
}
