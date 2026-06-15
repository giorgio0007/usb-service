import { benefits } from "@/entities/company/model/data";
import { siteConfig } from "@/shared/config/site";
import { Section } from "@/shared/ui/Section";
import { SectionHeader } from "@/shared/ui/SectionHeader";

export function BenefitsSection() {
  return (
    <Section className="bg-surface transition-colors duration-200">
      <SectionHeader
        badge="Почему мы"
        title="Преимущества"
        titleHighlight={siteConfig.name}
        className="[&_h2]:text-surface-foreground [&_p]:text-surface-foreground/60"
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit, index) => (
          <div
            key={benefit.title}
            className="animate-fade-in-up rounded-3xl border border-surface-border bg-surface-muted p-6 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <span className="text-3xl">{benefit.icon}</span>
            <h3 className="mt-4 text-lg font-bold text-surface-foreground">{benefit.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-surface-foreground/60">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
      <p className="mt-8 text-center text-xs leading-relaxed text-surface-foreground/30">
        * На залитые устройства гарантия не выдаётся. На остальные работы — от 30 дней до 1 года,
        в зависимости от поломки и запчасти.
      </p>
    </Section>
  );
}
