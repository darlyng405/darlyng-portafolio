export function initAnimations() {
  // 1. Activar el modo JS (permite que el CSS oculte elementos para animarlos)
  document.documentElement.classList.add('js-enabled');

  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  // 2. Hero Stagger Entrance
  const heroElements = document.querySelectorAll('.hero-text > *');
  heroElements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add('is-visible');
    }, index * 150 + 100);
  });

  // 3. Scroll Reveal
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
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    reveals.forEach((el) => observer.observe(el));
  }
}
