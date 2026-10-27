// ═══════════════════════════════════════════════
// Forma del contenido de una página de servicio.
// La usan pagina-web.ts y (después) highlevel.ts.
// Todos los textos que terminan en "Html" aceptan <span class="text-lime">…</span>, <strong>, <br>.
// ═══════════════════════════════════════════════

export type Tone = 'blue' | 'lime' | 'lavender';

export interface ServicePage {
  seo: {
    title: string;
    description: string;
    keywords?: string;         // opcional: Google ya no usa meta keywords
    ogImageAlt: string;
    serviceType: string;       // Schema.org Service
    breadcrumb: string;        // último eslabón del breadcrumb
  };

  hero: {
    kicker: string;
    titleHtml: string;         // el H1 — debe llevar la keyword
    intro: string;
    ctaPrimary: string;
    ctaSecondary: string;      // baja a #paquetes
    wa: string;                // mensaje prellenado de WhatsApp
    trust: string[];           // 3 viñetas cortas bajo los botones
    image?: string;            // si no hay imagen, se muestra el mock de CRM (visual: 'crm')
    imageAlt?: string;
    visual?: 'image' | 'crm';
    /** Textos del mock de CRM (solo si visual: 'crm') */
    crm?: {
      title: string;                                   // "Pipeline de ventas"
      columns: { name: string; cards: { name: string; meta: string }[] }[];
      toast: string;                                   // notificación flotante
    };
    floatTop: { value: string; label: string };    // tarjetita flotante arriba
    floatBottom: { value: string; label: string }; // tarjetita flotante abajo
  };

  benefits: {
    kicker: string;
    titleHtml: string;
    subtitle: string;
    items: { icon: string; tone: Tone; title: string; text: string }[];
  };

  seoText: {
    kicker: string;
    titleHtml: string;         // H2 con la keyword + ciudad
    paragraphsHtml: string[];
    areasTitle: string;
    areas: string[];
  };

  /** Bloque opcional texto + mock de chat (ej. "CRM para WhatsApp") */
  highlight?: {
    kicker: string;
    titleHtml: string;
    text: string;
    points: string[];
    /** Visual del bloque: 'chat' (WhatsApp) o 'bilingual' (sitio con switch EN/ES) */
    visual?: 'chat' | 'bilingual';
    chat?: { from: 'client' | 'bot'; text: string }[];
    chatName?: string;         // nombre del contacto en el mock
    chatStatus?: string;       // "en línea"
    bilingual?: {
      url: string;             // texto de la barra de dirección
      en: { kicker: string; title: string; cta: string };
      es: { kicker: string; title: string; cta: string };
    };
  };

  includes: {
    kicker: string;
    titleHtml: string;
    items: { icon: string; title: string; text: string }[];
  };

  packages: {
    kicker: string;
    titleHtml: string;
    subtitle: string;
    from: string;              // "Desde"
    currency: string;          // "MXN + IVA"
    popular: string;           // etiqueta del destacado
    cta: string;
    items: {
      name: string;
      for: string;             // para quién es
      price: string;           // texto mostrado: "$14,900"
      priceValue: number;      // número para Schema
      priceCurrency: 'MXN' | 'USD';
      note: string;            // "pago único", "/mes"
      billing?: 'once' | 'monthly'; // para Schema: precio único o mensual (default: único)
      delivery: string;        // tiempo de entrega
      featured?: boolean;
      features: string[];
      wa: string;              // mensaje de WhatsApp de ese paquete
    }[];
    footnotes: string[];
  };

  steps: {
    kicker: string;
    titleHtml: string;
    items: { title: string; time: string; text: string }[];
  };

  work?: {
    kicker: string;
    titleHtml: string;
    subtitle: string;
    visit: string;
  };

  faq: {
    titleHtml: string;
    items: { q: string; a: string }[];
  };

  cta: {
    kicker: string;
    titleHtml: string;
    text: string;
    primary: string;
    secondary: string;
    note: string;
  };
}
