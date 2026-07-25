import { Resend } from "resend";
import { getTranslations } from "next-intl/server";

import type { Locale } from "@/i18n/routing";
import { routing } from "@/i18n/routing";
import type { ContactFormData } from "./validations";

const apiKey = process.env.RESEND_API_KEY;
const contactEmail = process.env.CONTACT_EMAIL;

// Absolute base URL for images in emails (mail clients can't load relative paths).
// Falls back to the production domain — never a Vercel preview URL.
const siteUrl = (process.env.SITE_URL || "https://everaworksbpo.com").replace(
  /\/$/,
  "",
);

// Sender identities (both must be on the verified everapartner.com domain).
const FROM_NOTIFICATION = "EVERA Website <website@everapartner.com>";
const FROM_CONFIRMATION = "EVERA <hello@everapartner.com>";
const REPLY_TO_CONFIRMATION = "hello@everapartner.com";

// Instantiate lazily so a missing key doesn't crash module load at build time.
const resend = apiKey ? new Resend(apiKey) : null;

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

/** Send a single email and surface Resend API errors as thrown exceptions. */
async function send(payload: Parameters<Resend["emails"]["send"]>[0]) {
  if (!resend) throw new Error("Resend is not configured.");
  const { data, error } = await resend.emails.send(payload);
  if (error) throw new Error(error.message);
  return data;
}

/** Internal notification to the EVERA inbox (English — for the team). */
function notificationHtml(data: ContactFormData) {
  const rows: [string, string][] = [
    ["Name", data.name],
    ["Email", data.email],
    ["Company", data.company],
    ["Phone", data.phone || "N/A"],
    ["Service", data.service || "N/A"],
    ["Message", data.message || "N/A"],
  ];

  return `
    <div style="font-family:Inter,Arial,sans-serif;max-width:560px;margin:0 auto;color:#0B1628">
      <h2 style="color:#0B1628;border-bottom:3px solid #00B5D4;padding-bottom:8px">
        New contact from ${escapeHtml(data.company)}
      </h2>
      <table style="width:100%;border-collapse:collapse;font-size:14px">
        ${rows
          .map(
            ([label, value]) => `
          <tr>
            <td style="padding:8px 12px;background:#F8FAFC;font-weight:600;width:120px;vertical-align:top">${label}</td>
            <td style="padding:8px 12px;white-space:pre-wrap">${escapeHtml(value)}</td>
          </tr>`,
          )
          .join("")}
      </table>
    </div>
  `;
}

/** Branded, localized confirmation sent to the person who filled the form. */
async function confirmationEmail(data: ContactFormData, locale: Locale) {
  const t = await getTranslations({
    locale,
    namespace: "contact.emailConfirmation",
  });

  const html = `
  <div style="background:#EFF4F8;padding:32px 16px;font-family:Inter,Arial,sans-serif">
    <span style="display:none!important;opacity:0;color:transparent;height:0;width:0;overflow:hidden">${escapeHtml(
      t("preheader"),
    )}</span>
    <div style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 6px 24px rgba(11,22,40,0.08)">
      <div style="background:#0B1628;padding:28px 32px;text-align:center">
        <img src="${siteUrl}/logo-dark.png" alt="EVERA" width="150" style="height:auto;max-width:150px;display:inline-block;background:#ffffff;border-radius:8px;padding:10px 14px" />
      </div>
      <div style="padding:32px">
        <h1 style="margin:0 0 6px;font-size:22px;color:#0B1628">${escapeHtml(
          t("heading"),
        )}</h1>
        <p style="margin:0 0 16px;font-size:15px;color:#0B1628;font-weight:600">${escapeHtml(
          t("greeting", { name: data.name }),
        )}</p>
        <p style="margin:0 0 22px;font-size:15px;line-height:1.6;color:#334155">${escapeHtml(
          t("body"),
        )}</p>

        <div style="margin:24px 0;padding:16px 18px;background:#F8FAFC;border-left:3px solid #00B5D4;border-radius:8px">
          <p style="margin:0 0 4px;font-size:13px;text-transform:uppercase;letter-spacing:.04em;color:#008FA8;font-weight:700">${escapeHtml(
            t("nextStepsTitle"),
          )}</p>
          <p style="margin:0;font-size:14px;line-height:1.6;color:#334155">${escapeHtml(
            t("nextSteps"),
          )}</p>
        </div>

        <p style="margin:0 0 22px;font-size:15px;line-height:1.6;color:#334155">${escapeHtml(
          t("closing"),
        )}</p>
        <p style="margin:0;font-size:15px;font-weight:600;color:#0B1628">${escapeHtml(
          t("signature"),
        )}</p>
      </div>
      <div style="padding:18px 32px;background:#F8FAFC;border-top:1px solid #EFF4F8">
        <p style="margin:0;font-size:12px;line-height:1.5;color:#94A3B8">${escapeHtml(
          t("footerNote"),
        )}</p>
      </div>
    </div>
  </div>
  `;

  return { subject: t("subject"), html };
}

