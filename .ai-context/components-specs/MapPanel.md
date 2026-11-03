# ESPECIFICACIÓN DE COMPONENTE

## METADATOS DEL COMPONENTE

• Nombre del Archivo: `MapPanel.tsx`  
• Ruta en el Proyecto: `/components/catalog/`  
• Tipo de Componente: Server Component (por defecto)  
• Estado: Nuevo

## PROPÓSITO Y DESCRIPCIÓN

Representa el mapa del Catálogo con un placeholder visual, pines simulados y precios cuando la integración cartográfica real no está disponible.

## CONTRATO DE DATOS (TYPESCRIPT)

```typescript
export interface MapMarker {
  id: string;
  label: string;
  positionClass: string;
}

export interface MapPanelProps {
  markers?: MapMarker[];
  label?: string;
}
```

## STACK Y DEPENDENCIAS PERMITIDAS

• Estilos: Tailwind CSS  
• Componentes Base: elementos HTML nativos  
• Iconos: SVG inline propio  
• Gestión de Datos: props; no requiere SDK de mapas

## COMPORTAMIENTO Y LÓGICA (UX/UI)

• Interactividad: los pines pueden ser botones visuales; al pulsarlos se anuncia el alojamiento si se conecta con el catálogo.  
• Estados de UI:
  • Carga: mostrar fondo skeleton.
  • Vacío: mostrar `Mapa` sin pines.
  • Error: mostrar un aviso que explique que el mapa no está disponible.

## DISEÑO RESPONSIVO Y ACCESIBILIDAD (A11Y)

• Mobile First: aparece debajo de la lista con altura limitada y controles grandes.  
• Desktop: ocupa el panel derecho y puede fijarse durante el desplazamiento.  
• Accesibilidad: región con nombre, pines como botones etiquetados y no comunicar información solo por color.

## EJEMPLO DE CÓDIGO ESPERADO

```tsx
export const MapPanel = ({ markers = [], label = 'Mapa' }: MapPanelProps) => (
  <section aria-label={label} className="relative min-h-80 overflow-hidden rounded-xl bg-sky-100">
    <span className="absolute left-4 top-4 rounded bg-white px-3 py-2">{label}</span>
    {markers.map((marker) => (
      <button key={marker.id} type="button" aria-label={marker.label}
        className={`absolute rounded-full bg-white px-2 py-1 shadow ${marker.positionClass}`}>
        {marker.label}
      </button>
    ))}
  </section>
);
```
