export const adminReviewsContent = {
  pageTitle: "Review Moderation",
  eyebrow: "Admin",
  heading: "Creator review moderation",
  description:
    "Approve, reject, edit, and feature creator reviews before they appear on the website.",
  emptyState: "No reviews have been submitted yet.",
  loadError: "Failed to load reviews. Please refresh and try again.",
  actionError: "That action could not be completed. Please try again.",
  refreshLabel: "Refresh list",
  signOutLabel: "Sign out",
  fields: {
    name: "Name",
    tiktokUsername: "TikTok Username",
    region: "Region",
    email: "Email",
    rating: "Rating",
    review: "Review",
    submitted: "Submitted",
    status: "Status",
    featured: "Featured",
  },
  actions: {
    approve: "Approve",
    reject: "Reject",
    edit: "Edit",
    save: "Save changes",
    cancel: "Cancel",
    feature: "Feature",
    unfeature: "Unfeature",
  },
  featuredStates: {
    yes: "Featured",
    no: "Not featured",
  },
  regions: [
    { value: "United Kingdom", label: "United Kingdom" },
    { value: "Australia", label: "Australia" },
  ],
} as const;

export const adminLoginContent = {
  eyebrow: "Admin",
  heading: "Sign in to review moderation",
  description: "Use your authorised NextWave admin account to continue.",
  emailLabel: "Email Address",
  passwordLabel: "Password",
  submitLabel: "Sign in",
  configError:
    "Admin authentication is not configured. Contact the site administrator.",
  invalidCredentials: "Invalid credentials. Please try again.",
} as const;
