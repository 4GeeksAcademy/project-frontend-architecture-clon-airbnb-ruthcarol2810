"use client";

export interface AvailabilityCalendarProps {
  month: string;
  availableDays: number[];
  selectedDays?: number[];
  onDaySelect?: (day: number) => void;
}

const dayNames = ["L", "M", "X", "J", "V", "S", "D"];

export const AvailabilityCalendar = ({ month, availableDays, selectedDays = [], onDaySelect }: AvailabilityCalendarProps) => (
  <section aria-labelledby="calendar-heading" className="border-b py-7"><h2 id="calendar-heading" className="text-xl font-semibold">Elige cuándo quieres viajar</h2><p className="mt-1 text-sm text-neutral-600">{month}</p>{availableDays.length ? <div role="grid" aria-label={month} className="mt-5 grid max-w-md grid-cols-7 gap-1 text-center">{dayNames.map((name, index) => <span key={`${name}-${index}`} role="columnheader" className="py-2 text-xs font-semibold text-neutral-500">{name}</span>)}{Array.from({ length: 31 }, (_, index) => { const day = index + 1; const available = availableDays.includes(day); return <button key={day} type="button" role="gridcell" aria-selected={selectedDays.includes(day)} aria-disabled={!available} disabled={!available} onClick={() => onDaySelect?.(day)} className={`aspect-square rounded-full text-sm focus-visible:outline-2 ${selectedDays.includes(day) ? "bg-neutral-900 text-white" : "hover:border hover:border-neutral-800"} disabled:text-neutral-300 disabled:line-through`}>{day}</button>; })}</div> : <p className="mt-4 text-neutral-600">No hay disponibilidad publicada.</p>}</section>
);
