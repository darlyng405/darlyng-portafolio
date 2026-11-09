import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import { transformSync } from 'esbuild';

const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * Virtual module "virtual:theme-init" — reads src/scripts/theme-init.ts,
 * transpiles it with esbuild to plain JS, and exposes it as a string.
 * This lets BaseLayout inline it synchronously in <head> while keeping
 * the source in TypeScript (see section 22 of the master document).
 */
function themeInitPlugin() {
  return {
    name: 'theme-init-virtual',
    resolveId(id: string) {
      if (id === 'virtual:theme-init') return '\0virtual:theme-init';
      return null;
    },
    load(id: string) {
      if (id === '\0virtual:theme-init') {
        const src = readFileSync(
          resolve(__dirname, 'src/scripts/theme-init.ts'),
          'utf-8'
        );
        const { code } = transformSync(src, { loader: 'ts', minify: true });
        return `export default ${JSON.stringify(code)};`;
      }
      return null;
    },
  };
}

function resolveSiteUrl(): string {
  const envUrl = process.env.PUBLIC_SITE_URL || process.env.SITE_URL;
  if (envUrl) {
    return envUrl.startsWith('http') ? envUrl : `https://${envUrl}`;
  }

  const vercelDomain = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
  if (vercelDomain) {
    return `https://${vercelDomain}`;
  }

  if (process.env.APP_URL) {
    return process.env.APP_URL;
  }

  return 'https://darlyng-portfolio.vercel.app';
}

export default defineConfig({
  site: resolveSiteUrl(),
  output: 'static',
  devToolbar: {
    enabled: false,
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: true,
  },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: { prefixDefaultLocale: false },
  },
  vite: {
    plugins: [themeInitPlugin()],
    server: {
      allowedHosts: true,
    },
    preview: {
      allowedHosts: true,
    },
  },
});
