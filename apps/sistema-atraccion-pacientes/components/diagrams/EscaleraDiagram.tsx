const niveles = [
  "Inconsciente\ndel problema",
  "Consciente\ndel problema",
  "Consciente de\nlas soluciones",
  "Consciente\ndel método",
  "Listo para\ndecidir",
];

export default function EscaleraDiagram() {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide mb-4" style={{ color: "var(--ink-soft)" }}>
        Los 5 niveles de consciencia, de menos a más listo para agendar
      </p>
      <div className="flex items-end justify-between gap-1.5 sm:gap-2.5">
        {niveles.map((n, i) => (
          <div key={n} className="flex-1 flex flex-col items-center">
            <div
              className="w-full rounded-t-md flex items-start justify-center pt-1.5"
              style={{
                height: `${36 + i * 20}px`,
                background: `rgba(31,56,100,${0.35 + i * 0.16})`,
              }}
            >
              <span className="text-white text-xs font-bold">{i + 1}</span>
            </div>
            <p
              className="text-[10px] sm:text-[11px] text-center mt-2 leading-tight whitespace-pre-line"
              style={{ color: "var(--ink-soft)" }}
            >
              {n}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
