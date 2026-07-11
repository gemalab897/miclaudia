"use client";

import { Field, TextArea, Button } from "./ui";
import { MecanismoFicha, useMecanismoState } from "@/lib/sharedState";

const campos: { key: keyof MecanismoFicha; icon: string; label: string }[] = [
  { key: "dolor", icon: "💔", label: "Puntos de dolor" },
  { key: "objeciones", icon: "🚧", label: "Objeciones" },
  { key: "falsasCreencias", icon: "🌀", label: "Falsas creencias" },
  { key: "viejaForma", icon: "🔙", label: "La vieja forma" },
  { key: "nuevaForma", icon: "🚀", label: "La nueva forma" },
];

export default function FichaMecanismo() {
  const [ficha, setFicha, hydrated] = useMecanismoState();

  const set = (key: keyof typeof ficha) => (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setFicha({ ...ficha, [key]: e.target.value });

  const hasData = Object.values(ficha).some((v) => v.trim().length > 0);

  const download = () => {
    const text = `DOLOR, CREENCIAS Y MECANISMO ÚNICO
====================================
Puntos de dolor:
${ficha.dolor}

Objeciones:
${ficha.objeciones}

Falsas creencias:
${ficha.falsasCreencias}

La vieja forma (lo que ya intentaron):
${ficha.viejaForma}

La nueva forma (tu mecanismo único):
${ficha.nuevaForma}
`;
    const blob = new Blob([text], { type: "text/plain;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "mecanismo-unico.txt";
    a.click();
    URL.revokeObjectURL(url);
  };

  if (!hydrated) return null;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div>
        <Field label="💔 Puntos de dolor" hint="¿Cuáles son los dolores o problemas que tienen?">
          <TextArea value={ficha.dolor} onChange={set("dolor")} placeholder="Ej. Siente que está fallando en todo al mismo tiempo y no logra desconectar ni de noche." />
        </Field>
        <Field label="🚧 Objeciones" hint="¿Qué objeciones identificas en tu cliente?">
          <TextArea value={ficha.objeciones} onChange={set("objeciones")} placeholder="Ej. 'No tengo tiempo para terapia', 'es muy caro', 'no sé si un extraño me puede ayudar'." />
        </Field>
        <Field label="🌀 Falsas creencias" hint="¿Cuáles son las falsas creencias que tiene tu cliente?">
          <TextArea value={ficha.falsasCreencias} onChange={set("falsasCreencias")} placeholder="Ej. 'Si necesito ayuda es que soy débil', 'esto se resuelve solo con fuerza de voluntad'." />
        </Field>
        <Field
          label="🔙 La vieja forma"
          hint="Lo que ya probó y no le dio un resultado duradero. ¿Cómo ha intentado resolver su problema antes?"
        >
          <TextArea value={ficha.viejaForma} onChange={set("viejaForma")} placeholder="Ej. Leyó libros de autoayuda, probó apps de meditación, habló con amigos — alivio momentáneo, el problema siempre vuelve." />
        </Field>
        <Field
          label="🚀 La nueva forma"
          hint="Tu mecanismo único: el vehículo con el que por fin va a lograr resultados."
        >
          <TextArea value={ficha.nuevaForma} onChange={set("nuevaForma")} placeholder="Ej. Un proceso estructurado en fases que combina TCC con seguimiento entre sesiones, diseñado específicamente para sostenerse en el tiempo." />
        </Field>
      </div>

      <div>
        <p className="text-xs font-semibold mb-2 uppercase tracking-wide" style={{ color: "var(--ink-soft)" }}>
          Vista previa de tu ficha
        </p>
        <div
          className="rounded-2xl p-6"
          style={{ background: "linear-gradient(160deg, var(--navy) 0%, var(--navy-dark) 100%)" }}
        >
          <p className="text-[10px] font-bold tracking-[0.14em] uppercase mb-4" style={{ color: "#8fd6c4" }}>
            Dolor, creencias y mecanismo único
          </p>
          <div className="space-y-4">
            {campos.map((c) => (
              <div key={c.key}>
                <p className="text-[10px] font-bold uppercase tracking-wide text-white/50 flex items-center gap-1.5">
                  <span>{c.icon}</span> {c.label}
                </p>
                <p className="text-sm text-white/90 mt-0.5">{ficha[c.key] || "—"}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <Button onClick={download} disabled={!hasData}>
            ⬇ Descargar ficha (.txt)
          </Button>
        </div>
        <p className="text-xs mt-3" style={{ color: "var(--ink-soft)" }}>
          Esta ficha se guarda en tu navegador. Cuanto más específicos sean tus 5 puntos, más
          afilado va a quedar el mensaje de tus próximas lecciones.
        </p>
      </div>
    </div>
  );
}
