import { z } from "zod";

import { checkEmail } from "./email";

export interface EmailMessages {
  /** Shown for malformed addresses. */
  invalid: string;
  /** Shown for likely typos; receives the suggested correction. */
  typo: (suggestion: string) => string;
}

/**
 * A strict email field: proper syntax + a typo guard (see `lib/email.ts`).
 * Trims input so a stray space never invalidates an otherwise-correct address.
 */
export function emailSchema(messages: EmailMessages) {
  return z
    .string()
    .trim()
    .superRefine((val, ctx) => {
      const res = checkEmail(val);
      if (res.ok) return;
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: res.kind === "typo" ? messages.typo(res.suggestion) : messages.invalid,
      });
    });
}

export interface ContactMessages {
  name: string;
  email: string;
  emailTypo: (suggestion: string) => string;
  company: string;
  message: string;
}

const DEFAULT_MESSAGES: ContactMessages = {
  name: "Please enter your name (at least 2 characters).",
  email: "Please enter a valid email address.",
  emailTypo: (s) => `Did you mean ${s}? Please double-check your email address.`,
  company: "Please enter your company name.",
  message: "Please add a short message (at least 10 characters).",
};

/**
 * Builds the contact form schema. Pass localized messages on the client (from
 * next-intl) for translated validation errors; the API uses the defaults.
 */
export function buildContactSchema(messages: ContactMessages = DEFAULT_MESSAGES) {
  return z.object({
    name: z.string().min(2, { message: messages.name }),
    email: emailSchema({ invalid: messages.email, typo: messages.emailTypo }),
    company: z.string().min(1, { message: messages.company }),
    phone: z.string().optional(),
    service: z.string().optional(),
    message: z.string().min(10, { message: messages.message }),
    // Page locale, used to localize the confirmation email. The API falls back
    // to the default locale when absent (kept optional so form input/output
    // types match for react-hook-form).
    locale: z.enum(["en", "es"]).optional(),
    // Honeypot: real users never see or fill this; bots do. Must stay empty.
    company_website: z.string().optional(),
  });
}

export const contactSchema = buildContactSchema();

export type ContactFormData = z.infer<typeof contactSchema>;
