import Link from "next/link";
import {
  footerBrandContent,
  footerCreatorLinks,
  footerCtaContent,
  footerExploreLinks,
  siteConfig,
} from "@/content/site";
import { primaryCtaClassName } from "@/lib/cta-styles";

const footerLinkClass =
  "text-sm text-text-muted transition-colors duration-200 hover:text-brand-primary-light focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-brand-navy-deep text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-brand-primary/45 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 size-72 -translate-x-1/3 translate-y-1/3 rounded-full bg-brand-primary/6 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-10 xl:gap-12">
          <div className="md:col-span-2 lg:col-span-5">
            <p className="font-display text-2xl font-extrabold tracking-tight text-white sm:text-[1.75rem]">
              Next
              <span className="text-brand-primary-light">Wave</span>
            </p>
            <p className="mt-1.5 font-sans text-[10px] font-semibold uppercase tracking-[0.32em] text-white/75 sm:text-[11px]">
              {footerBrandContent.subtitle}
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-text-muted sm:text-[15px]">
              {footerBrandContent.statement}
            </p>
            <p className="mt-5 font-display text-xs font-bold tracking-[0.22em] text-brand-accent sm:text-[13px]">
              {footerBrandContent.tagline}
            </p>
          </div>

          <nav aria-label="Footer Explore" className="lg:col-span-2">
            <h2 className="font-display text-xs font-bold uppercase tracking-[0.18em] text-white">
              Explore
            </h2>
            <ul className="mt-4 space-y-2.5">
              {footerExploreLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={footerLinkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Footer Creator Links" className="lg:col-span-2">
            <h2 className="font-display text-xs font-bold uppercase tracking-[0.18em] text-white">
              Creators
            </h2>
            <ul className="mt-4 space-y-2.5">
              {footerCreatorLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link href={link.href} className={footerLinkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:col-span-2 lg:col-span-3">
            <h2 className="font-display text-lg font-bold text-white sm:text-xl">
              {footerCtaContent.heading}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-text-muted">
              {footerCtaContent.copy}
            </p>
            <Link
              href={footerCtaContent.href}
              className={`${primaryCtaClassName} mt-5 inline-flex gap-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary`}
            >
              {footerCtaContent.buttonLabel}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p className="text-xs text-text-muted/90">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
