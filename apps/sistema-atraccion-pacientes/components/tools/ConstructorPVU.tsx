"use client";

import { useEffect, useState } from "react";
import { Field, TextInput, Button, ResultBox } from "./ui";
import { usePVUState, useAvatarState, useMecanismoState, PVUData } from "@/lib/sharedState";

const PALABRAS_CLINICAS = ["trastorno", "síndrome", "patología", "diagnóstico", "enfermedad", "síntoma"];
const PALABRAS_NO_ETICAS = [
  "cura ",
  "curar",
  "curación",
  "garantizado",
  "garantizo",
  "100%",
  "nunca más",
  "para siempre",
  "elimina por completo",
  "elimina completamente",
  "sana por completo",
  "resultados garantizados",
];
const AVATAR_GENERICO = ["personas", "gente", "pacientes", "todos", "individuos", "alguien"];

type Nivel = "rojo" | "amarillo" | "verde";

const NIVEL_INFO: Record<Nivel, { label: string; color: string; emoji: string }> = {
  rojo: { label: "Necesita trabajo", color: "#dc2626", emoji: "🔴" },
  amarillo: { label: "Va por buen camino", color: "#d97706", emoji: "🟡" },
  verde: { label: "Lista para usar", color: "var(--teal)", emoji: "🟢" },
};

function contieneAlguna(texto: string, lista: string[]) {
  const t = texto.toLowerCase();
  return lista.some((palabra) => t.includes(palabra));
}

function evaluarPVU(pvu: PVUData) {
  const recomendaciones: string[] = [];
  let tieneRojo = false;
  let tieneAmarillo = false;

  const campos = [pvu.avatar, pvu.resultado, pvu.metodo, pvu.objecion];
  const faltantes = campos.filter((c) => !c.trim()).length;
  if (faltantes > 0) {
    tieneRojo = true;
    recomendaciones.push(
      faltantes === 1
        ? "Todavía te falta completar 1 campo de la fórmula."
        : `Todavía te faltan completar ${faltantes} campos de la fórmula.`
    );
  }

  const textoCompleto = campos.join(" ");
  if (contieneAlguna(textoCompleto, PALABRAS_NO_ETICAS)) {
    tieneRojo = true;
    recomendaciones.push(
      "Encontramos lenguaje absoluto o de garantía de resultado clínico (ej. \"cura\", \"garantizado\", \"para siempre\"). En terapia esto no es ético — reformula hacia dirección y proceso, no hacia una promesa imposible de cumplir."
    );
  }

  if (pvu.avatar.trim()) {
    const palabras = pvu.avatar.trim().split(/\s+/);
    const esGenerico = palabras.length <= 1 && AVATAR_GENERICO.includes(pvu.avatar.trim().toLowerCase());
    if (palabras.length < 2 || esGenerico) {
      tieneAmarillo = true;
      recomendaciones.push(
        "Tu avatar es muy genérico. Sé más específico — ej. \"mujeres profesionales con ansiedad y burnout\" en vez de \"personas con ansiedad\"."
      );
    }
  }

  if (pvu.resultado.trim() && contieneAlguna(pvu.resultado, PALABRAS_CLINICAS)) {
    tieneAmarillo = true;
    recomendaciones.push(
      "Tu resultado usa lenguaje clínico (ej. \"trastorno\", \"síntoma\"). Tradúcelo a términos de vida: qué va a poder hacer o sentir tu paciente, no el nombre del diagnóstico."
    );
  }

  if (pvu.metodo.trim() && pvu.metodo.trim().split(/\s+/).length < 2) {
    tieneAmarillo = true;
    recomendaciones.push(
      "Tu método es muy genérico (ej. solo \"terapia\"). Nombra tu enfoque específico — ej. \"terapia cognitivo-conductual\" o \"terapia de pareja basada en apego\"."
    );
  }

  let nivel: Nivel = "verde";
  if (tieneRojo) nivel = "rojo";
  else if (tieneAmarillo) nivel = "amarillo";

  if (nivel === "verde") {
    recomendaciones.push("Tu promesa está completa, es específica y usa lenguaje ético. Está lista para usar.");
  }

  return { nivel, recomendaciones };
}

