import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

const siteName = siteConfig.name;

export function createPageMetadata({
  title,
  description,
}: {
  title: string;
  description: string;
}): Metadata {
  const fullTitle = `${title} | ${siteName}`;

  return {
    title,
    description,
    openGraph: {
      title: fullTitle,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
    },
  };
}

export function createHomeMetadata(description: string): Metadata {
  const title = `${siteName} | LIVE Creator Community`;

  return {
    title: { absolute: title },
    description,
    openGraph: {
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
