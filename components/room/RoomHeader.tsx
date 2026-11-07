import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faHeart as faSolidHeart, faShareNodes, faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";
import { useFavorites } from "@/components/favorites/FavoritesProvider";

export interface RoomHeaderProps {
  title: string;
  listingId: string;
  location: string;
  rating: number;
  reviewCount: number;
  onShare?: () => void;
  onFavorite?: () => void;
}

export const RoomHeader = ({ title, listingId, location, rating, reviewCount, onShare, onFavorite }: RoomHeaderProps) => {
  const { favoriteIds, toggleFavorite } = useFavorites();
  const isFavorite = favoriteIds.includes(listingId);

  return (
  <header className="py-5">
    <Link href="/catalog" className="mb-4 inline-flex items-center gap-2 rounded-md text-sm underline underline-offset-4 focus-visible:outline-2"><FontAwesomeIcon icon={faArrowLeft} aria-hidden="true" />Volver a resultados</Link>
    <h1 className="text-xl font-semibold sm:text-2xl">{title || "Alojamiento"}</h1>
    <div className="mt-2 flex flex-wrap items-center justify-between gap-3"><p className="text-sm text-neutral-700"><span aria-label={`Valoración ${rating} de 5`}><FontAwesomeIcon icon={faStar} aria-hidden="true" className="mr-1" />{rating.toFixed(2)}</span> · <a href="#reviews" className="underline">{reviewCount} reseñas</a> · {location}</p><div className="flex gap-2 sm:gap-3"><button type="button" onClick={onShare} aria-label="Compartir alojamiento" className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm underline hover:bg-neutral-100 focus-visible:outline-2"><FontAwesomeIcon icon={faShareNodes} aria-hidden="true" />Compartir</button><button type="button" onClick={() => { toggleFavorite(listingId); onFavorite?.(); }} aria-pressed={isFavorite} aria-label={isFavorite ? "Quitar de favoritos" : "Guardar alojamiento"} className={`inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm underline hover:bg-neutral-100 focus-visible:outline-2 ${isFavorite ? "text-rose-500" : "text-neutral-900"}`}><FontAwesomeIcon icon={isFavorite ? faSolidHeart : faRegularHeart} aria-hidden="true" />{isFavorite ? "Guardado" : "Guardar"}</button></div></div>
  </header>
  );
};
