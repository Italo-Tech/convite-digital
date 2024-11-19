import Pagina from "@/components/template/Pagina";
import { Evento } from "@/core";

export default function Home() {
  const e: Partial<Evento> = {};
  return (
    <Pagina className="w-full">
      <div>Inicio</div>
    </Pagina>
  );
}
