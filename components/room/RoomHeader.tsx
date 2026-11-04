import Link from "next/link";

export interface RoomHeaderProps {
  title: string;
  location: string;
  rating: number;
  reviewCount: number;
  onShare?: () => void;
  onFavorite?: () => void;
}

export const RoomHeader = ({ title, location, rating, reviewCount, onShare, onFavorite }: RoomHeaderProps) => (
  <header className="py-5">
    <Link href="/catalog" className="mb-4 inline-flex rounded-md text-sm underline underline-offset-4 focus-visible:outline-2">← Volver a resultados</Link>
    <h1 className="text-xl font-semibold sm:text-2xl">{title || "Alojamiento"}</h1>
    <div className="mt-2 flex flex-wrap items-center justify-between gap-3"><p className="text-sm text-neutral-700"><span aria-label={`Valoración ${rating} de 5`}>★ {rating.toFixed(2)}</span> · <a href="#reviews" className="underline">{reviewCount} reseñas</a> · {location}</p><div className="flex gap-3"><button type="button" onClick={onShare} aria-label="Compartir alojamiento" className="rounded-lg px-3 py-2 text-sm underline hover:bg-neutral-100 focus-visible:outline-2">Compartir</button><button type="button" onClick={onFavorite} aria-label="Guardar alojamiento" className="rounded-lg px-3 py-2 text-sm underline hover:bg-neutral-100 focus-visible:outline-2">♡ Guardar</button></div></div>
  </header>
);
