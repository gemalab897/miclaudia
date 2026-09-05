import PageHeader from "@/components/PageHeader";

const terminos = [
  {
    categoria: "Conceptos centrales",
    color: "bg-blue-50 border-blue-200",
    headerColor: "text-blue-800",
    items: [
      { termino: "Pensamiento automático", definicion: "Pensamientos rápidos, involuntarios que aparecen ante situaciones. No son razonados — simplemente ocurren. Suelen ser negativos y distorsionados en trastornos emocionales.", ejemplo: "\"Seguro que lo arruiné todo\" justo después de cometer un error menor." },
      { termino: "Creencia nuclear", definicion: "Convicción profunda y global sobre uno mismo, los demás o el mundo. Se forma en la infancia y opera de forma silenciosa. Son el núcleo de los esquemas cognitivos.", ejemplo: "\"Soy incompetente\", \"El mundo es peligroso\", \"Los demás no son confiables\"." },
      { termino: "Supuesto intermedio", definicion: "Regla o actitud que conecta las creencias nucleares con los pensamientos automáticos. Suelen tomar la forma de \"si…entonces\" o \"debería\".", ejemplo: "\"Si no soy perfecto, entonces soy un fracaso.\"" },
      { termino: "Distorsión cognitiva", definicion: "Error sistemático en el procesamiento de la información que mantiene los problemas emocionales. No son errores aleatorios — siguen patrones predecibles.", ejemplo: "Catastrofizar: \"Si me rechazan en esta entrevista, nunca conseguiré trabajo.\"" },
      { termino: "Triada cognitiva de Beck", definicion: "Visión negativa simultánea de uno mismo, del mundo y del futuro. Característica central de la depresión según el modelo de Beck.", ejemplo: "\"Soy un inútil (yo), nada funciona (mundo), nunca mejoraré (futuro).\"" },
    ],
  },
  {
    categoria: "Técnicas terapéuticas",
    color: "bg-emerald-50 border-emerald-200",
    headerColor: "text-emerald-800",
    items: [
      { termino: "Reestructuración cognitiva", definicion: "Proceso de identificar, evaluar y modificar pensamientos distorsionados. No se trata de pensar positivo, sino de pensar con mayor precisión y flexibilidad.", ejemplo: "Identificar el pensamiento \"siempre fallo\", buscar evidencia a favor y en contra, y generar una alternativa más equilibrada." },
      { termino: "Activación conductual", definicion: "Técnica que consiste en programar actividades que aumenten el contacto con reforzadores positivos. Especialmente útil en depresión, donde la evitación perpetúa el estado de ánimo bajo.", ejemplo: "Planificar una caminata de 20 minutos cada mañana, independientemente del estado de ánimo." },
      { termino: "Exposición graduada", definicion: "Enfrentamiento sistemático y progresivo a situaciones temidas, sin conductas de seguridad. Permite que el sistema de alarma se habitúe y que se corrijan predicciones catastrofistas.", ejemplo: "Alguien con miedo a hablar en público empieza hablando con una persona, luego con tres, luego en grupos pequeños." },
      { termino: "Experimento conductual", definicion: "Prueba empírica diseñada para contrastar una predicción o creencia. Transforma la terapia en una especie de laboratorio donde el paciente verifica sus suposiciones.", ejemplo: "\"Esta semana voy a saludar a un compañero para comprobar si me ignoran, como creo, o no.\"" },
      { termino: "Diálogo socrático", definicion: "Técnica de preguntas guiadas que ayuda al paciente a examinar la validez de sus pensamientos por sí mismo. El terapeuta no da la respuesta — guía al paciente a descubrirla.", ejemplo: "\"¿Qué evidencia tiene de que eso es así?\", \"¿Qué le diría a un amigo en su situación?\"" },
      { termino: "Resolución de problemas", definicion: "Proceso estructurado para abordar situaciones difíciles: definir el problema, generar soluciones, evaluar consecuencias, elegir e implementar una solución.", ejemplo: "Frente a conflictos en el trabajo, listar todas las opciones posibles antes de actuar impulsivamente." },
    ],
  },
  {
    categoria: "Conceptos del proceso terapéutico",
    color: "bg-amber-50 border-amber-200",
    headerColor: "text-amber-800",
    items: [
      { termino: "Alianza terapéutica", definicion: "Vínculo colaborativo entre terapeuta y paciente, caracterizado por acuerdo en objetivos, tareas y un lazo emocional positivo. Es el predictor más robusto del éxito terapéutico.", ejemplo: "El paciente siente que el terapeuta entiende su problema y que trabajan hacia el mismo objetivo." },
      { termino: "Psicoeducación", definicion: "Enseñar al paciente el modelo explicativo de su problema y cómo funciona la terapia. Aumenta la adherencia y convierte al paciente en agente activo de su propio cambio.", ejemplo: "Explicar el ciclo pensamiento-emoción-conducta con un ejemplo del propio paciente." },
      { termino: "Tarea para casa", definicion: "Actividades realizadas entre sesiones que refuerzan y consolidan lo trabajado en la consulta. Son parte esencial del modelo TCC — el cambio ocurre principalmente fuera de sesión.", ejemplo: "Registrar pensamientos automáticos durante la semana usando el registro de pensamientos." },
      { termino: "Conceptualización del caso", definicion: "Mapa individualizado de cómo se desarrolló y mantiene el problema del paciente. Integra historia, creencias, desencadenantes y patrones de respuesta.", ejemplo: "Entender que el perfeccionismo de María viene de una creencia nuclear de \"no soy suficiente\" aprendida en la infancia." },
      { termino: "Prevención de recaídas", definicion: "Fase final de la terapia donde se anticipa la vuelta de síntomas, se identifican señales de alerta y se ensayan estrategias de afrontamiento para mantener los avances.", ejemplo: "El paciente identifica sus tres señales de alerta tempranas y qué hará si las detecta." },
    ],
  },
  {
    categoria: "Tipos de distorsiones cognitivas",
    color: "bg-rose-50 border-rose-200",
    headerColor: "text-rose-800",
    items: [
      { termino: "Catastrofización", definicion: "Anticipar el peor resultado posible como si fuera probable o inevitable.", ejemplo: "\"Si me equivoco en la presentación, perderé el trabajo y no encontraré otro nunca.\"" },
      { termino: "Lectura del pensamiento", definicion: "Asumir que se sabe lo que otros piensan, generalmente de forma negativa.", ejemplo: "\"Sé que le parezco aburrido aunque no lo diga.\"" },
      { termino: "Sobregeneralización", definicion: "Extraer una conclusión amplia a partir de un único evento negativo.", ejemplo: "\"Me equivoqué hoy — siempre me equivoco en todo.\"" },
      { termino: "Filtro mental", definicion: "Fijarse exclusivamente en los aspectos negativos ignorando los positivos.", ejemplo: "Recibir 9 comentarios positivos y 1 crítico, y rumiar solo sobre la crítica." },
      { termino: "Personalización", definicion: "Atribuirse la responsabilidad de eventos externos negativos sin evidencia.", ejemplo: "\"Si mi hijo tiene problemas en el colegio es culpa mía.\"" },
      { termino: "Pensamiento todo-o-nada", definicion: "Ver las situaciones en términos absolutos, sin término medio.", ejemplo: "\"O soy completamente exitoso o soy un fracasado total.\"" },
    ],
  },
];

export default function GlosarioPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <PageHeader
        title="TCC en Lenguaje Claro"
        description="Glosario clínico de los conceptos esenciales de la terapia cognitivo-conductual, explicados con definiciones precisas y ejemplos clínicos concretos."
        badge="Glosario"
        badgeColor="bg-blue-600"
      />

      <div className="space-y-8">
        {terminos.map((cat) => (
          <div key={cat.categoria}>
            <h2 className="text-lg font-bold text-[#1e3a5f] mb-4">{cat.categoria}</h2>
            <div className="space-y-3">
              {cat.items.map((item) => (
                <div key={item.termino} className={`rounded-xl border p-4 ${cat.color}`}>
                  <h3 className={`font-bold text-sm mb-1 ${cat.headerColor}`}>{item.termino}</h3>
                  <p className="text-sm text-gray-700 leading-relaxed mb-2">{item.definicion}</p>
                  <div className="bg-white/60 rounded-lg px-3 py-2">
                    <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Ejemplo: </span>
                    <span className="text-xs text-gray-600 italic">{item.ejemplo}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
