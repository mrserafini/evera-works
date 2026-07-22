import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium tracking-wide transition-colors [&>svg]:size-3",
  {
    variants: {
      variant: {
        default: "border-transparent bg-brand-teal text-brand-navy",
        outline: "border-border text-foreground",
        // Subtle pill for dark sections
        glass:
          "border-white/15 bg-white/5 text-white backdrop-blur supports-[backdrop-filter]:bg-white/10",
        muted: "border-transparent bg-surface text-text-muted",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Badge({
  className,
  variant,
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & VariantProps<typeof badgeVariants>) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
