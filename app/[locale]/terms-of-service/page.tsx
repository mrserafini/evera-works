import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import type { Locale } from "@/i18n/routing";
import { termsOfService } from "@/lib/legal";
import { LegalPage } from "@/components/legal-page";

export function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Metadata {
  const c = termsOfService[locale as Locale] ?? termsOfService.en;
  return { title: `${c.title} — EVERA`, description: c.intro };
}

export default function TermsOfServicePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  const c = termsOfService[locale as Locale] ?? termsOfService.en;
  return <LegalPage content={c} />;
}
