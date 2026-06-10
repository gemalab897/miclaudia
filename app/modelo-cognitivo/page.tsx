import PageHeader from "@/components/PageHeader";

const distorsiones = [
  {
    nombre: "Pensamiento todo-o-nada",
    descripcion: "Ver las situaciones en categorías absolutas, blanco o negro, sin matices ni grados intermedios.",
    ejemplo: '"Si no soy perfecto, soy un completo fracasado."',
    alternativa: "Las situaciones tienen grados. Un error no invalida el conjunto.",
  },
  {
    nombre: "Catastrofización",
    descripcion: "Anticipar el peor resultado posible y tratarlo como si fuera inevitable o insoportable.",
    ejemplo: '"Si me tiembla la voz, me hundiré completamente y perderé mi trabajo."',
    alternativa: "¿Cuál es la probabilidad real? ¿Lo podría manejar si ocurriera?",
  },
  {
    nombre: "Generalización excesiva",
    descripcion: "Sacar una conclusión general a partir de un único evento negativo.",
    ejemplo: '"Siempre lo arruino todo." (después de un error puntual).',
    alternativa: "Un evento específico no define un patrón universal.",
  },
  {
    nombre: "Filtraje mental",
    descripcion: "Enfocarse exclusivamente en los detalles negativos e ignorar los positivos.",
    ejemplo: '"La presentación fue un desastre" (aunque el 90% salió bien).',
    alternativa: "Buscar activamente los aspectos positivos del conjunto.",
  },
  {
    nombre: "Descalificación de lo positivo",
    descripcion: "Rechazar las experiencias positivas insistiendo en que 'no cuentan por alguna razón'.",
    ejemplo: '"Me felicitaron solo por suerte, no porque lo hiciera bien."',
    alternativa: "Los éxitos son tan reales como los fracasos.",
  },
  {
    nombre: "Lectura mental",
    descripcion: "Asumir que sabes lo que otros piensan sin evidencia real.",
    ejemplo: '"Sé que están pensando que soy incompetente."',
    alternativa: "¿Tienes evidencia real? ¿Podrías preguntar directamente?",
  },
  {
    nombre: "Predicción del futuro",
    descripcion: "Anticipar que las cosas saldrán mal y tratar la predicción como un hecho.",
    ejemplo: '"Sé que no conseguiré el trabajo." (antes de la entrevista).',
    alternativa: "El futuro no está escrito. ¿Cuáles son todas las posibilidades?",
  },
  {
    nombre: "Magnificación/Minimización",
    descripcion: "Exagerar la importancia de los problemas y minimizar los puntos positivos.",
    ejemplo: '"Mi éxito fue una casualidad, pero mi error fue terrible."',
    alternativa: "Usar el mismo rasero para evaluar logros y errores.",
  },
  {
    nombre: "Razonamiento emocional",
    descripcion: "Asumir que las emociones reflejan la realidad objetiva.",
    ejemplo: '"Me siento estúpido, por lo tanto soy estúpido."',
    alternativa: "Las emociones no son hechos. Pueden estar distorsionadas.",
  },
  {
    nombre: 'Afirmaciones "debería"',
    descripcion: "Tener reglas rígidas e inflexibles sobre cómo uno y los demás deben comportarse.",
    ejemplo: '"Debería poder manejarlo solo sin ayuda."',
    alternativa: "Cambiar 'debería' por 'preferiría' o 'sería útil que...'",
  },
  {
    nombre: "Etiquetado",
    descripcion: "Poner etiquetas globales negativas a uno mismo o a los demás.",
    ejemplo: '"Soy un idiota" en lugar de "Cometí un error en este caso".',
    alternativa: "Describir conductas específicas, no etiquetar a la persona.",
  },
  {
    nombre: "Personalización",
    descripcion: "Atribuirse la responsabilidad de eventos negativos externos.",
    ejemplo: '"Mi hijo salió mal porque yo fallé como madre."',
    alternativa: "¿Qué otros factores contribuyeron? ¿Es realista asumir toda la responsabilidad?",
  },
];

