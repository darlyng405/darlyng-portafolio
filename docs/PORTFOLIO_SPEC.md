# DOCUMENTO MAESTRO

# Portafolio personal — Darlyng Mateo

Decisiones consolidadas · Especificación del proyecto

Revisión 2 · 7 de noviembre de 2026

Este documento es la referencia oficial del portafolio. Recoge las decisiones aprobadas, los textos aprobados, los requisitos técnicos, las restricciones y lo que todavía está pendiente, diferenciando siempre unas cosas de otras. Los cambios de esta revisión están listados en la sección 31.

---

# 1. Visión general del proyecto

El proyecto consiste en desarrollar un portafolio profesional personal para Darlyng Mateo.

No será una web corporativa, una página comercial ni una presentación de una empresa. Será el espacio digital donde mostrar:

- Quién soy como desarrollador.
- Qué proyectos he construido.
- Qué conocimientos técnicos estoy desarrollando.
- Cuáles son mis intereses dentro de la informática.
- Hacia dónde quiero orientar mi carrera.
- Cómo pueden contactarme otras personas.
- Qué aspectos de mi personalidad e intereses existen más allá de la programación.

La identidad profesional que queremos transmitir es la de un Software Developer interesado en comprender cómo funcionan los sistemas, no solamente en construir interfaces o aplicaciones.

El sitio debe reflejar curiosidad intelectual, capacidad de aprendizaje, interés por los fundamentos de la informática, elegancia y evolución constante.

## Principios fundamentales

1. Honestidad: no exagerar experiencia, resultados ni conocimientos.
2. Simplicidad: no agregar funcionalidades que no aporten valor.
3. Rendimiento: priorizar una web rápida y eficiente.
4. Consistencia: mantener una jerarquía visual uniforme.
5. Accesibilidad básica: aplicar buenas prácticas de implementación (HTML semántico, navegación por teclado, foco visible, movimiento reducido). WCAG 2.2 AA no es un objetivo formal del proyecto (ver sección 24).
6. Responsividad: funcionar correctamente en escritorio, tablet y móvil.
7. Identidad: evitar que parezca una plantilla genérica.
8. Profesionalismo: presentar el trabajo de manera clara y madura.

Una regla especialmente importante:

Home es el resumen de todo el portafolio. Las páginas internas son las versiones completas y extendidas de sus respectivas secciones.

No construiremos páginas independientes sin relación entre ellas ni una Home que simplemente enlace a todo lo demás.

---

# 2. Identidad personal y profesional

Información que puede utilizarse públicamente:

| Campo               | Información                                                |
| ------------------- | ---------------------------------------------------------- |
| Nombre              | Darlyng Mateo                                              |
| Título profesional  | Software Developer                                         |
| Ubicación           | Santo Domingo, Dominican Republic                          |
| Correo              | mateodarlyng5@gmail.com                                    |
| GitHub              | github.com/darlyng405                                      |
| LinkedIn            | linkedin.com/in/darlyng-mateo-peral-7031793a6              |
| Centro educativo    | Instituto Politécnico Max Henríquez Ureña                  |
| Programa            | Desarrollo y Administraciones de Aplicaciones Informáticas |
| Graduación esperada | 2028                                                       |

Importante: no utilizar el título Software Engineer. El título elegido es Software Developer.

Enlaces (sin parámetros de seguimiento):

- GitHub: https://github.com/darlyng405
- LinkedIn: https://www.linkedin.com/in/darlyng-mateo-peral-7031793a6
- Portfolio anterior: https://darlyng405.github.io/Portfolio/

Referencia de trabajo (despliegue de prueba en Vercel, no es un enlace público definitivo):

- https://portfolio-re9fkj5vr-darlyng405s-projects.vercel.app/

---

# 3. Arquitectura general

Se decidió construir un sitio multipágina utilizando Astro.

## Mapa de navegación

```
/
│
├── /work
│   ├── /work/coro
│   ├── /work/sia
│   └── /work/votech
│
├── /journal
│   └── /journal/[article]
│
├── /about
│
├── /contact
│
└── /beyond-code
```

Este mapa existe en ambos idiomas. La forma exacta de las URLs de cada idioma se define en la sección 4.

## Función de cada página

| Página      | Función                               |
| ----------- | ------------------------------------- |
| Home        | Presentación general y resumen        |
| Work        | Catálogo completo de proyectos        |
| Coro        | Documentación individual del proyecto |
| SIA         | Documentación individual del proyecto |
| Votech      | Documentación individual del proyecto |
| Journal     | Blog técnico                          |
| About       | Presentación profesional              |
| Contact     | Canales de contacto                   |
| Beyond Code | Intereses personales y culturales     |

## Navegación principal

Orden:

1. HOME
2. WORK
3. JOURNAL
4. ABOUT
5. CONTACT

Beyond Code no aparecerá en el menú principal.

Se accederá mediante:

- Una invitación desde Home.
- Un CTA al final de About.

### Comportamiento de navegación

- Nombre del propietario separado del menú en escritorio.
- Menú centrado.
- Controles de idioma y tema a la derecha.
- Menú móvil funcional y accesible.
- Indicador de página activa mediante una línea fina debajo del elemento.
- Transiciones discretas.
- El estado activo debe funcionar también en móvil.

---

# 4. Idiomas

## Decisión aprobada

El idioma predeterminado será inglés.

También existirá una versión completa en español.

