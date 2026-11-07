"use client";

import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCompass, faHouse, faStar, faCircleUser } from "@fortawesome/free-solid-svg-icons";

export interface NavbarProps {
  activeSection?: "all" | "stays" | "experiences" | "services";
  onSectionChange?: (section: NavbarProps["activeSection"]) => void;
}

const sections = [{ id: "stays", label: "Alojamientos", icon: faHouse }, { id: "experiences", label: "Experiencias", icon: faCompass }, { id: "services", label: "Servicios", icon: faStar }] as const;

export const Navbar = ({ activeSection = "stays", onSectionChange }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white">
      <nav aria-label="Navegación principal" className="mx-auto flex max-w-screen-2xl items-center justify-between gap-1 px-3 py-3 sm:gap-4 sm:px-8 sm:py-4">
        <Link href="/" aria-label="Ir al inicio" className="flex shrink-0 items-center gap-2 text-rose-500 focus-visible:outline-2"><span aria-hidden="true" className="inline-flex items-center justify-center p-4"><FontAwesomeIcon icon={faHouse} className="size-5 sm:size-6" /></span><span className="hidden text-xl font-bold tracking-tight md:inline">airbnb</span></Link>
        <div className="flex min-w-0 items-center gap-0.5 rounded-full bg-neutral-50 p-0.5 sm:gap-2 sm:bg-transparent sm:p-0">{sections.map((section) => <button key={section.id} type="button" aria-label={section.label} aria-pressed={activeSection === section.id} aria-current={activeSection === section.id ? "page" : undefined} onClick={() => onSectionChange?.(section.id)} className={`flex shrink-0 items-center justify-center rounded-full text-xs font-medium transition md:px-3 md:text-sm ${activeSection === section.id ? "bg-white text-neutral-900 shadow-sm sm:bg-neutral-100" : "text-neutral-500 hover:bg-neutral-100"}`}><span className="inline-flex items-center justify-center p-4" aria-hidden="true"><FontAwesomeIcon icon={section.icon} className="size-4 sm:size-5" /></span><span className="hidden whitespace-nowrap md:inline">{section.label}</span></button>)}</div>
        <div className="relative shrink-0"><button type="button" aria-label="Abrir menú de usuario" aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)} className="flex items-center gap-1 rounded-full border p-0.5 hover:shadow-md focus-visible:outline-2 sm:gap-2 sm:p-1"><span aria-hidden="true" className="inline-flex items-center justify-center p-4"><FontAwesomeIcon icon={faBars} className="size-4" /></span><span className="grid size-7 place-items-center rounded-full bg-neutral-600 text-white"><FontAwesomeIcon icon={faCircleUser} className="size-7" /></span></button>{menuOpen && <div role="menu" className="absolute right-0 z-20 mt-2 w-48 rounded-xl border bg-white p-2 shadow-lg"><Link role="menuitem" href="/catalog" className="block rounded-lg px-3 py-2 text-sm hover:bg-neutral-100">Explorar estancias</Link><Link role="menuitem" href="/" className="block rounded-lg px-3 py-2 text-sm hover:bg-neutral-100">Ayuda</Link></div>}</div>
      </nav>
    </header>
  );
};
