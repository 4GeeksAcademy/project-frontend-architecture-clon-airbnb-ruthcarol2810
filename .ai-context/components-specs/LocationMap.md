# ESPECIFICACIÓN DE COMPONENTE

## METADATOS DEL COMPONENTE

• Nombre del Archivo: `LocationMap.tsx`  
• Ruta en el Proyecto: `/components/room/`  
• Tipo de Componente: Server Component (por defecto)  
• Estado: Nuevo

## PROPÓSITO Y DESCRIPCIÓN

Muestra la ubicación aproximada del alojamiento en la sección “A dónde irás”, sin revelar una dirección exacta.

## CONTRATO DE DATOS (TYPESCRIPT)

```typescript
export interface LocationMapProps {
  areaLabel: string;
  mapImageUrl?: string;
  latitude?: number;
  longitude?: number;
}
```

## STACK Y DEPENDENCIAS PERMITIDAS

• Estilos: Tailwind CSS  
• Componentes Base: `next/image` o placeholder HTML  
• Iconos: SVG inline propio  
• Gestión de Datos: props; sin SDK cartográfico obligatorio

## COMPORTAMIENTO Y LÓGICA (UX/UI)

• Interactividad: los controles de zoom son opcionales y no deben prometer precisión de dirección.  
• Estados de UI:
  • Carga: placeholder del mapa.
  • Vacío: mostrar el área textual sin coordenadas.
  • Error: mostrar mapa neutro y el nombre de la zona.

## DISEÑO RESPONSIVO Y ACCESIBILIDAD (A11Y)

• Mobile First: mapa con altura moderada y texto de zona visible.  
• Desktop: mapa ancho dentro del contenido principal.  
• Accesibilidad: etiqueta de región, descripción textual de la ubicación y no depender exclusivamente de la imagen.

## EJEMPLO DE CÓDIGO ESPERADO

```tsx
export const LocationMap = ({ areaLabel, mapImageUrl }: LocationMapProps) => (
  <section aria-labelledby="location-heading">
    <h2 id="location-heading">A dónde irás</h2>
    <div className="overflow-hidden rounded-xl bg-sky-100">
      {mapImageUrl ? <img src={mapImageUrl} alt={`Mapa de ${areaLabel}`} className="h-72 w-full object-cover" /> : <div className="h-72 grid place-items-center">Mapa de {areaLabel}</div>}
    </div>
    <p>La ubicación exacta se comparte después de reservar.</p>
  </section>
);
```

