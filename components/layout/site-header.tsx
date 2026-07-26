"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import {
  headerApplyCta,
  headerBrandContent,
  navLinks,
} from "@/content/site";
import { navApplyCtaClassName } from "@/lib/cta-styles";

const SCROLL_THRESHOLD = 40;

const transparentHeroRoutes = new Set([
  "/",
  "/about",
  "/community",
  "/resources",
  "/contact",
  "/apply",
]);

function isNavLinkActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

const navLinkBaseClass =
  "relative inline-block py-1 text-[14px] font-medium leading-none transition-colors duration-200 motion-reduce:transition-none focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-primary lg:text-[15px]";

function NavLinkItem({
  href,
  label,
  pathname,
  onNavigate,
  className = "block px-1 py-3.5 text-base font-medium",
}: {
  href: string;
  label: string;
  pathname: string;
  onNavigate?: () => void;
  className?: string;
}) {
  const active = isNavLinkActive(pathname, href);

  return (
    <Link
      href={href}
      onClick={onNavigate}
      aria-current={active ? "page" : undefined}
      className={`${navLinkBaseClass} ${className} ${
        active
          ? "text-white"
          : "text-white/70 hover:text-white"
      }`}
    >
      {label}
      {active ? (
        <span
          aria-hidden="true"
          className="absolute -bottom-0.5 left-0 h-0.5 w-full rounded-full bg-brand-primary"
        />
      ) : null}
    </Link>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const mobileNavId = useId();
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const hasTransparentHero = transparentHeroRoutes.has(pathname);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuPath, setMobileMenuPath] = useState<string | null>(null);
  const menuOpen = mobileMenuPath === pathname;

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;

      event.preventDefault();
      setMobileMenuPath(null);
      menuToggleRef.current?.focus();
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const transparent = hasTransparentHero && !scrolled;

  const headerClass = transparent
    ? "fixed top-0 z-50 w-full border-b border-transparent bg-transparent shadow-none transition-[background-color,box-shadow,border-color] duration-300 motion-reduce:transition-none"
    : "fixed top-0 z-50 w-full border-b border-white/10 bg-[rgba(7,17,31,0.88)] shadow-md shadow-black/15 backdrop-blur-md transition-[background-color,box-shadow,border-color] duration-300 motion-reduce:transition-none";

  const mainLinks = navLinks.filter((link) => link.href !== "/apply");

  const closeMenu = () => setMobileMenuPath(null);

  const toggleMenu = () => {
    setMobileMenuPath((current) => (current === pathname ? null : pathname));
  };

  return (
    <header className={headerClass}>
      <div className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between gap-3 px-5 sm:px-8 lg:h-20 lg:gap-6 lg:px-10">
        <Link
          href="/"
          className="group min-w-0 shrink leading-none focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-primary"
        >
          <span className="font-display text-xl font-bold tracking-tight text-white sm:text-[1.35rem]">
            Next
            <span className="text-brand-primary-light">Wave</span>
          </span>
          <span className="mt-1.5 block max-w-[11rem] font-sans text-[8px] font-semibold uppercase tracking-[0.24em] text-white/75 sm:max-w-none sm:text-[10px] sm:tracking-[0.36em]">
            {headerBrandContent.subtitle}
          </span>
        </Link>

        <nav
          aria-label="Main"
          className="hidden flex-1 justify-center md:flex"
        >
          <ul className="flex items-center gap-4 md:gap-5 lg:gap-7 xl:gap-8">
            {mainLinks.map((link) => (
              <li key={link.href}>
                <NavLinkItem
                  href={link.href}
                  label={link.label}
                  pathname={pathname}
                />
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden shrink-0 md:block">
          <Link href={headerApplyCta.href} className={navApplyCtaClassName}>
            {headerApplyCta.label}
            <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="flex shrink-0 items-center md:hidden">
          <button
            ref={menuToggleRef}
            type="button"
            aria-expanded={menuOpen}
            aria-controls={mobileNavId}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={toggleMenu}
            className="flex size-10 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white transition-colors duration-200 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary motion-reduce:transition-none"
          >
            <svg
              aria-hidden="true"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              {menuOpen ? (
                <path d="M6 6l12 12M18 6 6 18" />
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen ? (
        <div
          id={mobileNavId}
          className="max-h-[calc(100dvh-4.5rem)] overflow-y-auto overscroll-contain border-t border-white/10 bg-brand-navy/98 backdrop-blur-md md:hidden"
        >
          <nav aria-label="Mobile" className="mx-auto max-w-7xl px-5 py-4 sm:px-8">
            <ul className="divide-y divide-white/10 border-y border-white/10">
              {mainLinks.map((link) => (
                <li key={link.href}>
                  <NavLinkItem
                    href={link.href}
                    label={link.label}
                    pathname={pathname}
                    onNavigate={closeMenu}
                    className="block py-4 text-base"
                  />
                </li>
              ))}
            </ul>
            <div className="mt-5 border-t border-white/10 pt-5">
              <Link
                href={headerApplyCta.href}
                onClick={closeMenu}
                className={`${navApplyCtaClassName} w-full`}
              >
                {headerApplyCta.label}
                <span aria-hidden="true">→</span>
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
