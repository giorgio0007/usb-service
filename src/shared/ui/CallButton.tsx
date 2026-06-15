import { siteConfig } from "@/shared/config/site";
import { formatPhoneHref } from "@/shared/lib/format";
import { cn } from "@/shared/lib/cn";

type CallButtonProps = {
  size?: "sm" | "md" | "lg";
  className?: string;
  phone?: string;
};

const sizeStyles = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-sm",
  lg: "h-14 px-8 text-base",
};

export function CallButton({
  size = "md",
  className,
  phone = siteConfig.phonePrimary,
}: CallButtonProps) {
  return (
    <a
      href={formatPhoneHref(phone)}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full bg-gradient-accent font-semibold text-white shadow-gradient transition-all duration-300 ease-out hover:scale-[1.02] hover:opacity-90 active:scale-[0.98]",
        sizeStyles[size],
        className,
      )}
    >
      Позвонить
    </a>
  );
}
