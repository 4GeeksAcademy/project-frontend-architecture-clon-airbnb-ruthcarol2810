# ESPECIFICACIÓN DE COMPONENTE

## METADATOS DEL COMPONENTE

• Nombre del Archivo: `FilterChips.tsx`  
• Ruta en el Proyecto: `/components/catalog/`  
• Tipo de Componente: Client Component (`'use client'`)  
• Estado: Nuevo

## PROPÓSITO Y DESCRIPCIÓN

Muestra filtros rápidos del catálogo como estacionamiento, cocina, cancelación gratuita, habitaciones y servicios.

## CONTRATO DE DATOS (TYPESCRIPT)

```typescript
export interface FilterOption {
  id: string;
  label: string;
  active?: boolean;
}

export interface FilterChipsProps {
  filters: FilterOption[];
  onToggle: (filterId: string) => void;
}
```

## STACK Y DEPENDENCIAS PERMITIDAS

• Estilos: Tailwind CSS  
• Componentes Base: botones nativos  
• Iconos: SVG inline propio  
• Gestión de Datos: estado de filtros en la página de catálogo

## COMPORTAMIENTO Y LÓGICA (UX/UI)

• Interactividad: alterna cada filtro y comunica el identificador al contenedor.  
• Estados de UI:
  • Carga: botones deshabilitados.
  • Vacío: no renderizar la barra si no existen opciones.
  • Error: mantener visible el filtro y permitir reintentar desde el contenedor.

## DISEÑO RESPONSIVO Y ACCESIBILIDAD (A11Y)

• Mobile First: fila desplazable horizontalmente.  
• Desktop: fila completa debajo de la búsqueda.  
• Accesibilidad: `aria-pressed`, etiqueta textual, foco visible y contraste suficiente para activo/inactivo.

## EJEMPLO DE CÓDIGO ESPERADO

```tsx
export const FilterChips = ({ filters, onToggle }: FilterChipsProps) => (
  <div aria-label="Filtros de búsqueda" className="flex gap-2 overflow-x-auto">
    {filters.map((filter) => (
      <button key={filter.id} type="button" aria-pressed={filter.active} onClick={() => onToggle(filter.id)}>
        {filter.label}
      </button>
    ))}
  </div>
);
```

