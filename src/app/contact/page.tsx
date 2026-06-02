import type { Metadata } from "next";
import { ContactPage } from "@/views/contact/ui/ContactPage";
import { siteConfig } from "@/shared/config/site";

export const metadata: Metadata = {
  title: "Контакты",
  description: `Контакты ${siteConfig.name} в Ставрополе — адрес, телефоны, график работы.`,
};

export default function Page() {
  return <ContactPage />;
}
