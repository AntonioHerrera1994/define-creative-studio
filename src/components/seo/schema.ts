// ═══════════════════════════════════════════════
// Generadores de Schema.org. Devuelven objetos que se pasan a <SEO schema={[...]} />
// ═══════════════════════════════════════════════
import { SITE } from '../../data/site';
import type { Lang, UI } from '../../i18n/ui';

const ID = {
  business: `${SITE.url}/#business`,
  website: `${SITE.url}/#website`,
};

export function localBusinessSchema(t: UI) {
  return {
    '@type': 'LocalBusiness',
    '@id': ID.business,
    name: SITE.name,
    alternateName: SITE.shortName,
    description: t.meta.description,
    url: SITE.url,
    logo: { '@type': 'ImageObject', url: SITE.logo },
    image: SITE.storyImage,
    telephone: SITE.phone,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Tijuana',
      addressRegion: 'Baja California',
      addressCountry: 'MX',
    },
    geo: { '@type': 'GeoCoordinates', latitude: SITE.geo.lat, longitude: SITE.geo.lng },
    foundingDate: SITE.foundingDate,
    areaServed: SITE.areaServed.map((name) => ({ '@type': 'City', name })),
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    sameAs: SITE.sameAs,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: t.services.title,
      itemListElement: t.services.items.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.title, description: s.text },
      })),
    },
  };
}

export function websiteSchema(t: UI, lang: Lang) {
  return {
    '@type': 'WebSite',
    '@id': ID.website,
    url: SITE.url,
    name: SITE.name,
    description: t.meta.description,
    publisher: { '@id': ID.business },
    inLanguage: lang === 'es' ? 'es-MX' : 'en-US',
  };
}

/** FAQ con las MISMAS preguntas visibles en la página (Google exige que coincidan) */
export function faqSchema(items: { q: string; a: string }[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a },
    })),
  };
}

export function blogPostingSchema(opts: {
  title: string;
  description: string;
  url: string;
  image?: string;
  datePublished: Date;
  dateModified?: Date;
  author: string;
  lang: Lang;
  keywords?: string[];
  section?: string;
  readingTime?: number;
}) {
  return {
    '@type': 'BlogPosting',
    headline: opts.title,
    description: opts.description,
    url: opts.url,
    mainEntityOfPage: opts.url,
    image: opts.image ?? SITE.ogImage,
    datePublished: opts.datePublished.toISOString(),
    dateModified: (opts.dateModified ?? opts.datePublished).toISOString(),
    inLanguage: opts.lang === 'es' ? 'es-MX' : 'en-US',
    author: { '@type': 'Organization', name: opts.author, url: SITE.url },
    publisher: { '@id': ID.business },
    ...(opts.keywords?.length && { keywords: opts.keywords }),
    ...(opts.section && { articleSection: opts.section }),
    ...(opts.readingTime && { timeRequired: `PT${opts.readingTime}M` }),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}

/** Servicio con paquetes "desde" (páginas de servicio) */
export function serviceSchema(opts: {
  name: string;
  serviceType: string;
  description: string;
  url: string;
  lang: Lang;
  areaServed: string[];
  offers: { name: string; description: string; price: number; currency: string; monthly?: boolean }[];
}) {
  return {
    '@type': 'Service',
    '@id': `${opts.url}#service`,
    name: opts.name,
    serviceType: opts.serviceType,
    description: opts.description,
    url: opts.url,
    inLanguage: opts.lang === 'es' ? 'es-MX' : 'en-US',
    provider: { '@id': ID.business },
    areaServed: opts.areaServed.map((name) => ({ '@type': 'City', name })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: opts.name,
      itemListElement: opts.offers.map((o) => ({
        '@type': 'Offer',
        name: o.name,
        description: o.description,
        price: o.price,
        priceCurrency: o.currency,
        priceSpecification: o.monthly
          ? {
              '@type': 'UnitPriceSpecification',
              price: o.price,
              priceCurrency: o.currency,
              unitCode: 'MON',          // precio por mes
              referenceQuantity: { '@type': 'QuantitativeValue', value: 1, unitCode: 'MON' },
            }
          : { '@type': 'PriceSpecification', minPrice: o.price, priceCurrency: o.currency },
      })),
    },
  };
}
