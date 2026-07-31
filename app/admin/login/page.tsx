import type { Metadata } from "next";
import { Suspense } from "react";
import { AdminLoginForm } from "@/components/admin/admin-login-form";
import { SectionIntro } from "@/components/ui/section-intro";
import { adminLoginContent } from "@/content/admin";
import { createPageMetadata } from "@/lib/metadata";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: "Admin Sign In",
    description: "Sign in to NextWave Creator Network review moderation.",
  }),
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminLoginPage() {
  return (
    <section className="relative bg-brand-navy">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/10 to-transparent"
      />

      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <SectionIntro
          eyebrow={adminLoginContent.eyebrow}
          heading={adminLoginContent.heading}
          supporting={adminLoginContent.description}
          headingId="admin-login-heading"
          variant="dark"
          align="center"
        />

        <div className="mt-12 animate-[fadeSlideIn_0.5s_ease-out] lg:mt-14">
          <Suspense fallback={null}>
            <AdminLoginForm />
          </Suspense>
        </div>
      </div>
    </section>
  );
}
