import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";

import type { Locale } from "@/i18n/routing";
import { privacyPolicy } from "@/lib/legal";
import { LegalPage } from "@/components/legal-page";

export function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Metadata {
  const c = privacyPolicy[locale as Locale] ?? privacyPolicy.en;
  return { title: `${c.title} — EVERA`, description: c.intro };
}

export default function PrivacyPolicyPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);
  const c = privacyPolicy[locale as Locale] ?? privacyPolicy.en;
  return <LegalPage content={c} />;
}
