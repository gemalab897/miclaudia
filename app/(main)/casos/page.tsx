import Link from "next/link";
import { casos } from "@/data/casos";
import PageHeader from "@/components/PageHeader";

const diagnosticoColor: Record<string, string> = {
  "Trastorno de Ansiedad Generalizada": "bg-blue-100 text-blue-700",
  "Depresión Mayor": "bg-indigo-100 text-indigo-700",
  "Trastorno Obsesivo-Compulsivo": "bg-purple-100 text-purple-700",
  "Fobia Social": "bg-pink-100 text-pink-700",
  "Trastorno de Pánico": "bg-red-100 text-red-700",
  "Insomnio Crónico": "bg-amber-100 text-amber-700",
  "Manejo de la Ira": "bg-orange-100 text-orange-700",
  "Duelo Complicado": "bg-slate-100 text-slate-700",
  "PTSD": "bg-rose-100 text-rose-700",
  "Baja Autoestima": "bg-emerald-100 text-emerald-700",
};

function getColor(diagnostico: string) {
  for (const key of Object.keys(diagnosticoColor)) {
    if (diagnostico.includes(key)) return diagnosticoColor[key];
  }
  return "bg-gray-100 text-gray-700";
}

export default function CasosPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <PageHeader
        title="Resolved Clinical Cases"
        description="Session-by-session analysis of real CBT cases. Study the clinical reasoning, applied techniques, and outcomes achieved."
        badge="📋 Clinical supervision"
      />

      <div className="grid gap-4">
        {casos.map((caso) => (
          <Link
            key={caso.id}
            href={`/casos/${caso.id}`}
            className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-[#10b981]/30 transition-all p-5 flex gap-5 items-start"
          >
            <div className="w-12 h-14 rounded-xl bg-gradient-to-br from-[#1e3a5f] to-[#2a4a6f] flex flex-col items-center justify-center text-white flex-shrink-0">
              <span className="text-lg font-bold leading-none">{caso.edad}</span>
              <span className="text-[9px] font-medium opacity-75 leading-tight">yrs</span>
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-3 flex-wrap">
                <h2 className="font-bold text-[#1e3a5f] group-hover:text-[#10b981] transition-colors">
                  {caso.titulo}
                </h2>
                <span className={`text-xs font-medium px-2.5 py-1 rounded-full flex-shrink-0 ${getColor(caso.diagnostico)}`}>
                  {caso.sexo} · {caso.totalSesiones} sesiones
                </span>
              </div>
              <p className="text-xs text-[#10b981] font-medium mt-0.5">{caso.diagnostico}</p>
              <p className="text-sm text-gray-600 mt-1.5 leading-relaxed line-clamp-2">{caso.resumen}</p>
              <div className="flex gap-4 mt-3 text-xs text-gray-400">
                <span>{caso.formulacionCognitiva.creenciasNucleares.length} core beliefs</span>
                <span>{caso.sesiones.length} detailed sessions</span>
                <span>{caso.aprendizajesClinicos.length} clinical takeaways</span>
              </div>
            </div>
            <svg className="w-5 h-5 text-gray-300 group-hover:text-[#10b981] transition-colors flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        ))}
      </div>
    </div>
  );
}
