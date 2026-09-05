import PageHeader from "@/components/PageHeader";

const checklist = [
  { area: "Consentimiento informado", items: ["Explicar confidencialidad y sus límites", "Firmar consentimiento informado", "Explicar la grabación (si aplica)", "Entregar copia al paciente"] },
  { area: "Motivo de consulta", items: ["¿Qué lo trae hoy aquí?", "¿Desde cuándo ocurre esto?", "¿Qué lo llevó a buscar ayuda ahora?", "¿Ha tenido tratamiento anterior?"] },
  { area: "Historia clínica", items: ["Antecedentes médicos relevantes", "Medicación actual", "Historia familiar de salud mental", "Episodios previos similares"] },
  { area: "Evaluación del riesgo", items: ["Ideación suicida o autolesiva", "Consumo de sustancias", "Red de apoyo social", "Factores protectores"] },
  { area: "Contexto de vida", items: ["Situación laboral/académica", "Relaciones significativas", "Rutina diaria", "Estresores actuales"] },
];

const preguntas = [
  { categoria: "Apertura", preguntas: ["¿Qué lo trajo aquí hoy?", "¿Cómo describiría el problema principal?", "¿Qué espera de este proceso?"] },
  { categoria: "Impacto", preguntas: ["¿Cómo afecta esto a su vida cotidiana?", "¿Qué áreas están más afectadas (trabajo, relaciones, salud)?", "¿Hay algo que ya no puede hacer por este motivo?"] },
  { categoria: "Historia", preguntas: ["¿Cuándo comenzó esto?", "¿Hubo algún detonante o evento que lo precipitó?", "¿Ha habido períodos en que estuvo mejor? ¿Qué cambió?"] },
  { categoria: "Recursos", preguntas: ["¿Qué ha intentado para mejorar?", "¿Qué le ha funcionado, aunque sea parcialmente?", "¿A quién puede recurrir cuando lo necesita?"] },
  { categoria: "Expectativas", preguntas: ["¿Cómo sabría que el tratamiento está funcionando?", "¿Qué cambios espera ver en 2-3 meses?", "¿Tiene alguna duda o preocupación sobre el proceso?"] },
];

const guiones = [
  {
    momento: "Apertura de sesión",
    texto: "Hola, bienvenido/a. Antes de empezar, quiero explicarle cómo funciona esto y responder cualquier pregunta que tenga. El objetivo de hoy es conocernos, entender qué lo trajo aquí y ver si podemos trabajar juntos. ¿Le parece bien si empezamos con eso?",
  },
  {
    momento: "Explicar la TCC",
    texto: "La terapia cognitivo-conductual trabaja con la relación entre lo que pensamos, lo que sentimos y lo que hacemos. La idea es que cuando cambiamos patrones de pensamiento que nos perjudican, también cambian las emociones y las conductas. Es una terapia activa: trabajamos en sesión y también entre sesiones.",
  },
  {
    momento: "Hablar de confidencialidad",
    texto: "Todo lo que hablamos aquí es confidencial. Hay excepciones: si hay riesgo de daño para usted o para otras personas, o si hay una orden judicial. Fuera de eso, nada sale de aquí sin su consentimiento.",
  },
  {
    momento: "Cierre de sesión",
    texto: "Para terminar, quiero resumir lo que entendí hoy y ver si coincide con su visión... ¿Le parece razonable empezar por ahí? Para la próxima sesión, le pido que observe cuándo aparece [el problema] y anote brevemente qué estaba pensando y sintiendo en ese momento.",
  },
];

const instrumentos = [
  { nombre: "PHQ-9", uso: "Depresión", cuando: "Si hay ánimo bajo, anhedonia o quejas somáticas" },
  { nombre: "GAD-7", uso: "Ansiedad generalizada", cuando: "Si hay preocupación excesiva o tensión crónica" },
  { nombre: "BAI", uso: "Ansiedad (síntomas físicos)", cuando: "Si hay quejas somáticas o ataques de pánico" },
  { nombre: "PCL-5", uso: "Trauma / PTSD", cuando: "Si hay historia de eventos traumáticos" },
  { nombre: "BDI-II", uso: "Depresión (más detallado)", cuando: "Si el PHQ-9 sugiere depresión moderada o severa" },
];

