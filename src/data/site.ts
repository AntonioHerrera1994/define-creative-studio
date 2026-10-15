// ─────────────────────────────────────────────
// Servidor de imágenes. TODAS las imágenes propias salen de aquí.
// Si mañana cambia el dominio, cámbialo solo en esta línea
// (y en los .md del blog: busca y reemplaza el dominio).
// ─────────────────────────────────────────────
export const MEDIA_HOST = 'https://joseantonioh59.sg-host.com';
export const UPLOADS = `${MEDIA_HOST}/wp-content/uploads`;

// Datos del negocio: se usan en SEO, Schema.org, footer y links.
export const SITE = {
  name: 'Define Creative Studio',
  shortName: 'Define Studio',
  url: 'https://define-studio.mx',
  phone: '+526643142433',
  whatsapp: '5216643142433',
  twitter: '@definestudiomx',
  logo: `${UPLOADS}/2025/05/Tecnologia-para-todos.png`,
  logoWhite: `${UPLOADS}/2026/06/Define_Logo-copy.svg`,
  ogImage: `${UPLOADS}/2025/05/Tecnologia-para-todos.png`,
  storyImage: `${UPLOADS}/2026/09/DSC04966-scaled.jpg`,
  showreelId: 'c299O9muNU8',
  foundingDate: '2011',
  geo: { lat: 32.5027, lng: -117.0037 },
  areaServed: ['Tijuana', 'Rosarito', 'Ensenada', 'San Diego', 'Los Ángeles', 'Orange County'],
  social: {
    instagram: 'https://www.instagram.com/definestudiomx',
    facebook: 'https://www.facebook.com/CreativeDefineStudio',
  },
  sameAs: [
    'https://www.instagram.com/definestudiomx',
    'https://www.facebook.com/CreativeDefineStudio',
    'https://pre-savethedate.com',
    'https://realestate.definecreativestudio.com',
    'https://ikaricrm.com',
  ],
  ikariUrl: 'https://ikaricrm.com/',
} as const;

// Texturas decorativas de fondo
export const TEXTURES = {
  t1: `${UPLOADS}/2025/06/textura-1.svg`,
  t4: `${UPLOADS}/2025/06/textura-4.svg`,
  happy: `${UPLOADS}/2025/06/feliz3.webp`,
} as const;
