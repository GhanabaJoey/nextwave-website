import type { ContactImage } from "@/content/contact";

export function ContactImageAttribution({ image }: { image: ContactImage }) {
  return (
    <p className="sr-only">
      Photo by <a href={image.photographerUrl}>{image.photographer}</a> on{" "}
      <a href={image.photoPageUrl}>Unsplash</a>
    </p>
  );
}
