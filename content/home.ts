export const heroContent = {
  eyebrow: "TikTok LIVE Creator Community",
  headlineLines: [
    "Grow Your LIVE.",
    "Build Your Community.",
    "Reach Your Potential.",
  ],
  supportingCopy:
    "NextWave Creator Network helps TikTok LIVE creators develop their content, grow their community, improve their earning potential, and connect with other ambitious creators through training, support and exclusive community experiences.",
  primaryCta: {
    label: "Apply to Join",
    href: "/apply",
  },
  secondaryCta: {
    label: "Discover NextWave",
    href: "/about",
  },
  trustLine: "Supporting 40+ creators across the UK & Australia.",
} as const;

/** Unsplash License — free commercial use: https://unsplash.com/license */
export const heroImage = {
  src: "https://images.unsplash.com/photo-1673767298275-769b08b4f675",
  alt: "A creator seated at a table, recording video content in front of a camera and studio setup.",
  photoPageUrl:
    "https://unsplash.com/photos/a-woman-sitting-at-a-table-in-front-of-a-camera-ZVUkfLW_eck",
  photographer: "Videodeck .co",
  photographerUrl: "https://unsplash.com/@videodeck",
} as const;

export const networkStatsContent = {
  eyebrow: "The NextWave Network",
  heading: "A growing community built for creators.",
  supportingText:
    "NextWave brings ambitious TikTok LIVE creators together with the support, training and community experiences they need to keep developing.",
  stats: [
    {
      id: "creators",
      value: "40+",
      label: "Creators",
      description: "Part of the growing NextWave community.",
      accent: "primary",
    },
    {
      id: "markets",
      value: "2",
      label: "Markets",
      description: "Supporting creators across the UK and Australia.",
      accent: "primary",
    },
    {
      id: "training",
      value: "Monthly",
      label: "Creator Training",
      description: "Regular sessions focused on development and growth.",
      accent: "primary",
    },
    {
      id: "events",
      value: "Community",
      label: "Events & Recognition",
      description: "LIVE Wars, creator experiences and Awards Night.",
      accent: "gold",
    },
  ],
} as const;

export type NetworkStat = (typeof networkStatsContent.stats)[number];

export const whyNextwaveContent = {
  eyebrow: "Why Nextwave",
  heading: "More than a network. A place to grow.",
  supportingCopy:
    "Going LIVE consistently is easier when you have the right people, guidance and opportunities around you. NextWave gives creators a community designed to support their development both on and beyond LIVE.",
  image: {
    src: "https://images.unsplash.com/photo-1734174050925-3dca7c6bbad1",
    alt: "A group of creators gathered together in a room, sharing ideas and collaborating.",
    photoPageUrl:
      "https://unsplash.com/photos/a-group-of-people-sitting-around-each-other-in-a-room-pyXVTh3zdCA",
    photographer: "Frederick Shaw",
    photographerUrl: "https://unsplash.com/@fshawphoto",
  },
  benefits: [
    {
      id: "development",
      title: "Creator Development",
      description:
        "Get practical guidance designed to help you improve your LIVE content, confidence, consistency and overall creator presence.",
      icon: "development",
      accent: "primary",
    },
    {
      id: "training",
      title: "Monthly Training",
      description:
        "Join regular training sessions covering creator growth, LIVE strategy, content development and opportunities on TikTok LIVE.",
      icon: "training",
      accent: "primary",
    },
    {
      id: "community",
      title: "Community Support",
      description:
        "Connect with other ambitious creators, share experiences, learn from each other and grow as part of an active community.",
      icon: "community",
      accent: "primary",
    },
    {
      id: "events",
      title: "Events & Competition",
      description:
        "Take part in experiences such as LIVE Wars, community activities and creator-focused events that make growth more engaging.",
      icon: "events",
      accent: "primary",
    },
    {
      id: "recognition",
      title: "Recognition & Rewards",
      description:
        "Celebrate creator progress through recognition, achievements and special community moments including the NextWave Awards Night.",
      icon: "recognition",
      accent: "gold",
    },
    {
      id: "growth",
      title: "Growth Opportunities",
      description:
        "Access opportunities designed to help committed creators develop their presence, expand their network and reach their potential.",
      icon: "growth",
      accent: "primary",
    },
  ],
} as const;

export type WhyNextwaveBenefit =
  (typeof whyNextwaveContent.benefits)[number];

export const creatorJourneyContent = {
  eyebrow: "Your NextWave Journey",
  heading: "From application to active creator.",
  supportingCopy:
    "Joining NextWave is designed to be simple. We look for creators who are ready to develop, stay consistent and become active members of the community.",
  steps: [
    {
      id: "apply",
      number: "01",
      title: "Apply",
      description:
        "Submit your application and tell us about yourself, your content and your TikTok LIVE goals.",
    },
    {
      id: "review",
      number: "02",
      title: "Get Reviewed",
      description:
        "The NextWave team reviews your application to make sure the community is the right fit for you.",
    },
    {
      id: "join",
      number: "03",
      title: "Join the Network",
      description:
        "Once accepted, you'll be welcomed into the NextWave community and introduced to the support available to you.",
    },
    {
      id: "grow",
      number: "04",
      title: "Learn, Connect & Grow",
      description:
        "Take part in training, community activities, LIVE opportunities and experiences designed to support your development.",
    },
  ],
} as const;

export type CreatorJourneyStep =
  (typeof creatorJourneyContent.steps)[number];

