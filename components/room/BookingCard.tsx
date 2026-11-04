"use client";

export interface BookingCardProps {
  pricePerNight: number;
  maxGuests: number;
  guests: number;
  onGuestsChange: (guests: number) => void;
  onReserve: () => void;
  isLoading?: boolean;
}

export const BookingCard = ({ pricePerNight, maxGuests, guests, onGuestsChange, onReserve, isLoading = false }: BookingCardProps) => (
  <aside className="rounded-2xl border border-neutral-200 p-5 shadow-lg md:sticky md:top-6">
    <p className="text-xl"><strong>${pricePerNight}</strong> <span className="text-base">por noche</span></p>
    <fieldset className="mt-5 flex items-center justify-between rounded-xl border p-3"><legend className="sr-only">Huéspedes</legend><div><p className="text-sm font-semibold">Huéspedes</p><output aria-live="polite" className="text-sm text-neutral-600">{guests} {guests === 1 ? "huésped" : "huéspedes"}</output></div><div className="flex items-center gap-3"><button type="button" aria-label="Reducir huéspedes" disabled={guests <= 1 || isLoading} onClick={() => onGuestsChange(guests - 1)} className="size-9 rounded-full border disabled:opacity-40">−</button><button type="button" aria-label="Aumentar huéspedes" disabled={guests >= maxGuests || isLoading} onClick={() => onGuestsChange(guests + 1)} className="size-9 rounded-full border disabled:opacity-40">+</button></div></fieldset>
    <button type="button" disabled={isLoading} onClick={onReserve} className="mt-4 w-full rounded-xl bg-rose-500 py-3 font-semibold text-white hover:bg-rose-600 disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2">{isLoading ? "Cargando" : "Reservar"}</button><p className="mt-3 text-center text-sm text-neutral-500">Todavía no se te cobrará nada</p>
  </aside>
);
