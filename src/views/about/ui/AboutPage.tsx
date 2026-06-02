import Image from "next/image";
import { benefits, stats } from "@/entities/company/model/data";
import { siteConfig } from "@/shared/config/site";
import { CtaSection } from "@/widgets/cta-section/ui/CtaSection";
import { Section } from "@/shared/ui/Section";
import { SectionHeader } from "@/shared/ui/SectionHeader";

export function AboutPage() {
  return (
    <>
      <Section className="pt-12">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeader
              badge="О нас"
              title="Надёжный сервис"
              titleHighlight="в Ставрополе"
              description={`${siteConfig.name} — ремонт смартфонов, планшетов, ноутбуков и компьютеров любых производителей. Сборка ПК, установка ПО и бесплатная диагностика.`}
              align="left"
              className="mb-0"
            />
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Наши мастера сочетают многолетний опыт с современным оборудованием.
              Прозрачные цены, качественные запчасти и бережное отношение к каждому устройству.
            </p>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80"
              alt="Мастерская по ремонту техники"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Section>

      <Section className="bg-muted">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="animate-fade-in-up text-center"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <p className="text-3xl font-bold text-gradient md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader
          badge="Наши ценности"
          title="Чем мы"
          titleHighlight="отличаемся"
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="animate-fade-in-up rounded-3xl border border-dark/5 bg-white p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <span className="text-3xl">{benefit.icon}</span>
              <h3 className="mt-4 text-lg font-bold text-dark">{benefit.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <CtaSection />
    </>
  );
}
