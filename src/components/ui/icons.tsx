import {
  AlertTriangle,
  ClipboardList,
  Clock,
  Compass,
  Gauge,
  Heart,
  Plug,
  Scale,
  Shield,
  Sprout,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { IconName } from "@/data/site";

export const iconMap: Record<IconName, LucideIcon> = {
  compass: Compass,
  users: Users,
  gauge: Gauge,
  scale: Scale,
  shield: Shield,
  sprout: Sprout,
  heart: Heart,
  plug: Plug,
  clock: Clock,
  clipboard: ClipboardList,
  alert: AlertTriangle,
};
