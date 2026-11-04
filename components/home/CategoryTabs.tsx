"use client";

import type { Category } from "@/types/listing";

export interface CategoryTabsProps {
  categories: Category[];
  activeId: string;
  onChange: (categoryId: string) => void;
  disabled?: boolean;
}

export const CategoryTabs = ({ categories, activeId, onChange, disabled = false }: CategoryTabsProps) => {
  if (!categories.length) return null;
  return <div role="tablist" aria-label="Categorías de alojamientos" className="flex gap-7 overflow-x-auto py-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">{categories.map((category) => <button key={category.id} type="button" role="tab" aria-selected={category.id === activeId} disabled={disabled} onClick={() => onChange(category.id)} className={`flex min-w-max flex-col items-center gap-2 border-b-2 px-1 pb-3 text-xs font-medium transition ${category.id === activeId ? "border-neutral-900 text-neutral-900" : "border-transparent text-neutral-500 hover:border-neutral-300 hover:text-neutral-800"} disabled:opacity-50`}><span aria-hidden="true" className="text-2xl">{category.icon}</span>{category.label}</button>)}</div>;
};
