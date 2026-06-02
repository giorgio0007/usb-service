import Image from "next/image";
import { Button } from "@/shared/ui/Button";
import { Container } from "@/shared/ui/Container";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-dark pt-6 pb-14 md:pb-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.2),transparent_50%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(192,38,211,0.1),transparent_50%)]" />

      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div className="animate-fade-in-up">
            <span className="mb-5 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-wider text-white/70">
              Ставрополь · с 2015 года
            </span>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-[3.25rem]">
              Ремонт техники{" "}
              <span className="text-gradient">любых брендов</span>
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-white/60 md:text-lg">
              Смартфоны, планшеты, ноутбуки, компьютеры — плюс сборка ПК и установка ПО.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" size="lg">
                Записаться
              </Button>
              <Button
                href="/services"
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:border-accent-light hover:text-white"
              >
                Услуги
              </Button>
            </div>
            <div className="mt-8 flex gap-6 sm:gap-10">
              <div>
                <p className="text-xl font-bold text-white md:text-2xl">15 000+</p>
                <p className="text-xs text-white/50 sm:text-sm">ремонтов</p>
              </div>
              <div>
                <p className="text-xl font-bold text-white md:text-2xl">4,9★</p>
                <p className="text-xs text-white/50 sm:text-sm">оценка</p>
              </div>
              <div>
                <p className="text-xl font-bold text-white md:text-2xl">0 ₽</p>
                <p className="text-xs text-white/50 sm:text-sm">диагностика</p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md animate-fade-in-up animation-delay-200 lg:max-w-none">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] border border-white/10 lg:aspect-square lg:rounded-[2.5rem]">
              <Image
                src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=800&q=80"
                alt="Мастер ремонтирует технику"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="absolute -bottom-3 -left-3 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-xl transition-transform duration-300 hover:scale-105">
              <p className="text-sm font-semibold text-white">Бесплатная диагностика</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
