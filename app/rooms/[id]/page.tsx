import { Suspense } from "react";
import { RoomExperience } from "@/components/room/RoomExperience";
import { Navbar } from "@/components/layout/Navbar";
import { LoadingState } from "@/components/feedback/LoadingState";

async function RoomContent({ params }: PageProps<"/rooms/[id]">) {
  const { id } = await params;
  return <RoomExperience id={id}/>;
}

export default function RoomPage(props: PageProps<"/rooms/[id]">) {
  return <Suspense fallback={<><Navbar/><LoadingState label="Cargando alojamiento" variant="detail"/></>}><RoomContent {...props}/></Suspense>;
}
