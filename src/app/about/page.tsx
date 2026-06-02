import type { Metadata } from "next";
import { AboutPage } from "@/views/about/ui/AboutPage";
import { siteConfig } from "@/shared/config/site";

export const metadata: Metadata = {
  title: "О нас",
  description: `О сервисе ${siteConfig.name} — ремонт техники любых брендов в Ставрополе.`,
};

export default function Page() {
  return <AboutPage />;
}
