export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export const defaultLang: 'en' | 'es' = 'en';

export const ui = {
  en: {
    // Meta
    'meta.home.title': 'Darlyng Mateo — Software Developer',
    'meta.home.description':
      'Software Developer based in Santo Domingo. Projects, technical interests and writing.',

    // Nav
    'nav.home': 'HOME',
    'nav.work': 'WORK',
    'nav.journal': 'JOURNAL',
    'nav.about': 'ABOUT',
    'nav.contact': 'CONTACT',
    'nav.openMenu': 'Open menu',
    'nav.closeMenu': 'Close menu',
    'nav.toggleTheme': 'Toggle theme',
    'nav.switchLang': 'Switch language',

    // Hero
    'hero.kicker': 'Software Developer · Santo Domingo, Dominican Republic',
    'hero.headline1': 'Building systems.',
    'hero.headline2': 'Understanding',
    'hero.headline3': 'how they work.',
    'hero.description':
      "I'm Darlyng — a developer interested in algorithms, backend engineering and the systems beneath the software we use every day.",
    'hero.cta.projects': 'EXPLORE PROJECTS',
    'hero.cta.journal': 'READ THE JOURNAL',
    'hero.code.statusLeft': 'CURIOUS BY DEFAULT',
    'hero.code.statusRight': 'BUILD / LEARN / REPEAT',

    // Home sections
    'home.work.label': '02 / SELECTED WORK',
    'home.work.title': 'Projects',
    'home.work.subtitle': 'Software built to solve real problems.',
    'home.work.viewAll': 'VIEW ALL PROJECTS',
    'home.about.label': '03 / ABOUT',
    'home.about.title': 'A developer, curious by default.',
    'home.about.body':
      'I care about how systems work underneath — algorithms, backend, and the foundations we often take for granted.',
    'home.about.cta': 'READ MORE ABOUT ME',
    'home.interests.label': '04 / TECHNICAL INTERESTS',
    'home.interests.title': 'Where my attention goes.',
    'home.interests.algorithms': 'Algorithms',
    'home.interests.backend': 'Backend engineering',
    'home.interests.distributed': 'Distributed systems',
    'home.interests.os': 'Operating systems',
    'home.journal.label': '05 / JOURNAL',
    'home.journal.title': 'Notes along the way.',
    'home.journal.body':
      'A technical blog where I write about things I’m learning, systems I’m exploring, and problems worth thinking through.',
    'home.journal.cta': 'OPEN THE JOURNAL',
    'home.contact.label': '06 / CONTACT',
    'home.contact.title': 'Let’s talk.',
    'home.contact.body':
      'Interested in working together or discussing a professional opportunity? Feel free to reach out.',
    'home.contact.cta': 'GET IN TOUCH',

    // Work
    'work.label': '02 / SELECTED WORK',
    'work.title': 'Projects',
    'work.subtitle': 'Software built to solve real problems.',
    'work.description':
      "A selection of projects where I've explored software development, system design and practical problem-solving — from early concepts to applications used in real environments.",
    'work.status.development': 'IN DEVELOPMENT',
    'work.status.past': 'PAST PROJECT',
    'work.status.used': 'USED IN PRODUCTION',
    'work.cta.details': 'View details',
    'work.cta.full': 'Open full project',
    'work.modal.close': 'Close',

    // Project detail
    'project.sections.overview': 'Overview',
    'project.sections.problem': 'The problem',
    'project.sections.tech': 'Technical implementation',
    'project.sections.contribution': 'My contribution',
    'project.sections.results': 'Results & learnings',
    'project.sections.gallery': 'Gallery',
    'project.sections.source': 'Source code',
    'project.back': 'Back to projects',
    'project.pending':
      'Detailed information for this section will be published as it is confirmed.',

    // Journal
    'journal.label': '03 / JOURNAL',
    'journal.title': 'Journal',
    'journal.subtitle': 'Technical notes from the workbench.',
    'journal.empty.title': 'The first article is on its way.',
    'journal.empty.body':
      'This is a temporary state. Real technical articles are being prepared — no filler, no invented posts. Check back soon.',

    // About
    'about.label': '04 / ABOUT',
    'about.title': 'About',
    'about.who.title': 'Who I am',
    'about.who.body':
      "I'm Darlyng Mateo, a Software Developer based in Santo Domingo. I study at the Instituto Politécnico Max Henríquez Ureña and I'm driven by understanding how systems actually work, not only how to build them. I’ve also spent time in competitive programming, which shaped how I think about problems.",
    'about.interests.title': 'Technical interests',
    'about.interests.body':
      'Four areas currently hold most of my attention. They overlap more than they seem to.',
    'about.heading.title': "Where I'm heading",
    'about.heading.body':
      'I want to grow toward high-performance systems and the deeper fundamentals of Computer Science — the parts that stay useful across frameworks and fashions.',

    // Contact
    'contact.label': '05 / CONTACT',
    'contact.title': 'Contact',
    'contact.subtitle': 'Let’s connect.',
    'contact.body':
      'Interested in working together or discussing a professional opportunity? Feel free to reach out. I’m always glad to connect.',
    'contact.email.label': 'Email',
    'contact.github.label': 'GitHub',
    'contact.linkedin.label': 'LinkedIn',

    // Footer
    'footer.copyright': '© {year} Darlyng Mateo',
    'footer.tagline': 'Designed to keep exploring',

    // 404
    'notFound.title': '404',
    'notFound.message':
      "Don't worry, something went wrong — but it wasn't your fault.",
    'notFound.home': 'GO HOME',
    'notFound.work': 'SEE THE WORK',

    // Lang switch
    'lang.en': 'EN',
    'lang.es': 'ES',
  },
  es: {
    'meta.home.title': 'Darlyng Mateo — Software Developer',
    'meta.home.description':
      'Software Developer en Santo Domingo. Proyectos, intereses técnicos y escritura.',

    'nav.home': 'HOME',
    'nav.work': 'PROYECTOS',
    'nav.journal': 'JOURNAL',
    'nav.about': 'SOBRE MÍ',
    'nav.contact': 'CONTACTO',
    'nav.openMenu': 'Abrir menú',
    'nav.closeMenu': 'Cerrar menú',
    'nav.toggleTheme': 'Cambiar tema',
    'nav.switchLang': 'Cambiar idioma',

    'hero.kicker': 'Software Developer · Santo Domingo, República Dominicana',
    'hero.headline1': 'Construir sistemas.',
    'hero.headline2': 'Entender',
    'hero.headline3': 'cómo funcionan.',
    'hero.description':
      'Soy Darlyng — un desarrollador interesado en algoritmos, ingeniería de backend y los sistemas que hay debajo del software que usamos a diario.',
    'hero.cta.projects': 'VER PROYECTOS',
    'hero.cta.journal': 'LEER EL JOURNAL',
    'hero.code.statusLeft': 'CURIOSO POR DEFECTO',
    'hero.code.statusRight': 'CONSTRUIR / APRENDER / REPETIR',

    'home.work.label': '02 / TRABAJO SELECCIONADO',
    'home.work.title': 'Proyectos',
    'home.work.subtitle': 'Software construido para resolver problemas reales.',
    'home.work.viewAll': 'VER TODOS LOS PROYECTOS',
    'home.about.label': '03 / SOBRE MÍ',
    'home.about.title': 'Un desarrollador, curioso por defecto.',
    'home.about.body':
      'Me importa cómo funcionan los sistemas por dentro — algoritmos, backend y los fundamentos que a menudo damos por sentados.',
    'home.about.cta': 'LEER MÁS SOBRE MÍ',
    'home.interests.label': '04 / INTERESES TÉCNICOS',
    'home.interests.title': 'Hacia dónde va mi atención.',
    'home.interests.algorithms': 'Algoritmos',
    'home.interests.backend': 'Ingeniería de backend',
    'home.interests.distributed': 'Sistemas distribuidos',
    'home.interests.os': 'Sistemas operativos',
    'home.journal.label': '05 / JOURNAL',
    'home.journal.title': 'Notas en el camino.',
    'home.journal.body':
      'Un blog técnico donde escribo sobre lo que estoy aprendiendo, sistemas que estoy explorando y problemas que merecen pensarse.',
    'home.journal.cta': 'ABRIR EL JOURNAL',
    'home.contact.label': '06 / CONTACTO',
    'home.contact.title': 'Hablemos.',
    'home.contact.body':
      '¿Te interesa colaborar o conversar sobre una oportunidad profesional? No dudes en escribirme.',
    'home.contact.cta': 'PONERSE EN CONTACTO',

    'work.label': '02 / TRABAJO SELECCIONADO',
    'work.title': 'Proyectos',
    'work.subtitle': 'Software construido para resolver problemas reales.',
    'work.description':
      'Una selección de proyectos en los que he explorado desarrollo de software, diseño de sistemas y resolución práctica de problemas — desde conceptos iniciales hasta aplicaciones usadas en entornos reales.',
    'work.status.development': 'EN DESARROLLO',
    'work.status.past': 'PROYECTO PASADO',
    'work.status.used': 'USADO EN PRODUCCIÓN',
    'work.cta.details': 'Ver más detalles',
    'work.cta.full': 'Ver proyecto completo',
    'work.modal.close': 'Cerrar',

    'project.sections.overview': 'Resumen',
    'project.sections.problem': 'El problema',
    'project.sections.tech': 'Implementación técnica',
    'project.sections.contribution': 'Mi contribución',
    'project.sections.results': 'Resultados y aprendizajes',
    'project.sections.gallery': 'Galería',
    'project.sections.source': 'Código fuente',
    'project.back': 'Volver a proyectos',
    'project.pending':
      'La información detallada de esta sección se publicará a medida que se confirme.',

    'journal.label': '03 / JOURNAL',
    'journal.title': 'Journal',
    'journal.subtitle': 'Notas técnicas desde el taller.',
    'journal.empty.title': 'El primer artículo está en camino.',
    'journal.empty.body':
      'Este es un estado temporal. Se están preparando artículos técnicos reales — sin relleno, sin entradas inventadas. Vuelve pronto.',

    'about.label': '04 / SOBRE MÍ',
    'about.title': 'Sobre mí',
    'about.who.title': 'Quién soy',
    'about.who.body':
      'Soy Darlyng Mateo, Software Developer en Santo Domingo. Estudio en el Instituto Politécnico Max Henríquez Ureña y me mueve entender cómo funcionan los sistemas de verdad, no solo cómo construirlos. También he dedicado tiempo a la programación competitiva, lo que moldeó mi forma de pensar los problemas.',
    'about.interests.title': 'Intereses técnicos',
    'about.interests.body':
      'Cuatro áreas concentran hoy la mayor parte de mi atención. Se solapan más de lo que parece.',
    'about.heading.title': 'Hacia dónde voy',
    'about.heading.body':
      'Quiero crecer hacia sistemas de alto rendimiento y los fundamentos más profundos de Computer Science — las partes que siguen siendo útiles a través de frameworks y modas.',

    'contact.label': '05 / CONTACTO',
    'contact.title': 'Contacto',
    'contact.subtitle': 'Conectemos.',
    'contact.body':
      '¿Te interesa colaborar o conversar sobre una oportunidad profesional? No dudes en escribirme. Siempre será un placer conectar.',
    'contact.email.label': 'Correo',
    'contact.github.label': 'GitHub',
    'contact.linkedin.label': 'LinkedIn',

    'footer.copyright': '© {year} Darlyng Mateo',
    'footer.tagline': 'Diseñado para seguir explorando',

    'notFound.title': '404',
    'notFound.message': 'Tranquilo, algo falló, pero no fue tu culpa.',
    'notFound.home': 'IR AL INICIO',
    'notFound.work': 'VER EL TRABAJO',

    'lang.en': 'EN',
    'lang.es': 'ES',
  },
} as const;

export type UIKey = keyof typeof ui[typeof defaultLang];
