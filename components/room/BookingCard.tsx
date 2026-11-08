"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

export interface BookingCardProps {
  pricePerNight: number;
  totalPrice: number;
  selectedNights: number;
  maxGuests: number;
  guests: number;
  onGuestsChange: (guests: number) => void;
  onReserve: () => void;
  isLoading?: boolean;
}

export const BookingCard = ({ pricePerNight, totalPrice, selectedNights, maxGuests, guests, onGuestsChange, onReserve, isLoading = false }: BookingCardProps) => (
  <aside className="self-start rounded-2xl border border-neutral-200 p-5 shadow-lg lg:sticky lg:top-24">
    <p className="text-sm font-medium text-neutral-600">Total de la estancia</p>
    <p className="text-2xl font-bold text-neutral-900">${totalPrice}</p>
    <p className="mt-1 text-sm text-neutral-600">{selectedNights ? `${selectedNights} ${selectedNights === 1 ? "noche" : "noches"}` : "Selecciona las fechas"}</p>
    <p className="mt-3 border-t pt-3 text-sm text-neutral-600"><strong className="font-semibold text-neutral-900">${pricePerNight}</strong> por noche</p>
    <fieldset className="mt-5 flex items-center justify-between rounded-xl border p-3"><legend className="sr-only">Huéspedes</legend><div><p className="text-sm font-semibold">Huéspedes</p><output aria-live="polite" className="text-sm text-neutral-600">{guests} {guests === 1 ? "huésped" : "huéspedes"}</output></div><div className="flex items-center gap-3"><button type="button" aria-label="Reducir huéspedes" disabled={guests <= 1 || isLoading} onClick={() => onGuestsChange(guests - 1)} className="grid size-9 place-items-center rounded-full border disabled:opacity-40"><FontAwesomeIcon icon={faMinus} aria-hidden="true" /></button><button type="button" aria-label="Aumentar huéspedes" disabled={guests >= maxGuests || isLoading} onClick={() => onGuestsChange(guests + 1)} className="grid size-9 place-items-center rounded-full border disabled:opacity-40"><FontAwesomeIcon icon={faPlus} aria-hidden="true" /></button></div></fieldset>
    <button type="button" disabled={isLoading} onClick={onReserve} className="mt-4 w-full rounded-xl bg-rose-500 py-3 font-semibold text-white hover:bg-rose-600 disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2">{isLoading ? "Cargando" : "Reservar"}</button><p className="mt-3 text-center text-sm text-neutral-500">Todavía no se te cobrará nada</p>
  </aside>
);
