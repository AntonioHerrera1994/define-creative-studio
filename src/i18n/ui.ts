

export const languages = { es: 'Español', en: 'English' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'es';

const es = {
  meta: {
    htmlLang: 'es',
    ogLocale: 'es_MX',
    title: 'Estudio Creativo en San Diego | Branding y Fotografía | Define',
    description:
      'Define Creative Studio: estudio creativo en San Diego especializado en branding, dirección de arte, fotografía de producto, contenido editorial y diseño web. Atendemos California y Tijuana. Más de 14 años construyendo marcas coherentes y visualmente poderosas.',
    ogTitle: 'Define Creative Studio | Branding, Fotografía y Diseño Web en San Diego',
    ogDescription:
      'Construimos marcas que destacan. Branding, dirección de arte, fotografía editorial, diseño web y paid media para negocios con ambición. Estudio creativo con 14+ años entre San Diego y Tijuana.',
    ogImageAlt: 'Define Creative Studio — Estudio de Branding y Fotografía en San Diego, California',
    // keywords eliminado (Google lo ignora desde 2009)
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
      'Estudio creativo de <span class="text-accent">branding</span>, fotografía y marketing <br>bilingüe en <span class="text-accent">San Diego</span>.',
    subtitle:
      'Construimos marcas que destacan y estrategias que las hacen crecer: identidad de marca, fotografía de producto, dirección de arte, contenido editorial, páginas web, anuncios en Meta y Google, y CRM con GoHighLevel. En español e inglés.',
    videoTitle: 'Define Creative Studio — Showreel',
    ctaPrimary: 'Cotiza por WhatsApp',
    ctaSecondary: 'Ver portafolio',
  },

  services: {
    eyebrowHtml: 'Nuestros <span class="text-accent">Servicios</span> creativos',
    title: 'Branding, fotografía, dirección de arte y web para marcas que quieren destacar',
    more: 'Conocer más',
    items: [
      { icon: 'palette', tone: 'blue', title: 'Branding e Identidad Visual', text: 'Agencia de branding en San Diego. Construimos marcas distintivas desde su esencia: estrategia, concepto creativo, identidad visual y lineamientos de marca. Creamos sistemas coherentes que hacen que cada marca sea reconocible, relevante y memorable.' },
      { icon: 'draw', tone: 'lime', title: 'Dirección de Arte', text: 'Dirección de arte para marcas en San Diego. Definimos el universo visual detrás de una marca: conceptos creativos, moodboards, styling, dirección de campañas y narrativa visual. Transformamos ideas en imágenes y experiencias con identidad clara.' },
      { icon: 'photo_camera', tone: 'lavender', title: 'Fotografía de Producto y Marca', text: 'Fotografía de producto en San Diego. Creamos fotografía intencional, editorial y alineada con la identidad de cada marca: producto, e-commerce, lifestyle y campañas. Cada imagen es parte de una narrativa visual más amplia.' },
      { icon: 'article', tone: 'blue', title: 'Contenido Editorial', text: 'Contenido editorial para marcas. Creamos piezas que van más allá de llenar un feed: conceptos creativos, storytelling, campañas sociales, narrativas visuales y contenido de marca diseñado para fortalecer la identidad y conectar con la audiencia.' },
      { icon: 'campaign', tone: 'lime', title: 'Paid Media (Meta y Google Ads)', text: 'Publicidad en Meta y Google para negocios. Convertimos marcas sólidas en crecimiento medible: campañas estratégicas, audiencias correctas, tráfico de calidad y optimización constante para mejorar resultados.' },
      { icon: 'web', tone: 'lavender', title: 'Diseño Web', text: 'Páginas web en San Diego. Creamos experiencias digitales donde branding, funcionalidad y estrategia trabajan juntas: landing pages, sitios corporativos y e-commerce responsivos diseñados para conectar, comunicar y convertir.' },
      { icon: 'settings', tone: 'blue', title: 'CRM y Automatización (GoHighLevel)', text: 'GoHighLevel en San Diego. Implementamos y administramos tu CRM para que tu negocio dé seguimiento automático a cada prospecto: pipelines, WhatsApp, email marketing y reportes. Conectamos tu marca con ventas reales.' },
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
      'En <strong>Define Creative Studio</strong> conectamos <strong>branding</strong>, <strong>dirección de arte</strong>, <strong>fotografía</strong> y ejecución para construir marcas coherentes en cada punto de contacto.',
    imageAlt: 'Estudio creativo Define — branding y fotografía de producto en Tijuana y San Diego',
  },

  portfolio: {
    titleHtml: 'Casos de <span class="text-accent">Éxito</span>',
    subtitle: 'Proyectos de branding, fotografía y diseño web que generaron resultados reales para nuestros clientes.',
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
    subtitle: 'De la primera reunión a resultados medibles. Branding, fotografía y diseño web sin burocracia, sin esperas eternas.',
    steps: [
      { n: '01', tone: 'lime', title: 'Discover', text: 'Entendemos la marca, sus objetivos, audiencia y oportunidades.' },
      { n: '02', tone: 'dark', title: 'Define', text: 'Construimos la estrategia, concepto y dirección creativa.' },
      { n: '03', tone: 'pink', title: 'Create', text: 'Diseñamos, producimos y desarrollamos cada punto de contacto: identidad visual, fotografía, contenido editorial y web.' },
      { n: '04', tone: 'primary', title: 'Launch & Grow', text: 'Lanzamos, medimos y evolucionamos el proyecto conforme la marca crece.' },
    ],
  },

  clients: {
    titleHtml: 'Confían en <span class="text-accent">Nosotros</span>',
    logoAlt: 'Cliente de Define Creative Studio — branding y fotografía',
  },

  projects: {
    kicker: 'Proyectos',
    titleHtml: 'Trabajo que <span class="text-lime">habla</span> por sí solo.',
    subtitle: 'Estrategia, creatividad y ejecución en cada proyecto de branding, fotografía y web.',
    items: [
      { tag: 'Branding · Tecnología', title: 'Ikari CRM', text: 'Identidad visual y comunicación para una plataforma de gestión inteligente para clínicas y negocios.' },
      { tag: 'Branding · Eventos', title: 'Pre Save the Date', text: 'Identidad visual para bodas con alma propia.' },
      { tag: 'Real Estate · Marketing', title: 'Define Real Estate', text: 'Publicidad digital para asesores inmobiliarios en EE.UU.' },
    ],
  },

  pricing: {
    kicker: 'Paquete',
    titleHtml: 'Todo lo que tu marca necesita,<br><span class="text-accent">en un solo paquete.</span>',
    subtitle: 'Sin contratos eternos. Sin letra chica. Solo branding, contenido y estrategia digital que construye y convierte.',
    badge: 'Paquete integral',
    name: 'Brand Starter',
    description: 'Para marcas que quieren comenzar, reactivar o profesionalizar su branding y presencia digital.',
    priceLabel: 'Inversión mensual',
    price: '$12,500',
    priceNote: '+ IVA · MXN/mes',
    introHtml:
      'Reúne los elementos esenciales para construir una marca más sólida y visible: <strong>identidad visual, storytelling, fotografía, contenido, redes sociales, publicidad, segmentación de audiencias y presencia local en Google.</strong>',
    blocks: [
      { icon: 'thumb_up', tone: 'blue', title: 'Instagram + Facebook', textHtml: '<strong>8 publicaciones mensuales</strong> — planeación, dirección creativa, diseño, edición, copywriting y programación.', items: ['2 Reels', '2 Carruseles', '4 publicaciones gráficas y/o fotográficas'], wide: false },
      { icon: 'auto_stories', tone: 'lime', title: 'Historias', textHtml: '<strong>Hasta 8–10 historias mensuales</strong> para complementar la comunicación y mantener una presencia constante.', items: ['Contenido de sesiones, productos y servicios', 'Promociones e información relevante'], wide: false },
      { icon: 'photo_camera', tone: 'lavender', title: 'Producción Bimestral', textHtml: '<strong>Sesión cada 2 meses</strong> para generar banco de contenido propio: fotografía de producto, video vertical, dirección creativa y edición.', items: ['Fotografía de marca y producto', 'Video vertical para Reels e Historias'], wide: false },
      { icon: 'location_on', tone: 'lime', title: 'Google Business Profile', textHtml: 'Apertura, configuración y mantenimiento de la ficha para fortalecer la <strong>visibilidad local en Google y Google Maps.</strong>', items: ['Optimización de información y servicios', 'Publicación del contenido mensual'], wide: false },
      { icon: 'campaign', tone: 'blue', title: 'Meta Ads', textHtml: '<strong>1 campaña mensual en Facebook e Instagram</strong> enfocada en aumentar visibilidad y llegar a nuevas audiencias.', items: ['Estrategia y objetivo de campaña', 'Segmentación de audiencias e intereses', 'Hasta 2 conjuntos de anuncios', 'Copy publicitario y adaptación de contenido', 'Monitoreo y optimización continua', 'Reporte básico de resultados'], wide: true, note: '* La inversión destinada a pauta publicitaria se paga directamente a Meta y no está incluida en la mensualidad.' },
    ],
    ctaText: 'Una solución integral para construir presencia digital profesional, contar tu historia de marca y llegar a las personas correctas.',
    cta: 'Quiero Brand Starter',
    badges: [
      { icon: 'verified', text: 'Sin inversión en publicidad incluida' },
      { icon: 'support_agent', text: 'Asesoría gratuita antes de contratar' },
      { icon: 'receipt_long', text: 'Factura fiscal incluida' },
    ],
  },

  faq: {
    titleHtml: 'Resolviendo <span class="text-accent">Dudas</span>',
    imageAlt: 'Equipo de Define Creative Studio — estudio de branding y fotografía',
    items: [
      { q: '¿Cuánto cuesta un branding en San Diego?', a: 'Depende del alcance: no es lo mismo una identidad visual básica que un sistema de marca completo con dirección de arte, fotografía y contenido editorial. Escríbenos y te damos una propuesta clara en menos de 2 horas, sin compromiso.' },
      { q: '¿Atienden clientes en todo California?', a: 'Sí. Nuestra base está en San Diego y atendemos marcas en todo California, desde Chula Vista y el condado de San Diego hasta Los Ángeles y Orange County. Podemos trabajar en remoto o reunirnos en persona si tu marca está en la región.' },
      { q: '¿También trabajan con clientes en Tijuana?', a: 'Sí. Por nuestra cercanía y más de 14 años de experiencia en la frontera, trabajamos con clientes específicos en Tijuana. Si tu marca está del lado mexicano, podemos coordinar sesiones de fotografía, producción y reuniones en persona sin problema.' },
      { q: '¿Cuándo veré resultados?', a: 'Las campañas de Ads tienen impacto inmediato, mientras que el SEO es una inversión a medio plazo con resultados exponenciales a partir del tercer mes.' },
      { q: '¿Hay permanencia mínima?', a: 'Cero ataduras. Confiamos tanto en nuestro trabajo que puedes cancelar cuando quieras con un aviso de 30 días.' },
      { q: '¿Trabajan con empresas pequeñas?', a: 'Absolutamente. Nuestro plan Starter está diseñado para negocios en crecimiento que quieren dar el salto digital sin comprometer todo su presupuesto. Escalamos contigo.' },
      { q: '¿Ofrecen servicios bilingües en español e inglés?', a: 'Sí. Todo nuestro trabajo —branding, fotografía, contenido y web— se produce en español e inglés, para que tu marca conecte con la audiencia de California y de México sin perder coherencia.' },
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
    subtitle: 'Agenda una llamada gratuita de 30 minutos. Sin compromiso, con una estrategia clara de branding, fotografía o web para tu negocio al terminar.',
    primary: 'Agendar llamada gratuita',
    secondary: 'Ver casos de éxito',
  },

  footer: {
    about: 'Estudio creativo de branding, fotografía y diseño web para marcas que quieren destacar. Estrategia, dirección de arte y ejecución con resultados reales y comunicación transparente.',
    company: 'Empresa',
    legal: 'Legal',
    services: 'Servicios',
    webPage: 'Diseño web',
    privacy: 'Privacidad',
    terms: 'Términos',
    cookies: 'Cookies',
    rights: 'Todos los derechos reservados.',
    city: 'San Diego',
    country: 'California, EE.UU. · Tijuana, México',
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
    metaTitle: 'Blog | Branding, Fotografía y Web en San Diego | Define Studio',
    metaDescription: 'Artículos sobre branding, fotografía de producto, dirección de arte, diseño web y publicidad en Meta y Google para marcas en California y Tijuana. Define Creative Studio.',
    // keywords eliminado (Google lo ignora)
    schemaName: 'Blog de Define Creative Studio',
    kicker: 'Define Creative Studio · Blog',
    titleHtml: 'Ideas que mueven <span class="text-lime">negocios</span>',
    intro: 'Branding, fotografía, dirección de arte y diseño web. Lo que escribimos aquí es lo que aplicamos todos los días para nuestros clientes.',
    newBadge: 'Nuevo',
    readingTime: 'min de lectura',
    homeCrumb: 'Define Studio',
    faqTitle: 'Preguntas frecuentes',
    back: '← Volver al blog',
    empty: 'Aún no hay artículos.',
    cta: {
      kicker: '¿Quieres estos resultados para tu negocio?',
      titleHtml: 'Lo que escribimos aquí,<br>lo hacemos todos los días.',
      text: 'Desde branding y fotografía de producto hasta diseño web y campañas en Meta y Google. Habla con nuestro equipo y construyamos la estrategia que tu marca necesita.',
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
    title: 'Creative Studio in San Diego | Branding & Photography | Define',
    description:
      'Define Creative Studio: a creative studio in San Diego specializing in branding, art direction, product photography, editorial content and web design. Serving California and Tijuana. 14+ years building coherent, visually powerful brands.',
    ogTitle: 'Define Creative Studio | Branding, Photography & Web Design in San Diego',
    ogDescription:
      'We build brands that stand out. Branding, art direction, editorial photography, web design and paid media for ambitious businesses. A creative studio with 14+ years between San Diego and Tijuana.',
    ogImageAlt: 'Define Creative Studio — Branding and Photography Studio in San Diego, California',
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
      'Creative <span class="text-accent">branding</span>, photography & bilingual marketing <br>studio in <span class="text-accent">San Diego</span>.',
    subtitle:
      'We build brands that stand out and strategies that make them grow: brand identity, product photography, art direction, editorial content, web design, Meta & Google ads, and GoHighLevel CRM. In English and Spanish.',
    videoTitle: 'Define Creative Studio — Showreel',
    ctaPrimary: 'Get a Quote',
    ctaSecondary: 'View Portfolio',
  },

  services: {
    eyebrowHtml: 'Our creative <span class="text-accent">Services</span>',
    title: 'Branding, photography, art direction & web for brands that want to stand out',
    more: 'Learn more',
    items: [
      { icon: 'palette', tone: 'blue', title: 'Branding & Visual Identity', text: 'Branding agency in San Diego. We build distinctive brands from their essence: strategy, creative concept, visual identity, and brand guidelines. We create coherent systems that make every brand recognizable, relevant, and memorable.' },
      { icon: 'draw', tone: 'lime', title: 'Art Direction', text: 'Art direction for brands in San Diego. We define the visual universe behind a brand: creative concepts, moodboards, styling, campaign direction, and visual narrative. We transform ideas into images and experiences with a clear identity.' },
      { icon: 'photo_camera', tone: 'lavender', title: 'Product & Brand Photography', text: 'Product photography in San Diego. We create intentional, editorial photography aligned with each brand\'s identity: product, e-commerce, lifestyle, and campaigns. Every image is part of a broader visual narrative.' },
      { icon: 'article', tone: 'blue', title: 'Editorial Content', text: 'Editorial content for brands. We create pieces that go beyond filling a feed: creative concepts, storytelling, social campaigns, visual narratives, and brand content designed to strengthen identity and connect with your audience.' },
      { icon: 'campaign', tone: 'lime', title: 'Paid Media (Meta & Google Ads)', text: 'Meta and Google advertising for businesses. We turn solid brands into measurable growth: strategic campaigns, the right audiences, quality traffic, and constant optimization to improve results.' },
      { icon: 'web', tone: 'lavender', title: 'Web Design', text: 'Websites in San Diego. We create digital experiences where branding, functionality, and strategy work together: landing pages, corporate sites, and responsive e-commerce designed to connect, communicate, and convert.' },
      { icon: 'settings', tone: 'blue', title: 'CRM & Automation (GoHighLevel)', text: 'GoHighLevel in San Diego. We implement and manage your CRM so your business automatically follows up with every prospect: pipelines, WhatsApp, email marketing, and reporting. We connect your brand to real sales.' },
    ],
  },

  story: {
    kicker: 'Our story',
    titleHtml: 'Why does<br><span class="text-lime">Define Creative Studio</span> exist?',
    lead: 'With over 14 years of experience across the Tijuana-San Diego border, we know your brand is more than a logo.',
    tagline: 'A brand is more than a logo.',
    points: [
      'It\'s the way it <strong>looks.</strong>',
      'The way it <strong>speaks.</strong>',
      'The way it\'s <strong>photographed.</strong>',
      'The <strong>experience</strong> it creates.',
      'And the way it <strong>reaches the right people.</strong>',
    ],
    closingHtml:
      'At <strong>Define Creative Studio</strong> we connect <strong>branding</strong>, <strong>art direction</strong>, <strong>photography</strong>, and execution to build coherent brands at every touchpoint.',
    imageAlt: 'Define creative studio — branding and product photography in Tijuana and San Diego',
  },

  portfolio: {
    titleHtml: 'Case <span class="text-accent">Studies</span>',
    subtitle: 'Branding, photography, and web design projects that delivered real results for our clients.',
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
    subtitle: 'From the first meeting to measurable results. Branding, photography, and web design without bureaucracy, without endless waits.',
    steps: [
      { n: '01', tone: 'lime', title: 'Discover', text: 'We understand the brand, its goals, audience, and opportunities.' },
      { n: '02', tone: 'dark', title: 'Define', text: 'We build the strategy, concept, and creative direction.' },
      { n: '03', tone: 'pink', title: 'Create', text: 'We design, produce, and develop every touchpoint: visual identity, photography, editorial content, and web.' },
      { n: '04', tone: 'primary', title: 'Launch & Grow', text: 'We launch, measure, and evolve the project as the brand grows.' },
    ],
  },

  clients: {
    titleHtml: 'They <span class="text-accent">Trust Us</span>',
    logoAlt: 'Define Creative Studio client — branding and photography',
  },

  projects: {
    kicker: 'Projects',
    titleHtml: 'Work that <span class="text-lime">speaks</span> for itself.',
    subtitle: 'Strategy, creativity, and execution in every branding, photography, and web project.',
    items: [
      { tag: 'Branding · Technology', title: 'Ikari CRM', text: 'Visual identity and communication for a smart management platform for clinics and businesses.' },
      { tag: 'Branding · Events', title: 'Pre Save the Date', text: 'Visual identity for weddings with a soul of their own.' },
      { tag: 'Real Estate · Marketing', title: 'Define Real Estate', text: 'Digital advertising for real estate agents in the U.S.' },
    ],
  },

  pricing: {
    kicker: 'Package',
    titleHtml: 'Everything your brand needs,<br><span class="text-accent">in one package.</span>',
    subtitle: 'No endless contracts. No fine print. Just branding, content, and digital strategy that builds and converts.',
    badge: 'All-in-one package',
    name: 'Brand Starter',
    description: 'For brands that want to start, reactivate, or professionalize their branding and digital presence.',
    priceLabel: 'Monthly investment',
    price: '$12,500',
    priceNote: '+ VAT · MXN/month',
    introHtml:
      'It brings together the essential elements to build a stronger, more visible brand: <strong>visual identity, storytelling, photography, content, social media, advertising, audience segmentation, and local presence on Google.</strong>',
    blocks: [
      { icon: 'thumb_up', tone: 'blue', title: 'Instagram + Facebook', textHtml: '<strong>8 monthly posts</strong> — planning, creative direction, design, editing, copywriting, and scheduling.', items: ['2 Reels', '2 Carousels', '4 graphic and/or photographic posts'], wide: false },
      { icon: 'auto_stories', tone: 'lime', title: 'Stories', textHtml: '<strong>Up to 8–10 monthly stories</strong> to complement communication and maintain a constant presence.', items: ['Content from sessions, products, and services', 'Promotions and relevant information'], wide: false },
      { icon: 'photo_camera', tone: 'lavender', title: 'Bimonthly Production', textHtml: '<strong>A session every 2 months</strong> to build your own content bank: product photography, vertical video, creative direction, and editing.', items: ['Brand and product photography', 'Vertical video for Reels and Stories'], wide: false },
      { icon: 'location_on', tone: 'lime', title: 'Google Business Profile', textHtml: 'Setup, configuration, and maintenance of your profile to strengthen <strong>local visibility on Google and Google Maps.</strong>', items: ['Optimization of information and services', 'Monthly content publishing'], wide: false },
      { icon: 'campaign', tone: 'blue', title: 'Meta Ads', textHtml: '<strong>1 monthly campaign on Facebook and Instagram</strong> focused on increasing visibility and reaching new audiences.', items: ['Campaign strategy and objective', 'Audience and interest segmentation', 'Up to 2 ad sets', 'Ad copy and content adaptation', 'Continuous monitoring and optimization', 'Basic results report'], wide: true, note: '* Advertising spend is paid directly to Meta and is not included in the monthly fee.' },
    ],
    ctaText: 'An all-in-one solution to build a professional digital presence, tell your brand story, and reach the right people.',
    cta: 'I want Brand Starter',
    badges: [
      { icon: 'verified', text: 'No ad spend included' },
      { icon: 'support_agent', text: 'Free consultation before hiring' },
      { icon: 'receipt_long', text: 'Tax invoice included' },
    ],
  },

  faq: {
    titleHtml: 'Answering <span class="text-accent">Questions</span>',
    imageAlt: 'Define Creative Studio team — branding and photography studio',
    items: [
      { q: 'How much does branding cost in San Diego?', a: 'It depends on scope: a basic visual identity is not the same as a complete brand system with art direction, photography, and editorial content. Reach out and we\'ll send you a clear proposal in under 2 hours, no strings attached.' },
      { q: 'Do you work with clients across California?', a: 'Yes. We are based in San Diego and serve brands across California, from Chula Vista and San Diego County to Los Angeles and Orange County. We can work remotely or meet in person if your brand is in the region.' },
      { q: 'Do you also work with clients in Tijuana?', a: 'Yes. Thanks to our proximity and over 14 years of experience across the border, we work with select clients in Tijuana. If your brand is on the Mexican side, we can coordinate photo sessions, production, and in-person meetings without any issue.' },
      { q: 'When will I see results?', a: 'Ad campaigns have immediate impact, while SEO is a mid-term investment with exponential results starting in the third month.' },
      { q: 'Is there a minimum commitment?', a: 'Zero strings. We trust our work so much that you can cancel anytime with 30 days\' notice.' },
      { q: 'Do you work with small businesses?', a: 'Absolutely. Our Starter plan is designed for growing businesses that want to make the digital leap without committing their entire budget. We scale with you.' },
      { q: 'Do you offer bilingual services in English and Spanish?', a: 'Yes. All our work —branding, photography, content, and web— is produced in English and Spanish, so your brand connects with audiences in California and Mexico without losing coherence.' },
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
    titleHtml: 'Your competition isn\'t waiting.<br>Neither should you.',
    subtitle: 'Book a free 30-minute call. No commitment, and you\'ll leave with a clear branding, photography, or web strategy for your business.',
    primary: 'Book a free call',
    secondary: 'View success stories',
  },

  footer: {
    about: 'Creative studio for branding, photography, and web design for brands that want to stand out. Strategy, art direction, and execution with real results and transparent communication.',
    company: 'Company',
    legal: 'Legal',
    services: 'Services',
    webPage: 'Web design',
    privacy: 'Privacy',
    terms: 'Terms',
    cookies: 'Cookies',
    rights: 'All rights reserved.',
    city: 'San Diego',
    country: 'California, USA · Tijuana, Mexico',
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
    metaTitle: 'Blog | Branding, Photography & Web in San Diego | Define Studio',
    metaDescription: 'Articles on branding, product photography, art direction, web design, and Meta and Google advertising for brands in California and Tijuana. Define Creative Studio.',
    schemaName: 'Define Creative Studio Blog',
    kicker: 'Define Creative Studio · Blog',
    titleHtml: 'Ideas that move <span class="text-lime">businesses</span>',
    intro: 'Branding, photography, art direction, and web design. What we write here is what we apply every day for our clients.',
    newBadge: 'New',
    readingTime: 'min read',
    homeCrumb: 'Define Studio',
    faqTitle: 'Frequently asked questions',
    back: '← Back to blog',
    empty: 'No articles yet.',
    cta: {
      kicker: 'Want these results for your business?',
      titleHtml: 'What we write about here,<br>we do every day.',
      text: 'From branding and product photography to web design and Meta and Google campaigns. Talk to our team and let\'s build the strategy your brand needs.',
      primary: 'Talk to the team',
      wa: "Hi! I read your blog and I'd like to know more about your services",
      secondary: 'About Define Studio',
    },
  },
};

export const ui = { es, en } as const;
export type UI = typeof es;
