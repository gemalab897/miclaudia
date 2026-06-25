import { notFound } from "next/navigation";
import Link from "next/link";
import { protocolos } from "@/app/data/protocolos";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return protocolos.map((p) => ({ slug: p.slug }));
}

export default async function ProtocoloPage({ params }: Props) {
  const { slug } = await params;
  const protocolo = protocolos.find((p) => p.slug === slug);

  if (!protocolo) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      {/* Back button */}
      <Link
        href="/protocolos"
        className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#1e3a5f] mb-6 transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Volver a Protocolos
      </Link>

      {/* Header */}
      <div className="bg-gradient-to-br from-[#1e3a5f] to-[#1e4a7f] text-white rounded-2xl p-6 mb-6">
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-xs">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {protocolo.sesiones}
          </div>
          {protocolo.formatoSesion && (
            <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full text-xs">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {protocolo.formatoSesion}
            </div>
          )}
        </div>
        <h1 className="text-2xl md:text-3xl font-bold mb-3">{protocolo.titulo}</h1>
        <p className="text-blue-200 leading-relaxed">{protocolo.descripcion}</p>
        {protocolo.poblacion && (
          <p className="text-blue-300 text-sm mt-3 italic">{protocolo.poblacion}</p>
        )}
      </div>

      {/* Objetivos principales */}
      {protocolo.objetivosPrincipales && protocolo.objetivosPrincipales.length > 0 && (
        <div className="bg-emerald-50 rounded-xl border border-emerald-200 p-5 mb-8">
          <h3 className="font-bold text-emerald-800 mb-3 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Objetivos Principales del Protocolo
          </h3>
          <ul className="space-y-1.5">
            {protocolo.objetivosPrincipales.map((obj, i) => (
              <li key={i} className="text-sm text-emerald-900 flex items-start gap-2">
                <span className="text-emerald-500 mt-0.5 font-bold">•</span>
                {obj}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Info Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="bg-white rounded-xl border border-slate-100 p-4 shadow-sm">
          <h3 className="font-semibold text-[#1e3a5f] mb-3 flex items-center gap-2">
            <span className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </span>
            Indicaciones
          </h3>
          <ul className="space-y-1">
            {protocolo.indicaciones.map((ind) => (
              <li key={ind} className="text-sm text-gray-600 flex items-start gap-2">
                <span className="text-emerald-500 mt-1">•</span>
                {ind}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white rounded-xl border border-slate-100 p-4 shadow-sm">
          <h3 className="font-semibold text-[#1e3a5f] mb-3 flex items-center gap-2">
            <span className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center">
              <svg className="w-3.5 h-3.5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </span>
            Contraindicaciones
          </h3>
          <ul className="space-y-1">
            {protocolo.contraindicaciones.map((ci) => (
              <li key={ci} className="text-sm text-gray-600 flex items-start gap-2">
                <span className="text-amber-500 mt-1">•</span>
                {ci}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Pasos */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-[#1e3a5f] mb-6">Protocolo Paso a Paso</h2>
        <div className="space-y-6">
          {protocolo.pasos.map((paso) => (
            <div key={paso.numero} className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="flex items-center gap-4 p-4 bg-slate-50 border-b border-slate-100">
                <div className="w-9 h-9 bg-[#1e3a5f] text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                  {paso.numero}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-[#1e3a5f]">{paso.titulo}</h3>
                  {paso.duracion && (
                    <span className="text-xs text-gray-400 flex items-center gap-1 mt-0.5">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {paso.duracion}
                    </span>
                  )}
                </div>
              </div>
              <div className="p-5 space-y-4">
                <p className="text-gray-700 leading-relaxed">{paso.descripcion}</p>

                {/* Guión sugerido */}
                {paso.guionTerapeuta && (
                  <div className="bg-teal-50 rounded-lg border border-teal-200 p-3">
                    <div className="text-xs font-semibold text-teal-700 uppercase mb-1 flex items-center gap-1">
                      <span>💬</span>
                      Guión sugerido
                    </div>
                    <p className="text-sm text-teal-900 leading-relaxed italic">&ldquo;{paso.guionTerapeuta}&rdquo;</p>
                  </div>
                )}

                {/* Preguntas clave */}
                {paso.preguntasClave && paso.preguntasClave.length > 0 && (
                  <div className="bg-yellow-50 rounded-lg border border-yellow-200 p-3">
                    <div className="text-xs font-semibold text-yellow-700 uppercase mb-2 flex items-center gap-1">
                      <span>❓</span>
                      Preguntas clave
                    </div>
                    <ul className="space-y-1">
                      {paso.preguntasClave.map((q, i) => (
                        <li key={i} className="text-sm text-yellow-900 flex items-start gap-2">
                          <span className="text-yellow-500 mt-0.5 font-bold flex-shrink-0">—</span>
                          <span className="italic">{q}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Ejemplo clínico */}
                {paso.ejemploClinico && (
                  <div className="bg-green-50 rounded-lg border border-green-200 p-3">
                    <div className="text-xs font-semibold text-green-700 uppercase mb-1 flex items-center gap-1">
                      <span>📋</span>
                      Ejemplo clínico
                    </div>
                    <p className="text-sm text-green-900 leading-relaxed">{paso.ejemploClinico}</p>
                  </div>
                )}

                {/* Errores frecuentes */}
                {paso.erroresComunes && paso.erroresComunes.length > 0 && (
                  <div className="bg-orange-50 rounded-lg border border-orange-200 p-3">
                    <div className="text-xs font-semibold text-orange-700 uppercase mb-2 flex items-center gap-1">
                      <span>⚠️</span>
                      Errores frecuentes
                    </div>
                    <ul className="space-y-1">
                      {paso.erroresComunes.map((e, i) => (
                        <li key={i} className="text-sm text-orange-900 flex items-start gap-2">
                          <span className="text-orange-500 mt-0.5 font-bold flex-shrink-0">✗</span>
                          {e}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {paso.tecnicas && paso.tecnicas.length > 0 && (
                    <div>
                      <div className="text-xs font-semibold text-gray-400 uppercase mb-2">Técnicas</div>
                      <div className="flex flex-wrap gap-1">
                        {paso.tecnicas.map((t) => (
                          <span
                            key={t}
                            className="text-xs bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {paso.materiales && paso.materiales.length > 0 && (
                    <div>
                      <div className="text-xs font-semibold text-gray-400 uppercase mb-2">Materiales</div>
                      <ul className="space-y-0.5">
                        {paso.materiales.map((m) => (
                          <li key={m} className="text-xs text-gray-600 flex items-start gap-1">
                            <span className="text-[#10b981] mt-0.5">•</span>
                            {m}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {paso.notas && (
                  <div className="bg-amber-50 rounded-lg border border-amber-200 p-3">
                    <div className="text-xs font-semibold text-amber-700 uppercase mb-1 flex items-center gap-1">
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Nota Clínica
                    </div>
                    <p className="text-xs text-amber-800 leading-relaxed">{paso.notas}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Evidencia */}
      <div className="bg-[#1e3a5f]/5 rounded-xl border border-[#1e3a5f]/20 p-5 mb-8">
        <h3 className="font-bold text-[#1e3a5f] mb-2">Base de Evidencia</h3>
        <p className="text-gray-600 text-sm leading-relaxed">{protocolo.evidencia}</p>
      </div>

      {/* Fichas relacionadas */}
      {protocolo.fichasRelacionadas.length > 0 && (
        <div>
          <h3 className="font-bold text-[#1e3a5f] mb-3">Fichas Clínicas Relacionadas</h3>
          <div className="flex flex-wrap gap-3">
            {protocolo.fichasRelacionadas.map((fichaId) => (
              <Link
                key={fichaId}
                href={`/fichas/${fichaId}`}
                className="inline-flex items-center gap-2 bg-white border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 text-sm text-gray-700 hover:text-emerald-700 px-4 py-2 rounded-xl transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {fichaId.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
