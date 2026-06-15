import Link from "next/link";
import { siteConfig } from "@/shared/config/site";
import { cn } from "@/shared/lib/cn";

type LogoProps = {
  className?: string;
  onSurface?: boolean;
  showIcon?: boolean;
  showTagline?: boolean;
  asLink?: boolean;
};

export function Logo({
  className,
  onSurface = false,
  showIcon = true,
  showTagline = false,
  asLink = true,
}: LogoProps) {
  const content = (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      {showIcon ? (
        <span
          className={cn(
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-[10px] font-black tracking-tighter",
            onSurface
              ? "bg-surface-foreground text-surface"
              : "bg-foreground text-background",
          )}
        >
          USB
        </span>
      ) : null}
      <span className="flex flex-col">
        <span
          className={cn(
            "logo-brand text-base uppercase leading-none md:text-lg",
            onSurface ? "text-surface-foreground" : "text-foreground",
          )}
        >
          {siteConfig.name}
        </span>
        {showTagline ? (
          <span
            className={cn(
              "mt-1 font-sans text-[10px] font-normal normal-case leading-tight md:text-xs",
              onSurface ? "text-surface-foreground/50" : "text-muted-foreground",
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
