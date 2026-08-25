import Link from "next/link";

const modules = [
  {
    href: "/modelo-cognitivo",
    title: "Cognitive Model",
    description: "CBT cycle, cognitive distortions, and Beck's triad explained for clinical practice.",
    emoji: "🧠",
    accent: "#3b82f6",
    bg: "from-blue-500/10 to-blue-600/5",
    border: "border-blue-100",
    tag: "Fundamentals",
  },
  {
    href: "/protocolos",
    title: "Protocols",
    description: "10 step-by-step protocols with techniques, materials, and detailed clinical notes.",
    emoji: "📋",
    accent: "#10b981",
    bg: "from-emerald-500/10 to-emerald-600/5",
    border: "border-emerald-100",
    tag: "10 protocols",
  },
  {
    href: "/fichas",
    title: "Clinical Worksheets",
    description: "100+ interactive worksheets organized by diagnosis to fill on screen, save, and/or print during session.",
    emoji: "📝",
    accent: "#8b5cf6",
    bg: "from-violet-500/10 to-violet-600/5",
    border: "border-violet-100",
    tag: "100+ worksheets",
  },
  {
    href: "/guia-clinica",
    title: "Decision Guide",
    description: "Clinical decision tree by diagnosis: which technique, in what order, and why.",
    emoji: "🗺️",
    accent: "#f59e0b",
    bg: "from-amber-500/10 to-amber-600/5",
    border: "border-amber-100",
    tag: "6 diagnoses",
  },
  {
    href: "/dialogo-socratico",
    title: "Socratic Dialogue",
    description: "90+ therapeutic questions and phrases organized by clinical situation. With copy button.",
    emoji: "💬",
    accent: "#ec4899",
    bg: "from-pink-500/10 to-pink-600/5",
    border: "border-pink-100",
    tag: "90+ phrases",
  },
  {
    href: "/casos",
    title: "Clinical Cases",
    description: "20 solved cases with session-by-session analysis and interactive reflection before viewing the solution.",
    emoji: "👤",
    accent: "#ef4444",
    bg: "from-red-500/10 to-red-600/5",
    border: "border-red-100",
    tag: "20 cases",
  },
  {
    href: "/evaluacion",
    title: "Assessment",
    description: "PHQ-9, GAD-7, BDI-II, BAI, PCL-5 and more. Validated instruments and clinical templates.",
    emoji: "📊",
    accent: "#0ea5e9",
    bg: "from-sky-500/10 to-sky-600/5",
    border: "border-sky-100",
    tag: "8 instruments",
  },
  {
    href: "/teleterapia",
    title: "Teletherapy",
    description: "Complete online adaptation kit: techniques, therapeutic alliance, and crisis management via screen.",
    emoji: "💻",
    accent: "#6366f1",
    bg: "from-indigo-500/10 to-indigo-600/5",
    border: "border-indigo-100",
    tag: "Complete guide",
  },
  {
    href: "/instrumentos",
    title: "Instruments Calculator",
    description: "PHQ-9, GAD-7, and PCL-5 with automatic scoring and session-by-session progress history.",
    emoji: "📈",
    accent: "#6366f1",
    bg: "from-indigo-500/10 to-indigo-600/5",
    border: "border-indigo-100",
    tag: "With history",
  },
  {
    href: "/formulacion",
    title: "Cognitive Formulation",
    description: "Build the patient's cognitive map: core beliefs, assumptions, situation, and behavior.",
    emoji: "🗂️",
    accent: "#0891b2",
    bg: "from-cyan-500/10 to-cyan-600/5",
    border: "border-cyan-100",
    tag: "Visual map",
  },
  {
    href: "/planificador",
    title: "Session Planner",
    description: "Structure each session: techniques, worksheets, time allocation, and homework.",
    emoji: "🗓️",
    accent: "#7c3aed",
    bg: "from-violet-500/10 to-violet-600/5",
    border: "border-violet-100",
    tag: "Per session",
  },
  {
    href: "/plan-tratamiento",
    title: "Treatment Plan",
    description: "Complete clinical documentation: diagnosis, phase objectives, techniques, and discharge criteria.",
    emoji: "📁",
    accent: "#059669",
    bg: "from-emerald-500/10 to-emerald-600/5",
    border: "border-emerald-100",
    tag: "Auto-saved",
  },
  {
    href: "/consentimiento",
    title: "Informed Consent",
    description: "Editable, print-ready template. Includes GDPR, confidentiality, and signature.",
    emoji: "✅",
    accent: "#16a34a",
    bg: "from-green-500/10 to-green-600/5",
    border: "border-green-100",
    tag: "Editable",
  },
  {
    href: "/busqueda",
    title: "Global Search",
    description: "Find any worksheet, case, or protocol in seconds.",
    emoji: "🔍",
    accent: "#64748b",
    bg: "from-slate-500/10 to-slate-600/5",
    border: "border-slate-100",
    tag: "All content",
  },
];

const stats = [
  { value: "10+", label: "CBT Protocols", icon: "📋" },
  { value: "100+", label: "Clinical worksheets", icon: "📝" },
  { value: "20", label: "Clinical cases", icon: "👤" },
  { value: "90+", label: "Socratic phrases", icon: "💬" },
];

const quickCasos = [
  { id: "ansiedad-generalizada", name: "Elena, 34 · GAD", tag: "6 sessions" },
  { id: "depresion-mayor", name: "Marcos, 28 · Major Depression", tag: "8 sessions" },
  { id: "trastorno-bipolar-ii", name: "Miguel, 38 · Bipolar II", tag: "14 sessions" },
  { id: "dolor-cronico", name: "Rosa, 52 · Chronic Pain", tag: "12 sessions" },
];

