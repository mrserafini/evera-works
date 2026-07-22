import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "es"],
  defaultLocale: "en",
  // Always prefix the URL with the locale: /en/..., /es/...
  localePrefix: "always",
});

export type Locale = (typeof routing.locales)[number];
