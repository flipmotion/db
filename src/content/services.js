const services = [
  {
    name: {
      ru: 'Согласование',
      en: 'Approval'
    },
    text: [
      {
        ru: 'Описание услуги по согласованию, первый абзац',
        en: 'Description of the approval service, first paragraph'
      },
      {
        ru: 'Второй абзац',
        en: 'Second paragraph'
      }
    ]
  },
  {
    name: {
      ru: 'Строительство',
      en: 'Construction'
    },
    text: [
      {
        ru: 'Описание услуг по строительству',
        en: 'Description of the construction service'
      },
      {
        ru: 'Второй абзац',
        en: 'Second paragraph'
      }
    ]
  },
  {
    name: {
      ru: 'Обслуживание',
      en: 'Maintanance'
    },
    text: [
      {
        ru: 'Описание услуг по обслуживанию',
        en: 'Description of the maintanance service'
      },
      {
        ru: 'Второй абзац',
        en: 'Second paragraph'
      }
    ]
  }
];

export function servicesIn(lang) {
  if (!lang) throw new Error('lang is not defined');
  return services.map(service => ({
    name: service.name[lang],
    text: service.text.map(paragraph => paragraph[lang])
  }));
}
