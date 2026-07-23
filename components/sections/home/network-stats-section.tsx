import { networkStatsContent, type NetworkStat } from "@/content/home";
import { SectionIntro } from "@/components/ui/section-intro";

function StatItem({
  stat,
  showLeadingDivider,
}: {
  stat: NetworkStat;
  showLeadingDivider: boolean;
}) {
  const valueClassName = "text-brand-primary-light";

  const isNumericStat = /^\d+\+?$/.test(stat.value);

  const valueSizeClass = isNumericStat
    ? "text-5xl leading-none sm:text-6xl lg:text-[4.25rem] xl:text-7xl"
    : "text-[1.75rem] leading-none sm:text-4xl lg:text-[2.5rem] xl:text-[2.75rem]";

  return (
    <li
      className={`min-w-0 ${
        showLeadingDivider
          ? "border-t border-white/10 pt-8 sm:border-t-0 sm:pt-0 lg:border-l lg:border-t-0 lg:border-white/10 lg:pl-8 xl:pl-10"
          : ""
      }`}
    >
      <p
        className={`font-display font-extrabold tracking-tight ${valueSizeClass} ${valueClassName}`}
      >
        {stat.value}
      </p>
      <p className="mt-2 font-sans text-xs font-semibold uppercase tracking-[0.18em] text-white sm:text-[13px]">
        {stat.label}
      </p>
      <p className="mt-2 max-w-[14rem] font-sans text-sm leading-relaxed text-text-muted">
        {stat.description}
      </p>
    </li>
  );
}

export function NetworkStatsSection() {
  const { eyebrow, heading, supportingText, stats } = networkStatsContent;

  return (
    <section
      aria-labelledby="network-stats-heading"
      className="relative overflow-hidden bg-surface-elevated"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <SectionIntro
          eyebrow={eyebrow}
          heading={heading}
          supporting={supportingText}
          headingId="network-stats-heading"
          variant="elevated"
        />

        <ul className="mt-12 grid grid-cols-1 gap-y-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 lg:mt-14 lg:grid-cols-4 lg:gap-x-0 lg:gap-y-0">
          {stats.map((stat, index) => (
            <StatItem
              key={stat.id}
              stat={stat}
              showLeadingDivider={index > 0}
            />
          ))}
        </ul>
      </div>
    </section>
  );
}