## Comportamiento

- Primera visita: inglés.
- Si el usuario está en inglés, el selector mostrará `ES`.
- Si está en español, mostrará `EN`.
- No mostrar ambos idiomas simultáneamente en el selector.
- Traducir absolutamente toda la interfaz.
- Guardar la preferencia en `localStorage`.
- Mantener la selección entre visitas.

Esto incluye:

- Navegación.
- Botones.
- Textos.
- Modales.
- Mensajes de error.
- Estados vacíos.
- Página 404.
- Metadatos.
- Textos auxiliares.

## Corrección técnica (revisión 2)

Guardar la preferencia en `localStorage` es compatible con el SEO y con el HTML estático solo si el idioma lo determina la URL y no un cambio en el navegador. Por eso:

- Cada idioma tiene sus propias páginas estáticas, generadas en el build. El contenido en español existe como HTML real, no se sustituye con JavaScript en el cliente.
- El selector de idioma es un enlace normal hacia la página equivalente en el otro idioma. Funciona sin JavaScript.
- `localStorage` guarda únicamente la preferencia. Al volver a visitar el sitio, si la preferencia guardada difiere del idioma de la URL, se redirige a la página equivalente. Los buscadores, que no tienen preferencia guardada, ven siempre el idioma de la URL solicitada.
- Cada página declara su idioma en `<html lang>`, incluye `hreflang` para las versiones alternativas (más `x-default`), URL canónica y metadatos traducidos.
- El sitemap incluye ambas versiones de cada página.
- La página 404 debe mostrarse en el idioma que corresponda. El mecanismo concreto se define en la implementación.
- Los textos se estructuran por idioma desde el principio (módulos de `i18n/` y Content Collections separadas por idioma).

## Estrategia de URLs

Propuesta pendiente de confirmación: inglés sin prefijo (`/work`) y español con prefijo `/es/` (`/es/work`).

No se implementa el SEO multilingüe definitivo hasta confirmar esta estrategia.

---

# 5. Sistema visual

## Dirección estética

Elegimos una estética editorial-tech.

Características:

- Limpia.
- Elegante.
- Moderna.
- Minimalista.
- Sobria.
- Técnica.
- Personal.

No queremos:

- Cyberpunk exagerado.
- Neones por todas partes.
- Estética corporativa genérica.
- Efectos visuales innecesarios.
- Animaciones que compitan con el contenido.

La jerarquía visual debe ser extremadamente consistente.

## 5.1. Tema oscuro

Predeterminado

| Elemento          | Color     |
| ----------------- | --------- |
| Background        | `#030407` |
| Surface           | `#111827` |
| Secondary surface | `#171F30` |
| Text              | `#E5E4E2` |
| Muted             | `#A5A7B9` |
| Border            | `#283247` |
| Blue accent       | `#1558C9` |
| Lime accent       | `#D4FF24` |

## 5.2. Tema claro

Dirección aprobada

Nombre conceptual: Warm Editorial.

Queremos un modo claro cálido, no un simple fondo blanco.

| Elemento               | Color     |
| ---------------------- | --------- |
| Background             | `#EAE2D5` |
| Surface                | `#F5F0E7` |
| Secondary surface      | `#DED4C5` |
| Text                   | `#292720` |
| Muted                  | `#716B60` |
| Border                 | `#D1C5B5` |
| Blue accent            | `#1558C9` |
| Olive accent propuesto | `#899447` |

### Pendiente importante

Inicialmente se decidió conservar el mismo azul y lima en ambos temas.

Sin embargo, durante la revisión visual se observó que el amarillo eléctrico del tema claro era demasiado intenso.

Se propuso sustituirlo por un oliva `#899447`.

Esta sustitución todavía necesita validación visual. No debemos considerarla definitivamente cerrada hasta revisar el mockup.

La paleta se valida por criterio visual. No se hace una auditoría de contraste contra WCAG (ver sección 24).

## 5.3. Tipografías

| Uso                | Tipografía    |
| ------------------ | ------------- |
| Encabezados        | Space Grotesk |
| Texto general      | Inter         |
| Código y metadatos | IBM Plex Mono |

### Jerarquía tipográfica de escritorio

| Elemento             | Tamaño |
| -------------------- | ------ |
| Hero                 | 76 px  |
| Títulos de sección   | 48 px  |
| Títulos de proyectos | 28 px  |
| Subtítulos           | 20 px  |
| Texto principal      | 16 px  |
| Texto secundario     | 14 px  |
| Navegación           | 13 px  |
| Labels               | 11 px  |
| Metadata             | 10 px  |

Line-height:

- Encabezados: 1.0–1.1.
- Texto normal: 1.65–1.8.

Estas medidas son referencias para establecer la jerarquía, no tamaños obligatorios para todos los dispositivos.

### Carga de fuentes

- Autoalojar las tres familias (en `public/fonts/`), sin depender de servicios externos.
- Preferir fuentes variables y subconjuntos con los caracteres necesarios para inglés y español (acentos y signos de apertura).
- `font-display: swap` y una fuente de respaldo ajustada para evitar saltos de diseño (CLS).
- Precargar solo las fuentes críticas (Space Grotesk e Inter). IBM Plex Mono se carga cuando se necesita.

## 5.4. Consistencia visual

Las tarjetas de proyectos deben compartir:

