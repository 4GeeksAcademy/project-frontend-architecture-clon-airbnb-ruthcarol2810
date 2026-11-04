import Image from "next/image";
import type { Host } from "@/types/listing";

export interface HostInfoProps extends Host {
  avatarUrl?: string;
}

export const HostInfo = ({ name, avatarUrl, yearsHosting, responseRate, isSuperhost }: HostInfoProps) => (
  <section aria-labelledby="host-heading" className="flex items-center gap-4 border-b py-6">
    {avatarUrl ? <Image src={avatarUrl} alt={`Retrato de ${name}`} width={56} height={56} unoptimized className="size-14 shrink-0 rounded-full object-cover"/> : <div aria-hidden="true" className="grid size-14 shrink-0 place-items-center rounded-full bg-neutral-200 text-xl font-semibold text-neutral-600">{name.charAt(0)}</div>}
    <div><h2 id="host-heading" className="font-semibold">Alojamiento ofrecido por {name}</h2><p className="mt-1 text-sm text-neutral-600">{yearsHosting} años como anfitrión{responseRate ? ` · ${responseRate} de respuesta` : ""}</p>{isSuperhost && <p className="mt-1 text-sm text-neutral-600">✦ Superanfitrión</p>}</div>
  </section>
);
