import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { AdminReviewsPanel } from "@/components/admin/admin-reviews-panel";
import { SectionIntro } from "@/components/ui/section-intro";
import { adminReviewsContent } from "@/content/admin";
import { getAuthenticatedAdmin } from "@/lib/auth/admin";
import { createPageMetadata } from "@/lib/metadata";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: adminReviewsContent.pageTitle,
    description: adminReviewsContent.description,
  }),
  robots: {
    index: false,
    follow: false,
  },
};

export default async function AdminReviewsPage() {
  const admin = await getAuthenticatedAdmin();

  if (!admin) {
    redirect("/admin/login?next=/admin/reviews");
  }

  return (
    <section className="relative bg-surface-elevated">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <SectionIntro
          eyebrow={adminReviewsContent.eyebrow}
          heading={adminReviewsContent.heading}
          supporting={adminReviewsContent.description}
          headingId="admin-reviews-heading"
          variant="elevated"
        />

        <div className="mt-12 lg:mt-14">
          <AdminReviewsPanel />
        </div>
      </div>
    </section>
  );
}
