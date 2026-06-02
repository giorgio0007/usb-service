import { services } from "@/entities/service/model/data";
import { ServiceCard } from "@/entities/service/ui/ServiceCard";
import { CtaSection } from "@/widgets/cta-section/ui/CtaSection";
import { Section } from "@/shared/ui/Section";
import { SectionHeader } from "@/shared/ui/SectionHeader";

export function ServicesPage() {
  return (
    <>
      <Section className="pt-12">
        <SectionHeader
          badge="Услуги"
          title="Полный спектр"
          titleHighlight="ремонта и настройки"
          description="Любые производители — от смартфона до игрового ПК."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.slug}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </Section>
      <CtaSection />
    </>
  );
}