- Dimensiones.
- Espaciado.
- Jerarquía tipográfica.
- Ubicación de imágenes.
- Posición de títulos.
- Posición de descripciones.
- Tratamiento de tecnologías.
- Estados.
- Botones.

Los datos se adaptan al diseño, no el diseño a cada proyecto.

## 5.5. Implementación del tema

- El tema oscuro es el predeterminado. El tema claro se activa por elección del usuario.
- El tema se aplica mediante un atributo en `<html>` (por ejemplo `data-theme`) y variables CSS, con `color-scheme` coherente con el tema activo.
- La preferencia se guarda en `localStorage`.
- No debe haber parpadeo de tema al cargar. Para lograrlo, la lectura de la preferencia debe ejecutarse antes del primer pintado, en el `<head>`, de forma síncrona.
- Ese fragmento es la única pieza que debe ir inline. Se escribe en TypeScript (`src/scripts/`) y se transpila e inserta en el build; no se escribe JavaScript a mano (ver sección 22).

---

# 6. Responsive y mockups

Se deben conservar seis versiones completas del diseño.

| Dispositivo | Tema  | Resolución de referencia |
| ----------- | ----- | ------------------------ |
| Desktop     | Dark  | 1440 × 900               |
| Desktop     | Light | 1440 × 900               |
| Tablet      | Dark  | 820 × 1080               |
| Tablet      | Light | 820 × 1080               |
| Mobile      | Dark  | 390 × 844                |
| Mobile      | Light | 390 × 844                |

## Requisitos

- Escritorio sin recortes.
- Tablet oscuro y claro completos.
- Móvil oscuro y claro completos.
- Sin desbordamiento horizontal.
- Sin eliminar tarjetas para acortar la versión móvil.
- Reorganizar los componentes naturalmente.
- Mantener todos los contenidos.
- Mantener jerarquía visual en cada tamaño.

Un mockup nuevo no puede eliminar componentes que ya se habían aprobado.

Las revisiones anteriores demostraron que no basta con que una versión se vea bonita: debe ser también la versión más completa y fiel a todas las decisiones.

---

# 7. Home

Home será una página relativamente corta.

## Secciones

1. Hero.
2. Resumen de proyectos.
3. Vista previa de About.
4. Intereses técnicos.
5. Acceso a Journal.
6. Invitación a Beyond Code.
7. Contact CTA.

No debe contener todos los detalles de las páginas internas.

## 7.1. Hero

Etiqueta:

`Software Developer · Santo Domingo, Dominican Republic`

Headline aprobado provisionalmente:

Building systems. Understanding how they work.

Descripción:

`I'm Darlyng — a developer interested in algorithms, backend engineering and the systems beneath the software we use every day.`

Botones:

- `EXPLORE PROJECTS ↗`
- `READ THE JOURNAL`

El usuario considera que el headline es correcto, aunque un poco sencillo. Se puede mejorar en otra revisión sin perder su intención.

El Journal está temporalmente vacío. Mientras tanto, el botón `READ THE JOURNAL` se mantiene y lleva a un Journal cuyo estado vacío está bien resuelto (sección 12).

## 7.2. Distribución

Escritorio:

- Texto y botones en una columna.
- Tarjeta de código en otra.

Móvil:

- Texto primero.
- Tarjeta de código debajo.

## 7.3. Tarjeta de código

Nombre:

`main.cpp`

Lenguaje:

`C++ / 17`

Código exacto:

```cpp
#include <iostream>

int main() {
    std::cout << "Clean code over fast code" << "\n";
    return 0;
}
```

Es una representación visual de los intereses técnicos. No es un editor funcional ni un bloque ejecutable.

La tarjeta no hace referencia a la programación competitiva. Esa experiencia se menciona una sola vez, en About (sección 10).

---

# 8. Work — Projects

## Página principal

Contenido aprobado:

Label:

`02 / SELECTED WORK`

Título:

`Projects`

Subtítulo:

`Software built to solve real problems.`

Descripción:

`A selection of projects where I've explored software development, system design and practical problem-solving — from early concepts to applications used in real environments.`

## Proyectos

Solo existirán tres proyectos:

1. Coro.
2. SIA.
3. Votech.

No crear proyectos ficticios ni placeholders.

### Filtros

No habrá filtros.

La decisión fue explícita: no tiene sentido construir filtros para un catálogo tan pequeño.

## Tarjetas

Diseño horizontal:

- Imagen a la izquierda.
- Información a la derecha.

En móvil:

- Imagen arriba.
- Información debajo.

Todas las tarjetas deben tener la misma estructura.

Contenido:

- Nombre.
- Estado.
- Descripción.
- Tecnologías.
- CTA de detalles.

## Dos niveles de información

### Nivel 1: detalles rápidos

`Ver más detalles`

Abre un modal u overlay con información adicional.

### Nivel 2: página completa

`Ver proyecto completo`

Lleva a la página individual del proyecto.

Rutas:

- `/work/coro`
- `/work/sia`
- `/work/votech`

Los textos de estos CTA se traducen según la sección 4 (versión en inglés por definir).

## Plantilla de proyecto individual

Secciones previstas:

1. Overview.
2. The problem.
3. Technical implementation.
4. My contribution.
5. Results & learnings.
6. Gallery.
7. Source code, si está disponible.

No todas las secciones tienen que aparecer si no existe información real para completarlas.

---

# 9. Información de los proyectos

## 9.1. Coro

Estado: en desarrollo.

