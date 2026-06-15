import { siteConfig } from '@/shared/config/site';
import { formatPhoneHref } from '@/shared/lib/format';
import { CallButton } from '@/shared/ui/CallButton';
import { MessengerMenu } from '@/shared/ui/MessengerMenu';
import { Section } from '@/shared/ui/Section';
import { SectionHeader } from '@/shared/ui/SectionHeader';

export function ContactPage() {
  return (
    <Section className="pt-12">
      <SectionHeader
        badge="Контакты"
        title="Свяжитесь"
        titleHighlight="с нами"
        description="Позвоните или напишите в мессенджер — работаем Пн–Пт с 10:00 до 19:00."
      />

      <div className="animate-fade-in-up mx-auto flex max-w-lg flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <CallButton size="lg" className="w-full sm:w-auto" />
        <MessengerMenu size="lg" className="w-full sm:w-auto" />
      </div>

      <div className="mx-auto mt-12 grid max-w-3xl gap-6 sm:grid-cols-2">
        <div className="rounded-3xl border border-dark/5 bg-muted p-6 transition-shadow duration-300 hover:shadow-md">
          <h3 className="font-bold text-dark">Адрес</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {siteConfig.address}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            {siteConfig.hours}
          </p>
          <p className="text-sm text-muted-foreground">
            {siteConfig.hoursWeekend}
          </p>
        </div>

        <div className="rounded-3xl border border-dark/5 bg-muted p-6 transition-shadow duration-300 hover:shadow-md">
          <h3 className="font-bold text-dark">Телефоны</h3>
          <a
            href={formatPhoneHref(siteConfig.phonePrimary)}
            className="mt-3 block text-lg font-semibold text-gradient"
          >
            {siteConfig.phonePrimary}
          </a>
        </div>

        <div className="rounded-3xl border border-dark/5 bg-muted p-6 transition-shadow duration-300 hover:shadow-md sm:col-span-2">
          <h3 className="font-bold text-dark">Email и соцсети</h3>
          <a
            href={`mailto:${siteConfig.email}`}
            className="mt-3 block text-sm text-accent transition-colors duration-300 hover:text-accent-hover"
          >
            {siteConfig.email}
          </a>
          <div className="mt-3 flex flex-wrap gap-4 text-sm">
            <a
              href={siteConfig.social.vk}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors duration-300 hover:text-accent"
            >
              ВКонтакте
            </a>
            <a
              href={siteConfig.social.ok}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors duration-300 hover:text-accent"
            >
              Одноклассники
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
