import type { LucideIcon } from "lucide-react";
import { BookOpen, Ticket, Users, Cog, TrendingUp, MessagesSquare, Package } from "lucide-react";

export type NavItem = {
  key: string;
  path: `/${string}`;
  icon: LucideIcon;
  isContentType: boolean;
};

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "codes", path: "/codes", icon: Ticket, isContentType: true },
  { key: "characters", path: "/characters", icon: Users, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Cog, isContentType: true },
  { key: "progression", path: "/progression", icon: TrendingUp, isContentType: true },
  { key: "community", path: "/community", icon: MessagesSquare, isContentType: true },
  { key: "items", path: "/items", icon: Package, isContentType: true },
] satisfies readonly NavItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) => item.path.replace(/^\//, ""));
