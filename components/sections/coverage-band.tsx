"use client";

import { useLocale } from "next-intl";

import type { Locale } from "@/i18n/routing";
import { coverage } from "@/lib/home-content";
import { StaggerReveal } from "@/components/anim/reveal";

export function CoverageBand() {
  const locale = useLocale() as Locale;
  const items = coverage[locale];

  return (
    <section className="bg-surface">
      <div className="container-section py-14 md:py-16">
        <StaggerReveal
          className="grid grid-cols-1 items-center gap-10 text-center md:grid-cols-3"
          itemSelector=".cov-item"
        >
          {items.map((item) => (
            <div key={item.label} className="cov-item">
              {/* text-3xl base keeps long words (e.g. "MULTILINGÜE",
                  "AHORA ATENDEMOS") inside their column at every width. */}
              <div className="text-3xl font-black uppercase leading-tight tracking-tight text-brand-navy lg:text-4xl">
                {item.value}
              </div>
              <div className="mt-3 text-sm font-bold uppercase tracking-widest text-brand-teal-dark">
                {item.label}
              </div>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
