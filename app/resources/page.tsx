import type { Metadata } from "next";
import { ResourcesComingSoonSection } from "@/components/sections/resources/resources-coming-soon-section";
import { ResourcesCreatorGrowthSection } from "@/components/sections/resources/resources-creator-growth-section";
import { ResourcesFinalCtaSection } from "@/components/sections/resources/resources-final-cta-section";
import { ResourcesHeroSection } from "@/components/sections/resources/resources-hero-section";
import { ResourcesLiveFoundationsSection } from "@/components/sections/resources/resources-live-foundations-section";
import { ResourcesNextwaveLearningSection } from "@/components/sections/resources/resources-nextwave-learning-section";
import { ResourcesResponsibleGuidanceSection } from "@/components/sections/resources/resources-responsible-guidance-section";
import { ResourcesStartHereSection } from "@/components/sections/resources/resources-start-here-section";
import { ResourcesStreamQualitySection } from "@/components/sections/resources/resources-stream-quality-section";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Creator Resources",
  description: `Practical LIVE creator guidance from ${siteConfig.shortName} — foundations, stream quality, growth tips and learning with the community.`,
};

export default function ResourcesPage() {
  return (
    <>
      <ResourcesHeroSection />
      <ResourcesStartHereSection />
      <ResourcesLiveFoundationsSection />
      <ResourcesStreamQualitySection />
      <ResourcesCreatorGrowthSection />
      <ResourcesResponsibleGuidanceSection />
      <ResourcesNextwaveLearningSection />
      <ResourcesComingSoonSection />
      <ResourcesFinalCtaSection />
    </>
  );
}
