import PageHeader from "@/components/PageHeader";
import Link from "next/link";

const instrumentos = [
  {
    nombre: "PHQ-9",
    nombreCompleto: "Patient Health Questionnaire-9",
    area: "Depresión",
    items: 9,
    tiempo: "2-3 min",
    color: "#2563eb",
    cortes: [
      { rango: "0–4", nivel: "Sin depresión", accion: "Sin tratamiento indicado" },
      { rango: "5–9", nivel: "Depresión leve", accion: "Monitorizar y reevaluar en 2 semanas" },
      { rango: "10–14", nivel: "Depresión moderada", accion: "Plan de tratamiento, TCC o farmacología" },
      { rango: "15–19", nivel: "Depresión moderada-grave", accion: "Tratamiento activo inmediato" },
      { rango: "20–27", nivel: "Depresión grave", accion: "Tratamiento inmediato, valorar hospitalización" },
    ],
    descripcion: "Instrumento de screening y seguimiento de la depresión mayor más utilizado en atención primaria y clínica. Valora los 9 criterios diagnósticos del DSM para el episodio depresivo mayor.",
    referencia: "Kroenke K, Spitzer RL & Williams JBW (2001). J Gen Intern Med.",
  },
  {
    nombre: "GAD-7",
    nombreCompleto: "Generalized Anxiety Disorder-7",
    area: "Ansiedad",
    items: 7,
    tiempo: "1-2 min",
    color: "#d97706",
    cortes: [
      { rango: "0–4", nivel: "Sin ansiedad", accion: "Sin tratamiento indicado" },
      { rango: "5–9", nivel: "Ansiedad leve", accion: "Psicoeducación y estrategias de afrontamiento" },
      { rango: "10–14", nivel: "Ansiedad moderada", accion: "Valorar TCC, técnicas de relajación" },
      { rango: "15–21", nivel: "Ansiedad grave", accion: "Tratamiento activo: TCC y/o farmacología" },
    ],
    descripcion: "Escala de 7 ítems para el screening y medición de severidad del Trastorno de Ansiedad Generalizada. Válida también como screener general de ansiedad.",
    referencia: "Spitzer RL, Kroenke K, Williams JBW & Löwe B (2006). Arch Intern Med.",
  },
  {
    nombre: "BAI",
    nombreCompleto: "Beck Anxiety Inventory",
    area: "Ansiedad",
    items: 21,
    tiempo: "5-10 min",
    color: "#f59e0b",
    cortes: [
      { rango: "0–7", nivel: "Ansiedad mínima", accion: "Sin intervención clínica" },
      { rango: "8–15", nivel: "Ansiedad leve", accion: "Psicoeducación" },
      { rango: "16–25", nivel: "Ansiedad moderada", accion: "Tratamiento psicológico" },
      { rango: "26–63", nivel: "Ansiedad grave", accion: "Tratamiento intensivo, valorar medicación" },
    ],
    descripcion: "21 síntomas somáticos y cognitivos de ansiedad. Diseñado por Beck, complementa al BDI-II para diferenciación depresión/ansiedad. Alta especificidad para síntomas somáticos.",
    referencia: "Beck AT, Epstein N, Brown G & Steer RA (1988). J Consult Clin Psychol.",
  },
  {
    nombre: "BDI-II",
    nombreCompleto: "Beck Depression Inventory-II",
    area: "Depresión",
    items: 21,
    tiempo: "5-10 min",
    color: "#7c3aed",
    cortes: [
      { rango: "0–13", nivel: "Sin depresión", accion: "Sin tratamiento" },
      { rango: "14–19", nivel: "Depresión leve", accion: "Seguimiento, intervención preventiva" },
      { rango: "20–28", nivel: "Depresión moderada", accion: "TCC, activación conductual" },
      { rango: "29–63", nivel: "Depresión grave", accion: "Tratamiento intensivo, plan de seguridad" },
    ],
    descripcion: "Escala clásica de Beck revisada para alinearse con criterios DSM-IV. 21 ítems que evalúan síntomas cognitivos, afectivos y somáticos de la depresión. Gold standard en investigación y clínica.",
    referencia: "Beck AT, Steer RA & Brown GK (1996). San Antonio: The Psychological Corporation.",
  },
  {
    nombre: "PCL-5",
    nombreCompleto: "PTSD Checklist for DSM-5",
    area: "Trauma / TEPT",
    items: 20,
    tiempo: "5-10 min",
    color: "#dc2626",
    cortes: [
      { rango: "0–32", nivel: "Sin TEPT probable", accion: "Seguimiento si hay historia de trauma" },
      { rango: "33+", nivel: "TEPT probable", accion: "Evaluación diagnóstica completa, EMDR o TCC focalizada en trauma" },
    ],
    descripcion: "20 ítems correspondientes a los 4 grupos de síntomas DSM-5: reexperimentación, evitación, alteraciones cognitivas/estado de ánimo e hiperactivación. Punto de corte: 33.",
    referencia: "Weathers FW et al. (2013). National Center for PTSD.",
  },
  {
    nombre: "SPIN",
    nombreCompleto: "Social Phobia Inventory",
    area: "Fobia Social",
    items: 17,
    tiempo: "3-5 min",
    color: "#0891b2",
    cortes: [
      { rango: "0–18", nivel: "Sin fobia social", accion: "Sin tratamiento específico" },
      { rango: "19–29", nivel: "Fobia social leve", accion: "Entrenamiento en habilidades sociales" },
      { rango: "30–39", nivel: "Fobia social moderada", accion: "TCC para fobia social (protocolo Clark)" },
      { rango: "40–68", nivel: "Fobia social grave", accion: "TCC intensiva, valorar grupo terapéutico" },
    ],
    descripcion: "17 ítems que evalúan miedo, evitación y síntomas fisiológicos de la ansiedad social. Ampliamente usado en el seguimiento del protocolo de Clark para fobia social.",
    referencia: "Connor KM et al. (2000). Br J Psychiatry.",
  },
  {
    nombre: "OCI-R",
    nombreCompleto: "Obsessive-Compulsive Inventory-Revised",
    area: "TOC",
    items: 18,
    tiempo: "3-5 min",
    color: "#16a34a",
    cortes: [
      { rango: "0–20", nivel: "Sin TOC clínico", accion: "Sin tratamiento específico" },
      { rango: "21+", nivel: "TOC probable", accion: "Evaluación diagnóstica, protocolo EPR (TCC)" },
    ],
    descripcion: "18 ítems que evalúan 6 subescalas del TOC: lavado, comprobación, ordenar, obsesiones, acumulación y neutralización. Punto de corte: 21.",
    referencia: "Foa EB et al. (2002). Psychol Assess.",
  },
  {
    nombre: "ISI",
    nombreCompleto: "Insomnia Severity Index",
    area: "Insomnio",
    items: 7,
    tiempo: "2 min",
    color: "#0f766e",
    cortes: [
      { rango: "0–7", nivel: "Sin insomnio clínico", accion: "Higiene del sueño" },
      { rango: "8–14", nivel: "Insomnio subclínico", accion: "Restricción del sueño, control de estímulos" },
      { rango: "15–21", nivel: "Insomnio moderado", accion: "TCC-I completa (protocolo)" },
      { rango: "22–28", nivel: "Insomnio grave", accion: "TCC-I intensiva, valorar farmacología temporal" },
    ],
    descripcion: "7 ítems que evalúan la naturaleza, gravedad e impacto del insomnio. Herramienta estándar en los protocolos de TCC para el Insomnio (TCC-I).",
    referencia: "Morin CM (1993). New York: Guilford Press.",
  },
];

