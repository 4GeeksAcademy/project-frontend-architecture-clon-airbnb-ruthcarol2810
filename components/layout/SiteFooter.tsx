export interface FooterColumn {
  title: string;
  links: string[];
}

export interface SiteFooterProps {
  columns: FooterColumn[];
  year: number;
}

export const SiteFooter = ({ columns, year }: SiteFooterProps) => (
  <footer className="mt-16 border-t bg-neutral-50 px-5 py-10 sm:px-8">
    <div className="mx-auto grid max-w-screen-2xl gap-8 sm:grid-cols-3">{columns.filter((column) => column.links.length).map((column) => <section key={column.title}><h2 className="mb-4 font-semibold">{column.title}</h2><ul className="space-y-3 text-sm text-neutral-600">{column.links.map((link) => <li key={link}><a href="#" className="hover:underline focus-visible:outline-2">{link}</a></li>)}</ul></section>)}</div>
    <div className="mx-auto mt-9 flex max-w-screen-2xl flex-col gap-3 border-t pt-5 text-sm text-neutral-600 sm:flex-row sm:justify-between"><p>© {year} Airbnb, Inc. · Privacidad · Términos · Mapa del sitio</p><p>◎ Español (VE) · $ USD</p></div>
  </footer>
);
