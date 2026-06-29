import Link from "next/link";
import { categories, worksheets } from "@/app/data/worksheets";

const colorMap: Record<string, { bg: string; border: string; badge: string }> = {
  "#3b82f6": { bg: "rgba(59,130,246,0.08)", border: "rgba(59,130,246,0.2)", badge: "rgba(59,130,246,0.12)" },
  "#8b5cf6": { bg: "rgba(139,92,246,0.08)", border: "rgba(139,92,246,0.2)", badge: "rgba(139,92,246,0.12)" },
  "#f59e0b": { bg: "rgba(245,158,11,0.08)", border: "rgba(245,158,11,0.2)", badge: "rgba(245,158,11,0.12)" },
  "#06b6d4": { bg: "rgba(6,182,212,0.08)",  border: "rgba(6,182,212,0.2)",  badge: "rgba(6,182,212,0.12)"  },
  "#ec4899": { bg: "rgba(236,72,153,0.08)", border: "rgba(236,72,153,0.2)", badge: "rgba(236,72,153,0.12)" },
  "#10b981": { bg: "rgba(16,185,129,0.08)", border: "rgba(16,185,129,0.2)", badge: "rgba(16,185,129,0.12)" },
  "#f97316": { bg: "rgba(249,115,22,0.08)", border: "rgba(249,115,22,0.2)", badge: "rgba(249,115,22,0.12)" },
  "#64748b": { bg: "rgba(100,116,139,0.08)",border: "rgba(100,116,139,0.2)",badge: "rgba(100,116,139,0.12)"},
};

