import { cn } from "@/shared/lib/cn";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
};

export function Input({ label, className, id, ...props }: InputProps) {
  const inputId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <label className="flex flex-col gap-2 text-sm font-medium text-dark">
      {label}
      <input
        id={inputId}
        className={cn(
          "h-12 rounded-2xl border border-dark/10 bg-white px-4 text-dark outline-none transition-colors placeholder:text-muted-foreground focus:border-accent",
          className,
        )}
        {...props}
      />
    </label>
  );
}
