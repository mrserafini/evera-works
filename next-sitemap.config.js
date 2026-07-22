/** @type {import('next-sitemap').IConfig} */
const siteUrl = process.env.SITE_URL || "https://everaworksbpo.com";

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  exclude: ["/api/*"],
  alternateRefs: [
    { href: `${siteUrl}/en`, hreflang: "en" },
    { href: `${siteUrl}/es`, hreflang: "es" },
  ],
  robotsTxtOptions: {
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
