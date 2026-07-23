import type { Metadata } from "next";
import { AboutFinalCtaSection } from "@/components/sections/about/about-final-cta-section";
import { AboutHeroSection } from "@/components/sections/about/about-hero-section";
import { AboutMarketsSection } from "@/components/sections/about/about-markets-section";
import { AboutMissionSection } from "@/components/sections/about/about-mission-section";
import { AboutPrinciplesSection } from "@/components/sections/about/about-principles-section";
import { AboutStorySection } from "@/components/sections/about/about-story-section";
import { AboutSupportSection } from "@/components/sections/about/about-support-section";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${siteConfig.shortName} — a TikTok LIVE creator community focused on learning, connection, and growth across the UK and Australia.`,
};

export default function AboutPage() {
  return (
    <>
      <AboutHeroSection />
      <AboutStorySection />
      <AboutMissionSection />
      <AboutPrinciplesSection />
      <AboutSupportSection />
      <AboutMarketsSection />
      <AboutFinalCtaSection />
    </>
  );
}
