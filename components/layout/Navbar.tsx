"use client";

import Link from "next/link";
import { useState } from "react";

export interface NavbarProps {
  activeSection?: "all" | "stays" | "experiences" | "services";
  onSectionChange?: (section: NavbarProps["activeSection"]) => void;
}

const sections = [{ id: "stays", label: "Alojamientos", icon: "⌂" }, { id: "experiences", label: "Experiencias", icon: "♧" }, { id: "services", label: "Servicios", icon: "✦" }] as const;

export const Navbar = ({ activeSection = "stays", onSectionChange }: NavbarProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white">
      <nav aria-label="Navegación principal" className="mx-auto flex max-w-screen-2xl items-center justify-between gap-4 px-5 py-4 sm:px-8">
        <Link href="/" aria-label="Ir al inicio" className="flex items-center gap-2 text-rose-500 focus-visible:outline-2"><span aria-hidden="true" className="text-3xl">⌂</span><span className="hidden text-xl font-bold tracking-tight md:inline">airbnb</span></Link>
        <div className="flex items-center gap-1 rounded-full bg-neutral-50 p-1 sm:bg-transparent sm:gap-4 sm:p-0">{sections.map((section) => <button key={section.id} type="button" aria-pressed={activeSection === section.id} aria-current={activeSection === section.id ? "page" : undefined} onClick={() => onSectionChange?.(section.id)} className={`rounded-full px-3 py-2 text-xs font-medium sm:px-4 sm:text-sm ${activeSection === section.id ? "bg-white text-neutral-900 shadow-sm sm:bg-neutral-100" : "text-neutral-500 hover:bg-neutral-100"}`}><span className="mr-1 sm:mr-2" aria-hidden="true">{section.icon}</span>{section.label}</button>)}</div>
        <div className="relative"><button type="button" aria-label="Abrir menú de usuario" aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)} className="flex items-center gap-2 rounded-full border p-2.5 hover:shadow-md focus-visible:outline-2"><span aria-hidden="true">☰</span><span className="grid size-7 place-items-center rounded-full bg-neutral-600 text-white">●</span></button>{menuOpen && <div role="menu" className="absolute right-0 z-20 mt-2 w-48 rounded-xl border bg-white p-2 shadow-lg"><Link role="menuitem" href="/catalog" className="block rounded-lg px-3 py-2 text-sm hover:bg-neutral-100">Explorar estancias</Link><Link role="menuitem" href="/" className="block rounded-lg px-3 py-2 text-sm hover:bg-neutral-100">Ayuda</Link></div>}</div>
      </nav>
    </header>
  );
};