export default function SesionCeroPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <PageHeader
        title="Sesión Cero, Sin Improvisar"
        description="Guía completa para la primera sesión: checklist clínico, preguntas clave, guiones sugeridos e instrumentos de evaluación inicial."
        badge="Primera Sesión"
        badgeColor="bg-violet-600"
      />

      {/* Objetivos */}
      <div className="bg-violet-50 border border-violet-200 rounded-2xl p-5 mb-8">
        <h2 className="font-bold text-violet-800 mb-3 flex items-center gap-2">
          <span>🎯</span> Objetivos de la sesión cero
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {["Establecer la alianza terapéutica", "Recoger el motivo de consulta", "Evaluar el riesgo inicial", "Obtener el consentimiento informado", "Explicar el modelo TCC", "Acordar objetivos preliminares"].map((obj) => (
            <div key={obj} className="flex items-start gap-2 text-sm text-violet-900">
              <span className="text-violet-500 mt-0.5 flex-shrink-0">✓</span>
              {obj}
            </div>
          ))}
        </div>
      </div>

      {/* Checklist por áreas */}
      <h2 className="text-xl font-bold text-[#1e3a5f] mb-4">Checklist por áreas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {checklist.map((area) => (
          <div key={area.area} className="bg-white rounded-xl border border-slate-100 shadow-sm p-4">
            <h3 className="font-semibold text-[#1e3a5f] text-sm mb-2">{area.area}</h3>
            <ul className="space-y-1">
              {area.items.map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs text-gray-600">
                  <span className="text-emerald-400 mt-0.5 flex-shrink-0">□</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Preguntas clave */}
      <h2 className="text-xl font-bold text-[#1e3a5f] mb-4">Preguntas clave por categoría</h2>
      <div className="space-y-4 mb-8">
        {preguntas.map((cat) => (
          <div key={cat.categoria} className="bg-white rounded-xl border border-slate-100 shadow-sm p-4">
            <h3 className="font-semibold text-[#1e3a5f] text-sm mb-2 flex items-center gap-1">
              <span className="text-amber-500">❓</span> {cat.categoria}
            </h3>
            <ul className="space-y-1">
              {cat.preguntas.map((p) => (
                <li key={p} className="text-xs text-gray-600 flex items-start gap-2 italic">
                  <span className="text-amber-400 mt-0.5 flex-shrink-0">—</span>
                  &ldquo;{p}&rdquo;
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Guiones */}
      <h2 className="text-xl font-bold text-[#1e3a5f] mb-4">Guiones sugeridos</h2>
      <div className="space-y-4 mb-8">
        {guiones.map((g) => (
          <div key={g.momento} className="bg-teal-50 border border-teal-200 rounded-xl p-4">
            <div className="text-xs font-semibold text-teal-700 uppercase mb-2 flex items-center gap-1">
              <span>💬</span> {g.momento}
            </div>
            <p className="text-sm text-teal-900 leading-relaxed italic">&ldquo;{g.texto}&rdquo;</p>
          </div>
        ))}
      </div>

      {/* Instrumentos */}
      <h2 className="text-xl font-bold text-[#1e3a5f] mb-4">¿Qué instrumento aplicar hoy?</h2>
      <div className="bg-white rounded-xl border border-slate-100 shadow-sm overflow-hidden mb-8">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 border-b border-slate-100">
            <tr>
              <th className="text-left px-4 py-3 text-xs font-semibold text-[#1e3a5f]">Instrumento</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-[#1e3a5f]">Evalúa</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-[#1e3a5f]">Aplicar cuando…</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {instrumentos.map((i) => (
              <tr key={i.nombre}>
                <td className="px-4 py-3 font-medium text-[#1e3a5f]">{i.nombre}</td>
                <td className="px-4 py-3 text-gray-600">{i.uso}</td>
                <td className="px-4 py-3 text-gray-500 text-xs">{i.cuando}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Nota clínica */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
        <div className="text-xs font-semibold text-amber-700 uppercase mb-2 flex items-center gap-1">
          <span>⚠️</span> Nota clínica
        </div>
        <p className="text-sm text-amber-800 leading-relaxed">
          La sesión cero no es solo recolección de datos. Es el momento más importante para construir la alianza terapéutica.
          Equilibre la entrevista estructurada con momentos de escucha genuina. El paciente debe salir sintiéndose comprendido,
          no evaluado.
        </p>
      </div>
    </div>
  );
}
