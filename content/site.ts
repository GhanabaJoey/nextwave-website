export const siteConfig = {
  name: "NextWave Creator Network",
  shortName: "NextWave",
  description:
    "An established TikTok LIVE creator growth community in the United Kingdom & AU+.",
} as const;

export const headerBrandContent = {
  subtitle: "Creator Network",
} as const;

export const headerApplyCta = {
  label: "Apply to Join",
  href: "/apply",
} as const;

export type NavLink = {
  href: string;
  label: string;
};

export const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/community", label: "Community" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
  { href: "/apply", label: "Apply" },
];

/** Main marketing nav — excludes Contact and Apply (see header CTA). */
export const footerExploreLinks: NavLink[] = navLinks.filter(
  (link) => link.href !== "/contact" && link.href !== "/apply",
);

export const footerCreatorLinks: NavLink[] = [
  { href: "/apply", label: "Apply to Join" },
  { href: "/resources", label: "Creator Resources" },
  { href: "/community", label: "Community & Events" },
  { href: "/contact", label: "Contact Us" },
];

export const footerBrandContent = {
  subtitle: "Creator Network",
  statement:
    "A creator community built to help LIVE creators learn, connect, compete and grow.",
  tagline: "STREAM • COMPETE • WIN • GROW",
} as const;

export const footerCtaContent = {
  heading: "Ready for your next wave?",
  copy: "Join a growing creator community focused on learning, connection and progress.",
  buttonLabel: "Apply to Join",
  href: "/apply",
} as const;

/** Add official profile URLs here when approved — footer renders icons only when non-empty. */
export const footerSocialLinks: readonly { href: string; label: string }[] =
  [];
