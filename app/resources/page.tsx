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
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Creator Resources",
  description:
    "Practical LIVE creator guidance from NextWave — foundations, stream quality, growth habits and learning with the community.",
});

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
