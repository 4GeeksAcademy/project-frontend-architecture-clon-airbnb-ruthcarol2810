export interface MapMarker {
  id: string;
  label: string;
  positionClass: string;
}

export interface MapPanelProps {
  markers?: MapMarker[];
  label?: string;
}

export const MapPanel = ({ markers = [], label = "Mapa" }: MapPanelProps) => (
  <section aria-label={label} className="relative min-h-80 overflow-hidden rounded-2xl bg-[#dce8e3] md:sticky md:top-5 md:h-[calc(100vh-2.5rem)]">
    <div aria-hidden="true" className="absolute inset-0 opacity-70"><div className="absolute -left-10 top-1/3 h-20 w-[120%] rotate-[-12deg] rounded-full border-[14px] border-white/70"/><div className="absolute left-1/3 top-0 h-[120%] w-12 rotate-[20deg] border-x-8 border-white/60"/><div className="absolute bottom-0 right-1/4 h-2/3 w-2/3 rounded-t-full bg-[#c7d8c7]"/></div>
    <span className="absolute left-4 top-4 rounded-full bg-white px-4 py-2 font-semibold shadow">{label}</span>
    {markers.map((marker) => <button key={marker.id} type="button" aria-label={marker.label} className={`absolute z-10 rounded-full bg-white px-3 py-2 text-sm font-semibold shadow-lg ${marker.positionClass}`}>{marker.label}</button>)}
  </section>
);
