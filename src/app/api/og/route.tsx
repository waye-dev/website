import { NextRequest } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return new Response('Missing id parameter', { status: 400 });
    }

    const imagePath = join(process.cwd(), 'public', 'images', 'og', `${id}.jpg`);
    const fallbackImagePath = join(process.cwd(), 'public', 'images', 'og', '1.jpg');

    try {
      const imageBuffer = await readFile(imagePath);

      return new Response(imageBuffer, {
        headers: {
          'Content-Type': 'image/jpeg',
          'Content-Length': imageBuffer.length.toString(),
          'Cache-Control': 'public, max-age=31536000, immutable',
        },
      });
    } catch (error) {
      console.error(`Image not found for ID: ${id}, using fallback`);

      // Try to serve fallback image
      try {
        const fallbackBuffer = await readFile(fallbackImagePath);
        return new Response(fallbackBuffer, {
          headers: {
            'Content-Type': 'image/jpeg',
            'Content-Length': fallbackBuffer.length.toString(),
            'Cache-Control': 'public, max-age=3600',
          },
        });
      } catch (fallbackError) {
        return new Response('Image not found', { status: 404 });
      }
    }
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to serve the image`, {
      status: 500,
    });
  }
}
