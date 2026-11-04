"use client";

import { useEffect, useMemo, useState } from "react";
import { categories, listings } from "@/data/listings";
import { Navbar } from "@/components/layout/Navbar";
import { SearchBar } from "@/components/search/SearchBar";
import { CategoryTabs } from "@/components/home/CategoryTabs";
import { ListingGrid } from "@/components/listings/ListingGrid";
import { ListingCarousel } from "@/components/listings/ListingCarousel";
import { LoadingState } from "@/components/feedback/LoadingState";

export const HomeExperience = () => {
  const [loaded, setLoaded] = useState(false);
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  useEffect(() => { const timer = window.setTimeout(() => setLoaded(true), 450); return () => window.clearTimeout(timer); }, []);
  const filtered = useMemo(() => listings.filter((listing) => {
    const matchesText = `${listing.title} ${listing.location}`.toLowerCase().includes(query.trim().toLowerCase());
    return matchesText && (activeCategory === "all" || listing.category === activeCategory);
  }), [activeCategory, query]);
  const submitSearch = () => { document.getElementById("listings-heading")?.scrollIntoView({ behavior: "smooth" }); };
  return <><Navbar/><main className="mx-auto w-full max-w-screen-2xl flex-1 px-5 sm:px-8"><section className="py-5 sm:py-8"><SearchBar value={query} onChange={setQuery} onSubmit={submitSearch}/></section><CategoryTabs categories={categories} activeId={activeCategory} onChange={setActiveCategory} disabled={!loaded}/>{!loaded ? <LoadingState label="Cargando alojamientos" variant="grid"/> : <><section className="py-6" aria-labelledby="listings-heading"><h1 id="listings-heading" className="mb-5 text-xl font-semibold sm:text-2xl">Alojamientos para descubrir</h1><ListingGrid listings={filtered}/></section><ListingCarousel title="Estancias junto al mar" listings={listings.filter((listing) => listing.category === "beach" || listing.category === "pools")}/><ListingCarousel title="Lugares para desconectar" listings={listings.filter((listing) => listing.category === "cabins" || listing.category === "views")}/></>}</main></>;
};
