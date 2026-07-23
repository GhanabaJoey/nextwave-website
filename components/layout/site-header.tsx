import Link from "next/link";
import { navLinks, siteConfig } from "@/content/site";
import { navApplyCtaClassName } from "@/lib/cta-styles";

export function SiteHeader() {
  const mainLinks = navLinks.filter((link) => link.href !== "/apply");

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-brand-navy/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-3">
        <Link
          href="/"
          className="font-display text-xl font-bold tracking-tight text-white"
        >
          {siteConfig.shortName}
        </Link>
        <nav aria-label="Main" className="flex flex-wrap items-center gap-2 sm:gap-3">
          <ul className="flex flex-wrap items-center gap-1">
            {mainLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="rounded-full px-3 py-2 text-sm font-medium text-text-muted transition-colors hover:bg-white/5 hover:text-brand-primary-light"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/apply" className={navApplyCtaClassName}>
            Apply
          </Link>
        </nav>
      </div>
    </header>
  );
}
