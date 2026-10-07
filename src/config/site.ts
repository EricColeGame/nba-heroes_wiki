import { routing } from "@/i18n/routing";

export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "NBA Heroes Wiki",
  shortName: "NBA Heroes",
  logoText: "NH",
  tagline: "Player Abilities, Tier Lists, Codes & Basketball Guides",
  description: "Your ultimate NBA Heroes Roblox wiki! Explore player abilities, best heroes tier lists, active codes, 3v3 gameplay guides and basketball tips.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://nba-heroes.wiki",
  supportEmail: "support@nba-heroes.wiki",
  gameUrl: "https://www.roblox.com/games/126424052816775/NBA-Heroes",
  heroVideoId: "OgX2qoryNbU", // NBA Heroes Roblox gameplay showcase
  social: {
    discord: "https://www.roblox.com/games/126424052816775/NBA-Heroes",
    youtube: "https://www.youtube.com/@Roblox",
  },
  locales: routing.locales,
  defaultLocale: "en",
};
