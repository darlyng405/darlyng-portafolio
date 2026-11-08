import { ui, defaultLang, type UIKey } from './ui';
import type { Lang } from '../types';

export function getLocaleFromPath(pathname: string): Lang {
  if (pathname === '/es' || pathname.startsWith('/es/')) return 'es';
  return defaultLang;
}

export function getLangFromUrl(url: URL): Lang {
  return getLocaleFromPath(url.pathname);
}

export function stripLocale(pathname: string): string {
  if (pathname === '/es' || pathname === '/es/') return '/';
  if (pathname.startsWith('/es/')) return pathname.slice(3);
  return pathname;
}

export function useTranslations(lang: Lang) {
  return function translate(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

export function t(lang: Lang, key: string): string {
  const dict = ui[lang] as Record<string, string>;
  const fallback = ui[defaultLang] as Record<string, string>;
  return dict[key] ?? fallback[key] ?? key;
}

/** `/work` → `/es/work`, `/` → `/es/`, `/es/work` → `/work` … */
export function alternatePath(pathname: string): string {
  if (pathname === '/') return '/es/';
  if (pathname === '/es' || pathname === '/es/') return '/';
  if (pathname.startsWith('/es/')) return pathname.slice(3);
  return `/es${pathname}`;
}

/** Build a localized path: localizedPath('/work', 'es') → '/es/work', localizedPath('/', 'es') → '/es/' */
export function localizedPath(pathname: string, lang: Lang): string {
  const clean = stripLocale(pathname.startsWith('/') ? pathname : `/${pathname}`);
  if (lang === 'en') return clean === '' ? '/' : clean;
  return clean === '/' ? '/es/' : `/es${clean}`;
}
