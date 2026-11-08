"use client";

import { useState } from "react";
import type { Amenity } from "@/types/listing";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface AmenitiesGridProps {
  amenities: Amenity[];
  maxVisible?: number;
  onShowAll?: () => void;
}

export const AmenitiesGrid = ({ amenities, maxVisible = 6, onShowAll }: AmenitiesGridProps) => {
  const [showAll, setShowAll] = useState(false);
  const hasAdditionalAmenities = amenities.length > maxVisible;
  const visibleAmenities = showAll ? amenities : amenities.slice(0, maxVisible);

  const toggleShowAll = () => {
    setShowAll((isExpanded) => !isExpanded);
    onShowAll?.();
  };

  return (
    <section aria-labelledby="amenities-heading" className="border-b py-7">
      <h2 id="amenities-heading" className="mb-5 text-xl font-semibold">Lo que este lugar ofrece</h2>
      {amenities.length ? <ul className="grid gap-3 sm:grid-cols-2 sm:gap-4">{visibleAmenities.map((amenity) => <li key={amenity.id} className="flex min-h-14 items-center gap-3"><span aria-hidden="true" className="inline-flex size-12 shrink-0 items-center justify-center p-4"><FontAwesomeIcon icon={amenity.icon} className="size-5" /></span><span className="leading-snug">{amenity.label}</span></li>)}</ul> : <p className="text-neutral-600">Este alojamiento no ha indicado servicios.</p>}
      {hasAdditionalAmenities && <button type="button" aria-expanded={showAll} onClick={toggleShowAll} className="mt-6 rounded-lg border border-neutral-800 px-5 py-3 text-sm font-medium hover:bg-neutral-50 focus-visible:outline-2">{showAll ? "Mostrar menos" : `Mostrar los ${amenities.length} servicios`}</button>}
    </section>
  );
};
