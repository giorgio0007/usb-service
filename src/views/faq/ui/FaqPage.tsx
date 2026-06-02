import { FaqSection } from "@/widgets/faq-section/ui/FaqSection";
import { CtaSection } from "@/widgets/cta-section/ui/CtaSection";
import { Section } from "@/shared/ui/Section";
import { SectionHeader } from "@/shared/ui/SectionHeader";

export function FaqPage() {
  return (
    <>
      <Section className="pt-12 pb-0">
        <SectionHeader
          badge="FAQ"
          title="Популярные"
          titleHighlight="вопросы"
        />
      </Section>
      <FaqSection />
      <CtaSection />
    </>
  );
}
