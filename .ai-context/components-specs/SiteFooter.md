# ESPECIFICACIÓN DE COMPONENTE

## METADATOS DEL COMPONENTE

• Nombre del Archivo: `SiteFooter.tsx`  
• Ruta en el Proyecto: `/components/layout/`  
• Tipo de Componente: Server Component (por defecto)  
• Estado: Nuevo

## PROPÓSITO Y DESCRIPCIÓN

Muestra enlaces informativos, soporte, opciones para anfitriones, legalidad, idioma y moneda al final de las tres vistas.

## CONTRATO DE DATOS (TYPESCRIPT)

```typescript
export interface FooterColumn {
  title: string;
  links: string[];
}

export interface SiteFooterProps {
  columns: FooterColumn[];
  year: number;
}
```

## STACK Y DEPENDENCIAS PERMITIDAS

• Estilos: Tailwind CSS  
• Componentes Base: enlaces y botones nativos  
• Iconos: SVG inline propio  
• Gestión de Datos: props

## COMPORTAMIENTO Y LÓGICA (UX/UI)

• Interactividad: los enlaces pueden ser placeholders internos hasta que existan sus rutas; los controles de idioma y moneda son visuales.  
• Estados de UI:
  • Carga: no aplica.
  • Vacío: omitir columnas sin enlaces.
  • Error: no aplica.

## DISEÑO RESPONSIVO Y ACCESIBILIDAD (A11Y)

• Mobile First: columnas apiladas y enlaces con área táctil suficiente.  
• Desktop: tres o más columnas y una fila legal inferior.  
• Accesibilidad: encabezados jerárquicos, enlaces descriptivos y separación visual sin depender únicamente del color.

## EJEMPLO DE CÓDIGO ESPERADO

```tsx
export const SiteFooter = ({ columns, year }: SiteFooterProps) => (
  <footer className="...">
    <div className="grid gap-8 md:grid-cols-3">
      {columns.map((column) => <section key={column.title}><h2>{column.title}</h2>{column.links.map((link) => <a key={link} href="#">{link}</a>)}</section>)}
    </div>
    <small>© {year} Airbnb, Inc. · Privacidad · Términos</small>
  </footer>
);
```

