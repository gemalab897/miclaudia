const capas = [
  { label: "Recursos descargables", width: 60 },
  { label: "Seguimiento entre sesiones", width: 72 },
  { label: "Material de apoyo", width: 84 },
  { label: "Evaluación inicial", width: 92 },
  { label: "La sesión", width: 100 },
];

export default function ValueStackDiagram() {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: "var(--ink-soft)" }}>
        Tu oferta es más que &quot;una sesión&quot;
      </p>
      <div className="flex flex-col gap-1.5 max-w-md mx-auto">
        {capas.map((c, i) => (
          <div
            key={c.label}
            className="mx-auto rounded-lg py-2.5 px-4 text-center text-xs font-semibold"
            style={{
              width: `${c.width}%`,
              background: i === capas.length - 1 ? "var(--navy)" : `rgba(46,125,107,${0.35 + i * 0.15})`,
              color: i === capas.length - 1 ? "#fff" : "var(--navy)",
            }}
          >
            {c.label}
          </div>
        ))}
      </div>
      <p className="text-[11px] text-center mt-3" style={{ color: "var(--ink-soft)" }}>
        Cada capa que se hace visible aumenta el valor percibido de tu oferta.
      </p>
    </div>
  );
}
