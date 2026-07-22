"use client";

import Image from "next/image";
import { useLocale } from "next-intl";
import { ArrowRight } from "lucide-react";

import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { finalCta } from "@/lib/home-content";
import { Reveal } from "@/components/anim/reveal";

const BG = "/images/unsplash-image-2IzNzeJgjcI.jpg";

export function ContactCTA() {
  const locale = useLocale() as Locale;
  const c = finalCta[locale];

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
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-navy/85 via-brand-navy/50 to-brand-navy/20"
      />

      <div className="container-section relative z-10 py-24 md:py-32">
        <Reveal className="max-w-3xl">
          <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
            {c.title}
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/90">
            {c.subtitle}
          </p>
          <Link
            href="/contact"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-brand-teal px-8 py-4 text-sm font-bold uppercase tracking-wide text-brand-navy transition-transform hover:-translate-y-0.5"
          >
            {c.primaryCta}
            <ArrowRight className="size-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
