import type { ReactNode } from "react";

/**
 * Remounts on every route change, so the `.page-transition` CSS animation
 * (globals.css) plays a soft fade/slide-in instead of an abrupt page swap.
 */
export default function Template({ children }: { children: ReactNode }) {
  return <div className="page-transition">{children}</div>;
}
