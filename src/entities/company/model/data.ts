export type ProcessStep = {
  step: number;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    step: 1,
    title: "Запись или визит",
    description:
      "Приходите без записи или оставьте заявку онлайн — ответим в рабочее время.",
  },
  {
    step: 2,
    title: "Бесплатная диагностика",
    description:
      "Мастер осмотрит устройство и озвучит точную стоимость до начала работ.",
  },
  {
    step: 3,
    title: "Ремонт",
    description:
      "Выполняем работу на профессиональном оборудовании с проверенными комплектующими.",
  },
  {
    step: 4,
    title: "Контроль качества",
    description:
      "Тестируем устройство и выдаём с гарантийным талоном.",
  },
];

export type Benefit = {
  icon: string;
  title: string;
  description: string;
};

export const benefits: Benefit[] = [
  {
    icon: "⚡",
    title: "Ремонт в день обращения",
    description: "Большинство работ выполняем за 30–90 минут.",
  },
  {
    icon: "🛡️",
    title: "Гарантия на работу",
    description: "На каждый ремонт — официальная гарантия от 90 дней.",
  },
  {
    icon: "🔧",
    title: "Опытные мастера",
    description: "Специалисты с опытом ремонта электроники более 10 лет.",
  },
  {
    icon: "💎",
    title: "Качественные запчасти",
    description: "Используем проверенные комплектующие с предварительным тестом.",
  },
];

export type Stat = {
  value: string;
  label: string;
};

export const stats: Stat[] = [
  { value: "15 000+", label: "Отремонтированных устройств" },
  { value: "4,9", label: "Средняя оценка" },
  { value: "30 мин", label: "Среднее время ремонта" },
  { value: "98%", label: "Успешных ремонтов" },
];
