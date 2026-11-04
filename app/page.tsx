import { HomeExperience } from "@/components/home/HomeExperience";
import { SiteFooter } from "@/components/layout/SiteFooter";

const footerColumns = [
  { title: "Asistencia", links: ["Centro de ayuda", "Opciones de cancelación", "Ayuda con discapacidades"] },
  { title: "Cómo ser anfitrión", links: ["Pon tu espacio en Airbnb", "Recursos para anfitriones", "Foro de la comunidad"] },
  { title: "Airbnb", links: ["Sala de prensa", "Nuevas funciones", "Carreras"] },
];

export default function Home() {
  return <><HomeExperience/><SiteFooter columns={footerColumns} year={2026}/></>;
}
