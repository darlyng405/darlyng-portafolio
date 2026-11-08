import { describe, expect, it } from 'vitest';
import { getLocaleFromPath, localizedPath, stripLocale, t } from '../../src/i18n/utils';

describe('rutas por idioma', () => {
  it('detecta el idioma', () => {
    expect(getLocaleFromPath('/')).toBe('en');
    expect(getLocaleFromPath('/work')).toBe('en');
    expect(getLocaleFromPath('/es')).toBe('es');
    expect(getLocaleFromPath('/es/work')).toBe('es');
    expect(getLocaleFromPath('/espacio')).toBe('en');
  });

  it('quita el prefijo', () => {
    expect(stripLocale('/es')).toBe('/');
    expect(stripLocale('/es/work/coro')).toBe('/work/coro');
    expect(stripLocale('/work')).toBe('/work');
  });

  it('genera la ruta equivalente', () => {
    expect(localizedPath('/', 'es')).toBe('/es/');
    expect(localizedPath('/work', 'es')).toBe('/es/work');
    expect(localizedPath('/es/work', 'en')).toBe('/work');
    expect(localizedPath('/es/', 'en')).toBe('/');
  });
});

describe('textos', () => {
  it('usa inglés cuando falta la traducción', () => {
    expect(t('es', 'hero.headline')).toBe(t('en', 'hero.headline'));
  });

  it('usa el texto en español cuando existe', () => {
    expect(t('es', 'notfound.message')).toBe('Tranquilo, algo falló, pero no fue tu culpa.');
  });
});
