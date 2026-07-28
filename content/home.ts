export const heroContent = {
  eyebrow: "NextWave Creator Network",
  headlineLines: ["Create.", "Go LIVE.", "Grow Together."] as const,
  supportingCopy:
    "A creator community helping LIVE creators develop their skills, connect with others and unlock more opportunities.",
  microcopy:
    "For creators serious about developing their LIVE presence.",
  trustSignal: {
    creators: "40+ Creators",
    markets: "United Kingdom • Australia",
  },
  primaryCta: {
    label: "Apply to Join",
    href: "/apply",
  },
  secondaryCta: {
    label: "Discover NextWave",
    href: "/about",
  },
} as const;

/** Unsplash License — free commercial use: https://unsplash.com/license */
export const heroImage = {
  src: "https://images.unsplash.com/photo-1676380364777-d53c900178fa",
  alt: "A content creator wearing headphones at a podcast studio desk with a broadcast microphone, laptop and vibrant purple and blue studio lighting.",
  photoPageUrl:
    "https://unsplash.com/photos/a-woman-sitting-in-front-of-a-laptop-computer-R5O3KIf0kgI",
  photographer: "Videodeck .co",
  photographerUrl: "https://unsplash.com/@videodeck",
} as const;

export const networkStatsContent = {
  eyebrow: "Network Proof",
  heading: "Built for creators who want more from LIVE.",
  supportingText:
    "NextWave combines creator development, community and shared experiences in one growing network.",
  stats: [
    {
      id: "creators",
      value: "40+",
      label: "Creators",
      description: "A growing community of LIVE creators.",
      accent: "primary",
    },
    {
      id: "markets",
      value: "2",
      label: "Markets",
      description: "United Kingdom and Australia.",
      accent: "primary",
    },
    {
      id: "training",
      value: "Monthly",
      label: "Training",
      description: "Regular creator-development opportunities.",
      accent: "primary",
    },
    {
      id: "events",
      value: "LIVE",
      label: "Events",
      description: "Community experiences including LIVE Wars.",
      accent: "primary",
    },
  ],
} as const;

export type NetworkStat = (typeof networkStatsContent.stats)[number];

export const whyNextwaveContent = {
  eyebrow: "Why NextWave",
  heading: "Why join NextWave?",
  supportingCopy:
    "Going LIVE is easier with the right people, guidance and opportunities around you.",
  image: {
    src: "/images/samsung-memory-streamer-desk.jpg",
    alt: "A content creator in a green shirt wearing headphones at a multi-monitor streaming desk with a professional broadcast microphone, studio speakers and editing screens.",
    photoPageUrl:
      "https://unsplash.com/photos/a-man-wearing-headphones-and-sitting-at-a-desk-with-a-computer-QJjuS_DIpEY",
    photographer: "Samsung Memory",
    photographerUrl: "https://unsplash.com/@samsungmemory",
  },
  benefits: [
    {
      id: "development",
      title: "Creator Development",
      description:
        "Practical guidance to help creators improve their LIVE content, confidence and consistency.",
      accent: "primary",
    },
    {
      id: "community",
      title: "Community",
      description:
        "Connect with creators who understand the LIVE journey and share the same ambition to grow.",
      accent: "primary",
    },
    {
      id: "training",
      title: "Training",
      description:
        "Learn through regular creator-development opportunities focused on LIVE strategy and growth.",
      accent: "primary",
    },
    {
      id: "experiences",
      title: "LIVE Experiences",
      description:
        "Take part in community activities such as LIVE Wars and other shared creator experiences.",
      accent: "primary",
    },
    {
      id: "recognition",
      title: "Recognition",
      description:
        "Celebrate progress and creator milestones through community recognition moments.",
      accent: "gold",
    },
    {
      id: "opportunity",
      title: "Opportunity",
      description:
        "Become part of a growing creator network with room to develop your presence over time.",
      accent: "primary",
    },
  ],
} as const;

export type WhyNextwaveBenefit =
  (typeof whyNextwaveContent.benefits)[number];

export const creatorJourneyContent = {
  eyebrow: "How It Works",
  heading: "Your NextWave journey.",
  supportingCopy: "Joining should feel clear and straightforward.",
  steps: [
    {
      id: "apply",
      number: "01",
      title: "Apply",
      description:
        "Tell us about yourself and your creator journey.",
    },
    {
      id: "connect",
      number: "02",
      title: "Connect",
      description:
        "If your application is suitable, we'll connect with you about the next steps.",
    },
    {
      id: "start",
      number: "03",
      title: "Get Started",
      description:
        "Join the network and begin exploring creator support and community opportunities.",
    },
    {
      id: "grow",
      number: "04",
      title: "Grow",
      description:
        "Keep learning, creating and developing your LIVE presence.",
    },
  ],
} as const;

export type CreatorJourneyStep =
  (typeof creatorJourneyContent.steps)[number];

