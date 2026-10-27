
import type { ServicePage } from './types';
import type { Lang } from '../../i18n/ui';
import { UPLOADS } from '../site';

const heroImage = `${UPLOADS}/2026/09/DisenoWeb_DEFINE-02-scaled.webp`;

const en: ServicePage = {
  seo: {
    title: 'Web Design in San Diego | Brand-Driven Sites | Define',
    description:
      'Brand-driven web design in San Diego and California. Custom, bilingual websites that look like your brand, load fast, rank on Google and turn visitors into clients. Landing pages from $990.',
   keywords:'web design san diego, brand-driven web design, bilingual web design san diego, small business web design san diego, web design chula vista, web design pricing san diego, website design san diego',
    ogImageAlt: 'Brand-driven web design in San Diego — Define Creative Studio',
    serviceType: 'Brand-driven website design and development',
    breadcrumb: 'Web Design',
  },

  hero: {
    kicker: 'Brand-driven web design · San Diego',
    titleHtml: '<span class="text-lime">Brand-driven</span> web design in San Diego',
    intro:
      'We design websites that look, sound and sell like your brand. Strategy, custom design and clean code — in English and Spanish — so your site builds trust from the first scroll and turns visitors into clients across California and Tijuana.',
    ctaPrimary: 'Get a website quote',
    ctaSecondary: 'See packages',
    wa: "Hi! I'm interested in a website for my business",
    trust: ['Built around your brand', 'Bilingual EN / ES', 'SEO built into the code'],
    image: heroImage,
    imageAlt: 'Brand-driven website designed by Define Creative Studio',
    floatTop: { value: '95+', label: 'PageSpeed' },
    floatBottom: { value: 'EN · ES', label: 'Bilingual sites' },
  },

  benefits: {
    kicker: 'For small businesses in California and Tijuana',
    titleHtml: '<span class="text-accent">Small business web design</span> that pulls its weight',
    subtitle: "Your website isn't a brochure. It's the salesperson that works 24/7 — so it has to look like your brand and be built to convert.",
    items: [
      { icon: 'palette', tone: 'blue', title: 'Looks like your brand', text: 'Colors, type, photography and tone carried through every page — no template that looks like everyone else.' },
      { icon: 'travel_explore', tone: 'lime', title: 'Found on Google', text: 'Local SEO built in from day one so clients in San Diego, California and Tijuana find you when they search.' },
      { icon: 'ads_click', tone: 'lavender', title: 'Built to convert', text: 'Clear calls to action, booking, WhatsApp and forms placed where visitors are ready to act.' },
      { icon: 'translate', tone: 'blue', title: 'Speaks both languages', text: 'Reach the whole California market with a site that works in English and Spanish.' },
    ],
  },

  seoText: {
    kicker: 'Local web design',
    titleHtml: 'Web design in San Diego, California <span class="text-accent">and across the border</span>',
    paragraphsHtml: [
      'At <strong>Define Creative Studio</strong> we have spent more than 14 years building brands between San Diego and Tijuana. That’s why our <strong>web design</strong> starts with your brand, not a template: we define what the site must achieve, who it speaks to and how it should feel before we design a single pixel.',
      'We work with restaurants, clinics, real estate agents, salons and service businesses in <strong>San Diego</strong>, Chula Vista, National City, Otay Mesa and the rest of San Diego County, as well as in <strong>Los Angeles</strong>, Orange County and the rest of California. We also work with select clients in Tijuana thanks to our proximity and cross-border experience. Want automatic follow-up on every lead? We can also <a href="/en/gohighlevel-san-diego/">connect your forms to a GoHighLevel CRM</a>.',
      'Every site is built with <strong>SEO baked into the code</strong>: heading structure, metadata, structured data, sitemap, speed and a flawless mobile version. Your site doesn’t just look like your brand — it shows up when local clients search.',
    ],
    areasTitle: 'We design websites for businesses in',
    areas: ['San Diego', 'Chula Vista', 'National City', 'Otay Mesa', 'Los Angeles', 'Orange County', 'Tijuana'],
  },

  highlight: {
    visual: 'bilingual',
    kicker: 'Bilingual design',
    titleHtml: '<span class="text-accent">Bilingual website design</span> in California',
    text: 'More than a third of San Diego County (37%) speaks a language other than English at home. A bilingual website lets you serve the whole market — and it has to be done right: written copy, not machine translation, with SEO for each language.',
    points: [
      'Copy adapted by humans in English and Spanish, not auto-translated',
      'Language switch that keeps visitors on the same page',
      'Separate SEO per language (hreflang, titles, descriptions)',
      'Forms, buttons and WhatsApp messages in both languages',
      'One brand voice that feels natural in each language',
    ],
    bilingual: {
      url: 'yourbusiness.com',
      en: { kicker: 'Chula Vista Dental', title: 'A brighter smile starts here.', cta: 'Book your visit' },
      es: { kicker: 'Chula Vista Dental', title: 'Una sonrisa más brillante empieza aquí.', cta: 'Agenda tu cita' },
    },
  },

  includes: {
    kicker: 'Included in every package',
    titleHtml: 'Everything your website <span class="text-accent">needs to perform</span>',
    items: [
      { icon: 'brush', title: 'Custom brand design', text: 'An original design built from your brand identity.' },
      { icon: 'devices', title: 'Fully responsive', text: 'Looks and works perfectly on phone, tablet and desktop.' },
      { icon: 'search', title: 'Local SEO', text: 'Metadata, headings, Schema, sitemap and Google Business Profile.' },
      { icon: 'bolt', title: 'Lightning fast', text: 'Optimized for Core Web Vitals and PageSpeed.' },
      { icon: 'chat', title: 'WhatsApp & forms', text: 'Direct contact buttons and forms sent to your inbox.' },
      { icon: 'monitoring', title: 'Analytics', text: 'Google Analytics 4 and Meta Pixel ready for your campaigns.' },
      { icon: 'lock', title: 'SSL certificate', text: 'Secure https connection for you and your clients.' },
      { icon: 'school', title: 'Training', text: 'We teach you to update your content without depending on anyone.' },
    ],
  },

  packages: {
    kicker: 'Packages',
    titleHtml: 'Web design <span class="text-accent">pricing</span> in San Diego',
    subtitle: 'Agency-level, brand-driven design without agency overhead. Clear starting prices, tailored to your business.',
    from: 'From',
    currency: 'USD',
    popular: 'Most popular',
    cta: 'Quote this package',
    items: [
      {
        name: 'Landing Page',
        for: 'For campaigns, launches and businesses that need a focused, conversion-driven presence fast.',
        price: '$990',
        priceValue: 990,
        priceCurrency: 'USD',
        note: 'one-time',
        delivery: 'Delivered in 7–10 business days',
        features: [
          '1 page with up to 6 sections',
          'Custom design based on your brand',
          'Contact form + WhatsApp button',
          'On-page SEO',
          'Google Analytics 4 & Meta Pixel',
          '1 round of revisions',
        ],
        wa: "Hi! I'm interested in the Landing Page package",
      },
      {
        name: 'Brand Website',
        for: 'For businesses that want a complete site that reflects their brand, ranks locally and brings in clients every week.',
        price: '$2,490',
        priceValue: 2490,
        priceCurrency: 'USD',
        note: 'one-time',
        delivery: 'Delivered in 2–4 weeks',
        featured: true,
        features: [
          'Up to 6 pages (Home, About, Services, Contact…)',
          'Brand-driven custom design',
          'Editable blog',
          'Local SEO + structured data',
          'Google Business Profile optimization',
          'Speed optimization (PageSpeed 90+)',
          '2 rounds of revisions',
        ],
        wa: "Hi! I'm interested in the Brand Website package",
      },
      {
        name: 'Online Store',
        for: 'For brands ready to sell online with payments, shipping and inventory under their own identity.',
        price: '$4,900',
        priceValue: 4900,
        priceCurrency: 'USD',
        note: 'one-time',
        delivery: 'Delivered in 4–6 weeks',
        features: [
          'Everything in Brand Website',
          'Catalog of up to 50 products',
          'Card, Apple Pay & Google Pay payments',
          'Shipping, coupons and inventory',
          'Order management dashboard',
          'Store training',
        ],
        wa: "Hi! I'm interested in the Online Store package",
      },
    ],
    footnotes: [
      'Bilingual version (English + Spanish) available on any package from +$590.',
      'Optional monthly care plan (hosting, updates, backups and small edits) from $99/month.',
      'Domain not included; we help you register it under your name.',
    ],
  },

  steps: {
    kicker: 'Process',
    titleHtml: 'How we build your <span class="text-accent">website</span>',
    items: [
      { title: 'Brand & strategy', time: 'Week 1', text: 'We study your brand, clients and goals, and define the site structure and messaging.' },
      { title: 'Design', time: 'Week 1–2', text: 'We present a custom design that reflects your identity so you can review it before we code.' },
      { title: 'Development', time: 'Week 2–3', text: 'We build the site, optimize it for speed and SEO, and test it on every device and language.' },
      { title: 'Launch', time: 'Week 3–4', text: 'We publish, connect your domain, set up analytics and train you to manage it.' },
    ],
  },

  work: {
    kicker: 'Portfolio',
    titleHtml: 'Websites that are <span class="text-accent">already working</span>',
    subtitle: "Some of the brand-driven sites we've designed and developed for our clients.",
    visit: 'Visit site',
  },

  faq: {
    titleHtml: 'Web design in San Diego: <span class="text-accent">frequently asked questions</span>',
    items: [
      { q: 'How much does web design cost in San Diego?', a: 'Agency websites in San Diego typically run $5,000–$15,000. At Define Creative Studio a landing page starts at $990, a brand website of up to 6 pages at $2,490 and an online store at $4,900. You get agency-level, brand-driven design without the overhead, and we send an exact quote after a free call.' },
      { q: 'What does "brand-driven" web design mean?', a: 'It means the site is designed from your brand identity — colors, typography, photography, tone and positioning — instead of starting from a template. The result looks unmistakably like your business and builds trust faster.' },
      { q: 'Do you build bilingual websites?', a: 'Yes. We build English and Spanish versions with copy adapted by humans, a language switch on every page and separate SEO for each language. It’s available on any package from +$590.' },
      { q: 'Do you work with businesses in California and Tijuana?', a: 'Yes. We work with businesses in San Diego, Chula Vista, National City, Otay Mesa and all of San Diego County, as well as Los Angeles, Orange County and the rest of California. We also work with select clients in Tijuana and Baja California. Meetings can be in person or over video call.' },
      { q: 'Can I connect my website to a CRM?', a: 'Yes. We connect your forms and WhatsApp buttons to GoHighLevel, the CRM we use to automate prospect follow-up. That way every contact that comes from your site gets automatic follow-up and no opportunity is lost.' },
      { q: 'How long does it take to build my website?', a: 'A landing page takes 7–10 business days, a brand website 2–4 weeks and an online store 4–6 weeks. Timing also depends on how quickly we receive your copy and images.' },
      { q: 'Can I update the website myself?', a: 'Yes. Every site comes with training so you can edit copy, swap images and publish blog posts. If you prefer not to, the care plan covers small monthly edits.' },
    ],
  },

  cta: {
    kicker: 'Ready for a site that looks like your brand?',
    titleHtml: "Let's talk about your project<br>and we'll send your quote.",
    text: "Tell us about your business. Within 24 hours we'll reply with a clear proposal, timeline and final price.",
    primary: 'Get a quote on WhatsApp',
    secondary: 'View portfolio',
    note: 'No commitment · Free consultation · Bilingual team',
  },
};

