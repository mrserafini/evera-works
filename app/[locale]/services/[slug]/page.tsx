import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ArrowRight, Check } from "lucide-react";

import { Link } from "@/i18n/navigation";
import type { Locale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import { getService, services } from "@/lib/services-data";
import { buttonVariants } from "@/components/ui/button";
import { ServiceIcon } from "@/components/service-icon";
import { Reveal, StaggerReveal } from "@/components/anim/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ContactCTA } from "@/components/sections/contact-cta";

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    services.map((s) => ({ locale, slug: s.slug })),
  );
}

export async function generateMetadata({
  params: { locale, slug },
}: {
  params: { locale: string; slug: string };
}): Promise<Metadata> {
  const service = getService(slug);
  if (!service) return {};
  const c = service.i18n[locale as Locale];
  return { title: c.title, description: c.description };
}

export default async function ServiceDetailPage({
  params: { locale, slug },
}: {
  params: { locale: string; slug: string };
}) {
  setRequestLocale(locale);
  const service = getService(slug);
  if (!service) notFound();

  const c = service.i18n[locale as Locale];
  const t = await getTranslations({ locale, namespace: "services.detail" });

  return (
    <>
      {/* Service hero (dark) */}
      <section className="relative overflow-hidden bg-brand-navy">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-brand-teal/15 blur-[110px]"
        />
        <div className="container-section relative pb-16 pt-32 md:pb-20 md:pt-44">
          <span className="inline-flex size-14 items-center justify-center rounded-xl bg-brand-teal/10 text-brand-teal [&_svg]:size-7">
            <ServiceIcon name={service.icon} />
          </span>
          <p className="mt-6 text-sm font-semibold uppercase tracking-widest text-brand-teal">
            {c.tagline}
          </p>
          <h1 className="mt-3 max-w-3xl text-balance text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            {c.title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
            {c.description}
          </p>
          <div className="mt-8">
            <Link href="/contact" className={buttonVariants({ size: "lg" })}>
              {t("cta")}
              <ArrowRight className="size-4" />
            </Link>
          </div>

          {/* Metrics strip */}
          <div className="mt-12 grid max-w-2xl grid-cols-3 gap-4 border-t border-white/10 pt-8">
            {c.metrics.map((m) => (
              <div key={m.label}>
                <div className="text-2xl font-extrabold text-brand-teal sm:text-3xl">
                  {m.value}
                </div>
                <div className="mt-1 text-xs text-white/60">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain points (light) */}
      <section className="bg-bg-light">
        <div className="container-section py-20 md:py-24">
          <Reveal>
            <SectionHeading
              align="left"
              title={t("painPointsTitle")}
              className="mx-0"
            />
          </Reveal>
          <StaggerReveal
            className="mt-10 grid gap-4 sm:grid-cols-3"
            itemSelector=".pain-item"
          >
            {c.painPoints.map((p) => (
              <div
                key={p}
                className="pain-item flex gap-3 rounded-xl border border-border bg-card p-6"
              >
                <Check className="mt-0.5 size-5 shrink-0 text-brand-teal-dark" />
                <p className="text-sm leading-relaxed text-brand-navy">{p}</p>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      {/* How it works (dark) */}
      <section className="bg-brand-navy">
        <div className="container-section py-20 md:py-24">
          <Reveal>
            <SectionHeading
              tone="dark"
              align="left"
              title={t("howItWorksTitle")}
              className="mx-0"
            />
          </Reveal>
          <StaggerReveal
            className="mt-10 grid gap-6 md:grid-cols-3"
            itemSelector=".step-item"
          >
            {c.howItWorks.map((step, i) => (
              <div
                key={step.title}
                className="step-item rounded-xl border border-white/10 bg-white/[0.03] p-7"
              >
                <span className="inline-flex size-10 items-center justify-center rounded-full bg-brand-teal text-sm font-bold text-brand-navy">
                  {i + 1}
                </span>
                <h3 className="mt-5 text-lg font-semibold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
                  {step.description}
                </p>
              </div>
            ))}
          </StaggerReveal>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
