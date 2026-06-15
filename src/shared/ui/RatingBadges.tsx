import { siteConfig } from "@/shared/config/site";
import { cn } from "@/shared/lib/cn";

type RatingBadgesProps = {
  className?: string;
  onSurface?: boolean;
};

export function RatingBadges({ className, onSurface = false }: RatingBadgesProps) {
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
                onSurface ? "text-surface-foreground" : "text-foreground",
              )}
            >
              {rating.value}
            </p>
            <p
              className={cn(
                "mt-0.5 text-xs",
                onSurface ? "text-surface-foreground/50" : "text-muted-foreground",
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
