import PageHeader from "@/components/PageHeader";
import Link from "next/link";

const instrumentos = [
  {
    nombre: "PHQ-9 — Escala de Depresión",
    descripcion: "9 ítems basados en criterios DSM-5. Punto de corte: 10 (depresión moderada). Tiempo: 2 minutos.",
    uso: "Screening y seguimiento de depresión mayor",
    categoria: "Depresión",
    color: "border-indigo-200",
    badge: "bg-indigo-100 text-indigo-700",
    fichaId: "diario-estado-animo",
  },
  {
    nombre: "GAD-7 — Escala de Ansiedad Generalizada",
    descripcion: "7 ítems para TAG. Punto de corte: 10 (ansiedad moderada). Alta sensibilidad y especificidad.",
    uso: "Screening y seguimiento de TAG y trastornos de ansiedad",
    categoria: "Ansiedad",
    color: "border-blue-200",
    badge: "bg-blue-100 text-blue-700",
    fichaId: "automonitoreo-ansiedad",
  },
  {
    nombre: "BDI-II — Inventario de Beck para Depresión",
    descripcion: "21 ítems, escala 0-63. Estándar de oro para evaluar severidad depresiva en TCC.",
    uso: "Evaluación inicial y seguimiento de depresión en TCC",
    categoria: "Depresión",
    color: "border-indigo-200",
    badge: "bg-indigo-100 text-indigo-700",
    fichaId: "bdi-ii",
  },
  {
    nombre: "BAI — Inventario de Ansiedad de Beck",
    descripcion: "21 síntomas físicos y cognitivos de ansiedad. Complementa el BDI-II.",
    uso: "Evaluación de severidad de ansiedad, especialmente somática",
    categoria: "Ansiedad",
    color: "border-blue-200",
    badge: "bg-blue-100 text-blue-700",
    fichaId: "bai",
  },
  {
    nombre: "PCL-5 — Escala PTSD (CAPS)",
    descripcion: "20 ítems DSM-5. Punto de corte: 33. Evalúa los 4 clusters del PTSD.",
    uso: "Screening y seguimiento del PTSD/trauma",
    categoria: "Trauma",
    color: "border-rose-200",
    badge: "bg-rose-100 text-rose-700",
    fichaId: null,
  },
  {
    nombre: "Y-BOCS — Yale-Brown para TOC",
    descripcion: "10 ítems que evalúan obsesiones y compulsiones por separado. Estándar para TOC.",
    uso: "Evaluación y seguimiento del TOC",
    categoria: "TOC",
    color: "border-purple-200",
    badge: "bg-purple-100 text-purple-700",
    fichaId: null,
  },
  {
    nombre: "SPIN — Fobia Social",
    descripcion: "17 ítems. Punto de corte: 19 para fobia social probable.",
    uso: "Screening y seguimiento de fobia social",
    categoria: "Fobia Social",
    color: "border-pink-200",
    badge: "bg-pink-100 text-pink-700",
    fichaId: null,
  },
  {
    nombre: "PDSS — Trastorno de Pánico",
    descripcion: "7 ítems que evalúan frecuencia, malestar y evitación en el pánico.",
    uso: "Seguimiento del trastorno de pánico",
    categoria: "Pánico",
    color: "border-red-200",
    badge: "bg-red-100 text-red-700",
    fichaId: null,
  },
];

