"use client";

import { useRef } from "react";

import { gsap, useGSAP } from "@/lib/gsap";

interface CountUpProps {
  /** Target value to count up to. */
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
  /** Re-run the tween whenever this key changes (e.g. recalculated values). */
  resyncKey?: number | string;
  /** Animate on scroll into view (true) or immediately on mount/update (false). */
  onScroll?: boolean;
}

const format = (n: number) =>
  Math.round(n).toLocaleString("en-US");

/**
 * Animated number counter (blueprint §7, Pattern 3).
 * Respects prefers-reduced-motion. Used for ROI result figures.
 */
export function CountUp({
  value,
  prefix = "",
  suffix = "",
  duration = 1.4,
  className,
  resyncKey,
  onScroll = false,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (reduce) {
        el.textContent = `${prefix}${format(value)}${suffix}`;
        return;
      }
      const obj = { val: 0 };
      gsap.to(obj, {
        val: value,
        duration,
        ease: "power2.out",
        snap: { val: 1 },
        ...(onScroll
          ? { scrollTrigger: { trigger: el, start: "top 90%", once: true } }
          : {}),
        onUpdate() {
          el.textContent = `${prefix}${format(obj.val)}${suffix}`;
        },
      });
    },
    { dependencies: [value, resyncKey], scope: ref, revertOnUpdate: true },
  );

  return (
    <span ref={ref} className={className}>
      {`${prefix}${format(value)}${suffix}`}
    </span>
  );
}
