# ESPECIFICACIÓN DE COMPONENTE

## METADATOS DEL COMPONENTE

• Nombre del Archivo: `LoadingState.tsx`  
• Ruta en el Proyecto: `/components/feedback/`  
• Tipo de Componente: Server Component (por defecto)  
• Estado: Nuevo

## PROPÓSITO Y DESCRIPCIÓN

Comunica la carga simulada de alojamientos o del detalle sin dejar una pantalla vacía.

## CONTRATO DE DATOS (TYPESCRIPT)

```typescript
export interface LoadingStateProps {
  label?: string;
  variant?: 'page' | 'grid' | 'detail';
}
```

## STACK Y DEPENDENCIAS PERMITIDAS

• Estilos: Tailwind CSS  
• Componentes Base: elementos HTML nativos  
• Iconos: SVG o animación CSS propia  
• Gestión de Datos: props

## COMPORTAMIENTO Y LÓGICA (UX/UI)

• Interactividad: no es interactivo.  
• Estados de UI:
  • Carga: mostrar texto y skeletons según `variant`.
  • Vacío: no aplica.
  • Error: no sustituye un mensaje de error.

## DISEÑO RESPONSIVO Y ACCESIBILIDAD (A11Y)

• Mobile First: ocupa el ancho disponible con espacio vertical reducido.  
• Desktop: ajusta la cantidad de skeletons al layout de la vista.  
• Accesibilidad: usar `role="status"`, texto visible u oculto accesible y `aria-live="polite"`.

## EJEMPLO DE CÓDIGO ESPERADO

```tsx
export const LoadingState = ({ label = 'Cargando alojamientos', variant = 'page' }: LoadingStateProps) => (
  <div role="status" aria-live="polite" className={`... ${variant}`}>
    <span className="sr-only">{label}</span>
    <div aria-hidden="true" className="animate-pulse rounded-xl bg-neutral-200" />
  </div>
);
```

