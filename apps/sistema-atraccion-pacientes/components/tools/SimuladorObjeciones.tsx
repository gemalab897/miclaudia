"use client";

import { useState } from "react";
import { ResultBox } from "./ui";

const objeciones = [
  {
    id: "caro",
    label: "\"Es caro\"",
    script:
      "Entiendo que es una inversión importante. Por eso la primera sesión está pensada para que ambos evaluemos si es el camino correcto para vos antes de comprometerte a un proceso más largo.",
  },
  {
    id: "pensarlo",
    label: "\"Lo voy a pensar\"",
    script:
      "Tiene sentido tomarse un momento. Contame, ¿qué es lo que te gustaría pensar mejor? Así te puedo ayudar a resolver esa duda puntual en vez de dejarla en el aire.",
  },
  {
    id: "no-se-si-funciona",
    label: "\"No sé si funciona conmigo\"",
    script:
      "Es una pregunta súper válida, muchas personas la tienen antes de la primera sesión. Por eso pensá en ese primer encuentro como un espacio de evaluación mutua, no como un compromiso de largo plazo.",
  },
  {
    id: "intentar-solo",
    label: "\"Prefiero intentarlo solo primero\"",
    script:
      "Tiene todo el sentido querer intentarlo así. Si en algún momento sentís que te vendría bien acompañamiento, acá vas a tener las puertas abiertas.",
  },
];

export default function SimuladorObjeciones() {
  const [selected, setSelected] = useState<string | null>(null);
  const current = objeciones.find((o) => o.id === selected);

  return (
    <div>
      <p className="text-sm font-semibold mb-3" style={{ color: "var(--navy)" }}>
        Elegí la objeción que recibiste:
      </p>
      <div className="flex flex-wrap gap-2 mb-5">
        {objeciones.map((o) => (
          <button
            key={o.id}
            onClick={() => setSelected(o.id)}
            className="px-4 py-2 rounded-full text-sm font-semibold transition-colors"
            style={{
              background: selected === o.id ? "var(--navy)" : "#fff",
              color: selected === o.id ? "#fff" : "var(--navy)",
              border: "1px solid var(--border)",
            }}
          >
            {o.label}
          </button>
        ))}
      </div>

      {current && (
        <ResultBox title="Script de respuesta sugerido">
          <p className="text-sm leading-relaxed" style={{ color: "var(--ink)" }}>
            {current.script}
          </p>
          <p className="text-xs mt-3" style={{ color: "var(--ink-soft)" }}>
            Adaptá el tono a tu propio estilo — lo importante es la estructura: validar, no ponerte
            a la defensiva, y reconectar con el siguiente paso.
          </p>
        </ResultBox>
      )}
    </div>
  );
}
