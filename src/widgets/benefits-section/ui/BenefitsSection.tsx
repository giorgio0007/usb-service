import { benefits, stats } from "@/entities/company/model/data";
import { siteConfig } from "@/shared/config/site";
import { Section } from "@/shared/ui/Section";
import { SectionHeader } from "@/shared/ui/SectionHeader";

export function BenefitsSection() {
  return (
    <Section className="bg-dark">
      <SectionHeader
        badge="Почему мы"
        title="Преимущества"
        titleHighlight={siteConfig.nameAccent}
        description="Нам доверяют тысячи клиентов в Ставрополе и крае."
        className="[&_h2]:text-white [&_p]:text-white/60"
      />
      <div className="mb-16 grid grid-cols-2 gap-8 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={stat.label}
            className="animate-fade-in-up text-center"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <p className="text-3xl font-bold text-gradient md:text-4xl">
              {stat.value}
            </p>
            <p className="mt-1 text-sm text-white/50">{stat.label}</p>
          </div>
        ))}
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit, index) => (
          <div
            key={benefit.title}
            className="animate-fade-in-up rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <span className="text-3xl">{benefit.icon}</span>
            <h3 className="mt-4 text-lg font-bold text-white">{benefit.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-white/60">
              {benefit.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
