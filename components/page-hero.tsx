import { useTranslations } from "next-intl";
import { ChevronRight } from "lucide-react";

import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  /** Short label shown in the breadcrumb (defaults to the eyebrow). */
  crumb?: string;
  className?: string;
}

/**
 * Dark navy hero for inner pages. A breadcrumb + compact sizing make inner
 * pages read clearly as sub-pages (not the home hero). Includes top padding so
 * content clears the fixed navbar.
 */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  crumb,
  className,
}: PageHeroProps) {
  const t = useTranslations("common");

  return (
    <section className={cn("relative overflow-hidden bg-brand-navy", className)}>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-teal/15 blur-[110px]"
      />
      <div className="container-section relative pb-14 pt-28 md:pb-20 md:pt-36">
        {/* Breadcrumb — signals "you are on a sub-page" */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center gap-1.5 text-xs font-medium text-white/45"
        >
          <Link href="/" className="transition-colors hover:text-brand-teal">
            {t("home")}
          </Link>
          <ChevronRight className="size-3.5" aria-hidden="true" />
          <span className="text-white/80">{crumb ?? eyebrow ?? title}</span>
        </nav>

        {eyebrow ? (
          <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-brand-teal">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="mt-3 max-w-3xl text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
            {subtitle}
          </p>
        ) : null}
      </div>
    </section>
  );
}
