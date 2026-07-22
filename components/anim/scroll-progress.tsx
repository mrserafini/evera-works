"use client";

import { useRef } from "react";

import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

/**
 * Thin teal progress bar fixed to the top of the viewport, scrubbed to the
 * full page scroll. A subtle "vanguard" cue that the page is alive.
 */
export function ScrollProgress() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!ref.current) return;
    gsap.set(ref.current, { scaleX: 0, transformOrigin: "left center" });
    gsap.to(ref.current, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        start: 0,
        end: () => ScrollTrigger.maxScroll(window),
        scrub: 0.3,
        invalidateOnRefresh: true,
      },
    });
  });

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-brand-teal"
    />
  );
}
