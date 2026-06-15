import Link from "next/link";
import { mainNavigation } from "@/shared/config/navigation";
import { siteConfig } from "@/shared/config/site";
import { formatPhoneHref } from "@/shared/lib/format";
import { Container } from "@/shared/ui/Container";
import { Logo } from "@/shared/ui/Logo";

export function Footer() {
  return (
    <footer className="border-t border-dark/5 bg-dark text-white">
      <Container>
        <div className="grid gap-8 py-12 md:grid-cols-2 md:gap-10 lg:grid-cols-12 lg:py-16">
          <div className="lg:col-span-4">
            <Logo variant="light" showTagline />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              {siteConfig.footerDescription}
            </p>
          </div>

          <div className="lg:col-span-3">
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/40">
              Навигация
            </h4>
            <ul className="space-y-2.5">
              {mainNavigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-white/70 transition-colors duration-300 hover:text-accent-light"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/40">
              Контакты
            </h4>
            <ul className="space-y-2.5 text-sm text-white/70">
              <li>
                <a
                  href={formatPhoneHref(siteConfig.phonePrimary)}
                  className="transition-colors duration-300 hover:text-accent-light"
                >
                  {siteConfig.phonePrimary}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors duration-300 hover:text-accent-light"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>{siteConfig.address}</li>
              <li>{siteConfig.hours}</li>
              <li>{siteConfig.hoursWeekend}</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 border-t border-white/10 py-6">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <a
              href={siteConfig.social.vk}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/70 transition-colors duration-300 hover:text-accent-light"
            >
              ВКонтакте
            </a>
            <a
              href={siteConfig.social.ok}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/70 transition-colors duration-300 hover:text-accent-light"
            >
              Одноклассники
            </a>
            <a
              href={siteConfig.social.instagram}
              className="text-sm text-white/70 transition-colors duration-300 hover:text-accent-light"
              aria-label="Instagram"
            >
              Instagram
            </a>
            <a
              href={siteConfig.social.telegram}
              className="text-sm text-white/70 transition-colors duration-300 hover:text-accent-light"
              aria-label="Telegram"
            >
              Telegram
            </a>
          </div>

          <p className="max-w-3xl text-center text-xs leading-relaxed text-white/30">
            Meta Platforms Inc. (Facebook, WhatsApp и Instagram) — организация признана
            экстремистской. Её деятельность запрещена на территории России.
          </p>

          <p className="text-sm text-white/40">
            © {new Date().getFullYear()} {siteConfig.name}. Все права защищены.
          </p>
        </div>
      </Container>
    </footer>
  );
}
