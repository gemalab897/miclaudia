import Link from "next/link";
import { protocolos } from "@/app/data/protocolos";
import PageHeader from "@/components/PageHeader";

export default function ProtocolosPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <PageHeader
        title="Protocolos Clínicos TCC"
        description="10 protocolos basados en evidencia con pasos detallados, técnicas, materiales y notas clínicas para cada sesión."
        badge={`${protocolos.length} Protocolos`}
        badgeColor="bg-emerald-600"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {protocolos.map((protocolo) => (
          <Link
            key={protocolo.slug}
            href={`/protocolos/${protocolo.slug}`}
            className="group bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all duration-200 p-6 flex flex-col"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                {protocolo.titulo.charAt(0)}
              </div>
              <div className="flex items-center gap-1 text-xs text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {protocolo.sesiones}
              </div>
            </div>
            <h3 className="font-bold text-[#1e3a5f] text-lg mb-2 group-hover:text-emerald-600 transition-colors">
              {protocolo.titulo}
            </h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1">{protocolo.descripcion}</p>

            <div className="mb-4">
              <div className="text-xs font-semibold text-gray-400 uppercase mb-2">Indicado para</div>
              <div className="flex flex-wrap gap-1">
                {protocolo.indicaciones.slice(0, 4).map((ind) => (
                  <span
                    key={ind}
                    className="text-xs bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full"
                  >
                    {ind}
                  </span>
                ))}
                {protocolo.indicaciones.length > 4 && (
                  <span className="text-xs text-gray-400">+{protocolo.indicaciones.length - 4} más</span>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t border-slate-100">
              <span className="text-xs text-gray-400">{protocolo.pasos.length} pasos detallados</span>
              <span className="text-sm text-emerald-600 font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                Ver protocolo
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-10 bg-gradient-to-r from-[#1e3a5f] to-[#1e4a7f] rounded-2xl p-6 text-white">
        <h3 className="font-bold text-lg mb-2">¿Cómo usar los protocolos?</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-blue-200">
          <div>
            <div className="font-semibold text-white mb-1">1. Selecciona el protocolo</div>
            <p>Elige el protocolo según el diagnóstico o la técnica que quieres trabajar en sesión.</p>
          </div>
          <div>
            <div className="font-semibold text-white mb-1">2. Sigue los pasos</div>
            <p>Cada protocolo tiene pasos numerados con descripción, técnicas y notas clínicas.</p>
          </div>
          <div>
            <div className="font-semibold text-white mb-1">3. Usa las fichas</div>
            <p>Cada protocolo enlaza con las fichas clínicas relacionadas para usar con el paciente.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
