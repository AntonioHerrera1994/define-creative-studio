// ─────────────────────────────────────────────
// Utilidades de idioma
// ─────────────────────────────────────────────
import { ui, defaultLang, languages, type Lang } from './ui';

/** Detecta el idioma a partir de la URL: /en/... → 'en', todo lo demás → 'es' */
export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  if (first in languages) return first as Lang;
  return defaultLang;
}

/** Devuelve el diccionario completo del idioma: t.hero.title, t.nav.services, etc. */
export function useTranslations(lang: Lang) {
  return ui[lang];
}

/**
 * Construye una ruta en el idioma indicado.
 * localizePath('/blog/', 'en') → '/en/blog/'
 * localizePath('/blog/', 'es') → '/blog/'
 */
export function localizePath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === defaultLang ? clean : `/${lang}${clean}`;
}

/**
 * Páginas cuyo slug cambia según el idioma.
 * Cada fila: { es: ruta en español, en: ruta en inglés } (sin el prefijo /en).
 * Agrega aquí cada página nueva con slug traducido.
 */
export const ROUTE_ALIASES: Record<Lang, string>[] = [
  // Ejemplo: { es: '/fotografia-de-producto/', en: '/product-photography/' },
];

/** Ruta equivalente en el otro idioma (para el switch ES/EN y hreflang) */
export function getAlternatePath(url: URL, target: Lang): string {
  const current = getLangFromUrl(url);
  let path = url.pathname;
  if (current !== defaultLang) path = path.replace(new RegExp(`^/${current}`), '') || '/';
  const alias = ROUTE_ALIASES.find((r) => r[current] === path);
  if (alias) path = alias[target];
  return localizePath(path, target);
}

/** Ruta de una página en el idioma indicado, respetando ROUTE_ALIASES si su slug cambia */
export function routeFor(esPath: string, lang: Lang): string {
  const alias = ROUTE_ALIASES.find((r) => r.es === esPath);
  return localizePath(alias ? alias[lang] : esPath, lang);
}

/** Link de WhatsApp con mensaje prellenado */
export const WA_NUMBER = '5216643142433';
export function waLink(message: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}
