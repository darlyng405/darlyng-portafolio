export function initAnimations() {
  document.documentElement.classList.add('js-enabled');

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    document.querySelectorAll('[data-stagger], [data-reveal], .code-line').forEach((el) => {
      el.classList.add('is-visible');
    });
    return;
  }

  // 1. Hero Stagger Entrance
  const heroElements = document.querySelectorAll('[data-stagger]');
  heroElements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add('is-visible');
    }, index * 110 + 60);
  });

  // 2. Code Card Line-by-Line Reveal
  const codeLines = document.querySelectorAll('.code-line');
  codeLines.forEach((line, index) => {
    setTimeout(() => {
      line.classList.add('is-visible');
    }, index * 85 + 220);
  });

  // 3. Scroll Reveal via IntersectionObserver
  const reveals = document.querySelectorAll('[data-reveal]');
  if (reveals.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -32px 0px' }
    );
    reveals.forEach((el) => observer.observe(el));
  }
}
