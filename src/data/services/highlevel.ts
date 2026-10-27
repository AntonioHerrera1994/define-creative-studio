// ═══════════════════════════════════════════════
// Página de servicio: GOHIGHLEVEL (Pilar 5)
// ES → /gohighlevel-san-diego/      EN → /en/gohighlevel-san-diego/
//
// Mapa de keywords (dónde va cada una):
//  gohighlevel san diego ............ H1 + Title (EN y ES)
//  gohighlevel español .............. intro hero + H2 texto SEO (ES)
//  crm para pymes san diego ......... H2 beneficios (ES)
//  agencia gohighlevel san diego .... H2 texto SEO (California + Tijuana)
//  crm para whatsapp ................ H2 highlight (ES)
//  automatización de marketing
//  san diego ........................ H2 incluye (ES)
//  gohighlevel pricing .............. FAQ (EN) / "precios" FAQ (ES)
//  gohighlevel qué es y para qué
//  sirve ............................ FAQ (ES)
//
// Enlaces puente: HighLevel → Web ("landing pages y embudos") en el texto SEO.
// Pendiente: HighLevel → Branding cuando exista /branding-san-diego/.
// ═══════════════════════════════════════════════
import type { ServicePage } from './types';
import type { Lang } from '../../i18n/ui';

const es: ServicePage = {
  seo: {
    title: 'GoHighLevel San Diego | CRM y Automatización | Define',
    description:
      'Implementamos GoHighLevel en español para negocios en San Diego, California y Tijuana: CRM, WhatsApp, citas, embudos y automatización. Implementación + administración desde $450 USD/mes, primer mes gratis.',
    ogImageAlt: 'GoHighLevel en San Diego y Tijuana — implementación y administración por Define Creative Studio',
    serviceType: 'Implementación y administración de CRM GoHighLevel',
    breadcrumb: 'GoHighLevel',
  },

  hero: {
    kicker: 'CRM y automatización · San Diego & Tijuana',
    titleHtml: '<span class="text-lime">GoHighLevel</span> en San Diego, implementado y administrado para vender más',
    intro:
      'Nos encargamos de todo: implementamos GoHighLevel en español, lo configuramos para tu negocio y lo administramos cada mes. Tú solo atiendes clientes; el sistema hace el resto. Implementación incluida, primer mes gratis.',
    ctaPrimary: 'Quiero mi CRM',
    ctaSecondary: 'Ver el plan',
    wa: '¡Hola! Me interesa implementar GoHighLevel en mi negocio',
    trust: ['Implementación + administración', 'Primer mes gratis', 'Soporte 100% en español'],
    visual: 'crm',
    crm: {
      title: 'Pipeline de ventas',
      columns: [
        { name: 'Nuevo lead', cards: [{ name: 'Mariana López', meta: 'WhatsApp · hace 2 min' }, { name: 'Carlos Ruiz', meta: 'Formulario web' }, { name: 'Ana Torres', meta: 'Instagram DM' }] },
        { name: 'Cita agendada', cards: [{ name: 'Jorge Peña', meta: 'Jue 10:30 am' }, { name: 'Sofía Díaz', meta: 'Vie 4:00 pm' }] },
        { name: 'Ganado', cards: [{ name: 'Luis Méndez', meta: '$1,200 USD' }, { name: 'Paola Vega', meta: '$850 USD' }] },
      ],
      toast: 'Recordatorio de cita enviado por WhatsApp a Jorge Peña',
    },
    floatTop: { value: '24/7', label: 'Seguimiento automático' },
    floatBottom: { value: '1 sola', label: 'plataforma' },
  },

  benefits: {
    kicker: 'Para PYMES en California y Tijuana',
    titleHtml: 'Un <span class="text-accent">CRM para PYMES en San Diego</span> que trabaja por ti',
    subtitle: 'Deja de pagar cinco herramientas distintas y de perder leads entre WhatsApp, Instagram y el correo. GoHighLevel lo une todo.',
    items: [
      { icon: 'inbox', tone: 'blue', title: 'Todos tus leads en un lugar', text: 'WhatsApp, Instagram, Facebook, formularios, llamadas y correo llegan a una sola bandeja con el historial de cada cliente.' },
      { icon: 'event_available', tone: 'lime', title: 'Citas que se agendan solas', text: 'Calendario en línea con confirmaciones y recordatorios automáticos que reducen las citas perdidas.' },
      { icon: 'trending_up', tone: 'lavender', title: 'Ningún lead se enfría', text: 'Secuencias automáticas que responden en segundos y dan seguimiento hasta que el cliente compra o agenda.' },
      { icon: 'savings', tone: 'blue', title: 'Reemplaza varias herramientas', text: 'CRM, embudos, email marketing, reseñas y reportes en una suscripción, en lugar de pagar cada una por separado.' },
    ],
  },

  seoText: {
    kicker: 'Agencia GoHighLevel en San Diego y Tijuana',
    titleHtml: 'GoHighLevel en español, <span class="text-accent">implementado y administrado en California y Tijuana</span>',
    paragraphsHtml: [
      '<strong>GoHighLevel</strong> es una de las plataformas de CRM y automatización más completas del mercado, pero casi toda su documentación, soporte y comunidad están en inglés. Por eso muchos negocios la contratan y nunca la terminan de configurar.',
      'En <strong>Define Creative Studio</strong> somos una <strong>agencia GoHighLevel en San Diego</strong> con operación en Tijuana. No solo implementamos <strong>GoHighLevel en español</strong>: también lo administramos cada mes. Migramos tus contactos, conectamos WhatsApp e Instagram, construimos tus <a href="/web-design-san-diego/">landing pages y embudos</a>, diseñamos las automatizaciones y nos encargamos del mantenimiento y las mejoras continuas.',
      'Trabajamos con clínicas, inmobiliarias, restaurantes, salones de belleza y negocios de servicios en California y Tijuana. Si tus clientes hablan inglés y español, tu CRM también: configuramos mensajes, formularios y flujos en los dos idiomas.',
    ],
    areasTitle: 'Implementamos y administramos HighLevel para negocios en',
    areas: ['San Diego', 'Chula Vista', 'Los Ángeles', 'Orange County', 'Tijuana'],
  },

  highlight: {
    visual: 'chat',
    kicker: 'Seguimiento por WhatsApp',
    titleHtml: 'El <span class="text-accent">CRM para WhatsApp</span> que responde por ti',
    text: 'La mayoría de tus clientes te escribe por WhatsApp. Con GoHighLevel cada conversación entra al CRM, se asigna a tu equipo y recibe seguimiento automático, sin perder un solo mensaje.',
    points: [
      'Respuesta automática en segundos, aunque sea de madrugada',
      'Recordatorios de cita y confirmaciones por WhatsApp',
      'Bandeja compartida para todo tu equipo, con historial de cada cliente',
      'Campañas y seguimientos a clientes que no han respondido',
      'Integración con la API oficial de WhatsApp Business',
    ],
    chatName: 'Clínica Dental Sonrisa',
    chatStatus: 'en línea',
    chat: [
      { from: 'client', text: 'Hola, ¿cuánto cuesta una limpieza dental?' },
      { from: 'bot', text: '¡Hola Mariana! 😊 La limpieza tiene un costo de $45 USD. ¿Te gustaría agendar una cita?' },
      { from: 'client', text: 'Sí, ¿tienen el jueves?' },
      { from: 'bot', text: 'Tenemos el jueves a las 10:30 am o 4:00 pm. ¿Cuál prefieres?' },
      { from: 'client', text: 'A las 10:30 porfa' },
      { from: 'bot', text: '¡Listo! ✅ Tu cita quedó agendada el jueves a las 10:30 am. Te enviaremos un recordatorio un día antes.' },
    ],
  },

  includes: {
    kicker: 'Automatización de marketing',
    titleHtml: 'Automatización de marketing en San Diego, <span class="text-accent">todo en una plataforma</span>',
    items: [
      { icon: 'view_kanban', title: 'CRM y pipeline', text: 'Etapas de venta visuales para saber dónde está cada cliente.' },
      { icon: 'forum', title: 'Bandeja unificada', text: 'WhatsApp, Instagram, Facebook, SMS y correo en un solo lugar.' },
      { icon: 'calendar_month', title: 'Calendario y citas', text: 'Reservas en línea con confirmación y recordatorios.' },
      { icon: 'account_tree', title: 'Embudos y landing pages', text: 'Páginas de captura conectadas directo a tu CRM.' },
      { icon: 'auto_mode', title: 'Workflows', text: 'Seguimientos automáticos por etapas, etiquetas y respuestas.' },
      { icon: 'smart_toy', title: 'Asistente con IA', text: 'Responde preguntas frecuentes y califica leads 24/7.' },
      { icon: 'star', title: 'Reseñas en Google', text: 'Solicita reseñas automáticamente después de cada venta.' },
      { icon: 'phone_iphone', title: 'App móvil', text: 'Administra tu negocio y responde mensajes desde el celular.' },
    ],
  },

  packages: {
    kicker: 'Un solo plan',
    titleHtml: 'GoHighLevel <span class="text-accent">todo incluido</span>',
    subtitle: 'Implementación, suscripción y administración mensual en un solo pago. Sin planes separados, sin letra chica. Primer mes gratis.',
    from: 'Desde',
    currency: 'USD',
    popular: 'Todo incluido',
    cta: 'Quiero empezar',
    items: [
      {
        name: 'GoHighLevel Administrado',
        for: 'Para negocios que quieren el CRM funcionando desde el primer día y un equipo que lo opere y lo mejore cada mes.',
        price: '$450',
        priceValue: 450,
        priceCurrency: 'USD',
        note: 'por mes · primer mes gratis',
        billing: 'monthly',
        delivery: 'Implementación en 2–3 semanas',
        featured: true,
        features: [
          'Implementación completa llave en mano',
          'Suscripción de GoHighLevel incluida',
          'Migración de contactos y pipeline a la medida',
          'Conexión de WhatsApp, Instagram y Facebook',
          'Automatizaciones de seguimiento y recordatorios',
          'Landing page o embudo de captura',
          'Administración mensual: mejoras, ajustes y soporte',
          'Soporte en español por WhatsApp',
        ],
        wa: '¡Hola! Me interesa el plan GoHighLevel Administrado',
      },
    ],
    footnotes: [
      'Primer mes gratis: aplica al primer mes de administración. La implementación se entrega en 2–3 semanas.',
      'El consumo de mensajes (WhatsApp, SMS, correo) se cobra aparte según uso, a tarifa de la plataforma.',
      'Facturamos en USD o en MXN al tipo de cambio del día.',
      'GoHighLevel es una marca registrada de HighLevel, Inc. Define Creative Studio es una agencia independiente que la implementa.',
    ],
  },

  steps: {
    kicker: 'Implementación',
    titleHtml: 'Así implementamos y administramos tu <span class="text-accent">GoHighLevel</span>',
    items: [
      { title: 'Diagnóstico', time: 'Semana 1', text: 'Revisamos cómo llegan tus leads hoy, tus herramientas actuales y dónde se pierden ventas.' },
      { title: 'Configuración', time: 'Semana 1–2', text: 'Creamos tu cuenta, pipeline, calendarios y migramos tus contactos.' },
      { title: 'Automatización', time: 'Semana 2–3', text: 'Conectamos WhatsApp y redes, y construimos los flujos de seguimiento y recordatorios.' },
      { title: 'Lanzamiento', time: 'Semana 3', text: 'Capacitamos a tu equipo, probamos todo en vivo y te acompañamos el primer mes.' },
    ],
  },

  faq: {
    titleHtml: 'Preguntas frecuentes sobre <span class="text-accent">GoHighLevel</span>',
    items: [
      { q: 'GoHighLevel: ¿qué es y para qué sirve?', a: 'GoHighLevel es una plataforma que reúne en un solo lugar un CRM, bandeja de mensajes (WhatsApp, Instagram, Facebook, SMS y correo), calendario de citas, embudos y landing pages, email marketing, reseñas y automatizaciones. Sirve para captar leads, darles seguimiento automático y convertirlos en clientes sin perder conversaciones.' },
      { q: '¿Cuánto cuesta GoHighLevel con Define?', a: 'Un solo plan: $450 USD al mes, con el primer mes gratis. Incluye la implementación completa, la suscripción de GoHighLevel, la administración mensual y el soporte en español. El consumo de mensajes (WhatsApp, SMS, correo) se cobra aparte según uso.' },
      { q: '¿Qué incluye la administración mensual?', a: 'Ajustes y mejoras continuas al CRM, nuevas automatizaciones, mantenimiento de embudos y formularios, monitoreo de que los flujos funcionen, y soporte en español por WhatsApp para tu equipo.' },
      { q: '¿GoHighLevel está en español?', a: 'Sí. La plataforma se puede usar en español y nosotros configuramos tus mensajes, formularios y automatizaciones en español, inglés o ambos. Además, todo nuestro soporte y capacitación es en español.' },
      { q: '¿Se puede conectar con WhatsApp?', a: 'Sí. Conectamos tu número a través de la API oficial de WhatsApp Business para que todas las conversaciones entren al CRM y puedas enviar respuestas automáticas, recordatorios y seguimientos.' },
      { q: '¿Trabajan con negocios fuera de San Diego?', a: 'Sí. Implementamos y administramos HighLevel en todo California y de forma remota en el resto de México. Nuestro equipo está en Tijuana y San Diego, y hacemos las sesiones por videollamada.' },
    ],
  },

  cta: {
    kicker: '¿Listo para automatizar tu negocio?',
    titleHtml: 'Agenda un diagnóstico gratuito<br>de tu proceso de ventas.',
    text: 'En 30 minutos revisamos cómo llegan tus clientes hoy y te mostramos qué puedes automatizar con GoHighLevel desde la primera semana. Primer mes gratis.',
    primary: 'Agendar por WhatsApp',
    secondary: 'Ver el plan',
    note: 'Sin compromiso · Diagnóstico gratuito · Primer mes gratis',
  },
};

