import Link from "next/link";

const modules = [
  {
    href: "/modelo-cognitivo",
    title: "Modelo Cognitivo",
    description: "Ciclo TCC, distorsiones cognitivas y tríada de Beck explicados para la práctica clínica.",
    emoji: "🧠",
    accent: "#3b82f6",
    bg: "from-blue-500/10 to-blue-600/5",
    border: "border-blue-100",
    tag: "Fundamentos",
  },
  {
    href: "/protocolos",
    title: "Protocolos",
    description: "10 protocolos paso a paso con técnicas, materiales y notas clínicas detalladas.",
    emoji: "📋",
    accent: "#10b981",
    bg: "from-emerald-500/10 to-emerald-600/5",
    border: "border-emerald-100",
    tag: "10 protocolos",
  },
  {
    href: "/fichas",
    title: "Fichas Clínicas",
    description: "100+ fichas interactivas organizadas por diagnóstico para rellenar en pantalla, guardar y/o imprimir en sesión.",
    emoji: "📝",
    accent: "#8b5cf6",
    bg: "from-violet-500/10 to-violet-600/5",
    border: "border-violet-100",
    tag: "100+ fichas",
  },
  {
    href: "/guia-clinica",
    title: "Guía de Decisión",
    description: "Árbol de decisión clínica por diagnóstico: qué técnica, en qué orden y por qué.",
    emoji: "🗺️",
    accent: "#f59e0b",
    bg: "from-amber-500/10 to-amber-600/5",
    border: "border-amber-100",
    tag: "6 diagnósticos",
  },
  {
    href: "/dialogo-socratico",
    title: "Diálogo Socrático",
    description: "90+ preguntas y frases terapéuticas organizadas por situación clínica. Con botón copiar.",
    emoji: "💬",
    accent: "#ec4899",
    bg: "from-pink-500/10 to-pink-600/5",
    border: "border-pink-100",
    tag: "90+ frases",
  },
  {
    href: "/casos",
    title: "Casos Clínicos",
    description: "20 casos resueltos con análisis sesión a sesión y reflexión interactiva antes de ver la solución.",
    emoji: "👤",
    accent: "#ef4444",
    bg: "from-red-500/10 to-red-600/5",
    border: "border-red-100",
    tag: "20 casos",
  },
  {
    href: "/evaluacion",
    title: "Evaluación",
    description: "PHQ-9, GAD-7, BDI-II, BAI, PCL-5 y más. Instrumentos validados y plantillas clínicas.",
    emoji: "📊",
    accent: "#0ea5e9",
    bg: "from-sky-500/10 to-sky-600/5",
    border: "border-sky-100",
    tag: "8 instrumentos",
  },
  {
    href: "/teleterapia",
    title: "Teleterapia",
    description: "Kit completo de adaptación online: técnicas, alianza terapéutica y manejo de crisis por pantalla.",
    emoji: "💻",
    accent: "#6366f1",
    bg: "from-indigo-500/10 to-indigo-600/5",
    border: "border-indigo-100",
    tag: "Guía completa",
  },
  {
    href: "/instrumentos",
    title: "Calculadora de Instrumentos",
    description: "PHQ-9, GAD-7 y PCL-5 con puntuación automática e historial de evolución sesión a sesión.",
    emoji: "📈",
    accent: "#6366f1",
    bg: "from-indigo-500/10 to-indigo-600/5",
    border: "border-indigo-100",
    tag: "Con historial",
  },
  {
    href: "/formulacion",
    title: "Formulación Cognitiva",
    description: "Construye el mapa cognitivo del paciente: creencias nucleares, supuestos, situación y conducta.",
    emoji: "🗂️",
    accent: "#0891b2",
    bg: "from-cyan-500/10 to-cyan-600/5",
    border: "border-cyan-100",
    tag: "Mapa visual",
  },
  {
    href: "/planificador",
    title: "Planificador de Sesión",
    description: "Estructura cada sesión: técnicas, fichas, distribución del tiempo y tarea para casa.",
    emoji: "🗓️",
    accent: "#7c3aed",
    bg: "from-violet-500/10 to-violet-600/5",
    border: "border-violet-100",
    tag: "Por sesión",
  },
  {
    href: "/plan-tratamiento",
    title: "Plan de Tratamiento",
    description: "Documentación clínica completa: diagnóstico, objetivos por fase, técnicas y criterios de alta.",
    emoji: "📁",
    accent: "#059669",
    bg: "from-emerald-500/10 to-emerald-600/5",
    border: "border-emerald-100",
    tag: "Autoguardado",
  },
  {
    href: "/consentimiento",
    title: "Consentimiento Informado",
    description: "Plantilla editable y lista para imprimir. Con RGPD, confidencialidad y firma.",
    emoji: "✅",
    accent: "#16a34a",
    bg: "from-green-500/10 to-green-600/5",
    border: "border-green-100",
    tag: "Editable",
  },
  {
    href: "/busqueda",
    title: "Búsqueda Global",
    description: "Encuentra cualquier ficha, caso o protocolo en segundos.",
    emoji: "🔍",
    accent: "#64748b",
    bg: "from-slate-500/10 to-slate-600/5",
    border: "border-slate-100",
    tag: "Todo el contenido",
  },
];