Reglas:

- No inventar funcionalidades.
- No inventar tecnologías.
- No inventar métricas.
- No inventar usuarios.
- No inventar resultados.
- No afirmar que está terminado.

La información técnica y funcional debe completarse con datos confirmados. En la V1 se publica únicamente lo que ya esté confirmado.

## 9.2. SIA — Sistema Interno Académico

Nombre correcto:

Sistema Interno Académico (SIA).

No llamarlo SGA.

Es un proyecto pasado del IPMHU.

No está activo ni se mantiene actualmente. No debe presentarse como una plataforma desplegada o mantenida en producción.

Información histórica disponible:

- Node.js.
- Express.
- API REST.
- PostgreSQL.
- SQL Server.
- JWT.
- Helmet.
- Jest.
- PDFKit.
- Roles de administrador, docente, estudiante, coordinación y orientación.
- Escala histórica aproximada de más de 1.000 y menos de 1.500 usuarios.
- Problemas de rendimiento relacionados con Render y la base de datos.

Estos detalles deben contrastarse con los materiales originales antes de publicarse.

No presentar el proyecto como actual ni convertir cifras históricas en métricas de rendimiento que no se hayan demostrado.

## 9.3. Votech

Información confirmada:

- Fue utilizado en la feria escolar del año pasado.
- Fue desarrollado individualmente por Darlyng.
- Soportó aproximadamente 500 usuarios simultáneos sin interrupciones durante el evento.

Este último dato fue confirmado expresamente por el usuario y es un resultado importante para mostrar.

Redacción recomendada: "approximately 500 concurrent users during the school fair". No presentarlo como una prueba de carga formal.

### Proyección (no es actividad actual)

Lo siguiente es un plan, no algo que se esté haciendo actualmente. Debe redactarse siempre como proyección:

- Se espera que vuelva a utilizarse anualmente en futuras ferias escolares.
- El mantenimiento previsto es individual, a cargo de una sola persona.

No afirmar que existe un equipo de mantenimiento.

### Tecnologías disponibles

- TypeScript.
- Express.
- Supabase.
- Autenticación JWT propia.
- API REST.
- Gestión de proyectos.
- Votos.
- Resultados.

### Funcionalidades futuras

- Refactorización.
- Encuestas de la feria.
- Comentarios para cada proyecto.

Estas funcionalidades están planificadas, no implementadas. No presentarlas como funciones actuales.

---

# 10. About

La página About tendrá tres bloques.

## Who I am

Presentación profesional.

Aquí se incluye una mención breve a la experiencia en programación competitiva. Es el único lugar del sitio donde se menciona.

Reglas para esa mención:

- Una o dos frases, sin ocupar un bloque propio.
- Solo datos confirmados. No inventar resultados, premios, posiciones ni competencias.
- La redacción exacta está pendiente.

## Technical interests

Intereses principales:

- Algorithms.
- Backend engineering.
- Distributed systems.
- Operating systems.

## Where I'm heading

Explicar la dirección de crecimiento hacia sistemas de alto rendimiento y fundamentos más profundos de Computer Science.

## Diseño

Escritorio:

- Dos columnas.
- Texto protagonista.
- Fotografía como elemento complementario.

Móvil:

- Contenido apilado.

### Fotografía

Debe ser una fotografía real proporcionada por el usuario.

Características deseadas:

- Plano de pecho hacia arriba.
- Fondo natural y sobrio.
- Apariencia profesional.
- Sin estética artificial.

No generar una fotografía ficticia del propietario.

En la V1 la página se publica sin fotografía y el diseño debe funcionar sin ella. Se añade cuando exista la real.

## CTA final

Texto:

`Want to know more about who I am beyond code?`

Botón:

`DISCOVER BEYOND CODE ↗`

---

# 11. Beyond Code

Ruta:

`/beyond-code`

No aparecerá en el menú principal.

Accesos:

- Home.
- CTA final de About.

Contenido previsto:

- Lecturas.
- Autores.
- Filosofía.
- Reflexiones.
- Intereses culturales.
- Intereses personales.

Debe conservar la identidad visual del portafolio, pero permitir una presentación más libre y personal.

No es una sección profesional ni una extensión técnica de About.

Propuesta pendiente de confirmación: si al lanzar la V1 todavía no hay contenido real, la ruta, la invitación de Home y el CTA de About se activan en la V1.1, en lugar de publicar una página vacía.

---

# 12. Journal

El usuario eligió un blog técnico.

No será un diario personal de investigación ni una colección de pensamientos sin estructura.

## Estado inicial

El Journal está temporalmente vacío mientras se preparan los primeros artículos reales.

No se crearán:

- Artículos ficticios.
- Entradas de ejemplo presentadas como reales.
- Textos de relleno.

El estado vacío debe explicar brevemente qué tipo de contenido aparecerá, dejar claro que es una situación temporal y no parecer una página rota.

## Estructura futura

Cada artículo podrá incluir:

- Título.
- Fecha.
- Categoría.
- Extracto.
- Contenido completo.
- Código.
- Diagramas.
- Explicaciones técnicas.

Cada artículo tendrá su propia página.

Las categorías todavía no están definidas. Se decidió posponer esa decisión.

---

# 13. Contact

## Información

Correo:

`mateodarlyng5@gmail.com`

GitHub:

`https://github.com/darlyng405`

LinkedIn:

