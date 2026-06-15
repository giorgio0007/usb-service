import { siteConfig } from "@/shared/config/site";
import { cn } from "@/shared/lib/cn";

type RatingBadgesProps = {
  className?: string;
  variant?: "light" | "dark";
};

export function RatingBadges({ className, variant = "dark" }: RatingBadgesProps) {
  const isLight = variant === "light";

  return (
    <div className={cn("flex flex-wrap gap-4 sm:gap-6", className)}>
      {siteConfig.ratings.map((rating) => (
        <div key={rating.id} className="flex items-center gap-2.5">
          <span
            className={cn(
              "flex h-9 w-9 items-center justify-center rounded-xl text-xs font-bold",
              rating.id === "google" && "bg-white text-[#4285F4]",
              rating.id === "2gis" && "bg-[#2DCB67] text-white",
              rating.id === "yandex" && "bg-[#FC3F1D] text-white",
            )}
          >
            {rating.shortLabel}
          </span>
          <div>
            <p
              className={cn(
                "text-lg font-bold leading-none md:text-xl",
                isLight ? "text-dark" : "text-white",
              )}
            >
              {rating.value}
            </p>
            <p
              className={cn(
                "mt-0.5 text-xs",
                isLight ? "text-muted-foreground" : "text-white/50",
              )}
            >
              {rating.label}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
