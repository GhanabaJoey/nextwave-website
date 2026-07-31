/** Unsplash License — https://unsplash.com/license */

export type CommunityImage = {
  src: string;
  alt: string;
  photoPageUrl: string;
  photographer: string;
  photographerUrl: string;
  platform?: "Pexels";
  platformUrl?: string;
  objectPosition?: string;
};

export const communityHeroContent = {
  eyebrow: "NextWave Community",
  headlineLines: ["More Than LIVE.", "It's Community."] as const,
  supportingCopy:
    "Connect, compete, learn and celebrate alongside creators who understand the LIVE journey.",
  primaryCta: { label: "Join the Community", href: "/apply" },
  secondaryCta: { label: "Explore Experiences", href: "#experiences" },
  image: {
    src: "https://images.unsplash.com/photo-1695014192203-291edf9e4842",
    alt: "A diverse group of young creators gathered around a camera on a bright production set, collaborating with natural energy.",
    photoPageUrl:
      "https://unsplash.com/photos/a-group-of-people-standing-around-a-camera-Ony-jQSBvNY",
    photographer: "Daniel",
    photographerUrl: "https://unsplash.com/@unsplashbydan",
  } satisfies CommunityImage,
} as const;

export const communityStatementContent = {
  eyebrow: "More Than LIVE",
  statementLines: [
    "Creating may start individually.",
    "Community changes the journey.",
  ] as const,
  supportingCopy:
    "NextWave brings creators together to exchange experiences, develop their skills, compete, connect and celebrate progress together.",
} as const;

export const communityExperiencesContent = {
  sectionId: "experiences",
  eyebrow: "The NextWave Experience",
  heading: "Different ways to be part of it.",
  supportingCopy:
    "From competition to learning and recognition, NextWave creates experiences that bring creators together.",
  experiences: [
    {
      id: "live-wars",
      title: "LIVE Wars",
      label: "Compete",
      description:
        "Competitive LIVE experiences built around entertainment and community.",
      accent: "primary" as const,
      image: {
        src: "/images/nextwave-live-wars.jpg",
        alt: "Two creators facing off in a split-screen LIVE Wars PK battle with microphones, scoreboards and a central VS graphic.",
        photoPageUrl: "/community#experiences",
        photographer: "NextWave Creator Network",
        photographerUrl: "/",
        objectPosition: "object-[50%_42%] sm:object-[50%_40%]",
      } satisfies CommunityImage,
    },
    {
      id: "training",
      title: "Creator Training",
      label: "Learn",
      description:
        "Development opportunities focused on LIVE skills, strategy and creator confidence.",
      accent: "primary" as const,
      image: {
        src: "/images/creator-training-vlogging.jpg",
        alt: "Creator vlogging indoors with a smartphone on a tripod, ring light and laptop in a home studio setup.",
        photoPageUrl: "https://www.pexels.com/photo/a-woman-vlogging-7514830/",
        photographer: "Kampus Production",
        photographerUrl: "https://www.pexels.com/@kampus/",
        platform: "Pexels",
        platformUrl: "https://www.pexels.com",
        objectPosition: "object-[52%_38%] sm:object-[50%_36%]",
      } satisfies CommunityImage,
    },
    {
      id: "awards",
      title: "Awards & Recognition",
      label: "Celebrate",
      description:
        "Recognising creator progress, participation and memorable community moments.",
      accent: "gold" as const,
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
      } satisfies CommunityImage,
    },
    {
      id: "creator-community",
      title: "Creator Community",
      label: "Connect",
      description:
        "Build relationships, exchange experiences and meet creators across the network.",
      accent: "primary" as const,
      image: {
        src: "https://images.unsplash.com/photo-1695014192203-291edf9e4842",
        alt: "A group of creators collaborating around a camera on a film-style content shoot.",
        photoPageUrl:
          "https://unsplash.com/photos/a-group-of-people-standing-around-a-camera-Ony-jQSBvNY",
        photographer: "Daniel",
        photographerUrl: "https://unsplash.com/@unsplashbydan",
      } satisfies CommunityImage,
    },
  ],
} as const;

export type CommunityExperienceItem =
  (typeof communityExperiencesContent.experiences)[number];

