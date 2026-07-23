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
  const alignClass = align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl";

  return (
    <div className={alignClass}>
      <p
        className={`font-display text-sm font-bold uppercase tracking-[0.18em] ${styles.eyebrow}`}
      >
        {eyebrow}
      </p>
      <h2
        id={headingId}
        className={`font-display mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-4xl ${styles.heading}`}
      >
        {heading}
      </h2>
      {supporting ? (
        <p className={`mt-4 text-base leading-relaxed sm:text-lg ${styles.body}`}>
          {supporting}
        </p>
      ) : null}
    </div>
  );
}
