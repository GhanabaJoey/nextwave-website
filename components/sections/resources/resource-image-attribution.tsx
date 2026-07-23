import type { ResourceImage } from "@/content/resources";

export function ResourceImageAttribution({ image }: { image: ResourceImage }) {
  return (
    <p className="sr-only">
      Photo by <a href={image.photographerUrl}>{image.photographer}</a> on{" "}
      <a href={image.photoPageUrl}>Unsplash</a>
    </p>
  );
}
