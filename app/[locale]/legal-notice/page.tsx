import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import type { Locale } from "@/i18n/routing";
import { legalNotice } from "@/lib/legal";
import { LegalPage } from "@/components/legal-page";

export function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Metadata {
  const c = legalNotice[locale as Locale] ?? legalNotice.en;
  return { title: `${c.title} — EVERA`, description: c.intro };
}

export default function LegalNoticePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  const c = legalNotice[locale as Locale] ?? legalNotice.en;
  return <LegalPage content={c} />;
}
