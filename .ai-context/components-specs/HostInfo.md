# ESPECIFICACIÓN DE COMPONENTE

## METADATOS DEL COMPONENTE

• Nombre del Archivo: `HostInfo.tsx`  
• Ruta en el Proyecto: `/components/room/`  
• Tipo de Componente: Server Component (por defecto)  
• Estado: Nuevo

## PROPÓSITO Y DESCRIPCIÓN

Presenta el avatar, nombre, experiencia y datos resumidos del anfitrión.

## CONTRATO DE DATOS (TYPESCRIPT)

```typescript
export interface HostInfoProps {
  name: string;
  avatarUrl?: string;
  yearsHosting: number;
  responseRate?: string;
  isSuperhost?: boolean;
}
```

## STACK Y DEPENDENCIAS PERMITIDAS

• Estilos: Tailwind CSS  
• Componentes Base: `next/image` y elementos nativos  
• Iconos: SVG inline propio  
• Gestión de Datos: props

## COMPORTAMIENTO Y LÓGICA (UX/UI)

• Interactividad: puede incluir un botón para contactar al anfitrión si el flujo lo requiere.  
• Estados de UI:
  • Carga: skeleton de avatar y texto.
  • Vacío: mostrar `Anfitrión no disponible`.
  • Error: avatar con iniciales como alternativa.

## DISEÑO RESPONSIVO Y ACCESIBILIDAD (A11Y)

• Mobile First: bloque horizontal compacto.  
• Desktop: tarjeta informativa con datos adicionales.  
• Accesibilidad: `alt` del avatar, nombre como encabezado y texto explícito para la insignia de superanfitrión.

## EJEMPLO DE CÓDIGO ESPERADO

```tsx
export const HostInfo = ({ name, avatarUrl, yearsHosting, responseRate, isSuperhost }: HostInfoProps) => (
  <section aria-labelledby="host-heading" className="flex gap-4">
    <div aria-hidden={!avatarUrl} className="size-14 rounded-full bg-neutral-200">
      {avatarUrl && <img src={avatarUrl} alt="" className="size-full rounded-full object-cover" />}
    </div>
    <div>
      <h2 id="host-heading">Anfitrión: {name}</h2>
      <p>{yearsHosting} años como anfitrión{responseRate && ` · ${responseRate} de respuesta`}</p>
      {isSuperhost && <p>Superanfitrión</p>}
    </div>
  </section>
);
```