const quickProtocolos = [
  { slug: "reestructuracion-cognitiva", name: "Cognitive Restructuring", tag: "Grade A" },
  { slug: "tcci-insomnio", name: "CBT-I for Insomnia", tag: "Grade A" },
  { slug: "protocolo-panico", name: "Panic Protocol (Clark)", tag: "Grade A" },
  { slug: "primera-sesion", name: "First Session Protocol", tag: "Assessment" },
];

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: "#f7f8fc" }}>

      {/* ── Hero ── */}
      <div
        className="relative overflow-hidden dot-pattern"
        style={{ background: "linear-gradient(150deg, #16144a 0%, #0d0c2b 55%, #08071e 100%)" }}
      >
        {/* Violet top accent */}
        <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: "linear-gradient(90deg,#7c3aed 0%,#a78bfa 50%,transparent 100%)" }} />

        {/* Glow blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-24 right-0 w-[600px] h-[400px]" style={{ background: "radial-gradient(ellipse,rgba(124,58,237,0.18) 0%,transparent 70%)" }} />
          <div className="absolute bottom-0 -left-12 w-[400px] h-[300px]" style={{ background: "radial-gradient(ellipse,rgba(167,139,250,0.07) 0%,transparent 70%)" }} />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 pt-16 pb-12">
          <div className="max-w-2xl">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2.5 text-[11px] font-semibold px-4 py-1.5 rounded-full mb-8 tracking-wide animate-fade-up"
              style={{ background: "rgba(124,58,237,0.15)", border: "1px solid rgba(167,139,250,0.3)", color: "#c4b5fd" }}
            >
              <span className="w-1.5 h-1.5 rounded-full pulse-dot" style={{ background: "#a78bfa" }} />
              Professional Clinical Platform · Evidence-Based
            </div>

            <h1 className="animate-fade-up-2 mb-6">
              <span
                className="block font-bold text-white leading-[1.0]"
                style={{ fontFamily: "var(--font-playfair)", fontSize: "clamp(48px,8vw,76px)" }}
              >
                CBT <span style={{ color: "#a78bfa" }}>Atlas</span>
              </span>
              <span className="block text-sm md:text-base mt-4 tracking-[0.25em] uppercase font-medium" style={{ color: "rgba(196,181,253,0.45)" }}>
                Clinical System · Cognitive Behavioral Therapy
              </span>
            </h1>

            <p className="text-base md:text-[17px] leading-relaxed mb-10 animate-fade-up-3" style={{ color: "rgba(255,255,255,0.5)" }}>
              Everything you need to structure, intervene, and measure progress in CBT — in one place.
            </p>

            <div className="flex flex-wrap gap-3 animate-fade-up-3">
              <Link
                href="/fichas"
                className="inline-flex items-center gap-2 text-white text-sm font-bold px-6 py-3 rounded-xl transition-all hover:opacity-90"
                style={{ background: "linear-gradient(135deg,#7c3aed,#5b21b6)", boxShadow: "0 8px 24px rgba(124,58,237,0.4)" }}
              >
                Open Clinical Worksheets
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/guia-clinica"
                className="inline-flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-xl transition-all hover:opacity-90"
                style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(167,139,250,0.15)", color: "rgba(255,255,255,0.75)" }}
              >
                Guide by Diagnosis
              </Link>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="relative" style={{ borderTop: "1px solid rgba(167,139,250,0.08)" }}>
          <div className="max-w-5xl mx-auto px-6 py-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                  style={{ background: "rgba(124,58,237,0.12)", border: "1px solid rgba(167,139,250,0.15)" }}
                >
                  {s.icon}
                </div>
                <div>
                  <div className="font-bold leading-none" style={{ fontFamily: "var(--font-playfair)", fontSize: "26px", color: "#a78bfa" }}>
                    {s.value}
                  </div>
                  <div className="text-[11px] mt-1 font-medium" style={{ color: "rgba(196,181,253,0.4)" }}>{s.label}</div>
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
            Clinical Modules
          </h2>
          <p className="text-sm text-slate-400 mt-1">14 specialized tools in one place</p>
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
                Open
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
                  Clinical Cases
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">Interactive session-by-session reflection</p>
              </div>
              <Link href="/casos" className="text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors">
                See all →
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
                  Featured Protocols
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">With Grade A scientific evidence</p>
              </div>
              <Link href="/protocolos" className="text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors">
                See all →
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
          style={{ background: "linear-gradient(135deg, #16144a 0%, #0d0c2b 100%)" }}
        >
          <div className="absolute -top-8 -right-8 w-48 h-48 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle,rgba(124,58,237,0.25) 0%,transparent 70%)" }} />
          <div className="flex-1 relative">
            <div className="text-[10px] font-bold uppercase tracking-[0.25em] mb-2" style={{ color: "#a78bfa" }}>
              Session Timer
            </div>
            <h3 className="font-bold text-white text-[22px] mb-2 leading-tight" style={{ fontFamily: "var(--font-playfair)" }}>
              Structure each session in phases
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(196,181,253,0.4)" }}>
              Use the floating ⏱ button on any page to activate the timer with automatic phases and alerts.
            </p>
          </div>
          <div className="flex gap-3 flex-shrink-0 relative">
            <Link
              href="/dialogo-socratico"
              className="text-sm font-semibold px-4 py-2.5 rounded-xl transition-all"
              style={{ background: "rgba(167,139,250,0.1)", border: "1px solid rgba(167,139,250,0.2)", color: "rgba(196,181,253,0.8)" }}
            >
              Socratic Dialogue
            </Link>
            <Link
              href="/fichas"
              className="text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-all"
              style={{ background: "linear-gradient(135deg,#7c3aed,#5b21b6)", boxShadow: "0 4px 16px rgba(124,58,237,0.35)" }}
            >
              Worksheets →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
