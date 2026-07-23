/** Unsplash License — https://unsplash.com/license */

export type AboutImage = {
  src: string;
  alt: string;
  photoPageUrl: string;
  photographer: string;
  photographerUrl: string;
};

export const aboutHeroContent = {
  eyebrow: "About NextWave",
  headingLines: ["Built for the", "Creator Journey."] as const,
  supportingCopy:
    "NextWave is a creator network built around development, community and shared experiences — helping LIVE creators learn, connect and keep moving forward.",
  primaryCta: { label: "Apply to Join", href: "/apply" },
  secondaryCta: { label: "Explore the Community", href: "/community" },
  image: {
    src: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d",
    alt: "Two creators recording content together in a studio with microphones and headphones, representing collaborative creator community.",
    photoPageUrl:
      "https://unsplash.com/photos/man-and-woman-sitting-in-front-of-microphone-during-podcast-recording-61fd2cf4d44d",
    photographer: "CoWomen",
    photographerUrl: "https://unsplash.com/@cowomen",
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
    src: "https://images.unsplash.com/photo-1753162660995-52218587ce71",
    alt: "Two content creators filming a video together in a creative studio with sketches and production equipment visible.",
    photoPageUrl:
      "https://unsplash.com/photos/two-women-are-filming-a-video-tvePcqY52-4",
    photographer: "Vitaly Gariev",
    photographerUrl: "https://unsplash.com/@silverkblack",
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
    src: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04",
    alt: "A creator working in a professional recording studio with warm lighting, microphones and production equipment.",
    photoPageUrl:
      "https://images.unsplash.com/photos/man-in-black-shirt-sitting-on-chair-in-front-of-computer-set-IMUwe-p1yqs",
    photographer: "Antenna",
    photographerUrl: "https://unsplash.com/@thisisantenna",
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
    "NextWave currently supports a growing creator community across the United Kingdom and Australia.",
  markets: [
    { id: "uk", label: "United Kingdom" },
    { id: "au", label: "Australia" },
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
