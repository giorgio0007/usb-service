import { BenefitsSection } from "@/widgets/benefits-section/ui/BenefitsSection";
import { CtaSection } from "@/widgets/cta-section/ui/CtaSection";
import { FaqSection } from "@/widgets/faq-section/ui/FaqSection";
import { HeroSection } from "@/widgets/hero/ui/HeroSection";
import { PricingSection } from "@/widgets/pricing-section/ui/PricingSection";
import { ProcessSection } from "@/widgets/process-section/ui/ProcessSection";
import { ServicesSection } from "@/widgets/services-section/ui/ServicesSection";
import { TestimonialsSection } from "@/widgets/testimonials-section/ui/TestimonialsSection";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProcessSection />
      <BenefitsSection />
      <PricingSection />
      <TestimonialsSection />
      <FaqSection limit={4} showViewAll />
      <CtaSection />
    </>
  );
}
