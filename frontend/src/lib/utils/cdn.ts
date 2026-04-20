const CDN_BASE_URL = process.env.NEXT_PUBLIC_CDN_URL || 'https://cdn.recap-pro.com';

export function getCdnUrl(path: string): string {
  if (!path) return '';
  
  // If it's already a full URL, return as is
  if (path.startsWith('http://') || path.startsWith('https://')) {
    return path;
  }
  
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${CDN_BASE_URL}/${cleanPath}`;
}

export function isCdnUrl(url: string): boolean {
  return url.includes(CDN_BASE_URL);
}

export function extractCdnPath(url: string): string | null {
  if (!isCdnUrl(url)) return null;
  return url.replace(CDN_BASE_URL, '');
}