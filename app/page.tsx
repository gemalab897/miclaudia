import Link from "next/link";

const modules = [
  {
    href: "/modelo-cognitivo",
    title: "Modelo Cognitivo",
    description: "Ciclo pensamiento-emoción-conducta, distorsiones cognitivas y tríada de Beck.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    color: "from-blue-600 to-blue-800",
    stats: "12 conceptos",
  },
  {
    href: "/protocolos",
    title: "Protocolos Clínicos",
    description: "6 protocolos TCC completos con pasos detallados, técnicas y notas clínicas.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    color: "from-emerald-500 to-emerald-700",
    stats: "6 protocolos",
  },
  {
    href: "/fichas",
    title: "Fichas Clínicas",
    description: "Más de 10 fichas interactivas para rellenar en pantalla o imprimir en sesión.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    color: "from-purple-600 to-purple-800",
    stats: "10 fichas",
  },
  {
    href: "/guia-clinica",
    title: "Guía de Decisión",
    description: "Protocolo por diagnóstico: ansiedad, depresión, TOC, fobias, PTSD y fobia social.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
      </svg>
    ),
    color: "from-amber-500 to-amber-700",
    stats: "6 diagnósticos",
  },
  {
    href: "/casos",
    title: "Casos Clínicos",
    description: "4 casos resueltos con formulación, objetivos y seguimiento sesión a sesión.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    color: "from-rose-500 to-rose-700",
    stats: "4 casos",
  },
  {
    href: "/evaluacion",
    title: "Evaluación",
    description: "Instrumentos de screening validados y escalas de seguimiento terapéutico.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    color: "from-teal-500 to-teal-700",
    stats: "PHQ-9, GAD-7, más",
  },
  {
    href: "/teleterapia",
    title: "Teleterapia",
    description: "Kit adaptado para sesiones online. Guías y ajustes para trabajo remoto.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.069A1 1 0 0121 8.845v6.31a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    color: "from-indigo-500 to-indigo-700",
    stats: "Guía completa",
  },
];

const stats = [
  { value: "6", label: "Protocolos TCC" },
  { value: "10+", label: "Fichas interactivas" },
  { value: "6", label: "Guías diagnósticas" },
  { value: "4", label: "Casos clínicos" },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-[#1e3a5f] via-[#1e4a7f] to-[#10b981] text-white">
        <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-sm mb-6">
              <span className="w-2 h-2 bg-[#10b981] rounded-full"></span>
              Herramienta Clínica Profesional — TCC Basada en Evidencia
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              CBT PRO+
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 font-light mb-6 leading-relaxed">
              La guía de Terapia Cognitivo-Conductual más completa para psicólogos clínicos
            </p>
            <p className="text-base text-blue-200 mb-8 leading-relaxed max-w-2xl">
              Accede a protocolos clínicos detallados, fichas interactivas, guías de decisión por diagnóstico y casos clínicos resueltos. Todo el contenido basado en evidencia científica de nivel A.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/protocolos"
                className="inline-flex items-center gap-2 bg-[#10b981] hover:bg-emerald-400 text-white font-semibold px-6 py-3 rounded-xl transition-colors shadow-lg"
              >
                Ver Protocolos
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/guia-clinica"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
              >
                Guía por Diagnóstico
              </Link>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="bg-[#1e3a5f]/80 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-6 py-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-[#10b981]">{stat.value}</div>
                  <div className="text-xs md:text-sm text-blue-200">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modules Grid */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-[#1e3a5f] mb-2">Módulos Clínicos</h2>
          <p className="text-gray-500">Acceso rápido a todas las herramientas de la plataforma</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {modules.map((module) => (
            <Link
              key={module.href}
              href={module.href}
              className="group bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-md hover:border-slate-200 transition-all duration-200 flex flex-col"
            >
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${module.color} text-white flex items-center justify-center mb-4 group-hover:scale-105 transition-transform`}>
                {module.icon}
              </div>
              <h3 className="font-semibold text-[#1e3a5f] mb-2 group-hover:text-[#10b981] transition-colors">
                {module.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-1">{module.description}</p>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-xs font-medium text-[#10b981] bg-emerald-50 px-2 py-1 rounded-full">
                  {module.stats}
                </span>
                <svg
                  className="w-4 h-4 text-gray-300 group-hover:text-[#10b981] transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        {/* Quick Access Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-[#1e3a5f]">Protocolos Destacados</h3>
              <Link href="/protocolos" className="text-sm text-[#10b981] hover:underline">
                Ver todos
              </Link>
            </div>
            <div className="space-y-3">
              {[
                { slug: "reestructuracion-cognitiva", name: "Reestructuración Cognitiva", tag: "Nivel A" },
                { slug: "activacion-conductual", name: "Activación Conductual", tag: "Depresión" },
                { slug: "exposicion-graduada", name: "Exposición Graduada", tag: "Ansiedad" },
                { slug: "primera-sesion", name: "Protocolo Primera Sesión", tag: "Evaluación" },
              ].map((p) => (
                <Link
                  key={p.slug}
                  href={`/protocolos/${p.slug}`}
                  className="flex items-center justify-between py-2 hover:bg-slate-50 rounded-lg px-2 transition-colors group"
                >
                  <span className="text-sm text-gray-700 group-hover:text-[#1e3a5f]">{p.name}</span>
                  <span className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full">{p.tag}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-[#1e3a5f]">Casos Clínicos</h3>
              <Link href="/casos" className="text-sm text-[#10b981] hover:underline">
                Ver todos
              </Link>
            </div>
            <div className="space-y-3">
              {[
                { id: "ansiedad-generalizada", name: "Elena, 34 años — TAG", sessions: "6 sesiones" },
                { id: "depresion-mayor", name: "Marcos, 28 años — Depresión Mayor", sessions: "8 sesiones" },
                { id: "toc", name: "Laura, 22 años — TOC", sessions: "10 sesiones" },
                { id: "fobia-social", name: "Pablo, 19 años — Fobia Social", sessions: "7 sesiones" },
              ].map((c) => (
                <Link
                  key={c.id}
                  href={`/casos/${c.id}`}
                  className="flex items-center justify-between py-2 hover:bg-slate-50 rounded-lg px-2 transition-colors group"
                >
                  <span className="text-sm text-gray-700 group-hover:text-[#1e3a5f]">{c.name}</span>
                  <span className="text-xs bg-rose-50 text-rose-600 px-2 py-0.5 rounded-full">{c.sessions}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Info Banner */}
        <div className="mt-8 bg-gradient-to-r from-[#1e3a5f] to-[#1e4a7f] rounded-2xl p-6 text-white">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-1">CBT PRO+ — Herramienta Clínica Profesional</h3>
              <p className="text-blue-200 text-sm leading-relaxed">
                Todo el contenido está basado en protocolos con evidencia científica de nivel A y guías clínicas internacionales (NICE, APA). Las fichas son interactivas y print-friendly para uso en sesión.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/fichas"
                className="flex-shrink-0 bg-[#10b981] hover:bg-emerald-400 text-white font-medium px-4 py-2 rounded-xl text-sm transition-colors"
              >
                Usar Fichas
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
