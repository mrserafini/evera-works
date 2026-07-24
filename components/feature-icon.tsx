import {
  BadgeCheck,
  Clock,
  Cpu,
  Globe2,
  Handshake,
  Languages,
  Lock,
  Scaling,
  ShieldCheck,
  TrendingUp,
  Zap,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  Languages,
  Globe2,
  Cpu,
  TrendingUp,
  Scaling,
  Zap,
  ShieldCheck,
  Clock,
  Lock,
  BadgeCheck,
  Handshake,
};

export function FeatureIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = map[name] ?? Zap;
  return <Icon className={className} aria-hidden="true" />;
}
