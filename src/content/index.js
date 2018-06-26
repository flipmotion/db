import logoSrc from './images/logo.svg';
import React from 'react';
import MenuItem from '../components/Menu/MenuItem';

import instagram from './images/social/instagram.svg';
import facebook from './images/social/facebook.svg';
import twitter from './images/social/twitter.svg';

export const langsSupported = ['ru', 'en'];

const social = {
  instagram: {
    icon: instagram,
    alt: 'Инстаграм',
    link: 'https://instagram.com/db-company'
  },
  facebook: {
    icon: facebook,
    alt: 'Facebook',
    link: 'https://facebook.com/db-company'
  },
  twitter: {
    icon: twitter,
    alt: 'Twitter',
    link: 'https://twitter.com/db-company'
  }
};

const logo = {
  src: logoSrc,
  alt: {
    ru: 'Логотип DB Company',
    en: 'DB Company logo'
  }
};

const menu = {
  top: [
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
  ],
  bottom: [
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
  ]
};

// a helper function to be user in contentIn(lang)
function translateMediaIn(media, lang) {
  if (!media) throw new Error(`media is ${media}`);
  if (!media.src) {
    throw new Error(`media src is ${media.src}. Check out ${media} above`);
  }
  if (!media.alt[lang]) {
    throw new Error(
      `media.alt in ${lang} is ${media.alt[lang]}. Check out ${media} above`
    );
  }
  return {
    src: media.src,
    alt: media.alt[lang]
  };
}

function navLinkify(item, index) {
  return (
    <MenuItem to={item.to} key={index}>
      {item.text}
    </MenuItem>
  );
}

// Helps keep strings in different languages together
function contentIn(lang) {
  // Let's use closure here not to repeat lang all the time;
  // it's the same throughout the function anyway.
  const translateMedia = media => translateMediaIn(media, lang);

  // closure as well (lang is locked in), just too small take it out of this fn
  const translateMenuItem = item => ({
    to: item.to,
    text: item.text[lang]
  });

  return {
    social: social,
    menu: {
      top: menu.top.map((item, index) =>
        navLinkify(translateMenuItem(item), index)
      ),
      bottom: menu.bottom.map((item, index) =>
        navLinkify(translateMenuItem(item), index)
      )
    },
    logo: translateMedia(logo)
  };
}

export default contentIn;
