"use client";

import { useEffect, useState } from "react";
import { Field, TextInput, Button, ResultBox } from "./ui";
import { usePVUState, useAvatarState } from "@/lib/sharedState";

export default function ConstructorPVU() {
  const [pvu, setPVU, hydrated] = usePVUState();
  const [avatar] = useAvatarState();
  const [prefilled, setPrefilled] = useState(false);

  const set = (key: keyof typeof pvu) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setPVU({ ...pvu, [key]: e.target.value });

  const canPrefill =
    hydrated && !prefilled && !pvu.avatar && (avatar.situacion || avatar.dolorPrincipal || avatar.objeciones);

  const applyPrefill = () => {
    setPVU({
      avatar: avatar.situacion ? `[avatar de tu ficha: ${avatar.situacion}]` : pvu.avatar,
      resultado: avatar.deseoPrincipal || pvu.resultado,
      metodo: pvu.metodo,
      objecion: avatar.objeciones || pvu.objecion,
    });
    setPrefilled(true);
  };

  useEffect(() => {
    if (canPrefill) setPrefilled(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hydrated]);

  if (!hydrated) return null;

  const frase =
    pvu.avatar || pvu.resultado || pvu.metodo || pvu.objecion
      ? `Ayudo a ${pvu.avatar || "[avatar específico]"} a lograr ${
          pvu.resultado || "[resultado deseado]"
        } a través de ${pvu.metodo || "[método/enfoque]"}, sin ${pvu.objecion || "[objeción/miedo común]"}.`
      : "";

  return (
    <div>
      {canPrefill && (
        <div
          className="mb-5 p-3.5 rounded-lg flex items-center justify-between gap-3 flex-wrap"
          style={{ background: "var(--teal-soft)" }}
        >
          <p className="text-sm" style={{ color: "var(--navy)" }}>
            Detectamos datos de tu ficha de avatar. ¿Los usamos para pre-rellenar?
          </p>
          <Button variant="secondary" onClick={applyPrefill}>
            Pre-rellenar con mi avatar
          </Button>
        </div>
      )}

      <Field label="Ayudo a... (avatar específico)" hint="A quién ayudás, de forma concreta.">
        <TextInput value={pvu.avatar} onChange={set("avatar")} placeholder="mujeres profesionales con ansiedad y burnout" />
      </Field>
      <Field label="A lograr... (resultado deseado)" hint="En términos de vida, no clínicos.">
        <TextInput value={pvu.resultado} onChange={set("resultado")} placeholder="recuperar el control de su día a día" />
      </Field>
      <Field label="A través de... (método/enfoque)" hint="Tu enfoque terapéutico.">
        <TextInput value={pvu.metodo} onChange={set("metodo")} placeholder="terapia cognitivo-conductual" />
      </Field>
      <Field label="Sin... (objeción/miedo común)" hint="La principal barrera que desactivás por adelantado.">
        <TextInput value={pvu.objecion} onChange={set("objecion")} placeholder="tener que dejar el trabajo que aman" />
      </Field>

      {frase && (
        <ResultBox title="Tu Promesa de Venta Única">
          <p className="text-base font-medium" style={{ color: "var(--navy)" }}>
            {frase}
          </p>
        </ResultBox>
      )}
    </div>
  );
}
