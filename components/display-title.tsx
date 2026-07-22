import { cn } from "@/lib/utils";

/**
 * Big, bold, uppercase display heading with a small italic subtitle beneath —
 * the signature heading style from the client's mockup (e.g. "OUR SERVICES /
 * The people behind EVERA").
 */
export function DisplayTitle({
  title,
  subtitle,
  subtitleAccent,
  tone = "dark",
  align = "left",
  className,
}: {
  title: string;
  subtitle?: string;
  /** Optional word inside the subtitle to render in teal (e.g. "EVERA"). */
  subtitleAccent?: string;
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
}) {
  const dark = tone === "dark";

  const renderSubtitle = () => {
    if (!subtitle) return null;
    if (subtitleAccent && subtitle.includes(subtitleAccent)) {
      const [before, after] = subtitle.split(subtitleAccent);
      return (
        <>
          {before}
          <span className="text-brand-teal">{subtitleAccent}</span>
          {after}
        </>
      );
    }
    return subtitle;
  };

  return (
    <div className={cn(align === "center" ? "text-center" : "text-left", className)}>
      <h2
        className={cn(
          "text-balance text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl",
          dark ? "text-white" : "text-brand-navy",
        )}
      >
        {title}
      </h2>
      {subtitle ? (
        <p
          className={cn(
            "mt-2 text-base font-medium italic sm:text-lg",
            dark ? "text-white/70" : "text-text-muted",
          )}
        >
          {renderSubtitle()}
        </p>
      ) : null}
    </div>
  );
}
