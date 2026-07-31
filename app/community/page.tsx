import type { Metadata } from "next";
import { CommunityCreatorVoicesSection } from "@/components/sections/community/community-creator-voices-section";
import { CommunityDevelopmentSection } from "@/components/sections/community/community-development-section";
import { CommunityExperiencesSection } from "@/components/sections/community/community-experiences-section";
import { CommunityFinalCtaSection } from "@/components/sections/community/community-final-cta-section";
import { CommunityHeroSection } from "@/components/sections/community/community-hero-section";
import { CommunityLiveWarsSection } from "@/components/sections/community/community-live-wars-section";
import { CommunityMomentsSection } from "@/components/sections/community/community-moments-section";
import { CommunityNetworkSection } from "@/components/sections/community/community-network-section";
import { CommunityStatementSection } from "@/components/sections/community/community-statement-section";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Community & Events",
  description:
    "Discover the NextWave community — LIVE Wars, creator training, connection and recognition across the United Kingdom and AU+.",
});

export default function CommunityPage() {
  return (
    <>
      <CommunityHeroSection />
      <CommunityStatementSection />
      <CommunityExperiencesSection />
      <CommunityLiveWarsSection />
      <CommunityDevelopmentSection />
      <CommunityMomentsSection />
      <CommunityNetworkSection />
      <CommunityCreatorVoicesSection />
      <CommunityFinalCtaSection />
    </>
  );
}