const plantillas = [
  {
    titulo: "Formulación de Caso TCC",
    descripcion: "Estructura completa para formular un caso en TCC: eventos predisponentes, precipitantes, mantenedores, mapa cognitivo, hipótesis de trabajo y plan de tratamiento.",
    icono: "🗺️",
  },
  {
    titulo: "Registro de Progreso Sesión a Sesión",
    descripcion: "Plantilla para registrar los avances del paciente: objetivos trabajados, técnicas aplicadas, tareas asignadas y realizadas, nivel de mejoría percibida.",
    icono: "📈",
  },
  {
    titulo: "Plan de Tratamiento TCC",
    descripcion: "Estructura el plan completo: diagnóstico, formulación cognitiva, objetivos a corto y largo plazo, técnicas previstas, criterios de alta.",
    icono: "📋",
  },
  {
    titulo: "Escala de Evaluación de Sesión (SRS)",
    descripcion: "4 ítems para que el paciente evalúe la alianza terapéutica al final de cada sesión. Detección temprana de problemas en la relación terapéutica.",
    icono: "⭐",
    fichaId: "escala-evaluacion-sesion",
  },
  {
    titulo: "Escala de Resultados (ORS)",
    descripcion: "4 ítems para evaluar el bienestar general del paciente al inicio de cada sesión. Monitoriza la evolución clínica semana a semana.",
    icono: "📊",
  },
  {
    titulo: "Plan de Alta y Prevención de Recaídas",
    descripcion: "Estructura el proceso de alta: revisión de logros, señales de alerta, plan de acción ante recaída, contactos de apoyo, criterios para retomar terapia.",
    icono: "🎯",
    fichaId: "plan-prevencion-recaidas",
  },
];

export default function EvaluacionPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <PageHeader
        title="Evaluación y Seguimiento"
        description="Instrumentos estandarizados, plantillas de formulación y herramientas para medir el progreso del paciente sesión a sesión."
        badge="📊 Herramientas de evaluación"
      />

      {/* Instrumentos */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-[#1e3a5f] mb-4">Instrumentos de evaluación estandarizados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {instrumentos.map((inst) => (
            <div key={inst.nombre} className={`bg-white rounded-2xl border ${inst.color} shadow-sm p-5`}>
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="font-bold text-[#1e3a5f] text-sm leading-snug">{inst.nombre}</h3>
                <span className={`text-xs font-medium px-2 py-0.5 rounded-full flex-shrink-0 ${inst.badge}`}>
                  {inst.categoria}
                </span>
              </div>
              <p className="text-xs text-gray-500 mb-1.5">{inst.descripcion}</p>
              <p className="text-xs text-gray-700 font-medium">{inst.uso}</p>
              {inst.fichaId && (
                <Link
                  href={`/fichas/${inst.fichaId}`}
                  className="inline-flex items-center gap-1 mt-3 text-xs text-[#10b981] font-medium hover:underline"
                >
                  Ver ficha interactiva →
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Cómo interpretar */}
      <section className="mb-10 bg-blue-50 rounded-2xl border border-blue-100 p-6">
        <h2 className="text-lg font-bold text-[#1e3a5f] mb-4">Cómo usar los instrumentos en TCC</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { paso: "1", titulo: "Evaluación inicial", desc: "Administra el instrumento correspondiente al motivo de consulta en la primera sesión para obtener una línea de base." },
            { paso: "2", titulo: "Seguimiento periódico", desc: "Repite la escala cada 4-6 sesiones. Una reducción del 50% indica respuesta al tratamiento; del 75%, remisión." },
            { paso: "3", titulo: "Criterio de alta", desc: "Usa los resultados para fundamentar el alta y como criterio objetivo de recuperación. Documenta el cambio con números." },
          ].map((item) => (
            <div key={item.paso} className="flex gap-3">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold flex-shrink-0">
                {item.paso}
              </div>
              <div>
                <div className="font-semibold text-blue-900 text-sm">{item.titulo}</div>
                <p className="text-xs text-blue-700 mt-0.5 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Plantillas */}
      <section>
        <h2 className="text-lg font-bold text-[#1e3a5f] mb-4">Plantillas y formularios clínicos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {plantillas.map((p) => (
            <div key={p.titulo} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 flex gap-4">
              <div className="text-2xl flex-shrink-0">{p.icono}</div>
              <div>
                <h3 className="font-bold text-[#1e3a5f] text-sm mb-1">{p.titulo}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{p.descripcion}</p>
                {p.fichaId && (
                  <Link
                    href={`/fichas/${p.fichaId}`}
                    className="inline-flex items-center gap-1 mt-2 text-xs text-[#10b981] font-medium hover:underline"
                  >
                    Usar ficha interactiva →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
