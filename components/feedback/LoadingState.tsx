export interface LoadingStateProps {
  label?: string;
  variant?: "page" | "grid" | "detail";
}

export const LoadingState = ({ label = "Cargando alojamientos", variant = "page" }: LoadingStateProps) => (
  <div role="status" aria-live="polite" className="mx-auto w-full max-w-screen-2xl px-5 py-8 sm:px-8">
    <span className="sr-only">{label}</span>
    {variant === "detail" ? <div aria-hidden="true" className="h-72 animate-pulse rounded-2xl bg-neutral-200 md:h-[440px]" /> :
      <div aria-hidden="true" className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">{Array.from({ length: variant === "grid" ? 8 : 4 }, (_, index) => <div key={index} className="animate-pulse"><div className="aspect-[1.08] rounded-xl bg-neutral-200"/><div className="mt-3 h-4 w-3/4 rounded bg-neutral-200"/><div className="mt-2 h-4 w-1/2 rounded bg-neutral-100"/></div>)}</div>}
  </div>
);
