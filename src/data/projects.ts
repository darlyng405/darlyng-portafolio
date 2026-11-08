import type { Project } from '../types';

export const projects: Project[] = [
  /* ============================== CORO ============================== */
  {
    slug: 'coro',
    status: 'pilot',
    title: 'CORO',
    tagline: {
      en: 'A civic participation platform connecting young people with public institutions.',
      es: 'Una plataforma de participación ciudadana que conecta a los jóvenes con las instituciones públicas.',
    },
    description: {
      en: 'A civic participation platform connecting young people with public institutions through traceable community reports and institutional responses.',
      es: 'Una plataforma de participación ciudadana que conecta a los jóvenes con las instituciones públicas mediante reportes comunitarios y respuestas institucionales trazables.',
    },
    tech: [],
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
          en: 'CORO addresses the disconnect between young people and public institutions. A complaint on social media often disappears without a response or a clear way to follow up. The project aims to make civic participation more tangible by connecting reports to institutional workflows, deadlines and public accountability.',
          es: 'CORO aborda la desconexión entre los jóvenes y las instituciones públicas. Una queja en redes sociales suele desaparecer sin respuesta ni una forma clara de dar seguimiento. El proyecto busca hacer la participación ciudadana más tangible conectando los reportes con flujos institucionales, plazos y rendición de cuentas pública.',
        },
      },
      {
        title: { en: 'Who uses it', es: 'Quién la usa' },
        items: [
          {
            title: { en: 'Citizens', es: 'Ciudadanos' },
            body: {
              en: 'Young people and community members who report local problems, join existing causes and participate in consultations.',
              es: 'Jóvenes y miembros de la comunidad que reportan problemas locales, se suman a causas existentes y participan en consultas.',
            },
          },
          {
            title: { en: 'Public institutions', es: 'Instituciones públicas' },
            body: {
              en: 'Municipal governments and other institutions that receive reports, prioritize cases and coordinate responses.',
              es: 'Gobiernos municipales y otras instituciones que reciben reportes, priorizan casos y coordinan respuestas.',
            },
          },
          {
            title: { en: 'Field brigades', es: 'Brigadas de campo' },
            body: {
              en: 'Municipal workers who handle assigned cases and document their work in the field.',
              es: 'Trabajadores municipales que atienden los casos asignados y documentan su trabajo en campo.',
            },
          },
        ],
      },
      {
        title: { en: 'How it works', es: 'Cómo funciona' },
        ordered: true,
        items: [
          {
            title: { en: 'Report', es: 'Reporte' },
            body: {
              en: 'A citizen uses the Android app to photograph a problem, geolocate it and describe it. If a similar nearby case already exists, the app can suggest joining that report instead of creating a duplicate.',
              es: 'Un ciudadano usa la aplicación Android para fotografiar un problema, geolocalizarlo y describirlo. Si ya existe un caso similar cercano, la aplicación puede sugerir unirse a ese reporte en lugar de crear un duplicado.',
            },
          },
          {
            title: { en: 'Management', es: 'Gestión' },
            body: {
              en: 'The institution receives the case through a web dashboard, assigns priority and routes it to a field brigade.',
              es: 'La institución recibe el caso a través de un panel web, asigna prioridad y lo dirige a una brigada de campo.',
            },
          },
          {
            title: { en: 'Field execution', es: 'Ejecución en campo' },
            body: {
              en: 'The brigade uses CORO Campo, an application designed to work even without an internet connection, to handle the case and upload before-and-after evidence.',
              es: 'La brigada usa CORO Campo, una aplicación diseñada para funcionar incluso sin conexión a internet, para atender el caso y subir evidencia de antes y después.',
            },
          },
          {
            title: { en: 'Validation', es: 'Validación' },
            body: {
              en: 'The institution validates the result and marks the case as resolved.',
              es: 'La institución valida el resultado y marca el caso como resuelto.',
            },
          },
          {
            title: { en: 'Transparency', es: 'Transparencia' },
            body: {
              en: 'Citizens can follow the case status, while a public dashboard displays reported problems and institutional response performance.',
              es: 'Los ciudadanos pueden seguir el estado del caso, mientras un panel público muestra los problemas reportados y el desempeño institucional en las respuestas.',
            },
          },
        ],
      },
      {
        title: { en: 'Geographic scope', es: 'Alcance geográfico' },
        body: {
          en: 'The MVP is designed for an initial pilot in one municipality in the Dominican Republic, with a long-term vision of expanding across Latin America and the Caribbean.',
          es: 'El MVP está diseñado para un piloto inicial en un municipio de la República Dominicana, con una visión a largo plazo de expandirse por Latinoamérica y el Caribe.',
        },
      },
      {
        title: { en: 'Business model', es: 'Modelo de negocio' },
        body: {
          en: 'Access for citizens is free. The proposed sustainability model includes institutional subscriptions (proposed plans of $4 and $9 per month) and ethical advertising (sponsored campaigns for verified institutions, proposed at $45–$100 per campaign).',
          es: 'El acceso para ciudadanos es gratuito. El modelo de sostenibilidad propuesto incluye suscripciones institucionales (planes propuestos de $4 y $9 mensuales) y publicidad ética (campañas patrocinadas para instituciones verificadas, propuestas entre $45 y $100 por campaña).',
        },
        note: {
          en: 'These are proposed business-model figures, not proof of current revenue or paying customers. No institution is subscribed today.',
          es: 'Estas son cifras propuestas del modelo de negocio, no prueba de ingresos actuales ni clientes de pago. Ninguna institución está suscrita hoy.',
        },
      },
      {
        title: { en: 'Operational detail', es: 'Detalle operativo' },
        body: {
          en: 'The project proposes a 15-day response period for institutional reports. Cases without a response after the deadline can be marked as overdue in the public dashboard.',
          es: 'El proyecto propone un plazo de respuesta institucional de 15 días. Los casos sin respuesta después del plazo pueden marcarse como vencidos en el panel público.',
        },
        note: {
          en: 'The 15-day period is a design proposal. CORO does not legally compel institutions to respond; that would require an actual institutional agreement or legal framework.',
          es: 'El plazo de 15 días es una propuesta de diseño. CORO no obliga legalmente a las instituciones a responder; eso requeriría un acuerdo institucional o un marco legal real.',
        },
      },
      {
        title: { en: 'Roadmap', es: 'Hoja de ruta' },
        ordered: true,
        items: [
          { title: { en: 'Phase 1', es: 'Fase 1' }, body: { en: 'Initial municipal MVP and pilot.', es: 'MVP municipal inicial y piloto.' } },
          { title: { en: 'Phase 2', es: 'Fase 2' }, body: { en: 'iOS support and multi-municipality operation.', es: 'Soporte para iOS y operación multi-municipio.' } },
          { title: { en: 'Phase 3', es: 'Fase 3' }, body: { en: 'Regional expansion.', es: 'Expansión regional.' } },
        ],
        note: {
          en: 'Roadmap goals — not existing features.',
          es: 'Objetivos de la hoja de ruta — no funciones existentes.',
        },
      },
    ],
  },

  /* =============================== SIA =============================== */
  {
    slug: 'sia',
    status: 'past',
    title: 'SIA',
    tagline: {
      en: 'Sistema Interno Académico — a past academic management project.',
      es: 'Sistema Interno Académico — un proyecto pasado de gestión académica.',
    },
    description: {
      en: 'An academic and administrative system built at Instituto Politécnico Max Henríquez Ureña. It is no longer active or maintained.',
      es: 'Un sistema académico y administrativo construido en el Instituto Politécnico Max Henríquez Ureña. Ya no está activo ni se mantiene.',
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
          en: 'SIA is a past project. It is no longer actively maintained, deployed or developed.',
          es: 'SIA es un proyecto pasado. Ya no se mantiene, despliega ni desarrolla activamente.',
        },
      },
      {
        title: { en: 'Roles considered', es: 'Roles contemplados' },
        items: [
          { title: { en: 'Administrators', es: 'Administradores' }, body: { en: 'Full access to institutional configuration and management.', es: 'Acceso completo a la configuración y gestión institucional.' } },
          { title: { en: 'Teachers', es: 'Docentes' }, body: { en: 'Academic workflows and student-related operations.', es: 'Flujos académicos y operaciones relacionadas con estudiantes.' } },
          { title: { en: 'Students', es: 'Estudiantes' }, body: { en: 'Access to their own academic information.', es: 'Acceso a su propia información académica.' } },
          { title: { en: 'Coordination', es: 'Coordinación' }, body: { en: 'Oversight of academic programs and their staff.', es: 'Supervisión de programas académicos y su personal.' } },
          { title: { en: 'Counseling', es: 'Orientación' }, body: { en: 'Support workflows for student follow-up.', es: 'Flujos de apoyo para el seguimiento estudiantil.' } },
        ],
      },
    ],
  },

  /* ============================= VOTECH ============================= */
  {
    slug: 'votech',
    status: 'completed',
    title: 'Votech',
    tagline: {
      en: 'A project voting platform used at a school fair.',
      es: 'Una plataforma de votación de proyectos usada en una feria escolar.',
    },
    description: {
      en: 'A platform developed for a school fair that offers a digital way to explore participating projects, cast votes and access results. It supported approximately 500 simultaneous users without interruptions during the event.',
      es: 'Una plataforma desarrollada para una feria escolar que ofrece una forma digital de explorar los proyectos participantes, emitir votos y consultar los resultados. Soportó aproximadamente 500 usuarios simultáneos sin interrupciones durante el evento.',
    },
    tech: ['TypeScript', 'Express', 'Supabase', 'JWT', 'REST API'],
    sections: [
      {
        title: { en: 'Overview', es: 'Descripción general' },
        body: {
          en: 'Votech is a platform developed for a school fair that provides a digital way to explore participating projects, cast votes and access results. The application was developed independently and used during the school event. The backend was built with TypeScript and Express, using Supabase for data management. A custom JWT-based authentication system and a REST API handled the main operations: projects, votes and results.',
          es: 'Votech es una plataforma desarrollada para una feria escolar que ofrece una forma digital de explorar los proyectos participantes, emitir votos y consultar los resultados. La aplicación fue desarrollada de manera individual y utilizada durante el evento escolar. El backend fue construido con TypeScript y Express, utilizando Supabase para la gestión de datos. Un sistema de autenticación JWT personalizado y una API REST gestionaban las operaciones principales: proyectos, votos y resultados.',
        },
      },
      {
        title: { en: 'Results', es: 'Resultados' },
        body: {
          en: 'Approximately 500 simultaneous users without interruptions during the school event. The application was developed independently; I was responsible for its implementation and technical decisions.',
          es: 'Aproximadamente 500 usuarios simultáneos sin interrupciones durante el evento escolar. La aplicación fue desarrollada de manera individual; fui responsable de su implementación y de las decisiones técnicas.',
        },
        note: {
          en: 'This figure reflects real usage during the event, not a formal load test.',
          es: 'Esta cifra refleja uso real durante el evento, no una prueba de carga formal.',
        },
      },
      {
        title: { en: 'Planned improvements', es: 'Mejoras planificadas' },
        items: [
          { title: { en: 'Refactoring', es: 'Refactorización' }, body: { en: 'Refactoring the project codebase.', es: 'Refactorizar el código del proyecto.' } },
          { title: { en: 'Surveys', es: 'Encuestas' }, body: { en: 'Adding surveys related to the school fair.', es: 'Añadir encuestas relacionadas con la feria escolar.' } },
          { title: { en: 'Comments', es: 'Comentarios' }, body: { en: 'Adding a commenting system for individual projects.', es: 'Añadir un sistema de comentarios para cada proyecto.' } },
        ],
        note: {
          en: 'These improvements are planned, not implemented.',
          es: 'Estas mejoras están planificadas, no implementadas.',
        },
      },
    ],
  },
];