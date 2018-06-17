const services = [
  {
    name: {
      en: 'Approval',
      ru: 'Согласование'
    },
    text: [
      {
        en: 'Description of the approval service, first paragraph',
        ru: 'Описание услуги по согласованию, первый абзац'
      },
      {
        en: 'Second paragraph',
        ru: 'Второй абзац'
      }
    ]
  },
  {
    name: {
      en: 'Construction',
      ru: 'Строительство'
    },
    text: [
      {
        en: 'Description of the construction service',
        ru: 'Описание услуг по строительству'
      },
      {
        en: 'Second paragraph',
        ru: 'Второй абзац'
      }
    ]
  },
  {
    name: {
      en: 'Maintanance',
      ru: 'Обслуживание'
    },
    text: [
      {
        en: 'Description of the maintanance service',
        ru: 'Описание услуг по обслуживанию'
      },
      {
        en: 'Second paragraph',
        ru: 'Второй абзац'
      }
    ]
  }
];

export default function servicesIn(lang) {
  return services.map(service => ({
    name: service.name[lang],
    // use first language as a fallback
    text: service.text.map(paragraph => paragraph[lang] || paragraph[0])
  }));
}
