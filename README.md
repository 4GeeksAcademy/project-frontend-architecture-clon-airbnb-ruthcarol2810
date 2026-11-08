# Clone Airbnb

Frontend educativo inspirado en la experiencia de Airbnb para explorar alojamientos, consultar resultados de búsqueda y revisar el detalle de una habitación. El proyecto implementa tres vistas responsive con Next.js, React, TypeScript, Tailwind CSS y componentes reutilizables.

> Este proyecto es una implementación de referencia para validar una arquitectura frontend. No está afiliado a Airbnb ni pretende reproducir sus servicios reales.

## ✨ Características

- Página de inicio con:
  - Navegación principal y barra de búsqueda.
  - Categorías de exploración.
  - Carruseles de alojamientos agrupados por destino o tema.
  - Tarjetas reutilizables con imagen, precio, ubicación y valoración.
  - Fotografías locales de portada para los alojamientos, con ilustraciones SVG como fallback si una imagen no carga.
  - Favoritos con corazón vacío que se rellena en rosa y se sincroniza con el detalle durante la sesión del navegador.
- Catálogo de resultados con:
  - Número de alojamientos encontrados.
  - Filtros rápidos.
  - Orden por precio ascendente o descendente.
  - Resultados junto a un mapa en escritorio.
  - Mapa debajo de los resultados en móvil.
- Página de detalle de alojamiento con:
  - Galería navegable.
  - Información del alojamiento y del anfitrión.
  - Servicios o amenities.
  - Tarjeta de reserva y contador de huéspedes.
  - Calendario visual de disponibilidad.
  - Valoraciones, reseñas y ubicación aproximada.
- Carga simulada de datos con estados de carga visibles.
- Iconografía con Font Awesome y favicon SVG basado en el logo del sitio.
- Navegación interna sin recarga completa mediante `Link` de Next.js.
- Diseño mobile-first, optimizado inicialmente para un viewport de 375 px.
- Tipos TypeScript para las estructuras principales de datos.
- Componentes funcionales pequeños y enfocados.

## 🧰 Tecnologías

- [Next.js](https://nextjs.org/) 16.4.5
- [React](https://react.dev/) 19.3.0
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Font Awesome Free](https://fontawesome.com/)
- App Router de Next.js
- ESLint

No se utilizan librerías de componentes preconstruidas como shadcn/ui, Material UI, Ant Design o Chakra UI.

## 🚀 Requisitos

- [Node.js](https://nodejs.org/) 20.9 o superior.
- npm, incluido con Node.js.
- [Git](https://git-scm.com/).

## 📦 Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/4GeeksAcademy/project-frontend-architecture-clon-airbnb-ruthcarol2810.git
   ```

2. Entra en el directorio del proyecto:

   ```bash
   cd project-frontend-architecture-clon-airbnb-ruthcarol2810
   ```

3. Instala las dependencias:

   ```bash
   npm install
   ```

## 💡 Uso

Inicia el servidor de desarrollo:

```bash
npm run dev
```

Después, abre [http://localhost:3000](http://localhost:3000) en el navegador.

### Scripts disponibles

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Inicia el servidor de desarrollo. |
| `npm run build` | Genera la compilación de producción. |
| `npm run start` | Inicia la aplicación compilada. |
| `npm run lint` | Ejecuta ESLint sobre el proyecto. |

## 🗺️ Rutas principales

| Ruta | Descripción |
| --- | --- |
| `/` | Página de inicio y descubrimiento de alojamientos. |
| `/catalog` | Catálogo de resultados con filtros, orden y mapa. |
| `/rooms/[id]` | Detalle dinámico de un alojamiento. |

Las tarjetas de alojamiento enlazan con `/rooms/[id]`. La navegación entre las vistas se realiza con `Link` de Next.js.

## 🧱 Arquitectura del proyecto

Las páginas utilizan el App Router y los componentes se organizan por responsabilidad:

```text
.
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── catalog/
│   └── rooms/[id]/
├── components/
│   ├── catalog/
│   ├── favorites/
│   ├── feedback/
│   ├── layout/
│   ├── listings/
│   ├── room/
│   └── search/
├── public/
│   └── stays/             # Fotografías locales de las estancias
├── assets-dev/
│   └── reference-image/
├── .ai-context/
│   └── components-specs/
├── context.md
└── SPEC.md
```

### Principios de implementación

- Mobile-first: se diseña primero para 375 px y se adapta desde aproximadamente 768 px.
- Cada componente debe tener una responsabilidad única.
- Los componentes funcionales se definen como constantes.
- No se utilizan componentes de clase.
- Los estilos se implementan con clases de utilidad de Tailwind CSS.
- No se utilizan objetos `style={{}}` para estilos inline.
- Los componentes deben mantenerse alrededor de 80 líneas de JSX y lógica como máximo.
- La tarjeta de alojamiento se reutiliza en Home y Catálogo.

## 📚 Documentación del proyecto

- [`context.md`](./context.md): contexto funcional, usuario objetivo, vistas y comportamiento esperado.
- [`SPEC.md`](./SPEC.md): especificación general, criterios de aceptación, arquitectura y restricciones.
- [`.ai-context/components-specs/`](./.ai-context/components-specs/): contratos detallados de componentes, tipos TypeScript, estados UX/UI, responsive y accesibilidad.

## 🖼️ Referencias visuales

Las capturas utilizadas para definir la interfaz están organizadas por viewport:

- [`assets-dev/reference-image/ref-img-airbnb-mobile-desde375px/`](./assets-dev/reference-image/ref-img-airbnb-mobile-desde375px/)
- [`assets-dev/reference-image/ref-img-airbnb-tablet-desde745px/`](./assets-dev/reference-image/ref-img-airbnb-tablet-desde745px/)
- [`assets-dev/reference-image/ref-img-airbnb-desktop-desde1128px/`](./assets-dev/reference-image/ref-img-airbnb-desktop-desde1128px/)

Estas referencias cubren la página principal, el catálogo y el detalle del alojamiento en móvil, tablet y escritorio.

## ✅ Verificación local

Antes de entregar cambios, ejecuta las comprobaciones disponibles:

```bash
npm run lint
npm run build
```

Comprueba también manualmente:

1. Que las rutas `/`, `/catalog` y `/rooms/[id]` sean navegables.
2. Que la navegación interna no provoque una recarga completa.
3. Que la interfaz sea usable a 375 px de ancho.
4. Que el catálogo reorganice los resultados y muestre el mapa según el viewport.
5. Que la galería y el contador de huéspedes respondan a la interacción.
6. Que el corazón cambie de vacío a rosa relleno al guardar un alojamiento y que el estado coincida entre la tarjeta y su detalle durante la sesión actual.

## 🤝 Contribución

Las contribuciones son bienvenidas.

1. Crea una rama descriptiva para tu cambio.
2. Mantén el alcance enfocado y respeta las restricciones de `SPEC.md`.
3. Actualiza `context.md` o las especificaciones de componentes cuando cambie el comportamiento documentado.
4. Ejecuta `npm run lint` y `npm run build`.
5. Abre un issue o pull request con una descripción clara del cambio.

## 📄 Licencia

Este repositorio no incluye actualmente un archivo `LICENSE`. Antes de distribuirlo o reutilizarlo fuera del contexto educativo, define y agrega la licencia correspondiente.
