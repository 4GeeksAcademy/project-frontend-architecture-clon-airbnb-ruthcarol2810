# ESPECIFICACIÓN DE COMPONENTE

## METADATOS DEL COMPONENTE

• Nombre del Archivo: `CatalogToolbar.tsx`  
• Ruta en el Proyecto: `/components/catalog/`  
• Tipo de Componente: Client Component (`'use client'`)  
• Estado: Nuevo

## PROPÓSITO Y DESCRIPCIÓN

Presenta el contexto de búsqueda del catálogo, el número de resultados y el control para ordenar la lista.

## CONTRATO DE DATOS (TYPESCRIPT)

```typescript
export type SortOption = 'recommended' | 'price-asc' | 'price-desc';

export interface CatalogToolbarProps {
  resultCount: number;
  sort: SortOption;
  onSortChange: (sort: SortOption) => void;
}
```

## STACK Y DEPENDENCIAS PERMITIDAS

• Estilos: Tailwind CSS  
• Componentes Base: `select` y botones nativos  
• Iconos: SVG inline propio  
• Gestión de Datos: estado controlado mediante props

## COMPORTAMIENTO Y LÓGICA (UX/UI)

• Interactividad: actualiza el orden y conserva el resultado seleccionado.  
• Estados de UI:
  • Carga: deshabilitar el selector.
  • Vacío: mostrar `No encontramos alojamientos` cuando `resultCount` sea cero.
  • Error: el contenedor puede mostrar un aviso junto al toolbar.

## DISEÑO RESPONSIVO Y ACCESIBILIDAD (A11Y)

• Mobile First: apila contador y selector en dos filas.  
• Desktop: alinea ambos extremos de la barra.  
• Accesibilidad: `label` asociado al selector, texto de resultados en una región actualizable y foco visible.

## EJEMPLO DE CÓDIGO ESPERADO

```tsx
export const CatalogToolbar = ({ resultCount, sort, onSortChange }: CatalogToolbarProps) => (
  <header className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
    <p aria-live="polite">{resultCount} alojamientos</p>
    <label>Ordenar
      <select value={sort} onChange={(event) => onSortChange(event.target.value as SortOption)}>
        <option value="recommended">Recomendados</option>
        <option value="price-asc">Precio: menor a mayor</option>
        <option value="price-desc">Precio: mayor a menor</option>
      </select>
    </label>
  </header>
);
```

