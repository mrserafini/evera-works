"use client";

import { useRef } from "react";
import { useLocale } from "next-intl";

import type { Locale } from "@/i18n/routing";
import { capabilities } from "@/lib/home-content";
import { gsap, useGSAP } from "@/lib/gsap";

export function CapabilitiesMarquee() {
  const locale = useLocale() as Locale;
  const items = capabilities[locale];
  const track = useRef<HTMLDivElement>(null);

  // Duplicate the list so the loop is seamless.
  const sequence = [...items, ...items];

  useGSAP(
    () => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (reduce || !track.current) return;
      const tween = gsap.to(track.current, {
        xPercent: -50,
        repeat: -1,
        duration: 45,
        ease: "none",
      });
      const el = track.current;
      const pause = () => tween.timeScale(0.15);
      const resume = () => tween.timeScale(1);
      el.addEventListener("pointerenter", pause);
      el.addEventListener("pointerleave", resume);
      return () => {
        el.removeEventListener("pointerenter", pause);
        el.removeEventListener("pointerleave", resume);
      };
    },
    { scope: track },
  );

  return (
    <section className="overflow-hidden bg-brand-teal py-5">
      <div
        ref={track}
        className="flex w-max flex-nowrap items-center whitespace-nowrap"
      >
        {sequence.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center">
            <span className="px-6 text-lg font-bold uppercase tracking-wide text-brand-navy sm:text-xl">
              {item}
            </span>
            <span className="text-brand-navy/40">·</span>
          </span>
        ))}
      </div>
    </section>
  );
}
