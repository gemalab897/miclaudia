"use client";

import { useState } from "react";
import { ResultBox } from "./ui";

const niveles = [
  {
    nombre: "Inconsciente del problema",
    recomendacion:
      "Prioriza contenido educativo que ayude a poner en palabras lo que la persona siente (\"si te pasa esto, podría ser...\").",
  },
  {
    nombre: "Consciente del problema",
    recomendacion: "Contenido que valida su experiencia y empieza a nombrar que existen caminos posibles.",
  },
  {
    nombre: "Consciente de que hay soluciones",
    recomendacion: "Contenido que explica enfoques disponibles y diferencia opciones.",
  },
  {
    nombre: "Consciente del método",
    recomendacion: "Contenido que demuestra tu forma de trabajar y tu diferenciación frente a otros profesionales.",
  },
  {
    nombre: "Listo para decidir",
    recomendacion: "Contenido con un CTA directo y claro para agendar, sin rodeos.",
  },
];

const preguntas = [
  {
    q: "¿Qué tipo de comentarios recibes más seguido en tus posts?",
    opciones: [
      "Describen síntomas sin nombrarlos (\"a mí también me pasa esto\")",
      "Preguntan \"¿esto que siento tiene nombre?\"",
      "Preguntan qué tipos de ayuda existen para su problema",
      "Preguntan sobre tu enfoque específico y cómo trabajas",
      "Preguntan directamente por precio y disponibilidad",
    ],
  },
  {
    q: "¿Qué te preguntan más seguido por mensaje directo?",
    opciones: [
      "Describen su malestar sin pedir nada concreto todavía",
      "Preguntan si lo que sienten es \"normal\"",
      "Preguntan si la terapia podría ayudarles",
      "Preguntan cómo son tus sesiones o tu metodología",
      "Preguntan cómo agendar una cita",
    ],
  },
  {
    q: "Cuando alguien te sigue después de ver un post, ¿qué parece estar buscando?",
    opciones: [
      "Solo información general, sin relacionarlo consigo mismo todavía",
      "Reconocerse en lo que describes",
      "Comparar si la terapia es mejor que otras alternativas",
      "Evaluar si tú eres la persona indicada para su caso",
      "Ya decidió que quiere empezar, busca el siguiente paso",
    ],
  },
  {
    q: "¿Qué objeción aparece con más frecuencia en tus conversaciones?",
    opciones: [
      "Ninguna todavía — ni siquiera se plantean buscar ayuda",
      "\"No sé si esto amerita ir a terapia\"",
      "\"No sé qué tipo de terapia necesito\"",
      "\"No sé si tú eres la persona indicada para mi caso\"",
      "\"¿Cuándo tienes disponibilidad?\"",
    ],
  },
];

export default function DiagnosticoConsciencia() {
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const answered = Object.keys(answers).length;

  const choose = (qIdx: number, optIdx: number) => setAnswers({ ...answers, [qIdx]: optIdx });

  const finished = answered === preguntas.length;

  let predominante = 0;
  if (finished) {
    const counts = [0, 0, 0, 0, 0];
    Object.values(answers).forEach((v) => (counts[v] += 1));
    predominante = counts.indexOf(Math.max(...counts));
  }

  return (
    <div className="space-y-7">
      {preguntas.map((p, qIdx) => (
        <div key={qIdx}>
          <p className="text-sm font-semibold mb-2.5" style={{ color: "var(--navy)" }}>
            {qIdx + 1}. {p.q}
          </p>
          <div className="space-y-1.5">
            {p.opciones.map((opt, optIdx) => {
              const active = answers[qIdx] === optIdx;
              return (
                <button
                  key={optIdx}
                  onClick={() => choose(qIdx, optIdx)}
                  className="block w-full text-left px-3.5 py-2.5 rounded-lg text-sm transition-colors"
                  style={{
                    background: active ? "var(--teal-soft)" : "#fff",
                    border: active ? "1px solid var(--teal)" : "1px solid var(--border)",
                    color: active ? "var(--navy)" : "var(--ink-soft)",
                    fontWeight: active ? 600 : 400,
                  }}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </div>
      ))}

      {finished && (
        <ResultBox title="Nivel predominante de tu audiencia">
          <p className="text-base font-semibold mb-1" style={{ color: "var(--navy)" }}>
            {predominante + 1}. {niveles[predominante].nombre}
          </p>
          <p className="text-sm" style={{ color: "var(--ink)" }}>
            {niveles[predominante].recomendacion}
          </p>
        </ResultBox>
      )}
    </div>
  );
}