const componentesCiclo = [
  {
    titulo: "SITUACIÓN",
    descripcion: "El evento externo o interno que desencadena el proceso",
    ejemplos: ["Recibir un email del jefe", "Notar un síntoma físico", "Ver a alguien exitoso", "Recordar una situación difícil"],
    color: "bg-slate-100 border-slate-300",
    icon: "🌐",
  },
  {
    titulo: "PENSAMIENTO",
    descripcion: "La interpretación o evaluación de la situación (automática o deliberada)",
    ejemplos: ['"Me despedirán"', '"Algo va mal en mi cuerpo"', '"Yo nunca lograré eso"', '"Fui un fracasado"'],
    color: "bg-blue-50 border-blue-300",
    icon: "💭",
  },
  {
    titulo: "EMOCIÓN",
    descripcion: "La respuesta emocional generada por el pensamiento",
    ejemplos: ["Ansiedad", "Miedo", "Envidia/tristeza", "Culpa/vergüenza"],
    color: "bg-amber-50 border-amber-300",
    icon: "❤️",
  },
  {
    titulo: "CONDUCTA",
    descripcion: "Lo que hacemos (o dejamos de hacer) como respuesta",
    ejemplos: ["Revisar el email 20 veces", "Ir a urgencias", "Aislarse", "Rumiar y no actuar"],
    color: "bg-emerald-50 border-emerald-300",
    icon: "🎯",
  },
  {
    titulo: "CONSECUENCIAS",
    descripcion: "Los resultados de la conducta que retroalimentan el ciclo",
    ejemplos: ["Más ansiedad por la espera", "Más hipervigilancia", "Más soledad y depresión", "La situación no cambia"],
    color: "bg-rose-50 border-rose-300",
    icon: "🔄",
  },
];

const triadaBeck = [
  {
    aspecto: "Visión negativa de UNO MISMO",
    descripcion: "El individuo se ve a sí mismo como defectuoso, inadecuado, inútil o indeseable.",
    ejemplos: ['"Soy un fracasado"', '"No sirvo para nada"', '"Soy una carga para todos"'],
    color: "border-blue-400",
  },
  {
    aspecto: "Visión negativa del MUNDO/EXPERIENCIAS",
    descripcion: "Las interacciones con el mundo se interpretan como derrotas, privaciones o humillaciones.",
    ejemplos: ['"El mundo es injusto"', '"Las cosas nunca salen bien"', '"Nadie me apoya"'],
    color: "border-amber-400",
  },
  {
    aspecto: "Visión negativa del FUTURO",
    descripcion: "Al pensar en el futuro, el individuo anticipa continuas dificultades, privaciones y fracasos.",
    ejemplos: ['"Nunca voy a mejorar"', '"No tiene sentido intentarlo"', '"Las cosas siempre irán a peor"'],
    color: "border-rose-400",
  },
];

