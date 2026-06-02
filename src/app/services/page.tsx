import type { Metadata } from "next";
import { ServicesPage } from "@/views/services/ui/ServicesPage";

export const metadata: Metadata = {
  title: "Услуги",
  description:
    "Ремонт смартфонов, планшетов, ноутбуков и ПК. Сборка компьютеров, установка ПО, восстановление данных.",
};

export default function Page() {
  return <ServicesPage />;
}
