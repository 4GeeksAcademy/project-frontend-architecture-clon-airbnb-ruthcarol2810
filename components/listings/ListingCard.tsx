import Image from "next/image";
import Link from "next/link";
import type { Listing } from "@/types/listing";

export interface ListingCardProps {
  listing: Listing;
  priority?: boolean;
}

export const ListingCard = ({ listing, priority = false }: ListingCardProps) => (
  <article className="group min-w-0">
    <Link href={`/rooms/${listing.id}`} className="block rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-rose-500">
      <div className="relative aspect-[1.08] overflow-hidden rounded-xl bg-neutral-100">
        <Image src={listing.imageUrl} alt={listing.title} fill priority={priority} sizes="(max-width: 639px) 90vw, (max-width: 1023px) 45vw, 25vw" className="object-cover transition duration-300 group-hover:scale-[1.03]" />
        {listing.badge && <span className="absolute left-3 top-3 rounded-full bg-white px-3 py-1.5 text-xs font-semibold shadow-sm">{listing.badge}</span>}
        <span aria-hidden="true" className="absolute right-3 top-3 grid size-9 place-items-center rounded-full bg-white/75 text-xl text-neutral-800">♡</span>
      </div>
      <div className="pt-3">
        <div className="flex items-start justify-between gap-2">
          <h3 className="truncate font-semibold text-neutral-900">{listing.title}</h3>
          <span className="shrink-0 text-sm">★ {listing.rating.toFixed(2)}</span>
        </div>
        <p className="mt-1 text-sm text-neutral-500">{listing.location}</p>
        <p className="mt-2 text-sm text-neutral-800"><strong>${listing.pricePerNight}</strong> noche</p>
      </div>
    </Link>
  </article>
);
