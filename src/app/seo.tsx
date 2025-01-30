import { Metadata } from "next";

interface PageSEOProps {
  title: string;
  description?: string;
  image?: string;
  [key: string]: unknown;
}

export function genPageMetadata({ title, description, image, ...rest }: PageSEOProps): Metadata {
  return {
    title,
    openGraph: {
      title: `${title}`,
      description: description || "Waye empowers builders to stay clear-headed, motivated, and aligned for long-term impact.",
      url: "./",
      siteName: "Waye",
      images: image ? [image] : ["/images/webclip.webp"],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      title: `${title}`,
      card: "summary_large_image",
      images: image ? [image] : ["/images/webclip.webp"],
    },
    ...rest,
  };
}
