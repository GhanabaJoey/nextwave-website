/** Application copy and option lists for the Apply page. */

/** Unsplash License — https://unsplash.com/license */

export type ApplyImage = {
  src: string;
  alt: string;
  photoPageUrl: string;
  photographer: string;
  photographerUrl: string;
};

export const applyHeroContent = {
  eyebrow: "Join NextWave",
  headlineLines: ["Ready for Your", "Next Wave?"] as const,
  supportingCopy:
    "Tell us a little about yourself and your LIVE journey. Your application helps us understand where you are now and how you could fit into the NextWave community.",
  image: {
    src: "https://images.unsplash.com/photo-1594009375825-564aac98bda6",
    alt: "A confident creator wearing blue headphones and holding a microphone in a bright modern studio, ready to go LIVE.",
    photoPageUrl:
      "https://unsplash.com/photos/woman-in-white-shirt-wearing-blue-headphones-holding-black-microphone-3Bz1yBpI3GI",
    photographer: "Higor Hanschen",
    photographerUrl: "https://unsplash.com/@higorrss",
  } satisfies ApplyImage,
} as const;

export const applyBeforeContent = {
  eyebrow: "Before You Apply",
  heading: "A few things to know.",
  points: [
    {
      id: "live-creator",
      title: "LIVE Creator",
      description:
        "NextWave is built for creators interested in developing their LIVE presence.",
    },
    {
      id: "community",
      title: "Community",
      description:
        "We're looking for creators who want to learn, connect and participate within the network.",
    },
    {
      id: "consistency",
      title: "Consistency",
      description:
        "Creator development takes consistency. You should be willing to show up and keep improving.",
    },
  ],
} as const;

export const applyFormContent = {
  sectionId: "application",
  eyebrow: "Your Application",
  heading: "Tell us about your creator journey.",
  supportingCopy:
    "Keep it simple. We only ask for information that helps us understand you as a creator.",
  requiredNote: "Required fields are marked with *",
  submissionNotice:
    "Application delivery is not connected yet. Submissions will not be stored until we connect our backend.",
  deliveryNotConnectedMessage:
    "Your application has not been submitted — delivery is not connected yet.",
  privacyNote:
    "Please only provide information relevant to your creator application.",
  submitLabel: "Submit Application",
  sections: {
    aboutYou: "About You",
    creatorProfile: "Creator Profile",
    liveExperience: "LIVE Experience",
    yourGoals: "Your Goals",
    motivation: "Your Motivation",
  },
  fields: {
    fullName: { label: "Full Name" },
    email: { label: "Email Address" },
    country: { label: "Country / Market", placeholder: "Select country" },
    tiktokUsername: {
      label: "TikTok Username",
      placeholder: "@username",
    },
    tiktokProfileUrl: { label: "TikTok Profile URL" },
    followerRange: {
      label: "Current Follower Range",
      placeholder: "Select range (optional)",
    },
    liveStatus: { label: "Do you currently go LIVE on TikTok?" },
    liveFrequency: {
      label: "How often do you currently go LIVE?",
      placeholder: "Select frequency (optional)",
    },
    developmentGoal: {
      label: "What would you most like to develop?",
      placeholder: "Select an area (optional)",
    },
    whyNextwave: {
      label: "Why would you like to join NextWave?",
      helper:
        "Tell us what you're hoping to learn, improve or experience as part of the community.",
    },
    additionalInfo: {
      label: "Anything else you'd like us to know?",
      optional: "Optional",
    },
  },
  countries: [
    { value: "uk", label: "United Kingdom" },
    { value: "au", label: "Australia" },
  ],
  followerRanges: [
    { value: "under-1k", label: "Under 1,000" },
    { value: "1k-5k", label: "1,000–5,000" },
    { value: "5k-10k", label: "5,000–10,000" },
    { value: "10k-50k", label: "10,000–50,000" },
    { value: "50k-plus", label: "50,000+" },
  ],
  liveStatusOptions: [
    { value: "yes", label: "Yes" },
    { value: "no", label: "No" },
    { value: "preparing", label: "I'm preparing to start" },
  ],
  liveFrequency: [
    { value: "not-currently", label: "Not currently" },
    { value: "occasionally", label: "Occasionally" },
    { value: "1-2", label: "1–2 days per week" },
    { value: "3-4", label: "3–4 days per week" },
    { value: "5-plus", label: "5+ days per week" },
  ],
  developmentGoals: [
    { value: "live-confidence", label: "LIVE confidence" },
    { value: "audience-engagement", label: "Audience engagement" },
    { value: "consistency", label: "Consistency" },
    { value: "content-strategy", label: "Content strategy" },
    { value: "creator-community", label: "Creator community" },
    { value: "live-battles", label: "LIVE battles / competitive LIVE" },
    { value: "other", label: "Other" },
  ],
  validation: {
    fullName: "Please enter your full name.",
    emailRequired: "Please enter your email address.",
    emailInvalid: "Please enter a valid email address.",
    country: "Please select your country / market.",
    tiktokUsername: "Please enter your TikTok username.",
    tiktokProfileUrl: "Please enter a valid URL (including https://).",
    liveStatus: "Please select your current LIVE status.",
    whyNextwave: "Please tell us why you'd like to join NextWave.",
    formSummary: "Please complete all required fields before submitting.",
  },
} as const;

export const applyNextStepsContent = {
  eyebrow: "What Happens Next",
  heading: "We'll review your application.",
  steps: [
    {
      id: "submit",
      number: "01",
      title: "Submit",
      description: "Send us your creator application.",
    },
    {
      id: "review",
      number: "02",
      title: "Review",
      description:
        "The NextWave team reviews the information you've provided.",
    },
    {
      id: "next-steps",
      number: "03",
      title: "Next Steps",
      description:
        "If there is a suitable next step, we'll use the contact information in your application to continue the conversation.",
    },
  ],
} as const;

export type ApplicationFormValues = {
  fullName: string;
  email: string;
  country: string;
  tiktokUsername: string;
  tiktokProfileUrl: string;
  followerRange: string;
  liveStatus: string;
  liveFrequency: string;
  developmentGoal: string;
  whyNextwave: string;
  additionalInfo: string;
};

export const emptyApplicationValues: ApplicationFormValues = {
  fullName: "",
  email: "",
  country: "",
  tiktokUsername: "",
  tiktokProfileUrl: "",
  followerRange: "",
  liveStatus: "",
  liveFrequency: "",
  developmentGoal: "",
  whyNextwave: "",
  additionalInfo: "",
};
