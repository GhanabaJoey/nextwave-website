import Link from "next/link";
import { primaryCtaClassName } from "@/lib/cta-styles";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center bg-brand-navy">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:px-10">
        <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-brand-primary">
          404
        </p>
        <h1 className="font-display mt-4 text-[2.5rem] font-extrabold leading-[1.02] tracking-[-0.02em] text-white sm:text-[3rem]">
          Page not found.
        </h1>
        <p className="mt-5 max-w-lg font-sans text-base leading-relaxed text-text-muted sm:text-lg">
          The page you are looking for does not exist or may have moved. Head
          back to the homepage or explore the NextWave community.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <Link
            href="/"
            className={`${primaryCtaClassName} gap-1.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary`}
          >
            Back to Home
            <span aria-hidden="true">→</span>
          </Link>
          <Link
            href="/community"
            className="inline-flex min-h-11 items-center justify-center gap-1.5 rounded-lg border border-white/25 bg-transparent px-6 py-2.5 text-sm font-semibold text-white/90 transition-colors hover:border-white/40 hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary motion-reduce:transition-none"
          >
            Explore Community
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
