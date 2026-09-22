// Astro serves this site under a base path on GitHub Pages
// (/unlv-ai-club). Every internal link and asset URL must go through
// withBase() or it will 404 in production while working fine in dev.
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export function withBase(path: string): string {
	return `${BASE}/${path.replace(/^\//, '')}`;
}
