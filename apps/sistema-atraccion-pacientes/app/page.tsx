import Link from "next/link";
import PhaseOverview from "@/components/PhaseOverview";
import { lessons } from "@/lib/lessons";

export default function HomePage() {
  return (
    <div>
      <section
        className="px-5 md:px-10 py-14 md:py-20"
        style={{ background: "linear-gradient(160deg, var(--navy) 0%, var(--navy-dark) 100%)" }}
      >
        <div className="max-w-3xl">
          <p className="text-[11px] font-bold tracking-[0.16em] uppercase mb-4" style={{ color: "#8fd6c4" }}>
            Curso interactivo · {lessons.length} lecciones
          </p>
          <h1 className="font-heading text-3xl md:text-5xl font-bold text-white leading-tight mb-5">
            Sistema de Atracción de Pacientes
          </h1>
          <p className="text-base md:text-lg text-white/80 leading-relaxed mb-8 max-w-2xl">
            Aprendé a construir, paso a paso, tu propio sistema de atracción, conversión y
            agendamiento de pacientes — con principios de marketing de respuesta directa
            adaptados a la ética del gremio de la salud mental. Cada lección combina un marco
            conceptual con una herramienta interactiva que completás con tus propios datos.
          </p>
          <Link
            href={`/leccion/${lessons[0].slug}`}
            className="inline-block px-7 py-3.5 rounded-full font-semibold text-sm transition-transform hover:-translate-y-0.5"
            style={{ background: "var(--teal)", color: "#fff" }}
          >
            Empezar por la Lección 0 →
          </Link>
        </div>
      </section>

      <section className="px-5 md:px-10 py-10 md:py-14">
        <PhaseOverview />
      </section>
    </div>
  );
}
