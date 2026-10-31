
// ═══════════════════════════════════════════════
import { portfolio as localPortfolio, type PortfolioItem } from '../data/portfolio';

/** URL de la API (configúrala en .env o en Netlify → Environment variables) */
const API_URL = import.meta.env.PROJECTS_API_URL ?? 'https://vikingdevtj.com/api/proyectos.json';

/** Marcas a mostrar. Quita una si no quieres que aparezca en Define. */
const BRANDS = ['vikingdev', 'snitch'];

/** Lo que devuelve la API (solo los campos que usamos) */
interface ApiProject {
  id: string;
  image: string;
  imageAlt: string;
  title: string;
  url: string;
  brand: string;
}

let cache: Promise<PortfolioItem[]> | null = null;

async function fetchWebProjects(): Promise<PortfolioItem[]> {
  try {
    const res = await fetch(API_URL, { signal: AbortSignal.timeout(8000) });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = (await res.json()) as ApiProject[];

    return data
      .filter((p) => BRANDS.includes(p.brand))
      .map((p) => ({
        category: 'web' as const,
        title: p.title,
        thumb: p.image,
        alt: p.imageAlt,
        href: p.url,
      }));
  } catch (err) {
    console.warn(`[portfolio] No se pudo leer ${API_URL} → se usan los proyectos locales.`, err);
    return [];
  }
}

export function getPortfolio(): Promise<PortfolioItem[]> {
  cache ??= (async () => {
    const web = await fetchWebProjects();
    if (!web.length) return localPortfolio;
    return [...localPortfolio.filter((p) => p.category !== 'web'), ...web];
  })();
  return cache;
}