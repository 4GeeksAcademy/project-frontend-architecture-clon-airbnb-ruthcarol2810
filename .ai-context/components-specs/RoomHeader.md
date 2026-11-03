# ESPECIFICACIÓN DE COMPONENTE

## METADATOS DEL COMPONENTE

• Nombre del Archivo: `RoomHeader.tsx`  
• Ruta en el Proyecto: `/components/room/`  
• Tipo de Componente: Server Component (por defecto)  
• Estado: Nuevo

## PROPÓSITO Y DESCRIPCIÓN

Muestra el título, ubicación, valoración, reseñas y acciones principales del alojamiento.

## CONTRATO DE DATOS (TYPESCRIPT)

```typescript
export interface RoomHeaderProps {
  title: string;
  location: string;
  rating: number;
  reviewCount: number;
  onShare?: () => void;
  onFavorite?: () => void;
}
```

## STACK Y DEPENDENCIAS PERMITIDAS

• Estilos: Tailwind CSS  
• Componentes Base: `Link` y botones nativos  
• Iconos: SVG inline propio  
• Gestión de Datos: props

## COMPORTAMIENTO Y LÓGICA (UX/UI)

• Interactividad: compartir y favorito ejecutan callbacks opcionales; el enlace de retorno usa `Link` hacia `/catalog`.  
• Estados de UI:
  • Carga: usar skeleton del contenedor.
  • Vacío: mostrar título alternativo si faltan datos.
  • Error: no ocultar la navegación de retorno.

## DISEÑO RESPONSIVO Y ACCESIBILIDAD (A11Y)

• Mobile First: título y metadatos apilados; acciones con botones compactos.  
• Desktop: metadatos y acciones alineados en una fila.  
• Accesibilidad: encabezado `h1`, enlace de retorno claro, botones etiquetados y valoración expresada también como texto.

## EJEMPLO DE CÓDIGO ESPERADO

```tsx
import Link from 'next/link';

export const RoomHeader = ({ title, location, rating, reviewCount, onShare, onFavorite }: RoomHeaderProps) => (
  <header className="...">
    <Link href="/catalog">← Volver a resultados</Link>
    <h1>{title}</h1>
    <p>{location} · {rating.toFixed(2)} · {reviewCount} reseñas</p>
    <button type="button" onClick={onShare} aria-label="Compartir alojamiento">Compartir</button>
    <button type="button" onClick={onFavorite} aria-label="Guardar alojamiento">♡</button>
  </header>
);
```

