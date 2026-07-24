import type { Metadata } from "next";
import Image from "next/image";
import { setRequestLocale } from "next-intl/server";

import type { Locale } from "@/i18n/routing";
import { coverage, stats, team } from "@/lib/home-content";
import { DisplayTitle } from "@/components/display-title";
import { Reveal } from "@/components/anim/reveal";
import { Values } from "@/components/sections/values";
import { FaqSplit } from "@/components/sections/faq-split";

export function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Metadata {
  const c = team[locale as Locale] ?? team.en;
  return { title: `${c.title} — EVERA`, description: c.subtitle };
}

export default function AboutPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  const c = team[locale as Locale] ?? team.en;
  // Mirror the home ImpactStats banner, but drop the "11+ years" stat — it's
  // already stated in the story paragraph and the big card stat just above.
  const trustStats = (stats[locale as Locale] ?? stats.en).filter(
    (s) => !s.value.includes("11"),
  );
  // Pull the "Multilingual" item from the home coverage band so the banner
  // reads as three cards instead of a sparse two.
  const multilingual = (coverage[locale as Locale] ?? coverage.en).find((i) =>
    i.value.toLowerCase().includes("multiling"),
  );
  const bannerStats = multilingual
    ? [trustStats[0], multilingual, trustStats[1]]
    : trustStats;

  return (
    <>
      <section className="relative isolate overflow-hidden bg-brand-navy">
        <div className="absolute inset-0 -z-20">
          <Image
            src={c.image}
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-navy/85 via-brand-navy/75 to-brand-navy/90"
        />

        <div className="container-section relative z-10 pb-24 pt-36 md:pt-44">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-brand-teal">
              {c.eyebrow}
            </p>
            <DisplayTitle
              tone="dark"
              title={c.title}
              subtitle={c.subtitle}
              subtitleAccent="EVERA"
              className="mt-4"
            />
          </Reveal>

          <div className="mt-14 grid gap-12 lg:grid-cols-[1.25fr_1fr] lg:gap-16">
            <Reveal>
              <p className="border-l-2 border-brand-teal pl-6 text-lg font-medium leading-relaxed text-white sm:text-xl">
                {c.story[0]}
              </p>
              <p className="mt-6 pl-6 text-base leading-relaxed text-white/70">
                {c.story[1]}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-8 backdrop-blur-md md:p-10">
                <span className="text-7xl font-black leading-none tracking-tight text-brand-teal">
                  {c.stat.value}
                </span>
                <p className="mt-3 text-sm font-semibold uppercase tracking-widest text-white/70">
                  {c.stat.label}
                </p>

                <div className="mt-8 border-t border-white/15 pt-8">
                  <p className="text-sm font-bold uppercase tracking-[0.25em] text-brand-teal">
                    {c.visionLabel}
                  </p>
                  <p className="mt-4 text-base font-medium leading-relaxed text-white/90">
                    {c.vision}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stats band — mirrors the home coverage band's balanced sizing so a word
          value ("Multilingual") sits comfortably beside the numeric stats. */}
      <section className="bg-surface">
        <div className="container-section py-14 md:py-16">
          <div className="grid grid-cols-1 gap-10 text-center sm:grid-cols-3">
            {bannerStats.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center justify-center px-6 text-center"
              >
                <div className="text-balance text-3xl font-black uppercase leading-tight tracking-tight text-brand-navy lg:text-4xl">
                  {item.value}
                </div>
                <div className="mt-3 text-sm font-bold uppercase tracking-widest text-brand-teal-dark">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Values />

      <FaqSplit />

      {/* Ultra-thin white rule dividing the About page from the footer —
          About-only, so the global footer stays untouched elsewhere. */}
      <div className="bg-brand-navy">
        <div className="container-section">
          <div className="h-px w-full bg-white/20" />
        </div>
      </div>
    </>
  );
}
