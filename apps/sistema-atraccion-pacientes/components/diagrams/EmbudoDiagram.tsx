const etapas = [
  { label: "Leads", width: 100 },
  { label: "Citas agendadas", width: 78 },
  { label: "Citas completadas", width: 60 },
  { label: "Pacientes activos", width: 40 },
];

export default function EmbudoDiagram() {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: "var(--ink-soft)" }}>
        El embudo que diagnostican tus KPIs
      </p>
      <div className="flex flex-col gap-1.5 max-w-md mx-auto">
        {etapas.map((e, i) => (
          <div
            key={e.label}
            className="mx-auto rounded-lg py-2.5 px-4 text-center text-xs font-semibold"
            style={{
              width: `${e.width}%`,
              background: `rgba(31,56,100,${0.9 - i * 0.18})`,
              color: "#fff",
            }}
          >
            {e.label}
          </div>
        ))}
      </div>
      <p className="text-[11px] text-center mt-3" style={{ color: "var(--ink-soft)" }}>
        Una caída brusca entre dos etapas señala en qué módulo enfocar tu energía.
      </p>
    </div>
  );
}
