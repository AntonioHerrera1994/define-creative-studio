# Define Creative Studio — Astro

## Cómo usarlo
1. Crea tu proyecto: `npm create astro@latest` (plantilla vacía).
2. Copia `astro.config.mjs` y la carpeta `src/` encima de la tuya.
3. `npm run dev` → http://localhost:4321  (ES)  ·  /en/  (EN)

## Estructura
```
src/
├─ styles/global.css            ← tokens (colores, fuentes, radios), botones, tarjetas
├─ i18n/
│  ├─ ui.ts                     ← TODOS los textos en ES y EN, por sección
│  └─ utils.ts                  ← getLangFromUrl, useTranslations, localizePath, waLink
├─ data/                        ← datos que no se traducen
│  ├─ site.ts                   (negocio, logos, redes, teléfono)
│  ├─ portfolio.ts              (piezas del portafolio)
│  ├─ clients.ts                (logos de clientes)
│  └─ projects.ts               (imágenes de "Proyectos")
├─ components/
│  ├─ seo/SEO.astro             ← meta, OG, Twitter, canonical, hreflang, JSON-LD
│  ├─ seo/schema.ts             ← LocalBusiness, WebSite, FAQPage, BlogPosting, Breadcrumb
│  ├─ layout/Navbar/            (Navbar.astro · navbar.css · navbar.js)
│  ├─ layout/Footer/            (Footer.astro · footer.css)
│  ├─ sections/<Sección>/       (Sección.astro · seccion.css · seccion.js si aplica)
│  │    Hero, Services, Story, Portfolio(+js), Process, Clients, Projects,
│  │    Pricing, Faq, Quoter(+js), BlogPreview, CtaFinal
│  └─ blog/BlogCard, blog/BlogPost
├─ layouts/BaseLayout.astro     ← <head>, fuentes, global.css, Navbar, Footer
├─ views/                       ← páginas compartidas ES/EN (Home, BlogIndex, BlogPost)
├─ pages/                       ← rutas: /, /en/, /blog/, /en/blog/, /blog/[slug]
├─ lib/blog.ts                  ← getPosts(lang), slug, fecha
├─ content.config.ts            ← esquema del frontmatter del blog
└─ content/blog/{es,en}/*.md    ← artículos (mismo nombre de archivo en ambos idiomas)
```

## Imágenes
Todas las imágenes propias salen de `https://joseantonioh59.sg-host.com/wp-content/uploads`.
- En componentes y datos: se controla con `MEDIA_HOST` en `src/data/site.ts` (una sola línea).
- En los artículos `.md` va la URL completa; si cambia el dominio, busca y reemplaza en `src/content/blog/`.

## Tipografía
Los grosores están en `src/styles/global.css`:
`--fw-heavy` (títulos grandes), `--fw-bold` (subtítulos/botones), `--fw-medium` (h3, nombres).
Si aún se ve grueso, baja `--fw-heavy` a 500.

## Escribir un artículo
1. Copia un `.md` de `src/content/blog/es/` y cámbiale el nombre: **el nombre del archivo es la URL**.
2. Llena el frontmatter (título, descripción, imagen, hero, faq, cta). Si no pones `cta`, usa el del blog.
3. El cuerpo va en **bandas** (alternan blanco / gris). Deja SIEMPRE una línea en blanco
   después de abrir y antes de cerrar cada banda, y no indentes:

```
<div class="band">

## Título de la sección

Párrafo normal en Markdown, con **negritas**.

</div>

<div class="band band--muted">

...

</div>
```

### Bloques disponibles (pégalos dentro de una banda, sin líneas en blanco por dentro)
| Bloque | Código |
|---|---|
| Párrafo grande inicial | `<p class="b-lead">…</p>` |
| Cita destacada | `<blockquote class="b-quote">…</blockquote>` |
| Imagen | `<img class="b-img" src="…" alt="…" style="aspect-ratio:16/9" loading="lazy">` |
| 4 cifras | `<div class="b-stats"><div class="b-stat"><strong>4:1</strong><span>Texto</span></div>…</div>` |
| 2 cifras en tarjeta azul | igual, con `class="b-stats b-stats--dark"` |
| Cifra + texto | ver `b-statrow` en el artículo de Define Realty |
| Pasos numerados | ver `b-steps` en el artículo de Meta Ads |
| 3 herramientas | ver `b-tools` en el artículo de Google Ads |
| Mercados (ancho) | ver `b-markets` en el artículo de Define Realty |
| Pilares con imagen (ancho) | ver `b-pillars` en Tu Historia Capturada |
| Lista con check | `<ul class="b-checks"><li><span class="material-symbols-outlined">check</span><p>…</p></li></ul>` |

`draft: true` oculta el artículo en producción (en `npm run dev` sí se ve).

## Reglas rápidas
- **Cambiar un texto:** `src/i18n/ui.ts` (en los dos idiomas).
- **Agregar pieza al portafolio:** un objeto en `src/data/portfolio.ts`.
- **Nuevo artículo:** crea `src/content/blog/es/mi-slug.md` (y `en/mi-slug.md` para la traducción).
  `draft: true` lo oculta en producción.
- **Página nueva:** archivo en `src/pages/` usando `<BaseLayout title="..." description="...">`.
- Los slugs del blog se dejaron iguales a los de WordPress para no perder posicionamiento.