`https://www.linkedin.com/in/darlyng-mateo-peral-7031793a6`

## Correo

Se utilizará un enlace `mailto:`.

No se implementará:

- Formulario.
- Backend de contacto.
- Sistema de almacenamiento de mensajes.

El enlace abrirá la aplicación o proveedor de correo predeterminado del usuario. No debe forzar Gmail.

## Mensaje de contacto

Inglés:

`Interested in working together or discussing a professional opportunity? Feel free to reach out. I'm always glad to connect.`

Español:

`¿Te interesa colaborar o conversar sobre una oportunidad profesional? No dudes en escribirme. Siempre será un placer conectar.`

## Tarjetas sociales

GitHub y LinkedIn:

- Tarjetas independientes.
- Icono.
- Nombre.
- Sin descripciones.
- Tamaño razonable.
- Hover y focus visibles.

---

# 14. CV

## Decisión aprobada

Existirán dos archivos PDF independientes.

| Archivo                   | Idioma  |
| ------------------------- | ------- |
| `Darlyng-Mateo-CV-EN.pdf` | Inglés  |
| `Darlyng-Mateo-CV-ES.pdf` | Español |

## Requisitos

- Dos botones separados.
- Descarga directa.
- Identificación clara del idioma.
- No depender del idioma seleccionado en la web.
- No solicitar datos personales para descargar.
- Información consistente entre ambos documentos.

Los PDF definitivos todavía deben incorporarse. Mientras no existan, la V1 no muestra los botones de descarga: no se publican enlaces a archivos inexistentes.

---

# 15. Footer

Contenido:

- Darlyng Mateo.
- Navegación principal.
- GitHub.
- LinkedIn.
- Copyright con año actualizado automáticamente.

Diseño:

- Minimalista.
- Sin frases motivacionales.
- Sin bloques enormes.
- Sin información redundante.

---

# 16. Animaciones e interacciones

El usuario aprobó cinco familias de interacciones.

## 1. Hero staggered entrance

Entrada escalonada de:

- Texto.
- Descripción.
- Botones.

## 2. Interactive project cards

- Zoom sutil de imagen.
- Borde de acento.
- Movimiento discreto de la flecha.

## 3. Page transitions

- Fade breve.
- Movimiento muy ligero.
- Nada exagerado.

El mecanismo concreto (transiciones nativas del navegador o la solución de Astro) está pendiente. Debe conservar el tema y el idioma activos, gestionar correctamente el foco y respetar `prefers-reduced-motion`.

## 4. Microinteracciones

- Efecto de escritura breve en el código del Hero.
- Subrayados animados.
- Indicador de navegación con transición.

## 5. Scroll reveal

Las secciones pueden aparecer con una animación discreta al entrar en el área visible.

### Límites

No usar:

- Cursor personalizado.
- Partículas.
- Glitch.
- Parallax agresivo.
- Animaciones permanentes.
- Efectos que dificulten la lectura.

### Requisitos adicionales

- Hover.
- Focus.
- Active.
- Transiciones suaves de tema e idioma.
- Efectos adaptados a móviles.
- Respeto a `prefers-reduced-motion`.

Las animaciones son complementarias. Ningún contenido puede depender de ellas para ser entendido.

### Requisitos técnicos de las animaciones (revisión 2)

- El contenido es visible por defecto. Las animaciones se activan añadiendo una clase desde TypeScript; si el script falla, no carga o el usuario prefiere movimiento reducido, todo el contenido se ve de inmediato.
- Ningún elemento debe quedar oculto (`opacity: 0`) en el HTML inicial. La entrada escalonada del Hero no debe retrasar el pintado del texto principal.
- Efecto de escritura del código: el texto final está completo en el HTML desde el servidor, la tarjeta reserva su altura para evitar saltos de diseño, y el efecto no debe hacer que los lectores de pantalla lean el texto repetidamente ni a medias.
- Los efectos de scroll reveal se limitan a transformaciones y opacidad.

---

# 17. Skeleton loading y carga progresiva

## Skeleton loading

Se aprobó, pero exclusivamente cuando exista una espera real.

Requisitos:

- Dimensiones iguales al contenido final.
- Evitar CLS.
- Shimmer discreto.
- Alternativa estática para usuarios con movimiento reducido.
- No bloquear navegación.
- No ocultar contenido disponible.
- Mostrar errores útiles si falla la carga.
- Nunca dejar un skeleton infinito.

No utilizar skeletons como decoración ni para simular una carga inexistente.

## Carga progresiva

1. Navegación y contenido principal primero.
2. Imágenes y recursos secundarios después.
3. Dimensiones reservadas para imágenes.
4. Lazy loading cuando corresponda.
5. No esperar a que todos los recursos terminen para mostrar la página.

Astro debe aprovechar el renderizado estático y evitar JavaScript innecesario.

---

# 18. SEO

Requisitos aprobados:

- Títulos específicos por página.
- Descripciones específicas por página.
- Open Graph.
- Favicon.
- Sitemap.
- `robots.txt`.
- URLs limpias.
- Metadatos bilingües.
- Datos estructurados para el sitio y el autor cuando sean apropiados.
- Contenido rastreable sin JavaScript.

Con la corrección técnica de la sección 4, cada idioma tiene URLs propias, `hreflang`, canónicas y sitemap con ambas versiones. La estrategia definitiva de URLs debe confirmarse antes de cerrar la implementación SEO.