export default function ModeloCognitivoPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <PageHeader
        title="Modelo Cognitivo TCC"
        description="La base teórica de la Terapia Cognitivo-Conductual: cómo pensamientos, emociones y conductas se interrelacionan y se mantienen mutuamente."
        badge="Fundamentos"
      />

      {/* El ciclo TCC */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-[#1e3a5f] mb-2">El Ciclo Pensamiento-Emoción-Conducta</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          En la TCC, el elemento central no es la situación en sí, sino cómo la interpretamos. La misma situación puede generar respuestas emocionales muy diferentes en distintas personas dependiendo de sus pensamientos automáticos.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {componentesCiclo.map((comp, i) => (
            <div key={comp.titulo} className={`rounded-xl border-2 p-4 ${comp.color} relative`}>
              {i < componentesCiclo.length - 1 && (
                <div className="hidden lg:block absolute -right-5 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl z-10">
                  →
                </div>
              )}
              <div className="text-2xl mb-2">{comp.icon}</div>
              <h3 className="font-bold text-sm text-[#1e3a5f] mb-2">{comp.titulo}</h3>
              <p className="text-xs text-gray-600 mb-2 leading-relaxed">{comp.descripcion}</p>
              <ul className="space-y-1">
                {comp.ejemplos.map((ej) => (
                  <li key={ej} className="text-xs text-gray-500 italic">
                    {ej}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-4 bg-[#1e3a5f]/5 rounded-xl p-4 border border-[#1e3a5f]/20">
          <p className="text-sm text-[#1e3a5f] leading-relaxed">
            <strong>Principio fundamental:</strong> La TCC no cambia las situaciones (a menudo imposible), sino la interpretación de esas situaciones. Al cambiar el pensamiento, cambia la emoción, y al cambiar la emoción, se modifican las conductas. Esto rompe el ciclo de mantenimiento del problema.
          </p>
        </div>
      </section>

      {/* Tríada de Beck */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-[#1e3a5f] mb-2">La Tríada Cognitiva de Beck (Depresión)</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Aaron Beck identificó en 1979 que las personas con depresión presentan sistemáticamente una visión negativa en tres áreas. Estas tres visiones se refuerzan mutuamente y generan el círculo vicioso de la depresión.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {triadaBeck.map((item) => (
            <div key={item.aspecto} className={`bg-white rounded-xl border-l-4 ${item.color} p-5 shadow-sm`}>
              <h3 className="font-bold text-[#1e3a5f] text-sm mb-3 leading-tight">{item.aspecto}</h3>
              <p className="text-gray-600 text-sm mb-3 leading-relaxed">{item.descripcion}</p>
              <div className="space-y-1">
                {item.ejemplos.map((ej) => (
                  <div key={ej} className="text-xs italic text-gray-500 bg-slate-50 rounded px-2 py-1">
                    {ej}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Niveles de cognición */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-[#1e3a5f] mb-2">Los Tres Niveles de Cognición</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          La TCC organiza los procesos cognitivos en tres niveles de profundidad, cada uno con diferentes características y estrategias de intervención.
        </p>
        <div className="space-y-4">
          {[
            {
              nivel: "Nivel 1",
              nombre: "Pensamientos automáticos",
              descripcion: "Pensamientos espontáneos, rápidos y a menudo inconscientes que ocurren en respuesta a situaciones específicas. Son el 'diálogo interno' inmediato.",
              caracteristicas: ["Automáticos e involuntarios", "Específicos a situaciones concretas", "Percibidos como plausibles y creíbles", "Pueden ser verbales o en forma de imágenes"],
              intervencion: "Registro de pensamientos, preguntas socráticas, examen de evidencia",
              color: "bg-blue-50 border-blue-200",
              textColor: "text-blue-700",
            },
            {
              nivel: "Nivel 2",
              nombre: "Supuestos y reglas disfuncionales",
              descripcion: "Creencias condicionales del tipo 'Si... entonces...' o reglas rígidas sobre cómo deberían ser las cosas. Son más profundas y generales que los pensamientos automáticos.",
              caracteristicas: ["Condicionales ('si soy amable, me querrán')", "Reglas rígidas ('debo ser perfecto')", "Actitudes inflexibles sobre el mundo", "Menos accesibles que los pensamientos automáticos"],
              intervencion: "Análisis de ventajas/inconvenientes, cuestionamiento de reglas, técnicas de flecha descendente",
              color: "bg-amber-50 border-amber-200",
              textColor: "text-amber-700",
            },
            {
              nivel: "Nivel 3",
              nombre: "Creencias nucleares",
              descripcion: "Creencias profundas, globales y absolutas sobre uno mismo, los demás y el mundo. Son el núcleo del sistema cognitivo y se forman tempranamente en la vida.",
              caracteristicas: ["Globales y absolutas ('soy inútil')", "Resistentes al cambio", "Formadas en la infancia/adolescencia", "Se activan en situaciones de estrés"],
              intervencion: "Técnicas históricas, revisión de evidencia acumulada, creencias nucleares alternativas, trabajo en valores",
              color: "bg-rose-50 border-rose-200",
              textColor: "text-rose-700",
            },
          ].map((nivel) => (
            <div key={nivel.nivel} className={`rounded-xl border p-5 ${nivel.color}`}>
              <div className="flex items-start gap-4">
                <div className={`flex-shrink-0 font-bold text-xs px-2 py-1 rounded-full border ${nivel.color} ${nivel.textColor}`}>
                  {nivel.nivel}
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-[#1e3a5f] mb-1">{nivel.nombre}</h3>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">{nivel.descripcion}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <div className="text-xs font-semibold text-gray-500 uppercase mb-1">Características</div>
                      <ul className="space-y-1">
                        {nivel.caracteristicas.map((c) => (
                          <li key={c} className="text-xs text-gray-600 flex items-start gap-1">
                            <span className="text-[#10b981] mt-0.5">•</span>
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-gray-500 uppercase mb-1">Intervención TCC</div>
                      <p className="text-xs text-gray-600 leading-relaxed">{nivel.intervencion}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Distorsiones Cognitivas */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-[#1e3a5f] mb-2">Distorsiones Cognitivas</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Las distorsiones cognitivas son patrones sistemáticos de pensamiento inexacto o sesgado que contribuyen al malestar emocional. No son 'fallos' de la persona sino hábitos mentales aprendidos que se pueden modificar.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {distorsiones.map((d) => (
            <div key={d.nombre} className="bg-white rounded-xl border border-slate-100 p-4 shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-semibold text-[#1e3a5f] mb-1">{d.nombre}</h3>
              <p className="text-gray-600 text-sm mb-2 leading-relaxed">{d.descripcion}</p>
              <div className="bg-red-50 rounded-lg px-3 py-2 mb-2">
                <span className="text-xs font-semibold text-red-600 uppercase">Ejemplo: </span>
                <span className="text-xs text-red-700 italic">{d.ejemplo}</span>
              </div>
              <div className="bg-emerald-50 rounded-lg px-3 py-2">
                <span className="text-xs font-semibold text-emerald-600 uppercase">Alternativa: </span>
                <span className="text-xs text-emerald-700">{d.alternativa}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modelo ABC */}
      <section className="mb-12">
        <h2 className="text-xl font-bold text-[#1e3a5f] mb-2">Modelo ABC de Ellis</h2>
        <p className="text-gray-600 mb-6 leading-relaxed">
          Albert Ellis (1955) desarrolló el modelo ABC para explicar el origen del malestar emocional. La clave es que no son los eventos (A) los que causan las consecuencias emocionales (C), sino las creencias (B) sobre esos eventos.
        </p>
        <div className="bg-white rounded-xl border border-slate-100 p-6 shadow-sm">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            {[
              { letra: "A", nombre: "Activating event", desc: "El evento activador: la situación, hecho o experiencia que desencadena el proceso.", ej: "El jefe me llama a su despacho inesperadamente.", color: "bg-blue-600" },
              { letra: "B", nombre: "Beliefs", desc: "Las creencias sobre el evento: las interpretaciones, evaluaciones y significados que damos al evento.", ej: '"Me va a echar. He cometido algún error grave."', color: "bg-amber-500" },
              { letra: "C", nombre: "Consequences", desc: "Las consecuencias emocionales y conductuales de las creencias (NO del evento).", ej: "Ansiedad intensa, dificultad para concentrarse, pensamientos catastróficos.", color: "bg-rose-500" },
              { letra: "D", nombre: "Disputation", desc: "El debate de las creencias irracionales: cuestionarlas con evidencia, lógica y utilidad.", ej: '"¿Qué evidencia tengo? ¿Podría tener otra razón para llamarme?"', color: "bg-emerald-500" },
              { letra: "E", nombre: "Effect", desc: "El efecto del debate: nuevas creencias más racionales y consecuencias emocionales más adaptativas.", ej: "Curiosidad moderada, ansiedad controlada, respuesta flexible.", color: "bg-purple-500" },
            ].map((item) => (
              <div key={item.letra} className="flex-1">
                <div className={`w-10 h-10 ${item.color} text-white rounded-full flex items-center justify-center font-bold text-xl mb-3`}>
                  {item.letra}
                </div>
                <div className="font-semibold text-[#1e3a5f] text-sm mb-1">{item.nombre}</div>
                <p className="text-xs text-gray-600 leading-relaxed mb-2">{item.desc}</p>
                <div className="bg-slate-50 rounded-lg p-2 text-xs text-gray-500 italic">{item.ej}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