const es: ServicePage = {
  seo: {
    title: 'Diseño de Páginas Web en San Diego | Bilingües | Define',
    description:
      'Diseño de páginas web en San Diego y California guiado por tu marca. Sitios bilingües a la medida, rápidos y optimizados para Google, hechos para convertir visitas en clientes. Landing page desde $990 USD.',
   keywords:'diseño web san diego, diseño web guiado por marca, diseño web bilingüe san diego, diseño web para pymes san diego, diseño web chula vista, precios diseño web san diego, diseño de sitios web san diego',
    ogImageAlt: 'Diseño de páginas web en San Diego — Define Creative Studio',
    serviceType: 'Diseño y desarrollo de páginas web guiadas por la marca',
    breadcrumb: 'Diseño web',
  },

  hero: {
    kicker: 'Diseño web guiado por tu marca · San Diego',
    titleHtml: 'Diseño de páginas web en San Diego, <span class="text-lime">guiado por tu marca</span>',
    intro:
      'Diseñamos páginas web que se ven, hablan y venden como tu marca. Estrategia, diseño a la medida y código limpio, en español e inglés, para que tu sitio genere confianza desde el primer scroll y convierta visitas en clientes en California y Tijuana.',
    ctaPrimary: 'Cotizar mi página web',
    ctaSecondary: 'Ver paquetes',
    wa: '¡Hola! Me interesa una página web para mi negocio',
    trust: ['Diseñada desde tu marca', 'Bilingüe ES / EN', 'SEO desde el código'],
    image: heroImage,
    imageAlt: 'Página web diseñada por Define Creative Studio',
    floatTop: { value: '95+', label: 'PageSpeed' },
    floatBottom: { value: 'ES · EN', label: 'Sitios bilingües' },
  },

  benefits: {
    kicker: 'Para PYMES en California y Tijuana',
    titleHtml: '<span class="text-accent">Diseño web para PYMES</span> que sí trabaja',
    subtitle: 'Tu página web no es un folleto: es el vendedor que trabaja 24/7. Por eso tiene que verse como tu marca y estar hecha para convertir.',
    items: [
      { icon: 'palette', tone: 'blue', title: 'Se ve como tu marca', text: 'Colores, tipografía, fotografía y tono en cada página, sin plantillas que se vean como las de todos.' },
      { icon: 'travel_explore', tone: 'lime', title: 'Te encuentran en Google', text: 'SEO local desde el primer día para que clientes en San Diego, California y Tijuana te encuentren al buscar.' },
      { icon: 'ads_click', tone: 'lavender', title: 'Hecha para convertir', text: 'Llamados a la acción claros, citas, WhatsApp y formularios donde el visitante está listo para actuar.' },
      { icon: 'translate', tone: 'blue', title: 'Habla los dos idiomas', text: 'Llega a todo el mercado de California con un sitio que funciona en español e inglés.' },
    ],
  },

  seoText: {
    kicker: 'Diseño web local',
    titleHtml: 'Páginas web en San Diego, California <span class="text-accent">y de los dos lados de la frontera</span>',
    paragraphsHtml: [
      'En <strong>Define Creative Studio</strong> llevamos más de 14 años creando marcas entre San Diego y Tijuana. Por eso nuestro <strong>diseño de páginas web</strong> empieza por tu marca y no por una plantilla: definimos qué tiene que lograr el sitio, a quién le habla y cómo debe sentirse antes de diseñar un solo pixel.',
      'Trabajamos con restaurantes, clínicas, agentes inmobiliarios, salones y negocios de servicios en <strong>San Diego</strong>, Chula Vista, National City, Otay Mesa y todo el condado de San Diego, así como en <strong>Los Ángeles</strong>, Orange County y el resto de California. También atendemos clientes específicos en Tijuana por nuestra cercanía y experiencia en la frontera. ¿Quieres dar seguimiento automático a cada contacto? También <a href="/gohighlevel-san-diego/">conectamos tus formularios a un CRM con GoHighLevel</a>.',
      'Cada sitio se construye con <strong>SEO desde el código</strong>: estructura de encabezados, metadatos, datos estructurados, sitemap, velocidad y versión móvil impecable. Tu página web no solo se ve como tu marca: aparece cuando los clientes locales te buscan.',
    ],
    areasTitle: 'Diseñamos páginas web para negocios en',
    areas: ['San Diego', 'Chula Vista', 'National City', 'Otay Mesa', 'Los Ángeles', 'Orange County', 'Tijuana'],
  },

  highlight: {
    visual: 'bilingual',
    kicker: 'Diseño bilingüe',
    titleHtml: '<span class="text-accent">Páginas web bilingües</span> para el mercado en California',
    text: 'Más de un tercio del condado de San Diego (37%) habla en casa un idioma distinto al inglés. Una página web bilingüe te permite atender a todo el mercado, y tiene que hacerse bien: textos adaptados por personas, no traducción automática, con SEO para cada idioma.',
    points: [
      'Textos adaptados por personas en español e inglés',
      'Cambio de idioma que mantiene al visitante en la misma página',
      'SEO independiente por idioma (hreflang, títulos, descripciones)',
      'Formularios, botones y mensajes de WhatsApp en ambos idiomas',
      'Una sola voz de marca que suena natural en cada idioma',
    ],
    bilingual: {
      url: 'tunegocio.com',
      en: { kicker: 'Chula Vista Dental', title: 'A brighter smile starts here.', cta: 'Book your visit' },
      es: { kicker: 'Chula Vista Dental', title: 'Una sonrisa más brillante empieza aquí.', cta: 'Agenda tu cita' },
    },
  },

  includes: {
    kicker: 'Incluido en todos los paquetes',
    titleHtml: 'Todo lo que tu página web <span class="text-accent">necesita para funcionar</span>',
    items: [
      { icon: 'brush', title: 'Diseño desde tu marca', text: 'Diseño original construido a partir de tu identidad.' },
      { icon: 'devices', title: '100% responsive', text: 'Se ve y funciona perfecto en celular, tablet y computadora.' },
      { icon: 'search', title: 'SEO local', text: 'Metadatos, encabezados, Schema, sitemap y Google Business Profile.' },
      { icon: 'bolt', title: 'Carga ultra rápida', text: 'Optimizada para Core Web Vitals y PageSpeed.' },
      { icon: 'chat', title: 'WhatsApp y formularios', text: 'Botones de contacto directo y formularios a tu correo.' },
      { icon: 'monitoring', title: 'Analítica', text: 'Google Analytics 4 y Meta Pixel listos para tus campañas.' },
      { icon: 'lock', title: 'Certificado SSL', text: 'Conexión segura https para ti y tus clientes.' },
      { icon: 'school', title: 'Capacitación', text: 'Te enseñamos a actualizar tu contenido sin depender de nadie.' },
    ],
  },

  packages: {
    kicker: 'Paquetes',
    titleHtml: '¿Cuánto cuesta una <span class="text-accent">página web en San Diego</span>?',
    subtitle: 'Diseño de nivel agencia, guiado por tu marca, sin los costos de una agencia tradicional. Precios claros desde el inicio.',
    from: 'Desde',
    currency: 'USD',
    popular: 'Más elegido',
    cta: 'Cotizar este paquete',
    items: [
      {
        name: 'Landing Page',
        for: 'Para campañas, lanzamientos y negocios que necesitan presencia rápida y enfocada en conversión.',
        price: '$990',
        priceValue: 990,
        priceCurrency: 'USD',
        note: 'pago único',
        delivery: 'Entrega en 7–10 días hábiles',
        features: [
          '1 página con hasta 6 secciones',
          'Diseño a la medida desde tu marca',
          'Formulario + botón de WhatsApp',
          'SEO on-page',
          'Google Analytics 4 y Meta Pixel',
          '1 ronda de ajustes',
        ],
        wa: '¡Hola! Me interesa el paquete Landing Page para mi negocio',
      },
      {
        name: 'Sitio de Marca',
        for: 'Para negocios que quieren un sitio completo que refleje su marca, se posicione localmente y traiga clientes cada semana.',
        price: '$2,490',
        priceValue: 2490,
        priceCurrency: 'USD',
        note: 'pago único',
        delivery: 'Entrega en 2–4 semanas',
        featured: true,
        features: [
          'Hasta 6 páginas (Inicio, Nosotros, Servicios, Contacto…)',
          'Diseño a la medida guiado por tu marca',
          'Blog administrable',
          'SEO local + datos estructurados',
          'Optimización de Google Business Profile',
          'Optimización de velocidad (PageSpeed 90+)',
          '2 rondas de ajustes',
        ],
        wa: '¡Hola! Me interesa el paquete Sitio de Marca para mi negocio',
      },
      {
        name: 'Tienda en Línea',
        for: 'Para marcas listas para vender en internet con pagos, envíos e inventario con su propia identidad.',
        price: '$4,900',
        priceValue: 4900,
        priceCurrency: 'USD',
        note: 'pago único',
        delivery: 'Entrega en 4–6 semanas',
        features: [
          'Todo lo del Sitio de Marca',
          'Catálogo de hasta 50 productos',
          'Pagos con tarjeta, Apple Pay y Google Pay',
          'Envíos, cupones e inventario',
          'Panel para administrar pedidos',
          'Capacitación de la tienda',
        ],
        wa: '¡Hola! Me interesa el paquete Tienda en Línea para mi negocio',
      },
    ],
    footnotes: [
      'Versión bilingüe (español + inglés) disponible en cualquier paquete desde +$590 USD.',
      'Plan mensual opcional (hosting, actualizaciones, respaldos y cambios menores) desde $99 USD/mes.',
      'Dominio no incluido; te ayudamos a registrarlo a tu nombre. Facturamos en USD o MXN.',
    ],
  },

  steps: {
    kicker: 'Proceso',
    titleHtml: 'Así creamos tu <span class="text-accent">página web</span>',
    items: [
      { title: 'Marca y estrategia', time: 'Semana 1', text: 'Estudiamos tu marca, tus clientes y tus objetivos, y definimos la estructura y los mensajes del sitio.' },
      { title: 'Diseño', time: 'Semana 1–2', text: 'Te presentamos un diseño a la medida que refleja tu identidad para que lo revises antes de programar.' },
      { title: 'Desarrollo', time: 'Semana 2–3', text: 'Programamos el sitio, lo optimizamos para velocidad y SEO, y lo probamos en todos los dispositivos e idiomas.' },
      { title: 'Lanzamiento', time: 'Semana 3–4', text: 'Publicamos, conectamos tu dominio, configuramos analítica y te capacitamos para administrarlo.' },
    ],
  },

  work: {
    kicker: 'Portafolio',
    titleHtml: 'Páginas web que <span class="text-accent">ya están trabajando</span>',
    subtitle: 'Algunos de los sitios guiados por la marca que hemos diseñado y desarrollado para nuestros clientes.',
    visit: 'Visitar sitio',
  },

  faq: {
    titleHtml: 'Preguntas frecuentes sobre <span class="text-accent">diseño de páginas web</span>',
    items: [
      { q: '¿Cuánto cuesta una página web en San Diego?', a: 'Un sitio de agencia en San Diego suele costar entre $5,000 y $15,000 USD. En Define Creative Studio una landing page empieza desde $990 USD, un sitio de marca de hasta 6 páginas desde $2,490 USD y una tienda en línea desde $4,900 USD. Tienes diseño de nivel agencia sin sus costos, y te damos una cotización exacta después de una llamada gratuita.' },
      { q: '¿Qué significa un diseño web "guiado por tu marca"?', a: 'Que el sitio se diseña desde tu identidad de marca (colores, tipografía, fotografía, tono y posicionamiento) en lugar de partir de una plantilla. El resultado se ve inconfundiblemente como tu negocio y genera confianza más rápido.' },
      { q: '¿Hacen páginas web bilingües?', a: 'Sí. Creamos versiones en español e inglés con textos adaptados por personas, cambio de idioma en cada página y SEO independiente para cada idioma. Está disponible en cualquier paquete desde +$590 USD.' },
      { q: '¿Trabajan con negocios en California y Tijuana?', a: 'Sí. Trabajamos con negocios en San Diego, Chula Vista, National City, Otay Mesa y todo el condado de San Diego, así como en Los Ángeles, Orange County y el resto de California. También atendemos clientes específicos en Tijuana y Baja California. Las reuniones pueden ser en persona o por videollamada.' },
      { q: '¿Puedo conectar mi página web a un CRM?', a: 'Sí. Conectamos tus formularios y botones de WhatsApp a GoHighLevel, el CRM que usamos para automatizar el seguimiento de prospectos. Así cada contacto que llega desde tu sitio recibe seguimiento automático y no se pierde ninguna oportunidad.' },
      { q: '¿Cuánto tiempo tarda en estar lista mi página web?', a: 'Una landing page se entrega en 7 a 10 días hábiles, un sitio de marca en 2 a 4 semanas y una tienda en línea en 4 a 6 semanas. Los tiempos dependen también de qué tan rápido tengamos tus textos e imágenes.' },
      { q: '¿Puedo actualizar mi página web yo mismo?', a: 'Sí. Cada sitio incluye una capacitación para que puedas cambiar textos, imágenes y publicar en el blog. Si prefieres no hacerlo, el plan mensual incluye cambios menores.' },
    ],
  },

  cta: {
    kicker: '¿Listo para un sitio que se vea como tu marca?',
    titleHtml: 'Hablemos de tu proyecto<br>y te enviamos tu cotización.',
    text: 'Cuéntanos de tu negocio. En menos de 24 horas te respondemos con una propuesta clara, tiempos y precio final.',
    primary: 'Cotizar por WhatsApp',
    secondary: 'Ver portafolio',
    note: 'Sin compromiso · Asesoría gratuita · Equipo bilingüe',
  },
};

export const webDesign: Record<Lang, ServicePage> = { es, en };
