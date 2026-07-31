/** Unsplash License — https://unsplash.com/license */

export type AboutImage = {
  src: string;
  alt: string;
  photoPageUrl: string;
  photographer: string;
  photographerUrl: string;
  platform?: "Pexels";
  platformUrl?: string;
};

export const aboutHeroContent = {
  eyebrow: "About NextWave",
  headingLines: ["Built for the", "Creator Journey."] as const,
  supportingCopy:
    "NextWave is a creator network built around development, community and shared experiences — helping LIVE creators learn, connect and keep moving forward.",
  primaryCta: { label: "Apply to Join", href: "/apply" },
  secondaryCta: { label: "Explore the Community", href: "/community" },
  image: {
    src: "/images/about-creators-recording.jpg",
    alt: "Two creators recording together with microphones, a laptop and a smartphone on a ring-light stand in a bright modern studio.",
    photoPageUrl:
      "https://www.pexels.com/photo/women-sitting-on-round-chair-while-looking-at-each-other-6953810/",
    photographer: "George Milton",
    photographerUrl: "https://www.pexels.com/@george-milton/",
    platform: "Pexels",
    platformUrl: "https://www.pexels.com",
  } satisfies AboutImage,
} as const;

export const aboutStoryContent = {
  eyebrow: "Our Story",
  heading: "Creators shouldn't have to grow alone.",
  paragraphs: [
    "LIVE gives creators the opportunity to build communities, entertain audiences and develop their own presence.",
    "But consistency, confidence and growth take more than simply pressing the LIVE button.",
    "NextWave was built around the idea that creators should have access to practical development, shared experiences and a community of people who understand the journey.",
  ],
  image: {
    src: "/images/our-story-creators-recording.jpg",
    alt: "Two content creators recording together with professional microphones and headphones.",
    photoPageUrl:
      "https://unsplash.com/photos/two-men-sitting-by-the-table-using-microphone-and-headphones-inside-studio-during-daytime-PdKvBaN44UM",
    photographer: "Cody Board",
    photographerUrl: "https://unsplash.com/@codypboard",
  } satisfies AboutImage,
} as const;

export const aboutMissionContent = {
  eyebrow: "Our Mission",
  heading: "Turn potential into progress.",
  mission:
    "Our mission is to create an environment where LIVE creators can develop their skills, build stronger communities and pursue their creator goals with greater confidence.",
  supporting:
    "Through practical learning, creator experiences and community, we want every member to have opportunities to keep moving forward.",
} as const;

export const aboutPrinciplesContent = {
  heading: "What drives NextWave.",
  principles: [
    {
      id: "learn",
      title: "Learn",
      description: "Practical knowledge creators can use.",
      accent: "primary" as const,
    },
    {
      id: "grow",
      title: "Grow",
      description: "Encouraging consistent development.",
      accent: "primary" as const,
    },
    {
      id: "earn",
      title: "Earn",
      description:
        "Helping creators understand opportunities within the LIVE ecosystem.",
      accent: "primary" as const,
    },
    {
      id: "connect",
      title: "Connect",
      description: "Building genuine relationships between creators.",
      accent: "primary" as const,
    },
    {
      id: "succeed",
      title: "Succeed",
      description:
        "Recognising progress and encouraging creators to keep moving forward.",
      accent: "gold" as const,
    },
  ],
} as const;

export type AboutPrinciple =
  (typeof aboutPrinciplesContent.principles)[number];

export const aboutSupportContent = {
  eyebrow: "Creator Support",
  heading: "Support beyond the LIVE button.",
  lifestyleImage: {
    src: "/images/creator-support-coaching.jpg",
    alt: "A creator coach and trainee reviewing content together on a laptop and smartphone in a professional studio with a broadcast microphone.",
    photoPageUrl:
      "https://unsplash.com/photos/a-man-and-woman-with-headsets-on-looking-at-a-laptop-4GyrlS5-PGM",
    photographer: "Flipsnack",
    photographerUrl: "https://unsplash.com/@flipsnack",
  } satisfies AboutImage,
  areas: [
    {
      id: "live-development",
      title: "LIVE Development",
      description:
        "Practical guidance focused on improving LIVE content, consistency and creator confidence.",
    },
    {
      id: "training",
      title: "Training",
      description:
        "Learning opportunities focused on creator development and LIVE strategy.",
    },
    {
      id: "community",
      title: "Community",
      description:
        "Connect with creators, exchange experiences and become part of a wider network.",
    },
    {
      id: "events",
      title: "Events & Recognition",
      description:
        "Take part in community experiences and celebrate creator progress.",
    },
  ],
} as const;

export type AboutSupportArea =
  (typeof aboutSupportContent.areas)[number];

export const aboutMarketsContent = {
  eyebrow: "Our Network",
  heading: "Growing together, across borders.",
  supportingCopy:
    "NextWave currently supports a growing creator community across the United Kingdom and AU+.",
  markets: [
    { id: "uk", label: "United Kingdom" },
    { id: "au", label: "AU+" },
  ],
  stats: [
    { id: "creators", value: "40+", label: "Creators" },
    { id: "markets", value: "2", label: "Markets" },
  ],
} as const;

export const aboutFinalCtaContent = {
  eyebrow: "Your next wave starts here",
  heading: "Ready to grow with us?",
  supportingCopy:
    "Join a creator community built around learning, connection, experiences and progress.",
  primaryCta: { label: "Apply to Join", href: "/apply" },
  secondaryCta: { label: "Explore the Community", href: "/community" },
} as const;
