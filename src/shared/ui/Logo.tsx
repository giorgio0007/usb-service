import Link from "next/link";
import { siteConfig } from "@/shared/config/site";
import { cn } from "@/shared/lib/cn";

type LogoProps = {
  className?: string;
  variant?: "light" | "dark";
  showIcon?: boolean;
  showTagline?: boolean;
  asLink?: boolean;
};

export function Logo({
  className,
  variant = "dark",
  showIcon = true,
  showTagline = false,
  asLink = true,
}: LogoProps) {
  const content = (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      {showIcon ? (
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-black text-[10px] font-black tracking-tighter text-white">
          USB
        </span>
      ) : null}
      <span className="flex flex-col">
        <span
          className={cn(
            "logo-brand text-base uppercase leading-none md:text-lg",
            variant === "light" ? "text-white" : "text-black",
          )}
        >
          {siteConfig.name}
        </span>
        {showTagline ? (
          <span
            className={cn(
              "mt-1 font-sans text-[10px] font-normal normal-case leading-tight md:text-xs",
              variant === "light" ? "text-white/50" : "text-dark/45",
            )}
          >
            {siteConfig.tagline}
          </span>
        ) : null}
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
