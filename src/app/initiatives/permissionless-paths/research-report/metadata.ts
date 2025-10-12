import { Metadata } from 'next';
import shareableContentData from '@/app/data/shareable-content.json';
import { ShareableContent } from '@/app/types/shareable-content';

export async function generateMetadata({ searchParams }: { searchParams: Promise<{ share?: string }> }): Promise<Metadata> {
  const resolvedSearchParams = await searchParams;
  const shareId = resolvedSearchParams.share;
  
  const baseUrl = 'https://407cd9e9b679.ngrok-free.app';

  if (!shareId) {
    // Default metadata for the main page
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

  const content = (shareableContentData as any)[shareId] as ShareableContent;

  if (!content) {
    // Fallback metadata if content not found
    return {
      title: 'Permissionless Paths - Research Report by Laura Lotti',
      description: 'Research findings on sustainable open source development in the freedom tech ecosystem',
    };
  }

  // Use the dynamic OG image API for proper Open Graph images
  const ogImageUrl = `${baseUrl}/api/og?id=${shareId}`;

  return {
    metadataBase: new URL(baseUrl),
    title: content.title,
    description: content.description,
    openGraph: {
      title: content.title,
      description: content.description,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: content.title,
        }
      ],
      type: 'website',
      url: `${baseUrl}/initiatives/permissionless-paths/research-report?share=${shareId}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: content.title,
      description: content.description,
      images: [ogImageUrl],
    },
  };
}
