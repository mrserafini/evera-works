# EVERA WORKS — Website

B2B client-acquisition site for EVERA WORKS SRL, a Dominican BPO exporting services to companies in the US, Canada and the UK. Bilingual EN/ES, alternating dark/light sections, GSAP ScrollTrigger animations, interactive ROI calculator.

## Commands

- `pnpm dev` — Dev server (localhost:3000, redirects `/` → `/en`)
- `pnpm build` — Production build (also runs `next-sitemap`)
- `pnpm start` — Serve the production build
- `pnpm lint` — ESLint
- `pnpm typecheck` — `tsc --noEmit`
- `pnpm format` — Prettier (with Tailwind class sorting)

## Tech Stack

Next.js 14 (App Router) · TypeScript strict · Tailwind CSS **v3** · GSAP 3 + ScrollTrigger + @gsap/react · next-intl v3 (EN/ES) · React Hook Form + Zod · Resend · Recharts · @sanity/client (Phase 2) · Vercel.

> Note: UI primitives in `components/ui/` are hand-written in Tailwind v3 (not the shadcn `@latest` registry, which now targets Tailwind v4 + @base-ui and is incompatible with this stack). They follow the shadcn API (cva variants, `cn()`).

## Architecture

- `app/[locale]/` — all pages under locale routing (`en`/`es`); `layout.tsx` holds `<html>`, Inter font, GA4, Vercel Analytics, JSON-LD, Navbar + Footer. There is intentionally **no** `app/layout.tsx` — the locale layout is the root (standard next-intl pattern).
- `app/api/` — `contact` (Resend) and `og` (@vercel/og, edge).
- `i18n/` — `routing.ts`, `request.ts`, `navigation.ts` (locale-aware `Link`/`useRouter`).
- `middleware.ts` — next-intl locale detection/redirect.
- `messages/` — `en.json`, `es.json` (all UI copy).
- `components/layout/` — Navbar, Footer, LanguageSwitcher.
- `components/sections/` — Home sections (Hero, Stats, ServicesGrid, WhyEvera, IndustriesStrip, ContactCTA) + shared ServiceCards.
- `components/anim/` — `Reveal`, `StaggerReveal`, `CountUp` (reusable GSAP primitives).
- `components/forms/` — ContactForm (RHF + Zod).
- `components/roi-calculator/` — ROICalculator + SavingsChart (Recharts).
- `components/ui/` — Button, Card, Badge, Input, Textarea, Label.
- `lib/` — `gsap.ts` (plugin registration), `site.ts` (nav/config), `services-data.ts` (bilingual service content), `validations.ts` (Zod), `resend.ts`, `utils.ts` (`cn`).

### Data flow
- Service content: `lib/services-data.ts` (static, bilingual record data — co-located, not in messages).
- Contact: client → `POST /api/contact` → Resend → email to `CONTACT_EMAIL`.
- i18n: middleware resolves locale → `messages/[locale].json` via `useTranslations` / `getTranslations`.

## Non-negotiable rules

1. TypeScript strict — no `any`. `pnpm build` must pass with 0 errors before deploy.
2. Always import GSAP from `@/lib/gsap` (never `gsap` directly) — plugins are registered there once.
3. Use `useGSAP()` from `@gsap/react` for animations (auto-cleanup). Prefer the `Reveal`/`StaggerReveal`/`CountUp` helpers. Respect `prefers-reduced-motion`.
4. Zero hardcoded UI copy in components — use `useTranslations()` / message files. (Structured service data lives in `services-data.ts`.)
5. Server Components by default; `"use client"` only for GSAP, forms, or DOM state.
6. Respect the alternating dark/light section order on Home: Hero(dark) → Stats(teal) → Services(light) → WhyEvera(dark) → Industries(light) → CTA(dark).
7. `next/image` for raster images; never commit `.env.local`.

## Design tokens (Tailwind classes)

`brand-navy #0B1628` · `brand-teal #00B5D4` (exact logo-arrow blue; token name kept for stability) · `brand-teal-dark #008FA8` · `bg-light #F8FAFC` · `surface #EFF4F8` · `text-muted #64748B`. Buttons are blue pills. Font: Inter (self-hosted via `next/font/google`).

## Environment variables

See `.env.example`. GA scripts only load when `NEXT_PUBLIC_GA_ID` is set; the contact form needs `RESEND_API_KEY` + `CONTACT_EMAIL`.

## Status / roadmap

- **Phase 1 (done):** Home, Services overview + 4 detail pages (sales-bpo, tech-support, interpretation, healthcare-admin), About, ROI Calculator, Contact + email, SEO base, sitemap.
- **Phase 2 (pending):** Sanity Studio + schemas (blog, team, jobs), Industries, Pricing, Careers, Blog; service detail pages for content-production & software-development already render from data.
- **Phase 3:** SEO audit, A/B testing, optional Clerk client portal.
