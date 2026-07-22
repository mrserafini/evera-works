"use client";

import Image from "next/image";
import { useLocale } from "next-intl";

import type { Locale } from "@/i18n/routing";
import { homeServices, servicesSection } from "@/lib/home-content";
import { cn } from "@/lib/utils";
import { DisplayTitle } from "@/components/display-title";
import { Reveal, StaggerReveal } from "@/components/anim/reveal";

export function ServicesShowcase() {
  const locale = useLocale() as Locale;
  const c = servicesSection[locale];
  const items = homeServices[locale];

  return (
    <section id="services" className="scroll-mt-20 bg-brand-navy">
      <div className="container-section py-20 md:py-28">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-brand-teal">
            {c.eyebrow}
          </p>
          <DisplayTitle tone="dark" title={c.title} className="mt-4" />
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 sm:text-lg">
            {c.subtitle}
          </p>
        </Reveal>

        <StaggerReveal
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          itemSelector=".svc-card"
        >
          {items.map((s) => (
            <article
              key={s.title}
              className="svc-card group relative h-[26rem] overflow-hidden rounded-2xl border border-white/10 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-teal/60"
            >
              {/* Full-bleed photo related to the service */}
              <Image
                src={s.image}
                alt={s.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className={cn(
                  "object-cover transition-transform duration-700 group-hover:scale-110",
                  s.imagePosition ?? "object-center",
                )}
              />
              {/* Navy gradient for legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-navy via-brand-navy/55 to-brand-navy/15 transition-colors duration-300 group-hover:via-brand-navy/65" />

              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className="text-xl font-bold leading-snug text-white">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/80">
                  {s.description}
                </p>
              </div>
            </article>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
