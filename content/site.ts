export const siteConfig = {
  name: "NextWave Creator Network",
  shortName: "NextWave",
  description:
    "An established TikTok LIVE creator growth community in the UK and Australia.",
} as const;

export type NavLink = {
  href: string;
  label: string;
};

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/community", label: "Community" },
  { href: "/apply", label: "Apply" },
];
