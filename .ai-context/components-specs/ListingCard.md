# ESPECIFICACIÓN DE COMPONENTE

## METADATOS DEL COMPONENTE

• Nombre del Archivo: `ListingCard.tsx`  
• Ruta en el Proyecto: `/components/listings/`  
• Tipo de Componente: Server Component (por defecto)  
• Estado: Nuevo

## PROPÓSITO Y DESCRIPCIÓN

Presenta un alojamiento reutilizable en Home y Catálogo, con imagen, etiqueta, favorito, ubicación, precio y valoración.

## CONTRATO DE DATOS (TYPESCRIPT)

```typescript
export interface Listing {
  id: string;
  title: string;
  location: string;
  imageUrl: string;
  pricePerNight: number;
  rating: number;
  reviewCount?: number;
  badge?: string;
}

export interface ListingCardProps {
  listing: Listing;
  priority?: boolean;
}
```

## STACK Y DEPENDENCIAS PERMITIDAS

• Estilos: Tailwind CSS  
• Componentes Base: `Link` de Next.js e imagen nativa o `next/image`  
• Iconos: SVG inline propio  
• Gestión de Datos: props

## COMPORTAMIENTO Y LÓGICA (UX/UI)

• Interactividad: toda la tarjeta enlaza a `/rooms/[id]`; el botón de favorito debe detener la navegación y exponer su estado si se implementa.  
• Estados de UI:
  • Carga: usar `ListingCardSkeleton` en el contenedor.
  • Vacío: no renderizar tarjetas; el contenedor muestra el mensaje.
  • Error: usar imagen alternativa accesible si la imagen falla.

## DISEÑO RESPONSIVO Y ACCESIBILIDAD (A11Y)

• Mobile First: una columna, imagen con proporción estable y texto legible a 375 px.  
• Desktop: se adapta a las columnas o carruseles de la vista.  
• Accesibilidad: `alt` descriptivo, enlace con nombre comprensible, botón de favorito con `aria-label` y foco visible.

## EJEMPLO DE CÓDIGO ESPERADO

```tsx
import Image from 'next/image';
import Link from 'next/link';

export const ListingCard = ({ listing, priority }: ListingCardProps) => (
  <article className="...">
    <Link href={`/rooms/${listing.id}`} className="block">
      <Image src={listing.imageUrl} alt={listing.title} width={400} height={300} priority={priority} />
      <h3>{listing.title}</h3>
      <p>{listing.location}</p>
      <p>${listing.pricePerNight} por noche · ★ {listing.rating}</p>
    </Link>
  </article>
);
```

