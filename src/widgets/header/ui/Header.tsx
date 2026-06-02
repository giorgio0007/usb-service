"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { mainNavigation } from "@/shared/config/navigation";
import { siteConfig } from "@/shared/config/site";
import { formatPhoneHref } from "@/shared/lib/format";
import { cn } from "@/shared/lib/cn";
import { Button } from "@/shared/ui/Button";
import { Container } from "@/shared/ui/Container";
import { Logo } from "@/shared/ui/Logo";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-dark/5 bg-white/80 backdrop-blur-xl">
      <Container>
        <div className="flex h-16 items-center justify-between md:h-20">
          <Logo showIcon className="scale-90 md:scale-100" />

          <nav className="hidden items-center gap-7 lg:flex">
            {mainNavigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors duration-300 hover:text-accent",
                  pathname === item.href ? "text-accent" : "text-dark/70",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={formatPhoneHref(siteConfig.phonePrimary)}
              className="text-sm font-semibold text-dark transition-colors duration-300 hover:text-accent"
            >
              {siteConfig.phonePrimary}
            </a>
            <Button href="/contact" size="sm">
              Записаться
            </Button>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-dark/10 transition-colors duration-300 hover:border-accent/30 lg:hidden"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label="Открыть меню"
          >
            <span className="text-xl">{mobileOpen ? "✕" : "☰"}</span>
          </button>
        </div>

        <div
          className={cn(
            "grid overflow-hidden transition-all duration-300 ease-in-out lg:hidden",
            mobileOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
          )}
        >
          <nav className="overflow-hidden border-t border-dark/5 py-4">
            <div className="flex flex-col gap-2">
              {mainNavigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "rounded-xl px-4 py-3 text-sm font-medium transition-colors duration-300",
                    pathname === item.href
                      ? "bg-accent/10 text-accent"
                      : "text-dark/70 hover:bg-muted",
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={formatPhoneHref(siteConfig.phonePrimary)}
                className="px-4 py-2 text-sm font-semibold text-accent"
              >
                {siteConfig.phonePrimary}
              </a>
              <Button href="/contact" className="mt-2">
                Записаться
              </Button>
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
}
