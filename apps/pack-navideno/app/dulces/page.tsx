import DulcesGrid from "@/components/DulcesGrid";
import { dulces } from "@/lib/data/dulces";

export const metadata = {
  title: "Dulces Navideños | Pack Navideño",
};

export default function DulcesPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 pb-24 pt-10">
      <div className="text-center">
        <span className="text-4xl">🍬</span>
        <h1 className="font-festive mt-2 text-4xl text-[var(--rojo)]">Dulces Navideños</h1>
        <p className="mx-auto mt-2 max-w-lg text-[var(--verde)]/70">
          20 recetas con nivel de dificultad, ingredientes, costos, precio sugerido y margen.
        </p>
      </div>

      <DulcesGrid recetas={dulces} />
    </main>
  );
}
