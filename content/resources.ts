/** Unsplash License — https://unsplash.com/license */

export type ResourceImage = {
  src: string;
  alt: string;
  photoPageUrl: string;
  photographer: string;
  photographerUrl: string;
};

export const resourcesHeroContent = {
  eyebrow: "Creator Resources",
  headlineLines: ["Build Better.", "Go LIVE Smarter."] as const,
  supportingCopy:
    "Practical guidance to help creators prepare, improve their LIVE content and build stronger habits around their creator journey.",
  primaryCta: { label: "Explore Resources", href: "#resources" },
  secondaryCta: { label: "Apply to Join", href: "/apply" },
  image: {
    src: "https://images.unsplash.com/photo-1684224389895-ca9862cd625b",
    alt: "A creator at a streaming desk with colourful purple and blue lighting, multiple monitors and a microphone during a LIVE session.",
    photoPageUrl:
      "https://unsplash.com/photos/a-man-sitting-in-front-of-a-computer-monitor-W5KtfcB7kw4",
    photographer: "Amine mouzaoui",
    photographerUrl: "https://unsplash.com/@hoovr01",
  } satisfies ResourceImage,
} as const;

export const resourcesStartHereContent = {
  sectionId: "resources",
  eyebrow: "Start Here",
  heading: "Strong LIVE content starts with the basics.",
  intro:
    "Before worrying about numbers, focus on creating a LIVE experience people can comfortably watch, understand and return to.",
  fundamentals: [
    {
      id: "consistent",
      number: "01",
      title: "Be Consistent",
      description: "Build a LIVE routine you can realistically maintain.",
    },
    {
      id: "clear-experience",
      number: "02",
      title: "Create a Clear Experience",
      description:
        "Give viewers a reason to understand what your LIVE is about.",
    },
    {
      id: "engage",
      number: "03",
      title: "Engage Your Audience",
      description:
        "Acknowledge viewers, encourage conversation and make participation feel natural.",
    },
    {
      id: "review",
      number: "04",
      title: "Review & Improve",
      description:
        "Pay attention to what works and keep refining your approach.",
    },
  ],
} as const;

export const resourcesLiveFoundationsContent = {
  sectionId: "live-foundations",
  eyebrow: "LIVE Foundations",
  heading: "Before you press Go LIVE.",
  intro:
    "A quick checklist before you start — space, sound, connection and intent.",
  items: [
    {
      id: "space",
      title: "Your Space",
      description:
        "Keep your background intentional and remove unnecessary distractions.",
    },
    {
      id: "lighting",
      title: "Your Lighting",
      description:
        "Make sure your face or main subject is clearly visible.",
    },
    {
      id: "audio",
      title: "Your Audio",
      description:
        "Clear audio matters. Reduce background noise and keep your microphone positioned appropriately.",
    },
    {
      id: "connection",
      title: "Your Connection",
      description:
        "Use a stable internet connection whenever possible.",
    },
    {
      id: "plan",
      title: "Your Plan",
      description:
        "Know what you want to talk about, play, demonstrate or achieve during the session.",
    },
  ],
} as const;

export const resourcesStreamQualityContent = {
  sectionId: "stream-quality",
  eyebrow: "Stream Quality",
  heading: "Small improvements can change the experience.",
  topics: [
    {
      id: "light",
      title: "Light",
      description:
        "Prioritise lighting your face before adding decorative background lighting.",
    },
    {
      id: "sound",
      title: "Sound",
      description:
        "Clear, comfortable audio makes a LIVE easier to follow.",
    },
    {
      id: "camera",
      title: "Camera",
      description:
        "Position your camera around eye level and create an intentional frame.",
    },
    {
      id: "background",
      title: "Background",
      description:
        "Build an environment that supports your content rather than competing with it.",
    },
  ],
  image: {
    src: "https://images.unsplash.com/photo-1639539420800-41be0c3a6d03",
    alt: "A streaming desk with dual monitors, keyboard and a broadcast microphone on a boom arm.",
    photoPageUrl:
      "https://images.unsplash.com/photos/a-desk-with-two-monitors-and-a-microphone-s_VXztGl6bI",
    photographer: "Tenten Co",
    photographerUrl: "https://unsplash.com/@tenten",
  } satisfies ResourceImage,
} as const;

export const resourcesCreatorGrowthContent = {
  sectionId: "creator-growth",
  eyebrow: "Creator Growth",
  heading: "Growth is built between LIVE sessions too.",
  supporting:
    "What you do away from LIVE shapes how you show up when you go LIVE.",
  principles: [
    {
      id: "consistency",
      title: "Consistency",
      description: "Build a schedule your audience can recognise.",
    },
    {
      id: "community",
      title: "Community",
      description:
        "Remember returning viewers and create reasons for people to participate.",
    },
    {
      id: "experiment",
      title: "Experiment",
      description: "Test different topics, formats and approaches.",
    },
    {
      id: "reflect",
      title: "Reflect",
      description:
        "Review your sessions and identify what you want to improve next.",
    },
  ],
} as const;

export const resourcesResponsibleGuidanceContent = {
  sectionId: "responsible-guidance",
  heading: "Create responsibly.",
  copy: "Follow TikTok's current Community Guidelines and LIVE policies, protect your personal information, and avoid sharing private details during broadcasts.",
  tiktokGuidelinesUrl: "https://www.tiktok.com/community-guidelines",
} as const;

export const resourcesNextwaveLearningContent = {
  eyebrow: "Learning with NextWave",
  heading: "You don't have to figure everything out alone.",
  copy: "NextWave brings creators together through learning opportunities, shared experiences and conversations designed to support continued development.",
  items: [
    {
      id: "training",
      title: "Creator Training",
      description: "Practical creator-development sessions.",
    },
    {
      id: "community-learning",
      title: "Community Learning",
      description: "Exchange experiences and ideas with other creators.",
    },
    {
      id: "shared-experience",
      title: "Shared Experience",
      description: "Learn through participation in community activities.",
    },
    {
      id: "live-development",
      title: "LIVE Development",
      description: "Guidance focused on improving your LIVE presence.",
    },
  ],
} as const;

export const resourcesComingSoonContent = {
  sectionId: "coming-next",
  eyebrow: "Coming Next",
  heading: "More creator resources are on the way.",
  copy: "We're building practical guides and learning materials for the NextWave creator community.",
  labels: [
    { id: "live-guides", label: "LIVE Guides" },
    { id: "checklists", label: "Creator Checklists" },
    { id: "training", label: "Training Resources" },
  ],
} as const;

export const resourcesFinalCtaContent = {
  eyebrow: "Ready for more?",
  heading: "Learn with a community behind you.",
  supportingCopy:
    "Apply to join NextWave and continue developing alongside creators who understand the LIVE journey.",
  primaryCta: { label: "Apply to Join", href: "/apply" },
  secondaryCta: { label: "Explore the Community", href: "/community" },
} as const;
