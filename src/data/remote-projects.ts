// src/data/remote-projects.ts
import type { PortfolioItem } from './portfolio';

interface ApiProject {
  id: string;
  title: string;
  desc: string;
  image: string;
  imageAlt: string;
  url: string;
  category: string;
  filterCategory: string;
  brand: 'vikingdev' | 'snitch';
}

const API_URL = 'https://vikingdevtj.com/api/proyectos.json';

export async function getRemoteProjects(brand?: ApiProject['brand']): Promise<PortfolioItem[]> {
  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data: ApiProject[] = await res.json();

    return data
      .filter((p) => !brand || p.brand === brand)
      .map((p) => ({
        category: 'web',
        title: p.title,
        thumb: p.image,
        href: p.url,
        alt: p.imageAlt,
      }));
  } catch (err) {
    // Si vikingdevtj.com no responde, el build sigue sin los proyectos web
    console.warn('[portfolio] No se pudo leer la API de VikingDev:', err);
    return [];
  }
}