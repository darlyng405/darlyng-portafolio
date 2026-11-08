import type { Locale } from '../types';
import { getLocaleFromPath, localizedPath } from '../i18n/utils';

// TODO: cargar este módulo desde el layout y llamar a saveLocalePreference() al hacer clic
// en el selector de idioma (que es un enlace normal a la página equivalente).
// TODO: decidir si el redirect aplica solo a la raíz o a cualquier ruta.

const KEY = 'locale';

export function readLocalePreference(): Locale | null {
  try {
    const value = localStorage.getItem(KEY);
    return value === 'en' || value === 'es' ? value : null;
  } catch {
    return null;
  }
}

export function saveLocalePreference(locale: Locale): void {
  try {
    localStorage.setItem(KEY, locale);
  } catch {
    // Ignorar: la preferencia es solo una comodidad.
  }
}

export function redirectToPreferredLocale(): void {
  const preferred = readLocalePreference();
  if (!preferred) return;
  const { pathname, search, hash } = window.location;
  if (getLocaleFromPath(pathname) === preferred) return;
  window.location.replace(localizedPath(pathname, preferred) + search + hash);
}
