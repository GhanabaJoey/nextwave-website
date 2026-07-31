export type Testimonial = {
  id: string;
  quote: string;
  name: string;
  country: string;
  profileImage?: string;
};

/**
 * Placeholder approved reviews.
 * Replace with database fetch in `getApprovedTestimonials()`.
 */
export const APPROVED_TESTIMONIALS = [
  {
    id: "charlotte-evans",
    quote:
      "I joined mainly for the training sessions, but what I didn't expect was how quickly I'd feel part of something. Having other creators to bounce ideas off after a LIVE has made a real difference.",
    name: "Charlotte Evans",
    country: "United Kingdom",
  },
  {
    id: "liam-parker",
    quote:
      "LIVE Wars was nerve-wracking at first, but everyone was supportive. It's pushed me to try new formats I probably wouldn't have done on my own.",
    name: "Liam Parker",
    country: "AU+",
  },
  {
    id: "olivia-hughes",
    quote:
      "The monthly check-ins keep me accountable without feeling like pressure. It's helped me stay more consistent and actually enjoy going LIVE again.",
    name: "Olivia Hughes",
    country: "United Kingdom",
  },
  {
    id: "ethan-collins",
    quote:
      "NextWave feels like a proper community, not just another group chat. I've picked up practical tips from creators in both regions that I use every week.",
    name: "Ethan Collins",
    country: "AU+",
  },
] satisfies Testimonial[];

/**
 * IDs of reviews marked as featured for the homepage carousel.
 * Replace with a database query filtered by `featured = true`.
 */
export const FEATURED_TESTIMONIAL_IDS = [
  "charlotte-evans",
  "liam-parker",
  "olivia-hughes",
  "ethan-collins",
] as const;

export const VERIFIED_BADGE = "Verified NextWave Creator";

export const creatorVoicesHomeContent = {
  eyebrow: "Testimonials",
  heading: "Creator Voices",
  supporting:
    "Hear from creators who are growing, connecting and succeeding with NextWave Creator Network.",
  viewAllCta: {
    label: "View All Creator Stories",
    href: "/community#creator-voices",
  },
} as const;

export const creatorVoicesCommunityContent = {
  sectionId: "creator-voices",
  eyebrow: "Creator Stories",
  heading: "Creator Voices",
  supporting:
    "Discover authentic stories from creators who are building their LIVE journey with NextWave Creator Network.",
  exampleStoriesNote:
    "Every creator's journey is unique. Explore experiences shared by members of the NextWave Creator Network and check back as more creators add their stories.",
  shareExperience: {
    eyebrow: "Community Feedback",
    heading: "Share Your Experience",
    descriptionParagraphs: [
      "Have you enjoyed being part of NextWave Creator Network?",
      "We'd love to hear your story.",
      "Your feedback helps future creators discover our community.",
    ],
  },
} as const;

export const reviewFormContent = {
  fields: {
    fullName: {
      label: "Full Name",
      placeholder: "Your full name",
    },
    tiktokUsername: {
      label: "TikTok Username",
      placeholder: "@yourusername",
    },
    country: {
      label: "Country",
      placeholder: "Select your country",
    },
    email: {
      label: "Email Address",
      placeholder: "you@example.com",
    },
    rating: {
      label: "Star Rating",
    },
    review: {
      label: "Your Review",
      placeholder: "Tell us about your experience with NextWave Creator Network…",
    },
    profilePhoto: {
      label: "Profile Photo",
      hint: "Optional — JPG or PNG, max 2 MB",
    },
    genuineConfirmation: {
      label:
        "I confirm this review is genuine and based on my own experience with NextWave Creator Network.",
    },
  },
  countries: [
    { value: "United Kingdom", label: "United Kingdom" },
    { value: "Australia", label: "Australia" },
  ],
  submitLabel: "Submit Review",
  moderationNotice:
    "Your review will be reviewed before being published on our website.",
  successMessage:
    "Thank you! Your review has been received and is awaiting approval.",
  submitErrorMessage:
    "We couldn't submit your review right now. Please try again.",
  validation: {
    formSummary: "Please fix the highlighted fields before submitting.",
    fullNameRequired: "Please enter your full name.",
    tiktokUsernameRequired: "Please enter your TikTok username.",
    countryRequired: "Please select your country.",
    emailRequired: "Please enter your email address.",
    emailInvalid: "Please enter a valid email address.",
    ratingRequired: "Please select a star rating.",
    reviewRequired: "Please write your review.",
    genuineRequired: "Please confirm your review is genuine.",
    profilePhotoInvalid: "Please upload a JPG or PNG image under 2 MB.",
  },
} as const;

export type ReviewFormValues = {
  fullName: string;
  tiktokUsername: string;
  country: string;
  email: string;
  rating: number;
  review: string;
  genuineConfirmation: boolean;
};

export const emptyReviewValues: ReviewFormValues = {
  fullName: "",
  tiktokUsername: "",
  country: "",
  email: "",
  rating: 0,
  review: "",
  genuineConfirmation: false,
};
