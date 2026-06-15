import type { Metadata } from "next";
import { ContactPage } from "@/views/contact/ui/ContactPage";
import { siteConfig } from "@/shared/config/site";

export const metadata: Metadata = {
  title: "Контакты",
  description: `${siteConfig.name} — адрес, телефоны и график работы в Ставрополе.`,
};

export default function Page() {
  return <ContactPage />;
}
