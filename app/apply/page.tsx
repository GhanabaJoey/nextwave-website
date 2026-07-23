import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply",
};

export default function ApplyPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">Apply</h1>
      <p className="mt-4 max-w-2xl text-foreground/80">
        The application form will be built in a later phase. Use the navigation
        above to visit the other sections of the site.
      </p>
    </div>
  );
}
