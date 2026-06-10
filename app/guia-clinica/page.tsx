import Link from "next/link";
import { guiaClinica } from "@/app/data/guia-clinica";
import PageHeader from "@/components/PageHeader";

const diagnosticoIcons: Record<string, string> = {
  "ansiedad-generalizada": "😰",
  depresion: "😔",
  toc: "🔁",
  "fobia-especifica": "😱",
  ptsd: "⚡",
  "fobia-social": "👥",
};

const prioridadColors = {
  primera: "bg-red-100 text-red-700 border-red-200",
  segunda: "bg-amber-100 text-amber-700 border-amber-200",
  complementaria: "bg-blue-100 text-blue-700 border-blue-200",
};

export default function GuiaClinicaPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <PageHeader
        title="Guía de Decisión Clínica"
        description="Selección de protocolos y estrategias por diagnóstico, con criterios clave, instrumentos de evaluación y consideraciones especiales."
        badge="6 Diagnósticos"
        badgeColor="bg-amber-600"
      />

      <div className="grid grid-cols-1 gap-6">
        {guiaClinica.map((dx) => (
          <div key={dx.id} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="flex items-start gap-4 p-6 border-b border-slate-100">
              <div className="text-3xl flex-shrink-0">{diagnosticoIcons[dx.id] || "🏥"}</div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-[#1e3a5f] mb-1">{dx.nombre}</h2>
                <p className="text-gray-600 text-sm leading-relaxed">{dx.descripcion}</p>
              </div>
            </div>

            <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Criterios */}
              <div>
                <h3 className="font-semibold text-[#1e3a5f] text-sm mb-2 flex items-center gap-1">
                  <svg className="w-4 h-4 text-amber-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Criterios clave
                </h3>
                <ul className="space-y-1">
                  {dx.criteriosClave.map((c) => (
                    <li key={c} className="text-xs text-gray-600 flex items-start gap-1.5">
                      <span className="text-amber-400 mt-0.5 flex-shrink-0">•</span>
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Instrumentos */}
              <div>
                <h3 className="font-semibold text-[#1e3a5f] text-sm mb-2 flex items-center gap-1">
                  <svg className="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Instrumentos
                </h3>
                <ul className="space-y-1">
                  {dx.instrumentos.map((i) => (
                    <li key={i} className="text-xs text-gray-600 flex items-start gap-1.5">
                      <span className="text-blue-400 mt-0.5 flex-shrink-0">•</span>
                      {i}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Protocolos */}
              <div>
                <h3 className="font-semibold text-[#1e3a5f] text-sm mb-2 flex items-center gap-1">
                  <svg className="w-4 h-4 text-emerald-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                  Protocolos recomendados
                </h3>
                <div className="space-y-1.5">
                  {dx.protocolosRecomendados.map((p) => (
                    <Link
                      key={p.slug}
                      href={`/protocolos/${p.slug}`}
                      className="block group"
                    >
                      <div className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg border text-xs font-medium transition-opacity hover:opacity-80 ${prioridadColors[p.prioridad]}`}>
                        <span className="uppercase font-bold text-xs opacity-60">{p.prioridad === "primera" ? "1ª" : p.prioridad === "segunda" ? "2ª" : "Comp."}</span>
                        <span className="flex-1">{p.nombre}</span>
                        <svg className="w-3 h-3 opacity-40 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Alerts */}
            {dx.alertas.length > 0 && (
              <div className="mx-6 mb-4 bg-red-50 border border-red-100 rounded-xl p-3">
                <div className="font-semibold text-red-700 text-xs mb-1 flex items-center gap-1">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                  Alertas clínicas
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
                  {dx.alertas.map((a) => (
                    <div key={a} className="text-xs text-red-700 flex items-start gap-1">
                      <span className="mt-0.5 flex-shrink-0">⚠</span>
                      {a}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Pronostico */}
            <div className="mx-6 mb-6 flex items-start gap-2 text-xs text-gray-500">
              <svg className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span><strong className="text-gray-700">Pronóstico:</strong> {dx.prognotico}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
