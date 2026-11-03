# ESPECIFICACIÓN DE COMPONENTE

## METADATOS DEL COMPONENTE

• Nombre del Archivo: `ListingCarousel.tsx`  
• Ruta en el Proyecto: `/components/listings/`  
• Tipo de Componente: Client Component (`'use client'`)  
• Estado: Nuevo

## PROPÓSITO Y DESCRIPCIÓN

Agrupa una sección de alojamientos por destino o tema y permite recorrer sus tarjetas horizontalmente, como en la Home.

## CONTRATO DE DATOS (TYPESCRIPT)

```typescript
import type { Listing } from './ListingCard';

export interface ListingCarouselProps {
  title: string;
  listings: Listing[];
}
```

## STACK Y DEPENDENCIAS PERMITIDAS

• Estilos: Tailwind CSS  
• Componentes Base: `ListingCard` y botones nativos  
• Iconos: SVG inline propio  
• Gestión de Datos: props y estado local del desplazamiento

## COMPORTAMIENTO Y LÓGICA (UX/UI)

• Interactividad: los botones anterior/siguiente desplazan el carrusel; las tarjetas mantienen sus enlaces al detalle.  
• Estados de UI:
  • Carga: mostrar tarjetas skeleton.
  • Vacío: mostrar la sección solo con un mensaje breve si no hay alojamientos.
  • Error: conservar el título y mostrar un aviso no bloqueante.

## DISEÑO RESPONSIVO Y ACCESIBILIDAD (A11Y)

• Mobile First: carrusel horizontal con tarjetas de ancho fijo y desplazamiento táctil.  
• Desktop: muestra varias tarjetas simultáneamente y controles en el encabezado.  
• Accesibilidad: botones con `aria-label`, foco visible, región con `aria-label` y no depender solo de gestos.

## EJEMPLO DE CÓDIGO ESPERADO

```tsx
export const ListingCarousel = ({ title, listings }: ListingCarouselProps) => (
  <section aria-labelledby={`section-${title}`} className="...">
    <div className="flex justify-between">
      <h2 id={`section-${title}`}>{title}</h2>
      <div>
        <button type="button" aria-label="Alojamientos anteriores">‹</button>
        <button type="button" aria-label="Más alojamientos">›</button>
      </div>
    </div>
    <div className="flex snap-x gap-4 overflow-x-auto">
      {listings.map((listing) => <ListingCard key={listing.id} listing={listing} />)}
    </div>
  </section>
);
```