---

# 19. Símbolo personal

Queremos un símbolo personal, no un logotipo corporativo.

Debe representar:

- Libertad.
- Curiosidad.
- Evolución.
- Tecnología.
- Naturaleza.
- Conocimiento.
- Elegancia.

Características:

- Natural.
- Elegante.
- Reconocible.
- Funcional en fondos claros y oscuros.
- Legible en diferentes tamaños.

Versiones necesarias:

1. Oscura.
2. Clara.
3. Monocromática.
4. Favicon simplificado.

### Exploraciones realizadas

Se exploraron conceptos visuales relacionados con:

- Monograma.
- Montaña.
- Camino.
- Hoja.
- Elementos celestes.
- Ave.
- Brote con circuitos.

Ninguno está aprobado como símbolo definitivo.

Falta seleccionar y refinar el concepto y preparar las versiones vectoriales SVG.

La V1 sale sin el símbolo definitivo. Hasta entonces se usa un favicon provisional simple (propuesta pendiente de confirmar).

---

# 20. Página 404

Se decidió crear una página 404 personalizada.

Elementos:

- `404`.
- Frase principal (abajo).
- Botón Home.
- Enlace Work.
- Animación sutil.
- Traducción completa.

La frase "This page doesn't exist." se eliminó. La única frase principal es la siguiente.

Versión inglesa:

Don't worry, something went wrong — but it wasn't your fault.

Versión en español:

Tranquilo, algo falló, pero no fue tu culpa.

Debe conservar un tono ligeramente divertido y personal.

---

# 21. Privacidad y seguridad

Requisitos:

- HTTPS obligatorio.
- No recopilar datos innecesarios.
- Sin cookies de seguimiento publicitario.
- Sin publicidad.
- Dependencias mínimas y actualizadas.
- Enlaces externos con `rel="noopener noreferrer"` cuando corresponda.
- Enlaces sin parámetros de seguimiento (por ejemplo `utm_source`).
- No publicar secretos ni credenciales.
- No introducir formularios o servicios externos innecesarios.

## Analítica

### Decisión aprobada

Se utilizará Vercel Web Analytics.

No se integrará Google Analytics 4 por ahora.

La intención es conocer estadísticas básicas del portafolio sin añadir una plataforma de seguimiento más compleja.

La configuración deberá revisarse según los requisitos de privacidad aplicables.

---

# 22. Stack tecnológico

## Stack aprobado

| Tecnología                | Uso                    |
| ------------------------- | ---------------------- |
| Astro                     | Framework principal    |
| TypeScript                | Lenguaje               |
| CSS                       | Estilos                |
| Astro Content Collections | Contenido estructurado |
| Vitest                    | Pruebas unitarias      |
| Playwright                | Pruebas end-to-end     |
| ESLint                    | Análisis estático      |
| Prettier                  | Formato                |
| Git                       | Control de versiones   |
| GitHub                    | Repositorio            |
| Vercel                    | Hosting y despliegue   |

## Restricciones

- No React.
- No añadir React por comodidad.
- Todo el código propio se escribe en TypeScript. No se escribe JavaScript a mano.
- Los scripts de cliente van en módulos `.ts` o en etiquetas `<script>` de Astro, que se procesan como TypeScript.
- Los archivos de configuración también se escriben en TypeScript cuando la herramienta lo permite (`astro.config.ts`, `vitest.config.ts`, `playwright.config.ts`).
- No introducir dependencias innecesarias.
- HTML estático por defecto.
- Interactividad únicamente cuando sea necesaria.

### Excepción técnica documentada

El script que evita el parpadeo de tema debe ejecutarse inline y de forma síncrona en el `<head>`, y Astro no procesa los scripts inline. Para mantener TypeScript como lenguaje de autoría, se escribe en `src/scripts/` y se transpila e inserta en el build. El método concreto se define en la implementación.

La implementación deberá usar principalmente componentes Astro, módulos TypeScript y CSS.

## Estructura de referencia

```
portfolio/
│
├── public/
│   ├── images/
│   ├── icons/
│   ├── fonts/
│   └── favicon.svg
│
├── src/
│   ├── components/
│   ├── layouts/
│   ├── pages/
│   ├── content/
│   ├── data/
│   ├── i18n/
│   ├── scripts/
│   ├── styles/
│   ├── types/
│   └── utils/
│
├── tests/
│
├── astro.config.ts
├── tsconfig.json
└── package.json
```

Esta estructura es una referencia, no una obligación de crear directorios vacíos.

---

# 23. GitHub y despliegue

Decisiones:

- GitHub como repositorio.
- Vercel como hosting.
- Subdominio inicial de Vercel.
- Posible dominio futuro `.dev`.
- Despliegue automático desde `main`.
- Rama `dev` para desarrollo.
- Rama `main` para producción.
- Preview Deployments para probar cambios.
- HTTPS obligatorio.

Los cambios importantes deben revisarse antes de producción.

---

# 24. Accesibilidad

## Decisión actualizada (revisión 2)

WCAG 2.2 AA deja de ser un objetivo formal del proyecto. No es criterio de lanzamiento ni se hará una auditoría contra ese estándar. La paleta aprobada se mantiene sin ajustes por contraste.

## Buenas prácticas que se mantienen

Estas prácticas se aplican durante el desarrollo, sin que constituyan una certificación:

