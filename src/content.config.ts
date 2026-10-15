// ═══════════════════════════════════════════════
// Colección del blog
// Los artículos viven en:  src/content/blog/es/*.md   y   src/content/blog/en/*.md
// Usa el MISMO nombre de archivo en ambos idiomas para que el switch ES/EN
// y el hreflang apunten a la traducción correcta.
// El nombre del archivo ES la URL: es/meta_ads.md → /blog/meta_ads/
// ═══════════════════════════════════════════════
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    // ── Tarjeta y SEO
    title: z.string(),                       // título corto: tarjeta, breadcrumb, schema
    metaTitle: z.string().optional(),        // <title> (si no, "title | Define Creative Studio")
    description: z.string(),                 // meta description
    excerpt: z.string().optional(),          // texto de la tarjeta (si no, description)
    keywords: z.array(z.string()).default([]),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    image: z.string(),                       // imagen destacada (tarjeta + hero + og:image)
    imageAlt: z.string().optional(),
    category: z.string(),                    // chip de la tarjeta
    categoryStyle: z.enum(['dark', 'lime', 'lavender', 'blue']).default('lime'),
    section: z.string().optional(),          // categoría del breadcrumb (si no, category)
    author: z.string().default('Define Creative Studio'),
    authorTag: z.string().optional(),        // "Tijuana, México · Marketing Digital"
    readingTime: z.number().default(7),      // minutos
    draft: z.boolean().default(false),

    // ── Hero del artículo
    hero: z.object({
      kicker: z.string(),
      titleHtml: z.string(),                 // admite <span class="text-lime">…</span>
      intro: z.string(),
      imageAspect: z.string().default('4/3'),
      badges: z.array(z.enum(['facebook', 'instagram'])).default([]),
    }),

    // ── Preguntas frecuentes (se muestran al final y generan el schema FAQPage)
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),

    // ── CTA final (si no se define, usa el CTA general del sitio)
    cta: z
      .object({
        kicker: z.string(),
        titleHtml: z.string(),
        text: z.string(),
        primary: z.object({
          label: z.string(),
          href: z.string().optional(),       // link normal…
          wa: z.string().optional(),         // …o mensaje de WhatsApp (pone el ícono)
          style: z.enum(['accent', 'whatsapp']).default('accent'),
        }),
        secondary: z.object({ label: z.string(), href: z.string() }).optional(),
        note: z.string().optional(),
      })
      .optional(),
  }),
});

export const collections = { blog };
