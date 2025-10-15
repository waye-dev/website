import { NextRequest } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';
import shareableContentData, { Shareabledescription } from '@/app/data/shareable-content';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return new Response('Missing id parameter', { status: 400 });
    }

    // First try to serve a static image
    const imagePath = join(process.cwd(), 'public', 'images', 'og', `${id}.webp`);

    try {
      const imageBuffer = await readFile(imagePath);

      return new Response(new Uint8Array(imageBuffer), {
        headers: {
          'Content-Type': 'image/webp',
          'Cache-Control': 'public, max-age=31536000, immutable',
        },
      });
    } catch (error) {
      // If static image not found, try to generate dynamic image
      const content = shareableContentData[id];
      
      if (!content) {
        console.error(`Content not found for ID: ${id}`);
        return new Response('Content not found', { status: 404 });
      }

      console.log(`Generating OG image for ID: ${id}, Title: ${content.title}`);

      return new ImageResponse(
        (
          <div
            style={{
              height: '100%',
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#0F172A',
              backgroundImage: 'linear-gradient(45deg, #0F172A 0%, #1E293B 100%)',
              padding: '60px',
              fontFamily: 'system-ui',
            }}
          >
            {/* Header */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginBottom: '40px',
              }}
            >
              <div
                style={{
                  fontSize: '24px',
                  color: '#94A3B8',
                  marginBottom: '8px',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                }}
              >
                {content.section}
              </div>
              <div
                style={{
                  fontSize: '48px',
                  color: '#FFFFFF',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  lineHeight: '1.2',
                  maxWidth: '800px',
                }}
              >
                {content.title}
              </div>
            </div>

            {/* Content */}
            <div
              style={{
                fontSize: '28px',
                color: '#E2E8F0',
                textAlign: 'center',
                lineHeight: '1.4',
                maxWidth: '900px',
                marginBottom: '40px',
              }}
            >
              {content.description}
            </div>

            {/* Footer */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                marginTop: 'auto',
              }}
            >
              <div
                style={{
                  fontSize: '20px',
                  color: '#64748B',
                }}
              >
                Permissionless Paths by Laura Lotti
              </div>
              <div
                style={{
                  width: '4px',
                  height: '4px',
                  backgroundColor: '#64748B',
                  borderRadius: '50%',
                }}
              />
              <div
                style={{
                  fontSize: '20px',
                  color: '#64748B',
                }}
              >
                waye.org
              </div>
            </div>
          </div>
        ),
        {
          width: 1200,
          height: 630,
        }
      );
    }
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to serve the image`, {
      status: 500,
    });
  }
}
