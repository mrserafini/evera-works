"use client";

import Image from "next/image";
import { useLocale } from "next-intl";
import { Check } from "lucide-react";

import type { Locale } from "@/i18n/routing";
import { why } from "@/lib/home-content";
import { FeatureIcon } from "@/components/feature-icon";
import { Reveal, StaggerReveal } from "@/components/anim/reveal";

export function WhyEvera() {
  const locale = useLocale() as Locale;
  const c = why[locale];

  return (
    <section className="relative isolate overflow-hidden bg-brand-teal">
      {/* Plane-over-sea photo behind the teal band — a brand-teal wash keeps the
          section's identity and text contrast intact. */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/why-evera-plane.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      {/* Same fade strength as the Hero / "Start the Conversation" bands —
          lets the plane-over-sea photo show through more than before. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-teal/85 via-brand-teal/50 to-brand-teal/25"
      />
      <div className="container-section relative z-10 py-20 md:py-28">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/90 [text-shadow:0_1px_10px_rgba(11,22,40,0.5)]">
            {c.eyebrow}
          </p>
          <h2 className="mt-3 text-4xl font-black uppercase leading-[0.95] tracking-tight text-white [text-shadow:0_2px_18px_rgba(11,22,40,0.55)] sm:text-6xl lg:text-7xl">
            {c.title}
          </h2>
          <p className="mt-4 text-base font-medium italic text-white/85 [text-shadow:0_1px_10px_rgba(11,22,40,0.5)] sm:text-lg">
            {c.subtitle}
          </p>
        </Reveal>

        <StaggerReveal
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          itemSelector=".why-card"
        >
          {c.items.map((item) => (
            <div
              key={item.title}
              className="why-card rounded-xl bg-card p-7 shadow-lg shadow-brand-navy/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_50px_-18px_rgba(11,22,40,0.45)]"
            >
              <span className="inline-flex size-12 items-center justify-center rounded-lg bg-brand-navy text-brand-teal">
                <FeatureIcon name={item.icon} className="size-6" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-brand-navy">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </StaggerReveal>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-12 max-w-3xl rounded-2xl bg-brand-navy p-8 shadow-xl shadow-brand-navy/20 md:p-10">
            <p className="text-base font-semibold text-white">
              {c.assessmentTitle}
            </p>
            <ul className="mt-5 space-y-3">
              {c.assessment.map((line) => (
                <li key={line} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-teal text-brand-navy">
                    <Check className="size-3.5" aria-hidden="true" />
                  </span>
                  <span className="text-sm leading-relaxed text-white/75">
                    {line}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
