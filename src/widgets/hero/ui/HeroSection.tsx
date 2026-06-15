"use client";

import Image from "next/image";
import { CallButton } from "@/shared/ui/CallButton";
import { Container } from "@/shared/ui/Container";
import { MessengerWriteButton } from "@/shared/ui/MessengerWriteButton";
import { RatingBadges } from "@/shared/ui/RatingBadges";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-surface pt-6 pb-14 transition-colors duration-200 md:pb-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.2),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(192,38,211,0.1),transparent_50%)]" />

      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-surface-foreground md:text-5xl lg:text-[3.25rem]">
              Ремонт техники{" "}
              <span className="text-gradient">любых брендов</span>
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-surface-foreground/60 md:text-lg">
              Смартфоны, планшеты, ноутбуки, компьютеры — плюс сборка ПК и установка ПО.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-start">
              <CallButton size="lg" className="w-full sm:w-auto" />
              <MessengerWriteButton size="lg" className="w-full sm:w-auto" />
            </div>
            <RatingBadges className="mt-8 justify-center sm:justify-start" onSurface />
          </div>

          <div className="relative mx-auto w-full max-w-md animate-fade-in-up animation-delay-200 lg:max-w-none">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-surface-border lg:aspect-square lg:rounded-[2.5rem]">
              <Image
                src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=800&q=80"
                alt="Мастер ремонтирует технику"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-3 -left-3 rounded-2xl border border-surface-border bg-surface-muted px-4 py-3 backdrop-blur-xl">
              <p className="text-sm font-semibold text-surface-foreground">
                Бесплатная диагностика
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
