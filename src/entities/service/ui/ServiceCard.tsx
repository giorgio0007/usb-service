import type { Service } from "../model/types";
import { formatPriceFrom } from "@/shared/lib/format";
import { Button } from "@/shared/ui/Button";

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="group flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-accent/20 hover:shadow-xl hover:shadow-accent/10">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-muted text-2xl transition-transform duration-300 group-hover:scale-110">
        {service.icon}
      </div>
      <h3 className="text-xl font-bold text-card-foreground">{service.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
        {service.shortDescription}
      </p>
      <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
        <div>
          <p className="text-xs uppercase tracking-wide text-muted-foreground">
            Стоимость
          </p>
          <p className="text-lg font-bold text-gradient">
            {formatPriceFrom(service.priceFrom)}
          </p>
        </div>
        <Button href={`/services/${service.slug}`} variant="ghost" size="sm">
          Подробнее →
        </Button>
      </div>
    </article>
  );
}
