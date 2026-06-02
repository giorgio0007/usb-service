import { services } from "@/entities/service/model/data";
import { ServiceCard } from "@/entities/service/ui/ServiceCard";
import { Button } from "@/shared/ui/Button";
import { Section } from "@/shared/ui/Section";
import { SectionHeader } from "@/shared/ui/SectionHeader";

export function ServicesSection() {
  return (
    <Section className="bg-muted">
      <SectionHeader
        badge="Наши услуги"
        title="Ремонт"
        titleHighlight="любой техники"
        description="Смартфоны, планшеты, ноутбуки, компьютеры — плюс сборка ПК и установка ПО."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.slice(0, 6).map((service, index) => (
          <div
            key={service.slug}
            className="animate-fade-in-up"
            style={{ animationDelay: `${index * 60}ms` }}
          >
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Button href="/services" variant="secondary">
          Все услуги
        </Button>
      </div>
    </Section>
  );
}