const areaColors: Record<string, string> = {
  "Depresión": "bg-blue-100 text-blue-700",
  "Ansiedad": "bg-amber-100 text-amber-700",
  "Trauma / TEPT": "bg-red-100 text-red-700",
  "Fobia Social": "bg-cyan-100 text-cyan-700",
  "TOC": "bg-green-100 text-green-700",
  "Insomnio": "bg-teal-100 text-teal-700",
};

export default function EvaluacionPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <PageHeader
        title="Evaluación e Instrumentos"
        description="Escalas validadas para screening, diagnóstico y seguimiento del progreso terapéutico. Con puntos de corte y guías de interpretación clínica."
        badge={`${instrumentos.length} instrumentos`}
        badgeColor="bg-indigo-600"
      />

      {/* Quick tips */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
        {[
          { icon: "📋", title: "Administrar al inicio", text: "Establece la línea base antes de iniciar el tratamiento." },
          { icon: "📈", title: "Repetir cada 4 sesiones", text: "Monitoriza el progreso y ajusta el plan si no hay mejoría." },
          { icon: "🎯", title: "Compartir con el paciente", text: "Los números son poderosos aliados para la motivación al cambio." },
        ].map((tip) => (
          <div key={tip.title} className="bg-white rounded-2xl border border-slate-100 p-4 flex gap-3">
            <span className="text-2xl flex-shrink-0">{tip.icon}</span>
            <div>
              <p className="text-sm font-semibold text-[#1e3a5f] mb-0.5">{tip.title}</p>
              <p className="text-xs text-slate-500 leading-relaxed">{tip.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Instruments */}
      <div className="space-y-5">
        {instrumentos.map((inst) => (
          <div key={inst.nombre} className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm">
            {/* Header */}
            <div className="p-5 flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex items-start gap-4">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0"
                  style={{ background: inst.color }}
                >
                  {inst.nombre}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-[#1e3a5f] text-base">{inst.nombreCompleto}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full ${areaColors[inst.area] ?? "bg-slate-100 text-slate-700"}`}>
                      {inst.area}
                    </span>
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600">
                      {inst.items} ítems
                    </span>
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-600">
                      ⏱ {inst.tiempo}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="px-5 pb-4">
              <p className="text-sm text-slate-600 leading-relaxed mb-1">{inst.descripcion}</p>
              <p className="text-xs text-slate-400">{inst.referencia}</p>
            </div>

            {/* Scoring guide */}
            <div className="border-t border-slate-100 p-5">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">Guía de puntuación</p>
              <div className="space-y-2">
                {inst.cortes.map((corte) => (
                  <div key={corte.rango} className="flex items-start gap-3">
                    <span
                      className="text-[11px] font-bold px-2 py-0.5 rounded-md text-white flex-shrink-0 mt-0.5"
                      style={{ background: inst.color }}
                    >
                      {corte.rango}
                    </span>
                    <div>
                      <span className="text-sm font-semibold text-slate-700">{corte.nivel}</span>
                      <span className="text-sm text-slate-500"> — {corte.accion}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <div className="mt-8 bg-indigo-50 border border-indigo-100 rounded-2xl p-5">
        <p className="text-sm font-semibold text-indigo-800 mb-1">Nota sobre el uso clínico</p>
        <p className="text-sm text-indigo-700 leading-relaxed">
          Los instrumentos de screening no sustituyen la evaluación clínica. Los puntos de corte son orientativos
          y deben interpretarse siempre en el contexto clínico completo del paciente. Para la puntuación automática
          e historial de evolución, usa la{" "}
          <Link href="/instrumentos" className="font-semibold underline hover:no-underline">
            Calculadora de Instrumentos
          </Link>.
        </p>
      </div>
    </div>
  );
}
