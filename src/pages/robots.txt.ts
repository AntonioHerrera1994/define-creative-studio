// ═══════════════════════════════════════════════
// robots.txt — se genera en el build con el dominio de astro.config.mjs
// ═══════════════════════════════════════════════
import type { APIRoute } from 'astro';

export const GET: APIRoute = ({ site }) => {
  const sitemap = new URL('sitemap-index.xml', site).href;
  const body = `User-agent: *
Allow: /
Disallow: /404/
Disallow: /en/404/

Sitemap: ${sitemap}
`;
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
