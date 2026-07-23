import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Community",
};

export default function CommunityPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-semibold tracking-tight">
        Community &amp; Events
      </h1>
      <p className="mt-4 max-w-2xl text-foreground/80">
        Content for this page will be added in a later phase. Use the navigation
        above to visit the other sections of the site.
      </p>
    </div>
  );
}
