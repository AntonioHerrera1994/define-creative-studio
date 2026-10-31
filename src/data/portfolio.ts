
export type PortfolioCategory = 'branding' | 'diseno-grafico' | 'web' | 'fotografia' | 'redes' | 'interiores';

export interface PortfolioItem {
  category: PortfolioCategory;
  thumb: string;
  full?: string;
  href?: string;
  title?: string;
    alt?: string;  
}

import { UPLOADS as U } from './site';

const photos = [
  '2025/06/DEFINE_PORTAFOLIO_FOTOGRAFIAS-12.webp', '2025/06/foto-1-1.webp', '2025/06/foto-2.webp',
  '2025/06/foto-10.webp', '2025/06/foto-9.webp', '2025/06/foto-8.webp', '2025/06/foto-7.webp',
  '2025/06/foto-6.webp', '2025/06/foto-5.webp', '2025/06/foto-17.webp', '2025/06/foto-15.webp',
  '2025/06/foto-14.webp', '2025/06/foto-13.webp', '2025/06/foto-12.webp', '2025/06/foto-11.webp',
  '2025/06/foto-18.webp', '2025/06/foto-22.png', '2025/06/DEFINE_PORTAFOLIO_FOTOGRAFIAS-02.webp',
  '2025/06/DEFINE_PORTAFOLIO_FOTOGRAFIAS-05.webp', '2025/06/DEFINE_PORTAFOLIO_FOTOGRAFIAS-11.webp',
  '2025/06/DEFINE_PORTAFOLIO_FOTOGRAFIAS-07.webp', '2025/06/DEFINE_PORTAFOLIO_FOTOGRAFIAS-08.webp',
  '2025/06/DEFINE_PORTAFOLIO_FOTOGRAFIAS-10.webp', '2025/06/DEFINE_PORTAFOLIO_FOTOGRAFIAS-06.webp',
  '2025/06/DEFINE_PORTAFOLIO_FOTOGRAFIAS-04.webp', '2025/06/DEFINE_PORTAFOLIO_FOTOGRAFIAS-17.webp',
  '2025/06/DEFINE_PORTAFOLIO_FOTOGRAFIAS-13.webp', '2025/06/DEFINE_PORTAFOLIO_FOTOGRAFIAS-09.webp',
];

