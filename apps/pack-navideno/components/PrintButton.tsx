"use client";

export default function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => window.print()}
      className="no-print inline-flex items-center gap-2 rounded-full bg-[var(--verde)] px-5 py-2.5 text-sm font-semibold text-[var(--crema)] shadow-md transition-transform hover:scale-105 hover:bg-[var(--esmeralda)]"
    >
      🖨️ Imprimir ficha
    </button>
  );
}
