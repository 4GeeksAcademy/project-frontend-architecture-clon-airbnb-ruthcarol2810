"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Listing } from "@/types/listing";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faSolidHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";
import { useFavorites } from "@/components/favorites/FavoritesProvider";

export interface ListingCardProps {
  listing: Listing;
  priority?: boolean;
}

export const ListingCard = ({ listing, priority = false }: ListingCardProps) => {
  const { favoriteIds, toggleFavorite } = useFavorites();
  const isFavorite = favoriteIds.includes(listing.id);
  const [imageSrc, setImageSrc] = useState(listing.imageUrl);

  return (
  <article className="group min-w-0">
    <div className="relative">
      <Link href={`/rooms/${listing.id}`} aria-label={`Ver ${listing.title}`} className="block rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-500">
        <div className="relative aspect-[1.08] overflow-hidden rounded-xl bg-neutral-100">
        <Image src={imageSrc} alt={listing.title} fill priority={priority} sizes="(max-width: 639px) 90vw, (max-width: 1023px) 45vw, 25vw" onError={() => { if (listing.imageFallbackUrl && imageSrc !== listing.imageFallbackUrl) setImageSrc(listing.imageFallbackUrl); }} className="object-cover transition duration-300 group-hover:scale-[1.03]" />
        {listing.badge && <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1.5 text-xs font-semibold shadow-sm">{listing.badge}</span>}
        </div>
      </Link>
      <button type="button" aria-label={isFavorite ? `Quitar ${listing.title} de favoritos` : `Añadir ${listing.title} a favoritos`} aria-pressed={isFavorite} onClick={() => toggleFavorite(listing.id)} className={`absolute right-3 top-3 grid size-10 place-items-center rounded-full bg-white/85 shadow-sm transition hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500 ${isFavorite ? "text-rose-500" : "text-neutral-800"}`}>
        <FontAwesomeIcon icon={isFavorite ? faSolidHeart : faRegularHeart} aria-hidden="true" className="size-5" />
      </button>
    </div>
    <Link href={`/rooms/${listing.id}`} className="block rounded-b-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-500">
      <div className="pt-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="truncate font-semibold text-neutral-900">{listing.title}</h3>
          <span className="flex shrink-0 items-center gap-1 text-sm"><FontAwesomeIcon icon={faStar} aria-hidden="true" className="size-3" />{listing.rating.toFixed(2)}</span>
        </div>
        <p className="mt-1 text-sm text-neutral-500">{listing.location}</p>
        <p className="mt-2 text-sm text-neutral-800"><strong>${listing.pricePerNight}</strong> noche</p>
      </div>
    </Link>
  </article>
  );
};
