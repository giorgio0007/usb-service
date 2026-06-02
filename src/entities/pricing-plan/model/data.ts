export type PricingPlan = {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
};

export const pricingPlans: PricingPlan[] = [
  {
    id: "basic",
    name: "Замена экрана",
    price: 1500,
    period: "от",
    description: "Быстрая замена дисплея смартфона или планшета.",
    features: [
      "Качественный дисплей",
      "Экспресс-ремонт",
      "Гарантия 90 дней",
      "Защитное стекло в подарок",
    ],
  },
  {
    id: "standard",
    name: "Комплексный ремонт",
    price: 3500,
    period: "от",
    description: "Несколько комплектующих и полная диагностика.",
    features: [
      "Экран + аккумулятор",
      "Чистка устройства",
      "Гарантия 6 месяцев",
      "Приоритетный ремонт",
      "Бесплатная диагностика",
    ],
    popular: true,
  },
  {
    id: "premium",
    name: "Сборка ПК",
    price: 3000,
    period: "от",
    description: "Подбор, сборка и настройка компьютера под ваши задачи.",
    features: [
      "Подбор под бюджет",
      "Сборка и тестирование",
      "Установка Windows",
      "Гарантия на сборку",
      "Консультация по апгрейду",
    ],
  },
];
