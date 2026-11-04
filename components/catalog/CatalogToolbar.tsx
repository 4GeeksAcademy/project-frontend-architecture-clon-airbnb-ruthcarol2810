"use client";

import type { SortOption } from "@/types/listing";

export interface CatalogToolbarProps {
  resultCount: number;
  sort: SortOption;
  onSortChange: (sort: SortOption) => void;
  disabled?: boolean;
}

export const CatalogToolbar = ({ resultCount, sort, onSortChange, disabled = false }: CatalogToolbarProps) => (
  <header className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between">
    <p aria-live="polite" className="font-medium">{resultCount ? `${resultCount} alojamientos` : "No encontramos alojamientos"}</p>
    <label className="flex items-center gap-2 text-sm">Ordenar por <select disabled={disabled} value={sort} onChange={(event) => onSortChange(event.target.value as SortOption)} className="rounded-lg border bg-white px-3 py-2 focus-visible:outline-2"><option value="recommended">Recomendados</option><option value="price-asc">Precio: menor a mayor</option><option value="price-desc">Precio: mayor a menor</option></select></label>
  </header>
);
