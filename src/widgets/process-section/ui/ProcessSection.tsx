import { processSteps } from "@/entities/company/model/data";
import { Section } from "@/shared/ui/Section";
import { SectionHeader } from "@/shared/ui/SectionHeader";

export function ProcessSection() {
  return (
    <Section>
      <SectionHeader
        badge="Как это работает"
        title="Ремонт в"
        titleHighlight="4 шага"
        description="Понятный процесс от обращения до получения устройства с гарантией."
      />
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, index) => (
          <div
            key={step.step}
            className="animate-fade-in-up relative text-center"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-accent text-2xl font-bold text-white shadow-gradient transition-transform duration-300 hover:scale-105">
              {step.step}
            </div>
            <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
