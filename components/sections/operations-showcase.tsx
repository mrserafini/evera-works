"use client";

import { useRef } from "react";
import { useTranslations } from "next-intl";

import { gsap, useGSAP } from "@/lib/gsap";
import { CountUp } from "@/components/anim/count-up";

const AGENTS = [
  { initials: "MR", name: "María R.", role: "Sales BPO" },
  { initials: "JC", name: "José C.", role: "Tech Support" },
  { initials: "AL", name: "Ana L.", role: "Interpretation" },
];

const WEEK = [
  { day: "Mo", height: "62%" },
  { day: "Tu", height: "78%" },
  { day: "We", height: "54%" },
  { day: "Th", height: "88%" },
  { day: "Fr", height: "100%" },
];

export function OperationsShowcase() {
  const t = useTranslations("home.showcase");
  const section = useRef<HTMLElement>(null);
  const card = useRef<HTMLDivElement>(null);
  const heading = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (reduce || !card.current) return;

      // Flagship: the dashboard rotates from a tilted 3D pose to flat,
      // scrubbed to scroll — communicating "operational visibility".
      gsap.fromTo(
        card.current,
        { rotateX: 26, scale: 0.9, y: 60, opacity: 0.85 },
        {
          rotateX: 0,
          scale: 1,
          y: 0,
          opacity: 1,
          ease: "none",
          scrollTrigger: {
            trigger: section.current,
            start: "top 70%",
            end: "top 15%",
            scrub: 0.6,
            invalidateOnRefresh: true,
          },
        },
      );

      // Subtle parallax lift on the heading.
      gsap.fromTo(
        heading.current,
        { y: 40 },
        {
          y: -20,
          ease: "none",
          scrollTrigger: {
            trigger: section.current,
            start: "top bottom",
            end: "top top",
            scrub: true,
          },
        },
      );
    },
    { scope: section },
  );

  return (
    <section ref={section} className="relative overflow-hidden bg-brand-navy">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/3 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-brand-teal/10 blur-[130px]"
      />
      <div className="container-section relative pb-24 pt-8 md:pb-32">
        <div ref={heading} className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-teal">
            {t("eyebrow")}
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
            {t("subtitle")}
          </p>
        </div>

        {/* 3D stage */}
        <div
          className="mx-auto mt-14 max-w-4xl"
          style={{ perspective: "1400px" }}
        >
          <div
            ref={card}
            style={{ transformStyle: "preserve-3d" }}
            className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_40px_120px_-30px_rgba(0,0,0,0.7)] backdrop-blur"
          >
            {/* Window chrome */}
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-3.5">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="size-3 rounded-full bg-white/20" />
                  <span className="size-3 rounded-full bg-white/20" />
                  <span className="size-3 rounded-full bg-white/20" />
                </div>
                <span className="text-sm font-semibold text-white/80">
                  {t("panelTitle")}
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-teal/15 px-2.5 py-1 text-xs font-medium text-brand-teal">
                <span className="relative flex size-1.5">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand-teal opacity-75" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-brand-teal" />
                </span>
                {t("live")}
              </span>
            </div>

            <div className="grid gap-5 p-5 md:grid-cols-5 md:p-6">
              {/* KPI tiles */}
              <div className="grid grid-cols-2 gap-3 md:col-span-3">
                <Kpi label={t("kpis.resolution")}>
                  <CountUp value={98} suffix="%" onScroll />
                </Kpi>
                <Kpi label={t("kpis.csat")}>
                  <CountUp value={96} suffix="%" onScroll />
                </Kpi>
                <Kpi label={t("kpis.response")}>
                  <span>1m 48s</span>
                </Kpi>
                <Kpi label={t("kpis.agents")}>
                  <CountUp value={24} onScroll />
                </Kpi>

                {/* Weekly throughput */}
                <div className="col-span-2 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-xs text-white/50">{t("chartTitle")}</p>
                  <div className="mt-4 flex h-24 items-end gap-3 px-1">
                    {WEEK.map((d) => (
                      <Bar
                        key={d.day}
                        height={d.height}
                        color="bg-brand-teal/80"
                        caption={d.day}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Team status */}
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 md:col-span-2">
                <p className="text-xs text-white/50">{t("agentsTitle")}</p>
                <ul className="mt-3 space-y-3">
                  {AGENTS.map((a) => (
                    <li key={a.initials} className="flex items-center gap-3">
                      <span className="inline-flex size-9 items-center justify-center rounded-full bg-brand-teal/15 text-xs font-bold text-brand-teal">
                        {a.initials}
                      </span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-medium text-white">
                          {a.name}
                        </p>
                        <p className="truncate text-xs text-white/50">
                          {a.role}
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-[11px] text-white/60">
                        <span className="size-1.5 rounded-full bg-green-400" />
                        {t("online")}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Kpi({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
      <p className="text-xs text-white/50">{label}</p>
      <p className="mt-1.5 text-2xl font-extrabold text-white sm:text-3xl">
        {children}
      </p>
    </div>
  );
}

function Bar({
  height,
  color,
  caption,
}: {
  height: string;
  color: string;
  caption: string;
}) {
  return (
    <div className="flex flex-1 flex-col items-center gap-2">
      <div className="flex h-full w-full items-end">
        <div
          className={`w-full rounded-t-md ${color}`}
          style={{ height }}
        />
      </div>
      <span className="text-[11px] font-medium text-white/60">{caption}</span>
    </div>
  );
}
