import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";

export interface Listing {
  id: string;
  title: string;
  location: string;
  imageUrl: string;
  imageFallbackUrl?: string;
  galleryImages: RoomImage[];
  pricePerNight: number;
  rating: number;
  reviewCount?: number;
  badge?: string;
  category: string;
}

export interface Category {
  id: string;
  label: string;
  icon: IconDefinition;
}

export type SortOption = "recommended" | "price-asc" | "price-desc";

export interface Amenity {
  id: string;
  label: string;
  icon: IconDefinition;
}

export interface Host {
  name: string;
  yearsHosting: number;
  responseRate: string;
  isSuperhost: boolean;
}

export interface RoomImage {
  src: string;
  alt: string;
  fallbackSrc?: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Room extends Listing {
  description: string;
  images: RoomImage[];
  host: Host;
  amenities: Amenity[];
  maxGuests: number;
  areaLabel: string;
  availableDays: number[];
  reviews: Review[];
}
