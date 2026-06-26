export const siteConfig = {
  name: 'ЮСБ СЕРВИС',
  tagline: 'более 10 лет в Ставрополе',
  description:
    'Ремонт смартфонов, планшетов, ноутбуков и компьютеров любых производителей. Сборка ПК, установка ПО, бесплатная диагностика и гарантия.',
  phonePrimary: '+7 (962) 444-20-57',
  email: 'ivan.usbstav@gmail.com',
  address: 'г. Ставрополь, ул. Шпаковская, 42',
  hours: 'Пн–Пт: 10:00–19:00',
  hoursWeekend: 'Сб–Вс: выходной',
  social: {
    vk: 'https://vk.com/usb_stav',
    ok: 'https://ok.ru/usbservice',
    instagram: '#',
    telegram: '#',
  },
  footerDescription: 'Бесплатная диагностика, Гарантия на выполненные работы.',
  messengers: {
    whatsapp: 'https://wa.me/79624442057',
    telegram: 'https://t.me/+79624442057',
    max: 'https://max.ru/u/usb_stav',
  },
  ratings: [
    {
      id: 'google',
      label: 'Google',
      shortLabel: 'G',
      value: '4,4',
      url: 'https://share.google/DBe6ZvIEDiqWN5pf4',
    },
    {
      id: '2gis',
      label: '2ГИС',
      shortLabel: '2G',
      value: '4,9',
      url: 'https://go.2gis.com/JyqYA',
    },
    {
      id: 'yandex',
      label: 'Яндекс',
      shortLabel: 'Я',
      value: '4,8',
      url: 'https://yandex.ru/maps/org/yusb_servis/1802920339/reviews/?ll=41.944210%2C45.020668&z=14',
    },
  ],
  reviews: [
    {
      id: 'yandex',
      title: 'Яндекс',
      rating: '4.8',
      count: '57+ оценок',
      href: 'https://yandex.ru/maps/org/yusb_servis/1802920339/reviews/?ll=41.944210%2C45.020668&z=14',
      icon: '/icons/yandex.svg',
    },
    {
      id: '2gis',
      title: '2ГИС',
      rating: '4.9',
      count: '27+ оценок',
      href: 'https://go.2gis.com/JyqYA',
      icon: '/icons/2gis.svg',
    },
    {
      id: 'google',
      title: 'Google Карты',
      rating: '4.4',
      count: '25+ оценок',
      href: 'https://share.google/DBe6ZvIEDiqWN5pf4',
      icon: '/icons/google-maps.svg',
    },
  ],
  map: {
    url: 'https://yandex.by/maps/org/yusb_servis/1802920339/?ll=41.943693%2C45.020657&z=19.47',
    embedUrl:
      'https://yandex.ru/map-widget/v1/?ll=41.944168%2C45.020596&z=19&pt=41.944168%2C45.020596%2Cpm2rdm',
    lat: 45.020596,
    lon: 41.944168,
  },
} as const;
