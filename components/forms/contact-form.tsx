"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocale, useTranslations } from "next-intl";
import { CheckCircle2, Loader2, Send } from "lucide-react";

import type { Locale } from "@/i18n/routing";
import { homeServices } from "@/lib/home-content";
import { buildContactSchema, type ContactFormData } from "@/lib/validations";
import { checkEmail } from "@/lib/email";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const t = useTranslations("contact");
  const locale = useLocale() as Locale;
  const [status, setStatus] = useState<Status>("idle");

  const schema = buildContactSchema({
    name: t("validation.name"),
    email: t("validation.email"),
    emailTypo: (suggestion) => t("validation.emailTypo", { suggestion }),
    company: t("validation.company"),
    message: t("validation.message"),
  });

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(schema),
    // Validate on blur (and re-check on change) so a bad email is flagged
    // before the user tries to submit.
    mode: "onTouched",
  });

  // Live "looks valid" indicator for the email field.
  const emailValue = watch("email");
  const emailValid = !!emailValue && checkEmail(emailValue).ok;

  const onSubmit = async (data: ContactFormData) => {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // Send the current page locale so the confirmation email is localized.
        body: JSON.stringify({ ...data, locale }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-xl border border-success/30 bg-success/5 p-10 text-center">
        <CheckCircle2 className="size-12 text-success" />
        <p className="text-base font-medium text-brand-navy">
          {t("states.success")}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Honeypot — hidden from real users; bots that fill it get silently dropped. */}
      <div aria-hidden className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="company_website">Company website</label>
        <input
          id="company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("company_website")}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          id="name"
          label={t("form.name")}
          placeholder={t("form.namePlaceholder")}
          error={errors.name?.message}
          register={register("name")}
        />
        <Field
          id="email"
          type="email"
          label={t("form.email")}
          placeholder={t("form.emailPlaceholder")}
          error={errors.email?.message}
          valid={emailValid}
          inputMode="email"
          autoComplete="email"
          register={register("email")}
        />
        <Field
          id="company"
          label={t("form.company")}
          placeholder={t("form.companyPlaceholder")}
          error={errors.company?.message}
          register={register("company")}
        />
        <Field
          id="phone"
          type="tel"
          label={t("form.phone")}
          placeholder={t("form.phonePlaceholder")}
          register={register("phone")}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="service">{t("form.service")}</Label>
        <select
          id="service"
          defaultValue=""
          {...register("service")}
          className="flex h-11 w-full rounded-lg border border-input bg-card px-3.5 py-2 text-sm text-brand-navy transition-colors focus-visible:border-brand-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal/40"
        >
          <option value="" disabled>
            {t("form.servicePlaceholder")}
          </option>
          <option value={t("form.serviceOpen")}>{t("form.serviceOpen")}</option>
          {homeServices[locale].map((s) => (
            <option key={s.title} value={s.title}>
              {s.title}
            </option>
          ))}
        </select>
        <p className="text-xs leading-relaxed text-text-muted">
          {t("form.serviceOpenHint")}
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">{t("form.message")}</Label>
        <Textarea
          id="message"
          placeholder={t("form.messagePlaceholder")}
          aria-invalid={!!errors.message}
          {...register("message")}
        />
        {errors.message?.message ? (
          <p className="text-sm text-destructive">{errors.message.message}</p>
        ) : null}
      </div>

      {status === "error" ? (
        <p className="rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">
          {t("states.error")}
        </p>
      ) : null}

      <Button type="submit" size="lg" disabled={status === "loading"}>
        {status === "loading" ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            {t("form.submitting")}
          </>
        ) : (
          <>
            <Send className="size-4" />
            {t("form.submit")}
          </>
        )}
      </Button>
    </form>
  );
}

function Field({
  id,
  label,
  placeholder,
  type = "text",
  error,
  valid,
  inputMode,
  autoComplete,
  register,
}: {
  id: string;
  label: string;
  placeholder?: string;
  type?: string;
  error?: string;
  /** When true (and no error), shows a check icon confirming the value looks valid. */
  valid?: boolean;
  inputMode?: "email" | "text" | "tel";
  autoComplete?: string;
  register: ReturnType<ReturnType<typeof useForm>["register"]>;
}) {
  const showValid = valid && !error;
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      <div className="relative">
        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          aria-invalid={!!error}
          inputMode={inputMode}
          autoComplete={autoComplete}
          className={showValid ? "pr-10" : undefined}
          {...register}
        />
        {showValid ? (
          <CheckCircle2
            aria-hidden="true"
            className="pointer-events-none absolute right-3 top-1/2 size-5 -translate-y-1/2 text-success"
          />
        ) : null}
      </div>
      {error ? <p className="text-sm text-destructive">{error}</p> : null}
    </div>
  );
}
