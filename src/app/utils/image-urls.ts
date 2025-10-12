export function getImageUrl(imagePath: string, baseUrl?: string): string {
  if (imagePath.startsWith('http')) {
    return imagePath;
  }

  if (baseUrl) {
    return `${baseUrl}${imagePath}`;
  }

  return imagePath;
}

export function getBaseUrl(): string {
  if (process.env.NODE_ENV === 'production') {
    return 'https://www.waye.dev';
  }

  if (process.env.NEXT_PUBLIC_NGROK_URL) {
    return process.env.NEXT_PUBLIC_NGROK_URL;
  }

  return 'https://ba3e6ddf872b.ngrok-free.app';
}