const stats = [
  { value: "10+", label: "Protocolos TCC", icon: "📋" },
  { value: "100+", label: "Fichas clínicas", icon: "📝" },
  { value: "20", label: "Casos clínicos", icon: "👤" },
  { value: "90+", label: "Frases socrática", icon: "💬" },
];

const quickCasos = [
  { id: "ansiedad-generalizada", name: "Elena, 34 · TAG", tag: "6 sesiones" },
  { id: "depresion-mayor", name: "Marcos, 28 · Depresión Mayor", tag: "8 sesiones" },
  { id: "trastorno-bipolar-ii", name: "Miguel, 38 · Bipolar II", tag: "14 sesiones" },
  { id: "dolor-cronico", name: "Rosa, 52 · Dolor Crónico", tag: "12 sesiones" },
];

const quickProtocolos = [
  { slug: "reestructuracion-cognitiva", name: "Reestructuración Cognitiva", tag: "Grado A" },
  { slug: "tcci-insomnio", name: "TCC-I para Insomnio", tag: "Grado A" },
  { slug: "protocolo-panico", name: "Protocolo Pánico (Clark)", tag: "Grado A" },
  { slug: "primera-sesion", name: "Protocolo Primera Sesión", tag: "Evaluación" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f4f6fb]">

      {/* ── Hero ── */}
      <div
        className="relative overflow-hidden dot-pattern"
        style={{ background: "linear-gradient(160deg, #0f2a50 0%, #0a1e3d 55%, #071529 100%)" }}
      >
        {/* Accent top line */}
        <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: "linear-gradient(90deg,#10b981 0%,#059669 40%,transparent 100%)" }} />

        {/* Glow blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 right-0 w-[600px] h-[400px] rounded-full opacity-60" style={{ background: "radial-gradient(ellipse,rgba(16,185,129,0.12) 0%,transparent 70%)" }} />
          <div className="absolute bottom-0 left-0 w-[400px] h-[300px] rounded-full opacity-40" style={{ background: "radial-gradient(ellipse,rgba(59,130,246,0.1) 0%,transparent 70%)" }} />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 pt-16 pb-12">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2.5 border text-[11px] font-semibold px-4 py-1.5 rounded-full mb-8 tracking-wide animate-fade-up"
              style={{ background: "rgba(16,185,129,0.1)", borderColor: "rgba(16,185,129,0.25)", color: "#6ee7b7" }}>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-dot" />
              Plataforma Clínica Profesional · Basada en Evidencia
            </div>

            <h1 className="animate-fade-up-2 mb-6">
              <span
                className="block font-bold text-white leading-[1.0]"
                style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(48px,8vw,76px)" }}
              >
                CBT <span style={{ color: "#34d399" }}>PRO+</span>
              </span>
              <span className="block text-sm md:text-base text-white/35 mt-4 tracking-[0.25em] uppercase font-medium">
                Sistema Clínico · Terapia Cognitivo-Conductual
              </span>
            </h1>

            <p className="text-white/50 text-base md:text-[17px] leading-relaxed mb-10 animate-fade-up-3">
              Todo lo que necesitas para estructurar, intervenir y medir el progreso en TCC — en un solo lugar.
            </p>

            <div className="flex flex-wrap gap-3 animate-fade-up-3">
              <Link
                href="/fichas"
                className="inline-flex items-center gap-2 text-white text-sm font-bold px-6 py-3 rounded-xl transition-all"
                style={{ background: "linear-gradient(135deg,#10b981,#059669)", boxShadow: "0 8px 24px rgba(16,185,129,0.35)" }}
              >
                Abrir Fichas Clínicas
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/guia-clinica"
                className="inline-flex items-center gap-2 text-white/80 text-sm font-semibold px-6 py-3 rounded-xl transition-all hover:text-white"
                style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}
              >
                Guía por Diagnóstico
              </Link>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          <div className="max-w-5xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={s.label} className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  {s.icon}
                </div>
                <div>
                  <div
                    className="font-bold leading-none"
                    style={{ fontFamily: "var(--font-playfair)", fontSize: "26px", color: i === 0 ? "#34d399" : "#6ee7b7" }}
                  >
                    {s.value}
                  </div>
                  <div className="text-[11px] text-white/30 mt-1 font-medium">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Modules grid ── */}
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="mb-7">
          <h2
            className="text-[28px] font-bold text-[#0b1d3a] leading-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Módulos clínicos
          </h2>
          <p className="text-sm text-slate-400 mt-1">14 herramientas especializadas en un solo lugar</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {modules.map((m) => (
            <Link
              key={m.href}
              href={m.href}
              className="group card-hover bg-white rounded-2xl p-5 flex flex-col"
              style={{
                boxShadow: "0 1px 3px rgba(11,29,58,0.06), 0 4px 12px rgba(11,29,58,0.07)",
                borderTop: `1px solid #e8eef6`,
                borderRight: `1px solid #e8eef6`,
                borderBottom: `1px solid #e8eef6`,
                borderLeft: `3px solid ${m.accent}`,
              }}
            >
              <div className="flex items-start justify-between mb-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-[20px] flex-shrink-0"
                  style={{ background: `${m.accent}15` }}
                >
                  {m.emoji}
                </div>
                <span
                  className="text-[10px] font-bold px-2.5 py-1 rounded-full mt-0.5"
                  style={{ background: `${m.accent}15`, color: m.accent }}
                >
                  {m.tag}
                </span>
              </div>
              <h3 className="font-bold text-[#0b1d3a] text-sm mb-1.5 group-hover:text-emerald-600 transition-colors leading-snug">
                {m.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed flex-1">{m.description}</p>
              <div className="mt-3 flex items-center gap-1 text-xs font-bold transition-colors" style={{ color: m.accent }}>
                Abrir
                <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* ── Quick access ── */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded-2xl p-6" style={{ boxShadow: "0 1px 3px rgba(11,29,58,0.06), 0 4px 12px rgba(11,29,58,0.07)", border: "1px solid #e8eef6", borderTop: "3px solid #ef4444" }}>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-bold text-[#0b1d3a] text-base" style={{ fontFamily: "var(--font-playfair)" }}>
                  Casos Clínicos
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">Reflexión interactiva sesión a sesión</p>
              </div>
              <Link href="/casos" className="text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors">
                Ver todos →
              </Link>
            </div>
            <div className="space-y-0.5">
              {quickCasos.map((c) => (
                <Link
                  key={c.id}
                  href={`/casos/${c.id}`}
                  className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                >
                  <span className="text-sm text-slate-600 group-hover:text-[#0b1d3a] font-medium">{c.name}</span>
                  <span className="text-[11px] bg-red-50 text-red-500 px-2.5 py-1 rounded-full font-bold">{c.tag}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6" style={{ boxShadow: "0 1px 3px rgba(11,29,58,0.06), 0 4px 12px rgba(11,29,58,0.07)", border: "1px solid #e8eef6", borderTop: "3px solid #10b981" }}>
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-bold text-[#0b1d3a] text-base" style={{ fontFamily: "var(--font-playfair)" }}>
                  Protocolos Destacados
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">Con evidencia científica Grado A</p>
              </div>
              <Link href="/protocolos" className="text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors">
                Ver todos →
              </Link>
            </div>
            <div className="space-y-0.5">
              {quickProtocolos.map((p) => (
                <Link
                  key={p.slug}
                  href={`/protocolos/${p.slug}`}
                  className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-slate-50 transition-colors group"
                >
                  <span className="text-sm text-slate-600 group-hover:text-[#0b1d3a] font-medium">{p.name}</span>
                  <span className="text-[11px] bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full font-bold">{p.tag}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ── Banner ── */}
        <div
          className="mt-6 rounded-2xl p-7 flex flex-col md:flex-row md:items-center gap-6 relative overflow-hidden dot-pattern"
          style={{ background: "linear-gradient(135deg, #0f2a50 0%, #071529 100%)" }}
        >
          <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full opacity-50 pointer-events-none" style={{ background: "radial-gradient(circle,rgba(16,185,129,0.2) 0%,transparent 70%)" }} />
          <div className="flex-1 relative">
            <div className="text-[10px] font-bold text-emerald-400 uppercase tracking-[0.25em] mb-2">
              Temporizador de Sesión
            </div>
            <h3 className="font-bold text-white text-[22px] mb-2 leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
              Estructura cada sesión en fases
            </h3>
            <p className="text-white/40 text-sm leading-relaxed">
              Usa el botón flotante ⏱ en cualquier página para activar el temporizador con fases automáticas y alertas.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0 relative">
            <Link
              href="/dialogo-socratico"
              className="text-white/70 text-sm font-semibold px-4 py-2.5 rounded-xl transition-all hover:text-white"
              style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.12)" }}
            >
              Diálogo Socrático
            </Link>
            <Link
              href="/fichas"
              className="text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-all"
              style={{ background: "linear-gradient(135deg,#10b981,#059669)", boxShadow: "0 4px 16px rgba(16,185,129,0.3)" }}
            >
              Fichas →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
