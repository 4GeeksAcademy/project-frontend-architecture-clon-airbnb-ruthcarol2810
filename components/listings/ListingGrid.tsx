import { ListingCard } from "@/components/listings/ListingCard";
import type { Listing } from "@/types/listing";

export interface ListingGridProps {
  listings: Listing[];
  emptyMessage?: string;
}

export const ListingGrid = ({ listings, emptyMessage = "No encontramos alojamientos." }: ListingGridProps) => {
  if (!listings.length) return <p className="py-12 text-center text-neutral-600">{emptyMessage}</p>;
  return <div className="grid grid-cols-1 gap-x-6 gap-y-9 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{listings.map((listing, index) => <ListingCard key={listing.id} listing={listing} priority={index < 2} />)}</div>;
};
