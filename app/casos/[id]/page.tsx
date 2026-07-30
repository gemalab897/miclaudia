import { notFound } from "next/navigation";
import Link from "next/link";
import { casos } from "@/app/data/casos";
import SessionReveal from "./SessionReveal";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return casos.map((c) => ({ id: c.id }));
}

const diagnosisAccent: Record<string, string> = {
  "ansiedad-generalizada":  "#d97706",
  "depresion-mayor":        "#2563eb",
  "toc":                    "#dc2626",
  "fobia-social":           "#7c3aed",
  "panico":                 "#ea580c",
  "insomnio":               "#0f766e",
  "ira":                    "#e11d48",
  "tept":                   "#475569",
  "ansiedad-salud":         "#ca8a04",
  "depresion-adulto-mayor": "#4338ca",
  "depresion-adolescente":  "#0284c7",
  "bulimia-nerviosa":       "#db2777",
  "dependencia-alcohol":    "#b45309",
  "tlp-borderline":         "#a21caf",
  "dolor-cronico":          "#78716c",
  "duelo-complicado":       "#1d4ed8",
  "fobia-especifica-vuelo": "#0891b2",
  "tept-abuso":             "#b91c1c",
  "depresion-jubilacion":   "#1e40af",
  "panico-agorafobia":      "#c2410c",
};

export default async function CasoDetallePage({ params }: Props) {
  const { id } = await params;
  const caso = casos.find((c) => c.id === id);
  if (!caso) notFound();

  const accent = diagnosisAccent[caso.id] ?? "#64748b";

  return (
    <div className="max-w-4xl mx-auto px-6 py-10">

      {/* Back */}
      <Link
        href="/casos"
        className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-800 transition-colors mb-8 group"
      >
        <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
        Todos los casos
      </Link>

      {/* Hero */}
      <div
        className="rounded-2xl p-7 mb-8 text-white relative overflow-hidden"
        style={{ background: `linear-gradient(135deg, ${accent}dd 0%, ${accent}99 100%)` }}
      >
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "24px 24px" }} />
        <div className="relative">
          <span className="inline-block text-xs font-bold tracking-widest uppercase bg-white/20 px-3 py-1 rounded-full mb-4">
            {caso.diagnostico}
          </span>
          <h1 className="text-3xl font-bold mb-4 leading-tight" style={{ fontFamily: "Georgia, serif" }}>
            {caso.titulo}
          </h1>
          <div className="flex flex-wrap gap-5 text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
              {caso.paciente} · {caso.edad} años · {caso.sexo}
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              {caso.totalSesiones} sesiones
            </span>
          </div>
        </div>
      </div>

      {/* Resumen */}
      <section className="bg-white rounded-2xl border border-slate-100 p-6 mb-6">
        <h2 className="text-base font-bold text-[#1e3a5f] mb-3">Resumen del caso</h2>
        <p className="text-slate-600 leading-relaxed">{caso.resumen}</p>
      </section>

      {/* Presentación */}
      <section className="bg-white rounded-2xl border border-slate-100 p-6 mb-6">
        <h2 className="text-base font-bold text-[#1e3a5f] mb-3">Presentación clínica</h2>
        <p className="text-slate-600 leading-relaxed">{caso.presentacion}</p>
      </section>

      {/* Formulación cognitiva */}
      <section className="bg-white rounded-2xl border border-slate-100 p-6 mb-6">
        <h2 className="text-base font-bold text-[#1e3a5f] mb-5">Formulación cognitiva</h2>
        <div className="space-y-4">
          <div className="bg-slate-50 rounded-xl p-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Historia y eventos vitales</h3>
            <p className="text-sm text-slate-700 leading-relaxed">{caso.formulacionCognitiva.eventosVitales}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { label: "Creencias nucleares", items: caso.formulacionCognitiva.creenciasNucleares },
              { label: "Supuestos disfuncionales", items: caso.formulacionCognitiva.supuestosDisfuncionales },
              { label: "Pensamientos automáticos", items: caso.formulacionCognitiva.pensamientosAutomaticos },
              { label: "Conductas problemáticas", items: caso.formulacionCognitiva.conductas },
            ].map(({ label, items }) => (
              <div key={label} className="bg-slate-50 rounded-xl p-4">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">{label}</h3>
                <ul className="space-y-1.5">
                  {items.map((item) => (
                    <li key={item} className="text-sm text-slate-700 flex gap-2 items-start">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: accent }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="bg-slate-50 rounded-xl p-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">Emociones prevalentes</h3>
            <div className="flex flex-wrap gap-2">
              {caso.formulacionCognitiva.emocionesPrevalentes.map((e) => (
                <span key={e} className="text-sm px-3 py-1 rounded-full text-white font-medium" style={{ background: accent }}>
                  {e}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Objetivos */}
      <section className="bg-white rounded-2xl border border-slate-100 p-6 mb-6">
        <h2 className="text-base font-bold text-[#1e3a5f] mb-4">Objetivos terapéuticos</h2>
        <ul className="space-y-2.5">
          {caso.objetivosTerapeuticos.map((obj, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
              <span className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold mt-0.5" style={{ background: accent }}>
                {i + 1}
              </span>
              {obj}
            </li>
          ))}
        </ul>
      </section>

      {/* Sessions — interactive client component */}
      <SessionReveal sesiones={caso.sesiones} accent={accent} />

      {/* Resultados */}
      <section className="bg-white rounded-2xl border border-slate-100 p-6 mb-6">
        <h2 className="text-base font-bold text-[#1e3a5f] mb-3">Resultados del tratamiento</h2>
        <p className="text-slate-600 leading-relaxed">{caso.resultados}</p>
      </section>

      {/* Aprendizajes */}
      <section className="rounded-2xl p-6 mb-8" style={{ background: `${accent}12`, border: `1px solid ${accent}30` }}>
        <h2 className="text-base font-bold mb-4" style={{ color: accent }}>Aprendizajes clínicos clave</h2>
        <ul className="space-y-3">
          {caso.aprendizajesClinicos.map((ap, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-slate-700">
              <span className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5" style={{ background: accent }}>
                {i + 1}
              </span>
              {ap}
            </li>
          ))}
        </ul>
      </section>

      {/* Nav */}
      <div className="flex items-center justify-between pt-6 border-t border-slate-100">
        <Link href="/casos" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-slate-800 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          Todos los casos
        </Link>
        <Link href="/protocolos" className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-xl text-white transition-all" style={{ background: accent }}>
          Ver protocolos relacionados
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </Link>
      </div>
    </div>
  );
}
