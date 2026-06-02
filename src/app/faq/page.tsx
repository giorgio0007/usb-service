import type { Metadata } from "next";
import { FaqPage } from "@/views/faq/ui/FaqPage";
import { siteConfig } from "@/shared/config/site";

export const metadata: Metadata = {
  title: "FAQ",
  description: `Частые вопросы о ремонте техники в сервисе ${siteConfig.name}.`,
};

export default function Page() {
  return <FaqPage />;
}
