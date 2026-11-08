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
      "I'm Darlyng Mateo, a Software Developer in Santo Domingo, Dominican Republic, interested in algorithms, backend engineering and the systems beneath the software we use every day.",
    'meta.work.title': 'Projects — Darlyng Mateo',
    'meta.work.description':
      "A selection of projects where I've explored software development, system design and practical problem-solving — from early concepts to applications used in real environments.",
    'meta.journal.title': 'Journal — Darlyng Mateo',
    'meta.journal.description':
      'Technical articles, ideas and explorations about software development and computer science.',
    'meta.about.title': 'About — Darlyng Mateo',
    'meta.about.description':
      "I'm Darlyng Mateo, a software developer from Santo Domingo, Dominican Republic, studying Application Development and Administration at IPMHU.",
    'meta.certificates.title': 'Certificates & Credentials — Darlyng Mateo',
    'meta.certificates.description':
      'A collection of certifications and learning achievements that document my progress and technical development.',
    'meta.beyond.title': 'Beyond Code — Darlyng Mateo',
    'meta.beyond.description':
      "There's more to curiosity than code. Ideas, books, reflections and interests that shape the way I see the world beyond software.",
    'meta.contact.title': 'Contact — Darlyng Mateo',
    'meta.contact.description':
      "Interested in working together or discussing a professional opportunity? Feel free to reach out. I'm always glad to connect.",

    // Nav
    'nav.home': 'HOME',
    'nav.work': 'WORK',
    'nav.journal': 'JOURNAL',
    'nav.about': 'ABOUT',
    'nav.contact': 'CONTACT',
    'nav.certificates': 'CERTIFICATES',
    'nav.beyond': 'BEYOND CODE',
    'nav.openMenu': 'Open menu',
    'nav.closeMenu': 'Close menu',
    'nav.toggleTheme': 'Toggle theme',
    'nav.switchLang': 'Switch language',

    // Hero
    'hero.kicker': 'Software Developer · Santo Domingo, Dominican Republic',
    'hero.headline': 'Building systems. Understanding how they work.',
    'hero.headline1': 'Building systems.',
    'hero.headline2': 'Understanding',
    'hero.headline3': 'how they work.',
    'hero.description':
      "I'm Darlyng — a developer interested in algorithms, backend engineering and the systems beneath the software we use every day.",
    'hero.cta.projects': 'EXPLORE PROJECTS',
    'hero.cta.journal': 'READ THE JOURNAL',
    'hero.code.file': 'competitive.cpp',
    'hero.code.lang': 'C++17',
    'hero.code.run': 'Run snippet',
    'hero.code.outputLabel': 'stdout',
    'hero.code.statusLeft': 'CURIOUS BY DEFAULT',
    'hero.code.statusRight': 'BUILD · LEARN · REPEAT',

    // Home sections
    'home.work.label': '02 / SELECTED WORK',
    'home.work.title': 'Projects',
    'home.work.subtitle': 'Software built to solve real problems.',
    'home.work.viewAll': 'VIEW ALL PROJECTS',

    'home.about.label': '03 / ABOUT',
    'home.about.title': 'Curious about what happens beneath the surface.',
    'home.about.body':
      "I'm a software developer from Santo Domingo, currently studying Application Development and Administration at Instituto Politécnico Max Henríquez Ureña (IPMHU). Beyond building interfaces, I'm drawn to how algorithms solve problems, how backend systems manage data, and how components integrate into reliable software.",
    'home.about.cta': 'READ FULL PROFILE',

    'home.interests.label': '04 / TECHNICAL INTERESTS',
    'home.interests.title': 'Areas I am exploring and studying.',
    'home.interests.subtitle':
      'Foundational topics in computer science and software engineering where I focus my learning.',
    'home.interests.algorithms': 'Algorithms & Competitive Programming',
    'home.interests.algorithms.desc':
      'Problem-solving, algorithm design and computational thinking.',
    'home.interests.backend': 'Backend Engineering',
    'home.interests.backend.desc':
      'Server-side architecture, APIs, databases and application logic.',
    'home.interests.distributed': 'Distributed Systems',
    'home.interests.distributed.desc':
      'Communication, coordination and scalability across interconnected systems.',
    'home.interests.os': 'Operating Systems',
    'home.interests.os.desc':
      'Processes, memory, resource management and the software beneath applications.',

    'home.certificates.label': '05 / CREDENTIALS',
    'home.certificates.title': 'Certificates & Credentials',
    'home.certificates.subtitle':
      'A collection of certifications and learning achievements that document my progress and technical development.',
    'home.certificates.cta': 'VIEW ALL CERTIFICATES',

    'home.journal.label': '06 / JOURNAL',
    'home.journal.title': 'Technical articles & explorations.',
    'home.journal.body':
      'A dedicated space for technical articles, ideas and explorations about software development, backend architecture and computer science fundamentals.',
    'home.journal.cta': 'VISIT THE JOURNAL',

    'home.beyond.label': '07 / BEYOND CODE',
    'home.beyond.title': "There's more to curiosity than code.",
    'home.beyond.body':
      'A personal space for the ideas, books, reflections and perspectives that shape how I see the world beyond software.',
    'home.beyond.cta': 'DISCOVER BEYOND CODE',

    'home.contact.label': '08 / CONTACT',
    'home.contact.title': 'Get in touch.',
    'home.contact.body':
      "Interested in working together or discussing a professional opportunity? Feel free to reach out. I'm always glad to connect.",
    'home.contact.cta': 'CONTACT ME',

    // Work
    'work.label': '02 / SELECTED WORK',
    'work.title': 'Projects',
    'work.subtitle': 'Software built to solve real problems.',
    'work.description':
      "A selection of projects where I've explored software development, system design and practical problem-solving — from early concepts to applications used in real environments.",
    'work.status.pilot': 'MVP · READY FOR PILOT',
    'work.status.past': 'PAST PROJECT',
    'work.status.completed': 'USED IN SCHOOL FAIR',
    'work.status.development': 'IN DEVELOPMENT',
    'work.status.used': 'USED IN PRODUCTION',
    'work.cta.details': 'QUICK SUMMARY',
    'work.cta.full': 'VIEW FULL PROJECT',
    'work.modal.close': 'Close modal',
    'work.modal.architecture': 'Key Highlights',
    'work.modal.tech': 'Technologies Used',

    // Project detail
    'project.sections.overview': 'Overview',
    'project.sections.problem': 'The problem',
    'project.sections.tech': 'Technologies used',
    'project.sections.contribution': 'My contribution',
    'project.sections.results': 'Results & learnings',
    'project.sections.gallery': 'System Architecture & Visuals',
    'project.sections.source': 'Source code',
    'project.back': 'BACK TO WORK',
    'project.next': 'Next project',
    'project.prev': 'Previous project',
    'project.pending':
      'Detailed technical documentation for this section will be incorporated once confirmed.',

    // Journal
    'journal.label': '03 / JOURNAL',
    'journal.title': 'Journal',
    'journal.subtitle':
      'Technical articles, ideas and explorations about software development and computer science.',
    'journal.empty.title': 'Nothing published yet.',
    'journal.empty.body':
      "I'm working on the ideas and technical explorations that will appear here. Check back soon.",
    'journal.upcoming.label': 'PLANNED EXPLORATION AREAS',
    'journal.upcoming.t1': 'Algorithmic Problem Solving & Complexity',
    'journal.upcoming.t2': 'Backend Architecture & Relational Data Modeling',
    'journal.upcoming.t3': 'Systems Programming & OS Internals',

    // About
    'about.label': '04 / ABOUT',
    'about.title': 'About',
    'about.subtitle': 'Profile, academic formation and technical direction.',
    'about.who.title': 'Who I am',
    'about.who.p1':
      "I'm Darlyng Mateo, a software developer from Santo Domingo, Dominican Republic, currently studying Application Development and Administration at Instituto Politécnico Max Henríquez Ureña.",
    'about.who.p2':
      "My interest in software development goes beyond building applications. I'm curious about how things work beneath the surface: how algorithms solve problems, how backend systems handle information, and how different components come together to form reliable software.",
    'about.who.p3':
      "I've worked on projects involving web development, databases and backend systems, learning to approach problems through experimentation, problem-solving and continuous improvement.",
    'about.who.p4':
      "I'm still developing my foundations, exploring new areas of computer science and looking for opportunities to build more meaningful and technically challenging software.",
    'about.who.body':
      "I'm Darlyng Mateo, a software developer from Santo Domingo, Dominican Republic, currently studying Application Development and Administration at Instituto Politécnico Max Henríquez Ureña.",
    'about.photo.caption': 'Editorial technical study · Personal portrait pending',
    'about.education.label': 'ACADEMIC FORMATION',
    'about.education.institution': 'Instituto Politécnico Max Henríquez Ureña (IPMHU)',
    'about.education.program': 'Application Development and Administration',
    'about.education.graduation': 'Expected graduation: 2028',
    'about.languages.label': 'LANGUAGES',
    'about.languages.es': 'Spanish — Native',
    'about.languages.en': 'English — B1',
    'about.interests.label': 'AREAS I AM EXPLORING',
    'about.interests.title': 'Technical interests',
    'about.interests.body':
      'Areas of study and continuous learning that guide my technical growth.',
    'about.heading.label': 'LONG-TERM DIRECTION',
    'about.heading.title': "Where I'm heading",
    'about.heading.p1':
      'My long-term goal is to develop a deeper understanding of computer science and work on systems where performance, reliability and thoughtful engineering really matter.',
    'about.heading.p2':
      "I'm particularly drawn to high-performance backend systems, distributed computing and operating systems. For now, I'm focused on strengthening my fundamentals, learning through challenging problems and building the experience needed to explore these areas further.",
    'about.heading.body':
      'My long-term goal is to develop a deeper understanding of computer science and work on systems where performance, reliability and thoughtful engineering really matter.',
    'about.beyond.prompt': 'Want to know more about who I am beyond code?',
    'about.beyond.cta': 'DISCOVER BEYOND CODE',

    // Skills
    'skills.label': 'TOOLS & TECHNOLOGIES',
    'skills.title': "Technologies I've worked with",
    'skills.subtitle':
      'A sober overview of the languages, tools and environments I have used across academic and personal projects.',
    'skills.languages': 'Programming languages',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.databases': 'Databases',
    'skills.tools': 'Tools & environment',

    // Certificates
    'certificates.label': '05 / CREDENTIALS',
    'certificates.title': 'Certificates & Credentials',
    'certificates.subtitle':
      'A collection of certifications and learning achievements that document my progress and technical development.',
    'certificates.verified': 'OFFICIAL DOCUMENT',
    'certificates.issuer': 'Issuing Organization',
    'certificates.issued': 'Issued Date',
    'certificates.expires': 'Valid Until',
    'certificates.duration': 'Duration',
    'certificates.hours': 'hours',
    'certificates.view': 'OPEN ORIGINAL PDF',
    'certificates.preview': 'PREVIEW DOCUMENT',
    'certificates.expand': 'CLICK TO EXPAND',
    'certificates.download': 'DOWNLOAD PDF',
    'certificates.credentialId': 'Credential ID',
    'certificates.empty': 'Certificates will be published soon.',

    // Beyond Code
    'beyond.label': 'BEYOND CODE',
    'beyond.title': "There's more to curiosity than code.",
    'beyond.subtitle':
      'This is a space for the ideas, books, reflections and interests that shape the way I see the world beyond software.',
    'beyond.status.label': 'SECTION IN CURATION',
    'beyond.status.title': 'Personal notes and reflections in preparation.',
    'beyond.status.body':
      'While the Journal focuses on software engineering and computer science, Beyond Code is reserved for personal perspectives, reading notes and ideas outside of programming. Content will be published here as I curate the topics I want to share.',
    'beyond.pillar1.title': 'Reading & Ideas',
    'beyond.pillar1.desc': 'Notes on books, essays and concepts that spark curiosity outside technical manuals.',
    'beyond.pillar2.title': 'Perspectives',
    'beyond.pillar2.desc': 'Reflections on learning, discipline and observing how everyday systems work.',
    'beyond.pillar3.title': 'Interests',
    'beyond.pillar3.desc': 'Personal explorations and creative interests beyond the code editor.',
    'beyond.backHome': 'RETURN TO HOME',
    'beyond.backAbout': 'BACK TO ABOUT',

    // Contact
    'contact.label': '05 / CONTACT',
    'contact.title': 'Contact',
    'contact.subtitle': 'Direct communication and professional profiles.',
    'contact.body':
      "Interested in working together or discussing a professional opportunity? Feel free to reach out. I'm always glad to connect.",
    'contact.email.label': 'PRIMARY EMAIL',
    'contact.email.cta': 'SEND EMAIL',
    'contact.email.copy': 'COPY ADDRESS',
    'contact.email.copied': 'COPIED TO CLIPBOARD',
    'contact.github.label': 'GITHUB',
    'contact.github.desc': 'Source code, repositories and technical explorations.',
    'contact.linkedin.label': 'LINKEDIN',
    'contact.linkedin.desc': 'Professional profile, academic background and connections.',
    'contact.location.label': 'LOCATION',
    'contact.cv.label': 'CURRICULUM VITAE',
    'contact.cv.desc': 'Official resume detailing projects, system architecture and technical experience.',
    'about.cv.label': 'CURRICULUM VITAE',
    'about.cv.title': 'Curriculum Vitae',
    'about.cv.desc': 'Technical resume summarizing project experience, technologies and education.',
    'about.cv.download': 'DOWNLOAD CV (PDF)',
    'about.cv.view': 'VIEW CV (PDF)',
    'about.cv.en': 'English CV',
    'about.cv.es': 'Spanish CV',

    // Footer
    'footer.copyright': '© {year} Darlyng Mateo',
    'footer.tagline': 'Santo Domingo, DR',

    // 404
    'notFound.title': '404',
    'notFound.heading': "This page doesn't exist.",
    'notFound.message':
      "Don't worry, something went wrong — but it wasn't your fault.",
    'notfound.message':
      "Don't worry, something went wrong — but it wasn't your fault.",
    'notFound.home': 'BACK TO HOME',
    'notFound.work': 'EXPLORE WORK',

    // Lang switch
    'lang.en': 'EN',
    'lang.es': 'ES',
  },
  es: {
    // Meta
    'meta.home.title': 'Darlyng Mateo — Software Developer',
    'meta.home.description':
      'Soy Darlyng Mateo, desarrollador de software en Santo Domingo, República Dominicana, interesado en algoritmos, ingeniería backend y los sistemas detrás del software.',
    'meta.work.title': 'Proyectos — Darlyng Mateo',
    'meta.work.description':
      'Una selección de proyectos en los que he explorado el desarrollo de software, el diseño de sistemas y la resolución de problemas prácticos.',
    'meta.journal.title': 'Journal — Darlyng Mateo',
    'meta.journal.description':
      'Artículos técnicos, ideas y exploraciones sobre desarrollo de software y ciencias de la computación.',
    'meta.about.title': 'Sobre mí — Darlyng Mateo',
    'meta.about.description':
      'Soy Darlyng Mateo, desarrollador de software de Santo Domingo, República Dominicana. Estudiante en el Instituto Politécnico Max Henríquez Ureña (IPMHU).',
    'meta.certificates.title': 'Certificaciones y credenciales — Darlyng Mateo',
    'meta.certificates.description':
      'Una colección de certificaciones y logros formativos que documentan mi progreso y desarrollo técnico.',
    'meta.beyond.title': 'Beyond Code — Darlyng Mateo',
    'meta.beyond.description':
      'La curiosidad va más allá del código. Un espacio para las ideas, los libros, las reflexiones y los intereses más allá del software.',
    'meta.contact.title': 'Contacto — Darlyng Mateo',
    'meta.contact.description':
      '¿Te interesa colaborar o conversar sobre una oportunidad profesional? No dudes en escribirme. Siempre será un placer conectar.',

    // Nav
    'nav.home': 'HOME',
    'nav.work': 'WORK',
    'nav.journal': 'JOURNAL',
    'nav.about': 'ABOUT',
    'nav.contact': 'CONTACT',
    'nav.certificates': 'CERTIFICADOS',
    'nav.beyond': 'BEYOND CODE',
    'nav.openMenu': 'Abrir menú',
    'nav.closeMenu': 'Cerrar menú',
    'nav.toggleTheme': 'Cambiar tema',
    'nav.switchLang': 'Cambiar idioma',

    // Hero
    'hero.kicker': 'Software Developer · Santo Domingo, República Dominicana',
    'hero.headline1': 'Construyendo sistemas.',
    'hero.headline2': 'Entendiendo',
    'hero.headline3': 'cómo funcionan.',
    'hero.description':
      'Soy Darlyng — un desarrollador interesado en los algoritmos, la ingeniería backend y los sistemas que funcionan debajo del software que usamos todos los días.',
    'hero.cta.projects': 'EXPLORAR PROYECTOS',
    'hero.cta.journal': 'LEER EL JOURNAL',
    'hero.code.file': 'competitive.cpp',
    'hero.code.lang': 'C++17',
    'hero.code.run': 'Ejecutar código',
    'hero.code.outputLabel': 'stdout',
    'hero.code.statusLeft': 'CURIOSO POR DEFECTO',
    'hero.code.statusRight': 'CONSTRUIR · APRENDER · REPETIR',

    // Home sections
    'home.work.label': '02 / PROYECTOS SELECCIONADOS',
    'home.work.title': 'Proyectos',
    'home.work.subtitle': 'Software creado para resolver problemas reales.',
    'home.work.viewAll': 'VER TODOS LOS PROYECTOS',

    'home.about.label': '03 / SOBRE MÍ',
    'home.about.title': 'Curiosidad por comprender lo que ocurre detrás.',
    'home.about.body':
      'Soy desarrollador de software de Santo Domingo y actualmente estudio Desarrollo y Administraciones de Aplicaciones Informáticas en el Instituto Politécnico Max Henríquez Ureña (IPMHU). Más allá de construir aplicaciones, me interesa cómo los algoritmos resuelven problemas y cómo los sistemas backend gestionan la información.',
    'home.about.cta': 'CONOCER MÁS SOBRE MÍ',

    'home.interests.label': '04 / INTERESES TÉCNICOS',
    'home.interests.title': 'Áreas de estudio y aprendizaje.',
    'home.interests.subtitle':
      'Fundamentos de ciencias de la computación e ingeniería de software en los que enfoco mi formación.',
    'home.interests.algorithms': 'Algoritmos y Programación Competitiva',
    'home.interests.algorithms.desc':
      'Resolución de problemas, diseño de algoritmos y pensamiento computacional.',
    'home.interests.backend': 'Ingeniería Backend',
    'home.interests.backend.desc':
      'Arquitectura del lado del servidor, APIs, bases de datos y lógica de aplicaciones.',
    'home.interests.distributed': 'Sistemas Distribuidos',
    'home.interests.distributed.desc':
      'Comunicación, coordinación y escalabilidad entre sistemas interconectados.',
    'home.interests.os': 'Sistemas Operativos',
    'home.interests.os.desc':
      'Procesos, memoria, administración de recursos y el software que funciona debajo de las aplicaciones.',

    'home.certificates.label': '05 / CREDENCIALES',
    'home.certificates.title': 'Certificaciones y credenciales',
    'home.certificates.subtitle':
      'Una colección de certificaciones y logros formativos que documentan mi progreso y desarrollo técnico.',
    'home.certificates.cta': 'VER CERTIFICACIONES',

    'home.journal.label': '06 / JOURNAL',
    'home.journal.title': 'Artículos técnicos y exploraciones.',
    'home.journal.body':
      'Un espacio dedicado a publicar artículos técnicos, ideas y exploraciones sobre desarrollo de software y ciencias de la computación.',
    'home.journal.cta': 'VISITAR EL JOURNAL',

    'home.beyond.label': '07 / BEYOND CODE',
    'home.beyond.title': 'La curiosidad va más allá del código.',
    'home.beyond.body':
      'Un espacio para las ideas, los libros, las reflexiones y los intereses que influyen en mi forma de ver el mundo más allá del software.',
    'home.beyond.cta': 'DESCUBRE BEYOND CODE',

    'home.contact.label': '08 / CONTACTO',
    'home.contact.title': 'Contacto directo.',
    'home.contact.body':
      '¿Te interesa colaborar o conversar sobre una oportunidad profesional? No dudes en escribirme. Siempre será un placer conectar.',
    'home.contact.cta': 'CONTACTAR',

    // Work
    'work.label': '02 / PROYECTOS SELECCIONADOS',
    'work.title': 'Proyectos',
    'work.subtitle': 'Software creado para resolver problemas reales.',
    'work.description':
      'Una selección de proyectos en los que he explorado el desarrollo de software, el diseño de sistemas y la resolución de problemas prácticos, desde primeras ideas hasta aplicaciones utilizadas en entornos reales.',
    'work.status.pilot': 'MVP · LISTO PARA PILOTO',
    'work.status.past': 'PROYECTO ANTERIOR',
    'work.status.completed': 'USADO EN FERIA ESCOLAR',
    'work.status.development': 'EN DESARROLLO',
    'work.status.used': 'USADO EN PRODUCCIÓN',
    'work.cta.details': 'RESUMEN RÁPIDO',
    'work.cta.full': 'VER PROYECTO COMPLETO',
    'work.modal.close': 'Cerrar ventana',
    'work.modal.architecture': 'Puntos clave',
    'work.modal.tech': 'Tecnologías utilizadas',

    // Project detail
    'project.sections.overview': 'Descripción general',
    'project.sections.problem': 'El problema',
    'project.sections.tech': 'Tecnologías utilizadas',
    'project.sections.contribution': 'Mi contribución',
    'project.sections.results': 'Resultados y aprendizajes',
    'project.sections.gallery': 'Arquitectura del sistema y esquema visual',
    'project.sections.source': 'Código fuente',
    'project.back': 'VOLVER A PROYECTOS',
    'project.next': 'Siguiente proyecto',
    'project.prev': 'Proyecto anterior',
    'project.pending':
      'La información técnica detallada de esta sección se incorporará cuando sea confirmada.',

    // Journal
    'journal.label': '03 / JOURNAL',
    'journal.title': 'Journal',
    'journal.subtitle':
      'Artículos técnicos, ideas y exploraciones sobre desarrollo de software y ciencias de la computación.',
    'journal.empty.title': 'Todavía no hay publicaciones.',
    'journal.empty.body':
      'Estoy trabajando en las ideas y exploraciones técnicas que aparecerán aquí. Vuelve pronto.',
    'journal.upcoming.label': 'LÍNEAS DE EXPLORACIÓN PREVISTAS',
    'journal.upcoming.t1': 'Diseño de algoritmos y resolución de problemas',
    'journal.upcoming.t2': 'Arquitectura backend y modelado de bases de datos',
    'journal.upcoming.t3': 'Sistemas operativos y fundamentos de bajo nivel',

    // About
    'about.label': '04 / SOBRE MÍ',
    'about.title': 'Sobre mí',
    'about.subtitle': 'Perfil, formación académica y dirección técnica.',
    'about.who.title': 'Quién soy',
    'about.who.p1':
      'Soy Darlyng Mateo, desarrollador de software de Santo Domingo, República Dominicana. Actualmente estudio Desarrollo y Administraciones de Aplicaciones Informáticas en el Instituto Politécnico Max Henríquez Ureña.',
    'about.who.p2':
      'Mi interés por el desarrollo de software va más allá de construir aplicaciones. Me da curiosidad comprender lo que ocurre detrás de ellas: cómo los algoritmos resuelven problemas, cómo los sistemas backend gestionan información y cómo distintos componentes se integran para construir software confiable.',
    'about.who.p3':
      'He trabajado en proyectos relacionados con desarrollo web, bases de datos y sistemas backend, aprendiendo a abordar problemas mediante la experimentación, la resolución de problemas y la mejora continua.',
    'about.who.p4':
      'Todavía estoy fortaleciendo mis fundamentos, explorando nuevas áreas de las ciencias de la computación y buscando oportunidades para construir software cada vez más interesante y técnicamente exigente.',
    'about.who.body':
      'Soy Darlyng Mateo, desarrollador de software de Santo Domingo, República Dominicana. Actualmente estudio Desarrollo y Administraciones de Aplicaciones Informáticas en el Instituto Politécnico Max Henríquez Ureña.',
    'about.photo.caption': 'Estudio técnico editorial · Fotografía personal pendiente',
    'about.education.label': 'FORMACIÓN ACADÉMICA',
    'about.education.institution': 'Instituto Politécnico Max Henríquez Ureña (IPMHU)',
    'about.education.program': 'Desarrollo y Administraciones de Aplicaciones Informáticas',
    'about.education.graduation': 'Graduación esperada: 2028',
    'about.languages.label': 'IDIOMAS',
    'about.languages.es': 'Español — Nativo',
    'about.languages.en': 'Inglés — B1',
    'about.interests.label': 'ÁREAS QUE EXPLORO',
    'about.interests.title': 'Intereses técnicos',
    'about.interests.body':
      'Áreas de estudio y aprendizaje continuo que guían mi crecimiento técnico.',
    'about.heading.label': 'DIRECCIÓN A LARGO PLAZO',
    'about.heading.title': 'Hacia dónde voy',
    'about.heading.p1':
      'Mi objetivo a largo plazo es desarrollar una comprensión más profunda de las ciencias de la computación y trabajar en sistemas donde el rendimiento, la confiabilidad y las decisiones de ingeniería realmente importen.',
    'about.heading.p2':
      'Me interesan especialmente los sistemas backend de alto rendimiento, la computación distribuida y los sistemas operativos. Por ahora, estoy enfocado en fortalecer mis fundamentos, aprender mediante problemas exigentes y adquirir la experiencia necesaria para profundizar en estas áreas.',
    'about.heading.body':
      'Mi objetivo a largo plazo es desarrollar una comprensión más profunda de las ciencias de la computación y trabajar en sistemas donde el rendimiento, la confiabilidad y las decisiones de ingeniería realmente importen.',
    'about.beyond.prompt': '¿Quieres conocer más sobre quién soy más allá del código?',
    'about.beyond.cta': 'DESCUBRE BEYOND CODE',

    // Skills
    'skills.label': 'HERRAMIENTAS Y TECNOLOGÍAS',
    'skills.title': 'Tecnologías con las que he trabajado',
    'skills.subtitle':
      'Una presentación clara y honesta de los lenguajes, herramientas y entornos que he utilizado en proyectos académicos y personales.',
    'skills.languages': 'Lenguajes de programación',
    'skills.frontend': 'Frontend',
    'skills.backend': 'Backend',
    'skills.databases': 'Bases de datos',
    'skills.tools': 'Herramientas y entorno',

    // Certificates
    'certificates.label': '05 / CREDENCIALES',
    'certificates.title': 'Certificaciones y credenciales',
    'certificates.subtitle':
      'Una colección de certificaciones y logros formativos que documentan mi progreso y desarrollo técnico.',
    'certificates.verified': 'DOCUMENTO OFICIAL',
    'certificates.issuer': 'Organización emisora',
    'certificates.issued': 'Fecha de emisión',
    'certificates.expires': 'Válido hasta',
    'certificates.duration': 'Duración',
    'certificates.hours': 'horas',
    'certificates.view': 'ABRIR PDF ORIGINAL',
    'certificates.preview': 'VISTA PREVIA',
    'certificates.expand': 'AMPLIAR VISTA',
    'certificates.download': 'DESCARGAR PDF',
    'certificates.credentialId': 'ID de credencial',
    'certificates.empty': 'Las certificaciones se publicarán próximamente.',

    // Beyond Code
    'beyond.label': 'BEYOND CODE',
    'beyond.title': 'La curiosidad va más allá del código.',
    'beyond.subtitle':
      'Este es un espacio para las ideas, los libros, las reflexiones y los intereses que influyen en mi forma de ver el mundo más allá del software.',
    'beyond.status.label': 'SECCIÓN EN CURADURÍA',
    'beyond.status.title': 'Notas y reflexiones personales en preparación.',
    'beyond.status.body':
      'Mientras el Journal se enfoca en ingeniería de software y ciencias de la computación, Beyond Code está reservado para mis perspectivas personales, lecturas e ideas fuera de la programación. El contenido detallado se publicará a medida que seleccione los temas que quiero compartir.',
    'beyond.pillar1.title': 'Lecturas e ideas',
    'beyond.pillar1.desc': 'Notas sobre libros, ensayos y conceptos que despiertan curiosidad más allá de los manuales técnicos.',
    'beyond.pillar2.title': 'Perspectivas',
    'beyond.pillar2.desc': 'Reflexiones sobre el aprendizaje, la disciplina y la observación de sistemas en el mundo cotidiano.',
    'beyond.pillar3.title': 'Intereses personales',
    'beyond.pillar3.desc': 'Exploraciones e inquietudes personales fuera del editor de código.',
    'beyond.backHome': 'VOLVER A INICIO',
    'beyond.backAbout': 'VOLVER A SOBRE MÍ',

    // Contact
    'contact.label': '05 / CONTACTO',
    'contact.title': 'Contacto',
    'contact.subtitle': 'Comunicación directa y perfiles profesionales.',
    'contact.body':
      '¿Te interesa colaborar o conversar sobre una oportunidad profesional? No dudes en escribirme. Siempre será un placer conectar.',
    'contact.email.label': 'CORREO PRINCIPAL',
    'contact.email.cta': 'ENVIAR CORREO',
    'contact.email.copy': 'COPIAR CORREO',
    'contact.email.copied': 'COPIADO AL PORTAPAPELES',
    'contact.github.label': 'GITHUB',
    'contact.github.desc': 'Código fuente, repositorios y exploraciones técnicas.',
    'contact.linkedin.label': 'LINKEDIN',
    'contact.linkedin.desc': 'Perfil profesional, formación académica y red de contactos.',
    'contact.location.label': 'UBICACIÓN',
    'contact.cv.label': 'CURRICULUM VITAE',
    'contact.cv.desc': 'Currículum oficial detallando proyectos, arquitectura de sistemas y experiencia técnica.',
    'about.cv.label': 'CURRICULUM VITAE',
    'about.cv.title': 'Curriculum Vitae',
    'about.cv.desc': 'Resumen técnico con experiencia en proyectos, tecnologías y formación académica.',
    'about.cv.download': 'DESCARGAR CV (PDF)',
    'about.cv.view': 'VER CV (PDF)',
    'about.cv.en': 'CV en inglés',
    'about.cv.es': 'CV en español',

    // Footer
    'footer.copyright': '© {year} Darlyng Mateo',
    'footer.tagline': 'Santo Domingo, RD',

    // 404
    'notFound.title': '404',
    'notFound.heading': 'Esta página no existe.',
    'notFound.message': 'Tranquilo, algo falló, pero no fue tu culpa.',
    'notfound.message': 'Tranquilo, algo falló, pero no fue tu culpa.',
    'notFound.home': 'VOLVER A HOME',
    'notFound.work': 'EXPLORAR PROYECTOS',

    // Lang switch
    'lang.en': 'EN',
    'lang.es': 'ES',
  },
} as const;

export type UIKey = keyof typeof ui[typeof defaultLang];
