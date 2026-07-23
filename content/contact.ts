/** Unsplash License — https://unsplash.com/license */

export type ContactImage = {
  src: string;
  alt: string;
  photoPageUrl: string;
  photographer: string;
  photographerUrl: string;
};

export const contactHeroContent = {
  eyebrow: "Contact NextWave",
  headlineLines: ["Let's Start a", "Conversation."] as const,
  supportingCopy:
    "Have a question about NextWave, our creator community or how we work? Send us a message and we'll point you in the right direction.",
  image: {
    src: "https://images.unsplash.com/photo-1559523161-0fc0d8b38a7a",
    alt: "Two creators in a modern studio having a conversation with headphones and microphones on the table.",
    photoPageUrl:
      "https://unsplash.com/photos/man-in-gray-shirt-leaning-on-table-with-headphones-facing-another-man-leaning-on-table-with-headboard-Hg3BHX6U5jg",
    photographer: "Austin Distel",
    photographerUrl: "https://unsplash.com/@austindistel",
  } satisfies ContactImage,
} as const;

export const contactMainContent = {
  sectionId: "contact-form",
  eyebrow: "Get in Touch",
  heading: "How can we help?",
  supportingCopy:
    "Whether you're a creator, have a question about the network or want to discuss something with the NextWave team, send us a message below.",
  reasons: [
    {
      id: "creator",
      title: "Creator Questions",
      description:
        "Questions about NextWave, creator support or community activities.",
    },
    {
      id: "community",
      title: "Community & Events",
      description:
        "Questions relating to community experiences, training or LIVE Wars.",
    },
    {
      id: "general",
      title: "General Enquiries",
      description: "Anything else relating to NextWave Creator Network.",
    },
  ],
  applicationDirection: {
    eyebrow: "Looking to join?",
    copy: "If you're interested in becoming part of NextWave, use our creator application so we can collect the information we need.",
    cta: { label: "Apply to Join", href: "/apply" },
  },
} as const;

export const contactFormContent = {
  submissionNotice:
    "Online form delivery is not connected yet. Messages will not be sent until we connect our messaging service.",
  deliveryNotConnectedMessage:
    "Your message has not been sent — form delivery is not connected yet.",
  privacyNote:
    "Please only share information relevant to your enquiry.",
  enquiryTypes: [
    { value: "creator", label: "Creator Question" },
    { value: "community", label: "Community & Events" },
    { value: "general", label: "General Enquiry" },
  ],
  fields: {
    name: { label: "Name", placeholder: "Your name" },
    email: { label: "Email", placeholder: "you@example.com" },
    enquiryType: {
      label: "Enquiry Type",
      placeholder: "Select an enquiry type",
    },
    message: { label: "Message", placeholder: "Tell us how we can help" },
  },
  submitLabel: "Send Message",
  validation: {
    nameRequired: "Please enter your name.",
    emailRequired: "Please enter your email address.",
    emailInvalid: "Please enter a valid email address.",
    enquiryTypeRequired: "Please select an enquiry type.",
    messageRequired: "Please enter a message.",
  },
} as const;

export const contactReassuranceContent = {
  eyebrow: "What to expect",
  heading: "We'll point you in the right direction.",
  supportingCopy:
    "Share the details we need to understand your enquiry. If you're ready to join NextWave, the creator application collects the information required to assess your application.",
} as const;
