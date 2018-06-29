const content = [
  {
    title: {
      ru: 'Park Ville Жуковка',
      en: 'Park Ville Zhukovka'
    },
    path: 'park-ville-zhukovka',
    media: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-0.3.5&s=57ea6c811d60a2c98e72372e2fbc63ec&auto=format&fit=crop&w=2550&q=80'
    ],
    review: {
      ru: 'Хотим выразить слова благодарности DB Company...',
      en: 'We would like to thank DB Company...'
    },
    reviewerName: {
      ru: 'Андрей и Инна Головановы',
      en: 'Andrey and Inna Golovanov'
    },
    reviewerPortrait:
      'https://images.unsplash.com/photo-1520090616-d8dfd56ca27c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=dfc1cd718a416553f50c7a2dc5cab9d4&auto=format&fit=crop&w=1601&q=80'
  },
  {
    title: {
      ru: 'Посёлок Ренессанс Эстейт',
      en: 'Renaissance Estate village'
    },
    path: 'renaissance-estate-village',
    media: [
      'https://images.unsplash.com/photo-1499814375754-a481db8ab6c5?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=341c0acc8a6428b8896da5a7632e8384&auto=format&fit=crop&w=2534&q=80'
    ],
    review: {
      ru: 'Понравилось все, от идеи до воплощения',
      en: 'I liked everything from idea to implementation'
    },
    reviewerName: {
      ru: 'Имануил Петров',
      en: 'Imanuil Petrov'
    },
    reviewerPortrait:
      'https://images.unsplash.com/photo-1474176857210-7287d38d27c6?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5deb261ae9b9799a30f929c724286bed&auto=format&fit=crop&w=2250&q=80'
  }
];

function contentIn(lang) {
  return content.map(c => ({
    title: c.title[lang],
    path: c.path,
    media: c.media,
    review: c.review[lang],
    reviewerName: c.reviewerName[lang],
    reviewerPortrait: c.reviewerPortrait
  }));
}

export default contentIn;
