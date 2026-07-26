import { aboutMarketsContent } from "@/content/about";
import { SectionIntro } from "@/components/ui/section-intro";

export function AboutMarketsSection() {
  const { eyebrow, heading, supportingCopy, markets, stats } =
    aboutMarketsContent;

  return (
    <section
      aria-labelledby="about-markets-heading"
      className="relative overflow-hidden bg-brand-navy-deep"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="lg:grid lg:grid-cols-12 lg:items-end lg:gap-12 xl:gap-16">
          <div className="lg:col-span-5">
            <SectionIntro
              eyebrow={eyebrow}
              heading={heading}
              supporting={supportingCopy}
              headingId="about-markets-heading"
              variant="dark"
            />
          </div>

          <div className="mt-12 lg:col-span-7 lg:mt-0">
            <div className="relative border-t border-white/10 pt-10 lg:pt-0 lg:border-t-0 lg:border-l lg:border-white/10 lg:pl-12 xl:pl-16">
              <div className="flex flex-col gap-10 md:flex-row md:flex-wrap md:items-end md:justify-between md:gap-8">
                <div className="min-w-0">
                  <p className="font-display text-5xl font-extrabold leading-none tracking-tight text-brand-primary-light sm:text-6xl lg:text-[5.5rem]">
                    {stats[0]?.value}
                  </p>
                  <p className="mt-2 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-white">
                    {stats[0]?.label}
                  </p>
                </div>

                <div className="hidden md:block" aria-hidden="true">
                  <svg
                    className="h-16 w-32 text-brand-primary/25 lg:h-20 lg:w-40"
                    viewBox="0 0 160 80"
                    fill="none"
                  >
                    <path
                      d="M8 60 Q50 20 80 45 T152 30"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeDasharray="3 5"
                    />
                    <circle cx="8" cy="60" r="3" fill="currentColor" />
                    <circle cx="152" cy="30" r="3" fill="currentColor" />
                  </svg>
                </div>

                <div className="min-w-0 text-left md:text-right">
                  <p className="font-display text-4xl font-extrabold leading-none tracking-tight text-brand-primary-light sm:text-5xl md:text-6xl">
                    {stats[1]?.value}
                  </p>
                  <p className="mt-2 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-white">
                    {stats[1]?.label}
                  </p>
                </div>
              </div>

              <ul className="mt-10 space-y-3 border-t border-white/10 pt-8 sm:mt-12">
                {markets.map((market) => (
                  <li
                    key={market.id}
                    className="font-display text-xl font-bold uppercase tracking-[0.06em] text-white sm:text-2xl"
                  >
                    {market.label}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
