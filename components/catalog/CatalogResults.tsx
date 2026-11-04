"use client";

import { useEffect, useMemo, useState } from "react";
import { listings } from "@/data/listings";
import { CatalogToolbar } from "@/components/catalog/CatalogToolbar";
import { FilterChips } from "@/components/catalog/FilterChips";
import { MapPanel } from "@/components/catalog/MapPanel";
import { ListingGrid } from "@/components/listings/ListingGrid";
import { LoadingState } from "@/components/feedback/LoadingState";
import type { SortOption } from "@/types/listing";

const initialFilters = [{ id: "wifi", label: "Wifi" }, { id: "pool", label: "Piscina" }, { id: "kitchen", label: "Cocina" }, { id: "parking", label: "Estacionamiento" }, { id: "cancel", label: "Cancelación gratuita" }];

export const CatalogResults = () => {
  const [loaded, setLoaded] = useState(false);
  const [sort, setSort] = useState<SortOption>("recommended");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  useEffect(() => { const timer = window.setTimeout(() => setLoaded(true), 1200); return () => window.clearTimeout(timer); }, []);
  const results = useMemo(() => {
    const filtered = listings.filter((listing) => !activeFilters.includes("pool") || listing.category === "pools");
    if (sort === "price-asc") return [...filtered].sort((a, b) => a.pricePerNight - b.pricePerNight);
    if (sort === "price-desc") return [...filtered].sort((a, b) => b.pricePerNight - a.pricePerNight);
    return filtered;
  }, [activeFilters, sort]);
  const toggleFilter = (id: string) => setActiveFilters((filters) => filters.includes(id) ? filters.filter((filter) => filter !== id) : [...filters, id]);
  if (!loaded) return <LoadingState label="Cargando resultados" variant="grid"/>;
  return <><CatalogToolbar resultCount={results.length} sort={sort} onSortChange={setSort}/><FilterChips filters={initialFilters.map((filter) => ({ ...filter, active: activeFilters.includes(filter.id) }))} onToggle={toggleFilter}/><div className="grid gap-8 md:grid-cols-[minmax(0,1.35fr)_minmax(340px,0.9fr)]"><div><ListingGrid listings={results}/></div><MapPanel markers={results.slice(0, 4).map((listing, index) => ({ id: listing.id, label: `$${listing.pricePerNight}`, positionClass: ["left-[18%] top-[30%]", "left-[55%] top-[42%]", "left-[32%] top-[61%]", "left-[70%] top-[72%]"][index] }))}/></div></>;
};
