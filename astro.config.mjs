// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://define-studio.mx',
  trailingSlash: 'always',
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false }, // es → /   ·   en → /en/
  },
});
