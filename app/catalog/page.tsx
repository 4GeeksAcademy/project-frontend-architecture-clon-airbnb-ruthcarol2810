import { Navbar } from "@/components/layout/Navbar";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { CatalogResults } from "@/components/catalog/CatalogResults";

const footerColumns = [
  { title: "Asistencia", links: ["Centro de ayuda", "Opciones de cancelación", "Ayuda con discapacidades"] },
  { title: "Cómo ser anfitrión", links: ["Pon tu espacio en Airbnb", "Recursos para anfitriones", "Foro de la comunidad"] },
  { title: "Airbnb", links: ["Sala de prensa", "Nuevas funciones", "Carreras"] },
];

export default function CatalogPage() {
  return <><Navbar/><main className="mx-auto min-h-[60vh] w-full max-w-screen-2xl flex-1 px-5 sm:px-8"><CatalogResults/></main><SiteFooter columns={footerColumns} year={2026}/></>;
}
