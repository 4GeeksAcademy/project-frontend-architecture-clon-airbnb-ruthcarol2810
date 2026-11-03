# ESPECIFICACIÓN DE COMPONENTE

## METADATOS DEL COMPONENTE

• Nombre del Archivo: `Navbar.tsx`  
• Ruta en el Proyecto: `/components/layout/`  
• Tipo de Componente: Client Component (`'use client'`)  
• Estado: Nuevo

## PROPÓSITO Y DESCRIPCIÓN

Renderiza la navegación global, el logotipo, las categorías principales y las acciones de usuario en Home, Catálogo y Detalle.

## CONTRATO DE DATOS (TYPESCRIPT)

```typescript
export interface NavbarProps {
  activeSection?: 'all' | 'stays' | 'experiences' | 'services';
  onSectionChange?: (section: NavbarProps['activeSection']) => void;
}
```

## STACK Y DEPENDENCIAS PERMITIDAS

• Estilos: Tailwind CSS  
• Componentes Base: elementos HTML nativos  
• Iconos: SVG inline propio  
• Gestión de Datos: props y `Link` de Next.js

## COMPORTAMIENTO Y LÓGICA (UX/UI)

• Interactividad: cambia la sección activa y abre el menú de usuario en móvil. El logotipo enlaza a `/`.  
• Estados de UI:
  • Carga: no aplica.
  • Vacío: no aplica.
  • Error: no aplica; las acciones deben permanecer visibles aunque no exista callback.

## DISEÑO RESPONSIVO Y ACCESIBILIDAD (A11Y)

• Mobile First: muestra una barra compacta y permite desplazar o condensar las secciones sin desbordamiento horizontal.  
• Desktop: muestra logotipo, navegación centrada y acciones alineadas en una sola fila.  
• Accesibilidad: usar `<nav aria-label>`, botones con `aria-label`, foco visible y `aria-current="page"` para la sección activa.

## EJEMPLO DE CÓDIGO ESPERADO

```tsx
import Link from 'next/link';

export const Navbar = ({ activeSection }: NavbarProps) => (
  <nav aria-label="Navegación principal" className="...">
    <Link href="/" aria-label="Ir al inicio">airbnb</Link>
    <button type="button" aria-pressed={activeSection === 'stays'}>Alojamientos</button>
  </nav>
);
```

