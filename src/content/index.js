import logoSrc from './images/logo-grey.svg';
import house from './images/house.jpg';
import house1 from './images/house1.jpg';
import house2 from './images/house2.jpg';
import house3 from './images/house3.jpg';

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
        ru: 'Наши работы',
        en: 'Our works'
      }
    },
    {
      to: '/contacts',
      text: {
        ru: 'Контакты',
        en: 'Contacts'
      }
    }
  ],
  bottom: [
    {
      to: '/other',
      text: {
        ru: 'Другая страница',
        en: 'Other page'
      }
    },
    {
      to: '/another',
      text: {
        ru: 'И еще одна',
        en: 'And one more'
      }
    }
  ]
};

const portfolio = [
  {
    title: {
      ru: 'Особняк в Грохольском переулке',
      en: 'A house in Grokholsky pereulok'
    },
    description: {
      ru:
        'Классический пентхаус площадью 952 кв м занимает весь 8 этаж элитного жилого комплекса «Гранатный переулок, 8». Высота потолков до 3,75 м. Пентхаус спроектирован таким образом, что пространство легко делится на приватную и гостевую зону с возможностью в каждой установить настоящий дровяной камин. Предусмотрены два парадных входа и два дополнительных – для обслуживающего персонала. К парадным и «черным» входам поднимаются отдельные лифты.',
      en:
        'Classic penthouse with an area of 952 sq m occupies the entire 8th floor of the elite residential complex "Granatny lane, 8". The ceiling height is up to 3.75 m.the penthouse is designed in such a way that the space is easily divided into private and guest area with the possibility to install a real wood-burning fireplace in each. There are two front doors and two additional ones for maintenance staff. Separate elevators rise to the front and "black" entrances.'
    },
    illustration: {
      alt: {
        ru: 'Портфолио фото 1',
        en: 'Portfolio foto 1'
      },
      src: house1
    },
    stages: [
      {
        title: {
          ru: 'Проектирование',
          en: 'Design'
        },
        description: {
          ru: 'Норман Фостер был поражен',
          en: 'Norman foster was amazed'
        },
        media: [
          {
            alt: {
              ru: 'Портфолио фото 1',
              en: 'Portfolio foto 1'
            },
            src: house1
          },
          {
            alt: {
              ru: 'Портфолио фото 2',
              en: 'Portfolio foto 2'
            },
            src: house2
          }
        ]
      },
      {
        title: {
          ru: 'Строительство',
          en: 'Construction'
        },
        description: {
          ru: 'Дали заказчику лопату, и пока он копал фундамент...',
          en:
            'We gave the customer a shovel, and while he was digging the foundation...'
        },
        media: [
          {
            alt: {
              ru: 'Портфолио фото 1',
              en: 'Portfolio foto 1'
            },
            src: house1
          },
          {
            alt: {
              ru: 'Портфолио фото 2',
              en: 'Portfolio foto 2'
            },
            src: house2
          }
        ]
      }
    ]
  },
  {
    title: {
      ru: 'Офисный центр Планктон',
      en: 'Plankton office center'
    },
    description: {
      ru:
        'Бизнес центр расположен на первой линии Озерковской набережной в историческом районе Москвы – Замоскворечье. Офисный комплекс состоит из 4-х отдельно стоящих офисных зданий класса «А» общей площадью 78 000 кв. м, объединенных общим двухуровневым подземным паркингом на 550 машиномест.',
      en:
        'The business center is located on the first line of the Ozerkovskaya embankment in the historical district of Moscow – Zamoskvorechye. The office complex consists of 4 separate office buildings of class "A" with a total area of 78 000 sq.m, United by a common two-level underground Parking for 550 cars.'
    },
    illustration: {
      alt: {
        ru: 'Офисный центр Планктон',
        en: 'Plankton office center'
      },
      src: house2
    }
  },
  {
    title: {
      ru: 'Шале Майндорф',
      en: 'Chalet Mindorf'
    },
    description: {
      ru:
        'Из окон открываются панорамные виды на набережную Москва-реки, Кремль, Дом Музыки и Храм Святителя Николая в Котельниках. Благоустроенная внутренняя территория с ландшафтным дизайном, детской площадкой, прогулочной зоной, как и сам дом находится под круглосуточной профессиональной охраной.',
      en:
        "Panoramic views of the Moskva River embankment, the Kremlin, the House of Music and the Church of St. Nicholas in Kotelniki are opened from the windows. The landscaped interior area with landscape design, children's playground, walking area, as well as the house itself is under 24-hour professional protection."
    },
    illustration: {
      alt: {
        ru: 'Шале Майндорф',
        en: 'Chalet Mindorf'
      },
      src: house3
    }
  }
];

const homePage = {
  header: {
    ru: 'Услуги в сфере элитной недвижимости',
    en: 'Real estate services'
  },
  paragraphText: {
    ru:
      'Мы разработаем для вас проект любой сложности, получим разрешение на строительство или реконструкцию, проведем строительные работы, создадим дизайн интерьера и предложим техническое обслуживание',
    en:
      'We will develop for you the project of any complexity, we will receive permission for construction or reconstruction, we will carry out construction works, we will create interior design and we will offer maintenance'
  },
  link: {
    text: {
      ru: 'Наши работы',
      en: 'Our works'
    },
    path: '/portfolio'
  },
  media: [
    {
      alt: {
        ru: 'DB Company',
        en: 'DB Company'
      },
      src: house
    }
  ]
};

// a helper function to be user in contentIn(lang)
function translateMediaIn(media, lang) {
  if (!media) throw new Error(`media is ${media}`);
  if (!media.src) {
    console.dir(media);
    throw new Error(`media src is ${media.src}. Check out ${media} above`);
  }
  if (!media.alt[lang]) {
    console.dir(media);
    throw new Error(
      `media.alt in ${lang} is ${media.alt[lang]}. Check out ${media} above`
    );
  }
  return {
    src: media.src,
    alt: media.alt[lang]
  };
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
    menu: {
      top: menu.top.map(item => translateMenuItem(item)),
      bottom: menu.bottom.map(item => translateMenuItem(item))
    },
    portfolio: portfolio.map(item => ({
      title: item.title[lang],
      description: item.description[lang],
      illustration: translateMedia(item.illustration),
      stages:
        item.stages &&
        item.stages.map(stage => ({
          title: stage.title[lang],
          description: stage.description[lang],
          media: stage.media.map(medium => translateMedia(medium))
        }))
    })),
    homePage: {
      header: homePage.header[lang],
      paragraphText: homePage.paragraphText[lang],
      link: {
        text: homePage.link.text[lang],
        path: homePage.link.path
      },
      media: homePage.media.map(medium => translateMedia(medium))
    },
    logo: translateMedia(logo)
  };
}

export default contentIn;
