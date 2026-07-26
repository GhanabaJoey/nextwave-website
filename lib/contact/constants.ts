export const ALLOWED_ENQUIRY_TYPES = ["creator", "community", "general"] as const;

export type EnquiryType = (typeof ALLOWED_ENQUIRY_TYPES)[number];

export const ENQUIRY_TYPE_LABELS: Record<EnquiryType, string> = {
  creator: "Creator Question",
  community: "Community & Events",
  general: "General Enquiry",
};

export const CONTACT_FIELD_MAX_LENGTHS = {
  name: 200,
  email: 320,
  enquiryType: 50,
  message: 5000,
} as const;

export type ContactEnquiryInsert = {
  name: string;
  email: string;
  enquiry_type: EnquiryType;
  message: string;
};

export type ContactNotificationData = ContactEnquiryInsert & {
  created_at: string;
};
