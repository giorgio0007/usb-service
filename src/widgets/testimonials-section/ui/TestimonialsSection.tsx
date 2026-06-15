import { testimonials } from "@/entities/testimonial/model/data";
import { Section } from "@/shared/ui/Section";
import { SectionHeader } from "@/shared/ui/SectionHeader";

export function TestimonialsSection() {
  return (
    <Section>
      <SectionHeader badge="Отзывы" title="Что говорят" titleHighlight="клиенты" />
      <div className="grid gap-6 md:grid-cols-2">
        {testimonials.map((testimonial, index) => (
          <blockquote
            key={testimonial.id}
            className="animate-fade-in-up rounded-3xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <div className="mb-4 flex gap-1">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <span key={i} className="text-accent">
                  ★
                </span>
              ))}
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              «{testimonial.content}»
            </p>
            <footer className="mt-6 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
                {testimonial.avatar}
              </span>
              <div>
                <p className="text-sm font-semibold text-card-foreground">
                  {testimonial.name}
                </p>
                <p className="text-xs text-muted-foreground">{testimonial.role}</p>
              </div>
            </footer>
          </blockquote>
        ))}
      </div>
    </Section>
  );
}
