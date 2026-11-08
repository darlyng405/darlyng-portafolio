# Portafolio — Darlyng Mateo

Portafolio personal construido con Astro y TypeScript. La especificación completa está en
[`docs/PORTFOLIO_SPEC.md`](docs/PORTFOLIO_SPEC.md) y la lista de trabajo en
[`docs/PENDIENTES.md`](docs/PENDIENTES.md).

Este repositorio es un **esqueleto**: tiene la estructura, la configuración, los tokens de diseño y
los textos ya aprobados. Las páginas y los componentes están por completar (busca los `TODO`).

## Puesta en marcha

El `package.json` no fija versiones de dependencias a propósito: se instalan las actuales.

```bash
npm install astro @vercel/analytics
npm install -D typescript @astrojs/check vitest @playwright/test prettier prettier-plugin-astro eslint typescript-eslint eslint-plugin-astro
npx playwright install
npm run dev
```

Tras instalar, revisa que `src/content.config.ts` y el uso de `render()` en las páginas de Journal
correspondan a la versión de Astro instalada (están escritos para Astro 5 en adelante).

## Scripts

| Comando            | Qué hace                         |
| ------------------ | -------------------------------- |
| `npm run dev`      | Servidor de desarrollo           |
| `npm run build`    | Revisión de tipos y build        |
| `npm run preview`  | Previsualizar el build           |
| `npm run test`     | Pruebas unitarias (Vitest)       |
| `npm run test:e2e` | Pruebas end-to-end (Playwright)  |
| `npm run lint`     | ESLint (falta crear la config)   |
| `npm run format`   | Prettier                         |

## Estructura

```
portfolio/
├── docs/                 Especificación y pendientes
├── public/               Recursos estáticos (images, icons, fonts, cv, robots.txt)
├── src/
│   ├── components/       Componentes Astro
│   ├── content/          Contenido por idioma (projects/{en,es}, journal/{en,es})
│   ├── content.config.ts Esquemas de las colecciones
│   ├── data/             Datos públicos (site.ts)
│   ├── i18n/             Textos de la interfaz y utilidades de idioma
│   ├── layouts/          BaseLayout
│   ├── pages/            Rutas en inglés; las de español viven en pages/es/
│   ├── scripts/          Scripts de cliente en TypeScript (tema, preferencia de idioma)
│   ├── styles/           tokens.css, global.css, fonts.css
│   ├── types/
│   └── utils/
└── tests/                unit/ (Vitest) y e2e/ (Playwright)
```

## Decisiones técnicas importantes

- **Idiomas:** cada idioma tiene sus propias páginas estáticas. El selector es un enlace a la página
  equivalente y `localStorage` solo guarda la preferencia. La estrategia de URLs (`/es/`) es una
  propuesta pendiente de confirmar.
- **Tema:** oscuro por defecto. `src/scripts/theme-init.ts` se inserta inline en el `<head>` durante
  el build para evitar el parpadeo.
- **TypeScript:** todo el código propio se escribe en TypeScript, sin JavaScript a mano.
- **Contenido:** los archivos de `src/content/` solo contienen datos confirmados. `verified: false`
  indica que falta contrastarlos.
- **Ramas:** `dev` para desarrollo, `main` para producción (despliegue automático en Vercel).
