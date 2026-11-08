import type { Category, Listing, Room } from "@/types/listing";
import {
  faArrowTrendUp,
  faHouse,
  faMountainSun,
  faPalette,
  faPersonSwimming,
  faUmbrellaBeach,
  faKitchenSet,
  faParking,
  faSnowflake,
  faSoap,
  faWifi,
} from "@fortawesome/free-solid-svg-icons";

export const categories: Category[] = [
  { id: "all", label: "Todos", icon: faHouse },
  { id: "beach", label: "Playa", icon: faUmbrellaBeach },
  { id: "views", label: "Vistas increíbles", icon: faMountainSun },
  { id: "cabins", label: "Cabañas", icon: faHouse },
  { id: "pools", label: "Piscinas", icon: faPersonSwimming },
  { id: "design", label: "Diseño", icon: faPalette },
  { id: "trending", label: "Tendencias", icon: faArrowTrendUp },
];

export const listings: Listing[] = [
  { id: "tucacas-1", title: "Apartamento frente al mar", location: "Tucacas, Venezuela", imageUrl: "/stays/tucacas-apartment.webp", imageFallbackUrl: "/stay-coast.svg", pricePerNight: 95, rating: 4.92, reviewCount: 38, badge: "Favorito entre huéspedes", category: "beach", galleryImages: [2, 3, 4, 5].map((number) => ({ src: "/stays/tucacas-apartment-" + number + ".webp", alt: "Fotografía " + number + " de tucacas-1", fallbackSrc: "/stay-coast.svg" })) },
  { id: "island-2", title: "Refugio tropical con piscina", location: "Morrocoy, Venezuela", imageUrl: "/stays/morrocoy-pool.webp", imageFallbackUrl: "/stay-pool.svg", pricePerNight: 128, rating: 4.88, reviewCount: 24, category: "pools", galleryImages: [2, 3, 4, 5].map((number) => ({ src: "/stays/morrocoy-pool-" + number + ".webp", alt: "Fotografía " + number + " de island-2", fallbackSrc: "/stay-pool.svg" })) },
  { id: "cabin-3", title: "Cabaña entre las montañas", location: "Mérida, Venezuela", imageUrl: "/stays/merida-cabin.webp", imageFallbackUrl: "/stay-cabin.svg", pricePerNight: 72, rating: 4.97, reviewCount: 51, badge: "Favorito entre huéspedes", category: "cabins", galleryImages: [2, 3, 4, 5].map((number) => ({ src: "/stays/merida-cabin-" + number + ".webp", alt: "Fotografía " + number + " de cabin-3", fallbackSrc: "/stay-cabin.svg" })) },
  { id: "coast-4", title: "Casa luminosa con vistas", location: "Chichiriviche, Venezuela", imageUrl: "/stays/chichiriviche-house.webp", imageFallbackUrl: "/stay-house.svg", pricePerNight: 110, rating: 4.81, reviewCount: 19, category: "views", galleryImages: [2, 3, 4, 5].map((number) => ({ src: "/stays/chichiriviche-house-" + number + ".webp", alt: "Fotografía " + number + " de coast-4", fallbackSrc: "/stay-house.svg" })) },
  { id: "island-5", title: "Villa tranquila junto al mar", location: "Cayo Sal, Venezuela", imageUrl: "/stays/cayo-sal-villa.webp", imageFallbackUrl: "/stay-coast.svg", pricePerNight: 155, rating: 4.95, reviewCount: 42, category: "beach", galleryImages: [2, 3, 4, 5].map((number) => ({ src: "/stays/cayo-sal-villa-" + number + ".webp", alt: "Fotografía " + number + " de island-5", fallbackSrc: "/stay-coast.svg" })) },
  { id: "design-6", title: "Loft de diseño natural", location: "Valencia, Venezuela", imageUrl: "/stays/valencia-loft.webp", imageFallbackUrl: "/stay-house.svg", pricePerNight: 84, rating: 4.76, reviewCount: 16, category: "design", galleryImages: [2, 3, 4, 5].map((number) => ({ src: "/stays/valencia-loft-" + number + ".webp", alt: "Fotografía " + number + " de design-6", fallbackSrc: "/stay-house.svg" })) },
  { id: "cabin-7", title: "Casa de campo para desconectar", location: "Galipán, Venezuela", imageUrl: "/stays/galipan-country-house.webp", imageFallbackUrl: "/stay-cabin.svg", pricePerNight: 102, rating: 4.9, reviewCount: 28, category: "cabins", galleryImages: [2, 3, 4, 5].map((number) => ({ src: "/stays/galipan-country-house-" + number + ".webp", alt: "Fotografía " + number + " de cabin-7", fallbackSrc: "/stay-cabin.svg" })) },
  { id: "island-8", title: "Suite con terraza al Caribe", location: "Tucacas, Venezuela", imageUrl: "/stays/tucacas-suite.webp", imageFallbackUrl: "/stay-pool.svg", pricePerNight: 139, rating: 4.86, reviewCount: 33, category: "trending", galleryImages: [2, 3, 4, 5].map((number) => ({ src: "/stays/tucacas-suite-" + number + ".webp", alt: "Fotografía " + number + " de island-8", fallbackSrc: "/stay-pool.svg" })) },
];

const amenityList = [
  { id: "wifi", label: "Wifi", icon: faWifi },
  { id: "pool", label: "Piscina", icon: faPersonSwimming },
  { id: "kitchen", label: "Cocina", icon: faKitchenSet },
  { id: "parking", label: "Estacionamiento gratuito", icon: faParking },
  { id: "air", label: "Aire acondicionado", icon: faSnowflake },
  { id: "beach", label: "Acceso a la playa", icon: faUmbrellaBeach },
  { id: "washer", label: "Lavadora", icon: faSoap },
  { id: "view", label: "Vista al mar", icon: faMountainSun },
];

export const rooms: Room[] = listings.map((listing) => ({
  ...listing,
  description: "Disfruta de una estancia cómoda y relajada en este alojamiento luminoso. Su ubicación es ideal para descubrir la costa y descansar después de un día de aventura.",
  images: [{ src: listing.imageUrl, alt: listing.title, fallbackSrc: listing.imageFallbackUrl }, ...listing.galleryImages],
  host: { name: "María", yearsHosting: 5, responseRate: "100%", isSuperhost: true },
  amenities: amenityList,
  maxGuests: 6,
  areaLabel: listing.location,
  availableDays: [2, 3, 4, 7, 8, 9, 12, 13, 14, 16, 17, 18, 21, 22, 23, 25, 26, 27, 29, 30],
  reviews: [
    { id: `${listing.id}-review-1`, author: "Carolina", rating: 5, comment: "Un lugar hermoso y muy cómodo. La atención fue excelente y volveríamos sin dudarlo.", date: "Hace una semana" },
    { id: `${listing.id}-review-2`, author: "Andrés", rating: 5, comment: "Todo estaba tal como se describe. La ubicación es perfecta para disfrutar unos días de descanso.", date: "Hace dos semanas" },
  ],
}));
