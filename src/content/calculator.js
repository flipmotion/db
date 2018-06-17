export const area = {
  min: 30,
  max: 5000,
  default: 450
};

const services = [
  {
    name: {
      ru: 'Дизайн-проект',
      en: 'Project design'
    },
    price: {
      min: 1000,
      max: 12000
    }
  },
  {
    name: {
      ru: 'Строительство',
      en: 'Construction'
    },
    price: {
      min: 50000,
      max: 240000
    }
  },
  {
    name: {
      ru: 'Отделочные работы',
      en: 'Finishing works'
    },
    price: {
      min: 5000,
      max: 25000
    }
  }
];

export default function contentIn(lang) {
  return services.map(service => ({
    name: service.name[lang],
    price: service.price
  }));
}
