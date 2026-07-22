"use client";

import { useLocale } from "next-intl";

import type { Locale } from "@/i18n/routing";
import { stats } from "@/lib/home-content";
import { StaggerReveal } from "@/components/anim/reveal";

export function ImpactStats() {
  const locale = useLocale() as Locale;
  const items = stats[locale];

  return (
    // Same color scheme as the 24/7 coverage band (light surface, navy, teal).
    <section className="bg-surface">
      <div className="container-section py-14 md:py-16">
        <StaggerReveal
          className="grid grid-cols-1 gap-10 text-center sm:grid-cols-3"
          itemSelector=".impact-item"
        >
          {items.map((item) => (
            <div key={item.label} className="impact-item">
              <div className="text-5xl font-black uppercase leading-none tracking-tight text-brand-navy sm:text-6xl">
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
