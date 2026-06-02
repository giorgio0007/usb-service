import Link from "next/link";
import { cn } from "@/shared/lib/cn";

type LogoProps = {
  className?: string;
  variant?: "light" | "dark";
  showIcon?: boolean;
  asLink?: boolean;
};

export function Logo({
  className,
  variant = "dark",
  showIcon = true,
  asLink = true,
}: LogoProps) {
  const content = (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      {showIcon ? (
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-accent text-sm font-black tracking-tighter text-white shadow-gradient">
          USB
        </span>
      ) : null}
      <span className="inline-flex items-baseline gap-1">
        <span className="font-display text-xl font-black tracking-tight text-gradient md:text-2xl">
          ЮСБ
        </span>
        <span
          className={cn(
            "text-lg font-light tracking-wide md:text-xl",
            variant === "light" ? "text-white/90" : "text-dark/80",
          )}
        >
          сервис
        </span>
      </span>
    </span>
  );

  if (asLink) {
    return (
      <Link href="/" className="transition-opacity duration-300 hover:opacity-80">
        {content}
      </Link>
    );
  }

  return content;
}
