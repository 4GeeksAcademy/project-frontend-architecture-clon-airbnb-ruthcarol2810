# Especificaciones: Clone Airbnb

## 1. Objetivo

Un estudio de diseño de producto ha recibido el encargo de reconstruir el frontend de una plataforma de alquiler vacacional. Antes de crear un sistema de diseño propio, necesita validar una arquitectura de componentes mediante el clon de una interfaz de producción conocida: Airbnb.

El proyecto debe implementar tres vistas principales de una experiencia de alquiler vacacional usando Next.js, React y componentes reutilizables:

- Página de inicio y descubrimiento de alojamientos.
- Página de catálogo con resultados de búsqueda.
- Página de detalle de un alojamiento.

La implementación debe priorizar la claridad de la arquitectura, la reutilización de componentes, el diseño responsive y una experiencia de navegación coherente entre las tres vistas.

## 2. Usuario y objetivo de uso

El usuario es una persona que busca un alojamiento para un viaje.

La interfaz debe permitirle:

- Explorar alojamientos desde la página de inicio.
- Filtrar visualmente por una búsqueda y una categoría.
- Comparar resultados en el catálogo.
- Ordenar los alojamientos por precio.
- Consultar la ubicación aproximada mediante un área de mapa.
- Abrir el detalle de un alojamiento.
- Revisar sus fotografías, características, anfitrión y servicios.
- Seleccionar el número de huéspedes antes de iniciar una reserva.

## 3. Alcance

El alcance obligatorio comprende las siguientes rutas:

- `/`
- `/catalog`
- `/rooms/[id]`

La aplicación utilizará datos locales simulados. No es necesario implementar una API real, autenticación, pagos ni una reserva persistente.

El mapa del catálogo puede representarse inicialmente mediante un placeholder visual. La implementación de un mapa interactivo con pines es opcional y queda fuera del alcance principal.

## 4. Stack y restricciones técnicas

### Stack obligatorio

- Next.js 16.
- TypeScript.
- React.
- App Router.
- Tailwind CSS.
- Font Awesome Free para los iconos de la interfaz.
- Componentes funcionales de React.

La configuración actual del proyecto utiliza Next.js `16.4.5`, React `19.3.0`, TypeScript y Tailwind CSS.

### Restricciones

- Utilizar el App Router de Next.js.
- No utilizar una plantilla de inicio para resolver la interfaz.
- Usar clases de utilidad de Tailwind CSS para todos los estilos.
- No utilizar objetos `style={{}}` en línea.
- No utilizar librerías de componentes preconstruidas, incluyendo:
  - shadcn/ui.
  - Material UI.
  - Ant Design.
  - Chakra UI.
- Crear los componentes propios necesarios para la interfaz.
- Definir todos los componentes como constantes con funciones de React.
- No utilizar componentes de clase.
- Mantener la seguridad de tipos mediante interfaces o tipos de TypeScript.
- Utilizar iconos de Font Awesome en lugar de glifos decorativos para la iconografía de interfaz.
- Cada componente debe vivir en su propio archivo dentro de `/components`.
- Ningún componente debe superar aproximadamente 80 líneas de JSX y lógica. Si supera este límite, debe dividirse en componentes más pequeños y enfocados.

## 5. Navegación y comportamiento general

- La navegación interna debe utilizar siempre el componente `Link` de Next.js.
- No utilizar enlaces planos con `<a href="...">` para navegar entre las vistas internas.
- La navegación entre `/`, `/catalog` y `/rooms/[id]` debe funcionar sin recargar completamente el navegador.
- Cada tarjeta de alojamiento debe enlazar con el detalle correspondiente mediante `/rooms/[id]`.
- El icono de favorito debe mostrarse vacío inicialmente y relleno en rosa cuando el alojamiento está guardado.
- El estado de favorito debe poder activarse/desactivarse y mantenerse durante la sesión actual del navegador, sincronizado entre catálogo y detalle.
- La página de detalle debe ofrecer una forma clara de regresar al catálogo.
- Los estados de carga deben ser visibles mientras se simula la obtención de datos.
- La interfaz debe mantener un comportamiento coherente en móvil, tablet y escritorio.
- Los datos de los alojamientos y habitaciones deben estar representados mediante estructuras tipadas.

## 6. Vistas y secciones a desarrollar

### 6.1 Página de inicio — `/`

La página de inicio permite descubrir alojamientos.

Debe incluir:

- Barra de navegación superior.
  - Logotipo o nombre de la plataforma.
  - Campo de búsqueda.
  - Controles relacionados con el menú de usuario.
- Fila o sección de categorías.
  - Icono o representación visual.
  - Nombre de la categoría.
  - Estado visual para la categoría activa.
