"use client";

import { useSyncExternalStore } from "react";
import { siteConfig } from "@/shared/config/site";
import { cn } from "@/shared/lib/cn";

type OpenNavigatorButtonProps = {
  className?: string;
  size?: "md" | "lg";
};

const sizeStyles = {
  md: "h-12 px-6 text-sm",
  lg: "h-14 px-8 text-base",
};

function isMobileDevice(): boolean {
  return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  );
}

function getNavigatorHref(isMobile: boolean): string {
  const { lat, lon } = siteConfig.map;

  if (isMobile) {
    return `yandexnavi://build_route_on_map?lat_to=${lat}&lon_to=${lon}`;
  }

  return `https://yandex.ru/maps/?rtext=~${lat},${lon}`;
}

function subscribe() {
  return () => {};
}

function getClientHref() {
  return getNavigatorHref(isMobileDevice());
}

function getServerHref() {
  return getNavigatorHref(false);
}

export function OpenNavigatorButton({
  className,
  size = "lg",
}: OpenNavigatorButtonProps) {
  const href = useSyncExternalStore(subscribe, getClientHref, getServerHref);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center rounded-full bg-[#ffcc00] font-bold text-black transition-all duration-300 ease-out hover:scale-[1.02] hover:bg-[#f2c200] active:scale-[0.98]",
        sizeStyles[size],
        className,
      )}
    >
      Открыть в навигаторе
    </a>
  );
}
