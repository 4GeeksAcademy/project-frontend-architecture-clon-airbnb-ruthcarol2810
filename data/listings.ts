import type { Category, Listing, Room } from "@/types/listing";

export const categories: Category[] = [
  { id: "all", label: "Todos", icon: "⌂" },
  { id: "beach", label: "Playa", icon: "☼" },
  { id: "views", label: "Vistas increíbles", icon: "◒" },
  { id: "cabins", label: "Cabañas", icon: "⌂" },
  { id: "pools", label: "Piscinas", icon: "♒" },
  { id: "design", label: "Diseño", icon: "◇" },
  { id: "trending", label: "Tendencias", icon: "↗" },
];

export const listings: Listing[] = [
  { id: "tucacas-1", title: "Apartamento frente al mar", location: "Tucacas, Venezuela", imageUrl: "/stay-coast.svg", pricePerNight: 95, rating: 4.92, reviewCount: 38, badge: "Favorito entre huéspedes", category: "beach" },
  { id: "island-2", title: "Refugio tropical con piscina", location: "Morrocoy, Venezuela", imageUrl: "/stay-pool.svg", pricePerNight: 128, rating: 4.88, reviewCount: 24, category: "pools" },
  { id: "cabin-3", title: "Cabaña entre las montañas", location: "Mérida, Venezuela", imageUrl: "/stay-cabin.svg", pricePerNight: 72, rating: 4.97, reviewCount: 51, badge: "Favorito entre huéspedes", category: "cabins" },
  { id: "coast-4", title: "Casa luminosa con vistas", location: "Chichiriviche, Venezuela", imageUrl: "/stay-house.svg", pricePerNight: 110, rating: 4.81, reviewCount: 19, category: "views" },
  { id: "island-5", title: "Villa tranquila junto al mar", location: "Cayo Sal, Venezuela", imageUrl: "/stay-coast.svg", pricePerNight: 155, rating: 4.95, reviewCount: 42, category: "beach" },
  { id: "design-6", title: "Loft de diseño natural", location: "Valencia, Venezuela", imageUrl: "/stay-house.svg", pricePerNight: 84, rating: 4.76, reviewCount: 16, category: "design" },
  { id: "cabin-7", title: "Casa de campo para desconectar", location: "Galipán, Venezuela", imageUrl: "/stay-cabin.svg", pricePerNight: 102, rating: 4.9, reviewCount: 28, category: "cabins" },
  { id: "island-8", title: "Suite con terraza al Caribe", location: "Tucacas, Venezuela", imageUrl: "/stay-pool.svg", pricePerNight: 139, rating: 4.86, reviewCount: 33, category: "trending" },
];

const amenityList = [
  { id: "wifi", label: "Wifi", icon: "⌁" },
  { id: "pool", label: "Piscina", icon: "♒" },
  { id: "kitchen", label: "Cocina", icon: "♨" },
  { id: "parking", label: "Estacionamiento gratuito", icon: "P" },
  { id: "air", label: "Aire acondicionado", icon: "❄" },
  { id: "beach", label: "Acceso a la playa", icon: "☼" },
  { id: "washer", label: "Lavadora", icon: "◉" },
  { id: "view", label: "Vista al mar", icon: "◒" },
];

export const rooms: Room[] = listings.map((listing) => ({
  ...listing,
  description: "Disfruta de una estancia cómoda y relajada en este alojamiento luminoso. Su ubicación es ideal para descubrir la costa y descansar después de un día de aventura.",
  images: [
    { src: listing.imageUrl, alt: listing.title },
    { src: "/stay-house.svg", alt: `Interior acogedor de ${listing.title}` },
    { src: "/stay-pool.svg", alt: `Terraza de ${listing.title}` },
    { src: "/stay-cabin.svg", alt: `Vista exterior de ${listing.title}` },
    { src: "/stay-coast.svg", alt: `Zona de descanso de ${listing.title}` },
  ],
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