- HTML semántico.
- Navegación por teclado y orden de foco lógico.
- Indicadores de foco visibles (ya exigidos por las interacciones de la sección 16).
- Etiquetas accesibles y textos alternativos adecuados para imágenes.
- Menú móvil y modales que funcionen con teclado, con gestión correcta del foco.
- Respeto a `prefers-reduced-motion`.
- Zoom sin pérdida de contenido.
- No utilizar únicamente el color para comunicar estados.

---

# 25. Control de calidad

Se establecieron cinco áreas de revisión.

## A. Funcionalidad

Comprobar:

- Navegación.
- Idioma.
- Tema.
- Persistencia de preferencias.
- Enlaces.
- Modales.
- Descarga de CV (cuando existan los PDF).
- Estados de carga.
- Estados de error.
- Menú móvil.
- Página 404.

## B. Responsive

Comprobar:

- Desktop.
- Tablet.
- Mobile.
- Tamaños intermedios.
- Overflow horizontal.
- Jerarquía.
- Integridad del contenido.

## C. Rendimiento

Comprobar:

- Lighthouse.
- Core Web Vitals.
- Imágenes.
- Fuentes.
- JavaScript.
- CLS.
- Carga progresiva.

## D. Código

- TypeScript estricto.
- ESLint.
- Prettier.
- Pruebas automatizadas.
- Mantenibilidad.

## E. Revisión de cambios

- Revisar cambios significativos.
- Utilizar Preview Deployments.
- No publicar modificaciones importantes sin probarlas.

---

# 26. Decisiones explícitamente descartadas

| Elemento                                              | Decisión                      |
| ----------------------------------------------------- | ----------------------------- |
| React                                                 | No                            |
| JavaScript escrito a mano                             | No (se usa TypeScript)        |
| Filtros de proyectos                                  | No                            |
| Formulario de contacto                                | No                            |
| Google Analytics 4                                    | No por ahora                  |
| Beyond Code en menú principal                         | No                            |
| Artículos ficticios                                   | No                            |
| Proyectos ficticios                                   | No                            |
| Cursor personalizado                                  | No                            |
| Partículas                                            | No                            |
| Glitch                                                | No                            |
| Parallax agresivo                                     | No                            |
| Animaciones constantes                                | No                            |
| Fotografía artificial del propietario                 | No                            |
| SIA presentado como proyecto activo                   | No                            |
| Funciones futuras de Votech presentadas como actuales | No                            |
| WCAG 2.2 AA como objetivo formal                      | No (revisión 2)               |
| Referencia a programación competitiva en la tarjeta de código | No (revisión 2)       |
| Frase "This page doesn't exist." en la 404            | No (revisión 2)               |

---

# 27. Pendientes

Esta sección recoge lo que todavía falta hacer sin confundirlo con decisiones ya aprobadas.

## Recursos personales

- Fotografía profesional real para About.
- Símbolo personal definitivo.
- Versiones SVG del símbolo.
- Favicon definitivo.

## Documentos

- CV en inglés PDF.
- CV en español PDF.

## Contenido

- Completar información real de Coro.
- Revisar información histórica de SIA.
- Consolidar descripción definitiva de Votech.
- Revisar enlaces a repositorios.
- Preparar artículos reales cuando existan (el Journal está temporalmente vacío).
- Redactar la mención a la experiencia en programación competitiva para About, con datos confirmados.
- Preparar contenido real de Beyond Code.
- Redactar los textos pendientes de Home y About, y las traducciones al español.
- Revisar traducciones.

## Diseño

- Validar el oliva del tema claro.
- Revisar el headline del Hero si se desea mejorarlo.
- Completar las seis vistas del mockup.
- Verificar que ninguna vista pierda contenido.
- Finalizar el símbolo personal.

## Implementación

- Confirmar la estrategia de URLs bilingües (propuesta: `/es/`).
- Definir breakpoints CSS.
- Configurar Vercel Analytics.
- Configurar SEO (incluido `hreflang`).
- Configurar fuentes autoalojadas.
- Implementar el script de tema sin parpadeo en TypeScript.
- Decidir el mecanismo de transiciones de página.
- Configurar Vitest.
- Configurar Playwright.
- Configurar ESLint.
- Configurar Prettier.
- Configurar TypeScript estricto.
- Configurar ramas Git.
- Configurar Preview Deployments.
- Ejecutar pruebas responsive.
- Ejecutar pruebas de rendimiento.
- Elegir dominio definitivo si se compra uno `.dev`.

---

# 28. Criterios para considerar terminado el portafolio

El lanzamiento se divide en dos etapas.

## V1 — Lanzamiento

La V1 sale sin los recursos que todavía no existen. El proyecto estará listo para lanzar la V1 cuando se cumpla lo siguiente:

