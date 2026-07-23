"use client";

import { useRef } from "react";
import Image from "next/image";
import { useLocale } from "next-intl";
import { ArrowRight } from "lucide-react";

import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { hero } from "@/lib/home-content";
import { gsap, useGSAP } from "@/lib/gsap";

export function Hero() {
  const locale = useLocale() as Locale;
  const c = hero[locale];
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      if (!reduce) {
        gsap
          .timeline({ defaults: { ease: "power4.out" } })
          .from(".hero-line", {
            yPercent: 110,
            opacity: 0,
            duration: 1,
            stagger: 0.12,
          })
          .from(
            ".hero-fade",
            { opacity: 0, y: 24, duration: 0.7, stagger: 0.12 },
            "-=0.4",
          );

        // Slow scroll parallax on the background.
        gsap.to(".hero-bg", {
          yPercent: 12,
          scale: 1.1,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });

        // Cursor parallax on the background image (client's Parallax FX).
        if (root.current && window.matchMedia("(pointer: fine)").matches) {
          const setX = gsap.quickTo(".hero-bg", "x", { duration: 1, ease: "power3" });
          const setY = gsap.quickTo(".hero-bg", "y", { duration: 1, ease: "power3" });
          const onMove = (e: PointerEvent) => {
            const r = root.current!.getBoundingClientRect();
            setX(((e.clientX - r.left) / r.width - 0.5) * -34);
            setY(((e.clientY - r.top) / r.height - 0.5) * -34);
          };
          root.current.addEventListener("pointermove", onMove);
          return () => root.current?.removeEventListener("pointermove", onMove);
        }
      }
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      className="relative isolate flex min-h-screen flex-col justify-end overflow-hidden bg-brand-navy"
    >
      <div className="hero-bg absolute inset-0 -z-20 scale-105">
        <Image
          src={c.image}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      {/* Fade filter — same strength as the "Start the Conversation" band. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-teal-dark/40 via-brand-navy/50 to-brand-navy/60 mix-blend-multiply"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-brand-navy/65 via-transparent to-brand-navy/20"
      />

      <div className="container-section relative z-10 pb-14 pt-40 md:pb-20">
        {/* Headline — smaller now, so "PARTNER." ends before the page center.
            Base is text-4xl so long words never overflow narrow phones. */}
        <h1 className="text-4xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-[5rem]">
          <span className="block overflow-hidden">
            <span className="hero-line block">{c.titleLead}</span>
          </span>
          <span className="block overflow-hidden">
            <span className="hero-line block">{c.titleHighlight}</span>
          </span>
        </h1>

        {/* Bottom band — subtitle + CTA on the left, "WE … GLOBALLY" on the right.
            Sits close under the headline (small gap). */}
        <div className="mt-1 flex flex-col gap-10 lg:mt-1.5 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <div className="hero-fade max-w-xl">
            <p className="text-lg font-semibold leading-snug text-white/90 sm:text-xl">
              {c.subtitle}
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-brand-teal px-8 py-4 text-sm font-bold uppercase tracking-wide text-white transition-transform hover:-translate-y-0.5"
            >
              {c.ctaLabel}
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="hero-fade shrink-0 text-left">
            {/* WE — same size as GLOBALLY */}
            <p className="text-4xl font-black uppercase leading-none tracking-tight text-white sm:text-7xl">
              {c.weLead}
            </p>
            {/* pillars — larger, more prominent */}
            <p className="my-2 text-base font-bold uppercase tracking-wide text-brand-teal sm:text-xl">
              {c.wePillars}
            </p>
            <p className="text-4xl font-black uppercase leading-none tracking-tight text-white sm:text-7xl">
              {c.weGlobally}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
