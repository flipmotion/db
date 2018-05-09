import house from './images/house.jpg';
import house1 from './images/house1.jpg';
import house2 from './images/house2.jpg';
import house3 from './images/house3.jpg';

// http://exploringjs.com/es6/ch_modules.html#_making-a-re-export-the-default-export
export { default as logo } from './images/logo-grey.svg';

export const portfolio = [
  {
    title: 'Особняк в Грохольском переулке',
    description:
      'Классический пентхаус площадью 952 кв м занимает весь 8 этаж элитного жилого комплекса «Гранатный переулок, 8». Высота потолков до 3,75 м. Пентхаус спроектирован таким образом, что пространство легко делится на приватную и гостевую зону с возможностью в каждой установить настоящий дровяной камин. Предусмотрены два парадных входа и два дополнительных – для обслуживающего персонала. К парадным и «черным» входам поднимаются отдельные лифты.',
    illustration: house1,
    stages: [
      {
        title: 'Проектирование',
        description: 'Норман Фостер был поражен',
        media: [house1, house2]
      },
      {
        title: 'Строительство',
        description: 'Дали заказчику лопату, и пока он копал фундамент...',
        media: [house1, house2]
      }
    ]
  },
  {
    title: 'Офисный центр Планктон',
    description:
      'Бизнес центр расположен на первой линии Озерковской набережной в историческом районе Москвы – Замоскворечье. Офисный комплекс состоит из 4-х отдельно стоящих офисных зданий класса «А» общей площадью 78 000 кв. м, объединенных общим двухуровневым подземным паркингом на 550 машиномест.',
    illustration: house2
  },
  {
    title: 'Шале Maindorf',
    description:
      'Из окон открываются панорамные виды на набережную Москва-реки, Кремль, Дом Музыки и Храм Святителя Николая в Котельниках. Благоустроенная внутренняя территория с ландшафтным дизайном, детской площадкой, прогулочной зоной, как и сам дом находится под круглосуточной профессиональной охраной.',
    illustration: house3
  }
];

export const homePage = {
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
      src: house,
      alt: 'DB company'
    }
  ]
};
