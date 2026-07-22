"use client";

import { useRef, type ElementType, type ReactNode } from "react";

import { gsap, useGSAP } from "@/lib/gsap";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Vertical offset to animate from (px). */
  y?: number;
  /** Delay before the tween starts (s). */
  delay?: number;
  as?: ElementType;
}

/**
 * Fades + translates a single block into view on scroll (blueprint §7, Pattern 1).
 * Respects prefers-reduced-motion. Cleanup handled by useGSAP.
 */
export function Reveal({
  children,
  className,
  y = 60,
  delay = 0,
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce || !ref.current) return;
      gsap.fromTo(
        ref.current,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay,
          ease: "power3.out",
          scrollTrigger: { trigger: ref.current, start: "top 85%" },
        },
      );
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}

interface StaggerRevealProps {
  children: ReactNode;
  className?: string;
  /** CSS selector for the items to stagger, scoped to this container. */
  itemSelector?: string;
  y?: number;
  stagger?: number;
  as?: ElementType;
}

/**
 * Staggers direct children into view (blueprint §7, Pattern 2).
 * Apply to grids of cards. Items must match `itemSelector`.
 */
export function StaggerReveal({
  children,
  className,
  itemSelector = ":scope > *",
  y = 40,
  stagger = 0.1,
  as: Tag = "div",
}: StaggerRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduce || !ref.current) return;
      const items = ref.current.querySelectorAll(itemSelector);
      if (!items.length) return;
      gsap.fromTo(
        items,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger,
          ease: "power2.out",
          scrollTrigger: { trigger: ref.current, start: "top 80%" },
        },
      );
    },
    { scope: ref },
  );

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
