"use client";

import { useLocale } from "next-intl";

import type { Locale } from "@/i18n/routing";
import { values } from "@/lib/home-content";
import { DisplayTitle } from "@/components/display-title";
import { Reveal, StaggerReveal } from "@/components/anim/reveal";

export function Values() {
  const locale = useLocale() as Locale;
  const c = values[locale];

  return (
    <section className="bg-brand-navy">
      <div className="container-section pb-10 pt-20 md:pb-12 md:pt-28">
        <Reveal>
          <DisplayTitle tone="dark" title={c.eyebrow} subtitle={c.title} />
        </Reveal>

        <StaggerReveal
          className="mt-14 grid gap-x-12 gap-y-10 sm:grid-cols-2"
          itemSelector=".value-item"
        >
          {c.items.map((item) => (
            <div key={item.title} className="value-item border-t-2 border-brand-teal pt-5">
              <h3 className="text-lg font-bold uppercase tracking-wide text-brand-teal">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70 sm:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
