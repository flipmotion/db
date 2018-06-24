import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const text = {
  'page not found': {
    ru: 'Страница не найдена',
    en: 'Page not found'
  },
  'try from': {
    ru: 'Попробуйте начать с главной страницы',
    en: 'Try to start from the home page'
  },
  'the home page': {
    ru: 'с главной страницы',
    en: 'the home page'
  }
};

function interfaceIn(lang) {
  return function(phraseId) {
    if (text[phraseId]) {
      return text[phraseId][lang];
    } else {
      console.warn(`translation for ${phraseId} was not found!`);
      return phraseId;
    }
  };
}

function Page404({ lang }) {
  const phrase = interfaceIn(lang);
  return (
    <div>
      <h1>{phrase('page not found')}</h1>
      <p>
        {phrase('try from')} <Link to="/">{phrase('the home page')}</Link>
      </p>
    </div>
  );
}

Page404.propTypes = {
  lang: PropTypes.oneOf(['ru', 'en']).isRequired
};

export default Page404;
