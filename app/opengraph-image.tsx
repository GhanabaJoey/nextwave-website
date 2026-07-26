import { ImageResponse } from "next/og";
import { OgImageContent, ogImageSize } from "@/lib/og-image";

export const runtime = "edge";
export const alt = "NextWave Creator Network";
export const size = ogImageSize;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(<OgImageContent />, {
    ...ogImageSize,
  });
}
