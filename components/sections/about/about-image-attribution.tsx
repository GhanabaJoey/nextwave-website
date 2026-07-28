import type { AboutImage } from "@/content/about";

export function AboutImageAttribution({ image }: { image: AboutImage }) {
  return (
    <p className="sr-only">
      Photo by <a href={image.photographerUrl}>{image.photographer}</a> on{" "}
      <a href={image.platformUrl ?? "https://unsplash.com"}>
        {image.platform ?? "Unsplash"}
      </a>
    </p>
  );
}
