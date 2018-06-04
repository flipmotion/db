const prices = {
  pageName: {
    ru: 'Рассчитайте стоимость работ',
    en: 'Calculate the cost of works'
  },
  chooseServices: {
    ru: 'Выберите нужные вам услуги',
    en: 'Select the services you need'
  }
};

const services = [
  {
    name: {
      ru: 'Дизайн-проект',
      en: 'Project design'
    },
    price: {
      min: 4000,
      max: 9000
    }
  },
  {
    name: {
      ru: 'Строительство',
      en: 'Construction'
    },
    price: {
      min: 50000,
      max: 500000
    }
  },
  {
    name: {
      ru: 'Отделочные работы',
      en: 'Finishing works'
    },
    price: {
      min: 5000,
      max: 50000
    }
  }
];

export function pageTextIn(lang) {
  return {
    pageName: prices.pageName[lang],
    chooseServices: prices.chooseServices[lang]
  };
}

export function servicesIn(lang) {
  return services.map(service => ({
    name: service.name[lang],
    price: service.price
  }));
}

export const areaRange = {
  min: 30,
  max: 5000
};