- Cuadrícula de alojamientos.
- Tarjetas reutilizables de alojamiento.
- Acción de favorito en cada tarjeta, con corazón vacío o relleno según el estado de guardado.
- Estado de carga visible durante la carga simulada.
- Carruseles horizontales agrupados por destino o tema.
- Pie de página con enlaces agrupados de soporte, anfitriones e información legal.

Comportamiento requerido:

- La búsqueda debe filtrar las tarjetas mientras el usuario escribe.
- La categoría activa debe resaltarse visualmente.
- Los alojamientos deben cargarse de forma simulada al montar la página mediante `useEffect`.
- Cada tarjeta debe enlazar con la página de detalle del alojamiento seleccionado.

### 6.2 Página de catálogo — `/catalog`

La página de catálogo muestra los resultados de búsqueda.

Debe incluir:

- Cabecera de resultados.
  - Número de alojamientos encontrados.
  - Selector de orden.
- Barra de filtros rápidos en formato de chips.
- Lista o cuadrícula de tarjetas de alojamiento.
- Área de mapa.
  - En escritorio debe aparecer junto a los resultados.
  - En móvil debe aparecer debajo de los resultados.
  - Inicialmente puede ser un recuadro gris con la etiqueta `Mapa`.
- Estado de carga visible durante la carga simulada.

Comportamiento requerido:

- Las tarjetas deben reutilizar el mismo componente utilizado en la página de inicio.
- El usuario debe poder ordenar los resultados por precio ascendente o descendente.
- El orden seleccionado debe reorganizar visualmente los alojamientos.
- La distribución debe adaptarse al tamaño de pantalla.

### 6.3 Página de detalle — `/rooms/[id]`

La página de detalle presenta toda la información relevante de un alojamiento seleccionado.

Debe cargar el alojamiento a partir del identificador incluido en la URL y mostrar un estado de carga mientras los datos simulados no estén disponibles.

La página debe incluir obligatoriamente estas cinco secciones:

1. **Galería de fotografías**
   - Imagen principal o conjunto de imágenes.
   - Controles para avanzar y retroceder.
   - Indicador de la imagen actual cuando corresponda.

2. **Cabecera del alojamiento**
   - Título.
   - Ubicación.
   - Valoración.
   - Número de reseñas.
   - Acción para regresar al catálogo.
  - Acción para guardar/quitar de favoritos, sincronizada con la tarjeta del alojamiento.

3. **Información del anfitrión**
   - Avatar de placeholder.
   - Nombre del anfitrión.
   - Años como anfitrión u otra información equivalente.

4. **Servicios o amenities**
   - Cuadrícula de servicios.
   - Icono o representación visual.
   - Nombre y descripción breve de cada servicio.

5. **Tarjeta de reserva**
  - Total de la estancia y precio por noche.
  - Actualización del total según las noches seleccionadas en el calendario.
   - Contador de huéspedes.
   - Controles para aumentar o reducir huéspedes.
   - Botón principal para iniciar la reserva.
  - En escritorio, permanece sticky durante el desplazamiento del contenido del detalle.

La composición puede complementar estas cinco secciones con:

- Calendario visual de disponibilidad.
- Resumen de valoraciones y reseñas.
- Mapa de ubicación aproximada.

## 7. Inventario de componentes

| Componente | Función |
|---|---|
| `Navbar` | Mostrar el logotipo, la búsqueda y los controles principales del usuario. |
| `SearchBar` | Capturar el texto de búsqueda y comunicar los cambios al contenedor correspondiente. |
| `CategoryFilters` | Mostrar las categorías disponibles y el estado de la categoría activa. |
| `CategoryItem` | Representar una categoría individual con su icono, etiqueta y estado visual. |
| `ListingGrid` | Organizar una colección de alojamientos en una cuadrícula responsive. |
| `ListingCard` | Mostrar la imagen, título, ubicación, precio y valoración de un alojamiento. Debe reutilizarse en Home y Catálogo. |
| `FavoritesProvider` | Compartir los alojamientos favoritos y persistirlos en `sessionStorage` durante la sesión actual del navegador. |
| `LoadingState` | Mostrar una indicación visual mientras se cargan los datos. |
| `ResultsHeader` | Mostrar el número de resultados y el selector de orden. |
| `SortSelect` | Permitir seleccionar el orden de los resultados. |
| `MapPanel` | Representar el área de mapa del catálogo con placeholder y pines simulados. |
| `FilterChips` | Mostrar filtros rápidos del catálogo. |
| `ListingCarousel` | Agrupar y desplazar tarjetas por destino o tema en Home. |
| `SiteFooter` | Mostrar enlaces informativos y legales compartidos. |
| `BackLink` | Permitir regresar al catálogo mediante navegación interna. |
| `PhotoGallery` | Mostrar la galería del alojamiento y controlar la imagen activa. |
| `RoomHeader` | Mostrar el título, ubicación, valoración y reseñas del alojamiento. |
| `HostInfo` | Mostrar la información básica del anfitrión. |
| `AmenitiesGrid` | Mostrar los servicios disponibles en el alojamiento. |
| `AmenityItem` | Representar un servicio individual. |
| `BookingCard` | Mostrar el precio y gestionar la configuración inicial de la reserva. |
| `AvailabilityCalendar` | Mostrar disponibilidad y selección visual de fechas. |
| `ReviewsSection` | Mostrar valoración, categorías y reseñas resumidas. |
| `LocationMap` | Mostrar la zona aproximada del alojamiento. |

