import { communityStatementContent } from "@/content/community";

export function CommunityStatementSection() {
  const { eyebrow, statementLines, supportingCopy } = communityStatementContent;

  return (
    <section
      aria-labelledby="community-statement-heading"
      className="relative bg-brand-navy"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-36">
        <div className="lg:grid lg:grid-cols-12 lg:items-end lg:gap-12 xl:gap-20">
          <div className="lg:col-span-7">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-brand-primary">
              {eyebrow}
            </p>
            <h2
              id="community-statement-heading"
              className="font-display mt-5 text-[2.25rem] font-extrabold leading-[1.04] tracking-[-0.02em] text-white sm:mt-6 sm:text-[2.75rem] lg:text-[3.25rem] xl:text-[3.75rem]"
            >
              {statementLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
          </div>

          <p className="mt-8 max-w-md font-sans text-base leading-relaxed text-text-muted sm:text-lg lg:col-span-5 lg:mt-0 lg:pb-2">
            {supportingCopy}
          </p>
        </div>
      </div>
    </section>
  );
}
