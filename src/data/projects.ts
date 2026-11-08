import type { Project } from '../types';

export const projects: Project[] = [
  /* ============================== CORO ============================== */
  {
    slug: 'coro',
    status: 'pilot',
    title: 'CORO',
    category: {
      en: 'Youth Civic Participation Platform',
      es: 'Plataforma de Participación Ciudadana Juvenil',
    },
        image: '/images/projects/coro-thumb.png',
    tagline: {
      en: 'A civic participation platform connecting young people with public institutions through traceable community reports and institutional responses.',
      es: 'Una plataforma de participación ciudadana que conecta a los jóvenes con las instituciones públicas mediante reportes comunitarios y respuestas institucionales trazables.',
    },
    description: {
      en: 'A civic participation platform connecting young people with public institutions through traceable community reports and institutional responses.',
      es: 'Una plataforma de participación ciudadana que conecta a los jóvenes con las instituciones públicas mediante reportes comunitarios y respuestas institucionales trazables.',
    },
    tech: ['Android MVP', 'Institutional Web Panel', 'CORO Campo (Offline-First)', 'Public Dashboard'],
    sections: [
      {
        title: { en: 'Overview', es: 'Descripción general' },
        body: {
          en: 'CORO is a youth civic participation platform designed to connect citizens with public institutions through a transparent, traceable process. Rather than becoming another social network for complaints, CORO gives young people a way to document real problems in their communities, propose solutions and follow the institutional response. The platform is designed to turn isolated complaints into organized participation with visible outcomes.',
          es: 'CORO es una plataforma de participación ciudadana juvenil diseñada para conectar a las personas con las instituciones públicas mediante un proceso transparente y trazable. En lugar de convertirse en otra red social de quejas, CORO ofrece a los jóvenes una forma de documentar problemas reales de sus comunidades, proponer soluciones y dar seguimiento a las respuestas institucionales. La plataforma busca transformar las quejas aisladas en participación organizada con resultados visibles.',
        },
      },
      {
        title: { en: 'The problem', es: 'El problema' },
        body: {
          en: 'CORO addresses youth political apathy and the lack of tangible civic impact. A complaint on social media often disappears without a response or a structured path forward. The central idea is that participation is fostered by demonstrating visible outcomes — bridging the gap between expressing a community issue (such as potholes, uncollected waste or water leaks) and an organized process that leads to an institutional response.',
          es: 'CORO busca abordar la apatía política juvenil y la falta de incidencia real. Una queja en redes sociales suele desaparecer sin respuesta ni seguimiento organizado. La idea central es demostrar que participar puede producir consecuencias visibles, cerrando la brecha entre reportar problemas comunitarios (baches, basura, fugas de agua) y un proceso estructurado que concluya en una respuesta institucional.',
        },
      },
      {
        title: { en: 'Target audiences', es: 'Públicos principales' },
        items: [
          {
            title: { en: 'Citizens', es: 'Ciudadanos' },
            body: {
              en: 'Primarily young people and communities who report local problems, join existing causes, participate in consultations and votes, and track the status of their reports.',
              es: 'Principalmente jóvenes y comunidades que pueden reportar problemas, unirse a causas existentes, participar en votaciones y consultas, y consultar el estado de sus reportes.',
            },
          },
          {
            title: { en: 'Public institutions', es: 'Instituciones' },
            body: {
              en: 'Municipal governments, ministries and public entities that receive reports, manage cases, assign priorities, dispatch cases to field brigades, and record institutional responses.',
              es: 'Ayuntamientos, ministerios y otras instituciones públicas que pueden recibir reportes, gestionar casos, asignar prioridades, derivar casos a brigadas y registrar respuestas.',
            },
          },
          {
            title: { en: 'Field brigades', es: 'Brigadas de campo' },
            body: {
              en: 'Municipal operators working on the ground who check assigned cases, execute interventions, document work and upload before-and-after evidence.',
              es: 'Operarios municipales en el terreno que pueden consultar casos asignados, ejecutar trabajos, documentar intervenciones y subir evidencias del antes y después.',
            },
          },
        ],
      },
      {
        title: { en: 'How it works: Traceability cycle', es: 'Cómo funciona: Ciclo de trazabilidad' },
        ordered: true,
        items: [
          {
            title: { en: 'Report', es: 'Reporte' },
            body: {
              en: 'A citizen uses the Android application to take a photograph, geolocate the problem and describe it. If a similar nearby case already exists, the application can suggest joining the existing case instead of creating a duplicate.',
              es: 'Un joven utiliza la aplicación Android para tomar una fotografía, geolocalizar el problema y describirlo. Si ya existe un caso similar cerca, la aplicación puede sugerir sumarse al caso existente en lugar de crear un duplicado.',
            },
          },
          {
            title: { en: 'Management', es: 'Gestión' },
            body: {
              en: 'The municipality receives the report in a web dashboard, where it can review the case, assign priority and dispatch it to a field brigade.',
              es: 'El ayuntamiento recibe el reporte en un panel web. Desde allí puede revisar el caso, asignar prioridad y derivarlo a una brigada.',
            },
          },
          {
            title: { en: 'Field execution', es: 'Ejecución en campo' },
            body: {
              en: 'Brigades use CORO Campo, an application designed to operate even without an internet connection, allowing operators to attend cases and upload before-and-after evidence.',
              es: 'Las brigadas utilizan CORO Campo, diseñada para funcionar incluso sin conexión a internet. Los operarios pueden atender los casos y subir evidencias del antes y después.',
            },
          },
          {
            title: { en: 'Validation', es: 'Validación' },
            body: {
              en: 'The institution validates the intervention and the case transitions to the Resolved state.',
              es: 'La institución valida la solución y el caso pasa al estado Resuelto.',
            },
          },
          {
            title: { en: 'Transparency', es: 'Transparencia' },
            body: {
              en: 'Citizens follow the case status from their phones, while a public dashboard displays what was reported, which institutions responded, deadline compliance and cases marked as overdue without response.',
              es: 'El ciudadano sigue el estado del caso desde su teléfono, y un tablero público muestra qué se reportó, qué instituciones respondieron, cumplimiento de plazos y casos vencidos sin respuesta.',
            },
          },
        ],
      },
      {
        title: { en: 'Operational response timeframe', es: 'Plazo institucional operativo' },
        body: {
          en: 'The operational model proposes a 15-day response timeframe. When an institution does not respond within that period, the case can appear on the public dashboard as Overdue without response (Vencido sin respuesta).',
          es: 'El modelo operativo contempla un plazo de respuesta de 15 días. Cuando una institución no responde dentro del plazo, el caso puede aparecer en el tablero público como Vencido sin respuesta.',
        },
        note: {
          en: 'The 15-day timeframe is part of the proposed operational model of CORO; it does not constitute a legal obligation unless backed by an institutional agreement or legal framework.',
          es: 'El plazo de 15 días forma parte del modelo operativo propuesto de CORO; no implica obligación legal salvo que exista un acuerdo institucional o fundamento legal que lo respalde.',
        },
      },
      {
        title: { en: 'Economic sustainability model', es: 'Modelo de sostenibilidad económica' },
        body: {
          en: 'Citizen access is $0 (free reporting, consultations and voting). Proposed sustainability relies on institutional subscriptions (proposed plans at $4/month individual and $9/month institutional) and ethical advertising (sponsored spaces exclusively for verified institutions, proposed at $45–$100 per campaign, never selling votes or political influence).',
          es: 'El acceso ciudadano es de $0 (reportes, consultas y votaciones gratuitos). El modelo propuesto contempla suscripciones institucionales ($4/mes plan individual y $9/mes plan institucional) y publicidad ética (espacios patrocinados exclusivos para instituciones verificadas de $45 a $100 por campaña, sin vender votos ni influencia política).',
        },
        note: {
          en: 'These figures represent the proposed economic model, not existing revenue, completed sales or confirmed institutional contracts.',
          es: 'Estas cifras representan el modelo económico propuesto, no ingresos existentes, ventas realizadas ni contratos institucionales confirmados.',
        },
      },
      {
        title: { en: 'Scope & evolution roadmap', es: 'Alcance y evolución prevista' },
        ordered: true,
        items: [
          {
            title: { en: 'Phase 1 — MVP & Municipal Pilot', es: 'Fase 1 — MVP y piloto municipal' },
            body: {
              en: 'Functional first MVP version presented and prepared to begin a pilot in a municipality in the Dominican Republic.',
              es: 'Primera versión funcional del MVP presentada y preparada para iniciar un piloto en un municipio de la República Dominicana.',
            },
          },
          {
            title: { en: 'Phase 2 — Multi-Municipality & iOS', es: 'Fase 2 — Soporte iOS y múltiples municipios' },
            body: {
              en: 'Planned expansion to iOS devices and operation across multiple municipalities.',
              es: 'Soporte previsto para iOS y operación en múltiples municipios.',
            },
          },
          {
            title: { en: 'Phase 3 — Regional Scale', es: 'Fase 3 — Expansión regional' },
            body: {
              en: 'Long-term vision to scale across Latin America and the Caribbean.',
              es: 'Visión a largo plazo de escalar a toda América Latina y el Caribe.',
            },
          },
        ],
        note: {
          en: 'Phases 2 and 3 represent planned future evolution, not currently implemented features.',
          es: 'Las fases 2 y 3 representan la evolución futura prevista, no funcionalidades ya implementadas.',
        },
      },
    ],
  },

  /* =============================== SIA =============================== */
  {
    slug: 'sia',
    status: 'past',
    title: 'SIA',
    category: {
      en: 'Academic & Administrative System · IPMHU',
      es: 'Sistema Interno Académico · IPMHU',
    },
    image: '/images/projects/sia-thumb.png',
    tagline: {
      en: 'An academic and administrative management system developed for IPMHU, exploring backend architecture, database management and role-based access control.',
      es: 'Un sistema de gestión académica y administrativa desarrollado para IPMHU, que exploró arquitectura backend, gestión de bases de datos y control de acceso basado en roles.',
    },
    description: {
      en: 'An academic and administrative management system developed for IPMHU, exploring backend architecture, database management and role-based access control.',
      es: 'Un sistema de gestión académica y administrativa desarrollado para IPMHU, que exploró arquitectura backend, gestión de bases de datos y control de acceso basado en roles.',
    },
    tech: [
      'Node.js',
      'Express',
      'REST API',
      'PostgreSQL',
      'Microsoft SQL Server',
      'JWT',
      'Helmet',
      'Jest',
      'PDFKit',
    ],
    sections: [
      {
        title: { en: 'Overview', es: 'Descripción general' },
        body: {
          en: 'SIA (Sistema Interno Académico) was a project focused on academic and administrative processes at Instituto Politécnico Max Henríquez Ureña. The system explored the integration of backend services, database management and role-based access control to support different institutional responsibilities.',
          es: 'SIA (Sistema Interno Académico) fue un proyecto enfocado en los procesos académicos y administrativos del Instituto Politécnico Max Henríquez Ureña. El sistema exploró la integración de servicios backend, gestión de bases de datos y control de acceso basado en roles para dar soporte a distintas responsabilidades institucionales.',
        },
        note: {
          en: 'SIA is a past project. It is no longer active, maintained or deployed in production.',
          es: 'SIA es un proyecto pasado. No está activo, no se mantiene actualmente ni se encuentra en producción.',
        },
      },
      {
        title: { en: 'Technical implementation', es: 'Implementación técnica' },
        body: {
          en: 'Built around a Node.js and Express REST API architecture, SIA integrated relational data modeling across PostgreSQL and Microsoft SQL Server, JWT authentication, HTTP security headers with Helmet, automated testing with Jest, and server-side academic document generation using PDFKit.',
          es: 'Construido sobre una arquitectura REST API con Node.js y Express, SIA integró gestión de bases de datos relacionales con PostgreSQL y Microsoft SQL Server, autenticación mediante JWT, seguridad HTTP con Helmet, pruebas con Jest y generación de reportes en PDF mediante PDFKit.',
        },
      },
      {
        title: { en: 'Roles considered', es: 'Roles contemplados' },
        items: [
          {
            title: { en: 'Administrator', es: 'Administrador' },
            body: {
              en: 'Institutional configuration, user provisioning and system-wide administrative control.',
              es: 'Configuración institucional, gestión de usuarios y administración general del sistema.',
            },
          },
          {
            title: { en: 'Teacher', es: 'Docente' },
            body: {
              en: 'Academic workflows, course records and student evaluation processes.',
              es: 'Flujos académicos, registros de asignaturas y procesos de evaluación estudiantil.',
            },
          },
          {
            title: { en: 'Student', es: 'Estudiante' },
            body: {
              en: 'Role-scoped consultation of academic records and institutional information.',
              es: 'Consulta con acceso delimitado por rol a información y registros académicos.',
            },
          },
          {
            title: { en: 'Coordination', es: 'Coordinación' },
            body: {
              en: 'Academic supervision and coordination across sections and teaching staff.',
              es: 'Supervisión y seguimiento de los procesos y programas académicos.',
            },
          },
          {
            title: { en: 'Counseling', es: 'Orientación' },
            body: {
              en: 'Student support and guidance accompaniment workflows.',
              es: 'Flujos de acompañamiento y seguimiento desde el área de orientación.',
            },
          },
        ],
      },
    ],
  },

  /* ============================= VOTECH ============================= */
  {
    slug: 'votech',
    status: 'completed',
    title: 'Votech',
    category: {
      en: 'School Fair Project Discovery & Voting Platform',
      es: 'Plataforma de Exploración y Votación para Feria Escolar',
    },
    image: '/images/votech-concurrency.jpg',
    tagline: {
      en: 'A platform developed for a school fair, supporting project discovery, voting and results.',
      es: 'Una plataforma desarrollada para una feria escolar que permite explorar proyectos, votar y consultar resultados.',
    },
    description: {
      en: 'A platform developed for a school fair, supporting project discovery, voting and results.',
      es: 'Una plataforma desarrollada para una feria escolar que permite explorar proyectos, votar y consultar resultados.',
    },
    tech: ['TypeScript', 'Express', 'Supabase', 'JWT', 'REST API'],
    sections: [
      {
        title: { en: 'Overview', es: 'Descripción general' },
        body: {
          en: "Votech is a platform developed for a school fair, providing a digital way to explore participating projects, cast votes and access results. The application was developed independently and used during the school's event. It supported approximately 500 simultaneous users without interruptions.",
          es: 'Votech es una plataforma desarrollada para una feria escolar que ofrece una forma digital de explorar los proyectos participantes, emitir votos y consultar los resultados. La aplicación fue desarrollada de manera individual y utilizada durante el evento escolar. Soportó aproximadamente 500 usuarios simultáneos sin interrupciones.',
        },
      },
      {
        title: { en: 'Technical implementation & my contribution', es: 'Implementación técnica y mi contribución' },
        body: {
          en: "The backend was built with TypeScript and Express, using Supabase for data management. A custom JWT-based authentication system and a REST API handled the application's main operations, including projects, votes and results. I developed the application independently, taking responsibility for its implementation and technical decisions.",
          es: 'El backend fue construido con TypeScript y Express, utilizando Supabase para la gestión de datos. Un sistema de autenticación JWT personalizado y una API REST gestionaban las operaciones principales de la aplicación, incluidos los proyectos, los votos y los resultados. Desarrollé la aplicación de manera independiente, asumiendo la responsabilidad de su implementación y de las decisiones técnicas.',
        },
      },
      {
        title: { en: 'Results & learnings', es: 'Resultados y aprendizajes' },
        body: {
          en: 'During the school fair event, Votech handled approximately 500 simultaneous users without interruptions, enabling attendees to browse participating projects, submit votes and consult outcomes reliably.',
          es: 'Durante el evento de la feria escolar, Votech soportó aproximadamente 500 usuarios simultáneos sin interrupciones, permitiendo a los asistentes explorar los proyectos participantes, emitir sus votos y consultar los resultados.',
        },
        note: {
          en: 'This figure reflects real usage observed during the school fair event, not a certified maximum capacity benchmark or laboratory load test.',
          es: 'Esta cifra refleja el uso real durante el evento escolar, no una capacidad máxima certificada ni un benchmark de laboratorio.',
        },
      },
      {
        title: { en: 'Planned improvements', es: 'Mejoras previstas' },
        items: [
          {
            title: { en: 'Project refactoring', es: 'Refactorización del proyecto' },
            body: {
              en: 'Restructuring and refining the backend and client codebase for future editions.',
              es: 'Reestructuración y mejora del código para futuras ediciones del evento.',
            },
          },
          {
            title: { en: 'Fair surveys', es: 'Encuestas relacionadas con la feria' },
            body: {
              en: 'Adding structured feedback surveys for event attendees.',
              es: 'Incorporar encuestas de retroalimentación sobre la feria escolar.',
            },
          },
          {
            title: { en: 'Project comments', es: 'Sistema de comentarios para cada proyecto' },
            body: {
              en: 'Allowing visitors to leave constructive feedback on individual participating projects.',
              es: 'Permitir comentarios y retroalimentación en la ficha de cada proyecto participante.',
            },
          },
        ],
        note: {
          en: 'These improvements are planned for future iterations, not currently implemented features.',
          es: 'Estas mejoras están previstas, no implementadas.',
        },
      },
    ],
  },
];