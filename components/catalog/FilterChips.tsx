export interface FilterOption {
  id: string;
  label: string;
  active?: boolean;
}

export interface FilterChipsProps {
  filters: FilterOption[];
  onToggle: (filterId: string) => void;
  disabled?: boolean;
}

export const FilterChips = ({ filters, onToggle, disabled = false }: FilterChipsProps) => {
  if (!filters.length) return null;
  return <div aria-label="Filtros de búsqueda" className="flex gap-2 overflow-x-auto py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">{filters.map((filter) => <button key={filter.id} type="button" aria-pressed={filter.active ?? false} disabled={disabled} onClick={() => onToggle(filter.id)} className={`shrink-0 rounded-full border px-4 py-2 text-sm focus-visible:outline-2 ${filter.active ? "border-neutral-900 bg-neutral-900 text-white" : "bg-white hover:border-neutral-900"}`}>{filter.label}</button>)}</div>;
};
