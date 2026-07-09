const pasos = [
  { icon: "🪝", label: "Gancho", desc: "Detiene el scroll" },
  { icon: "📖", label: "Desarrollo", desc: "Entrega el valor" },
  { icon: "👉", label: "CTA", desc: "Dice qué hacer después" },
];

export default function FlujoGanchoDiagram() {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide mb-4" style={{ color: "var(--ink-soft)" }}>
        La arquitectura de un post persuasivo
      </p>
      <div className="flex items-center gap-1.5 sm:gap-3">
        {pasos.map((p, i) => (
          <div key={p.label} className="flex items-center gap-1.5 sm:gap-3 flex-1">
            <div
              className="flex-1 rounded-xl p-3.5 text-center"
              style={{ background: "var(--teal-soft)" }}
            >
              <div className="text-2xl mb-1">{p.icon}</div>
              <p className="text-xs font-bold" style={{ color: "var(--navy)" }}>
                {p.label}
              </p>
              <p className="text-[11px] mt-0.5" style={{ color: "var(--ink-soft)" }}>
                {p.desc}
              </p>
            </div>
            {i < pasos.length - 1 && (
              <span className="shrink-0 text-lg" style={{ color: "var(--teal)" }}>
                →
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
