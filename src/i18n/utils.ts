import { ui, defaultLang, type UIKey } from './ui';
import type { Lang } from '../types';

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  if (first === 'es') return 'es';
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** `/work` → `/es/work`, `/` → `/es`, `/es/work` → `/work` … */
export function alternatePath(pathname: string): string {
  if (pathname === '/') return '/es';
  if (pathname === '/es' || pathname === '/es/') return '/';
  if (pathname.startsWith('/es/')) return pathname.slice(3);
  return `/es${pathname}`;
}

/** Build a localized path: localizedPath('/work', 'es') → '/es/work' */
export function localizedPath(pathname: string, lang: Lang): string {
  const clean = pathname.startsWith('/') ? pathname : `/${pathname}`;
  if (lang === 'en') return clean === '/' ? '/' : clean;
  return clean === '/' ? '/es' : `/es${clean}`;
}
