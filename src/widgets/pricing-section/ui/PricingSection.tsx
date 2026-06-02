import { pricingPlans } from "@/entities/pricing-plan/model/data";
import { formatPrice } from "@/shared/lib/format";
import { Button } from "@/shared/ui/Button";
import { cn } from "@/shared/lib/cn";
import { Section } from "@/shared/ui/Section";
import { SectionHeader } from "@/shared/ui/SectionHeader";

export function PricingSection() {
  return (
    <Section className="bg-muted">
      <SectionHeader
        badge="Цены"
        title="Прозрачные"
        titleHighlight="цены"
        description="Точную стоимость озвучим после диагностики — без скрытых доплат."
      />
      <div className="grid gap-8 lg:grid-cols-3">
        {pricingPlans.map((plan, index) => (
          <article
            key={plan.id}
            className={cn(
              "animate-fade-in-up relative flex flex-col rounded-3xl border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1",
              plan.popular
                ? "border-accent shadow-xl shadow-accent/10"
                : "border-dark/5",
            )}
            style={{ animationDelay: `${index * 80}ms` }}
          >
            {plan.popular ? (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-accent px-4 py-1 text-xs font-semibold text-white shadow-gradient">
                Популярный
              </span>
            ) : null}
            <h3 className="text-xl font-bold text-dark">{plan.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
            <div className="mt-6">
              <span className="text-sm text-muted-foreground">{plan.period}</span>
              <p className="text-4xl font-bold text-gradient">
                {formatPrice(plan.price)}
              </p>
            </div>
            <ul className="mt-8 flex-1 space-y-3">
              {plan.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <span className="mt-0.5 text-accent">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            <Button
              href="/contact"
              variant={plan.popular ? "primary" : "outline"}
              className="mt-8 w-full"
            >
              Выбрать тариф
            </Button>
          </article>
        ))}
      </div>
    </Section>
  );
}
