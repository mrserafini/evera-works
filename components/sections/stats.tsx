"use client";

import { useTranslations } from "next-intl";

import { StaggerReveal } from "@/components/anim/reveal";

const KEYS = ["teams", "coverage", "languages", "quality"] as const;

export function Stats() {
  const t = useTranslations("home.stats");

  return (
    <section className="bg-brand-teal">
      <div className="container-section py-16 md:py-20">
        <StaggerReveal
          className="grid grid-cols-2 gap-8 lg:grid-cols-4"
          itemSelector=".stat-item"
        >
          {KEYS.map((key) => (
            <div key={key} className="stat-item text-center">
              <div className="text-4xl font-extrabold tracking-tight text-brand-navy sm:text-5xl">
                {t(`items.${key}.value`)}
              </div>
              <div className="mt-2 text-sm font-semibold uppercase tracking-wide text-brand-navy/70">
                {t(`items.${key}.label`)}
              </div>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
