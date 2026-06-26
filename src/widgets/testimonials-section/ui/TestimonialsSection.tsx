import Image from 'next/image';
import Link from 'next/link';

import { siteConfig } from '@/shared/config/site';
import { Section } from '@/shared/ui/Section';
import { SectionHeader } from '@/shared/ui/SectionHeader';

export function TestimonialsSection() {
  return (
    <Section>
      <SectionHeader
        badge="Отзывы"
        title="Что говорят"
        titleHighlight="клиенты"
      />
      <div className="grid gap-4 md:grid-cols-3">
        {siteConfig.reviews.map((review) => (
          <Link
            key={review.id}
            href={review.href}
            target="_blank"
            className="group flex items-start justify-between rounded-3xl bg-card p-8 transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <div>
              <div className="mb-3 flex items-center gap-1">
                <h3 className="text-2xl font-semibold">{review.title}</h3>

                <span className="text-xl text-muted-foreground transition-transform group-hover:translate-x-1">
                  ›
                </span>
              </div>

              {'rating' in review && (
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <span className="text-yellow-500 tracking-tight">★★★★★</span>

                  <span>{review.rating}</span>
                  <span>{review.count}</span>
                </div>
              )}
            </div>

            <Image
              src={review.icon}
              alt={review.title}
              width={120}
              height={36}
              className="h-9 w-auto object-contain"
            />
          </Link>
        ))}
      </div>
    </Section>
  );
}
