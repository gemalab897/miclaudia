const hitos = [
  { label: "72h antes", desc: "Recordatorio + margen para reprogramar" },
  { label: "24h antes", desc: "Confirmación más cercana" },
  { label: "2h antes", desc: "Último aviso" },
  { label: "Cita", desc: "" },
];

export default function TimelineDiagram() {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide mb-5" style={{ color: "var(--ink-soft)" }}>
        Secuencia de recordatorios antes de la sesión
      </p>
      <div className="relative flex justify-between items-start">
        <div
          className="absolute left-0 right-0 top-[7px] h-[2px]"
          style={{ background: "var(--border)" }}
        />
        {hitos.map((h, i) => (
          <div key={h.label} className="relative flex flex-col items-center flex-1 px-1">
            <span
              className="w-4 h-4 rounded-full shrink-0 z-10"
              style={{
                background: i === hitos.length - 1 ? "var(--teal)" : "var(--navy)",
                border: "3px solid #fff",
              }}
            />
            <p className="text-xs font-bold mt-2 text-center" style={{ color: "var(--navy)" }}>
              {h.label}
            </p>
            {h.desc && (
              <p className="text-[10px] text-center mt-0.5 leading-snug" style={{ color: "var(--ink-soft)" }}>
                {h.desc}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
