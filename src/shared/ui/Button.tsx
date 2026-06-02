import Link from "next/link";
import { cn } from "@/shared/lib/cn";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-accent text-white shadow-gradient hover:opacity-90 hover:scale-[1.02] active:scale-[0.98]",
  secondary: "bg-dark text-white hover:bg-dark/90",
  outline:
    "border-2 border-dark/10 bg-transparent text-dark hover:border-accent hover:text-accent",
  ghost: "bg-transparent text-dark hover:bg-muted",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-sm",
  lg: "h-14 px-8 text-base",
};

type ButtonProps = {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  href?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  href,
  type = "button",
  onClick,
}: ButtonProps) {
  const styles = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-300 ease-out",
    variantStyles[variant],
    sizeStyles[size],
    className,
  );

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={styles}>
      {children}
    </button>
  );
}
