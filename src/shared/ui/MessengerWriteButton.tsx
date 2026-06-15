"use client";

import { useState } from "react";
import { messengers } from "@/shared/config/messengers";
import { cn } from "@/shared/lib/cn";

type MessengerWriteButtonProps = {
  size?: "md" | "lg";
  className?: string;
};

const sizeStyles = {
  md: "h-12 px-6 text-sm",
  lg: "h-14 px-8 text-base",
};

export function MessengerWriteButton({
  size = "lg",
  className,
}: MessengerWriteButtonProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn("flex flex-col", className)}>
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? "Закрыть" : "Написать"}
        aria-expanded={open}
        className={cn(
          "relative inline-flex w-full items-center justify-center rounded-full border-2 font-semibold transition-all duration-300 ease-out sm:w-auto",
          sizeStyles[size],
          open
            ? "border-surface-border bg-surface-muted text-surface-foreground"
            : "border-surface-border bg-transparent text-surface-foreground hover:bg-surface-muted",
        )}
      >
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
      </button>

      <div
        className={cn(
          "flex justify-center gap-2 overflow-hidden transition-all duration-300 ease-out sm:justify-start",
          open ? "mt-3 max-h-14 opacity-100" : "max-h-0 opacity-0",
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
              "flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white shadow-lg transition-all duration-300 ease-out",
              messenger.className,
              open
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-2 scale-90 opacity-0",
            )}
            style={{
              transitionDelay: open ? `${index * 50}ms` : "0ms",
            }}
          >
            {messenger.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
