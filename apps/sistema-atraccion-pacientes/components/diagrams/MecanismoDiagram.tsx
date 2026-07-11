export default function MecanismoDiagram() {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide mb-4" style={{ color: "var(--ink-soft)" }}>
        De lo que ya intentó, a tu mecanismo único
      </p>
      <div className="flex items-center gap-3 sm:gap-5">
        <div className="flex-1 rounded-xl p-4 text-center" style={{ background: "#eef1f5" }}>
          <div className="text-2xl mb-1">🔙</div>
          <p className="text-xs font-bold" style={{ color: "var(--ink-soft)" }}>
            La vieja forma
          </p>
          <p className="text-[11px] mt-1" style={{ color: "var(--ink-soft)" }}>
            Libros, apps, consejos de amigos — alivio momentáneo, el problema vuelve.
          </p>
        </div>
        <span className="shrink-0 text-xl" style={{ color: "var(--teal)" }}>
          →
        </span>
        <div className="flex-1 rounded-xl p-4 text-center" style={{ background: "var(--teal)" }}>
          <div className="text-2xl mb-1">🚀</div>
          <p className="text-xs font-bold text-white">La nueva forma</p>
          <p className="text-[11px] mt-1 text-white/85">Tu método específico — el vehículo hecho para sostenerse.</p>
        </div>
      </div>
    </div>
  );
}
