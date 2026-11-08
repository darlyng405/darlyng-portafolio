const btn = document.getElementById('theme-toggle');
if (btn) {
  btn.addEventListener('click', () => {
    const html = document.documentElement;
    const current = html.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    html.style.colorScheme = next;
    try {
      localStorage.setItem('theme', next);
    } catch {
      /* ignore */
    }
  });
}

export {};
