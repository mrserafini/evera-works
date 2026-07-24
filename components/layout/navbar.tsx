"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Menu, X } from "lucide-react";

import { Link, usePathname } from "@/i18n/navigation";
import { mainNav } from "@/lib/site";
import { cn } from "@/lib/utils";
import { gsap, useGSAP } from "@/lib/gsap";
import { LanguageSwitcher } from "./language-switcher";

export function Navbar() {
  const t = useTranslations("nav");
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Deepen the navy tint / add shadow once the user scrolls past the fold.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on route change.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  // GSAP slide-down for the mobile menu panel.
  useGSAP(
    () => {
      if (!menuRef.current) return;
      if (open) {
        gsap.fromTo(
          menuRef.current,
          { height: 0, opacity: 0 },
          { height: "auto", opacity: 1, duration: 0.35, ease: "power3.out" },
        );
      }
    },
    { dependencies: [open], scope: menuRef, revertOnUpdate: true },
  );

  return (
    // Camouflage effect: fully transparent over the hero, then the frosted
    // navy bar fades in once the user scrolls past the fold (or opens the menu).
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-300",
        scrolled || open
          ? "border-white/10 bg-brand-navy/90 shadow-lg shadow-black/20 backdrop-blur-md"
          : "border-transparent bg-transparent backdrop-blur-0",
      )}
    >
      {/* Legibility scrim for the transparent (camouflaged) state: a soft
          top-down darkening keeps the logo + teal CTA readable over light or
          teal-toned heroes (e.g. Careers) without affecting the scrolled bar. */}
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-x-0 top-0 -z-10 h-[150%] bg-gradient-to-b from-black/45 via-black/20 to-transparent transition-opacity duration-300",
          scrolled || open ? "opacity-0" : "opacity-100",
        )}
      />

      <nav className="container-section grid h-20 grid-cols-[1fr_auto_1fr] items-center gap-4 md:h-24">
        {/* Left — primary navigation */}
        <ul className="hidden items-center gap-7 lg:flex">
          {mainNav.map((item) => {
            const active = isActive(item.href);
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "relative text-sm font-medium transition-colors",
                    active
                      ? "text-brand-teal"
                      : "text-white/85 hover:text-brand-teal",
                  )}
                >
                  {t(item.labelKey)}
                  {active ? (
                    <span className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded-full bg-brand-teal" />
                  ) : null}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile: hamburger sits on the left of the grid */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? t("closeMenu") : t("openMenu")}
          aria-expanded={open}
          className="inline-flex size-10 items-center justify-center rounded-full text-white lg:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>

        {/* Center — logo, bigger */}
        <Link
          href="/"
          aria-label="EVERA — Home"
          className="flex items-center justify-center"
        >
          <Image
            src="/logo-light.png"
            alt="EVERA"
            width={1614}
            height={649}
            priority
            className="h-12 w-auto md:h-14"
          />
        </Link>

        {/* Right — language toggle + primary CTA */}
        <div className="flex items-center justify-end gap-4">
          <LanguageSwitcher className="text-white/85" />
          <Link
            href="/contact"
            className="hidden h-10 items-center rounded-full bg-brand-teal px-5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-brand-teal-dark lg:inline-flex"
          >
            {t("bookCall")}
          </Link>
        </div>
      </nav>

      {/* Mobile menu panel */}
      {open ? (
        <div ref={menuRef} className="overflow-hidden lg:hidden">
          <ul className="container-section flex flex-col gap-1 pb-6 pt-2">
            {mainNav.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "flex items-center gap-2 rounded-lg px-2 py-3 text-base font-medium transition-colors",
                      active
                        ? "bg-white/10 text-brand-teal"
                        : "text-white/90 hover:bg-white/10 hover:text-brand-teal",
                    )}
                  >
                    {active ? (
                      <span className="h-4 w-0.5 rounded-full bg-brand-teal" />
                    ) : null}
                    {t(item.labelKey)}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2">
              <Link
                href="/contact"
                className="inline-flex h-11 w-full items-center justify-center rounded-full bg-brand-teal px-5 text-sm font-semibold text-brand-navy"
              >
                {t("bookCall")}
              </Link>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
