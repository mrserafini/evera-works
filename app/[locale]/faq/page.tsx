import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import type { Locale } from "@/i18n/routing";
import { faq } from "@/lib/home-content";
import { Faq } from "@/components/sections/faq";

export function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Metadata {
  const c = faq[locale as Locale] ?? faq.en;
  return { title: `${c.title} — EVERA`, description: c.title };
}

export default function FaqPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  return <Faq />;
}
