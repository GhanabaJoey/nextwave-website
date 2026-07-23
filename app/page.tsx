import { HeroSection } from "@/components/sections/home/hero-section";
import { NetworkStatsSection } from "@/components/sections/home/network-stats-section";
import { WhyNextwaveSection } from "@/components/sections/home/why-nextwave-section";
import { CreatorJourneySection } from "@/components/sections/home/creator-journey-section";
import { CommunityPreviewSection } from "@/components/sections/home/community-preview-section";
import { TestimonialsSection } from "@/components/sections/home/testimonials-section";
import { FaqSection } from "@/components/sections/home/faq-section";
import { FinalCtaSection } from "@/components/sections/home/final-cta-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <NetworkStatsSection />
      <WhyNextwaveSection />
      <CreatorJourneySection />
      <CommunityPreviewSection />
      <TestimonialsSection />
      <FaqSection />
      <FinalCtaSection />
    </>
  );
}
