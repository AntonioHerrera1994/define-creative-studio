// Helpers del blog: filtran por idioma, ocultan borradores y ordenan por fecha.
import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';

export type Post = CollectionEntry<'blog'>;

/** id "es/mi-articulo" → idioma "es" */
export const postLang = (post: Post) => post.id.split('/')[0] as Lang;
/** id "es/mi-articulo" → slug "mi-articulo" */
export const postSlug = (post: Post) => post.id.split('/').slice(1).join('/');

export async function getPosts(lang: Lang, limit?: number): Promise<Post[]> {
  const posts = await getCollection('blog', (p) => postLang(p) === lang && (import.meta.env.DEV || !p.data.draft));
  posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
  return limit ? posts.slice(0, limit) : posts;
}

export function formatDate(date: Date, lang: Lang) {
  return date.toLocaleDateString(lang === 'es' ? 'es-MX' : 'en-US', { year: 'numeric', month: 'long' });
}
