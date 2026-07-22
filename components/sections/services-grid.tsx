"use client";

import { useTranslations } from "next-intl";

import { services } from "@/lib/services-data";
import { SectionHeading } from "@/components/section-heading";
import { Reveal } from "@/components/anim/reveal";
import { ServiceCards } from "./service-cards";

export function ServicesGrid() {
  const t = useTranslations("home.services");

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
        <div className="mt-14">
          <ServiceCards items={services} />
        </div>
      </div>
    </section>
  );
}
