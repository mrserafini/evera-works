"use client";

import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useLocale } from "next-intl";
import { CheckCircle2, FileText, Loader2, Send, Upload } from "lucide-react";

import type { Locale } from "@/i18n/routing";
import { careersPage } from "@/lib/home-content";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

type Status = "idle" | "loading" | "success" | "error";

const MAX_CV_BYTES = 5 * 1024 * 1024;
const ALLOWED_CV_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

export function CareersForm() {
  const locale = useLocale() as Locale;
  const c = careersPage[locale];

  const [status, setStatus] = useState<Status>("idle");
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [cvError, setCvError] = useState<string | null>(null);
  const fileInput = useRef<HTMLInputElement>(null);

  const schema = z.object({
    name: z.string().min(2, { message: c.validation.name }),
    email: z.string().email({ message: c.validation.email }),
    phone: z.string().optional(),
    role: z.string().min(1, { message: c.validation.role }),
    message: z.string().optional(),
    company_website: z.string().optional(),
  });
  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const validateCv = (file: File | null): string | null => {
    if (!file) return c.validation.cvRequired;
    if (!ALLOWED_CV_TYPES.has(file.type)) return c.validation.cvType;
    if (file.size > MAX_CV_BYTES) return c.validation.cvSize;
    return null;
  };

  const onFileChange = (file: File | null) => {
    setCvFile(file);
    setCvError(file ? validateCv(file) : null);
  };

  const onSubmit = async (data: FormData) => {
    const err = validateCv(cvFile);
    if (err) {
      setCvError(err);
      return;
    }
    setStatus("loading");
    try {
      const body = new FormData();
      body.append("name", data.name);
      body.append("email", data.email);
      if (data.phone) body.append("phone", data.phone);
      body.append("role", data.role);
      if (data.message) body.append("message", data.message);
      if (data.company_website)
        body.append("company_website", data.company_website);
      body.append("cv", cvFile as File);

      const res = await fetch("/api/careers", { method: "POST", body });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 rounded-xl border border-success/30 bg-success/5 p-10 text-center">
        <CheckCircle2 className="size-12 text-success" />
        <p className="text-base font-medium text-brand-navy">
          {c.form.success}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      {/* Honeypot — hidden from real users. */}
      <div
        aria-hidden
        className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden"
      >
        <label htmlFor="careers_company_website">Company website</label>
        <input
          id="careers_company_website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("company_website")}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">{c.form.name}</Label>
          <Input
            id="name"
            placeholder={c.form.namePlaceholder}
            aria-invalid={!!errors.name}
            {...register("name")}
          />
          {errors.name?.message ? (
            <p className="text-sm text-destructive">{errors.name.message}</p>
          ) : null}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">{c.form.email}</Label>
          <Input
            id="email"
            type="email"
            placeholder={c.form.emailPlaceholder}
            aria-invalid={!!errors.email}
            {...register("email")}
          />
          {errors.email?.message ? (
            <p className="text-sm text-destructive">{errors.email.message}</p>
          ) : null}
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="phone">{c.form.phone}</Label>
          <Input
            id="phone"
            type="tel"
            placeholder={c.form.phonePlaceholder}
            {...register("phone")}
          />
        </div>
      </div>

      {/* Role — full width (matches the Contact form's service select) so the
          long "Open Application…" label isn't clipped in a half-width column. */}
      <div className="space-y-2">
        <Label htmlFor="role">{c.form.role}</Label>
        <select
          id="role"
          defaultValue={c.openRole}
          aria-invalid={!!errors.role}
          {...register("role")}
          className="flex h-11 w-full rounded-lg border border-input bg-card px-3.5 py-2 text-sm text-brand-navy transition-colors focus-visible:border-brand-teal focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal/40"
        >
          <option value={c.openRole}>{c.openRole}</option>
          {c.roles.map((r) => (
            <option key={r} value={r}>
              {r}
            </option>
          ))}
        </select>
        <p className="text-xs leading-relaxed text-text-muted">
          {c.form.roleHint}
        </p>
        {errors.role?.message ? (
          <p className="text-sm text-destructive">{errors.role.message}</p>
        ) : null}
      </div>

      {/* CV upload */}
      <div className="space-y-2">
        <Label htmlFor="cv">{c.form.cv}</Label>
        <input
          ref={fileInput}
          id="cv"
          type="file"
          accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
          className="sr-only"
          onChange={(e) => onFileChange(e.target.files?.[0] ?? null)}
        />
        <button
          type="button"
          onClick={() => fileInput.current?.click()}
          className={`flex w-full flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed px-6 py-8 text-center transition-colors ${
            cvError
              ? "border-destructive/50 bg-destructive/5"
              : cvFile
                ? "border-brand-teal bg-brand-teal/5"
                : "border-border bg-bg-light hover:border-brand-teal hover:bg-brand-teal/5"
          }`}
        >
          {cvFile ? (
            <>
              <FileText className="size-7 text-brand-teal-dark" />
              <span className="text-sm font-medium text-brand-navy">
                {c.form.cvSelected} {cvFile.name}
              </span>
            </>
          ) : (
            <>
              <Upload className="size-7 text-text-muted" />
              <span className="text-sm font-medium text-brand-navy">
                {c.form.cv}
              </span>
            </>
          )}
          <span className="text-xs text-text-muted">{c.form.cvHint}</span>
        </button>
        {cvError ? (
          <p className="text-sm text-destructive">{cvError}</p>
        ) : null}
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">{c.form.message}</Label>
        <Textarea
          id="message"
          placeholder={c.form.messagePlaceholder}
          {...register("message")}
        />
      </div>

      {status === "error" ? (
        <p className="rounded-lg border border-destructive/30 bg-destructive/5 px-4 py-3 text-sm text-destructive">
          {c.form.error}
        </p>
      ) : null}

      <Button type="submit" size="lg" disabled={status === "loading"}>
        {status === "loading" ? (
          <>
            <Loader2 className="size-4 animate-spin" />
            {c.form.submitting}
          </>
        ) : (
          <>
            <Send className="size-4" />
            {c.form.submit}
          </>
        )}
      </Button>
    </form>
  );
}
