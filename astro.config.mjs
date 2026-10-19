// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://define-studio.mx',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false }, // es → /   ·   en → /en/
  },
  integrations: [
    sitemap({
      // Genera /sitemap-index.xml con hreflang ES/EN en cada URL
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es-MX', en: 'en-US' },
      },
      // Fuera del sitemap: páginas 404
      filter: (page) => !/\/404\/?$/.test(page),
      // Fecha de última modificación = fecha del build
      lastmod: new Date(),
    }),
  ],
});
