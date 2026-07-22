/**
 * Central site configuration: contact details, social links, and the
 * navigation items shown in the Navbar/Footer. `labelKey` points at a key in
 * the `nav` namespace of the message files (no hardcoded copy).
 */

export const siteConfig = {
  name: "EVERA WORKS",
  url: "https://everapartner.com",
  email: "hello@everapartner.com",
  social: {
    linkedin: "https://www.linkedin.com/company/everaworks",
    upwork: "https://www.upwork.com/agencies/2065684105463381690/",
  },
} as const;

export interface NavItem {
  href: string;
  /** Key within the `nav` namespace. */
  labelKey: string;
}

// One-page navigation: anchors scroll to home sections; contact is a page.
// Order (client request): Services · About · Contact · Careers.
export const mainNav: NavItem[] = [
  { href: "/#services", labelKey: "services" },
  { href: "/about", labelKey: "about" },
  { href: "/contact", labelKey: "contact" },
  { href: "/careers", labelKey: "careers" },
];

// Footer "Services" column points to live service detail pages.
export const footerServiceSlugs = [
  "sales-bpo",
  "tech-support",
  "interpretation",
  "healthcare-admin",
] as const;
