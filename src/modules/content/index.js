import house1 from './house1.jpg';
import house2 from './house2.jpg';
import house3 from './house3.jpg';

// http://exploringjs.com/es6/ch_modules.html#_making-a-re-export-the-default-export
export { default as logo } from './logo.svg';

export { default as house } from './house.jpg';

export const portfolio = [
  {
    title: 'Особняк в Грохольском переулке',
    description:
      'Классический пентхаус площадью 952 кв м занимает весь 8 этаж элитного жилого комплекса «Гранатный переулок, 8». Высота потолков до 3,75 м. Пентхаус спроектирован таким образом, что пространство легко делится на приватную и гостевую зону с возможностью в каждой установить настоящий дровяной камин. Предусмотрены два парадных входа и два дополнительных – для обслуживающего персонала. К парадным и «черным» входам поднимаются отдельные лифты.',
    images: [house1]
  },
  {
    title: 'Офисный центр Планктон',
    description:
      'Бизнес центр расположен на первой линии Озерковской набережной в историческом районе Москвы – Замоскворечье. Офисный комплекс состоит из 4-х отдельно стоящих офисных зданий класса «А» общей площадью 78 000 кв. м, объединенных общим двухуровневым подземным паркингом на 550 машиномест.',
    images: [house2]
  },
  {
    title: 'Шале Maindorf',
    description:
      'Из окон открываются панорамные виды на набережную Москва-реки, Кремль, Дом Музыки и Храм Святителя Николая в Котельниках. Благоустроенная внутренняя территория с ландшафтным дизайном, детской площадкой, прогулочной зоной, как и сам дом находится под круглосуточной профессиональной охраной.',
    images: [house3]
  }
];