Los nombres anteriores son orientativos. Pueden adaptarse a las convenciones del proyecto, siempre que se mantengan las responsabilidades separadas y la reutilización indicada.

Las especificaciones detalladas de estos componentes se encuentran en `.ai-context/components-specs/`. Cada archivo define su ruta, tipo de componente, contrato TypeScript, dependencias permitidas, estados UX/UI, comportamiento mobile-first, requisitos de accesibilidad y una estructura JSX de referencia.

## 8. Estado y datos

### Estados obligatorios

La implementación debe utilizar `useState` en al menos tres casos distintos entre los siguientes:

- Texto de búsqueda.
- Categoría activa.
- Orden de resultados.
- Número de huéspedes.
- Índice de la galería de fotografías.
- Estado de favoritos, compartido entre las vistas del catálogo y detalle.

La implementación debe utilizar `useEffect` para simular la carga de datos al montar el componente en las tres páginas. Mientras los datos no estén disponibles debe mostrarse un estado de carga visible.

### Tipos principales

Se deben definir tipos o interfaces de TypeScript para las estructuras principales, como mínimo:

- Alojamiento.
- Habitación o detalle de alojamiento.
- Anfitrión.
- Servicio o amenity.
- Categoría.
- Opciones de orden, cuando corresponda.

Como referencia, un alojamiento puede contener:

- `id`.
- `title`.
- `location`.
- `image` o `images`.
- `pricePerNight`.
- `rating`.
- `reviewCount`.
- `category`.

El detalle de una habitación puede incluir además:

- Descripción.
- Fotografías.
- Información del anfitrión.
- Servicios.
- Capacidad máxima.
- Ubicación.
- Datos necesarios para la tarjeta de reserva.

En el detalle, el calendario permite seleccionar hasta tres días consecutivos disponibles (equivalentes a un máximo de dos noches) y la tarjeta de reserva actualiza el total de la estancia. La acción de reservar es demostrativa: no procesa pagos ni crea una reserva persistente. En escritorio, la tarjeta permanece visible durante el desplazamiento; en pantallas menores se muestra en el flujo normal del contenido.

## 9. Proceso de implementación

1. Revisar las capturas de referencia y el documento `context.md`.
2. Identificar las estructuras visuales que se repiten entre páginas.
3. Definir los tipos de datos principales.
4. Crear los componentes compartidos dentro de `/components`.
5. Implementar la página de inicio.
6. Implementar el catálogo reutilizando las tarjetas de alojamiento.
7. Implementar la página de detalle con la ruta dinámica `/rooms/[id]`.
8. Conectar la navegación interna mediante `Link`.
9. Añadir los estados de carga y las interacciones requeridas.
10. Ajustar el diseño mobile-first.
11. Verificar los estados responsive y la navegación completa.
12. Ejecutar las comprobaciones disponibles del proyecto.

### Reglas de arquitectura

- Mantener una responsabilidad por componente.
- Evitar componentes monolíticos.
- Extraer cualquier sección que crezca demasiado.
- Reutilizar componentes en lugar de duplicar JSX.
- Mantener los datos y la presentación claramente separados cuando sea razonable.
- Usar nombres descriptivos y consistentes.
- Evitar lógica de navegación duplicada.
- Mantener los componentes funcionales y definidos mediante `const`.

## 10. Diseño responsive

La implementación debe ser mobile-first.

### Viewport base

El diseño debe comenzar en un viewport de 375 px de ancho. Este viewport debe quedar correctamente resuelto antes de aplicar breakpoints de escritorio.

### Reglas responsive

- En móvil, la cuadrícula de alojamientos debe utilizar una columna.
- En tablet y escritorio, debe adaptarse a varias columnas según el espacio disponible.
- En el catálogo:
  - El mapa debe aparecer debajo de los resultados en móvil.
  - El mapa debe aparecer junto a los resultados en escritorio.
