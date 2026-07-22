import type { Metadata } from "next";
import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
import { Check } from "lucide-react";

import type { Locale } from "@/i18n/routing";
import { careers, careersPage } from "@/lib/home-content";
import { DisplayTitle } from "@/components/display-title";
import { Reveal } from "@/components/anim/reveal";
import { CareersForm } from "@/components/forms/careers-form";

export function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Metadata {
  const c = careersPage[locale as Locale] ?? careersPage.en;
  return { title: c.title, description: c.intro };
}

export default function CareersPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  const h = careers[locale as Locale] ?? careers.en;

  return (
    // Structured like the Contact section: two columns on a photo background,
    // intro + benefits on the left and the form card on the right.
    <section className="relative isolate overflow-hidden bg-brand-navy">
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/careers-hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      {/* Brand-blue wash: navy anchor at the top (behind the transparent nav +
          text column) blending down to the brand light-blue (brand-teal). */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-navy/88 via-brand-teal-dark/62 to-brand-teal/55"
      />
      {/* Soft left-anchored scrim: adds legibility behind the text column only,
          fading to transparent so the photo stays bright on the right. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-black/45 via-black/15 to-transparent lg:from-black/40 lg:via-transparent"
      />

      <div className="container-section relative z-10 pb-24 pt-36 md:pt-44">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          {/* Left — intro + benefits */}
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-brand-teal [text-shadow:0_1px_6px_rgba(0,0,0,0.5)]">
              {h.eyebrow}
            </p>
            <DisplayTitle
              tone="dark"
              title={h.title}
              className="mt-4 [text-shadow:0_2px_10px_rgba(0,0,0,0.55)]"
            />
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/90 [text-shadow:0_1px_8px_rgba(0,0,0,0.55)] sm:text-lg">
              {h.text}
            </p>
            <ul className="mt-8 space-y-3">
              {h.bullets.map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <span className="inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-teal text-brand-navy">
                    <Check className="size-3.5" aria-hidden="true" />
                  </span>
                  <span className="text-sm text-white/90 [text-shadow:0_1px_6px_rgba(0,0,0,0.5)]">
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Right — the application form card (slightly transparent, frosted) */}
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-white/15 bg-card/90 p-8 shadow-2xl shadow-black/40 backdrop-blur-xl md:p-10">
              <CareersForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
