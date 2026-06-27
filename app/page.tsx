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
    <div className="min-h-screen">

      {/* ── Hero ── */}
      <div className="relative overflow-hidden bg-[#0b1d3a] dot-pattern">
        {/* Glow blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-emerald-500/10 blur-[100px]" />
          <div className="absolute top-10 -left-24 w-80 h-80 rounded-full bg-blue-500/8 blur-[80px]" />
          <div className="absolute bottom-0 left-1/2 w-72 h-48 rounded-full bg-indigo-500/6 blur-[60px]" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 pt-16 pb-12">
          {/* Badge */}
          <div className="inline-flex items-center gap-2.5 bg-emerald-400/10 border border-emerald-400/20 text-emerald-300 text-[11px] font-semibold px-4 py-1.5 rounded-full mb-8 tracking-wide animate-fade-up">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 pulse-dot" />
            Plataforma Clínica Profesional · Basada en Evidencia
          </div>

          <h1 className="animate-fade-up-2 mb-5">
            <span
              className="block text-[52px] md:text-[68px] font-bold text-white leading-[1.05] tracking-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              CBT <span className="text-emerald-400">PRO+</span>
            </span>
            <span className="block text-base md:text-lg text-white/38 mt-3 tracking-[0.22em] uppercase font-medium">
              Sistema Clínico de Terapia Cognitivo-Conductual
            </span>
          </h1>

          <p className="text-white/55 text-base md:text-[17px] max-w-xl leading-relaxed mb-10 animate-fade-up-3">
            Todo lo que necesitas para estructurar, intervenir y medir el progreso en TCC — en un solo lugar y listo para usar en sesión.
          </p>

          <div className="flex flex-wrap gap-3 animate-fade-up-3">
            <Link
              href="/fichas"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/40 hover:-translate-y-0.5"
            >
              Abrir Fichas Clínicas
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/guia-clinica"
              className="inline-flex items-center gap-2 bg-white/6 hover:bg-white/12 border border-white/12 hover:border-white/20 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all"
            >
              Guía por Diagnóstico
            </Link>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative border-t border-white/[0.07]">
          <div className="max-w-5xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/8 flex items-center justify-center text-lg flex-shrink-0">
                  {s.icon}
                </div>
                <div>
                  <div className="text-[22px] font-bold text-emerald-400 leading-none" style={{ fontFamily: "var(--font-playfair)" }}>
                    {s.value}
                  </div>
                  <div className="text-[11px] text-white/35 mt-0.5 tracking-wide">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Modules grid ── */}
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="flex items-end justify-between mb-6">
          <div>
            <h2
              className="text-2xl font-bold text-[#0b1d3a] leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Módulos clínicos
            </h2>
            <p className="text-sm text-slate-400 mt-1">Acceso directo a todas las herramientas</p>
          </div>
          <div className="gradient-divider hidden md:block w-48 mb-2" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {modules.map((m) => (
            <Link
              key={m.href}
              href={m.href}
              className={`group card-hover bg-gradient-to-br ${m.bg} border ${m.border} rounded-2xl p-5 flex flex-col bg-white`}
            >
              <div className="flex items-start justify-between mb-3">
                <span className="text-2xl">{m.emoji}</span>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white/80 text-slate-500 border border-slate-200/60">
                  {m.tag}
                </span>
              </div>
              <h3
                className="font-semibold text-[#0b1d3a] text-sm mb-1.5 group-hover:text-emerald-600 transition-colors leading-snug"
              >
                {m.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed flex-1">{m.description}</p>
              <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-slate-400 group-hover:text-emerald-500 transition-colors">
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
          {/* Casos */}
          <div className="bg-white rounded-2xl border border-[#e4eaf4] shadow-sm p-5">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3
                  className="font-bold text-[#0b1d3a] text-base"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Casos Clínicos
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">Reflexión interactiva sesión a sesión</p>
              </div>
              <Link href="/casos" className="text-xs text-emerald-500 font-semibold hover:text-emerald-600 transition-colors">
                Ver todos →
              </Link>
            </div>
            <div className="space-y-0.5">
              {quickCasos.map((c) => (
                <Link
                  key={c.id}
                  href={`/casos/${c.id}`}
                  className="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-slate-50 transition-colors group"
                >
                  <span className="text-sm text-slate-600 group-hover:text-[#0b1d3a] font-medium">{c.name}</span>
                  <span className="text-[11px] bg-red-50 text-red-500 px-2.5 py-0.5 rounded-full font-semibold">{c.tag}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Protocolos */}
          <div className="bg-white rounded-2xl border border-[#e4eaf4] shadow-sm p-5">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3
                  className="font-bold text-[#0b1d3a] text-base"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  Protocolos Destacados
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">Con evidencia científica Grado A</p>
              </div>
              <Link href="/protocolos" className="text-xs text-emerald-500 font-semibold hover:text-emerald-600 transition-colors">
                Ver todos →
              </Link>
            </div>
            <div className="space-y-0.5">
              {quickProtocolos.map((p) => (
                <Link
                  key={p.slug}
                  href={`/protocolos/${p.slug}`}
                  className="flex items-center justify-between px-3 py-2 rounded-xl hover:bg-slate-50 transition-colors group"
                >
                  <span className="text-sm text-slate-600 group-hover:text-[#0b1d3a] font-medium">{p.name}</span>
                  <span className="text-[11px] bg-emerald-50 text-emerald-600 px-2.5 py-0.5 rounded-full font-semibold">{p.tag}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* ── Banner ── */}
        <div className="mt-6 bg-[#0b1d3a] dot-pattern rounded-2xl p-7 flex flex-col md:flex-row md:items-center gap-5 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 w-48 h-48 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />
          <div className="flex-1 relative">
            <div className="text-[11px] font-semibold text-emerald-400 uppercase tracking-[0.2em] mb-2">
              Temporizador de Sesión
            </div>
            <h3
              className="font-bold text-white text-xl mb-2 leading-tight"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Estructura cada sesión en fases
            </h3>
            <p className="text-white/45 text-sm leading-relaxed">
              Usa el botón flotante ⏱ en cualquier página para activar el temporizador con fases automáticas y alertas.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0 relative">
            <Link
              href="/dialogo-socratico"
              className="bg-white/8 hover:bg-white/14 border border-white/12 text-white text-sm font-medium px-4 py-2.5 rounded-xl transition-all"
            >
              Diálogo Socrático
            </Link>
            <Link
              href="/fichas"
              className="bg-emerald-500 hover:bg-emerald-400 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-all shadow-lg shadow-emerald-500/20"
            >
              Fichas →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
