import { z } from "zod";

export interface ContactMessages {
  name: string;
  email: string;
  company: string;
  message: string;
}

const DEFAULT_MESSAGES: ContactMessages = {
  name: "Please enter your name (at least 2 characters).",
  email: "Please enter a valid email address.",
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
    email: z.string().email({ message: messages.email }),
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