- Todas las rutas funcionen.
- Home sea breve y resuma todo el sitio.
- Las páginas internas contengan la información ampliada.
- Inglés y español estén completos, con URLs propias por idioma.
- El selector de idioma funcione.
- El tema oscuro sea el predeterminado.
- El tema claro funcione correctamente.
- Las preferencias se conserven.
- No haya flash de tema al cargar.
- Las seis vistas responsive estén completas.
- No exista overflow horizontal.
- La información publicada de los tres proyectos esté verificada. Lo que no esté confirmado no se publica.
- Votech y sus planes futuros estén redactados como proyección.
- La tarjeta de código del Hero no mencione programación competitiva.
- Los modales funcionen.
- Las páginas individuales de proyectos funcionen.
- Journal tenga su estado vacío adecuado y temporal.
- About funcione sin fotografía.
- Beyond Code no aparezca en la navegación principal.
- Contact funcione mediante `mailto`.
- GitHub y LinkedIn estén visibles.
- No haya enlaces a archivos inexistentes (por ejemplo, CV).
- El footer esté completo.
- La página 404 esté completa, traducida y sin la frase eliminada.
- Las animaciones respeten `prefers-reduced-motion`.
- El contenido nunca quede oculto si falla JavaScript.
- Los skeletons solo aparezcan ante esperas reales.
- El contenido sea rastreable sin JavaScript.
- Todo el código propio esté escrito en TypeScript.
- Vercel Analytics esté configurado.
- No se haya agregado Google Analytics 4.
- HTTPS esté activo.
- Se hayan revisado privacidad y seguridad.
- Las pruebas funcionales estén ejecutadas.
- Las pruebas responsive estén ejecutadas.
- Se haya revisado el rendimiento.
- Se hayan revisado los cambios en Preview Deployments.

## V1.1 y posteriores — Se incorporan cuando existan

- Fotografía real en About.
- Los dos CV descargables por separado.
- Símbolo personal definitivo y favicon definitivo.
- Información completa de Coro.
- Contenido de Beyond Code, con su ruta, la invitación de Home y el CTA de About (propuesta pendiente de confirmar).
- Primeros artículos reales del Journal.
- Mención a la programación competitiva en About, cuando esté redactada con datos confirmados.

---

# 29. Reglas para futuras modificaciones

Estas reglas son esenciales para no perder trabajo durante las siguientes iteraciones.

1. Una decisión aprobada no debe desaparecer de un mockup posterior.
2. Una propuesta no se considera decisión hasta que el usuario la acepte.
3. Si se modifica una decisión, se debe actualizar esta especificación.
4. No se deben inventar datos para completar una sección.
5. No se debe sacrificar contenido para hacer una vista visualmente más corta.
6. No se deben introducir dependencias sin una razón concreta.
7. No se debe agregar complejidad solo porque técnicamente sea posible.
8. Cuando exista una contradicción, prevalece la decisión explícita más reciente.
9. Si no se puede determinar cuál decisión prevalece, hay que preguntar.
10. El objetivo es implementar el portafolio definido, no convertirlo en un proyecto interminable.

---

# 30. Estado general del proyecto

## Portafolio de Darlyng Mateo

| Área                          | Estado                                   |
| ----------------------------- | ---------------------------------------- |
| Concepto y dirección          | Definidos                                |
| Sistema visual                | Validación pendiente (oliva del tema claro) |
| Arquitectura y stack          | Definidos                                |
| Estrategia de URLs bilingües  | Propuesta pendiente de confirmar         |
| Contenido de proyectos        | Por completar/verificar                  |
| Fotografía y símbolo          | Pendientes (la V1 sale sin ellos)        |
| CV bilingüe                   | Archivos pendientes (la V1 sale sin ellos) |
| Journal                       | Temporalmente vacío                      |
| Accesibilidad                 | Buenas prácticas básicas, sin objetivo WCAG |
| Implementación                | Por realizar                             |

## Principio final

Este portafolio debe demostrar quién eres mediante tu trabajo, tus intereses y tu manera de pensar.

No necesitamos que parezca el sitio de una gran empresa. Necesitamos que sea un sitio técnicamente sólido, visualmente coherente, rápido y auténtico.

Construir sistemas. Entender cómo funcionan. Mostrar el proceso sin fingir haber llegado al final.

---

# 31. Cambios de la revisión 2

1. Journal: se indica que está temporalmente vacío (secciones 7.1, 12, 28, 30).
2. WCAG 2.2 AA: se elimina como objetivo formal, criterio de lanzamiento y auditoría. Se conservan buenas prácticas básicas (secciones 1, 24, 26, 27, 28, 30).
3. V1: se define un lanzamiento que sale sin foto, CV, símbolo definitivo, información completa de Coro y contenido de Beyond Code (sección 28).
4. Tarjeta de código del Hero: archivo renombrado a `main.cpp`, sin referencia a programación competitiva, y código ajustado a `#include <iostream>` con `std::cout` para ser coherente con el mensaje (sección 7.3).
5. Programación competitiva: se menciona solo una vez, en About (sección 10).
6. Votech: sin cambios en los datos confirmados; los planes futuros y el uso anual esperado se redactan como proyección, no como actividad actual (sección 9.3).
7. Página 404: se elimina "This page doesn't exist." y se deja solo la otra frase (sección 20).
8. Idiomas: se corrige la contradicción entre `localStorage`, SEO y HTML estático; el idioma lo determina la URL (sección 4).
9. TypeScript: todo el código propio en TypeScript, con la excepción técnica del script de tema documentada (secciones 5.5, 22).
10. Tema: se especifica la implementación sin parpadeo (sección 5.5).
11. Fuentes: requisitos de carga autoalojada y subconjuntos (sección 5.3).
12. Animaciones: el contenido es visible por defecto, sin ocultar el HTML inicial; requisitos del efecto de escritura (sección 16).
13. Enlaces: se eliminan los parámetros `utm_source` y el escape erróneo del correo (secciones 2, 21).
14. Se eliminan del documento las frases propias del chat original.
