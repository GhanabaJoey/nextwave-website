import type { Metadata } from "next";
import { ContactHeroSection } from "@/components/sections/contact/contact-hero-section";
import { ContactMainSection } from "@/components/sections/contact/contact-main-section";
import { ContactReassuranceSection } from "@/components/sections/contact/contact-reassurance-section";
import { siteConfig } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${siteConfig.shortName} with questions about the creator network, community events or general enquiries.`,
};

export default function ContactPage() {
  return (
    <>
      <ContactHeroSection />
      <ContactMainSection />
      <ContactReassuranceSection />
    </>
  );
}
