/**
 * Email validation shared by both forms and their API routes.
 *
 * Email is the only channel EVERA uses to reach leads and applicants, so this
 * goes beyond Zod's permissive `.email()` (which accepts things like `a@b`):
 *   1. A strict syntax check that requires a real domain + TLD.
 *   2. A typo guard that catches the most common provider/TLD mistakes
 *      (gmail.con, hotmail.co, gmial.com…) and suggests the likely fix.
 */

/**
 * Practical strict syntax:
 * - local part: letters, digits and . _ % + -
 * - domain: one or more DNS labels (alphanumeric with inner hyphens) + dots
 * - TLD: at least two letters
 */
export const STRICT_EMAIL_RE =
  /^[A-Za-z0-9._%+-]+@(?:[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?\.)+[A-Za-z]{2,}$/;

// Well-known free mailbox providers. Exact matches skip the typo guard, so
// legitimate look-alikes (ymail.com, email.com…) are never flagged.
const FREEMAIL = new Set([
  "gmail",
  "googlemail",
  "yahoo",
  "ymail",
  "rocketmail",
  "hotmail",
  "outlook",
  "live",
  "msn",
  "icloud",
  "me",
  "mac",
  "aol",
  "proton",
  "protonmail",
  "gmx",
  "zoho",
  "yandex",
  "mail",
  "email",
]);

// Big brands that only ever use ".com" — used to catch gmail.co / hotmail.cm.
const COM_ONLY = [
  "gmail",
  "googlemail",
  "yahoo",
  "ymail",
  "hotmail",
  "outlook",
  "live",
  "msn",
  "icloud",
  "aol",
];

// TLDs that are (essentially) never valid — classic ".com" mistypes.
const DEAD_TLDS = [
  "con",
  "cno",
  "cmo",
  "ocm",
  "vom",
  "xom",
  "comm",
  "ccom",
  "cim",
  "coom",
  "cpm",
];

// Wrong bare TLDs when the domain is a ".com-only" freemail brand.
const COM_TLD_TYPOS = [...DEAD_TLDS, "co", "cm", "om", "clm"];

/** Optimal string alignment distance (Levenshtein + adjacent transposition). */
function editDistance(a: string, b: string): number {
  const m = a.length;
  const n = b.length;
  const d: number[][] = Array.from({ length: m + 1 }, () =>
    new Array<number>(n + 1).fill(0),
  );
  for (let i = 0; i <= m; i++) d[i][0] = i;
  for (let j = 0; j <= n; j++) d[0][j] = j;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) {
        d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1);
      }
    }
  }
  return d[m][n];
}

export type EmailCheck =
  | { ok: true; value: string }
  | { ok: false; kind: "format" }
  | { ok: false; kind: "typo"; suggestion: string };

/** Validates an email and, when it looks like a typo, suggests a correction. */
export function checkEmail(input: string): EmailCheck {
  const value = input.trim();
  if (!STRICT_EMAIL_RE.test(value)) return { ok: false, kind: "format" };

  const at = value.lastIndexOf("@");
  const local = value.slice(0, at); // keep original case in the suggestion
  const domain = value.slice(at + 1).toLowerCase();
  const labels = domain.split(".");
  const name = labels[0];
  const tld = labels[labels.length - 1];
  const suggest = (newDomain: string): EmailCheck => ({
    ok: false,
    kind: "typo",
    suggestion: `${local}@${newDomain}`,
  });

  // 1) Dead top-level domain (e.g. foo.con → foo.com).
  if (DEAD_TLDS.includes(tld)) {
    return suggest([...labels.slice(0, -1), "com"].join("."));
  }

  // 2) A ".com-only" freemail brand with the wrong bare TLD (gmail.co, yahoo.cm).
  if (
    labels.length === 2 &&
    COM_ONLY.includes(name) &&
    tld !== "com" &&
    COM_TLD_TYPOS.includes(tld)
  ) {
    return suggest(`${name}.com`);
  }

  // 3) Misspelled freemail brand name on a .com address (gmial.com, hotmial.com).
  if (labels.length === 2 && tld === "com" && !FREEMAIL.has(name)) {
    for (const brand of COM_ONLY) {
      if (Math.abs(name.length - brand.length) <= 1 && editDistance(name, brand) === 1) {
        return suggest(`${brand}.com`);
      }
    }
  }

  return { ok: true, value };
}
