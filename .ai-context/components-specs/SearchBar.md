# ESPECIFICACIÓN DE COMPONENTE

## METADATOS DEL COMPONENTE

• Nombre del Archivo: `SearchBar.tsx`  
• Ruta en el Proyecto: `/components/search/`  
• Tipo de Componente: Client Component (`'use client'`)  
• Estado: Nuevo

## PROPÓSITO Y DESCRIPCIÓN

Captura el destino o texto de búsqueda y agrupa los controles visuales de destino, fechas, huéspedes y envío.

## CONTRATO DE DATOS (TYPESCRIPT)

```typescript
export interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  placeholder?: string;
}
```

## STACK Y DEPENDENCIAS PERMITIDAS

• Estilos: Tailwind CSS  
• Componentes Base: `input`, `button` y `fieldset` nativos  
• Iconos: SVG inline propio  
• Gestión de Datos: estado controlado mediante props

## COMPORTAMIENTO Y LÓGICA (UX/UI)

• Interactividad: actualiza la búsqueda al escribir y ejecuta `onSubmit` al pulsar el botón o Enter. Los campos de fechas y huéspedes pueden mostrarse como controles visuales no persistentes.  
• Estados de UI:
  • Carga: deshabilitar el botón mientras el contenedor carga.
  • Vacío: mostrar el placeholder.
  • Error: permitir un mensaje de validación debajo del campo cuando se añada validación.

## DISEÑO RESPONSIVO Y ACCESIBILIDAD (A11Y)

• Mobile First: apila los controles y ocupa el ancho disponible.  
• Desktop: presenta una cápsula horizontal con separadores entre campos.  
• Accesibilidad: `label` asociado al input, `aria-label` en botones de icono, `aria-busy` durante carga y foco visible.

## EJEMPLO DE CÓDIGO ESPERADO

```tsx
export const SearchBar = ({ value, onChange, onSubmit, placeholder }: SearchBarProps) => (
  <form onSubmit={(event) => { event.preventDefault(); onSubmit(); }} className="...">
    <label htmlFor="destination">Dónde</label>
    <input id="destination" value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} />
    <button type="submit" aria-label="Buscar alojamientos">Buscar</button>
  </form>
);
```

