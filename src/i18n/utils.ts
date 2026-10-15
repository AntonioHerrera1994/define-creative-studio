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

/** Ruta equivalente en el otro idioma (para el switch ES/EN y hreflang) */
export function getAlternatePath(url: URL, target: Lang): string {
  const current = getLangFromUrl(url);
  let path = url.pathname;
  if (current !== defaultLang) path = path.replace(new RegExp(`^/${current}`), '') || '/';
  return localizePath(path, target);
}

/** Link de WhatsApp con mensaje prellenado */
export const WA_NUMBER = '5216643142433';
export function waLink(message: string): string {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}
