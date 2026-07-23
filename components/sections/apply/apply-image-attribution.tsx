import type { ApplyImage } from "@/content/apply";

export function ApplyImageAttribution({ image }: { image: ApplyImage }) {
  return (
    <p className="sr-only">
      Photo by <a href={image.photographerUrl}>{image.photographer}</a> on{" "}
      <a href={image.photoPageUrl}>Unsplash</a>
    </p>
  );
}
