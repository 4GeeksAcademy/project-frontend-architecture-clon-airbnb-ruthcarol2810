"use client";

import { useRef } from "react";
import { ListingCard } from "@/components/listings/ListingCard";
import type { Listing } from "@/types/listing";

export interface ListingCarouselProps {
  title: string;
  listings: Listing[];
}

export const ListingCarousel = ({ title, listings }: ListingCarouselProps) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const move = (direction: number) => trackRef.current?.scrollBy({ left: direction * 320, behavior: "smooth" });
  if (!listings.length) return <section className="py-5"><h2 className="text-xl font-semibold">{title}</h2><p className="mt-2 text-neutral-500">Pronto habrá alojamientos aquí.</p></section>;
  return (
    <section aria-label={title} className="py-7">
      <div className="mb-4 flex items-center justify-between"><h2 className="text-xl font-semibold sm:text-2xl">{title}</h2><div className="hidden gap-2 sm:flex"><button type="button" aria-label="Alojamientos anteriores" onClick={() => move(-1)} className="size-9 rounded-full border hover:bg-neutral-100 focus-visible:outline-2">‹</button><button type="button" aria-label="Más alojamientos" onClick={() => move(1)} className="size-9 rounded-full border hover:bg-neutral-100 focus-visible:outline-2">›</button></div></div>
      <div ref={trackRef} className="flex snap-x gap-4 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">{listings.map((listing) => <div key={listing.id} className="w-[78vw] shrink-0 snap-start sm:w-[290px]"><ListingCard listing={listing}/></div>)}</div>
    </section>
  );
};
