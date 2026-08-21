import PageHeader from "@/components/PageHeader";
import Link from "next/link";

const instrumentos = [
  {
    nombre: "PHQ-9 — Depression Scale",
    descripcion: "9 items based on DSM-5 criteria. Cut-off: 10 (moderate depression). Time: 2 minutes.",
    uso: "Screening and follow-up of major depression",
    categoria: "Depression",
    color: "border-indigo-200",
    badge: "bg-indigo-100 text-indigo-700",
    fichaId: "diario-estado-animo",
  },
  {
    nombre: "GAD-7 — Generalized Anxiety Scale",
    descripcion: "7 items for GAD. Cut-off: 10 (moderate anxiety). High sensitivity and specificity.",
    uso: "Screening and follow-up of GAD and anxiety disorders",
    categoria: "Anxiety",
    color: "border-blue-200",
    badge: "bg-blue-100 text-blue-700",
    fichaId: "automonitoreo-ansiedad",
  },
  {
    nombre: "BDI-II — Beck Depression Inventory",
    descripcion: "21 items, scale 0–63. Gold standard for assessing depressive severity in CBT.",
    uso: "Initial assessment and follow-up of depression in CBT",
    categoria: "Depression",
    color: "border-indigo-200",
    badge: "bg-indigo-100 text-indigo-700",
    fichaId: "bdi-ii",
  },
  {
    nombre: "BAI — Beck Anxiety Inventory",
    descripcion: "21 physical and cognitive anxiety symptoms. Complements the BDI-II.",
    uso: "Assessment of anxiety severity, especially somatic",
    categoria: "Anxiety",
    color: "border-blue-200",
    badge: "bg-blue-100 text-blue-700",
    fichaId: "bai",
  },
  {
    nombre: "PCL-5 — PTSD Checklist (DSM-5)",
    descripcion: "20 DSM-5 items. Cut-off: 33. Assesses all 4 PTSD clusters.",
    uso: "Screening and follow-up of PTSD / trauma",
    categoria: "Trauma",
    color: "border-rose-200",
    badge: "bg-rose-100 text-rose-700",
    fichaId: null,
  },
  {
    nombre: "Y-BOCS — Yale-Brown OCD Scale",
    descripcion: "10 items assessing obsessions and compulsions separately. Standard for OCD.",
    uso: "Assessment and follow-up of OCD",
    categoria: "OCD",
    color: "border-purple-200",
    badge: "bg-purple-100 text-purple-700",
    fichaId: null,
  },
  {
    nombre: "SPIN — Social Phobia Inventory",
    descripcion: "17 items. Cut-off: 19 for probable social phobia.",
    uso: "Screening and follow-up of social phobia",
    categoria: "Social Phobia",
    color: "border-pink-200",
    badge: "bg-pink-100 text-pink-700",
    fichaId: null,
  },
  {
    nombre: "PDSS — Panic Disorder Severity Scale",
    descripcion: "7 items assessing frequency, distress, and avoidance in panic.",
    uso: "Follow-up of panic disorder",
    categoria: "Panic",
    color: "border-red-200",
    badge: "bg-red-100 text-red-700",
    fichaId: null,
  },
];

const plantillas = [
  {
    titulo: "CBT Case Formulation",
    descripcion: "Complete structure for formulating a CBT case: predisposing, precipitating, and maintaining factors, cognitive map, working hypothesis, and treatment plan.",
    icono: "🗺️",
  },
  {
    titulo: "Session-by-Session Progress Record",
    descripcion: "Template for recording patient progress: goals addressed, techniques applied, assigned and completed tasks, perceived level of improvement.",
    icono: "📈",
  },
  {
    titulo: "CBT Treatment Plan",
    descripcion: "Structures the complete plan: diagnosis, cognitive formulation, short- and long-term goals, planned techniques, discharge criteria.",
    icono: "📋",
  },
  {
    titulo: "Session Rating Scale (SRS)",
    descripcion: "4 items for the patient to evaluate the therapeutic alliance at the end of each session. Early detection of problems in the therapeutic relationship.",
    icono: "⭐",
    fichaId: "escala-evaluacion-sesion",
  },
  {
    titulo: "Outcome Rating Scale (ORS)",
    descripcion: "4 items for assessing the patient's overall well-being at the start of each session. Monitors clinical progress week by week.",
    icono: "📊",
  },
  {
    titulo: "Discharge and Relapse Prevention Plan",
    descripcion: "Structures the discharge process: review of gains, warning signs, action plan for relapse, support contacts, criteria for resuming therapy.",
    icono: "🎯",
    fichaId: "plan-prevencion-recaidas",
  },
];

export default function EvaluacionPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <PageHeader
        title="Assessment and Monitoring"
        description="Standardized instruments, formulation templates, and tools to measure patient progress session by session."
        badge="📊 Assessment Tools"
      />

      {/* Instruments */}
      <section className="mb-10">
        <h2 className="text-lg font-bold text-[#1e3a5f] mb-4">Standardized assessment instruments</h2>
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
                  View interactive worksheet →
                </Link>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* How to use */}
      <section className="mb-10 bg-blue-50 rounded-2xl border border-blue-100 p-6">
        <h2 className="text-lg font-bold text-[#1e3a5f] mb-4">How to use instruments in CBT</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { paso: "1", titulo: "Initial assessment", desc: "Administer the instrument corresponding to the presenting problem in the first session to obtain a baseline." },
            { paso: "2", titulo: "Periodic monitoring", desc: "Repeat the scale every 4–6 sessions. A 50% reduction indicates treatment response; 75% indicates remission." },
            { paso: "3", titulo: "Discharge criterion", desc: "Use results to support the discharge decision and as an objective measure of recovery. Document change with numbers." },
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

      {/* Templates */}
      <section>
        <h2 className="text-lg font-bold text-[#1e3a5f] mb-4">Clinical templates and forms</h2>
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
                    Use interactive worksheet →
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
