const pasos = [
  { icon: "💬", label: "Primer mensaje", desc: "Agradecer y mostrar que entendiste" },
  { icon: "🛑", label: "Objeción", desc: "Validar sin ponerte a la defensiva" },
  { icon: "🤝", label: "Cierre suave", desc: "Ofrecer 2 horarios concretos" },
  { icon: "✓", label: "Cita agendada", desc: "" },
];

export default function FlujoConversionDiagram() {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide mb-4" style={{ color: "var(--ink-soft)" }}>
        De la conversación a la cita en la agenda
      </p>
      <div className="flex items-stretch gap-1.5 sm:gap-2.5 overflow-x-auto">
        {pasos.map((p, i) => (
          <div key={p.label} className="flex items-center gap-1.5 sm:gap-2.5 shrink-0 sm:flex-1">
            <div
              className="rounded-xl p-3 text-center w-[124px] sm:w-auto sm:flex-1"
              style={{
                background: i === pasos.length - 1 ? "var(--teal)" : "var(--teal-soft)",
                color: i === pasos.length - 1 ? "#fff" : "var(--navy)",
              }}
            >
              <div className="text-xl mb-1">{p.icon}</div>
              <p className="text-xs font-bold">{p.label}</p>
              {p.desc && (
                <p className="text-[10px] mt-0.5" style={{ color: i === pasos.length - 1 ? "#fff" : "var(--ink-soft)" }}>
                  {p.desc}
                </p>
              )}
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
