# Pendientes del portafolio

Lista de trabajo derivada de `PORTFOLIO_SPEC.md` (secciones 27 y 28). Marca cada punto al completarlo.

## Para lanzar la V1

### Contenido
- [ ] Información verificada y publicable de Coro (solo datos confirmados)
- [ ] Revisar los datos históricos de SIA contra los materiales originales
- [ ] Consolidar la descripción de Votech (estado, tecnologías, resultados)
- [ ] Revisar enlaces a repositorios
- [ ] Textos de Home y About (Who I am, Technical interests, Where I'm heading)
- [ ] Estado vacío del Journal (temporal, explica qué contenido aparecerá)
- [ ] Traducciones al español de todos los textos (`src/i18n/ui.ts` y contenido)
- [ ] Metadescripciones por página, en ambos idiomas

### Diseño
- [ ] Validar visualmente el oliva del tema claro (`#899447`)
- [ ] Completar las seis vistas del mockup (desktop, tablet y mobile, oscuro y claro)
- [ ] Verificar que ninguna vista pierda contenido
- [ ] Revisar el headline del Hero (opcional)

### Implementación
- [ ] Confirmar la estrategia de URLs bilingües (propuesta: inglés sin prefijo y `/es/`)
- [ ] Definir breakpoints CSS
- [ ] Fuentes autoalojadas (`src/styles/fonts.css`, `public/fonts/`)
- [ ] Header, footer, selector de idioma y tema
- [ ] Componentes: tarjetas de proyecto, modal de detalles, tarjeta de código `main.cpp`
- [ ] Páginas de proyecto con la colección `projects`
- [ ] SEO: canónicas, `hreflang`, Open Graph, sitemap, datos estructurados
- [ ] Página 404 con versión en español y animación sutil
- [ ] Decidir el mecanismo de transiciones de página
- [ ] Vercel Web Analytics
- [ ] ESLint (configuración) y TypeScript estricto
- [ ] Ramas `dev` y `main`, Preview Deployments
- [ ] Pruebas funcionales, responsive y de rendimiento
- [ ] Revisión de privacidad y seguridad

## Para la V1.1 (cuando existan)

- [ ] Fotografía real para About
- [ ] CV en inglés y en español (`public/cv/Darlyng-Mateo-CV-EN.pdf` y `...-ES.pdf`) y sus botones
- [ ] Símbolo personal definitivo, versiones SVG y favicon definitivo
- [ ] Contenido real de Beyond Code (propuesta: activar ruta, invitación de Home y CTA de About solo entonces)
- [ ] Primeros artículos reales del Journal
- [ ] Mención a la experiencia en programación competitiva en About (solo datos confirmados)
- [ ] Dominio `.dev` definitivo, si se compra

## Reglas que no hay que olvidar

- No inventar datos para completar una sección.
- Una propuesta no es una decisión hasta que se acepta.
- Si cambia una decisión, actualizar `PORTFOLIO_SPEC.md`.
- No agregar dependencias ni complejidad sin una razón concreta.
- Todo el código propio en TypeScript.
