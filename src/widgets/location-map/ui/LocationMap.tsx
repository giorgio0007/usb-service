import { siteConfig } from "@/shared/config/site";
import { cn } from "@/shared/lib/cn";
import { OpenNavigatorButton } from "@/shared/ui/OpenNavigatorButton";

type LocationMapProps = {
  className?: string;
  onSurface?: boolean;
};

export function LocationMap({ className, onSurface }: LocationMapProps) {
  return (
    <div className={cn("animate-fade-in-up", className)}>
      <div
        className={cn(
          "overflow-hidden rounded-3xl border",
          onSurface
            ? "border-white/20 shadow-2xl"
            : "border-border bg-card shadow-lg",
        )}
      >
        <iframe
          src={siteConfig.map.embedUrl}
          title="ЮСБ СЕРВИС на карте"
          className="aspect-[16/10] w-full border-0 md:aspect-[16/9]"
          allowFullScreen
          loading="lazy"
        />
      </div>
      <div className="mt-6 flex justify-center">
        <OpenNavigatorButton className="w-full sm:w-auto" />
      </div>
    </div>
  );
}
