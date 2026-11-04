"use client";

export interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
  placeholder?: string;
}

export const SearchBar = ({ value, onChange, onSubmit, placeholder = "Buscar destinos o alojamientos" }: SearchBarProps) => (
  <form onSubmit={(event) => { event.preventDefault(); onSubmit(); }} className="mx-auto flex w-full max-w-3xl items-center gap-3 rounded-full border border-neutral-300 bg-white p-2 pl-5 shadow-md focus-within:shadow-lg">
    <label htmlFor="destination-search" className="sr-only">Destino o alojamiento</label>
    <input id="destination-search" value={value} onChange={(event) => onChange(event.target.value)} placeholder={placeholder} className="min-w-0 flex-1 bg-transparent py-2 text-sm outline-none placeholder:text-neutral-500" />
    <button type="submit" aria-label="Buscar alojamientos" className="grid size-11 shrink-0 place-items-center rounded-full bg-rose-500 text-lg text-white hover:bg-rose-600 focus-visible:outline-2 focus-visible:outline-offset-2">⌕</button>
  </form>
);
