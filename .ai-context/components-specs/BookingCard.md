# ESPECIFICACIÓN DE COMPONENTE

## METADATOS DEL COMPONENTE

• Nombre del Archivo: `BookingCard.tsx`  
• Ruta en el Proyecto: `/components/room/`  
• Tipo de Componente: Client Component (`'use client'`)  
• Estado: Nuevo

## PROPÓSITO Y DESCRIPCIÓN

Permite revisar el precio, ajustar huéspedes y comenzar el flujo de reserva desde el detalle.

## CONTRATO DE DATOS (TYPESCRIPT)

```typescript
export interface BookingCardProps {
  pricePerNight: number;
  maxGuests: number;
  guests: number;
  onGuestsChange: (guests: number) => void;
  onReserve: () => void;
  isLoading?: boolean;
}
```

## STACK Y DEPENDENCIAS PERMITIDAS

• Estilos: Tailwind CSS  
• Componentes Base: botones, `input` y elementos nativos  
• Iconos: SVG inline propio  
• Gestión de Datos: estado de huéspedes mediante props

## COMPORTAMIENTO Y LÓGICA (UX/UI)

• Interactividad: incrementa o reduce huéspedes sin superar `maxGuests`; el botón principal ejecuta `onReserve`.  
• Estados de UI:
  • Carga: deshabilitar controles y mostrar texto `Cargando`.
  • Vacío: no aplica.
  • Error: mostrar validación si el número de huéspedes no es válido.

## DISEÑO RESPONSIVO Y ACCESIBILIDAD (A11Y)

• Mobile First: tarjeta a ancho completo y controles táctiles.  
• Desktop: tarjeta sticky junto al contenido principal.  
• Accesibilidad: `fieldset` y `legend`, botones con etiquetas, `aria-live` para el total y foco visible.

## EJEMPLO DE CÓDIGO ESPERADO

```tsx
export const BookingCard = ({ pricePerNight, maxGuests, guests, onGuestsChange, onReserve, isLoading }: BookingCardProps) => (
  <aside className="rounded-xl border p-5 shadow-sm">
    <p><strong>${pricePerNight}</strong> por noche</p>
    <fieldset>
      <legend>Huéspedes</legend>
      <button type="button" aria-label="Reducir huéspedes" disabled={guests <= 1} onClick={() => onGuestsChange(guests - 1)}>−</button>
      <output aria-live="polite">{guests}</output>
      <button type="button" aria-label="Aumentar huéspedes" disabled={guests >= maxGuests} onClick={() => onGuestsChange(guests + 1)}>+</button>
    </fieldset>
    <button type="button" disabled={isLoading} onClick={onReserve}>Reservar</button>
  </aside>
);
```

