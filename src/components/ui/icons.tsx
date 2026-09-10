import {
  AlertTriangle,
  ClipboardList,
  Clock,
  Compass,
  Gauge,
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
  clock: Clock,
  clipboard: ClipboardList,
  alert: AlertTriangle,
};
