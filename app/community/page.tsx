import type { Metadata } from "next";
import { CommunityDevelopmentSection } from "@/components/sections/community/community-development-section";
import { CommunityExperiencesSection } from "@/components/sections/community/community-experiences-section";
import { CommunityFinalCtaSection } from "@/components/sections/community/community-final-cta-section";
import { CommunityHeroSection } from "@/components/sections/community/community-hero-section";
import { CommunityLiveWarsSection } from "@/components/sections/community/community-live-wars-section";
import { CommunityMomentsSection } from "@/components/sections/community/community-moments-section";
import { CommunityNetworkSection } from "@/components/sections/community/community-network-section";
import { CommunityStatementSection } from "@/components/sections/community/community-statement-section";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Community & Events",
  description: `Discover the ${siteConfig.shortName} community — LIVE Wars, training, creator connection and recognition across the UK and Australia.`,
};

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
      <CommunityFinalCtaSection />
    </>
  );
}
