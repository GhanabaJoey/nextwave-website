import { networkStatsContent, type NetworkStat } from "@/content/home";
import { SectionIntro } from "@/components/ui/section-intro";

function StatItem({ stat }: { stat: NetworkStat }) {
  const valueClassName =
    stat.accent === "gold"
      ? "text-brand-accent"
      : "text-brand-primary";

  return (
    <li className="border-b border-white/10 py-8 last:border-b-0 sm:border-b-0 sm:py-0 lg:border-b-0 lg:border-l lg:border-white/10 lg:pl-8 lg:first:border-l-0">
      <p
        className={`font-display text-4xl font-extrabold tracking-tight sm:text-5xl ${valueClassName}`}
      >
        {stat.value}
      </p>
      <p className="mt-2 text-base font-semibold text-white">{stat.label}</p>
      <p className="mt-2 text-sm leading-relaxed text-text-muted">
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
      className="border-b border-white/10 bg-surface-elevated"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 lg:py-20">
        <SectionIntro
          eyebrow={eyebrow}
          heading={heading}
          supporting={supportingText}
          headingId="network-stats-heading"
          variant="dark"
        />

        <ul className="mt-12 grid grid-cols-1 gap-y-0 sm:grid-cols-2 sm:gap-x-10 sm:gap-y-10 lg:mt-14 lg:grid-cols-4 lg:gap-x-0">
          {stats.map((stat) => (
            <StatItem key={stat.id} stat={stat} />
          ))}
        </ul>
      </div>
    </section>
  );
}
