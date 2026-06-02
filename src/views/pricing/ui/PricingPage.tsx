import { PricingSection } from "@/widgets/pricing-section/ui/PricingSection";
import { CtaSection } from "@/widgets/cta-section/ui/CtaSection";
import { Section } from "@/shared/ui/Section";
import { SectionHeader } from "@/shared/ui/SectionHeader";

export function PricingPage() {
  return (
    <>
      <Section className="pt-12 pb-0">
        <SectionHeader
          badge="Цены"
          title="Тарифы"
          titleHighlight="на ремонт"
          description="Выберите подходящий вариант. Точную стоимость уточним после диагностики."
        />
      </Section>
      <PricingSection />
      <Section>
        <div className="animate-fade-in-up mx-auto max-w-3xl rounded-3xl border border-dark/5 bg-muted p-8 text-center">
          <h3 className="text-xl font-bold text-dark">Нужен индивидуальный расчёт?</h3>
          <p className="mt-3 text-sm text-muted-foreground">
            Свяжитесь с нами — подготовим персональное предложение под вашу задачу и бюджет.
          </p>
        </div>
      </Section>
      <CtaSection />
    </>
  );
}
