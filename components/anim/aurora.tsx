"use client";

import { useRef } from "react";

import { cn } from "@/lib/utils";
import { gsap, useGSAP } from "@/lib/gsap";

/**
 * Animated gradient "aurora" — slow-drifting teal blobs behind dark sections.
 * A professional take on Squarespace's BackgroundGradient / RefractedCircles FX.
 * Purely decorative; respects prefers-reduced-motion.
 */
export function Aurora({
  className,
  intensity = 1,
}: {
  className?: string;
  intensity?: number;
}) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (reduce || !root.current) return;
      const blobs = root.current.querySelectorAll<HTMLElement>(".aurora-blob");
      blobs.forEach((blob, i) => {
        gsap.to(blob, {
          xPercent: gsap.utils.random(-18, 18),
          yPercent: gsap.utils.random(-18, 18),
          scale: gsap.utils.random(0.9, 1.25),
          duration: gsap.utils.random(9, 14),
          delay: i * 0.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    },
    { scope: root },
  );

  return (
    <div
      ref={root}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 -z-0 overflow-hidden",
        className,
      )}
      style={{ opacity: intensity }}
    >
      <div className="aurora-blob absolute -left-24 top-0 h-[30rem] w-[30rem] rounded-full bg-brand-teal/20 blur-[120px]" />
      <div className="aurora-blob absolute right-0 top-1/3 h-[26rem] w-[26rem] rounded-full bg-brand-teal/10 blur-[130px]" />
      <div className="aurora-blob absolute bottom-0 left-1/3 h-[28rem] w-[28rem] rounded-full bg-brand-teal/10 blur-[140px]" />
    </div>
  );
}