export const communityPreviewContent = {
  eyebrow: "Beyond the LIVE",
  heading: "A community you can be part of.",
  supportingCopy:
    "NextWave is about more than going LIVE. Our creators have opportunities to connect, compete, learn and celebrate progress together.",
  cta: {
    label: "Explore Our Community",
    href: "/community",
  },
  experiences: [
    {
      id: "live-wars",
      title: "LIVE Wars",
      description:
        "Creator competitions designed to bring energy, friendly competition and community engagement to TikTok LIVE.",
      accent: "primary",
      image: {
        src: "https://images.unsplash.com/photo-1759393852314-59dc00faeed3",
        alt: "A creator recording content on a smartphone mounted on a tripod in a modern setup.",
        photoPageUrl:
          "https://unsplash.com/photos/woman-recording-herself-on-a-smartphone-tripod-3FTq0q3QZc8",
        photographer: "Afffect",
        photographerUrl: "https://unsplash.com/@afffect",
      },
    },
    {
      id: "training",
      title: "Monthly Creator Training",
      description:
        "Regular sessions focused on LIVE strategy, creator development, content and growth.",
      accent: "primary",
      image: {
        src: "https://images.unsplash.com/photo-1755548836775-39456093a0c3",
        alt: "Creators gathered in a classroom-style setting for a group learning session.",
        photoPageUrl:
          "https://unsplash.com/photos/group-of-people-gathered-in-a-classroom-setting-eUM4Skbrcsc",
        photographer: "Frederick Shaw",
        photographerUrl: "https://unsplash.com/@fshawphoto",
      },
    },
    {
      id: "awards",
      title: "NextWave Awards Night",
      description:
        "A special celebration recognising creator progress, achievements and standout moments across the community.",
      accent: "gold",
      image: {
        src: "https://images.unsplash.com/photo-1764874299025-d8b2251f307d",
        alt: "An award trophy displayed under warm light, representing recognition and celebration.",
        photoPageUrl:
          "https://unsplash.com/photos/a-silver-award-trophy-stands-on-a-table-fyN_dAzrG8A",
        photographer: "Wesley Tingey",
        photographerUrl: "https://unsplash.com/@wesleyphotography",
      },
    },
    {
      id: "community",
      title: "Creator Community",
      description:
        "A space for creators to connect, exchange experiences, support each other and build relationships.",
      accent: "primary",
      image: {
        src: "https://images.unsplash.com/photo-1632835221568-8f6e715f7c54",
        alt: "Creators sitting together around a table, collaborating and sharing ideas.",
        photoPageUrl:
          "https://unsplash.com/photos/a-group-of-people-sitting-around-a-wooden-table-bqhu2I58r34",
        photographer: "Redmind Studio",
        photographerUrl: "https://unsplash.com/@redmind_studio",
      },
    },
  ],
} as const;

export type CommunityExperience =
  (typeof communityPreviewContent.experiences)[number];

export const testimonialsContent = {
  eyebrow: "Creator Voices",
  heading: "Built around the people who make it possible.",
  placeholderTitle: "Creator stories coming soon.",
  placeholderText:
    "We're gathering experiences from members of the NextWave community and will be sharing their stories here.",
} as const;

export const faqContent = {
  eyebrow: "Questions & Answers",
  heading: "Everything you need to know before applying.",
  items: [
    {
      id: "who-can-apply",
      question: "Who can apply to NextWave?",
      answer:
        "NextWave is open to TikTok LIVE creators who are serious about developing their content, staying consistent and becoming active members of a creator community.",
    },
    {
      id: "cost",
      question: "Does it cost money to join?",
      answer:
        "There is no application fee to apply to NextWave Creator Network.",
    },
    {
      id: "following",
      question: "Do I need a large following?",
      answer:
        "No. We look beyond follower count. Consistency, attitude, potential and willingness to develop are important when applications are reviewed.",
    },
    {
      id: "countries",
      question: "What countries does NextWave currently support?",
      answer:
        "NextWave currently supports creators in the United Kingdom and Australia. Availability may expand as the network grows.",
    },
    {
      id: "after-apply",
      question: "What happens after I apply?",
      answer:
        "Your application will be reviewed by the NextWave team. If you meet the current requirements, we'll provide the next steps for joining the network.",
    },
    {
      id: "support",
      question: "What support will I receive?",
      answer:
        "Creators can access community support, development opportunities, monthly training, events and other experiences offered through NextWave.",
    },
    {
      id: "live-regularly",
      question: "Do I have to go LIVE regularly?",
      answer:
        "Yes. NextWave is designed for active TikTok LIVE creators, so consistency and participation are important.",
    },
    {
      id: "leave",
      question: "Can I leave the network?",
      answer:
        "Creators should follow the applicable TikTok LIVE agency/network procedures and any relevant NextWave guidelines. More information can be provided when joining.",
    },
  ],
} as const;

export type FaqItem = (typeof faqContent.items)[number];

export const finalCtaContent = {
  eyebrow: "Ready for your next wave?",
  heading: "Your next chapter as a creator could start here.",
  supportingCopy:
    "Join a growing community of TikTok LIVE creators focused on development, connection and creating better opportunities together.",
  primaryCta: {
    label: "Apply to Join",
    href: "/apply",
  },
  secondaryCta: {
    label: "Learn About NextWave",
    href: "/about",
  },
} as const;
