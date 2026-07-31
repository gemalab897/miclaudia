export interface CampoFicha {
  id: string;
  label: string;
  tipo: "texto" | "textarea" | "numero" | "select" | "checkbox" | "tabla";
  placeholder?: string;
  opciones?: string[];
  columnas?: string[];
  filas?: number;
  min?: number;
  max?: number;
}

export interface Ficha {
  id: string;
  titulo: string;
  descripcion: string;
  instrucciones: string;
  categoria: string;
  campos: CampoFicha[];
  notaClinica?: string;
}

export const fichas: Ficha[] = [
  {
    id: "registro-pensamientos",
    titulo: "Registro de Pensamientos Automáticos",
    descripcion:
      "Formulario de 6 columnas para identificar y reestructurar pensamientos automáticos disfuncionales.",
    instrucciones:
      "Completa este registro cada vez que experimentes una emoción intensa o perturbadora. Describe la situación, identifica la emoción y el pensamiento automático, luego evalúa la evidencia y genera un pensamiento más equilibrado.",
    categoria: "Reestructuración Cognitiva",
    campos: [
      {
        id: "fecha",
        label: "Fecha y hora",
        tipo: "texto",
        placeholder: "ej. 10/06/2025 - 15:30",
      },
      {
        id: "situacion",
        label: "Situación",
        tipo: "textarea",
        placeholder:
          "¿Dónde estabas? ¿Qué estaba pasando? ¿Con quién? Describe el evento o pensamiento que desencadenó la emoción.",
        filas: 3,
      },
      {
        id: "emociones",
        label: "Emoción(es) y su intensidad (0-100%)",
        tipo: "textarea",
        placeholder:
          "ej. Ansiedad 80%, Tristeza 50%, Vergüenza 60%\nEspecifica cada emoción y califica su intensidad.",
        filas: 3,
      },
      {
        id: "pensamiento_automatico",
        label: "Pensamiento automático",
        tipo: "textarea",
        placeholder:
          "¿Qué pasó exactamente por tu mente? ¿Qué imagen tuviste? Escribe el pensamiento más angustiante. ¿Cuánto crees en este pensamiento? (0-100%)",
        filas: 4,
      },
      {
        id: "evidencia_favor",
        label: "Evidencia a FAVOR del pensamiento",
        tipo: "textarea",
        placeholder:
          "¿Qué hechos objetivos apoyan este pensamiento? (No incluir interpretaciones ni predicciones, solo hechos verificables)",
        filas: 4,
      },
      {
        id: "evidencia_contra",
        label: "Evidencia en CONTRA del pensamiento",
        tipo: "textarea",
        placeholder:
          "¿Qué hechos contradicen este pensamiento? ¿Qué le dirías a un amigo en esta situación? ¿Hay otra explicación posible?",
        filas: 4,
      },
      {
        id: "pensamiento_alternativo",
        label: "Pensamiento alternativo equilibrado",
        tipo: "textarea",
        placeholder:
          "Escribe un pensamiento más realista y equilibrado basado en TODA la evidencia. ¿Cuánto crees en este pensamiento alternativo? (0-100%)",
        filas: 4,
      },
      {
        id: "resultado",
        label: "Resultado: intensidad de emociones ahora (0-100%)",
        tipo: "textarea",
        placeholder:
          "Vuelve a calificar las emociones del paso 2 después del ejercicio.\nej. Ansiedad 45%, Tristeza 30%",
        filas: 3,
      },
    ],
    notaClinica:
      "Indicar al paciente que complete el registro lo más cerca posible al evento, cuando la emoción aún está fresca. La columna de 'pensamiento alternativo' NO es pensar positivo sino pensar de forma más realista.",
  },
  {
    id: "diario-estado-animo",
    titulo: "Diario de Estado de Ánimo Diario",
    descripcion:
      "Registro diario del estado de ánimo a lo largo del día para identificar patrones y correlacionar con actividades y pensamientos.",
    instrucciones:
      "Registra tu estado de ánimo en los tres momentos del día (mañana, tarde, noche) usando una escala del 1 (muy bajo) al 10 (excelente). Anota brevemente las actividades principales y cualquier pensamiento o situación relevante.",
    categoria: "Activación Conductual",
    campos: [
      {
        id: "fecha",
        label: "Fecha",
        tipo: "texto",
        placeholder: "ej. 10/06/2025",
      },
      {
        id: "estado_manana",
        label: "Estado de ánimo - Mañana (1-10)",
        tipo: "numero",
        min: 1,
        max: 10,
        placeholder: "1-10",
      },
      {
        id: "actividades_manana",
        label: "Actividades de la mañana",
        tipo: "textarea",
        placeholder: "¿Qué hiciste esta mañana?",
        filas: 2,
      },
      {
        id: "estado_tarde",
        label: "Estado de ánimo - Tarde (1-10)",
        tipo: "numero",
        min: 1,
        max: 10,
        placeholder: "1-10",
      },
      {
        id: "actividades_tarde",
        label: "Actividades de la tarde",
        tipo: "textarea",
        placeholder: "¿Qué hiciste esta tarde?",
        filas: 2,
      },
      {
        id: "estado_noche",
        label: "Estado de ánimo - Noche (1-10)",
        tipo: "numero",
        min: 1,
        max: 10,
        placeholder: "1-10",
      },
      {
        id: "actividades_noche",
        label: "Actividades de la noche",
        tipo: "textarea",
        placeholder: "¿Qué hiciste esta noche?",
        filas: 2,
      },
      {
        id: "pensamiento_destacado",
        label: "Pensamiento o situación destacada del día",
        tipo: "textarea",
        placeholder: "¿Hubo algún momento especialmente positivo o difícil? ¿Qué pensaste?",
        filas: 3,
      },
      {
        id: "nivel_ansiedad",
        label: "Nivel de ansiedad general del día (0-10)",
        tipo: "numero",
        min: 0,
        max: 10,
        placeholder: "0-10",
      },
      {
        id: "sueno",
        label: "Horas de sueño la noche anterior",
        tipo: "numero",
        min: 0,
        max: 24,
        placeholder: "horas",
      },
      {
        id: "notas",
        label: "Notas adicionales",
        tipo: "textarea",
        placeholder: "Cualquier otra observación relevante",
        filas: 2,
      },
    ],
    notaClinica:
      "Revisar este diario al inicio de cada sesión. Buscar patrones: ¿qué actividades correlacionan con mejor estado de ánimo? ¿Hay días de la semana especialmente difíciles? ¿Cómo se relaciona el sueño con el estado de ánimo?",
  },
  {
    id: "actividades-agradables",
    titulo: "Lista de Actividades Agradables",
    descripcion:
      "Inventario de actividades que generan placer, satisfacción o sensación de logro. Base para la planificación en activación conductual.",
    instrucciones:
      "Marca las actividades que disfrutas o que en algún momento disfrutaste. Puedes añadir actividades propias. Luego indica con qué frecuencia las realizas actualmente (0=nunca, 1=rara vez, 2=a veces, 3=frecuentemente).",
    categoria: "Activación Conductual",
    campos: [
      {
        id: "actividades_sociales",
        label: "Actividades sociales",
        tipo: "textarea",
        placeholder:
          "Ejemplos: hablar con amigos, quedar para cenar, llamar a familia, reuniones sociales, actividades en grupo...\n\nEscribe las que aplican para ti y añade las tuyas:",
        filas: 4,
      },
      {
        id: "actividades_fisicas",
        label: "Actividades físicas",
        tipo: "textarea",
        placeholder:
          "Ejemplos: caminar, correr, bicicleta, natación, yoga, bailar, fútbol, tenis, senderismo...\n\nEscribe las que aplican para ti:",
        filas: 4,
      },
      {
        id: "actividades_creativas",
        label: "Actividades creativas / hobbies",
        tipo: "textarea",
        placeholder:
          "Ejemplos: pintar, escribir, tocar música, cocinar, fotografía, jardinería, manualidades, lectura...\n\nEscribe las que aplican para ti:",
        filas: 4,
      },
      {
        id: "actividades_cuidado",
        label: "Actividades de autocuidado",
        tipo: "textarea",
        placeholder:
          "Ejemplos: ducha larga, baño relajante, meditación, masaje, cuidado de la piel, descanso sin culpa...\n\nEscribe las que aplican para ti:",
        filas: 3,
      },
      {
        id: "actividades_logro",
        label: "Actividades de logro / productividad",
        tipo: "textarea",
        placeholder:
          "Ejemplos: completar una tarea pendiente, ordenar la casa, aprender algo nuevo, terminar un proyecto...\n\nEscribe las que aplican para ti:",
        filas: 3,
      },
      {
        id: "otras_actividades",
        label: "Otras actividades que disfruto",
        tipo: "textarea",
        placeholder: "Añade aquí cualquier actividad que no aparezca arriba",
        filas: 3,
      },
      {
        id: "actividad_prioritaria",
        label: "Top 5: Las 5 actividades que quiero incorporar esta semana",
        tipo: "textarea",
        placeholder:
          "1.\n2.\n3.\n4.\n5.",
        filas: 6,
      },
    ],
    notaClinica:
      "Usar esta lista para construir el Plan de Activación Conductual. Pedir al paciente que señale actividades con alta probabilidad de placer y bajo coste de ejecución para comenzar.",
  },
  {
    id: "jerarquia-exposicion",
    titulo: "Jerarquía de Exposición",
    descripcion:
      "Listado ordenado de situaciones temidas con su nivel de ansiedad (SUDS), base para el programa de exposición graduada.",
    instrucciones:
      "Lista todas las situaciones, lugares u objetos que evitas o que te generan ansiedad. Para cada uno, asigna un nivel SUDS (Subjective Units of Distress Scale) del 0 al 100 (0=sin ansiedad, 100=máxima ansiedad). Luego ordénalos de menor a mayor SUDS.",
    categoria: "Exposición",
    campos: [
      {
        id: "estimulo_temido",
        label: "¿Cuál es el estímulo, situación o tema que genera la ansiedad?",
        tipo: "textarea",
        placeholder:
          "Describe brevemente el foco del miedo (ej. hablar en público, espacios cerrados, contaminación, etc.)",
        filas: 2,
      },
      {
        id: "item_1",
        label: "Ítem 1 - Situación (SUDS más bajo)",
        tipo: "texto",
        placeholder: "Descripción de la situación",
      },
      {
        id: "suds_1",
        label: "SUDS ítem 1 (0-100)",
        tipo: "numero",
        min: 0,
        max: 100,
        placeholder: "0-100",
      },
      {
        id: "item_2",
        label: "Ítem 2 - Situación",
        tipo: "texto",
        placeholder: "Descripción de la situación",
      },
      {
        id: "suds_2",
        label: "SUDS ítem 2 (0-100)",
        tipo: "numero",
        min: 0,
        max: 100,
        placeholder: "0-100",
      },
      {
        id: "item_3",
        label: "Ítem 3 - Situación",
        tipo: "texto",
        placeholder: "Descripción de la situación",
      },
      {
        id: "suds_3",
        label: "SUDS ítem 3 (0-100)",
        tipo: "numero",
        min: 0,
        max: 100,
        placeholder: "0-100",
      },
      {
        id: "item_4",
        label: "Ítem 4 - Situación",
        tipo: "texto",
        placeholder: "Descripción de la situación",
      },
      {
        id: "suds_4",
        label: "SUDS ítem 4 (0-100)",
        tipo: "numero",
        min: 0,
        max: 100,
        placeholder: "0-100",
      },
      {
        id: "item_5",
        label: "Ítem 5 - Situación",
        tipo: "texto",
        placeholder: "Descripción de la situación",
      },
      {
        id: "suds_5",
        label: "SUDS ítem 5 (0-100)",
        tipo: "numero",
        min: 0,
        max: 100,
        placeholder: "0-100",
      },
      {
        id: "item_6",
        label: "Ítem 6 - Situación",
        tipo: "texto",
        placeholder: "Descripción de la situación",
      },
      {
        id: "suds_6",
        label: "SUDS ítem 6 (0-100)",
        tipo: "numero",
        min: 0,
        max: 100,
        placeholder: "0-100",
      },
      {
        id: "item_7",
        label: "Ítem 7 - Situación (SUDS más alto)",
        tipo: "texto",
        placeholder: "Descripción de la situación más temida",
      },
      {
        id: "suds_7",
        label: "SUDS ítem 7 (0-100)",
        tipo: "numero",
        min: 0,
        max: 100,
        placeholder: "0-100",
      },
      {
        id: "conductas_seguridad",
        label: "Conductas de seguridad habituales a eliminar",
        tipo: "textarea",
        placeholder:
          "¿Qué haces para reducir la ansiedad en estas situaciones? (ej. llevar medicación encima, ir acompañado, buscar salidas, etc.)",
        filas: 3,
      },
      {
        id: "objetivo",
        label: "Objetivo final de la exposición",
        tipo: "textarea",
        placeholder: "¿Qué quieres poder hacer al terminar el programa de exposición?",
        filas: 2,
      },
    ],
    notaClinica:
      "Asegurarse de tener ítems distribuidos en todos los rangos del SUDS (20-40, 40-60, 60-80, 80-100). Si faltan ítems en algún rango, explorar variantes de las situaciones ya listadas.",
  },
  {
    id: "plan-activacion",
    titulo: "Plan de Activación Conductual Semanal",
    descripcion:
      "Planificación semanal de actividades agradables y de logro para pacientes con depresión.",
    instrucciones:
      "Planifica las actividades para cada día de la semana. Incluye al menos una actividad agradable y una actividad de logro cada día. Sé específico: indica qué, cuándo y dónde. Al final de cada día, evalúa cuántas realizaste (círculo si se hizo, X si no).",
    categoria: "Activación Conductual",
    campos: [
      {
        id: "semana",
        label: "Semana del",
        tipo: "texto",
        placeholder: "ej. 10/06/2025 al 16/06/2025",
      },
      {
        id: "lunes",
        label: "LUNES - Actividades planificadas",
        tipo: "textarea",
        placeholder: "Mañana: \nTarde: \nNoche: ",
        filas: 4,
      },
      {
        id: "lunes_realizado",
        label: "Lunes - ¿Qué se realizó realmente?",
        tipo: "textarea",
        placeholder: "Escribe aquí qué actividades hiciste y estado de ánimo (1-10)",
        filas: 2,
      },
      {
        id: "martes",
        label: "MARTES - Actividades planificadas",
        tipo: "textarea",
        placeholder: "Mañana: \nTarde: \nNoche: ",
        filas: 4,
      },
      {
        id: "martes_realizado",
        label: "Martes - ¿Qué se realizó realmente?",
        tipo: "textarea",
        placeholder: "Escribe aquí qué actividades hiciste y estado de ánimo (1-10)",
        filas: 2,
      },
      {
        id: "miercoles",
        label: "MIÉRCOLES - Actividades planificadas",
        tipo: "textarea",
        placeholder: "Mañana: \nTarde: \nNoche: ",
        filas: 4,
      },
      {
        id: "miercoles_realizado",
        label: "Miércoles - ¿Qué se realizó realmente?",
        tipo: "textarea",
        placeholder: "Escribe aquí qué actividades hiciste y estado de ánimo (1-10)",
        filas: 2,
      },
      {
        id: "jueves",
        label: "JUEVES - Actividades planificadas",
        tipo: "textarea",
        placeholder: "Mañana: \nTarde: \nNoche: ",
        filas: 4,
      },
      {
        id: "jueves_realizado",
        label: "Jueves - ¿Qué se realizó realmente?",
        tipo: "textarea",
        placeholder: "Escribe aquí qué actividades hiciste y estado de ánimo (1-10)",
        filas: 2,
      },
      {
        id: "viernes",
        label: "VIERNES - Actividades planificadas",
        tipo: "textarea",
        placeholder: "Mañana: \nTarde: \nNoche: ",
        filas: 4,
      },
      {
        id: "viernes_realizado",
        label: "Viernes - ¿Qué se realizó realmente?",
        tipo: "textarea",
        placeholder: "Escribe aquí qué actividades hiciste y estado de ánimo (1-10)",
        filas: 2,
      },
      {
        id: "sabado",
        label: "SÁBADO - Actividades planificadas",
        tipo: "textarea",
        placeholder: "Mañana: \nTarde: \nNoche: ",
        filas: 4,
      },
      {
        id: "domingo",
        label: "DOMINGO - Actividades planificadas",
        tipo: "textarea",
        placeholder: "Mañana: \nTarde: \nNoche: ",
        filas: 4,
      },
      {
        id: "balance",
        label: "Balance semanal: reflexión y aprendizajes",
        tipo: "textarea",
        placeholder:
          "¿Qué actividades te hicieron sentir mejor? ¿Qué fue difícil? ¿Qué harías diferente la próxima semana?",
        filas: 4,
      },
    ],
    notaClinica:
      "Revisar en cada sesión. Reforzar el esfuerzo más que el resultado. Si no se completaron actividades, explorar barreras cognitivas y conductuales sin juzgar.",
  },
  {
    id: "distorsiones-cognitivas",
    titulo: "Registro de Distorsiones Cognitivas",
    descripcion:
      "Identificación y análisis de los patrones de pensamiento distorsionado más comunes en la TCC.",
    instrucciones:
      "Lee cada distorsión cognitiva y su descripción. Luego escribe un ejemplo personal de cuándo has tenido ese tipo de pensamiento y el pensamiento alternativo más equilibrado.",
    categoria: "Reestructuración Cognitiva",
    campos: [
      {
        id: "pensamiento_todo_nada",
        label: "1. Pensamiento todo-o-nada (blanco/negro)\nEjemplo de pensamiento propio:",
        tipo: "textarea",
        placeholder:
          "Descripción: Ver las cosas en categorías absolutas, sin matices.\n\nEj: 'Si no soy perfecto, soy un fracasado'\n\nMi ejemplo personal:",
        filas: 3,
      },
      {
        id: "catastrofizacion",
        label: "2. Catastrofización\nEjemplo de pensamiento propio:",
        tipo: "textarea",
        placeholder:
          "Descripción: Anticipar que ocurrirá lo peor posible.\n\nEj: 'Si me tiembla la voz, todos pensarán que soy incompetente y perderé mi trabajo'\n\nMi ejemplo personal:",
        filas: 3,
      },
      {
        id: "generalizacion",
        label: "3. Generalización excesiva\nEjemplo de pensamiento propio:",
        tipo: "textarea",
        placeholder:
          "Descripción: Sacar conclusiones generales de un solo evento negativo.\n\nEj: 'Siempre lo arruino todo'\n\nMi ejemplo personal:",
        filas: 3,
      },
      {
        id: "lectura_mental",
        label: "4. Lectura mental\nEjemplo de pensamiento propio:",
        tipo: "textarea",
        placeholder:
          "Descripción: Asumir que sabes lo que otros piensan sin evidencia.\n\nEj: 'Sé que piensa que soy aburrido'\n\nMi ejemplo personal:",
        filas: 3,
      },
      {
        id: "personalizacion",
        label: "5. Personalización\nEjemplo de pensamiento propio:",
        tipo: "textarea",
        placeholder:
          "Descripción: Atribuirse responsabilidad excesiva por eventos negativos externos.\n\nEj: 'Mi hijo salió mal porque yo fallé como madre'\n\nMi ejemplo personal:",
        filas: 3,
      },
      {
        id: "filtraje",
        label: "6. Filtraje mental (abstracción selectiva)\nEjemplo de pensamiento propio:",
        tipo: "textarea",
        placeholder:
          "Descripción: Enfocarse solo en los aspectos negativos ignorando los positivos.\n\nEj: 'La presentación fue un desastre' (aunque el 90% salió bien)\n\nMi ejemplo personal:",
        filas: 3,
      },
      {
        id: "descalificacion",
        label: "7. Descalificación de lo positivo\nEjemplo de pensamiento propio:",
        tipo: "textarea",
        placeholder:
          "Descripción: Rechazar las experiencias positivas insistiendo en que 'no cuentan'.\n\nEj: 'Me felicitaron por suerte, no porque lo hiciera bien'\n\nMi ejemplo personal:",
        filas: 3,
      },
      {
        id: "etiquetado",
        label: "8. Etiquetado\nEjemplo de pensamiento propio:",
        tipo: "textarea",
        placeholder:
          "Descripción: Poner etiquetas globales negativas en lugar de describir el error.\n\nEj: 'Soy un idiota' en lugar de 'Cometí un error'\n\nMi ejemplo personal:",
        filas: 3,
      },
      {
        id: "deberia",
        label: "9. Afirmaciones 'debería'\nEjemplo de pensamiento propio:",
        tipo: "textarea",
        placeholder:
          "Descripción: Tener reglas rígidas sobre cómo uno mismo o los demás deben ser.\n\nEj: 'Debería ser capaz de manejarlo sin ayuda'\n\nMi ejemplo personal:",
        filas: 3,
      },
    ],
    notaClinica:
      "No dar la lista al paciente sin contexto. Primero identificar el pensamiento automático y luego revisar qué distorsión refleja. Evitar convertir esto en una crítica al paciente.",
  },
  {
    id: "automonitoreo-ansiedad",
    titulo: "Ficha de Auto-monitoreo de Ansiedad",
    descripcion:
      "Registro detallado de episodios de ansiedad para identificar patrones, desencadenantes y respuestas.",
    instrucciones:
      "Completa esta ficha lo antes posible después de un episodio de ansiedad significativo. Cuanto más detallado sea el registro, más útil será para el trabajo terapéutico.",
    categoria: "Evaluación",
    campos: [
      {
        id: "fecha_hora",
        label: "Fecha y hora del episodio",
        tipo: "texto",
        placeholder: "ej. 10/06/2025 - 14:30",
      },
      {
        id: "duracion",
        label: "Duración aproximada",
        tipo: "texto",
        placeholder: "ej. 20 minutos",
      },
      {
        id: "situacion_desencadenante",
        label: "Situación desencadenante",
        tipo: "textarea",
        placeholder:
          "¿Dónde estabas? ¿Qué estabas haciendo? ¿Con quién? ¿Qué ocurrió justo antes del episodio?",
        filas: 3,
      },
      {
        id: "nivel_maximo_suds",
        label: "Nivel máximo de ansiedad (SUDS 0-100)",
        tipo: "numero",
        min: 0,
        max: 100,
        placeholder: "0-100",
      },
      {
        id: "sintomas_fisicos",
        label: "Síntomas físicos experimentados",
        tipo: "textarea",
        placeholder:
          "Marca los que tuviste: taquicardia / dificultad para respirar / sudoración / temblores / mareo / náuseas / tensión muscular / opresión en el pecho / hormigueos / sensación de irrealidad / otros...",
        filas: 3,
      },
      {
        id: "pensamientos",
        label: "Pensamientos durante el episodio",
        tipo: "textarea",
        placeholder: "¿Qué pasó por tu mente? ¿Qué temías que iba a pasar?",
        filas: 3,
      },
      {
        id: "conducta",
        label: "¿Qué hiciste? (conducta de afrontamiento)",
        tipo: "textarea",
        placeholder:
          "¿Evitaste algo? ¿Te fuiste? ¿Pediste ayuda? ¿Tomaste medicación? ¿Hiciste algo para calmarte?",
        filas: 3,
      },
      {
        id: "nivel_final",
        label: "Nivel de ansiedad al finalizar el episodio (SUDS 0-100)",
        tipo: "numero",
        min: 0,
        max: 100,
        placeholder: "0-100",
      },
      {
        id: "que_ayudo",
        label: "¿Qué te ayudó a reducir la ansiedad?",
        tipo: "textarea",
        placeholder: "¿Qué funcionó? ¿Qué no funcionó?",
        filas: 2,
      },
      {
        id: "reflexion",
        label: "Reflexión posterior",
        tipo: "textarea",
        placeholder:
          "Con perspectiva, ¿qué tan real era el peligro? ¿Qué hubieras podido pensar o hacer diferente?",
        filas: 3,
      },
    ],
    notaClinica:
      "Revisar los registros buscando el pensamiento catastrófico central. Muchas veces el miedo al miedo (ansiedad anticipatoria) es más discapacitante que el episodio en sí.",
  },
  {
    id: "plan-seguridad",
    titulo: "Plan de Seguridad Emocional",
    descripcion:
      "Plan personalizado para gestionar crisis emocionales, con señales de alerta, estrategias de afrontamiento y red de apoyo.",
    instrucciones:
      "Este plan es tuyo y debe ser accesible en momentos de crisis. Complétalo con calma, pensando en qué te ayuda realmente. Guárdalo en un lugar visible (teléfono, nevera, cartera).",
    categoria: "Prevención de Crisis",
    campos: [
      {
        id: "senales_alerta_internas",
        label: "Mis señales de alerta internas",
        tipo: "textarea",
        placeholder:
          "¿Qué pensamientos, emociones o sensaciones físicas me indican que la crisis se está acercando?\n\nEj: Me aislo, pienso que nada vale la pena, tensión en el pecho, no quiero levantarme...",
        filas: 4,
      },
      {
        id: "senales_alerta_externas",
        label: "Situaciones/contextos de riesgo para mí",
        tipo: "textarea",
        placeholder:
          "¿Qué situaciones externas aumentan mi vulnerabilidad?\n\nEj: Conflictos en el trabajo, fechas especiales, cuando no duermo bien...",
        filas: 3,
      },
      {
        id: "estrategias_distraccion",
        label: "Estrategias de distracción y afrontamiento personal",
        tipo: "textarea",
        placeholder:
          "¿Qué me ayuda a calmarme o distraerme en momentos difíciles?\n\nEj: Llamar a un amigo, salir a caminar, escuchar música, tomar una ducha fría, hacer respiraciones...",
        filas: 4,
      },
      {
        id: "razones_vivir",
        label: "Razones para seguir adelante / lo que me importa",
        tipo: "textarea",
        placeholder:
          "¿Qué personas, proyectos o valores me anclan a la vida?\n\nEj: Mi hija, mi perro, mi música, ver a qué saben las cosas que aún no he probado...",
        filas: 4,
      },
      {
        id: "persona_apoyo_1",
        label: "Persona de apoyo 1 (nombre y teléfono)",
        tipo: "texto",
        placeholder: "Nombre: ________ Teléfono: ________",
      },
      {
        id: "persona_apoyo_2",
        label: "Persona de apoyo 2 (nombre y teléfono)",
        tipo: "texto",
        placeholder: "Nombre: ________ Teléfono: ________",
      },
      {
        id: "profesional",
        label: "Mi terapeuta / profesional de salud mental",
        tipo: "texto",
        placeholder: "Nombre: ________ Teléfono: ________",
      },
      {
        id: "linea_crisis",
        label: "Línea de atención a la crisis",
        tipo: "texto",
        placeholder: "España: 024 (línea de atención a conducta suicida) | Emergencias: 112",
      },
      {
        id: "pasos_accion",
        label: "Mi plan paso a paso en una crisis",
        tipo: "textarea",
        placeholder:
          "1. Primero hago: _______\n2. Si no funciona, hago: _______\n3. Si la situación empeora, llamo a: _______\n4. Si es una emergencia, voy a: _______ o llamo al: _______",
        filas: 5,
      },
      {
        id: "compromisos",
        label: "Mi compromiso personal",
        tipo: "textarea",
        placeholder:
          "Escribe en tus propias palabras tu compromiso de usar este plan antes de actuar de forma impulsiva en una crisis.",
        filas: 3,
      },
    ],
    notaClinica:
      "Completar este plan ANTES de una crisis, no durante. Revisar y actualizar en cada sesión. El paciente debe tener siempre una copia física y digital. Si hay ideación suicida activa, este plan se elabora de forma más estructurada como Plan de Seguridad de Stanley-Brown.",
  },
  {
    id: "experimentos-conductuales",
    titulo: "Registro de Experimentos Conductuales",
    descripcion:
      "Diseño y seguimiento de experimentos para poner a prueba creencias y predicciones disfuncionales de forma empírica.",
    instrucciones:
      "Los experimentos conductuales son la forma más poderosa de cambiar creencias profundas. Antes de realizarlo, define exactamente qué predicción estás probando. Después, analiza los resultados objetivamente.",
    categoria: "Reestructuración Cognitiva",
    campos: [
      {
        id: "creencia_probar",
        label: "Creencia o predicción a poner a prueba",
        tipo: "textarea",
        placeholder:
          "Escribe la creencia específica que quieres probar. Debe ser concreta y verificable.\n\nEj: 'Si me equivoco al hablar en una reunión, todos pensarán que soy incompetente y mi jefe me criticará'",
        filas: 3,
      },
      {
        id: "credibilidad_previa",
        label: "¿Cuánto crees en esta predicción ahora? (0-100%)",
        tipo: "numero",
        min: 0,
        max: 100,
        placeholder: "0-100",
      },
      {
        id: "diseno_experimento",
        label: "Diseño del experimento",
        tipo: "textarea",
        placeholder:
          "¿Qué vas a hacer exactamente? Sé muy específico sobre qué conducta realizarás, cuándo, dónde y con quién.\n\nEj: 'En la reunión del lunes, cuando no sepa algo, diré honestamente que no lo sé'",
        filas: 4,
      },
      {
        id: "resultado_predicho",
        label: "Resultado predicho si la creencia es verdadera",
        tipo: "textarea",
        placeholder: "¿Qué esperas que ocurra? Sé específico.\n\nEj: 'Mi jefe fruncirá el ceño y me señalará'",
        filas: 2,
      },
      {
        id: "resultado_alternativo",
        label: "Resultado alternativo (si la creencia es falsa)",
        tipo: "textarea",
        placeholder: "¿Qué podría ocurrir en cambio?\n\nEj: 'Nadie reaccionará de forma negativa o simplemente continuaremos'",
        filas: 2,
      },
      {
        id: "resultado_real",
        label: "Resultado real del experimento",
        tipo: "textarea",
        placeholder: "¿Qué ocurrió realmente? Describe los hechos objetivos, no las interpretaciones.",
        filas: 3,
      },
      {
        id: "credibilidad_posterior",
        label: "¿Cuánto crees en la predicción original ahora? (0-100%)",
        tipo: "numero",
        min: 0,
        max: 100,
        placeholder: "0-100",
      },
      {
        id: "aprendizaje",
        label: "¿Qué aprendiste de este experimento?",
        tipo: "textarea",
        placeholder:
          "¿Qué dice este resultado sobre tu creencia original? ¿Qué nueva creencia es más ajustada a la realidad?",
        filas: 4,
      },
      {
        id: "proximo_experimento",
        label: "Próximo experimento (si procede)",
        tipo: "textarea",
        placeholder: "¿Qué experimento quieres hacer a continuación para seguir probando esta creencia?",
        filas: 2,
      },
    ],
    notaClinica:
      "Los experimentos conductuales son más potentes que la reestructuración verbal. Diseñarlos colaborativamente y con detalle antes de la sesión en que se revisarán. El terapeuta puede hacer el experimento junto al paciente en sesión.",
  },
  {
    id: "escala-evaluacion-sesion",
    titulo: "Escala de Evaluación de Sesión",
    descripcion:
      "Cuestionario breve para evaluar la experiencia del paciente en cada sesión terapéutica (adaptación de la Session Rating Scale de Miller).",
    instrucciones:
      "Por favor, completa este breve cuestionario al final de cada sesión. Tu feedback es muy valioso para mejorar la terapia. No hay respuestas correctas o incorrectas.",
    categoria: "Evaluación de Proceso",
    campos: [
      {
        id: "fecha_sesion",
        label: "Fecha de la sesión",
        tipo: "texto",
        placeholder: "ej. 10/06/2025",
      },
      {
        id: "numero_sesion",
        label: "Número de sesión",
        tipo: "numero",
        min: 1,
        max: 100,
        placeholder: "ej. 5",
      },
      {
        id: "relacion",
        label: "Relación terapéutica (1-10)\n¿Te has sentido escuchado, comprendido y respetado en la sesión?",
        tipo: "numero",
        min: 1,
        max: 10,
        placeholder: "1=No me sentí escuchado / 10=Me sentí completamente escuchado",
      },
      {
        id: "objetivos",
        label: "Objetivos y temas (1-10)\n¿Trabajamos en lo que querías trabajar hoy?",
        tipo: "numero",
        min: 1,
        max: 10,
        placeholder: "1=Trabajamos en temas poco importantes para mí / 10=Trabajamos exactamente en lo que necesitaba",
      },
      {
        id: "enfoque",
        label: "Enfoque y método (1-10)\n¿El enfoque de la sesión fue adecuado para ti?",
        tipo: "numero",
        min: 1,
        max: 10,
        placeholder: "1=No me ayudó el enfoque / 10=El enfoque fue exactamente el que necesitaba",
      },
      {
        id: "global",
        label: "Valoración global de la sesión (1-10)",
        tipo: "numero",
        min: 1,
        max: 10,
        placeholder: "1=La sesión no me ayudó / 10=La sesión fue muy útil",
      },
      {
        id: "que_funciono",
        label: "¿Qué fue lo más útil de la sesión de hoy?",
        tipo: "textarea",
        placeholder: "Escribe qué te llevaste de la sesión de hoy",
        filas: 3,
      },
      {
        id: "que_faltó",
        label: "¿Hay algo que le faltó a la sesión o que hubieras querido trabajar?",
        tipo: "textarea",
        placeholder: "Tu feedback ayuda a mejorar las próximas sesiones",
        filas: 3,
      },
      {
        id: "tarea",
        label: "Tarea para casa acordada",
        tipo: "textarea",
        placeholder: "Escribe aquí la tarea o práctica que acordaste realizar esta semana",
        filas: 3,
      },
    ],
    notaClinica:
      "Usar este instrumento en TODAS las sesiones. La investigación muestra que el feedback regular mejora significativamente los resultados terapéuticos. Si la puntuación en cualquier área es baja, explorar en la siguiente sesión.",
  },
];
