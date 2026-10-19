// ─────────────────────────────────────────────
// Textos del sitio en ES / EN
// Cada sección del home tiene su bloque. Para cambiar un texto,
// edítalo aquí en ambos idiomas; los componentes no llevan texto fijo.
// ─────────────────────────────────────────────

export const languages = { es: 'Español', en: 'English' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'es';

const es = {
  meta: {
    htmlLang: 'es',
    ogLocale: 'es_MX',
    title: 'Define Creative Studio | Agencia de Branding, Marketing Digital y Fotografía en Tijuana, México',
    description:
      'Define Creative Studio: agencia de branding, dirección de arte, fotografía editorial, contenido, diseño web y paid media en Tijuana. Más de 14 años construyendo marcas coherentes, visualmente poderosas y estratégicamente relevantes.',
    ogTitle: 'Define Creative Studio | Branding, Fotografía y Marketing Digital en Tijuana',
    ogDescription:
      'Construimos marcas que destacan. Branding, dirección de arte, fotografía editorial, diseño web y paid media para negocios con ambición. Agencia creativa con 14+ años en Tijuana, México.',
    ogImageAlt: 'Define Creative Studio — Agencia de Branding y Marketing Digital en Tijuana, México',
    keywords:
      'agencia de branding Tijuana, dirección de arte Tijuana, fotografía editorial Tijuana, fotografía de producto Tijuana, diseño web Tijuana, paid media Tijuana, Meta Ads Tijuana, Google Ads México, identidad de marca, agencia creativa Tijuana, marketing digital Baja California, Define Creative Studio',
  },

  nav: {
    services: 'Servicios',
    process: 'Proceso',
    portfolio: 'Portafolio',
    pricing: 'Planes',
    blog: 'Blog',
    ikari: 'Ikari CRM',
    contact: 'Contáctanos',
    openMenu: 'Abrir menú',
    switchLabel: 'Switch to English',
    switchShort: 'EN',
    switchFlag: '🇺🇸',
  },

  wa: {
    general: '¡Hola! Me gustaría más información de sus servicios',
    starter: '¡Hola! Me interesa el paquete Brand Starter',
  },

  hero: {
    titleHtml:
      '<span class="text-accent">Construimos</span> marcas <br>que destacan y <span class="text-accent">estrategias</span> que <br>las hacen crecer.',
    subtitle:
      'Branding, dirección de arte, fotografía, contenido editorial, diseño web y paid media (ADS) para construir marcas visualmente poderosas y estratégicamente relevantes.',
    videoTitle: 'Define Creative Studio — Showreel',
    ctaPrimary: 'Empezar ahora',
    ctaSecondary: 'Ver portafolio',
  },

  services: {
    eyebrowHtml: 'Nuestros <span class="text-accent">Servicios</span>',
    title: 'Estrategias que mueven la aguja',
    items: [
      { icon: 'palette', tone: 'blue', title: 'Graphic Design & Branding', text: 'Construimos marcas distintivas desde su esencia. Desde la estrategia y el concepto creativo hasta la identidad visual y los lineamientos de marca, creamos sistemas coherentes diseñados para hacer que cada marca sea reconocible, relevante y memorable.' },
      { icon: 'draw', tone: 'lime', title: 'Art Direction', text: 'Definimos el universo visual detrás de una marca. A través de conceptos creativos, moodboards, styling, dirección de campañas y narrativa visual, transformamos ideas en imágenes y experiencias con una identidad clara.' },
      { icon: 'photo_camera', tone: 'lavender', title: 'Product & Brand Photography', text: 'Creamos fotografía intencional, editorial y completamente alineada con la identidad de cada marca. Desde producto y e-commerce hasta lifestyle y campañas, cada imagen está pensada como parte de una narrativa visual más amplia.' },
      { icon: 'article', tone: 'blue', title: 'Editorial Content', text: 'Creamos contenido editorial que va más allá de simplemente llenar un feed. Desde conceptos creativos y storytelling hasta campañas sociales, narrativas visuales y contenido de marca, cada pieza está diseñada para fortalecer la identidad y generar conexiones relevantes con su audiencia.' },
      { icon: 'campaign', tone: 'lime', title: 'Paid Media (ads)', text: 'Convertimos marcas sólidas en crecimiento medible. A través de campañas estratégicas en Google y Meta, conectamos las marcas con las audiencias correctas, generamos tráfico de calidad y optimizamos constantemente para mejorar resultados.' },
      { icon: 'web', tone: 'lavender', title: 'Web Design', text: 'Diseñamos experiencias digitales donde branding, funcionalidad y estrategia trabajan juntas. Desde landing pages hasta sitios corporativos y e-commerce, creamos páginas responsivas diseñadas para conectar, comunicar y convertir.' },
    ],
  },

  story: {
    kicker: 'Nuestra historia',
    titleHtml: '¿Por qué existe<br><span class="text-lime">Define Creative Studio</span>?',
    lead: 'Con más de 14 años de experiencia en la frontera entre Tijuana y San Diego, sabemos que tu marca es más que un logo.',
    tagline: 'A brand is more than a logo.',
    points: [
      'Es la manera en que <strong>se ve.</strong>',
      'La manera en que <strong>habla.</strong>',
      'La manera en que <strong>se fotografía.</strong>',
      'La <strong>experiencia</strong> que crea.',
      'Y la forma en que <strong>llega a las personas correctas.</strong>',
    ],
    closingHtml:
      'En <strong>Define Creative Studio</strong> conectamos estrategia, dirección creativa y ejecución para construir marcas coherentes en cada punto de contacto.',
    imageAlt: 'Define Creative Studio — 14 años de experiencia en Tijuana y San Diego',
  },

  portfolio: {
    titleHtml: 'Casos de <span class="text-accent">Éxito</span>',
    subtitle: 'Proyectos que generaron resultados reales para nuestros clientes.',
    categories: {
      branding: 'Branding',
      'diseno-grafico': 'Diseño Gráfico',
      web: 'Web',
      fotografia: 'Fotografía',
      redes: 'Redes Sociales',
      interiores: 'Interiores',
    },
    viewSite: 'Ver sitio',
    photoSession: 'Sesión fotográfica',
    prev: 'Anterior',
    next: 'Siguiente',
    close: 'Cerrar',
  },

  process: {
    eyebrowHtml: 'Cómo <span class="text-accent">Trabajamos</span>',
    titleHtml: 'Nuestro proceso, <span class="text-muted">paso a paso</span>',
    subtitle: 'De la primera reunión a resultados medibles. Sin burocracia, sin esperas eternas.',
    steps: [
      { n: '01', tone: 'lime', title: 'Discover', text: 'Entendemos la marca, sus objetivos, audiencia y oportunidades.' },
      { n: '02', tone: 'dark', title: 'Define', text: 'Construimos la estrategia, concepto y dirección creativa.' },
      { n: '03', tone: 'pink', title: 'Create', text: 'Diseñamos, producimos y desarrollamos cada punto de contacto.' },
      { n: '04', tone: 'primary', title: 'Launch & Grow', text: 'Lanzamos, medimos y evolucionamos el proyecto conforme la marca crece.' },
    ],
  },

  clients: {
    titleHtml: 'Confían en <span class="text-accent">Nosotros</span>',
    logoAlt: 'Logo de cliente',
  },

  projects: {
    kicker: 'Proyectos',
    titleHtml: 'Trabajo que <span class="text-lime">habla</span> por sí solo.',
    subtitle: 'Estrategia, creatividad y ejecución en cada proyecto que tocamos.',
    items: [
      { tag: 'CRM · Tecnología', title: 'Ikari CRM', text: 'Gestión inteligente para clínicas y negocios.' },
      { tag: 'Branding · Eventos', title: 'Pre Save the Date', text: 'Identidad visual para bodas con alma propia.' },
      { tag: 'Real Estate · Marketing', title: 'Define Real Estate', text: 'Publicidad digital para asesores inmobiliarios en EE.UU.' },
    ],
  },

  pricing: {
    kicker: 'Paquete',
    titleHtml: 'Todo lo que tu marca necesita,<br><span class="text-accent">en un solo paquete.</span>',
    subtitle: 'Sin contratos eternos. Sin letra chica. Solo estrategia digital que construye y convierte.',
    badge: 'Paquete integral',
    name: 'Brand Starter',
    description: 'Para marcas que quieren comenzar, reactivar o profesionalizar su presencia digital.',
    priceLabel: 'Inversión mensual',
    price: '$12,500',
    priceNote: '+ IVA · MXN/mes',
    introHtml:
      'Reúne los elementos esenciales para construir una marca más sólida y visible: <strong>imagen, storytelling, contenido, redes sociales, publicidad, segmentación de audiencias y presencia local en Google.</strong>',
    blocks: [
      { icon: 'thumb_up', tone: 'blue', title: 'Instagram + Facebook', textHtml: '<strong>8 publicaciones mensuales</strong> — planeación, dirección creativa, diseño, edición, copywriting y programación.', items: ['2 Reels', '2 Carruseles', '4 publicaciones gráficas y/o fotográficas'], wide: false },
      { icon: 'auto_stories', tone: 'lime', title: 'Historias', textHtml: '<strong>Hasta 8–10 historias mensuales</strong> para complementar la comunicación y mantener una presencia constante.', items: ['Contenido de sesiones, productos y servicios', 'Promociones e información relevante'], wide: false },
      { icon: 'photo_camera', tone: 'lavender', title: 'Producción Bimestral', textHtml: '<strong>Sesión cada 2 meses</strong> para generar banco de contenido propio: fotografía, video vertical, dirección creativa y edición.', items: ['Fotografía de marca y producto', 'Video vertical para Reels e Historias'], wide: false },
      { icon: 'location_on', tone: 'lime', title: 'Google Business Profile', textHtml: 'Apertura, configuración y mantenimiento de la ficha para fortalecer la <strong>visibilidad local en Google y Google Maps.</strong>', items: ['Optimización de información y servicios', 'Publicación del contenido mensual'], wide: false },
      { icon: 'campaign', tone: 'blue', title: 'Meta Ads', textHtml: '<strong>1 campaña mensual en Facebook e Instagram</strong> enfocada en aumentar visibilidad y llegar a nuevas audiencias.', items: ['Estrategia y objetivo de campaña', 'Segmentación de audiencias e intereses', 'Hasta 2 conjuntos de anuncios', 'Copy publicitario y adaptación de contenido', 'Monitoreo y optimización continua', 'Reporte básico de resultados'], wide: true, note: '* La inversión destinada a pauta publicitaria se paga directamente a Meta y no está incluida en la mensualidad.' },
    ],
    ctaText: 'Una solución integral para construir presencia digital profesional, contar tu historia y llegar a las personas correctas.',
    cta: 'Quiero Brand Starter',
    badges: [
      { icon: 'verified', text: 'Sin inversión en publicidad incluida' },
      { icon: 'support_agent', text: 'Asesoría gratuita antes de contratar' },
      { icon: 'receipt_long', text: 'Factura fiscal incluida' },
    ],
  },

  faq: {
    titleHtml: 'Resolviendo <span class="text-accent">Dudas</span>',
    imageAlt: 'Personaje feliz',
    // Estas preguntas son las VISIBLES en la página.
    items: [
      { q: '¿Cuándo veré resultados?', a: 'Las campañas de Ads tienen impacto inmediato, mientras que el SEO es una inversión a medio plazo con resultados exponenciales a partir del tercer mes.' },
      { q: '¿Hay permanencia mínima?', a: 'Cero ataduras. Confiamos tanto en nuestro trabajo que puedes cancelar cuando quieras con un aviso de 30 días.' },
      { q: '¿Trabajan con empresas pequeñas?', a: 'Absolutamente. Nuestro plan Starter está diseñado para negocios en crecimiento que quieren dar el salto digital sin comprometer todo su presupuesto. Escalamos contigo.' },
    ],
  },

  quoter: {
    eyebrowHtml: 'Cotizador <span class="text-accent">Inteligente</span>',
    titleHtml: '¿Qué necesita <span class="text-muted">tu negocio?</span>',
    subtitle: 'Selecciona tu objetivo y arma tu plan al instante.',
    step1: 'Paso 1 — Elige tu objetivo principal',
    step2: 'Paso 2 — Agrega servicios extra',
    emptyHtml: 'Selecciona un objetivo<br>para ver tu propuesta',
    estimate: 'Inversión estimada',
    extrasPrefix: '+ Extras: ',
    cta: 'Solicitar propuesta',
    footnote: 'Respuesta en menos de 2 horas · Sin compromiso',
    // Plantilla del mensaje de WhatsApp. {plan} {price} {extras} se reemplazan en JS
    waTemplate: '¡Hola! Me interesa el plan *{plan}* ({price} MXN){extras}. ¿Podemos agendar una asesoría?',
    waExtras: '\n*Extras añadidos:* ',
    currencyLocale: 'es-MX',
    goals: [
      { id: 'presencia', icon: 'storefront', tone: 'blue', title: 'Presencia Profesional', text: 'Generar comunidad con redes sociales activas' },
      { id: 'conversion', icon: 'trending_up', tone: 'lime', title: 'Conversión Constante', text: 'Contenido original (foto/video) y pauta para ventas' },
      { id: 'premium', icon: 'auto_awesome', tone: 'lavender', title: 'Diferenciación Total', text: 'Estrategia omnicanal y producción cinematográfica' },
    ],
    plans: {
      presencia: {
        badge: 'Presencia Profesional', name: 'Gestión de Contenido',
        desc: 'Presencia profesional en redes sociales que genera comunidad y ventas.',
        basePrice: 8500, freq: '/mes + IVA',
        features: ['8 publicaciones mensuales (incluye 2 reels)', 'Manejo orgánico de Facebook e Instagram', 'Configuración y segmentación básica en Meta Ads', 'Copywriting estratégico y línea gráfica'],
        extras: [
          { label: 'TikTok + YouTube Shorts', price: 2500, freq: '/mes' },
          { label: 'Identidad de marca / Branding', price: 6500, freq: ' único' },
          { label: 'Sitio web profesional responsivo', price: 8500, freq: ' único' },
        ],
      },
      conversion: {
        badge: 'Presencia Constante', name: 'Presencia Inteligente',
        desc: 'Perfecto para negocios que quieren mantener presencia constante enfocada en conversión.',
        basePrice: 16500, freq: '/mes + IVA',
        features: ['8 contenidos originales (reels, carrusel, img)', '1 sesión foto/video bimestral + 1 ágil al mes', 'Diseño, copys y segmentación en Meta Ads', 'Google My Business y canal de YouTube'],
        extras: [
          { label: 'Sitio web profesional', price: 8500, freq: ' único' },
          { label: 'Campañas Meta Ads premium', price: 4500, freq: '/mes' },
          { label: 'Google Ads + Search', price: 3500, freq: '/mes' },
        ],
      },
      premium: {
        badge: 'Diferenciación Total', name: 'Estrategia Premium',
        desc: 'Para marcas que buscan diferenciarse con contenido auténtico, profesional y alineado a objetivos.',
        basePrice: 26500, freq: '/mes + IVA',
        features: ['12 contenidos originales (estratégicos para Ads)', 'Manejo orgánico de 3-4 redes (FB, IG, TikTok, YT)', '1 sesión cinematográfica bimestral + 1 ágil', 'Respuesta a reviews y estrategia omnicanal'],
        extras: [
          { label: 'Tienda en línea (E-commerce)', price: 12500, freq: ' único' },
          { label: 'Producción de video/reels extra', price: 3000, freq: '/mes' },
          { label: 'SEO on-page avanzado', price: 4500, freq: ' único' },
        ],
      },
    },
  },

  blogPreview: {
    titleHtml: 'Nuestro <span class="text-accent">Blog</span>',
    subtitle: 'Ideas, estrategias y proyectos que construimos para que tu marca crezca con intención.',
    readMore: 'Leer artículo',
    viewAll: 'Ver todos los artículos',
    minutes: 'min',
  },

  cta: {
    kicker: '¿Listo para crecer?',
    titleHtml: 'Tu competencia no espera.<br>Tú tampoco deberías.',
    subtitle: 'Agenda una llamada gratuita de 30 minutos. Sin compromiso, con una estrategia clara para tu negocio al terminar.',
    primary: 'Agendar llamada gratuita',
    secondary: 'Ver casos de éxito',
  },

  footer: {
    about: 'Empoderando marcas a través de estrategias digitales audaces y diseño centrado en el usuario. Resultados reales, comunicación transparente.',
    company: 'Empresa',
    legal: 'Legal',
    privacy: 'Privacidad',
    terms: 'Términos',
    cookies: 'Cookies',
    rights: 'Todos los derechos reservados.',
    city: 'Tijuana',
    country: 'México',
  },

  notFound: {
    metaTitle: 'Página no encontrada | Define Creative Studio',
    metaDescription: 'La página que buscas no existe o cambió de dirección.',
    kicker: 'Error 404',
    titleHtml: 'Esta página se salió<br>del <span class="text-lime">brief</span>.',
    text: 'La dirección que buscas no existe, cambió de lugar o se escribió mal. Te ayudamos a regresar.',
    home: 'Ir al inicio',
    blog: 'Ver el blog',
    linksTitle: 'O ve directo a:',
    contact: 'Escríbenos por WhatsApp',
  },

  blog: {
    title: 'Blog',
    metaTitle: 'Blog | Define Creative Studio — Marketing Digital, Branding y Estrategia para Negocios',
    metaDescription: 'Artículos sobre Google Ads, Meta Ads, branding, CRM, marketing inmobiliario y wedding branding. Todo lo que tu negocio necesita para crecer con estrategia e intención. Define Creative Studio, Tijuana.',
    keywords: 'blog marketing digital Tijuana, artículos branding, Google Ads para negocios, Meta Ads, agencia marketing digital México, estrategia digital PYME, Define Creative Studio blog, wedding branding, CRM negocios, marketing inmobiliario bilingüe',
    schemaName: 'Blog de Define Creative Studio',
    kicker: 'Define Creative Studio · Blog',
    titleHtml: 'Ideas que mueven <span class="text-lime">negocios</span>',
    intro: 'Estrategia, marketing digital, branding y tecnología. Lo que escribimos aquí es lo que aplicamos todos los días para nuestros clientes.',
    newBadge: 'Nuevo',
    readingTime: 'min de lectura',
    homeCrumb: 'Define Studio',
    faqTitle: 'Preguntas frecuentes',
    back: '← Volver al blog',
    empty: 'Aún no hay artículos.',
    cta: {
      kicker: '¿Quieres estos resultados para tu negocio?',
      titleHtml: 'Lo que escribimos aquí,<br>lo hacemos todos los días.',
      text: 'Desde campañas de Google y Meta Ads hasta branding para bodas. Habla con nuestro equipo y construyamos la estrategia que tu negocio necesita.',
      primary: 'Hablar con el equipo',
      wa: '¡Hola! Leí el blog y me gustaría saber más sobre sus servicios',
      secondary: 'Conocer Define Studio',
    },
  },
};

// Inglés: misma forma exacta que `es` (TypeScript te avisa si falta algo)
const en: typeof es = {
  meta: {
    htmlLang: 'en',
    ogLocale: 'en_US',
    title: 'Define Creative Studio | Branding, Digital Marketing & Photography Agency in Tijuana, Mexico',
    description:
      'Define Creative Studio: branding, art direction, editorial photography, content, web design and paid media agency in Tijuana. 14+ years building coherent, visually powerful and strategically relevant brands.',
    ogTitle: 'Define Creative Studio | Branding, Photography & Digital Marketing in Tijuana',
    ogDescription:
      'We build brands that stand out. Branding, art direction, editorial photography, web design and paid media for ambitious businesses. A creative agency with 14+ years in Tijuana, Mexico.',
    ogImageAlt: 'Define Creative Studio — Branding & Digital Marketing Agency in Tijuana, Mexico',
    keywords:
      'branding agency Tijuana, art direction Tijuana, editorial photography Tijuana, product photography Tijuana, web design Tijuana, paid media Tijuana, Meta Ads, Google Ads, brand identity, creative agency Tijuana, bilingual marketing agency San Diego, Define Creative Studio',
  },

  nav: {
    services: 'Services',
    process: 'Process',
    portfolio: 'Portfolio',
    pricing: 'Plans',
    blog: 'Blog',
    ikari: 'Ikari CRM',
    contact: 'Contact us',
    openMenu: 'Open menu',
    switchLabel: 'Cambiar a español',
    switchShort: 'ES',
    switchFlag: '🇲🇽',
  },

  wa: {
    general: "Hi! I'd like more information about your services",
    starter: "Hi! I'm interested in the Brand Starter package",
  },

  hero: {
    titleHtml:
      'We <span class="text-accent">build</span> brands <br>that stand out and <span class="text-accent">strategies</span> <br>that make them grow.',
    subtitle:
      'Branding, art direction, photography, editorial content, web design and paid media (ADS) to build visually powerful, strategically relevant brands.',
    videoTitle: 'Define Creative Studio — Showreel',
    ctaPrimary: 'Get started',
    ctaSecondary: 'View portfolio',
  },

  services: {
    eyebrowHtml: 'Our <span class="text-accent">Services</span>',
    title: 'Strategies that move the needle',
    items: [
      { icon: 'palette', tone: 'blue', title: 'Graphic Design & Branding', text: 'We build distinctive brands from their core. From strategy and creative concept to visual identity and brand guidelines, we create coherent systems designed to make every brand recognizable, relevant and memorable.' },
      { icon: 'draw', tone: 'lime', title: 'Art Direction', text: 'We define the visual universe behind a brand. Through creative concepts, moodboards, styling, campaign direction and visual storytelling, we turn ideas into images and experiences with a clear identity.' },
      { icon: 'photo_camera', tone: 'lavender', title: 'Product & Brand Photography', text: 'We create intentional, editorial photography fully aligned with each brand’s identity. From product and e-commerce to lifestyle and campaigns, every image is part of a broader visual narrative.' },
      { icon: 'article', tone: 'blue', title: 'Editorial Content', text: 'We create editorial content that goes beyond filling a feed. From creative concepts and storytelling to social campaigns, visual narratives and branded content, every piece is designed to strengthen identity and build meaningful connections with your audience.' },
      { icon: 'campaign', tone: 'lime', title: 'Paid Media (ads)', text: 'We turn solid brands into measurable growth. Through strategic Google and Meta campaigns, we connect brands with the right audiences, drive quality traffic and optimize constantly to improve results.' },
      { icon: 'web', tone: 'lavender', title: 'Web Design', text: 'We design digital experiences where branding, functionality and strategy work together. From landing pages to corporate sites and e-commerce, we build responsive pages designed to connect, communicate and convert.' },
    ],
  },

  story: {
    kicker: 'Our story',
    titleHtml: 'Why does<br><span class="text-lime">Define Creative Studio</span> exist?',
    lead: 'With over 14 years of experience on the Tijuana–San Diego border, we know your brand is more than a logo.',
    tagline: 'Una marca es más que un logo.',
    points: [
      'It’s the way it <strong>looks.</strong>',
      'The way it <strong>speaks.</strong>',
      'The way it <strong>is photographed.</strong>',
      'The <strong>experience</strong> it creates.',
      'And the way it <strong>reaches the right people.</strong>',
    ],
    closingHtml:
      'At <strong>Define Creative Studio</strong> we connect strategy, creative direction and execution to build coherent brands at every touchpoint.',
    imageAlt: 'Define Creative Studio — 14 years of experience in Tijuana and San Diego',
  },

  portfolio: {
    titleHtml: 'Success <span class="text-accent">Stories</span>',
    subtitle: 'Projects that delivered real results for our clients.',
    categories: {
      branding: 'Branding',
      'diseno-grafico': 'Graphic Design',
      web: 'Web',
      fotografia: 'Photography',
      redes: 'Social Media',
      interiores: 'Interiors',
    },
    viewSite: 'View site',
    photoSession: 'Photo session',
    prev: 'Previous',
    next: 'Next',
    close: 'Close',
  },

  process: {
    eyebrowHtml: 'How we <span class="text-accent">Work</span>',
    titleHtml: 'Our process, <span class="text-muted">step by step</span>',
    subtitle: 'From the first meeting to measurable results. No red tape, no endless waiting.',
    steps: [
      { n: '01', tone: 'lime', title: 'Discover', text: 'We understand the brand, its goals, audience and opportunities.' },
      { n: '02', tone: 'dark', title: 'Define', text: 'We build the strategy, concept and creative direction.' },
      { n: '03', tone: 'pink', title: 'Create', text: 'We design, produce and develop every touchpoint.' },
      { n: '04', tone: 'primary', title: 'Launch & Grow', text: 'We launch, measure and evolve the project as the brand grows.' },
    ],
  },

  clients: {
    titleHtml: 'They <span class="text-accent">Trust Us</span>',
    logoAlt: 'Client logo',
  },

  projects: {
    kicker: 'Projects',
    titleHtml: 'Work that <span class="text-lime">speaks</span> for itself.',
    subtitle: 'Strategy, creativity and execution in every project we touch.',
    items: [
      { tag: 'CRM · Technology', title: 'Ikari CRM', text: 'Smart management for clinics and businesses.' },
      { tag: 'Branding · Events', title: 'Pre Save the Date', text: 'Visual identity for weddings with a soul of their own.' },
      { tag: 'Real Estate · Marketing', title: 'Define Real Estate', text: 'Digital advertising for real estate agents in the US.' },
    ],
  },

  pricing: {
    kicker: 'Package',
    titleHtml: 'Everything your brand needs,<br><span class="text-accent">in one package.</span>',
    subtitle: 'No endless contracts. No fine print. Just digital strategy that builds and converts.',
    badge: 'All-in-one package',
    name: 'Brand Starter',
    description: 'For brands that want to launch, relaunch or professionalize their digital presence.',
    priceLabel: 'Monthly investment',
    price: '$12,500',
    priceNote: '+ VAT · MXN/month',
    introHtml:
      'It brings together the essentials to build a stronger, more visible brand: <strong>imagery, storytelling, content, social media, advertising, audience targeting and local presence on Google.</strong>',
    blocks: [
      { icon: 'thumb_up', tone: 'blue', title: 'Instagram + Facebook', textHtml: '<strong>8 monthly posts</strong> — planning, creative direction, design, editing, copywriting and scheduling.', items: ['2 Reels', '2 Carousels', '4 graphic and/or photo posts'], wide: false },
      { icon: 'auto_stories', tone: 'lime', title: 'Stories', textHtml: '<strong>Up to 8–10 monthly stories</strong> to complement your communication and stay consistently present.', items: ['Content from shoots, products and services', 'Promotions and relevant information'], wide: false },
      { icon: 'photo_camera', tone: 'lavender', title: 'Bimonthly Production', textHtml: '<strong>A shoot every 2 months</strong> to build your own content bank: photography, vertical video, creative direction and editing.', items: ['Brand and product photography', 'Vertical video for Reels and Stories'], wide: false },
      { icon: 'location_on', tone: 'lime', title: 'Google Business Profile', textHtml: 'Setup, configuration and upkeep of your listing to strengthen <strong>local visibility on Google and Google Maps.</strong>', items: ['Information and services optimization', 'Monthly content publishing'], wide: false },
      { icon: 'campaign', tone: 'blue', title: 'Meta Ads', textHtml: '<strong>1 monthly campaign on Facebook and Instagram</strong> focused on increasing visibility and reaching new audiences.', items: ['Campaign strategy and objective', 'Audience and interest targeting', 'Up to 2 ad sets', 'Ad copy and content adaptation', 'Ongoing monitoring and optimization', 'Basic results report'], wide: true, note: '* Ad spend is paid directly to Meta and is not included in the monthly fee.' },
    ],
    ctaText: 'An all-in-one solution to build a professional digital presence, tell your story and reach the right people.',
    cta: 'I want Brand Starter',
    badges: [
      { icon: 'verified', text: 'Ad spend not included' },
      { icon: 'support_agent', text: 'Free consultation before you sign' },
      { icon: 'receipt_long', text: 'Tax invoice included' },
    ],
  },

  faq: {
    titleHtml: 'Answering <span class="text-accent">Questions</span>',
    imageAlt: 'Happy character',
    items: [
      { q: 'When will I see results?', a: 'Ad campaigns have an immediate impact, while SEO is a mid-term investment with exponential results from the third month on.' },
      { q: 'Is there a minimum commitment?', a: 'No strings attached. We trust our work so much that you can cancel anytime with 30 days’ notice.' },
      { q: 'Do you work with small businesses?', a: 'Absolutely. Our Starter plan is designed for growing businesses that want to go digital without spending their whole budget. We scale with you.' },
    ],
  },

  quoter: {
    eyebrowHtml: 'Smart <span class="text-accent">Quote</span>',
    titleHtml: 'What does <span class="text-muted">your business need?</span>',
    subtitle: 'Pick your goal and build your plan instantly.',
    step1: 'Step 1 — Choose your main goal',
    step2: 'Step 2 — Add extra services',
    emptyHtml: 'Select a goal<br>to see your proposal',
    estimate: 'Estimated investment',
    extrasPrefix: '+ Extras: ',
    cta: 'Request proposal',
    footnote: 'Reply in under 2 hours · No commitment',
    waTemplate: "Hi! I'm interested in the *{plan}* plan ({price} MXN){extras}. Can we schedule a consultation?",
    waExtras: '\n*Added extras:* ',
    currencyLocale: 'en-US',
    goals: [
      { id: 'presencia', icon: 'storefront', tone: 'blue', title: 'Professional Presence', text: 'Build community with active social media' },
      { id: 'conversion', icon: 'trending_up', tone: 'lime', title: 'Steady Conversion', text: 'Original content (photo/video) and ads for sales' },
      { id: 'premium', icon: 'auto_awesome', tone: 'lavender', title: 'Total Differentiation', text: 'Omnichannel strategy and cinematic production' },
    ],
    plans: {
      presencia: {
        badge: 'Professional Presence', name: 'Content Management',
        desc: 'A professional social media presence that builds community and sales.',
        basePrice: 8500, freq: '/month + VAT',
        features: ['8 monthly posts (includes 2 reels)', 'Organic management of Facebook and Instagram', 'Basic Meta Ads setup and targeting', 'Strategic copywriting and visual style'],
        extras: [
          { label: 'TikTok + YouTube Shorts', price: 2500, freq: '/month' },
          { label: 'Brand identity / Branding', price: 6500, freq: ' one-time' },
          { label: 'Professional responsive website', price: 8500, freq: ' one-time' },
        ],
      },
      conversion: {
        badge: 'Steady Presence', name: 'Smart Presence',
        desc: 'Ideal for businesses that want a consistent, conversion-focused presence.',
        basePrice: 16500, freq: '/month + VAT',
        features: ['8 original pieces (reels, carousel, images)', '1 bimonthly photo/video shoot + 1 quick shoot per month', 'Design, copy and Meta Ads targeting', 'Google Business Profile and YouTube channel'],
        extras: [
          { label: 'Professional website', price: 8500, freq: ' one-time' },
          { label: 'Premium Meta Ads campaigns', price: 4500, freq: '/month' },
          { label: 'Google Ads + Search', price: 3500, freq: '/month' },
        ],
      },
      premium: {
        badge: 'Total Differentiation', name: 'Premium Strategy',
        desc: 'For brands that want to stand out with authentic, professional, goal-driven content.',
        basePrice: 26500, freq: '/month + VAT',
        features: ['12 original pieces (strategic for Ads)', 'Organic management of 3–4 networks (FB, IG, TikTok, YT)', '1 bimonthly cinematic shoot + 1 quick shoot', 'Review responses and omnichannel strategy'],
        extras: [
          { label: 'Online store (E-commerce)', price: 12500, freq: ' one-time' },
          { label: 'Extra video/reels production', price: 3000, freq: '/month' },
          { label: 'Advanced on-page SEO', price: 4500, freq: ' one-time' },
        ],
      },
    },
  },

  blogPreview: {
    titleHtml: 'Our <span class="text-accent">Blog</span>',
    subtitle: 'Ideas, strategies and projects we build so your brand grows with intention.',
    readMore: 'Read article',
    viewAll: 'View all articles',
    minutes: 'min',
  },

  cta: {
    kicker: 'Ready to grow?',
    titleHtml: 'Your competition isn’t waiting.<br>Neither should you.',
    subtitle: 'Book a free 30-minute call. No commitment, and you’ll leave with a clear strategy for your business.',
    primary: 'Book a free call',
    secondary: 'View success stories',
  },

  footer: {
    about: 'Empowering brands through bold digital strategy and user-centered design. Real results, transparent communication.',
    company: 'Company',
    legal: 'Legal',
    privacy: 'Privacy',
    terms: 'Terms',
    cookies: 'Cookies',
    rights: 'All rights reserved.',
    city: 'Tijuana',
    country: 'Mexico',
  },

  notFound: {
    metaTitle: 'Page not found | Define Creative Studio',
    metaDescription: "The page you're looking for doesn't exist or has moved.",
    kicker: 'Error 404',
    titleHtml: 'This page went<br>off <span class="text-lime">brief</span>.',
    text: "The address you're looking for doesn't exist, has moved or was mistyped. Let us help you get back.",
    home: 'Go home',
    blog: 'Visit the blog',
    linksTitle: 'Or jump straight to:',
    contact: 'Message us on WhatsApp',
  },

  blog: {
    title: 'Blog',
    metaTitle: 'Blog | Define Creative Studio — Digital Marketing, Branding & Business Strategy',
    metaDescription: 'Articles on Google Ads, Meta Ads, branding, CRM, bilingual real estate marketing and wedding branding. Everything your business needs to grow with strategy and intention. Define Creative Studio, Tijuana.',
    keywords: 'digital marketing blog, branding articles, Google Ads for business, Meta Ads, digital marketing agency Mexico, SMB digital strategy, Define Creative Studio blog, wedding branding, business CRM, bilingual real estate marketing',
    schemaName: 'Define Creative Studio Blog',
    kicker: 'Define Creative Studio · Blog',
    titleHtml: 'Ideas that move <span class="text-lime">businesses</span>',
    intro: 'Strategy, digital marketing, branding and technology. What we write here is what we apply every day for our clients.',
    newBadge: 'New',
    readingTime: 'min read',
    homeCrumb: 'Define Studio',
    faqTitle: 'Frequently asked questions',
    back: '← Back to blog',
    empty: 'No articles yet.',
    cta: {
      kicker: 'Want these results for your business?',
      titleHtml: 'What we write about here,<br>we do every day.',
      text: 'From Google and Meta Ads campaigns to wedding branding. Talk to our team and let’s build the strategy your business needs.',
      primary: 'Talk to the team',
      wa: "Hi! I read your blog and I'd like to know more about your services",
      secondary: 'About Define Studio',
    },
  },
};

export const ui = { es, en } as const;
export type UI = typeof es;
