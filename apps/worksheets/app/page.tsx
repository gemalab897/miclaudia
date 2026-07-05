import Link from "next/link";
import { categories, worksheets } from "@/app/data/worksheets";

export default function HomePage() {
  const totalWorksheets = worksheets.length;
  const totalCategories = categories.length;

  return (
    <div className="min-h-screen bg-slate-50">

      {/* ── Hero ── */}
      <div className="relative overflow-hidden" style={{ background: "linear-gradient(150deg,#071a16 0%,#0b211c 55%,#040e0c 100%)" }}>
        {/* Decorative glows */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div style={{ position: "absolute", top: "-80px", right: "-40px", width: "600px", height: "500px", background: "radial-gradient(ellipse,rgba(13,148,136,0.18) 0%,transparent 70%)" }} />
          <div style={{ position: "absolute", bottom: "-60px", left: "-60px", width: "400px", height: "350px", background: "radial-gradient(ellipse,rgba(20,184,166,0.08) 0%,transparent 70%)" }} />
          <div style={{ position: "absolute", top: "40%", left: "50%", width: "800px", height: "300px", transform: "translate(-50%,-50%)", background: "radial-gradient(ellipse,rgba(15,118,110,0.06) 0%,transparent 70%)" }} />
        </div>
        {/* Top accent line */}
        <div style={{ height: "3px", background: "linear-gradient(90deg,#0f766e,#14b8a6 50%,transparent)" }} />

        <div className="relative max-w-5xl mx-auto px-6 pt-16 pb-14">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase px-4 py-1.5 rounded-full mb-8"
            style={{ background: "rgba(20,184,166,0.12)", border: "1px solid rgba(20,184,166,0.25)", color: "#5eead4" }}>
            <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
            Basado en evidencia · Interactivo · Imprimible
          </div>

          <div className="max-w-2xl">
            <h1 className="font-black text-white leading-[1.1] mb-5" style={{ fontSize: "clamp(38px,6.5vw,66px)" }}>
              Fichas de{" "}
              <span style={{ color: "#14b8a6" }}>Terapia</span>
              <br />
              <span className="text-white/30 font-semibold" style={{ fontSize: "clamp(14px,2vw,22px)", letterSpacing: "0.22em" }}>
                KIT PROFESIONAL PARA PSICÓLOGOS
              </span>
            </h1>
            <p className="text-[16px] leading-relaxed mb-10 max-w-xl" style={{ color: "rgba(255,255,255,0.45)" }}>
              {totalWorksheets}+ fichas clínicas en {totalCategories} áreas. Rellena en sesión, entrega impresa o asigna como tarea. Autoguardado incluido.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/worksheets"
                className="inline-flex items-center gap-2 text-white text-sm font-bold px-7 py-3.5 rounded-xl transition-all hover:opacity-90 active:scale-95"
                style={{ background: "linear-gradient(135deg,#0f766e,#0d9488)", boxShadow: "0 8px 28px rgba(15,118,110,0.45)" }}>
                Ver todas las fichas
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative" style={{ borderTop: "1px solid rgba(20,184,166,0.1)" }}>
          <div className="max-w-5xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: `${totalWorksheets}+`, label: "Fichas clínicas" },
              { value: `${totalCategories}`, label: "Áreas clínicas" },
              { value: "TCC · TCD · ACT", label: "Enfoques terapéuticos" },
              { value: "Gratis", label: "Sin registro" },
            ].map((s) => (
              <div key={s.label} className="text-center md:text-left">
                <div className="font-extrabold text-[22px]" style={{ color: "#14b8a6" }}>{s.value}</div>
                <div className="text-[10px] uppercase tracking-widest font-semibold mt-0.5" style={{ color: "rgba(94,234,212,0.35)" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Categorías ── */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="flex items-end justify-between mb-7">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal-600 mb-1">Áreas clínicas</p>
            <h2 className="text-[24px] font-extrabold text-slate-900 leading-tight">Elige tu área de trabajo</h2>
          </div>
          <Link href="/worksheets" className="text-sm font-bold text-teal-600 hover:text-teal-700 transition-colors flex items-center gap-1">
            Ver todas
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {categories.map((cat) => {
            const count = worksheets.filter((w) => w.category === cat.id).length;
            return (
              <Link
                key={cat.id}
                href={`/worksheets/${cat.id}`}
                className="group bg-white rounded-2xl p-5 flex gap-4 items-start transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  boxShadow: "0 1px 3px rgba(15,23,42,0.05), 0 4px 16px rgba(15,23,42,0.06)",
                  border: `1px solid rgba(0,0,0,0.06)`,
                  borderLeft: `4px solid ${cat.color}`,
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0 transition-transform group-hover:scale-110"
                  style={{ background: `${cat.color}18` }}
                >
                  {cat.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h3 className="font-bold text-slate-900 text-[15px] leading-snug group-hover:text-teal-700 transition-colors">
                      {cat.title}
                    </h3>
                    <span className="flex-shrink-0 text-[10px] font-bold px-2.5 py-0.5 rounded-full"
                      style={{ background: `${cat.color}15`, color: cat.color }}>
                      {count} fichas
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">{cat.description}</p>
                  <div className="mt-2.5 flex items-center gap-1 text-xs font-bold transition-all"
                    style={{ color: cat.color }}>
                    Explorar fichas
                    <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Cómo usar */}
        <div className="mt-10 rounded-2xl p-7 relative overflow-hidden"
          style={{ background: "linear-gradient(135deg,#0c1a17 0%,#0b2218 100%)" }}>
          <div className="absolute -top-12 -right-12 w-56 h-56 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle,rgba(15,118,110,0.25) 0%,transparent 70%)" }} />
          <div className="relative">
            <p className="text-[10px] font-bold uppercase tracking-[0.22em] mb-1" style={{ color: "#14b8a6" }}>Flujo de trabajo</p>
            <h3 className="font-extrabold text-white text-[19px] mb-5 leading-tight">
              Completa → Imprime → Entrega al paciente
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {[
                { n: "1", icon: "✏️", t: "Rellena en sesión", d: "Completa los campos directamente en pantalla. Todo se guarda automáticamente en el navegador." },
                { n: "2", icon: "🖨️", t: "Imprime para el paciente", d: "Diseño limpio optimizado para impresión. Sin menús ni distracciones." },
                { n: "3", icon: "📤", t: "Asigna entre sesiones", d: "Comparte la URL para que tu paciente complete la ficha desde casa." },
              ].map((s) => (
                <div key={s.n} className="flex gap-3 items-start">
                  <div className="w-8 h-8 rounded-xl flex items-center justify-center text-sm font-black flex-shrink-0"
                    style={{ background: "rgba(20,184,166,0.15)", color: "#14b8a6" }}>
                    {s.n}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white mb-0.5">{s.icon} {s.t}</div>
                    <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.38)" }}>{s.d}</p>
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
