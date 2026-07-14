const modelos = [
  {
    numero: 1,
    nombre: "Modelo 1 — Pendiente",
    resumen: "Aquí va la descripción del primer modelo de negocio.",
    incluye: ["Detalle 1", "Detalle 2", "Detalle 3"],
  },
  {
    numero: 2,
    nombre: "Modelo 2 — Pendiente",
    resumen: "Aquí va la descripción del segundo modelo de negocio.",
    incluye: ["Detalle 1", "Detalle 2", "Detalle 3"],
  },
  {
    numero: 3,
    nombre: "Modelo 3 — Pendiente",
    resumen: "Aquí va la descripción del tercer modelo de negocio.",
    incluye: ["Detalle 1", "Detalle 2", "Detalle 3"],
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 pb-24">
      <section className="animate-fade-up py-20 text-center">
        <span className="twinkle mb-4 inline-block text-3xl">✦</span>
        <h1 className="font-display text-4xl font-semibold text-[var(--pine-dark)] sm:text-5xl">
          Pack Navideño
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-[var(--pine-dark)]/70">
          3 modelos de negocio listos para emprender en temporada navideña.
        </p>
      </section>

      <section className="grid gap-6 sm:grid-cols-3">
        {modelos.map((modelo, i) => (
          <article
            key={modelo.numero}
            className={`model-card animate-fade-up-${Math.min(i + 1, 3)} rounded-2xl border border-[var(--pine)]/10 bg-white p-6 shadow-sm`}
          >
            <span className="font-display text-sm font-semibold text-[var(--gold)]">
              Modelo {modelo.numero}
            </span>
            <h2 className="mt-2 font-display text-xl font-semibold text-[var(--pine-dark)]">
              {modelo.nombre}
            </h2>
            <p className="mt-3 text-sm text-[var(--pine-dark)]/70">{modelo.resumen}</p>
            <ul className="mt-4 space-y-1 text-sm text-[var(--pine-dark)]/60">
              {modelo.incluye.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-[var(--gold)]">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </main>
  );
}
