import {
  Code2,
  Headset,
  HeartPulse,
  Languages,
  PenTool,
  PhoneCall,
  type LucideIcon,
} from "lucide-react";

const map: Record<string, LucideIcon> = {
  PhoneCall,
  Headset,
  Languages,
  HeartPulse,
  PenTool,
  Code2,
};

export function ServiceIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = map[name] ?? PhoneCall;
  return <Icon className={className} aria-hidden="true" />;
}
