export type Testimonial = {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
};

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Анна Смирнова",
    role: "Samsung Galaxy S24",
    content:
      "Разбила экран — к обеду уже забрала телефон. Дисплей как новый, всё работает. Рекомендую ЮСБ сервис!",
    rating: 5,
    avatar: "АС",
  },
  {
    id: "2",
    name: "Дмитрий Козлов",
    role: "Игровой ПК",
    content:
      "Собрали компьютер под мой бюджет для игр — всё подробно объяснили, тесты прошли отлично. Цены честные.",
    rating: 5,
    avatar: "ДК",
  },
  {
    id: "3",
    name: "Елена Петрова",
    role: "Lenovo ThinkPad",
    content:
      "Ноутбук не включался после залития. Восстановили, данные сохранили. Работают быстро и аккуратно.",
    rating: 5,
    avatar: "ЕП",
  },
  {
    id: "4",
    name: "Михаил Волков",
    role: "Xiaomi Redmi Note",
    content:
      "Лучший сервис в Ставрополе. Без навязывания лишнего, подробно рассказали про каждый этап. Буду обращаться снова.",
    rating: 5,
    avatar: "МВ",
  },
];
