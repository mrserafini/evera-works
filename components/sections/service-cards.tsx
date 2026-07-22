"use client";

import { useLocale, useTranslations } from "next-intl";
import { ArrowRight } from "lucide-react";

import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import type { Service } from "@/lib/services-data";
import { ServiceIcon } from "@/components/service-icon";
import { StaggerReveal } from "@/components/anim/reveal";

export function ServiceCards({ items }: { items: Service[] }) {
  const tc = useTranslations("common");
  const locale = useLocale() as Locale;

  return (
    <StaggerReveal
      className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      itemSelector=".service-card"
    >
      {items.map((s) => {
        const c = s.i18n[locale];
        return (
          <Link
            key={s.slug}
            href={`/services/${s.slug}`}
            className="service-card group relative flex flex-col rounded-xl border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-teal hover:shadow-[0_12px_40px_-12px_rgba(0,221,184,0.45)]"
          >
            <span className="inline-flex size-12 items-center justify-center rounded-lg bg-brand-navy text-brand-teal transition-colors group-hover:bg-brand-teal group-hover:text-brand-navy [&_svg]:size-6">
              <ServiceIcon name={s.icon} />
            </span>
            <h3 className="mt-5 text-xl font-semibold text-brand-navy">
              {c.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-text-muted">
              {c.description}
            </p>
            <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-teal-dark">
              {tc("learnMore")}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        );
      })}
    </StaggerReveal>
  );
}