const en: ServicePage = {
  seo: {
    title: 'GoHighLevel San Diego | CRM & Automation | Define',
    description:
      'GoHighLevel implementation and management for businesses in San Diego, California and Tijuana: CRM, WhatsApp, booking, funnels and automation. Setup + monthly management from $450/mo, first month free.',
    ogImageAlt: 'GoHighLevel in San Diego and Tijuana — implementation and management by Define Creative Studio',
    serviceType: 'GoHighLevel CRM implementation and management',
    breadcrumb: 'GoHighLevel',
  },

  hero: {
    kicker: 'CRM & automation · San Diego & Tijuana',
    titleHtml: '<span class="text-lime">GoHighLevel</span> in San Diego, set up and managed to close more deals',
    intro:
      'We handle everything: we set up GoHighLevel for your business, configure it around how you sell and manage it every month \u2014 in English and Spanish. You serve clients; the system does the rest. Setup included, first month free.',
    ctaPrimary: 'Get my CRM',
    ctaSecondary: 'See the plan',
    wa: "Hi! I'm interested in setting up GoHighLevel for my business",
    trust: ['Setup + management', 'First month free', 'Bilingual support'],
    visual: 'crm',
    crm: {
      title: 'Sales pipeline',
      columns: [
        { name: 'New lead', cards: [{ name: 'Emily Carter', meta: 'WhatsApp · 2 min ago' }, { name: 'Carlos Ruiz', meta: 'Web form' }, { name: 'Ana Torres', meta: 'Instagram DM' }] },
        { name: 'Booked', cards: [{ name: 'Jordan Lee', meta: 'Thu 10:30 am' }, { name: 'Sofia Díaz', meta: 'Fri 4:00 pm' }] },
        { name: 'Won', cards: [{ name: 'Luis Méndez', meta: '$1,200' }, { name: 'Megan Ross', meta: '$850' }] },
      ],
      toast: 'Appointment reminder sent to Jordan Lee via WhatsApp',
    },
    floatTop: { value: '24/7', label: 'Automatic follow-up' },
    floatBottom: { value: 'All-in-one', label: 'platform' },
  },

  benefits: {
    kicker: 'For small businesses in California & Tijuana',
    titleHtml: 'A <span class="text-accent">CRM for small businesses in San Diego</span> that works for you',
    subtitle: 'Stop paying for five different tools and losing leads between WhatsApp, Instagram and email. GoHighLevel brings it all together.',
    items: [
      { icon: 'inbox', tone: 'blue', title: 'Every lead in one place', text: 'WhatsApp, Instagram, Facebook, forms, calls and email land in one inbox with each client’s full history.' },
      { icon: 'event_available', tone: 'lime', title: 'Self-booking appointments', text: 'Online calendar with automatic confirmations and reminders that cut no-shows.' },
      { icon: 'trending_up', tone: 'lavender', title: 'No lead goes cold', text: 'Automated sequences reply in seconds and follow up until the client buys or books.' },
      { icon: 'savings', tone: 'blue', title: 'Replace multiple tools', text: 'CRM, funnels, email marketing, reviews and reporting in one subscription instead of paying for each separately.' },
    ],
  },

  seoText: {
    kicker: 'GoHighLevel agency in San Diego & Tijuana',
    titleHtml: 'GoHighLevel, <span class="text-accent">implemented and managed across California and Tijuana</span>',
    paragraphsHtml: [
      '<strong>GoHighLevel</strong> is one of the most complete CRM and automation platforms available, but it has a real learning curve. Many businesses sign up and never finish setting it up \u2014 so they keep losing leads.',
      'At <strong>Define Creative Studio</strong> we are a <strong>GoHighLevel agency in San Diego</strong> with operations in Tijuana. We don\u2019t just set up <strong>GoHighLevel</strong> \u2014 we manage it for you every month. We migrate your contacts, connect WhatsApp and Instagram, build your <a href="/en/web-design-san-diego/">landing pages and funnels</a>, design your automations and handle ongoing maintenance and improvements.',
      'We work with clinics, real estate agents, restaurants, salons and service businesses across California and Tijuana. If your clients speak English and Spanish, your CRM should too: we set up messages, forms and workflows in both languages.',
    ],
    areasTitle: 'We implement and manage HighLevel for businesses in',
    areas: ['San Diego', 'Chula Vista', 'Los Angeles', 'Orange County', 'Tijuana'],
  },

  highlight: {
    visual: 'chat',
    kicker: 'WhatsApp follow-up',
    titleHtml: 'A <span class="text-accent">WhatsApp CRM</span> that replies for you',
    text: 'Many of your clients — especially Spanish-speaking ones — reach out on WhatsApp. With GoHighLevel every conversation enters the CRM, gets assigned to your team and receives automatic follow-up.',
    points: [
      'Instant auto-replies, even at 2 a.m.',
      'Appointment reminders and confirmations on WhatsApp',
      'Shared inbox for your whole team, with each client’s history',
      'Follow-up campaigns for leads who haven’t replied',
      'Connected through the official WhatsApp Business API',
    ],
    chatName: 'Smile Dental Clinic',
    chatStatus: 'online',
    chat: [
      { from: 'client', text: 'Hi, how much is a teeth cleaning?' },
      { from: 'bot', text: 'Hi Emily! 😊 A cleaning is $45. Would you like to book an appointment?' },
      { from: 'client', text: 'Yes, do you have Thursday?' },
      { from: 'bot', text: 'We have Thursday at 10:30 am or 4:00 pm. Which works best?' },
      { from: 'client', text: '10:30 please' },
      { from: 'bot', text: 'Done! ✅ You’re booked for Thursday at 10:30 am. We’ll send you a reminder the day before.' },
    ],
  },

  includes: {
    kicker: 'Marketing automation',
    titleHtml: 'Marketing automation in San Diego, <span class="text-accent">all in one platform</span>',
    items: [
      { icon: 'view_kanban', title: 'CRM & pipeline', text: 'Visual sales stages so you know where every client stands.' },
      { icon: 'forum', title: 'Unified inbox', text: 'WhatsApp, Instagram, Facebook, SMS and email in one place.' },
      { icon: 'calendar_month', title: 'Calendar & booking', text: 'Online booking with confirmations and reminders.' },
      { icon: 'account_tree', title: 'Funnels & landing pages', text: 'Lead capture pages connected straight to your CRM.' },
      { icon: 'auto_mode', title: 'Workflows', text: 'Automatic follow-up by stage, tag and reply.' },
      { icon: 'smart_toy', title: 'AI assistant', text: 'Answers FAQs and qualifies leads 24/7.' },
      { icon: 'star', title: 'Google reviews', text: 'Automatically request reviews after every sale.' },
      { icon: 'phone_iphone', title: 'Mobile app', text: 'Run your business and reply to messages from your phone.' },
    ],
  },

  packages: {
    kicker: 'One plan',
    titleHtml: 'GoHighLevel, <span class="text-accent">all included</span>',
    subtitle: 'Setup, subscription and monthly management in one payment. No tiers, no fine print. First month free.',
    from: 'From',
    currency: 'USD',
    popular: 'All included',
    cta: 'Get started',
    items: [
      {
        name: 'Managed GoHighLevel',
        for: 'For businesses that want the CRM working from day one and a team that runs and improves it every month.',
        price: '$450',
        priceValue: 450,
        priceCurrency: 'USD',
        note: 'per month · first month free',
        billing: 'monthly',
        delivery: 'Set up in 2–3 weeks',
        featured: true,
        features: [
          'Complete done-for-you setup',
          'GoHighLevel subscription included',
          'Contact migration and custom pipeline',
          'WhatsApp, Instagram and Facebook connected',
          'Follow-up and reminder automations',
          'Lead capture landing page or funnel',
          'Monthly management: improvements, tweaks and support',
          'Bilingual support via WhatsApp',
        ],
        wa: "Hi! I'm interested in the Managed GoHighLevel plan",
      },
    ],
    footnotes: [
      'First month free: applies to the first month of management. Setup is delivered in 2–3 weeks.',
      'Message usage (WhatsApp, SMS, email) is billed separately at platform rates.',
      'GoHighLevel is a registered trademark of HighLevel, Inc. Define Creative Studio is an independent agency that implements it.',
    ],
  },

  steps: {
    kicker: 'Implementation',
    titleHtml: 'How we set up and manage your <span class="text-accent">GoHighLevel</span>',
    items: [
      { title: 'Audit', time: 'Week 1', text: 'We review how leads reach you today, your current tools and where sales slip away.' },
      { title: 'Configuration', time: 'Week 1–2', text: 'We create your account, pipeline and calendars, and migrate your contacts.' },
      { title: 'Automation', time: 'Week 2–3', text: 'We connect WhatsApp and social media and build your follow-up and reminder workflows.' },
      { title: 'Launch', time: 'Week 3', text: 'We train your team, test everything live and support you through the first month.' },
    ],
  },

  faq: {
    titleHtml: 'Frequently asked questions about <span class="text-accent">GoHighLevel</span>',
    items: [
      { q: 'What is GoHighLevel and what is it used for?', a: 'GoHighLevel is an all-in-one platform that combines a CRM, a messaging inbox (WhatsApp, Instagram, Facebook, SMS and email), appointment booking, funnels and landing pages, email marketing, reviews and automations. It helps you capture leads, follow up automatically and turn them into clients without losing conversations.' },
      { q: 'How much does GoHighLevel cost with Define?', a: 'One plan: $450 per month, with the first month free. It includes the complete setup, your GoHighLevel subscription, monthly management and bilingual support. Message usage (WhatsApp, SMS, email) is billed separately based on use.' },
      { q: 'What does monthly management include?', a: 'Ongoing tweaks and improvements to your CRM, new automations, funnel and form maintenance, monitoring that every workflow keeps running, and bilingual support via WhatsApp for your team.' },
      { q: 'Can GoHighLevel work in Spanish?', a: 'Yes. We set up your messages, forms and automations in English, Spanish or both, and our support and training are fully bilingual.' },
      { q: 'Can it connect to WhatsApp?', a: 'Yes. We connect your number through the official WhatsApp Business API so every conversation enters the CRM and you can send auto-replies, reminders and follow-ups.' },
      { q: 'Do you work with businesses outside San Diego?', a: 'Yes. We implement and manage HighLevel throughout California, and remotely in Mexico. Our team is based in San Diego and Tijuana, and sessions run over video call.' },
    ],
  },

  cta: {
    kicker: 'Ready to automate your business?',
    titleHtml: 'Book a free audit<br>of your sales process.',
    text: "In 30 minutes we'll review how clients reach you today and show you what you can automate with GoHighLevel in the first week. First month free.",
    primary: 'Book on WhatsApp',
    secondary: 'See the plan',
    note: 'No commitment · Free audit · First month free',
  },
};

export const highlevel: Record<Lang, ServicePage> = { es, en };
