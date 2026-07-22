import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { services } from "@/lib/services-data";
import { PageHero } from "@/components/page-hero";
import { ServiceCards } from "@/components/sections/service-cards";
import { ContactCTA } from "@/components/sections/contact-cta";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "services.meta" });
  return { title: t("title"), description: t("description") };
}

export default async function ServicesPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "services.overview" });

  return (
    <>
      <PageHero
        eyebrow={t("eyebrow")}
        title={t("title")}
        subtitle={t("subtitle")}
      />
      <section className="bg-bg-light">
        <div className="container-section py-20 md:py-24">
          <ServiceCards items={services} />
        </div>
      </section>
      <ContactCTA />
    </>
  );
}