export const portfolio: PortfolioItem[] = [
  // ── Branding
  { category: 'branding', title: 'CETO', thumb: `${U}/2025/06/DEFINE_PORTFOLIO-01.webp`, full: `${U}/2025/06/branding_ceto_ext-scaled.png` },
  { category: 'branding', title: 'Medicat', thumb: `${U}/2025/06/DEFINE_PORTFOLIO-03.webp`, full: `${U}/2025/06/branding_medicat_ext-scaled.png` },
  { category: 'branding', title: 'Galia', thumb: `${U}/2025/05/branding-01.webp`, full: `${U}/2025/06/branding_galia_ext-scaled.png` },
  { category: 'branding', title: 'Mirai', thumb: `${U}/2025/06/DEFINE_PORTFOLIO-04.webp`, full: `${U}/2025/06/branding_mirai_ext-scaled.png` },
  { category: 'branding', title: 'bhaus', thumb: `${U}/2025/06/branding-portada2.webp`, full: `${U}/2025/06/branding-montaje1-scaled.webp` },
  { category: 'branding', title: 'Tasty Barra', thumb: `${U}/2025/06/branding-portada1.webp`, full: `${U}/2025/06/branding-montaje2.webp` },

  // ── Diseño gráfico
  { category: 'diseno-grafico', title: 'Ice Cream', thumb: `${U}/2025/06/DEFINE_PORTFOLIO-06.webp`, full: `${U}/2025/06/diseno_icecream_ext-scaled.png` },
  { category: 'diseno-grafico', title: 'Princess Tea Party', thumb: `${U}/2025/06/DEFINE_PORTFOLIO-07.webp`, full: `${U}/2025/06/diseno_princess_ext.png` },
  { category: 'diseno-grafico', title: 'Arlet', thumb: `${U}/2025/06/DEFINE_PORTFOLIO-05.webp`, full: `${U}/2025/06/diseno_arlet_ext-scaled.webp` },
  { category: 'diseno-grafico', title: 'Nutria Verde Nutrióloga', thumb: `${U}/2025/06/DEFINE_PORTFOLIO-27.webp`, full: `${U}/2025/06/DEFINE_LANDING_PORTAFOLIO-26-scaled.webp` },
  { category: 'diseno-grafico', title: 'Tuétano Taquería', thumb: `${U}/2025/06/disenografico-portada.webp`, full: `${U}/2025/06/disenografico-montaje1.webp` },
  { category: 'diseno-grafico', title: 'Aligners', thumb: `${U}/2025/06/disenografico-portada1.webp`, full: `${U}/2025/06/disenografico-montaje2.webp` },
  { category: 'diseno-grafico', title: 'Fortuna del Mar', thumb: `${U}/2025/06/disenografico-portada2.webp`, full: `${U}/2025/06/disenografico-montaje3.webp` },
  { category: 'diseno-grafico', title: 'Berun', thumb: `${U}/2025/06/disenografico-portada4.webp`, full: `${U}/2025/06/disenografico-portada4.webp` },
  { category: 'diseno-grafico', title: 'Baja Somms', thumb: `${U}/2026/09/Baja-Somms-Poster.webp`, full: `${U}/2026/09/Baja-Somms-Poster.webp` },
  { category: 'diseno-grafico', title: 'Periódico Pre-Save', thumb: `${U}/2026/09/Periodico-presave-scaled.webp`, full: `${U}/2026/09/Periodico-presave-scaled.webp` },
  { category: 'diseno-grafico', title: 'Princess Tea Party', thumb: `${U}/2026/09/Princess-Tea-Party.webp`, full: `${U}/2026/09/Princess-Tea-Party.webp` },

  // ── Web (link externo, sin modal)
  { category: 'web', title: 'La Recta Coworking', thumb: `${U}/2025/06/DEFINE_PORTFOLIO-15.webp`, href: 'https://larectacoworking.com/' },
  { category: 'web', title: 'GynandMed', thumb: `${U}/2025/06/DEFINE_PORTFOLIO-14.webp`, href: 'https://gynandmed.com/' },
  { category: 'web', title: 'Capital Ville Advisors', thumb: `${U}/2025/06/Capital-ville.webp`, href: 'https://capitalvilleadvisors.com/' },
  { category: 'web', title: 'Rihab', thumb: `${U}/2026/09/DisenoWeb_DEFINE-01-scaled.webp`, href: 'https://rihabvetcare.com/' },
  { category: 'web', title: 'Creative Real Estate', thumb: `${U}/2026/09/DisenoWeb_DEFINE-02-scaled.webp`, href: 'https://realestate.definecreativestudio.com/' },
  { category: 'web', title: 'GYNEHEALTH', thumb: `${U}/2026/09/DisenoWeb_DEFINE-03-scaled.webp`, href: 'https://define-studio.mx/drapartida/' },
  { category: 'web', title: 'Ikari CRM', thumb: `${U}/2026/09/DisenoWeb_DEFINE-04-scaled.webp`, href: 'https://ikaricrm.com/' },
  { category: 'web', title: 'Pre Save The Date', thumb: `${U}/2026/09/DisenoWeb_DEFINE-05-scaled.webp`, href: 'https://pre-savethedate.com/' },

  // ── Fotografía (miniatura = imagen completa)
  ...photos.map((p): PortfolioItem => ({ category: 'fotografia', thumb: `${U}/${p}`, full: `${U}/${p}` })),

  // ── Redes sociales (sin modal)
  { category: 'redes', title: 'Social Media', thumb: `${U}/2025/06/DEFINE_PORTFOLIO-12.webp` },
  { category: 'redes', title: 'Social Media', thumb: `${U}/2025/06/DEFINE_PORTFOLIO-13.webp` },
  { category: 'redes', title: 'Social Media', thumb: `${U}/2025/06/DEFINE_PORTFOLIO-11.webp` },

  // ── Interiores
  { category: 'interiores', thumb: `${U}/2025/06/DEFINE_PORTFOLIO-25.webp`, full: `${U}/2025/06/DEFINE_PORTFOLIO-25.webp` },
  { category: 'interiores', thumb: `${U}/2025/06/DEFINE_PORTFOLIO-24.webp`, full: `${U}/2025/06/DEFINE_PORTFOLIO-24.webp` },
  { category: 'interiores', thumb: `${U}/2025/06/DEFINE_PORTAFOLIO-PORTADAS-PT2.png`, full: `${U}/2025/06/DEFINE_PORTAFOLIO-PORTADAS-PT2.png` },
];
