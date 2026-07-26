import {
  ALLOWED_ENQUIRY_TYPES,
  CONTACT_FIELD_MAX_LENGTHS,
  type ContactEnquiryInsert,
  type EnquiryType,
} from "@/lib/contact/constants";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type ContactRequestBody = {
  name?: unknown;
  email?: unknown;
  enquiryType?: unknown;
  message?: unknown;
  website?: unknown;
};

function readOptionalString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function readRequiredString(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed.length > 0 ? trimmed : null;
}

export type ContactValidationResult =
  | { ok: true; data: ContactEnquiryInsert }
  | { ok: false; message: string };

export function validateContactPayload(
  body: ContactRequestBody,
): ContactValidationResult {
  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return { ok: false, message: "Invalid enquiry data." };
  }

  const name = readRequiredString(body.name);
  const email = readRequiredString(body.email);
  const enquiryType = readRequiredString(body.enquiryType);
  const message = readRequiredString(body.message);

  if (!name) {
    return { ok: false, message: "Please enter your name." };
  }
  if (name.length > CONTACT_FIELD_MAX_LENGTHS.name) {
    return { ok: false, message: "Name is too long." };
  }

  if (!email) {
    return { ok: false, message: "Please enter your email address." };
  }
  if (
    email.length > CONTACT_FIELD_MAX_LENGTHS.email ||
    !EMAIL_PATTERN.test(email)
  ) {
    return { ok: false, message: "Please enter a valid email address." };
  }

  if (!enquiryType) {
    return { ok: false, message: "Please select an enquiry type." };
  }
  if (
    enquiryType.length > CONTACT_FIELD_MAX_LENGTHS.enquiryType ||
    !ALLOWED_ENQUIRY_TYPES.includes(enquiryType as EnquiryType)
  ) {
    return { ok: false, message: "Please select a valid enquiry type." };
  }

  if (!message) {
    return { ok: false, message: "Please enter a message." };
  }
  if (message.length > CONTACT_FIELD_MAX_LENGTHS.message) {
    return { ok: false, message: "Message is too long." };
  }

  return {
    ok: true,
    data: {
      name,
      email: email.toLowerCase(),
      enquiry_type: enquiryType as EnquiryType,
      message,
    },
  };
}

export function isContactHoneypotTriggered(body: ContactRequestBody): boolean {
  return readOptionalString(body.website).length > 0;
}
