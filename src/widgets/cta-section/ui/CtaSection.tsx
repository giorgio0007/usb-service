import { Button } from "@/shared/ui/Button";
import { Container } from "@/shared/ui/Container";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-accent py-16 md:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(255,255,255,0.12),transparent_60%)]" />
      <Container className="relative text-center">
        <h2 className="animate-fade-in-up text-3xl font-bold text-white md:text-4xl lg:text-5xl">
          Готовы отремонтировать устройство?
        </h2>
        <p className="animate-fade-in-up animation-delay-100 mx-auto mt-4 max-w-xl text-lg text-white/85">
          Бесплатная диагностика и честный расчёт — без скрытых доплат.
        </p>
        <div className="animate-fade-in-up animation-delay-200 mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/contact" variant="secondary" size="lg">
            Записаться на диагностику
          </Button>
          <Button
            href="/pricing"
            variant="outline"
            size="lg"
            className="border-white/30 text-white hover:border-white hover:bg-white/10 hover:text-white"
          >
            Смотреть цены
          </Button>
        </div>
      </Container>
    </section>
  );
}
