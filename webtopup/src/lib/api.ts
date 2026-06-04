const rawApiUrl = process.env.NEXT_PUBLIC_API_URL || '';

export const API_BASE_URL = rawApiUrl.replace(/\/$/, '');

export function apiUrl(path: string): string {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${API_BASE_URL}${normalizedPath}`;
}

export function hasApiUrl(): boolean {
  return API_BASE_URL.length > 0;
}
