# Contexto del proyecto

## Objetivo

Implementar en Next.js y React tres vistas inspiradas en la experiencia de Airbnb: la página de inicio, el catálogo de resultados de búsqueda y la página de detalle de un alojamiento. Las vistas compartirán componentes y permitirán navegar entre ellas.

## Vistas y componentes principales

### 1. Inicio — `/`

La página de inicio permite descubrir alojamientos. Incluye una barra superior con el logo, un campo de búsqueda y controles del menú de usuario; debajo, una fila de categorías y una cuadrícula de alojamientos. La búsqueda filtra las tarjetas mientras se escribe, y la categoría activa se resalta. Al montar la página, los alojamientos se cargan de forma simulada y se muestra un indicador mientras tanto.

**Componentes principales:**
- Barra de navegación: logo, búsqueda y menú de usuario.
- Filtros de categorías: icono y etiqueta para categorías como Playa, Mansiones o Tendencias.
- Cuadrícula responsiva de alojamientos.
- Tarjeta de alojamiento reutilizable: placeholder de foto, título, precio por noche y valoración con estrellas.
- Acción para marcar cada alojamiento como favorito, inicialmente con un corazón vacío.
- Carruseles por destino o tema, con controles anterior y siguiente.
- Pie de página con enlaces de ayuda, anfitriones, información legal, idioma y moneda.
- Indicador de carga.

### 2. Catálogo — `/catalog`

La página de catálogo muestra los resultados de búsqueda y permite ordenarlos por precio ascendente o descendente. En escritorio, presenta las tarjetas junto a un área de mapa; en móvil, el mapa aparece debajo de los resultados. Inicialmente, el mapa puede ser un recuadro gris con la etiqueta «Mapa».

**Componentes principales:**
- Cabecera de resultados: número de alojamientos y selector de orden.
- Filtros rápidos en formato de chips.
- Lista o cuadrícula de tarjetas de alojamiento reutilizadas desde Inicio.
- Área de mapa con placeholder.
- Estado de ordenación que reorganiza los alojamientos por precio.
- Estado visual del corazón sincronizado con la ficha de detalle del alojamiento.

### 3. Detalle de habitación — `/rooms/[id]`

La página de detalle presenta la información completa de un alojamiento seleccionado. Carga los datos según el identificador de la URL y muestra un estado de carga mientras están disponibles. Incluye una galería navegable, información del alojamiento y del anfitrión, servicios y una tarjeta para configurar los huéspedes y comenzar una reserva.

**Componentes principales:**
- Breadcrumb o botón para volver al Catálogo.
- Galería de fotos con controles «Anterior» y «Siguiente».
- Cabecera del alojamiento: título, valoración, número de reseñas y ubicación.
- Información del anfitrión: avatar de placeholder, nombre y años como anfitrión.
- Cuadrícula de servicios: iconos y etiquetas.
- Acción para guardar o quitar el alojamiento de favoritos, con el corazón vacío al inicio y rosa relleno al activarlo.
- Tarjeta de reserva: total de la estancia, precio por noche, contador de huéspedes y botón de acción. En escritorio permanece sticky durante el desplazamiento; en móvil se presenta en el flujo normal.
- Calendario visual de disponibilidad que permite seleccionar hasta tres días consecutivos (equivalentes a un máximo de dos noches) y actualiza el total mostrado en la tarjeta.
- Resumen de valoración y reseñas.
- Mapa de ubicación aproximada.
- Indicador de carga.

## Usuario y objetivo

El usuario es una persona que busca un alojamiento para un viaje y quiere comparar opciones de forma sencilla. En la plataforma puede explorar categorías, filtrar y ordenar resultados, revisar la ubicación y los detalles de cada alojamiento, y configurar el número de huéspedes antes de iniciar una reserva.

## Navegación y criterios de implementación

- Las tarjetas de Inicio y Catálogo enlazan con el detalle del alojamiento correspondiente.
- Los iconos de interfaz usan Font Awesome. Los favoritos se comparten entre tarjetas y ficha de detalle y se conservan en `sessionStorage` durante la sesión actual del navegador.
- La acción de reserva es demostrativa: no procesa pagos ni guarda una reserva persistente.
- Usar el componente `Link` de Next.js para la navegación interna; no usar etiquetas `<a href="...">` planas.
- Cada componente debe vivir en su propio archivo dentro de `/components`.
- Definir los componentes funcionales con `const`.
- Mantener cada componente en torno a 80 líneas de JSX y lógica como máximo; dividirlo si lo supera.
- La cuadrícula de Inicio debe adaptarse al tamaño de pantalla: una columna en móvil y varias en escritorio.
- Las especificaciones de componentes se encuentran en `.ai-context/components-specs/` y definen contratos TypeScript, estados UX/UI, accesibilidad y comportamiento responsive.
- Las capturas de `assets-dev/reference-image/` son la referencia visual para la distribución mobile-first, los carruseles, los filtros, el mapa y las secciones del detalle.

## Ampliaciones opcionales

Una vez completados los requisitos principales, se puede sustituir el placeholder del mapa por un mapa interactivo con pines para los alojamientos.