export default function ConstructorPVU() {
  const [pvu, setPVU, hydrated] = usePVUState();
  const [avatar] = useAvatarState();
  const [mecanismo] = useMecanismoState();
  const [prefilled, setPrefilled] = useState(false);

  const set = (key: keyof typeof pvu) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setPVU({ ...pvu, [key]: e.target.value });

  const canPrefill =
    hydrated &&
    !prefilled &&
    !pvu.avatar &&
    (avatar.situacion || avatar.dolorPrincipal || avatar.objeciones || mecanismo.nuevaForma);

  const applyPrefill = () => {
    setPVU({
      avatar: avatar.situacion ? `[avatar de tu ficha: ${avatar.situacion}]` : pvu.avatar,
      resultado: avatar.deseoPrincipal || pvu.resultado,
      metodo: mecanismo.nuevaForma || pvu.metodo,
      objecion: avatar.objeciones || pvu.objecion,
    });
    setPrefilled(true);
  };

  useEffect(() => {
    if (canPrefill) setPrefilled(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hydrated]);

  if (!hydrated) return null;

  const camposCompletos = pvu.avatar && pvu.resultado && pvu.metodo && pvu.objecion;

  const frase =
    pvu.avatar || pvu.resultado || pvu.metodo || pvu.objecion
      ? `Ayudo a ${pvu.avatar || "[avatar específico]"} a lograr ${
          pvu.resultado || "[resultado deseado]"
        } a través de ${pvu.metodo || "[método/enfoque]"}, sin ${pvu.objecion || "[objeción/miedo común]"}.`
      : "";

  const desarrollo = camposCompletos
    ? `Trabajo con ${pvu.avatar}. Mi objetivo es ayudarte a ${pvu.resultado}, a través de ${pvu.metodo}. A diferencia de otras opciones, no vas a tener que ${pvu.objecion} — porque el proceso está diseñado pensando específicamente en esa barrera. Si te reconoces en esta descripción, este puede ser el camino indicado para ti.`
    : "";

  const evaluacion = frase ? evaluarPVU(pvu) : null;

  return (
    <div>
      {canPrefill && (
        <div
          className="mb-5 p-3.5 rounded-lg flex items-center justify-between gap-3 flex-wrap"
          style={{ background: "var(--teal-soft)" }}
        >
          <p className="text-sm" style={{ color: "var(--navy)" }}>
            Detectamos datos de tus fichas anteriores. ¿Los usamos para pre-rellenar?
          </p>
          <Button variant="secondary" onClick={applyPrefill}>
            Pre-rellenar con mi avatar
          </Button>
        </div>
      )}

      <Field label="Ayudo a... (avatar específico)" hint="A quién ayudas, de forma concreta.">
        <TextInput value={pvu.avatar} onChange={set("avatar")} placeholder="mujeres profesionales con ansiedad y burnout" />
      </Field>
      <Field label="A lograr... (resultado deseado)" hint="En términos de vida, no clínicos.">
        <TextInput value={pvu.resultado} onChange={set("resultado")} placeholder="recuperar el control de su día a día" />
      </Field>
      <Field label="A través de... (método/enfoque)" hint="Tu enfoque terapéutico.">
        <TextInput value={pvu.metodo} onChange={set("metodo")} placeholder="terapia cognitivo-conductual" />
      </Field>
      <Field label="Sin... (objeción/miedo común)" hint="La principal barrera que desactivas por adelantado.">
        <TextInput value={pvu.objecion} onChange={set("objecion")} placeholder="tener que dejar el trabajo que aman" />
      </Field>

      {frase && (
        <ResultBox title="Tu Promesa de Venta Única">
          <p className="text-base font-medium" style={{ color: "var(--navy)" }}>
            {frase}
          </p>
        </ResultBox>
      )}

      {desarrollo && (
        <ResultBox title="Versión desarrollada de tu promesa">
          <p className="text-sm leading-relaxed" style={{ color: "var(--ink)" }}>
            {desarrollo}
          </p>
          <p className="text-xs mt-3" style={{ color: "var(--ink-soft)" }}>
            Usa esta versión más larga para tu bio extendida, la apertura de un post, o cuando alguien
            te pregunte de viva voz a qué te dedicas.
          </p>
        </ResultBox>
      )}

      {evaluacion && (
        <div className="mt-5 p-5 rounded-xl" style={{ border: `1px solid ${NIVEL_INFO[evaluacion.nivel].color}33` }}>
          <div className="flex items-center gap-2 mb-3">
            <span
              className="text-xs font-bold px-2.5 py-1 rounded-full text-white"
              style={{ background: NIVEL_INFO[evaluacion.nivel].color }}
            >
              {NIVEL_INFO[evaluacion.nivel].emoji} {NIVEL_INFO[evaluacion.nivel].label}
            </span>
            <p className="text-xs font-bold uppercase tracking-wide" style={{ color: "var(--ink-soft)" }}>
              Semáforo de tu PVU
            </p>
          </div>
          <ul className="space-y-2">
            {evaluacion.recomendaciones.map((r, i) => (
              <li key={i} className="text-sm flex gap-2" style={{ color: "var(--ink)" }}>
                <span>{evaluacion.nivel === "verde" ? "✓" : "→"}</span>
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
