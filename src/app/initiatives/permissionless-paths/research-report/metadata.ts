import { Metadata } from 'next';
import shareableContentData from '@/app/data/shareable-content';
import { getBaseUrl } from '@/app/utils/image-urls';

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ share?: string }> }): Promise<Metadata> {
  const resolvedSearchParams = await searchParams;
  const shareId = resolvedSearchParams.share;
  
  const baseUrl = getBaseUrl();

  if (!shareId) {
    return {
      metadataBase: new URL(baseUrl),
      title: 'Permissionless Paths - Research Report by Laura Lotti',
      description: 'Research findings on sustainable open source development in the freedom tech ecosystem',
      openGraph: {
        title: 'Permissionless Paths - Research Report',
        description: 'Research findings on sustainable open source development in the freedom tech ecosystem',
        images: [
          {
            url: `${baseUrl}/images/og-default.png`,
            width: 1200,
            height: 630,
            alt: 'Permissionless Paths - Research Report',
          }
        ],
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title: 'Permissionless Paths - Research Report',
        description: 'Research findings on sustainable open source development in the freedom tech ecosystem',
        images: [`${baseUrl}/images/og-default.png`],
      },
    };
  }

  const content = (shareableContentData)[shareId];

  if (!content) {
    return {
      title: 'Permissionless Paths - Research Report by Laura Lotti',
      description: 'Research findings on sustainable open source development in the freedom tech ecosystem',
    };
  }

  // Use static image path for better social media crawler compatibility
  const ogImageUrl = `${baseUrl}/images/og/${content.order}.jpg`;

  // Sanitize special characters for better Twitter compatibility
  const sanitizedQuote = content.quote
    .replace(/[""]/g, '"')  // Replace curly quotes with straight quotes
    .replace(/['']/g, "'"); // Replace curly apostrophes with straight apostrophes

  return {
    metadataBase: new URL(baseUrl),
    title: content.quote,
    description: content.description,
    openGraph: {
      title: content.quote,
      description: content.description,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: sanitizedQuote,
          type: 'image/jpeg',
          secureUrl: ogImageUrl,
        }
      ],
      type: 'article',
      url: `${baseUrl}/initiatives/permissionless-paths/research-report?share=${shareId}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: content.quote,
      description: content.description,
      images: [ogImageUrl],
    },
  };
}
