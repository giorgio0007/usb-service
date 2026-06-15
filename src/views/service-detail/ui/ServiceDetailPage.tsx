import Link from "next/link";
import type { Service } from "@/entities/service/model/types";
import { formatPriceFrom } from "@/shared/lib/format";
import { CallButton } from "@/shared/ui/CallButton";
import { MessengerMenu } from "@/shared/ui/MessengerMenu";
import { Section } from "@/shared/ui/Section";

type ServiceDetailPageProps = {
  service: Service;
};

export function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  return (
    <Section className="pt-12">
      <div className="mx-auto max-w-3xl animate-fade-in-up">
        <Link
          href="/services"
          className="text-sm font-medium text-accent transition-colors duration-300 hover:underline"
        >
          ← К списку услуг
        </Link>
        <div className="mt-6 flex items-center gap-4">
          <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10 text-3xl">
            {service.icon}
          </span>
          <div>
            <h1 className="text-3xl font-bold text-dark md:text-4xl">
              {service.title}
            </h1>
            <p className="mt-1 text-muted-foreground">
              {formatPriceFrom(service.priceFrom)} · {service.duration}
            </p>
          </div>
        </div>
        <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
          {service.description}
        </p>
        <div className="mt-10 rounded-3xl border border-dark/5 bg-muted p-8">
          <h2 className="text-xl font-bold text-dark">Что входит в услугу</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {service.features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-3 text-sm text-muted-foreground"
              >
                <span className="text-accent">✓</span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-start">
          <CallButton size="lg" />
          <MessengerMenu size="lg" />
        </div>
      </div>
    </Section>
  );
}
