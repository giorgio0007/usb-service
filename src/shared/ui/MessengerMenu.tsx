"use client";

import { useState } from "react";
import { messengers } from "@/shared/config/messengers";
import { cn } from "@/shared/lib/cn";

type MessengerMenuProps = {
  variant?: "button" | "fab";
  size?: "sm" | "md" | "lg";
  className?: string;
  buttonClassName?: string;
};

const sizeStyles = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-sm",
  lg: "h-14 px-8 text-base",
};

export function MessengerMenu({
  variant = "button",
  size = "md",
  className,
  buttonClassName,
}: MessengerMenuProps) {
  const [open, setOpen] = useState(false);
  const isFab = variant === "fab";

  return (
    <div className={cn("relative", className)}>
      <div
        className={cn(
          "absolute bottom-full left-0 mb-3 flex flex-col gap-2",
          isFab && "items-end",
        )}
      >
        {messengers.map((messenger, index) => (
          <a
            key={messenger.id}
            href={messenger.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={messenger.label}
            onClick={() => setOpen(false)}
            className={cn(
              "flex items-center justify-center rounded-full text-white shadow-lg transition-all duration-300 ease-out",
              isFab ? "h-12 w-12" : "h-11 w-11",
              messenger.className,
              open
                ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                : "pointer-events-none translate-y-3 scale-75 opacity-0",
            )}
            style={{
              transitionDelay: open
                ? `${index * 60}ms`
                : `${(messengers.length - index) * 40}ms`,
            }}
          >
            {messenger.icon}
          </a>
        ))}
      </div>

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? "Закрыть" : "Написать"}
        aria-expanded={open}
        className={cn(
          "relative inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 ease-out",
          isFab
            ? "h-14 w-14 bg-gradient-accent text-white shadow-gradient hover:scale-105 active:scale-95"
            : cn(
                "border-2 border-border bg-transparent text-foreground hover:border-accent hover:text-accent",
                sizeStyles[size],
              ),
          !isFab && open && "border-accent/30 bg-accent/5 text-accent",
          buttonClassName,
        )}
      >
        {isFab ? (
          <>
            <span
              className={cn(
                "absolute transition-all duration-300",
                open ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100",
              )}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span
              className={cn(
                "absolute transition-all duration-300",
                open ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0",
              )}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-6 w-6">
                <path d="M18 6 6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </>
        ) : (
          <>
            <span className={cn("transition-all duration-300", open && "scale-0 opacity-0")}>
              Написать
            </span>
            <span
              className={cn(
                "absolute transition-all duration-300",
                open ? "scale-100 opacity-100" : "scale-0 opacity-0",
              )}
            >
              ✕
            </span>
          </>
        )}
      </button>
    </div>
  );
}
