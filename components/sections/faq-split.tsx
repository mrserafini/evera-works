"use client";

import { useLocale } from "next-intl";
import { Plus } from "lucide-react";

import type { Locale } from "@/i18n/routing";
import { faq } from "@/lib/home-content";
import { DisplayTitle } from "@/components/display-title";
import { Reveal } from "@/components/anim/reveal";

/**
 * Two-column FAQ used on the About page: the display heading sits on the left
 * (top-aligned, same pattern as the Contact page), with the accordion widget
 * beside it on the right. Plain navy background to match the Values section.
 */
export function FaqSplit() {
  const locale = useLocale() as Locale;
  const c = faq[locale];

  return (
    <section className="bg-brand-navy">
      <div className="container-section pb-20 pt-6 md:pb-28 md:pt-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          {/* Left — eyebrow, two-line heading, short intro */}
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-brand-teal">
              {c.eyebrow}
            </p>
            <DisplayTitle tone="dark" title={c.heading} className="mt-4" />
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/70 sm:text-lg">
              {c.intro}
            </p>
          </Reveal>

          {/* Right — the accordion widget */}
          <Reveal delay={0.1}>
            <div className="divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
              {c.items.map((item) => (
                <details key={item.q} className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left text-base font-semibold text-white transition-colors hover:text-brand-teal [&::-webkit-details-marker]:hidden">
                    {item.q}
                    <Plus className="size-5 shrink-0 text-brand-teal transition-transform duration-300 group-open:rotate-45" />
                  </summary>
                  <div className="px-6 pb-5 text-sm leading-relaxed text-white/65">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