export const communityPreviewContent = {
  eyebrow: "Community & Events",
  heading: "More than a network.",
  supportingCopy:
    "NextWave brings creators together through competition, learning, recognition and shared experiences.",
  cta: {
    label: "Explore the Community",
    href: "/community",
  },
  experiences: [
    {
      id: "live-wars",
      category: "LIVE Wars",
      action: "Compete",
      description:
        "Creator competitions that bring energy, friendly rivalry and community engagement to TikTok LIVE.",
      accent: "primary",
      image: {
        src: "/images/nextwave-live-wars.jpg",
        alt: "Two creators facing off in a split-screen LIVE Wars PK battle with microphones, scoreboards and a central VS graphic.",
        photoPageUrl: "/community#experiences",
        photographer: "NextWave Creator Network",
        photographerUrl: "/",
        objectPosition: "object-[50%_42%] sm:object-[50%_40%]",
      },
    },
    {
      id: "training",
      category: "Creator Training",
      action: "Learn",
      description:
        "Regular sessions focused on LIVE strategy, creator development and practical growth.",
      accent: "primary",
      image: {
        src: "/images/creator-training-vlogging.jpg",
        alt: "Creator vlogging indoors with a smartphone on a tripod, ring light and laptop in a home studio setup.",
        photoPageUrl: "https://www.pexels.com/photo/a-woman-vlogging-7514830/",
        photographer: "Kampus Production",
        photographerUrl: "https://www.pexels.com/@kampus/",
        platform: "Pexels",
        platformUrl: "https://www.pexels.com",
        objectPosition: "object-[52%_38%] sm:object-[50%_36%]",
      },
    },
    {
      id: "community",
      category: "Creator Community",
      action: "Connect",
      description:
        "A space to exchange experiences, support each other and build relationships with other creators.",
      accent: "primary",
      image: {
        src: "https://images.unsplash.com/photo-1695014192203-291edf9e4842",
        alt: "A group of creators collaborating around a camera on a film-style content shoot.",
        photoPageUrl:
          "https://unsplash.com/photos/a-group-of-people-standing-around-a-camera-Ony-jQSBvNY",
        photographer: "Daniel",
        photographerUrl: "https://unsplash.com/@unsplashbydan",
      },
    },
    {
      id: "awards",
      category: "Awards & Recognition",
      action: "Celebrate",
      description:
        "Community moments that recognise creator progress, achievements and standout contributions.",
      accent: "gold",
      image: {
        src: "/images/awards-podium-123.jpg",
        alt: "First, second and third place podium blocks with numbered medals representing ranked achievement and recognition.",
        photoPageUrl:
          "https://www.pexels.com/photo/medals-on-pedestal-on-pink-studio-background-7267573/",
        photographer: "DS stories",
        photographerUrl: "https://www.pexels.com/@ds-stories/",
        platform: "Pexels",
        platformUrl: "https://www.pexels.com",
        objectPosition: "object-[50%_44%] sm:object-[50%_42%]",
      },
    },
  ],
} as const;

export type CommunityExperience =
  (typeof communityPreviewContent.experiences)[number];

export const testimonialsContent = {
  eyebrow: "Creator Voices",
  heading: "Real stories are coming.",
  copy:
    "As the NextWave community grows, we'll share experiences and stories directly from creators across the network.",
  label: "Creator stories coming soon.",
} as const;

export const faqContent = {
  eyebrow: "FAQ",
  heading: "Questions before you apply?",
  items: [
    {
      id: "what-is-nextwave",
      question: "What is NextWave Creator Network?",
      answer:
        "NextWave is a creator community focused on helping TikTok LIVE creators develop their skills, connect with others and access community opportunities.",
    },
    {
      id: "who-can-apply",
      question: "Who can apply?",
      answer:
        "Creators who are serious about developing their LIVE presence, staying consistent and becoming active members of a creator community.",
    },
    {
      id: "countries",
      question: "Which countries does NextWave currently support?",
      answer:
        "NextWave currently supports creators in the United Kingdom and Australia.",
    },
    {
      id: "experience-required",
      question: "Do I need to already be an experienced LIVE creator?",
      answer:
        "No. We look at consistency, attitude, potential and willingness to develop — not just follower count or experience level.",
    },
    {
      id: "after-apply",
      question: "What happens after I apply?",
      answer:
        "Your application is reviewed by the NextWave team. If you're a suitable fit, we'll connect with you about the next steps.",
    },
    {
      id: "what-offered",
      question: "What does NextWave offer creators?",
      answer:
        "Community support, creator development, monthly training, LIVE experiences such as LIVE Wars, and recognition moments across the network.",
    },
  ],
} as const;

export type FaqItem = (typeof faqContent.items)[number];

export const finalCtaContent = {
  eyebrow: "Your next wave starts here",
  heading: "Ready to take your LIVE journey further?",
  supportingCopy:
    "Join a creator community built around learning, connection, experiences and progress.",
  primaryCta: {
    label: "Apply to Join",
    href: "/apply",
  },
  secondaryCta: {
    label: "Discover NextWave",
    href: "/about",
  },
} as const;
