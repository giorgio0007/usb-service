"use client";

import { useCallback, useSyncExternalStore } from "react";
import { cn } from "@/shared/lib/cn";
import {
  THEME_CHANGE_EVENT,
  applyTheme,
  getStoredTheme,
  getSystemDark,
  setStoredTheme,
  type ThemePreference,
} from "@/shared/lib/theme";

function subscribeStored(onStoreChange: () => void) {
  const onThemeChange = () => onStoreChange();

  window.addEventListener(THEME_CHANGE_EVENT, onThemeChange);
  window.addEventListener("storage", onThemeChange);

  return () => {
    window.removeEventListener(THEME_CHANGE_EVENT, onThemeChange);
    window.removeEventListener("storage", onThemeChange);
  };
}

function subscribeSystem(onStoreChange: () => void) {
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const onChange = () => onStoreChange();

  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

type ThemeToggleProps = {
  className?: string;
};

export function ThemeToggle({ className }: ThemeToggleProps) {
  const stored = useSyncExternalStore(
    subscribeStored,
    getStoredTheme,
    () => null,
  );
  const systemDark = useSyncExternalStore(
    subscribeSystem,
    getSystemDark,
    () => false,
  );

  const effectiveTheme: ThemePreference =
    stored ?? (systemDark ? "dark" : "light");
  const isDark = effectiveTheme === "dark";

  const toggle = useCallback(() => {
    const next: ThemePreference = isDark ? "light" : "dark";
    setStoredTheme(next);
    applyTheme(next);
  }, [isDark]);

  return (
    <button
      type="button"
      onClick={toggle}
      className={cn(
        "flex h-10 w-10 items-center justify-center rounded-xl border border-border text-foreground transition-colors duration-300 hover:border-accent/30 hover:text-accent",
        className,
      )}
      aria-label={isDark ? "Включить светлую тему" : "Включить тёмную тему"}
      title={isDark ? "Светлая тема" : "Тёмная тема"}
    >
      {isDark ? (
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          aria-hidden
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
        </svg>
      ) : (
        <svg
          viewBox="0 0 24 24"
          className="h-5 w-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.75"
          aria-hidden
        >
          <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79Z" />
        </svg>
      )}
    </button>
  );
}
