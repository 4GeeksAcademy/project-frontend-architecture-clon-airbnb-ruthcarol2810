# ESPECIFICACIÓN DE COMPONENTE

## METADATOS DEL COMPONENTE

• Nombre del Archivo: `ReviewsSection.tsx`  
• Ruta en el Proyecto: `/components/room/`  
• Tipo de Componente: Server Component (por defecto)  
• Estado: Nuevo

## PROPÓSITO Y DESCRIPCIÓN

Muestra la valoración general, categorías de evaluación y reseñas resumidas del alojamiento.

## CONTRATO DE DATOS (TYPESCRIPT)

```typescript
export interface Review {
  id: string;
  author: string;
  avatarUrl?: string;
  rating: number;
  comment: string;
  date: string;
}

export interface ReviewsSectionProps {
  rating: number;
  reviewCount: number;
  reviews: Review[];
}
```

## STACK Y DEPENDENCIAS PERMITIDAS

• Estilos: Tailwind CSS  
• Componentes Base: elementos HTML nativos e imagen optimizada  
• Iconos: SVG inline propio  
• Gestión de Datos: props

## COMPORTAMIENTO Y LÓGICA (UX/UI)

• Interactividad: muestra una selección de reseñas; una expansión completa puede añadirse posteriormente.  
• Estados de UI:
  • Carga: skeleton de valoración y comentarios.
  • Vacío: mostrar `Aún no hay reseñas`.
  • Error: ocultar solo la reseña inválida y conservar el resumen.

## DISEÑO RESPONSIVO Y ACCESIBILIDAD (A11Y)

• Mobile First: reseñas apiladas y texto limitado para evitar bloques excesivos.  
• Desktop: dos columnas de reseñas y resumen lateral.  
• Accesibilidad: usar `article` para cada reseña, nombre del autor, fecha, `alt` del avatar y valoración textual.

## EJEMPLO DE CÓDIGO ESPERADO

```tsx
export const ReviewsSection = ({ rating, reviewCount, reviews }: ReviewsSectionProps) => (
  <section aria-labelledby="reviews-heading">
    <h2 id="reviews-heading">★ {rating.toFixed(2)} · {reviewCount} reseñas</h2>
    <div className="grid gap-6 md:grid-cols-2">
      {reviews.map((review) => <article key={review.id}><h3>{review.author}</h3><time>{review.date}</time><p>{review.comment}</p></article>)}
    </div>
  </section>
);
```