export interface CareersApplication {
  name: string;
  email: string;
  phone?: string;
  role: string;
  message?: string;
}

/** Careers application → internal notification with the CV attached. */
export async function sendCareersApplication(
  data: CareersApplication,
  cv: { filename: string; content: Buffer },
) {
  if (!resend || !contactEmail) {
    throw new Error(
      "Email is not configured. Set RESEND_API_KEY and CONTACT_EMAIL.",
    );
  }

  const rows: [string, string][] = [
    ["Name", data.name],
    ["Email", data.email],
    ["Phone", data.phone || "N/A"],
    ["Area", data.role],
    ["About", data.message || "N/A"],
    ["CV", cv.filename],
  ];

  const html = `
    <div style="font-family:Inter,Arial,sans-serif;max-width:560px;margin:0 auto;color:#0B1628">
      <h2 style="color:#0B1628;border-bottom:3px solid #00B5D4;padding-bottom:8px">
        New job application from ${escapeHtml(data.name)}
      </h2>
      <table style="width:100%;border-collapse:collapse;font-size:14px">
        ${rows
          .map(
            ([label, value]) => `
          <tr>
            <td style="padding:8px 12px;background:#F8FAFC;font-weight:600;width:120px;vertical-align:top">${label}</td>
            <td style="padding:8px 12px;white-space:pre-wrap">${escapeHtml(value)}</td>
          </tr>`,
          )
          .join("")}
      </table>
    </div>
  `;

  return send({
    from: FROM_NOTIFICATION,
    to: contactEmail,
    replyTo: data.email,
    subject: `New application from ${data.name} (${data.role})`,
    html,
    attachments: [{ filename: cv.filename, content: cv.content }],
  });
}

export async function sendContactEmail(
  data: ContactFormData,
  locale: Locale = routing.defaultLocale,
) {
  if (!resend || !contactEmail) {
    throw new Error(
      "Email is not configured. Set RESEND_API_KEY and CONTACT_EMAIL.",
    );
  }

  const confirmation = await confirmationEmail(data, locale);

  const [notification, autoReply] = await Promise.allSettled([
    // (a) Internal notification — critical.
    send({
      from: FROM_NOTIFICATION,
      to: contactEmail,
      replyTo: data.email,
      subject: `New contact from ${data.company}`,
      html: notificationHtml(data),
    }),
    // (b) Confirmation to the user — best-effort.
    send({
      from: FROM_CONFIRMATION,
      to: data.email,
      replyTo: REPLY_TO_CONFIRMATION,
      subject: confirmation.subject,
      html: confirmation.html,
    }),
  ]);

  if (autoReply.status === "rejected") {
    console.error("[contact] Confirmation email failed:", autoReply.reason);
  }
  // The lead only counts as delivered if the internal notification went through.
  if (notification.status === "rejected") {
    throw notification.reason;
  }
}
