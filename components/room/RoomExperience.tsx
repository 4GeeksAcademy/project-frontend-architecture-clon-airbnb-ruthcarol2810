"use client";

import { useEffect, useState } from "react";
import { rooms } from "@/data/listings";
import { LoadingState } from "@/components/feedback/LoadingState";
import { Navbar } from "@/components/layout/Navbar";
import { RoomHeader } from "@/components/room/RoomHeader";
import { PhotoGallery } from "@/components/room/PhotoGallery";
import { HostInfo } from "@/components/room/HostInfo";
import { AmenitiesGrid } from "@/components/room/AmenitiesGrid";
import { BookingCard } from "@/components/room/BookingCard";
import { AvailabilityCalendar } from "@/components/room/AvailabilityCalendar";
import { ReviewsSection } from "@/components/room/ReviewsSection";
import { LocationMap } from "@/components/room/LocationMap";
import { SiteFooter } from "@/components/layout/SiteFooter";

const footerColumns = [{ title: "Asistencia", links: ["Centro de ayuda", "Opciones de cancelación"] }, { title: "Anfitriones", links: ["Pon tu espacio en Airbnb", "Recursos"] }, { title: "Airbnb", links: ["Privacidad", "Términos"] }];

export const RoomExperience = ({ id }: { id: string }) => {
  const [loaded, setLoaded] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [guests, setGuests] = useState(1);
  const [selectedDays, setSelectedDays] = useState<number[]>([]);
  useEffect(() => { const timer = window.setTimeout(() => setLoaded(true), 1200); return () => window.clearTimeout(timer); }, [id]);
  const room = rooms.find((item) => item.id === id);
  if (!loaded) return <><Navbar/><LoadingState label="Cargando alojamiento" variant="detail"/></>;
  if (!room) return <><Navbar/><main className="mx-auto min-h-[50vh] w-full max-w-screen-2xl flex-1 px-5 py-16 sm:px-8"><h1 className="text-2xl font-semibold">No encontramos este alojamiento</h1><a href="/catalog" className="mt-4 inline-block underline">Volver al catálogo</a></main></>;
  const toggleDay = (day: number) => setSelectedDays((days) => days.includes(day) ? days.filter((item) => item !== day) : [...days, day].slice(-2));
  return <><Navbar/><main className="mx-auto w-full max-w-screen-2xl flex-1 px-5 pb-8 sm:px-8"><RoomHeader title={room.title} listingId={room.id} location={room.location} rating={room.rating} reviewCount={room.reviewCount ?? 0}/><PhotoGallery images={room.images} activeIndex={activeImage} onIndexChange={setActiveImage}/><div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_360px]"><div><div className="border-b py-6"><h2 className="text-lg font-semibold">Alojamiento entero · capacidad para {room.maxGuests} personas</h2><p className="mt-2 text-sm text-neutral-600">{room.description}</p></div><HostInfo {...room.host}/><AmenitiesGrid amenities={room.amenities}/><AvailabilityCalendar month="Noviembre 2026" availableDays={room.availableDays} selectedDays={selectedDays} onDaySelect={toggleDay}/><ReviewsSection rating={room.rating} reviewCount={room.reviewCount ?? 0} reviews={room.reviews}/><LocationMap areaLabel={room.areaLabel}/></div><div className="order-first py-6 lg:order-none"><BookingCard pricePerNight={room.pricePerNight} maxGuests={room.maxGuests} guests={guests} onGuestsChange={setGuests} onReserve={() => window.alert(`Reserva para ${guests} huéspedes`)} /></div></div></main><SiteFooter columns={footerColumns} year={2026}/></>;
};
