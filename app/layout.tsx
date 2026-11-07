import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { FavoritesProvider } from "@/components/favorites/FavoritesProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alojamientos únicos para cada viaje",
  description: "Descubre alojamientos y encuentra tu próximo lugar para descansar.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <FavoritesProvider>{children}</FavoritesProvider>
      </body>
    </html>
  );
}
