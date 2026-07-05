import Link from "next/link";
import { categories, worksheets } from "@/app/data/worksheets";

const ICONS = ["🧠", "⚖️", "🛡️", "🌊", "💑", "🌱", "🔮", "📋"];

export default function HomePage() {
  const total = worksheets.length;
  const totalCats = categories.length;

  return (
    <div className="min-h-screen" style={{ background: "#f1f5f9" }}>

      {/* ════════ HERO ════════ */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(160deg,#061210 0%,#0a1f1a 40%,#0d2820 70%,#061712 100%)",
          minHeight: "92vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {/* Animated glow blobs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div style={{
            position: "absolute", top: "-100px", right: "-80px",
            width: "700px", height: "600px", borderRadius: "50%",
            background: "radial-gradient(ellipse,rgba(20,184,166,0.22) 0%,transparent 65%)",
            animation: "float 6s ease-in-out infinite",
          }} />
          <div style={{
            position: "absolute", bottom: "-120px", left: "-100px",
            width: "500px", height: "400px", borderRadius: "50%",
            background: "radial-gradient(ellipse,rgba(13,148,136,0.12) 0%,transparent 65%)",
            animation: "float 8s ease-in-out infinite reverse",
          }} />
          <div style={{
            position: "absolute", top: "35%", left: "30%",
            width: "600px", height: "400px",
            background: "radial-gradient(ellipse,rgba(20,184,166,0.05) 0%,transparent 70%)",
          }} />
          {/* Grid pattern overlay */}
          <div style={{
            position: "absolute", inset: 0,
            backgroundImage: "linear-gradient(rgba(20,184,166,0.03) 1px,transparent 1px), linear-gradient(90deg,rgba(20,184,166,0.03) 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }} />
        </div>

        {/* Top accent */}
        <div style={{ height: "3px", background: "linear-gradient(90deg,transparent,#14b8a6 30%,#0f766e 70%,transparent)", position: "absolute", top: 0, left: 0, right: 0 }} />

        <div className="relative max-w-5xl mx-auto px-6 py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left: text */}
            <div>
              {/* Badge */}
              <div className="animate-fade-up inline-flex items-center gap-2.5 text-[11px] font-bold tracking-[0.15em] uppercase px-4 py-2 rounded-full mb-8"
                style={{ background: "rgba(20,184,166,0.1)", border: "1px solid rgba(20,184,166,0.3)", color: "#5eead4" }}>
                <span className="pulse-dot w-2 h-2 rounded-full bg-teal-400 flex-shrink-0" />
                Basado en evidencia clínica
              </div>

              <h1 className="animate-fade-up-2 font-black text-white leading-[1.05] mb-6"
                style={{ fontSize: "clamp(40px,5.5vw,68px)" }}>
                Fichas de<br />
                <span style={{
                  background: "linear-gradient(135deg,#14b8a6 0%,#34d399 100%)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                }}>
                  Terapia
                </span>
              </h1>

              <p className="animate-fade-up-3 text-[16px] leading-relaxed mb-10 max-w-md"
                style={{ color: "rgba(255,255,255,0.5)" }}>
                {total}+ fichas interactivas e imprimibles en {totalCats} áreas clínicas.
                Autoguardado. Listas para entregar al paciente.
              </p>

              <div className="animate-fade-up-4 flex flex-wrap gap-3">
                <Link href="/worksheets"
                  className="group inline-flex items-center gap-2 text-white text-[15px] font-bold px-7 py-3.5 rounded-2xl transition-all hover:scale-105 active:scale-95"
                  style={{ background: "linear-gradient(135deg,#0f766e,#14b8a6)", boxShadow: "0 8px 32px rgba(20,184,166,0.4)" }}>
                  Explorar fichas
                  <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>

              {/* Mini stats */}
              <div className="animate-fade-up-4 flex flex-wrap gap-6 mt-10 pt-10 border-t border-white/10">
                {[
                  { v: `${total}+`, l: "Fichas" },
                  { v: `${totalCats}`, l: "Áreas" },
                  { v: "TCC · TCD", l: "Enfoques" },
                  { v: "Gratis", l: "Para siempre" },
                ].map((s) => (
                  <div key={s.l}>
                    <div className="text-[22px] font-black" style={{ color: "#14b8a6" }}>{s.v}</div>
                    <div className="text-[10px] font-semibold uppercase tracking-widest mt-0.5" style={{ color: "rgba(94,234,212,0.35)" }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: category cards preview */}
            <div className="hidden lg:grid grid-cols-2 gap-3 animate-fade-in">
              {categories.slice(0, 6).map((cat, i) => (
                <Link key={cat.id} href={`/worksheets/${cat.id}`}
                  className="glass-card rounded-2xl p-4 flex items-start gap-3 transition-all hover:scale-105 hover:bg-white/90"
                  style={{
                    animationDelay: `${i * 0.06}s`,
                    background: `linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04))`,
                    border: `1px solid ${cat.color}30`,
                    backdropFilter: "blur(12px)",
                  }}>
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center text-lg flex-shrink-0"
                    style={{ background: `${cat.color}25` }}>
                    {cat.icon}
                  </div>
                  <div className="min-w-0">
                    <div className="text-[12px] font-bold text-white leading-tight truncate">{cat.title}</div>
                    <div className="text-[10px] mt-0.5 font-medium" style={{ color: `${cat.color}cc` }}>
                      {worksheets.filter((w) => w.category === cat.id).length} fichas
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom wave */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "60px", overflow: "hidden" }}>
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#f1f5f9" />
          </svg>
        </div>
      </section>

      {/* ════════ CATEGORÍAS ════════ */}
      <section className="max-w-5xl mx-auto px-6 py-14">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.22em] text-teal-600 mb-1">Áreas clínicas</p>
            <h2 className="text-[26px] font-extrabold text-slate-900">Elige dónde trabajar</h2>
          </div>
          <Link href="/worksheets"
            className="text-sm font-bold text-teal-600 hover:text-teal-700 transition-colors flex items-center gap-1.5 group">
            Ver todas las fichas
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((cat, i) => {
            const count = worksheets.filter((w) => w.category === cat.id).length;
            return (
              <Link key={cat.id} href={`/worksheets/${cat.id}`}
                className="cat-card group bg-white rounded-2xl overflow-hidden flex flex-col"
                style={{
                  boxShadow: "0 2px 8px rgba(15,23,42,0.06), 0 1px 2px rgba(15,23,42,0.04)",
                  border: "1px solid rgba(0,0,0,0.06)",
                }}>
                {/* Color top band */}
                <div className="h-1.5 w-full" style={{ background: `linear-gradient(90deg, ${cat.color}, ${cat.color}88)` }} />

                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <div className="w-11 h-11 rounded-xl flex items-center justify-center text-[22px]"
                      style={{ background: `${cat.color}15` }}>
                      {cat.icon}
                    </div>
                    <span className="text-[10px] font-black px-2.5 py-1 rounded-full"
                      style={{ background: `${cat.color}12`, color: cat.color }}>
                      {count} fichas
                    </span>
                  </div>

                  <h3 className="font-extrabold text-slate-900 text-[15px] leading-tight mb-2 group-hover:text-teal-700 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-[12px] text-slate-500 leading-relaxed flex-1 line-clamp-2">
                    {cat.description}
                  </p>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-[11px] text-slate-400 font-medium">Interactivas · Imprimibles</span>
                    <span className="text-[12px] font-bold flex items-center gap-1 transition-all group-hover:gap-1.5"
                      style={{ color: cat.color }}>
                      Abrir
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* ════════ CÓMO USAR ════════ */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <div className="rounded-3xl overflow-hidden"
          style={{ background: "linear-gradient(135deg,#071812 0%,#0b2018 50%,#071812 100%)" }}>
          <div className="relative p-8 md:p-10">
            <div style={{
              position: "absolute", top: "-60px", right: "-60px",
              width: "300px", height: "300px", borderRadius: "50%",
              background: "radial-gradient(circle,rgba(20,184,166,0.2) 0%,transparent 70%)",
              pointerEvents: "none",
            }} />
            <div className="relative">
              <p className="text-[10px] font-black uppercase tracking-[0.25em] mb-1" style={{ color: "#14b8a6" }}>Flujo de trabajo</p>
              <h3 className="font-extrabold text-white text-[22px] mb-8 leading-tight">
                3 pasos para usar cada ficha
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { n: "01", emoji: "✏️", t: "Completa en sesión", d: "Rellena los campos en pantalla. Todo se guarda automáticamente sin cuenta ni registro." },
                  { n: "02", emoji: "🖨️", t: "Imprime o guarda PDF", d: "Un clic imprime la ficha con diseño limpio optimizado, sin menús ni distracciones." },
                  { n: "03", emoji: "📤", t: "Comparte con tu paciente", d: "Copia la URL y envíala para que complete la ficha desde cualquier dispositivo." },
                ].map((s) => (
                  <div key={s.n} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="text-[10px] font-black tracking-widest mb-1" style={{ color: "rgba(20,184,166,0.4)" }}>{s.n}</div>
                      <div className="text-3xl">{s.emoji}</div>
                    </div>
                    <div>
                      <div className="text-[14px] font-bold text-white mb-1">{s.t}</div>
                      <p className="text-[12px] leading-relaxed" style={{ color: "rgba(255,255,255,0.38)" }}>{s.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
