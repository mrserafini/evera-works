"use client";

import { useTranslations } from "next-intl";
import {
  Cpu,
  Home,
  Landmark,
  Scale,
  ShoppingCart,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";

import { SectionHeading } from "@/components/section-heading";
import { Reveal, StaggerReveal } from "@/components/anim/reveal";

const ITEMS: { key: string; Icon: LucideIcon }[] = [
  { key: "healthcare", Icon: Stethoscope },
  { key: "legal", Icon: Scale },
  { key: "ecommerce", Icon: ShoppingCart },
  { key: "realEstate", Icon: Home },
  { key: "tech", Icon: Cpu },
  { key: "finance", Icon: Landmark },
];

export function IndustriesStrip() {
  const t = useTranslations("home.industries");

  return (
    <section className="bg-bg-light">
      <div className="container-section py-20 md:py-28">
        <Reveal>
          <SectionHeading
            eyebrow={t("eyebrow")}
            title={t("title")}
            subtitle={t("subtitle")}
          />
        </Reveal>

        <StaggerReveal
          className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6"
          itemSelector=".industry-item"
        >
          {ITEMS.map(({ key, Icon }) => (
            <div
              key={key}
              className="industry-item flex flex-col items-center gap-3 rounded-xl border border-border bg-surface px-4 py-8 text-center transition-colors hover:border-brand-teal hover:bg-card"
            >
              <Icon className="size-8 text-brand-teal-dark" aria-hidden="true" />
              <span className="text-sm font-semibold text-brand-navy">
                {t(`items.${key}`)}
              </span>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
