import type { CreatorApplicationInsert } from "@/lib/applications/constants";

export function getApplicationContinuationLink(
  country: CreatorApplicationInsert["country"],
): string | null {
  if (country === "United Kingdom") {
    const link = process.env.UK_APPLICATION_LINK?.trim();
    return link || null;
  }

  if (country === "Australia") {
    const link = process.env.AU_APPLICATION_LINK?.trim();
    return link || null;
  }

  return null;
}

export function isValidContinuationLink(link: string): boolean {
  try {
    const url = new URL(link);
    return url.protocol === "http:" || url.protocol === "https:";
  } catch {
    return false;
  }
}
