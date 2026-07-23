import type { CommunityImage } from "@/content/community";

export function CommunityImageAttribution({ image }: { image: CommunityImage }) {
  return (
    <p className="sr-only">
      Photo by <a href={image.photographerUrl}>{image.photographer}</a> on{" "}
      <a href={image.photoPageUrl}>Unsplash</a>
    </p>
  );
}
