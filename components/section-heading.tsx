import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  /** "dark" for navy sections (light text), "light" for light sections. */
  tone?: "dark" | "light";
  align?: "left" | "center";
  /** Draw a teal underline accent beneath the title (mockup shape detail). */
  underline?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  tone = "light",
  align = "center",
  underline = false,
  className,
}: SectionHeadingProps) {
  const dark = tone === "dark";
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-widest text-brand-teal-dark">
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          "mt-3 text-balance text-3xl font-bold tracking-tight sm:text-4xl",
          dark ? "text-white" : "text-brand-navy",
        )}
      >
        {title}
      </h2>
      {underline ? (
        <span
          aria-hidden="true"
          className={cn(
            "mt-4 block h-1 w-16 rounded-full bg-brand-teal",
            align === "center" ? "mx-auto" : "",
          )}
        />
      ) : null}
      {subtitle ? (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            dark ? "text-white/70" : "text-text-muted",
          )}
        >
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
