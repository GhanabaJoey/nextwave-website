import type { Metadata } from "next";
import { ApplyBeforeSection } from "@/components/sections/apply/apply-before-section";
import { ApplyHeroSection } from "@/components/sections/apply/apply-hero-section";
import { ApplyNextStepsSection } from "@/components/sections/apply/apply-next-steps-section";
import { CreatorApplicationSection } from "@/components/sections/apply/creator-application-section";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Apply to Join",
  description:
    "Apply to join NextWave Creator Network — a TikTok LIVE creator community for the United Kingdom and Australia.",
});

export default function ApplyPage() {
  return (
    <>
      <ApplyHeroSection />
      <ApplyBeforeSection />
      <CreatorApplicationSection />
      <ApplyNextStepsSection />
    </>
  );
}
