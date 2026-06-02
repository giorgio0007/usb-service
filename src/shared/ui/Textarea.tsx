import { cn } from "@/shared/lib/cn";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label?: string;
};

export function Textarea({ label, className, id, ...props }: TextareaProps) {
  const textareaId = id ?? label?.toLowerCase().replace(/\s+/g, "-");

  return (
    <label className="flex flex-col gap-2 text-sm font-medium text-dark">
      {label}
      <textarea
        id={textareaId}
        className={cn(
          "min-h-32 rounded-2xl border border-dark/10 bg-white px-4 py-3 text-dark outline-none transition-colors placeholder:text-muted-foreground focus:border-accent",
          className,
        )}
        {...props}
      />
    </label>
  );
}
