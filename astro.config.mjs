// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

const SITE = 'https://define-studio.mx';

// Páginas con slug distinto por idioma (mismo listado que ROUTE_ALIASES en src/i18n/utils.ts)
const ROUTE_ALIASES = [
  // Ejemplo: { es: '/fotografia-de-producto/', en: '/en/product-photography/' },
];

export default defineConfig({
  site: SITE,
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
      // Liga en el sitemap las páginas cuyo slug cambia por idioma
      serialize(item) {
        const path = new URL(item.url).pathname;
        const alias = ROUTE_ALIASES.find((r) => r.es === path || r.en === path);
        if (alias) {
          item.links = [
            { lang: 'es-MX', url: SITE + alias.es },
            { lang: 'en-US', url: SITE + alias.en },
          ];
        }
        return item;
      },
    }),
  ],
});
