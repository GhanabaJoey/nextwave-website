import type { Metadata } from "next";
import { ContactHeroSection } from "@/components/sections/contact/contact-hero-section";
import { ContactMainSection } from "@/components/sections/contact/contact-main-section";
import { ContactReassuranceSection } from "@/components/sections/contact/contact-reassurance-section";
import { createPageMetadata } from "@/lib/metadata";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact NextWave Creator Network with questions about the creator community, events or general enquiries.",
});

export default function ContactPage() {
  return (
    <>
      <ContactHeroSection />
      <ContactMainSection />
      <ContactReassuranceSection />
    </>
  );
}
