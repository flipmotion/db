import React from 'react';
import themes from './themes';
import contentIn from './content';

// I use it as App's deafault state as well,
// so I also export it.
export function globalStateIn(lang) {
  return {
    theme: themes.light,
    lang: lang,
    content: contentIn(lang)
  };
}

export const defaultLang = 'ru';

const Context = React.createContext(globalStateIn(defaultLang));
export default Context;