- La navegación, los controles y la tarjeta de reserva deben seguir siendo utilizables en pantallas pequeñas.
- Los breakpoints deben comenzar a partir de aproximadamente 768 px, salvo que la composición requiera un ajuste diferente.

## 11. Criterios de aceptación

### Configuración

- Existe un archivo `context.md` en la raíz con una descripción clara de la interfaz, sus componentes principales y el usuario objetivo.
- El proyecto utiliza Next.js 16, TypeScript, Tailwind CSS y App Router.
- La solución no depende de una plantilla de inicio para construir la interfaz.
- No se utilizan librerías de componentes preconstruidas.
- Todos los estilos se implementan con clases de utilidad de Tailwind CSS.
- No existen objetos `style={{}}` para aplicar estilos en línea.

### Rutas y navegación

- La ruta `/` está implementada y es navegable.
- La ruta `/catalog` está implementada y es navegable.
- La ruta `/rooms/[id]` está implementada y es navegable.
- Toda la navegación interna utiliza `Link` de Next.js.
- Las vistas se pueden recorrer sin recargas completas del navegador.
- Las tarjetas de alojamiento enlazan con el detalle correspondiente.
- La página de detalle permite regresar al catálogo.

### Interacciones y estados

- La búsqueda filtra los alojamientos desde la página de inicio.
- La categoría activa tiene un estado visual identificable.
- Los iconos de categorías, navegación y amenities se representan con Font Awesome y mantienen su alineación en móvil, tablet y escritorio.
- Los corazones de favorito aparecen vacíos por defecto; al activarlos se rellenan de rosa y el mismo estado se refleja en el catálogo y el detalle durante la sesión.
- El catálogo permite ordenar por precio ascendente y descendente.
- El contador de huéspedes modifica el número mostrado.
- El calendario permite seleccionar fechas disponibles y la tarjeta de reserva muestra el total correspondiente a las noches seleccionadas junto al precio por noche.
- La tarjeta de reserva usa posicionamiento sticky en escritorio y permanece en el flujo normal en móvil.
- La galería permite avanzar y retroceder entre fotografías.
- `useState` se utiliza en al menos tres interacciones distintas.
- `useEffect` simula la carga de datos en al menos dos páginas.
- Los estados de carga son visibles mientras los datos no están disponibles.

### Componentes y tipos

- La tarjeta de alojamiento se reutiliza en Home y Catálogo.
- Los componentes están divididos en archivos individuales.
- Cada componente tiene una responsabilidad única.
- Todos los componentes son funcionales y están definidos con `const`.
- No existen componentes de clase.
- Se han definido tipos o interfaces para las estructuras de datos principales.
- Ningún componente supera aproximadamente 80 líneas de JSX y lógica sin una justificación clara.

### Página de detalle

- La página de detalle incluye una galería con navegación.
- Incluye la cabecera del alojamiento.
- Incluye la información del anfitrión.
- Incluye la sección de amenities.
- Incluye la tarjeta de reserva.
- La información mostrada corresponde al identificador de la ruta.
- Incluye, cuando estén disponibles los datos simulados, disponibilidad, reseñas y ubicación aproximada sin revelar una dirección exacta.

### Responsive y trazabilidad

- El diseño mobile-first funciona correctamente a 375 px.
- La interfaz se adapta correctamente a partir de 768 px.
- En escritorio, el catálogo muestra los resultados junto al área de mapa.
- En móvil, el mapa aparece debajo de los resultados.
- La relación entre las capturas de referencia y las decisiones de implementación queda documentada en `context.md` o en comentarios puntuales del código cuando sea necesario.

## 12. Referencias visuales

Las capturas de referencia se encuentran en:

- `assets-dev/reference-image/ref-img-airbnb-desktop-desde1128px/`
- `assets-dev/reference-image/ref-img-airbnb-tablet-desde745px/`
- `assets-dev/reference-image/ref-img-airbnb-mobile-desde375px/`

Las referencias cubren:

- Página principal.
- Catálogo y resultados de búsqueda.
- Detalle del alojamiento.
- Adaptaciones para escritorio, tablet y móvil.

El archivo `context.md` de la raíz funciona como documento de contexto funcional y debe mantenerse alineado con esta especificación.

## 13. Ampliaciones opcionales

Una vez completados y validados los requisitos obligatorios, pueden añadirse las siguientes mejoras:

- Sustituir el placeholder del mapa por un mapa interactivo con pines.
- Añadir filtros adicionales de precio, capacidad o servicios.
- Añadir una galería con miniaturas.

Estas ampliaciones no deben comprometer el cumplimiento de los criterios obligatorios ni introducir dependencias innecesarias.