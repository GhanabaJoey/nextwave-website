import {
  aboutPrinciplesContent,
  type AboutPrinciple,
} from "@/content/about";

function PrincipleItem({
  principle,
  index,
}: {
  principle: AboutPrinciple;
  index: number;
}) {
  const isGold = principle.accent === "gold";
  const numberClass = isGold
    ? "text-brand-accent"
    : "text-brand-primary-light";

  return (
    <li className="border-t border-white/10 py-7 first:border-t-0 first:pt-0 sm:py-8 lg:py-10">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-8 lg:gap-12">
        <p
          className={`font-display shrink-0 text-3xl font-extrabold leading-none tracking-tight sm:w-14 sm:text-4xl lg:text-5xl ${numberClass}`}
          aria-hidden="true"
        >
          {String(index + 1).padStart(2, "0")}
        </p>
        <div className="min-w-0 flex-1">
          <h3
            className={`font-display text-xl font-bold uppercase tracking-[0.08em] sm:text-2xl ${
              isGold ? "text-brand-accent" : "text-white"
            }`}
          >
            {principle.title}
          </h3>
          <p className="mt-2 max-w-lg font-sans text-base leading-relaxed text-text-muted">
            {principle.description}
          </p>
        </div>
      </div>
    </li>
  );
}

export function AboutPrinciplesSection() {
  const { heading, principles } = aboutPrinciplesContent;

  return (
    <section
      aria-labelledby="about-principles-heading"
      className="relative bg-surface-elevated"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <h2
          id="about-principles-heading"
          className="font-display max-w-2xl text-balance text-[2.25rem] font-extrabold leading-[1.08] tracking-[-0.02em] text-white sm:text-[2.5rem] lg:text-[3rem] xl:text-[3.75rem]"
        >
          {heading}
        </h2>

        <ol className="mt-10 lg:mt-14">
          {principles.map((principle, index) => (
            <PrincipleItem
              key={principle.id}
              principle={principle}
              index={index}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}
