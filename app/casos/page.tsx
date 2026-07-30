import Link from "next/link";
import { casos } from "@/app/data/casos";
import PageHeader from "@/components/PageHeader";

const diagnosisColors: Record<string, { bg: string; text: string; border: string }> = {
  "ansiedad-generalizada": { bg: "bg-amber-50",  text: "text-amber-700",  border: "border-l-amber-400" },
  "depresion-mayor":       { bg: "bg-blue-50",   text: "text-blue-700",   border: "border-l-blue-400" },
  "toc":                   { bg: "bg-red-50",    text: "text-red-700",    border: "border-l-red-400" },
  "fobia-social":          { bg: "bg-violet-50", text: "text-violet-700", border: "border-l-violet-400" },
};

const defaultColor = { bg: "bg-slate-50", text: "text-slate-700", border: "border-l-slate-400" };

export default function CasosPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <PageHeader
        title="Casos Clínicos"
        description="20 casos resueltos con análisis sesión a sesión. Reflexión interactiva antes de ver la solución del terapeuta."
        badge={`${casos.length} Casos`}
        badgeColor="bg-red-600"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {casos.map((caso) => {
          const color = diagnosisColors[caso.id] ?? defaultColor;
          return (
            <Link
              key={caso.id}
              href={`/casos/${caso.id}`}
              className={`group bg-white rounded-2xl border border-slate-100 border-l-4 ${color.border} shadow-sm hover:shadow-md transition-all duration-200 p-6 flex flex-col`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className={`inline-block text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full mb-2 ${color.bg} ${color.text}`}>
                    {caso.diagnostico.split("(")[0].trim()}
                  </span>
                  <h3 className="font-bold text-[#1e3a5f] text-lg leading-snug group-hover:text-violet-700 transition-colors">
                    {caso.titulo}
                  </h3>
                </div>
              </div>

              {/* Patient info */}
              <div className="flex items-center gap-4 mb-4 text-sm text-slate-500">
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  {caso.paciente}, {caso.edad} años
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {caso.totalSesiones} sesiones
                </span>
              </div>

              {/* Summary */}
              <p className="text-sm text-slate-500 leading-relaxed flex-1 line-clamp-3">
                {caso.resumen}
              </p>

              {/* Techniques preview */}
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                <div className="flex flex-wrap gap-1">
                  {caso.sesiones[0]?.tecnicas.slice(0, 2).map((t) => (
                    <span key={t} className="text-[11px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded-full">
                      {t}
                    </span>
                  ))}
                  {caso.sesiones.length > 0 && (
                    <span className="text-[11px] text-slate-400">+{caso.sesiones.length - 1} sesiones más</span>
                  )}
                </div>
                <span className="text-sm text-violet-600 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 flex-shrink-0 ml-2">
                  Ver caso
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Info note */}
      <div className="mt-8 bg-slate-50 border border-slate-200 rounded-2xl p-5 flex gap-4">
        <div className="w-10 h-10 bg-violet-100 rounded-xl flex items-center justify-center flex-shrink-0">
          <svg className="w-5 h-5 text-violet-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-700 mb-0.5">Cómo usar los casos clínicos</p>
          <p className="text-sm text-slate-500 leading-relaxed">
            Cada caso incluye sesiones con descripción, técnicas y resultado. Reflexiona sobre cada sesión antes de revelar la respuesta del terapeuta. Ideal para supervisión clínica y formación continuada.
          </p>
        </div>
      </div>
    </div>
  );
}
