/**
 * Central production URL configuration.
 * Set NEXT_PUBLIC_SITE_URL in Vercel (e.g. https://www.yourdomain.com) before launch.
 */
const FALLBACK_PRODUCTION_URL = "https://nextwavecreatornetwork.com";

export function getSiteUrl(): string {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "");
  if (configured) return configured;

  const vercelHost = process.env.VERCEL_URL;
  if (vercelHost) return `https://${vercelHost}`;

  if (process.env.NODE_ENV === "development") {
    return "http://localhost:3000";
  }

  return FALLBACK_PRODUCTION_URL;
}

export const siteRoutes = [
  "/",
  "/about",
  "/community",
  "/resources",
  "/contact",
  "/apply",
] as const;
