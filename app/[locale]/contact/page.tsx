import type { Metadata } from "next";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Globe, Mail } from "lucide-react";

import { siteConfig } from "@/lib/site";
import { ContactForm } from "@/components/forms/contact-form";
import { DisplayTitle } from "@/components/display-title";
import { Reveal } from "@/components/anim/reveal";
import { CapabilitiesMarquee } from "@/components/sections/capabilities-marquee";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "contact.meta" });
  return { title: t("title"), description: t("description") };
}

export default async function ContactPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "contact" });

  return (
    <>
    {/* Same premium treatment as Careers (photo background, form on it — never
        flat white) but a two-column layout + office photo, so the two pages read
        as clearly different at a glance. */}
    <section className="relative isolate overflow-hidden bg-brand-navy">
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/contact-hero.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-navy/90 via-brand-navy/70 to-brand-navy/55"
      />
      {/* Soft left-anchored scrim (same as Careers): lifts the text column off the
          photo, fading to transparent so the image stays visible on the right. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-black/45 via-black/15 to-transparent lg:from-black/40 lg:via-transparent"
      />

      <div className="container-section relative z-10 pb-24 pt-36 md:pt-44">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start lg:gap-16">
          {/* Left — intro + direct contact info */}
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-brand-teal [text-shadow:0_1px_6px_rgba(0,0,0,0.5)]">
              {t("eyebrow")}
            </p>
            <DisplayTitle
              tone="dark"
              title={t("title")}
              className="mt-4 [text-shadow:0_2px_10px_rgba(0,0,0,0.55)]"
            />
            <p className="mt-6 max-w-md text-base leading-relaxed text-white/90 [text-shadow:0_1px_8px_rgba(0,0,0,0.55)] sm:text-lg">
              {t("subtitle")}
            </p>

            <ul className="mt-10 space-y-5">
              <li className="flex items-start gap-4">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg bg-brand-teal/15 text-brand-teal">
                  <Mail className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <div className="text-sm font-semibold uppercase tracking-wider text-white/70 [text-shadow:0_1px_6px_rgba(0,0,0,0.5)]">
                    {t("info.emailLabel")}
                  </div>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-base font-medium text-white transition-colors [text-shadow:0_1px_6px_rgba(0,0,0,0.5)] hover:text-brand-teal"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg bg-brand-teal/15 text-brand-teal">
                  <Globe className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <div className="text-sm font-semibold uppercase tracking-wider text-white/70 [text-shadow:0_1px_6px_rgba(0,0,0,0.5)]">
                    {t("info.locationLabel")}
                  </div>
                  <p className="text-base font-medium text-white [text-shadow:0_1px_6px_rgba(0,0,0,0.5)]">
                    {t("info.location")}
                  </p>
                </div>
              </li>
            </ul>
          </Reveal>

          {/* Right — the form card (slightly transparent, frosted) */}
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-white/15 bg-card/90 p-8 shadow-2xl shadow-black/40 backdrop-blur-xl md:p-10">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </section>

    {/* Moving banner of services */}
    <CapabilitiesMarquee />
    </>
  );
}
