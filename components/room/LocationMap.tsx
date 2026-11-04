export interface LocationMapProps {
  areaLabel: string;
  mapImageUrl?: string;
  latitude?: number;
  longitude?: number;
}

export const LocationMap = ({ areaLabel }: LocationMapProps) => (
  <section aria-labelledby="location-heading" className="py-7"><h2 id="location-heading" className="mb-4 text-xl font-semibold">A dónde irás</h2><div role="img" aria-label={`Mapa aproximado de ${areaLabel}`} className="relative grid h-64 place-items-center overflow-hidden rounded-2xl bg-[#e2e9df] sm:h-80"><div aria-hidden="true" className="absolute left-[-10%] top-1/3 h-12 w-[120%] rotate-[-14deg] border-y-8 border-white/80"/><div aria-hidden="true" className="absolute left-1/3 top-[-20%] h-[140%] w-10 rotate-[20deg] border-x-8 border-white/80"/><span aria-hidden="true" className="z-10 grid size-12 place-items-center rounded-full rounded-bl-none bg-rose-500 text-xl text-white shadow-lg">⌖</span><span className="absolute bottom-4 rounded-full bg-white px-4 py-2 text-sm shadow">{areaLabel}</span></div><p className="mt-4 text-sm text-neutral-600">La ubicación exacta se comparte después de reservar.</p></section>
);
