"use client";

import { useState } from "react";
import Image from "next/image";
import type { RoomImage } from "@/types/listing";

export interface PhotoGalleryProps {
  images: RoomImage[];
  activeIndex: number;
  onIndexChange: (index: number) => void;
}

export const PhotoGallery = ({ images, activeIndex, onIndexChange }: PhotoGalleryProps) => {
  const image = images[activeIndex];
  if (!image) return <div role="status" className="grid h-64 place-items-center rounded-2xl bg-neutral-100">No hay fotografías disponibles</div>;
  const previous = () => onIndexChange(Math.max(0, activeIndex - 1));
  const next = () => onIndexChange(Math.min(images.length - 1, activeIndex + 1));
  return <section aria-label="Galería del alojamiento" className={`relative grid overflow-hidden rounded-2xl bg-neutral-100 md:h-[440px] ${images.length > 1 ? "md:grid-cols-2 md:gap-2" : "md:grid-cols-1"}`}>
    <MainGalleryImage key={image.src} image={image}/>
    {images.length > 1 && <div className="hidden grid-cols-2 grid-rows-2 gap-2 md:grid">{images.slice(1, 5).map((item, index) => <GalleryThumbnail key={`${item.src}-${index}`} image={item} index={index + 1} onSelect={onIndexChange}/>)}</div>}
    {images.length > 1 && <div className="absolute inset-x-3 bottom-3 flex items-center justify-between md:inset-x-4 md:bottom-4"><button type="button" aria-label="Fotografía anterior" disabled={activeIndex === 0} onClick={previous} className="grid size-10 place-items-center rounded-full bg-white shadow disabled:opacity-50">‹</button><span aria-live="polite" className="rounded-full bg-black/60 px-3 py-1 text-sm text-white">{activeIndex + 1} / {images.length}</span><button type="button" aria-label="Fotografía siguiente" disabled={activeIndex === images.length - 1} onClick={next} className="grid size-10 place-items-center rounded-full bg-white shadow disabled:opacity-50">›</button></div>}
  </section>;
};

const MainGalleryImage = ({ image }: { image: RoomImage }) => {
  const [imageSrc, setImageSrc] = useState(image.src);
  return <div className="relative aspect-[1.18] md:aspect-auto"><Image src={imageSrc} alt={image.alt} fill priority sizes="(max-width: 767px) 100vw, 50vw" onError={() => { if (image.fallbackSrc && imageSrc !== image.fallbackSrc) setImageSrc(image.fallbackSrc); }} className="object-cover"/></div>;
};

const GalleryThumbnail = ({ image, index, onSelect }: { image: RoomImage; index: number; onSelect: (index: number) => void }) => {
  const [imageSrc, setImageSrc] = useState(image.src);
  return <button type="button" onClick={() => onSelect(index)} aria-label={`Ver fotografía ${index + 1}`} className="relative min-h-0 overflow-hidden focus-visible:outline-2"><Image src={imageSrc} alt={image.alt} fill sizes="25vw" onError={() => { if (image.fallbackSrc && imageSrc !== image.fallbackSrc) setImageSrc(image.fallbackSrc); }} className="object-cover transition hover:scale-105"/></button>;
};
