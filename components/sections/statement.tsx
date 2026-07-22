"use client";

import Image from "next/image";
import { useLocale } from "next-intl";
import { ArrowRight } from "lucide-react";

import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { statement } from "@/lib/home-content";
import { Reveal } from "@/components/anim/reveal";

export function Statement() {
  const locale = useLocale() as Locale;
  const c = statement[locale];

  return (
    <section className="relative isolate overflow-hidden bg-brand-navy">
      {/* Background photo with teal wash (continues from the hero). */}
      <div className="absolute inset-0 -z-20">
        <Image
          src={c.image}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-teal-dark/90 via-brand-navy/85 to-brand-navy/95 mix-blend-multiply"
      />
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-brand-navy/40" />

      {/* Giant watermark word — centered so it never clips awkwardly. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/2 -z-0 -translate-y-1/2 select-none text-center text-[clamp(8rem,26vw,22rem)] font-black uppercase leading-none tracking-tighter text-white/[0.08]"
      >
        {c.watermark}
      </span>

      <div className="container-section relative z-10 grid gap-12 py-24 md:py-32 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-brand-teal">
            {c.label}
          </p>
          <p className="mt-6 max-w-md text-2xl font-bold uppercase leading-tight tracking-tight text-white sm:text-3xl">
            {c.text}
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-brand-teal px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-brand-teal transition-colors hover:bg-brand-teal hover:text-brand-navy"
          >
            {c.cta}
            <ArrowRight className="size-4" />
          </Link>
        </Reveal>

        <Reveal delay={0.1} className="min-w-0 lg:text-right">
          {/* Fluid size: always fits the column, never clips at the viewport edge. */}
          <p className="text-[clamp(2.5rem,6.5vw,5.5rem)] font-black uppercase leading-none tracking-tight text-brand-teal">
            {c.bigWord}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
