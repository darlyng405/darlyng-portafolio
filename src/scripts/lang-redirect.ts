export function redirectForLangPreference(): void {
  try {
    const stored = localStorage.getItem('lang');
    if (stored !== 'en' && stored !== 'es') return;

    const path = location.pathname;
    const isEs = path === '/es' || path.startsWith('/es/');
    const wantsEs = stored === 'es';

    if (wantsEs === isEs) return;

    let target: string;
    if (isEs) {
      target = path === '/es' ? '/' : path.slice(3);
    } else {
      target = path === '/' ? '/es' : '/es' + path;
    }
    location.replace(target + location.search + location.hash);
  } catch {
    /* ignore */
  }
}
