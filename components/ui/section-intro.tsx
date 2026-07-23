type SectionIntroVariant = "dark" | "gradient" | "elevated";

const variantStyles: Record<
  SectionIntroVariant,
  { eyebrow: string; heading: string; body: string }
> = {
  dark: {
    eyebrow: "text-brand-primary",
    heading: "text-white",
    body: "text-text-muted",
  },
  gradient: {
    eyebrow: "text-brand-primary-light",
    heading: "text-white",
    body: "text-text-muted",
  },
  elevated: {
    eyebrow: "text-brand-primary",
    heading: "text-white",
    body: "text-text-muted",
  },
};

export function SectionIntro({
  eyebrow,
  heading,
  supporting,
  headingId,
  variant = "dark",
  align = "left",
}: {
  eyebrow: string;
  heading: string;
  supporting?: string;
  headingId: string;
  variant?: SectionIntroVariant;
  align?: "left" | "center";
}) {
  const styles = variantStyles[variant];
  const alignClass =
    align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl";

  return (
    <div className={alignClass}>
      <p
        className={`font-sans text-xs font-semibold uppercase tracking-[0.24em] ${styles.eyebrow}`}
      >
        {eyebrow}
      </p>
      <h2
        id={headingId}
        className={`font-display mt-3 text-[2.25rem] font-extrabold leading-[1.08] tracking-[-0.02em] sm:mt-4 sm:text-[2.5rem] lg:text-[3rem] lg:leading-[1.06] xl:text-[3.75rem] ${styles.heading}`}
      >
        {heading}
      </h2>
      {supporting ? (
        <p
          className={`mt-4 max-w-2xl font-sans text-base leading-relaxed sm:mt-5 sm:text-lg ${styles.body}`}
        >
          {supporting}
        </p>
      ) : null}
    </div>
  );
}
