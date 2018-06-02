import house1 from './images/house1.jpg';
import house2 from './images/house2.jpg';
import house3 from './images/house3.jpg';

export const langsSupported = ['ru', 'en'];

const portfolio = [
  {
    name: {
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
        name: {
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
            src:
              'http://4.bp.blogspot.com/-voGdFbjNQG0/UUN1UzFCHkI/AAAAAAAAAds/bWDRRWcbEaY/s1600/3D+Architectural+Designs+(37)+HD+Latest+Pictures+Photos+Wallpapers.jpg'
          },
          {
            alt: {
              ru: 'Портфолио фото 2',
              en: 'Portfolio foto 2'
            },
            src:
              'https://www.samoshousing.com/wp-content/uploads/2018/02/Floor-Details-Proper4-copy-1024x683.jpg'
          }
        ]
      },
      {
        name: {
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
            src:
              'https://thumbs.dreamstime.com/b/early-stages-house-construction-28914069.jpg'
          },
          {
            alt: {
              ru: 'Портфолио фото 2',
              en: 'Portfolio foto 2'
            },
            src:
              'http://www.prefabmarket.com/wp-content/uploads/2016/08/Exterior-construction-of-Modular-Prefab-Luxury-House-manufactured-in-China.jpg'
          }
        ]
      },
      {
        name: {
          ru: 'Эксплуатация',
          en: 'Maintanance'
        },
        description: {
          ru: 'Обслуживание здания без проблем',
          en: 'Property maintanance without troubles'
        },
        media: [
          {
            alt: {
              ru: 'Портфолио фото 1',
              en: 'Portfolio foto 1'
            },
            src:
              'http://www.14forty.co.uk/images/Content/14forty_maintain_mechanical_and_electrical_equipment.jpg'
          },
          {
            alt: {
              ru: 'Портфолио фото 2',
              en: 'Portfolio foto 2'
            },
            src: house1
          }
        ]
      }
    ]
  },
  {
    name: {
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
    },
    stages: []
  },
  {
    name: {
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
    },
    stages: []
  }
];

const pageName = {
  ru: 'Наши работы',
  en: 'Our works'
};

export function pageNameIn(lang) {
  return pageName[lang];
}

export function portfolioIndexPageIn(lang) {
  return portfolio.map((item, index) => ({
    name: item.name[lang],
    description: item.description[lang],
    imageSrc: item.illustration.src,
    url: `/portfolio/${index}`
  }));
}

export function portfolioItemIn({ index, lang }) {
  const item = portfolio[index];
  if (!item) return null;
  return {
    name: item.name[lang],
    description: item.description[lang],
    stages: item.stages.map(stage => ({
      name: stage.name[lang],
      description: stage.description[lang],
      media: stage.media.map(medium => ({
        alt: medium.alt[lang],
        src: medium.src
      }))
    }))
  };
}

export function nameOfIn({ index, lang }) {
  const item = portfolio[index];
  if (!item) return null;
  return item.name[lang];
}

export function stagesOfIn({ index, lang }) {
  const item = portfolio[index];
  if (!item) return null;
  return item.stages.map(stage => ({
    name: stage.name[lang],
    description: stage.description[lang],
    media: stage.media.map(medium => ({
      alt: medium.alt[lang],
      src: medium.src
    }))
  }));
}
