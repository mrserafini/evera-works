"use client";

import Image from "next/image";
import { useLocale } from "next-intl";

import type { Locale } from "@/i18n/routing";
import { differentiators } from "@/lib/home-content";
import { FeatureIcon } from "@/components/feature-icon";
import { Reveal, StaggerReveal } from "@/components/anim/reveal";

const BG = "/images/the-right-team.jpg";

export function Differentiators() {
  const locale = useLocale() as Locale;
  const c = differentiators[locale];

  return (
    <section className="relative isolate overflow-hidden bg-brand-navy">
      <div className="absolute inset-0 -z-20">
        <Image
          src={BG}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-brand-navy/70" />
      {/* Top fade from solid navy — meets the Hero's matching bottom fade so the
          two image sections blend instead of showing a hard divide. */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-44 bg-gradient-to-b from-brand-navy to-transparent"
      />

      <div className="container-section relative z-10 py-20 md:py-28">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-brand-teal">
            {c.eyebrow}
          </p>
          <h2 className="mt-4 max-w-2xl whitespace-pre-line text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-5xl">
            {c.title}
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            {c.subtitle}
          </p>
        </Reveal>

        <StaggerReveal
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          itemSelector=".diff-panel"
        >
          {c.items.map((item) => (
            <div
              key={item.title}
              className="diff-panel group rounded-xl border border-white/10 bg-brand-navy/70 p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-brand-teal/50 hover:bg-brand-navy/85"
            >
              <span className="inline-flex size-11 items-center justify-center rounded-lg bg-brand-teal/15 text-brand-teal transition-colors group-hover:bg-brand-teal group-hover:text-brand-navy">
                <FeatureIcon name={item.icon} className="size-5" />
              </span>
              <h3 className="mt-5 text-lg font-bold text-white">
                {item.title}
              </h3>
              <span className="mt-2 block h-0.5 w-10 rounded-full bg-brand-teal/70" />
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {item.description}
              </p>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
