import { cn } from "@/shared/lib/cn";
import { Badge } from "./Badge";

type SectionHeaderProps = {
  badge?: string;
  title: string;
  titleHighlight?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  badge,
  title,
  titleHighlight,
  description,
  align = "center",
  className,
}: SectionHeaderProps) {
  const titleContent = titleHighlight ? (
    <>
      {title}{" "}
      <span className="text-gradient">{titleHighlight}</span>
    </>
  ) : (
    title
  );

  return (
    <div
      className={cn(
        "mb-12 max-w-3xl animate-fade-in-up",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {badge ? <Badge className="mb-4">{badge}</Badge> : null}
      <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
        {titleContent}
      </h2>
      {description ? (
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </div>
  );
}
