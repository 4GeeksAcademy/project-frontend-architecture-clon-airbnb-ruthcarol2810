# ESPECIFICACIÓN DE COMPONENTE

## METADATOS DEL COMPONENTE

• Nombre del Archivo: `AvailabilityCalendar.tsx`  
• Ruta en el Proyecto: `/components/room/`  
• Tipo de Componente: Client Component (`'use client'`)  
• Estado: Nuevo

## PROPÓSITO Y DESCRIPCIÓN

Representa la disponibilidad mensual del alojamiento y permite seleccionar fechas cuando se habilite el flujo de reserva.

## CONTRATO DE DATOS (TYPESCRIPT)

```typescript
export interface AvailabilityCalendarProps {
  month: string;
  availableDays: number[];
  selectedDays?: number[];
  onDaySelect?: (day: number) => void;
}
```

## STACK Y DEPENDENCIAS PERMITIDAS

• Estilos: Tailwind CSS  
• Componentes Base: botones nativos  
• Iconos: SVG inline propio  
• Gestión de Datos: props y estado local de selección

## COMPORTAMIENTO Y LÓGICA (UX/UI)

• Interactividad: permite seleccionar días disponibles y marca los no disponibles como deshabilitados.  
• Estados de UI:
  • Carga: cuadrícula skeleton.
  • Vacío: mostrar que no hay disponibilidad publicada.
  • Error: mensaje si el calendario no puede cargarse.

## DISEÑO RESPONSIVO Y ACCESIBILIDAD (A11Y)

• Mobile First: un mes a la vez con celdas táctiles.  
• Desktop: puede mostrar dos meses en paralelo.  
• Accesibilidad: tabla o cuadrícula con nombres de día, `aria-selected`, `aria-disabled` y navegación por teclado.

## EJEMPLO DE CÓDIGO ESPERADO

```tsx
export const AvailabilityCalendar = ({ month, availableDays, selectedDays = [], onDaySelect }: AvailabilityCalendarProps) => (
  <section aria-labelledby="calendar-heading">
    <h2 id="calendar-heading">{month}</h2>
    <div role="grid" className="grid grid-cols-7">
      {Array.from({ length: 31 }, (_, index) => {
        const day = index + 1;
        const available = availableDays.includes(day);
        return <button key={day} type="button" role="gridcell" disabled={!available}
          aria-selected={selectedDays.includes(day)} onClick={() => onDaySelect?.(day)}>{day}</button>;
      })}
    </div>
  </section>
);
```

