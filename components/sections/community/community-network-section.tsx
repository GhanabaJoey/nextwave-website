import { communityNetworkContent } from "@/content/community";

export function CommunityNetworkSection() {
  const { eyebrow, heading, copy, creatorsStat, markets } =
    communityNetworkContent;

  const headingLines = heading.split("\n");

  return (
    <section
      aria-labelledby="community-network-heading"
      className="relative bg-brand-navy"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <div className="lg:grid lg:grid-cols-12 lg:items-end lg:gap-12 xl:gap-16">
          <div className="lg:col-span-5">
            <p className="font-sans text-xs font-semibold uppercase tracking-[0.24em] text-brand-primary">
              {eyebrow}
            </p>
            <h2
              id="community-network-heading"
              className="font-display mt-4 text-[2.25rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-white sm:text-[2.5rem] lg:text-[3rem] xl:text-[3.75rem]"
            >
              {headingLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <p className="mt-5 max-w-xl font-sans text-base leading-relaxed text-text-muted sm:text-lg">
              {copy}
            </p>
          </div>

          <div className="mt-12 border-t border-white/10 pt-10 lg:col-span-7 lg:mt-0 lg:border-t-0 lg:border-l lg:border-white/10 lg:pt-0 lg:pl-12 xl:pl-16">
            <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="font-display text-6xl font-extrabold leading-none tracking-tight text-brand-primary-light sm:text-7xl lg:text-[5.5rem]">
                  {creatorsStat.value}
                </p>
                <p className="mt-2 font-sans text-xs font-semibold uppercase tracking-[0.2em] text-white">
                  {creatorsStat.label}
                </p>
              </div>

              <div className="sm:text-right">
                <p
                  aria-hidden="true"
                  className="mb-4 hidden font-display text-2xl text-brand-primary/40 sm:block"
                >
                  ↕
                </p>
                <ul className="space-y-2">
                  {markets.map((market) => (
                    <li
                      key={market.id}
                      className="font-display text-xl font-bold uppercase tracking-[0.05em] text-white sm:text-2xl"
                    >
                      {market.label}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