export default function HomePage() {
  return (
    <div className="min-h-screen">

      {/* ── Hero ── */}
      <div
        className="relative overflow-hidden"
        style={{ background: "linear-gradient(150deg, #0c1a17 0%, #0a1f1b 55%, #061410 100%)" }}
      >
        <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: "linear-gradient(90deg,#0f766e 0%,#14b8a6 50%,transparent 100%)" }} />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 right-0 w-[600px] h-[400px]" style={{ background: "radial-gradient(ellipse,rgba(15,118,110,0.2) 0%,transparent 70%)" }} />
          <div className="absolute bottom-0 -left-12 w-[400px] h-[300px]" style={{ background: "radial-gradient(ellipse,rgba(20,184,166,0.07) 0%,transparent 70%)" }} />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 pt-16 pb-12">
          <div className="max-w-2xl">
            <div
              className="inline-flex items-center gap-2.5 text-[11px] font-semibold px-4 py-1.5 rounded-full mb-8 tracking-wide animate-fade-up"
              style={{ background: "rgba(15,118,110,0.2)", border: "1px solid rgba(20,184,166,0.3)", color: "#5eead4" }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#14b8a6" }} />
              Basado en evidencia · Listo para imprimir · Rellenable online
            </div>
            <h1 className="animate-fade-up-2 mb-6">
              <span
                className="block font-extrabold text-white leading-tight"
                style={{ fontSize: "clamp(42px,7vw,68px)" }}
              >
                Fichas de{" "}
                <span style={{ color: "#14b8a6" }}>Terapia</span>
              </span>
              <span className="block text-sm mt-3 tracking-[0.22em] uppercase font-medium" style={{ color: "rgba(94,234,212,0.4)" }}>
                Kit Profesional para Psicólogos
              </span>
            </h1>
            <p className="text-[17px] leading-relaxed mb-10 animate-fade-up-3" style={{ color: "rgba(255,255,255,0.48)" }}>
              {worksheets.length}+ fichas interactivas e imprimibles en 8 áreas clínicas. Completa en sesión, entrega a tu paciente o asigna como tarea entre sesiones.
            </p>
            <div className="flex flex-wrap gap-3 animate-fade-up-3">
              <Link
                href="/worksheets"
                className="inline-flex items-center gap-2 text-white text-sm font-bold px-6 py-3 rounded-xl transition-all hover:opacity-90"
                style={{ background: "linear-gradient(135deg,#0f766e,#0d9488)", boxShadow: "0 8px 24px rgba(15,118,110,0.4)" }}
              >
                Ver todas las fichas
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Barra de estadísticas */}
        <div className="relative" style={{ borderTop: "1px solid rgba(20,184,166,0.08)" }}>
          <div className="max-w-5xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: `${worksheets.length}+`, label: "Fichas clínicas" },
              { value: `${categories.length}`, label: "Áreas clínicas" },
              { value: "100%", label: "Interactivas e imprimibles" },
              { value: "Gratis", label: "Para tus pacientes" },
            ].map((s) => (
              <div key={s.label} className="text-center md:text-left">
                <div className="font-extrabold text-2xl" style={{ color: "#14b8a6" }}>{s.value}</div>
                <div className="text-[11px] mt-1 font-medium" style={{ color: "rgba(94,234,212,0.4)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Categorías ── */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h2 className="text-[26px] font-extrabold text-slate-900 leading-tight">
            Áreas clínicas
          </h2>
          <p className="text-sm text-slate-400 mt-1">Selecciona una categoría para explorar las fichas</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
          {categories.map((cat) => {
            const colors = colorMap[cat.color] ?? { bg: "rgba(100,116,139,0.08)", border: "rgba(100,116,139,0.2)", badge: "rgba(100,116,139,0.12)" };
            const count = worksheets.filter((w) => w.category === cat.id).length;
            return (
              <Link
                key={cat.id}
                href={`/worksheets/${cat.id}`}
                className="group card-hover bg-white rounded-2xl p-6 flex gap-5 items-start"
                style={{
                  boxShadow: "0 1px 3px rgba(15,23,42,0.06), 0 4px 12px rgba(15,23,42,0.07)",
                  border: `1px solid ${colors.border}`,
                  borderLeft: `4px solid ${cat.color}`,
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                  style={{ background: colors.bg }}
                >
                  {cat.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-bold text-slate-900 text-[15px] leading-snug group-hover:text-teal-700 transition-colors">
                      {cat.title}
                    </h3>
                    <span
                      className="flex-shrink-0 text-[10px] font-bold px-2 py-0.5 rounded-full"
                      style={{ background: colors.badge, color: cat.color }}
                    >
                      {count} fichas
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">{cat.description}</p>
                  <div className="mt-3 flex items-center gap-1 text-xs font-bold text-teal-600 group-hover:gap-2 transition-all">
                    Abrir
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Cómo usar */}
        <div
          className="mt-10 rounded-2xl p-7 relative overflow-hidden"
          style={{ background: "linear-gradient(135deg, #0c1a17 0%, #0a1f1b 100%)" }}
        >
          <div className="absolute -top-8 -right-8 w-48 h-48 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,rgba(15,118,110,0.3) 0%,transparent 70%)" }} />
          <div className="relative">
            <div className="text-[10px] font-bold uppercase tracking-[0.25em] mb-2" style={{ color: "#14b8a6" }}>
              Cómo usar
            </div>
            <h3 className="font-bold text-white text-[20px] mb-3 leading-tight">
              Completa en sesión → Imprime → Entrega al paciente
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { n: "1", t: "Completa en pantalla", d: "Rellena los campos directamente en el navegador durante o antes de la sesión. Se guarda automáticamente en este dispositivo." },
                { n: "2", t: "Imprime para el paciente", d: "Haz clic en el botón Imprimir. Las fichas tienen estilos optimizados para impresión: sin menús, diseño limpio." },
                { n: "3", t: "Asigna como tarea", d: "Comparte la URL de la ficha con tu paciente para que la complete entre sesiones." },
              ].map((s) => (
                <div key={s.n} className="flex gap-3">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
                    style={{ background: "rgba(20,184,166,0.15)", color: "#14b8a6" }}
                  >
                    {s.n}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white mb-1">{s.t}</div>
                    <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
