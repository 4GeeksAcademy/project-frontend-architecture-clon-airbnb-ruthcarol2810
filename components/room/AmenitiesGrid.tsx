import type { Amenity } from "@/types/listing";

export interface AmenitiesGridProps {
  amenities: Amenity[];
  maxVisible?: number;
  onShowAll?: () => void;
}

export const AmenitiesGrid = ({ amenities, maxVisible = 6, onShowAll }: AmenitiesGridProps) => (
  <section aria-labelledby="amenities-heading" className="border-b py-7">
    <h2 id="amenities-heading" className="mb-5 text-xl font-semibold">Lo que este lugar ofrece</h2>
    {amenities.length ? <ul className="grid gap-4 sm:grid-cols-2">{amenities.slice(0, maxVisible).map((amenity) => <li key={amenity.id} className="flex items-center gap-3"><span aria-hidden="true" className="w-7 text-xl">{amenity.icon}</span>{amenity.label}</li>)}</ul> : <p className="text-neutral-600">Este alojamiento no ha indicado servicios.</p>}
    {amenities.length > maxVisible && <button type="button" onClick={onShowAll} className="mt-6 rounded-lg border border-neutral-800 px-5 py-3 text-sm font-medium hover:bg-neutral-50 focus-visible:outline-2">Mostrar los {amenities.length} servicios</button>}
  </section>
);
