import Image from "next/image";
import { useTranslations } from "next-intl";
import { Mail } from "lucide-react";

import { Link } from "@/i18n/navigation";
import { siteConfig } from "@/lib/site";

const linkClass = "text-white/70 transition-colors hover:text-brand-teal";

export function Footer() {
  const t = useTranslations("footer");
  const tNav = useTranslations("nav");
  const year = new Date().getFullYear();

  const sitemap = [
    { href: "/", label: t("links.home") },
    { href: "/#services", label: tNav("services") },
    { href: "/careers", label: tNav("careers") },
  ];
  const company = [
    { href: "/legal-notice", label: t("links.legalNotice") },
    { href: "/privacy-policy", label: t("links.privacy") },
    { href: "/faq", label: t("links.faq") },
  ];

  return (
    <footer className="bg-brand-navy text-white">
      <div className="container-section py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand + tagline */}
          <div className="lg:col-span-2">
            <Link href="/" aria-label="EVERA — Home" className="inline-block">
              <Image
                src="/logo-light.png"
                alt="EVERA — One Partner, One Team"
                width={1614}
                height={649}
                className="h-20 w-auto md:h-24"
              />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/70">
              {t("tagline")}
            </p>
          </div>

          {/* Sitemap */}
          <div>
            <h3 className="text-sm font-bold text-white">
              {t("columns.sitemap")}
            </h3>
            <ul className="mt-4 space-y-3 text-sm font-medium">
              {sitemap.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-bold text-white">
              {t("columns.company")}
            </h3>
            <ul className="mt-4 space-y-3 text-sm font-medium">
              {company.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-sm font-bold text-white">
              {t("columns.contact")}
            </h3>
            <ul className="mt-4 space-y-3 text-sm font-medium">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className={`inline-flex items-center gap-2 ${linkClass}`}
                >
                  <Mail className="size-4" aria-hidden="true" />
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 ${linkClass}`}
                >
                  <svg
                    className="size-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.34V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                  </svg>
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.upwork}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 ${linkClass}`}
                >
                  <svg
                    className="size-4"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M18.56 5.43c-1.9 0-3.42 1.24-4.06 3.24-.98-1.46-1.72-3.22-2.16-4.72H9.68v5.72c0 1.13-.92 2.05-2.05 2.05-1.13 0-2.05-.92-2.05-2.05V3.95H2.79v5.72c0 2.67 2.17 4.85 4.84 4.85 2.67 0 4.84-2.18 4.84-4.85v-.96c.43.9.96 1.81 1.6 2.61l-1.36 6.4h2.86l.98-4.62c.86.55 1.85.87 2.97.87 2.41 0 4.38-1.98 4.38-4.44 0-2.46-1.97-4.5-4.42-4.5zm0 6.17c-.91 0-1.76-.39-2.53-1.02l.23-.87v-.02c.16-.59.66-1.58 1.72-1.58.79 0 1.44.65 1.44 1.44 0 .8-.65 1.45-1.44 1.45z" />
                  </svg>
                  Upwork
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/60 sm:flex-row">
          <p>
            © {year} EVERA WORKS LLC. {t("rights")}
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="transition-colors hover:text-brand-teal"
            >
              {t("links.privacy")}
            </Link>
            <Link
              href="/terms-of-service"
              className="transition-colors hover:text-brand-teal"
            >
              {t("links.terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
