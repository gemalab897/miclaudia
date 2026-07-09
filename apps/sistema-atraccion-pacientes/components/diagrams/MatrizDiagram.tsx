const factores = [
  { icon: "🔥", label: "Urgencia del dolor", desc: "¿Qué tan pronto busca ayuda?" },
  { icon: "🥊", label: "Competencia", desc: "¿Cuánta oferta ya existe?" },
  { icon: "🎓", label: "Expertise propio", desc: "¿Qué tan formado estás?" },
  { icon: "❤️", label: "Pasión propia", desc: "¿Cuánto disfrutas el caso?" },
];

export default function MatrizDiagram() {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: "var(--ink-soft)" }}>
        Las 4 variables que cruza la matriz de decisión
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {factores.map((f) => (
          <div
            key={f.label}
            className="rounded-xl p-3.5 text-center"
            style={{ background: "var(--teal-soft)" }}
          >
            <div className="text-2xl mb-1.5">{f.icon}</div>
            <p className="text-xs font-semibold leading-snug" style={{ color: "var(--navy)" }}>
              {f.label}
            </p>
            <p className="text-[11px] mt-1 leading-snug" style={{ color: "var(--ink-soft)" }}>
              {f.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
