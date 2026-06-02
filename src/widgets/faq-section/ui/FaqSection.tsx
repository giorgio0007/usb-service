"use client";

import { useState } from "react";
import { faqItems } from "@/entities/faq/model/data";
import { cn } from "@/shared/lib/cn";
import { Button } from "@/shared/ui/Button";
import { Section } from "@/shared/ui/Section";
import { SectionHeader } from "@/shared/ui/SectionHeader";

type FaqSectionProps = {
  limit?: number;
  showViewAll?: boolean;
};

export function FaqSection({ limit, showViewAll = false }: FaqSectionProps) {
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id ?? null);
  const items = limit ? faqItems.slice(0, limit) : faqItems;

  return (
    <Section className="bg-muted">
      <SectionHeader
        badge="FAQ"
        title="Частые"
        titleHighlight="вопросы"
        description="Не нашли ответ? Напишите или позвоните — поможем."
      />
      <div className="mx-auto max-w-3xl space-y-3">
        {items.map((item, index) => {
          const isOpen = openId === item.id;

          return (
            <div
              key={item.id}
              className="animate-fade-in-up overflow-hidden rounded-2xl border border-dark/5 bg-white transition-shadow duration-300 hover:shadow-md"
              style={{ animationDelay: `${index * 60}ms` }}
            >
              <button
                type="button"
                onClick={() => setOpenId(isOpen ? null : item.id)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-semibold text-dark">{item.question}</span>
                <span
                  className={cn(
                    "flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sm transition-all duration-300 ease-out",
                    isOpen
                      ? "rotate-45 bg-gradient-accent text-white shadow-gradient"
                      : "bg-muted text-dark",
                  )}
                >
                  +
                </span>
              </button>
              <div
                className="accordion-content"
                data-open={isOpen ? "true" : "false"}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-dark/5 px-6 pb-5">
                    <p className="pt-4 text-sm leading-relaxed text-muted-foreground">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {showViewAll ? (
        <div className="mt-10 text-center">
          <Button href="/faq" variant="outline">
            Все вопросы
          </Button>
        </div>
      ) : null}
    </Section>
  );
}
