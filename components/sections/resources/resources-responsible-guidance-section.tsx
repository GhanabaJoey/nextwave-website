import Link from "next/link";
import { resourcesResponsibleGuidanceContent } from "@/content/resources";

export function ResourcesResponsibleGuidanceSection() {
  const { sectionId, heading, copy, tiktokGuidelinesUrl } =
    resourcesResponsibleGuidanceContent;

  return (
    <section
      id={sectionId}
      aria-labelledby="resources-responsible-heading"
      className="relative scroll-mt-24 border-y border-white/10 bg-brand-navy-deep"
    >
      <div className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-12 lg:px-10">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
          <svg
            aria-hidden="true"
            className="mt-0.5 size-5 shrink-0 text-brand-primary/70"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M12 8v5" />
            <path d="M12 16h.01" />
          </svg>
          <div className="max-w-3xl">
            <h2
              id="resources-responsible-heading"
              className="font-display text-xl font-bold text-white sm:text-2xl"
            >
              {heading}
            </h2>
            <p className="mt-2 font-sans text-base leading-relaxed text-text-muted">
              {copy}{" "}
              <Link
                href={tiktokGuidelinesUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-brand-primary-light underline-offset-2 transition-colors hover:text-brand-primary focus-visible:rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
              >
                TikTok Community Guidelines
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
