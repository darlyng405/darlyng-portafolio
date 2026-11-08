# Optimización de Barra de Navegación, Categoría Certificados y Miniaturas Interactivas

Mejora integral de la barra de navegación para optimizar el aprovechamiento del espacio mediante una distribución compacta con separadores tipográficos sutiles, adición de la categoría dedicada **CERTIFICATES** / **CERTIFICADOS** tanto en escritorio como en móvil, e incorporación de miniaturas interactivas para cada certificado con micro-interacción de zoom hover, overlay táctil y visor modal expandible de alta resolución (con contenedor preparado para las imágenes personalizadas que el usuario enviará).

---

## User Review & Critical Decisions

> [!IMPORTANT]
> A continuación se resumen las decisiones confirmadas a través del cuestionario inicial y los detalles arquitectónicos clave:

- **Decisión Confirmada 1 (Navegación)**: Distribuir los enlaces de navegación de forma centrada y compacta (`gap` optimizado, separadores tipográficos discretos `·` o `|` con opacidad sutil, eliminando el exceso de espacio en blanco lateral no deseado en resoluciones panorámicas y medianas).
- **Decisión Confirmada 2 (Categoría Certificados)**: Añadir `CERTIFICATES` (EN) / `CERTIFICADOS` (ES) como ítem principal de primer nivel en `Nav.astro` (enlaces de escritorio y menú desplegable móvil), permitiendo acceso directo sin tener que buscarlo dentro de la sección *About*.
- **Decisión Confirmada 3 (Interactividad de Miniaturas)**: Incorporar en cada `CertificateCard` una miniatura interactiva con proporción documental (4:3 / aspecto credencial), efecto de ampliación hover suave (`transform: scale(1.04)`), badge de verificación reflectante y overlay interactivo "Click to Expand" que abre el visor modal en pantalla completa con soporte de teclado (`ESC`), manteniendo la compatibilidad con los PDFs oficiales y dejando el espacio perfectamente listo para las imágenes que mandará el usuario.
- **Preparación de Imágenes (Slot listo)**: Se estructura un campo `thumbnail` en `src/data/certificates.ts` con soporte para `/images/certificates/certiplus-thumb.png` y `/images/certificates/talento-digital-thumb.png`. Mientras el usuario suministra los archivos definitivos, se implementa un componente visual de renderizado técnico SVG editorial que emula la vista previa del documento oficial con tipografía, sello y datos reales, garantizando cero imágenes rotas y permitiendo reemplazar o agregar los archivos `.jpg`/`.png` instantáneamente.

---

## 1. Overview & Core Concept

- **Qué resuelve**: La barra de navegación actual presentaba una distribución amplia con demasiado espacio vacío entre el logotipo y los controles de tema/idioma. Al mismo tiempo, los certificados no contaban con enlace directo en el menú superior y sus tarjetas dependían de un sello genérico sin vista previa visual tipo miniatura interactiva.
- **Experiencia final**:
  1. Barra de navegación estilizada y equilibrada, donde el grupo de navegación tiene densidad óptica profesional, espaciado uniforme y enlace directo a Certificados.
  2. En `/certificates` (y `/es/certificates`), cada tarjeta exhibe una miniatura gráfica del certificado con marco editorial, textura de seguridad, sellado institucional y zoom interactivo al pasar el cursor.
  3. Al pulsar la miniatura, se abre un visor modal fluido en alta definición para inspeccionar el certificado, con opción de descarga y apertura directa del PDF original.

---

## 2. User Experience & Visual Design

### A. Barra de Navegación Compacta y Equilibrada
- **Composición 3-Zonas Refinada**:
  - **Zona 1 (Marca)**: `D. MATEO` con micro-kicker mono sutil opcional o espaciado controlado.
  - **Zona 2 (Navegación Central Compacta)**: Contenedor con ancho máximo controlado (`max-w-2xl`), enlaces equidistantes con micro-separadores discretos (`·` o hairline dividers) entre items:
    `HOME · WORK · CERTIFICATES · ABOUT · JOURNAL · CONTACT`
  - **Zona 3 (Controles)**: Selector de idioma `[ES / EN]` + botón de tema con micro-borde sutil.
- **Rhythm & Padding**: Reducción de la altura excesiva y ajuste del `gap` en pantallas de 1024px a 1440px para que el menú se sienta compacto, cohesivo e intencional, evitando que los extremos queden desconectados del centro.

