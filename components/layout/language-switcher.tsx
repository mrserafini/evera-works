"use client";

import { useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Globe } from "lucide-react";

import { usePathname, useRouter } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

/**
 * Toggles between EN/ES without a full page reload — next-intl's router
 * swaps the locale segment while preserving the current pathname.
 */
export function LanguageSwitcher({ className }: { className?: string }) {
  const t = useTranslations("nav");
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const next = locale === "en" ? "es" : "en";

  const switchLocale = () => {
    startTransition(() => {
      router.replace(pathname, { locale: next });
    });
  };

  return (
    <button
      type="button"
      onClick={switchLocale}
      disabled={isPending}
      aria-label={next === "es" ? t("switchToSpanish") : t("switchToEnglish")}
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-current/20 px-3 py-1.5 text-sm font-semibold uppercase transition-colors hover:text-brand-teal disabled:opacity-50",
        className,
      )}
    >
      <Globe className="size-4" aria-hidden="true" />
      {next}
    </button>
  );
}
