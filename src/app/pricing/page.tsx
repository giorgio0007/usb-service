import type { Metadata } from "next";
import { PricingPage } from "@/views/pricing/ui/PricingPage";

export const metadata: Metadata = {
  title: "Цены",
  description: "Прозрачные цены на ремонт техники, сборку ПК и установку ПО в Ставрополе.",
};

export default function Page() {
  return <PricingPage />;
}
