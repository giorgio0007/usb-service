import { siteConfig } from "@/shared/config/site";
import { Container } from "@/shared/ui/Container";
import { OpenNavigatorButton } from "@/shared/ui/OpenNavigatorButton";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-accent py-16 md:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_80%_50%,rgba(255,255,255,0.12),transparent_60%)]" />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="animate-fade-in-up text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Готовы отремонтировать устройство?
          </h2>
          <p className="animate-fade-in-up animation-delay-100 mx-auto mt-4 max-w-xl text-lg text-white/85">
            {siteConfig.address} · {siteConfig.hours}
          </p>

          <div className="animate-fade-in-up animation-delay-200 mt-8 overflow-hidden rounded-3xl border border-white/20 shadow-2xl">
            <iframe
              src={siteConfig.map.embedUrl}
              title="ЮСБ СЕРВИС на карте"
              className="aspect-[16/10] w-full border-0 md:aspect-[16/9]"
              allowFullScreen
              loading="lazy"
            />
          </div>

          <div className="animate-fade-in-up animation-delay-300 mt-8">
            <OpenNavigatorButton className="w-full sm:w-auto" />
          </div>
        </div>
      </Container>
    </section>
  );
}
