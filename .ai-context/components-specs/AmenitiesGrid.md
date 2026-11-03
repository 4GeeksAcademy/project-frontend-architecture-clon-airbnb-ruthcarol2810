# ESPECIFICACIÓN DE COMPONENTE

## METADATOS DEL COMPONENTE

• Nombre del Archivo: `AmenitiesGrid.tsx`  
• Ruta en el Proyecto: `/components/room/`  
• Tipo de Componente: Server Component (por defecto)  
• Estado: Nuevo

## PROPÓSITO Y DESCRIPCIÓN

Lista los servicios del alojamiento en una cuadrícula legible dentro del detalle.

## CONTRATO DE DATOS (TYPESCRIPT)

```typescript
export interface Amenity {
  id: string;
  label: string;
  icon: string;
}

export interface AmenitiesGridProps {
  amenities: Amenity[];
  maxVisible?: number;
  onShowAll?: () => void;
}
```

## STACK Y DEPENDENCIAS PERMITIDAS

• Estilos: Tailwind CSS  
• Componentes Base: elementos HTML nativos  
• Iconos: SVG inline propio  
• Gestión de Datos: props

## COMPORTAMIENTO Y LÓGICA (UX/UI)

• Interactividad: muestra los servicios principales y permite solicitar el resto con `onShowAll`.  
• Estados de UI:
  • Carga: mostrar filas skeleton.
  • Vacío: mostrar `Este alojamiento no ha indicado servicios`.
  • Error: omitir únicamente el servicio inválido.

## DISEÑO RESPONSIVO Y ACCESIBILIDAD (A11Y)

• Mobile First: una o dos columnas, con separadores claros.  
• Desktop: dos columnas amplias, como en la referencia de detalle.  
• Accesibilidad: lista semántica, texto además del icono y botón de “Mostrar todos” con nombre completo.

## EJEMPLO DE CÓDIGO ESPERADO

```tsx
export const AmenitiesGrid = ({ amenities, maxVisible = 6, onShowAll }: AmenitiesGridProps) => (
  <section aria-labelledby="amenities-heading">
    <h2 id="amenities-heading">Lo que este lugar ofrece</h2>
    <ul className="grid gap-4 sm:grid-cols-2">
      {amenities.slice(0, maxVisible).map((amenity) => (
        <li key={amenity.id}><span aria-hidden="true">{amenity.icon}</span> {amenity.label}</li>
      ))}
    </ul>
    {amenities.length > maxVisible && <button type="button" onClick={onShowAll}>Mostrar los {amenities.length} servicios</button>}
  </section>
);
```