export const communityLiveWarsContent = {
  eyebrow: "LIVE Wars",
  heading: "Competition meets community.",
  copy: "LIVE Wars brings creators together through competitive LIVE experiences designed to entertain, connect and create memorable community moments.",
  pillars: [
    {
      id: "compete",
      title: "Compete",
      description:
        "Challenge other creators through LIVE battles.",
    },
    {
      id: "connect",
      title: "Connect",
      description:
        "Meet and interact with creators across the network.",
    },
    {
      id: "entertain",
      title: "Entertain",
      description:
        "Create moments audiences can enjoy and participate in.",
    },
  ],
  image: {
    src: "/images/community-live-wars-battle.png",
    alt: "Two creators competing in a split-screen NextWave LIVE Wars battle with scores, gift notifications, a countdown timer and Lion and TikTok Universe-style gifts.",
    photoPageUrl: "/community#live-wars",
    photographer: "NextWave Creator Network",
    photographerUrl: "/",
    objectPosition: "object-[50%_48%] lg:object-[50%_46%]",
  } satisfies CommunityImage,
} as const;

export const communityDevelopmentContent = {
  eyebrow: "Creator Development",
  headingLines: ["Learn together.", "Grow together."] as const,
  copy: "Community also creates opportunities to exchange knowledge, build confidence and improve the way you approach LIVE.",
  topics: [
    {
      id: "live-skills",
      title: "LIVE Skills",
      description:
        "Develop practical approaches to stronger LIVE content.",
    },
    {
      id: "creator-strategy",
      title: "Creator Strategy",
      description:
        "Explore ways to improve consistency, engagement and your overall creator presence.",
    },
    {
      id: "shared-experience",
      title: "Shared Experience",
      description:
        "Learn through conversations, training and the experiences of other creators.",
    },
  ],
} as const;

export const communityMomentsContent = {
  eyebrow: "Community Moments",
  heading: "The moments make the community.",
  copy: "Competition, creation, learning and celebration — these are the experiences that bring the network to life.",
  gallery: [
    {
      id: "creating",
      src: "https://images.unsplash.com/photo-1753162660995-52218587ce71",
      alt: "Two content creators filming together in a bright studio with a camera and production materials.",
      photoPageUrl:
        "https://unsplash.com/photos/two-women-are-filming-a-video-tvePcqY52-4",
      photographer: "Vitaly Gariev",
      photographerUrl: "https://unsplash.com/@silverkblack",
      layout: "tall" as const,
    },
    {
      id: "streaming",
      src: "https://images.unsplash.com/photo-1612130536441-95ece5dcbb86",
      alt: "Creators collaborating while one films another with a smartphone in a creator environment.",
      photoPageUrl:
        "https://unsplash.com/photos/person-holding-black-smartphone-taking-photo-of-man-in-black-shirt-2JBBrp9k5O0",
      photographer: "Timek Life",
      photographerUrl: "https://unsplash.com/@timek_life",
      layout: "wide" as const,
    },
    {
      id: "connecting",
      src: "https://images.unsplash.com/photo-1759393852314-59dc00faeed3",
      alt: "A creator recording herself on a smartphone mounted on a tripod in a bright space.",
      photoPageUrl:
        "https://unsplash.com/photos/woman-recording-herself-on-a-smartphone-tripod-3FTq0q3QZc8",
      photographer: "Afffect",
      photographerUrl: "https://unsplash.com/@afffect",
      layout: "small" as const,
    },
    {
      id: "celebrating",
      src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30",
      alt: "A lively event atmosphere with warm lighting and people gathered in celebration.",
      photoPageUrl:
        "https://unsplash.com/photos/people-having-fun-at-a-concert-81342ee5ff30",
      photographer: "John Arano",
      photographerUrl: "https://unsplash.com/@johnarano",
      layout: "small" as const,
    },
  ],
} as const;

export type CommunityGalleryImage =
  (typeof communityMomentsContent.gallery)[number];

export const communityNetworkContent = {
  eyebrow: "The Network",
  heading: "One community.\nTwo markets.",
  copy: "NextWave currently brings together a growing creator community across the United Kingdom and AU+.",
  creatorsStat: { value: "40+", label: "Creators" },
  markets: [
    { id: "uk", label: "United Kingdom" },
    { id: "au", label: "AU+" },
  ],
} as const;

export const communityFinalCtaContent = {
  eyebrow: "Join the Community",
  heading: "Your place in the community could start here.",
  supportingCopy:
    "Apply to join NextWave and become part of a creator network built around development, connection and shared experiences.",
  primaryCta: { label: "Apply to Join", href: "/apply" },
  secondaryCta: { label: "Learn About NextWave", href: "/about" },
} as const;
