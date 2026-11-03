# ESPECIFICACIÓN DE COMPONENTE

## METADATOS DEL COMPONENTE

• Nombre del Archivo: `PhotoGallery.tsx`  
• Ruta en el Proyecto: `/components/room/`  
• Tipo de Componente: Client Component (`'use client'`)  
• Estado: Nuevo

## PROPÓSITO Y DESCRIPCIÓN

Muestra la galería principal del alojamiento y permite avanzar, retroceder y consultar las imágenes.

## CONTRATO DE DATOS (TYPESCRIPT)

```typescript
export interface RoomImage {
  src: string;
  alt: string;
}

export interface PhotoGalleryProps {
  images: RoomImage[];
  activeIndex: number;
  onIndexChange: (index: number) => void;
}
```

## STACK Y DEPENDENCIAS PERMITIDAS

• Estilos: Tailwind CSS  
• Componentes Base: `next/image` y botones nativos  
• Iconos: SVG inline propio  
• Gestión de Datos: índice controlado por la página

## COMPORTAMIENTO Y LÓGICA (UX/UI)

• Interactividad: botones anterior/siguiente recorren la galería sin salir de los límites; los indicadores permiten seleccionar una imagen.  
• Estados de UI:
  • Carga: mostrar bloque skeleton.
  • Vacío: mostrar un bloque con `No hay fotografías disponibles`.
  • Error: mostrar texto alternativo y conservar la estructura.

## DISEÑO RESPONSIVO Y ACCESIBILIDAD (A11Y)

• Mobile First: una imagen principal, controles superpuestos y desplazamiento táctil opcional.  
• Desktop: cuadrícula de imagen principal y miniaturas laterales, como en las referencias.  
• Accesibilidad: `alt` específico, `aria-label` en controles, `aria-live` para el índice y teclado funcional.

## EJEMPLO DE CÓDIGO ESPERADO

```tsx
import Image from 'next/image';

export const PhotoGallery = ({ images, activeIndex, onIndexChange }: PhotoGalleryProps) => {
  const image = images[activeIndex];
  if (!image) return <div role="status">No hay fotografías disponibles</div>;
  return (
    <section aria-label="Galería del alojamiento" className="relative">
      <Image src={image.src} alt={image.alt} width={1200} height={800} className="..." />
      <button type="button" aria-label="Fotografía anterior" onClick={() => onIndexChange(Math.max(0, activeIndex - 1))}>‹</button>
      <button type="button" aria-label="Fotografía siguiente" onClick={() => onIndexChange(Math.min(images.length - 1, activeIndex + 1))}>›</button>
    </section>
  );
};
```

