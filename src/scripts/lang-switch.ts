document.querySelectorAll<HTMLAnchorElement>('[data-set-lang]').forEach((el) => {
  el.addEventListener('click', () => {
    const lang = el.dataset.setLang;
    if (lang === 'en' || lang === 'es') {
      try {
        localStorage.setItem('lang', lang);
      } catch {
        /* ignore */
      }
    }
  });
});

export {};