### B. Miniaturas Interactivas para Certificados
- **Contenedor Visual Documental**:
  - Marco tipo credencial con borde sutil `var(--line)` y fondo `var(--surface)`.
  - Micro-previsualización gráfica del diploma (franja institucional, sello de autenticidad con gradiente metálico, guilloché o líneas de seguridad vectoriales, nombre del titular y fecha).
  - Efecto de cursor interactivo con badge superpuesto `EXPAND PREVIEW ↗`.
  - Animación suave de elevación y escala al hacer hover (`transform: translateY(-2px) scale(1.02)`), con brillo radial sutil en Dark Mode y sombra editorial en Light Mode.
- **Modal de Expansión Mejorado**:
  - Modal accesible con animación `scale-in`, título accesible, controles de navegación, visor embebido del documento en alta resolución y botón de descarga directa del PDF.

---

## 3. Key Product Decisions & Trade-Offs

- **Decisión 1: Integración de `thumbnail` en el modelo de datos `Certificate`**:
  - *Enfoque*: Añadir la propiedad opcional `thumbnail?: string` y `previewGradient?: string` a la interfaz `Certificate` en `src/types/index.ts`.
  - *Por qué*: Permite al usuario simplemente soltar los archivos de imagen en `/public/images/certificates/` cuando los tenga listos sin tocar la lógica del componente. Si el archivo aún no existe en disco, el componente renderiza automáticamente la miniatura vectorial en alta resolución sin mostrar enlaces rotos.
- **Decisión 2: Densidad de la barra de navegación vs. Menú móvil**:
  - *Enfoque*: Mantener 6 enlaces compactos en desktop (`HOME`, `WORK`, `CERTIFICATES`, `ABOUT`, `JOURNAL`, `CONTACT`) con tipografía mono de 11px–12px y tracking 0.1em. En pantallas móviles (<768px), el menú hamburguesa incluirá la categoría `CERTIFICATES` con el mismo orden prioritario.

---

## 4. Technical Architecture & Data Strategy

```
┌────────────────────────────────────────────────────────────────────────┐
│                              NAV COMPONENT                             │
│ ┌──────────────┐    ┌───────────────────────────────────┐    ┌───────┐ │
│ │  D. MATEO    │    │ HOME · WORK · CERTIFICATES · ...  │    │ ES ☼  │ │
│ └──────────────┘    └───────────────────────────────────┘    └───────┘ │
│                          (Compact, Centered Group)                     │
└────────────────────────────────────┬───────────────────────────────────┘
                                     │
                                     ▼
┌────────────────────────────────────────────────────────────────────────┐
│                        CERTIFICATES VIEW & CARDS                       │
│                                                                        │
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │ CertificateCard.astro                                              │ │
│ │ ┌───────────────────────────────┐ ┌──────────────────────────────┐ │ │
│ │ │  Interactive Thumbnail        │ │ Metadata & Details           │ │ │
│ │ │  - Document preview frame     │ │ - Issuer & Date              │ │ │
│ │ │  - Hover zoom & scale-up      │ │ - Hours & Expiration         │ │ │
│ │ │  - Expand trigger overlay     │ │ - Direct PDF actions         │ │ │
│ │ └───────────────┬───────────────┘ └──────────────────────────────┘ │ │
│ └─────────────────┼──────────────────────────────────────────────────┘ │
│                   │ click                                              │
│                   ▼                                                    │
│ ┌────────────────────────────────────────────────────────────────────┐ │
│ │ Accessible Modal Lightbox                                          │ │
│ │ - High-res preview & direct verified document view                 │ │
│ └────────────────────────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────────────────────┘
```

### Archivos a actualizar:
1. `src/types/index.ts`: Extender interfaz `Certificate` con `thumbnail?: string`.
2. `src/data/certificates.ts`: Configurar rutas de imagen (`/images/certificates/certiplus-thumb.png`, `/images/certificates/talento-digital-thumb.png`) y datos complementarios.
3. `src/components/Nav.astro`: Incorporar el ítem `{ path: '/certificates', key: 'nav.certificates' }` y aplicar estructura de enlaces compacta con separadores.
4. `src/styles/global.css`: Ajustar `.nav-inner`, `.nav-links`, `.nav-link`, separadores de navegación y crear los estilos para `.cert-thumbnail-wrap`, `.cert-thumbnail-interactive`, `.cert-thumbnail-badge`, etc.
5. `src/components/CertificateCard.astro`: Reemplazar el contenedor rígido por la miniatura interactiva enriquecida que reacciona al cursor y despliega el visor modal.
6. Verificación: Ejecución de `compile_applet`, `lint_applet` y prueba de regresión visual en navegador para corroborar que no haya desbordamientos ni regresiones de espaciado.
