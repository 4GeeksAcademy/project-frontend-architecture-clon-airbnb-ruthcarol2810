# ESPECIFICACIÓN DE COMPONENTE

## METADATOS DEL COMPONENTE

• Nombre del Archivo: `CategoryTabs.tsx`  
• Ruta en el Proyecto: `/components/home/`  
• Tipo de Componente: Client Component (`'use client'`)  
• Estado: Nuevo

## PROPÓSITO Y DESCRIPCIÓN

Muestra las categorías de exploración con icono y etiqueta, y comunica la categoría seleccionada a Home.

## CONTRATO DE DATOS (TYPESCRIPT)

```typescript
export interface Category {
  id: string;
  label: string;
  icon: string;
}

export interface CategoryTabsProps {
  categories: Category[];
  activeId: string;
  onChange: (categoryId: string) => void;
}
```

## STACK Y DEPENDENCIAS PERMITIDAS

• Estilos: Tailwind CSS  
• Componentes Base: botones nativos  
• Iconos: SVG o emoji controlado por datos  
• Gestión de Datos: props y `useState` en la página contenedora

## COMPORTAMIENTO Y LÓGICA (UX/UI)

• Interactividad: al seleccionar una categoría, llama a `onChange` y aplica el estado activo.  
• Estados de UI:
  • Carga: mostrar botones deshabilitados si la página aún carga.
  • Vacío: no renderizar la fila si `categories` está vacío.
  • Error: el contenedor decide si muestra un aviso cuando los datos no son válidos.

## DISEÑO RESPONSIVO Y ACCESIBILIDAD (A11Y)

• Mobile First: fila desplazable horizontalmente sin romper el ancho de 375 px.  
• Desktop: centra o distribuye las categorías en una fila amplia.  
• Accesibilidad: usar `role="tablist"`, `role="tab"`, `aria-selected`, foco visible y nombre textual junto al icono.

## EJEMPLO DE CÓDIGO ESPERADO

```tsx
export const CategoryTabs = ({ categories, activeId, onChange }: CategoryTabsProps) => (
  <div role="tablist" className="flex gap-6 overflow-x-auto">
    {categories.map((category) => (
      <button key={category.id} type="button" role="tab"
        aria-selected={category.id === activeId} onClick={() => onChange(category.id)}>
        <span aria-hidden="true">{category.icon}</span>
        <span>{category.label}</span>
      </button>
    ))}
  </div>
);
```

