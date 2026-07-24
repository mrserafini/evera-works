import { setRequestLocale } from "next-intl/server";

import { Hero } from "@/components/sections/hero";
import { Differentiators } from "@/components/sections/differentiators";
import { CoverageBand } from "@/components/sections/coverage-band";
import { ServicesShowcase } from "@/components/sections/services-showcase";
import { ImpactStats } from "@/components/sections/impact-stats";
import { WhyEvera } from "@/components/sections/why-evera";
import { CapabilitiesMarquee } from "@/components/sections/capabilities-marquee";
import { ContactCTA } from "@/components/sections/contact-cta";

export default function HomePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  return (
    <>
      <Hero />
      <Differentiators />
      <CoverageBand />
      <ServicesShowcase />
      <ImpactStats />
      <WhyEvera />
      <CapabilitiesMarquee tone="white" />
      <ContactCTA />
    </>
  );
}
