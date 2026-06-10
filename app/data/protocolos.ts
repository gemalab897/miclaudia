export interface Paso {
  numero: number;
  titulo: string;
  descripcion: string;
  duracion?: string;
  materiales?: string[];
  tecnicas?: string[];
  notas?: string;
}

export interface Protocolo {
  slug: string;
  titulo: string;
  descripcion: string;
  sesiones: string;
  indicaciones: string[];
  contraindicaciones: string[];
  pasos: Paso[];
  fichasRelacionadas: string[];
  evidencia: string;
}

export const protocolos: Protocolo[] = [
  {
    slug: "reestructuracion-cognitiva",
    titulo: "Reestructuración Cognitiva",
    descripcion:
      "Técnica central de la TCC para identificar, evaluar y modificar pensamientos automáticos disfuncionales y creencias irracionales que mantienen el malestar emocional.",
    sesiones: "4–8 sesiones (puede integrarse en todo el proceso terapéutico)",
    indicaciones: [
      "Depresión mayor",
      "Trastornos de ansiedad",
      "Trastorno de pánico",
      "Fobia social",
      "TOC (pensamientos intrusivos)",
      "PTSD",
      "Baja autoestima",
    ],
    contraindicaciones: [
      "Episodios psicóticos activos",
      "Deterioro cognitivo severo",
      "Crisis suicida activa sin estabilización previa",
    ],
    pasos: [
      {
        numero: 1,
        titulo: "Psicoeducación sobre el modelo cognitivo",
        descripcion:
          "Explicar al paciente la relación entre pensamientos, emociones y conductas. Usar el diagrama ABC de Ellis o el ciclo de Beck. Introducir el concepto de 'pensamientos automáticos' como interpretaciones rápidas, a menudo inconscientes, que influyen en cómo nos sentimos.",
        duracion: "20–30 minutos",
        materiales: ["Diagrama del ciclo pensamiento-emoción-conducta", "Ejemplos cotidianos"],
        tecnicas: ["Psicoeducación", "Ejemplos ilustrativos", "Preguntas socrátidas"],
        notas:
          "Es fundamental que el paciente comprenda y acepte el modelo antes de avanzar. Usar ejemplos del propio paciente siempre que sea posible.",
      },
      {
        numero: 2,
        titulo: "Identificación del pensamiento automático",
        descripcion:
          "Ayudar al paciente a identificar el pensamiento específico que ocurrió en una situación activadora. Preguntar: '¿Qué pasó por tu mente en ese momento?' 'Si ese pensamiento fuera cierto, ¿qué significaría para ti?' Usar el registro de pensamientos (situación, emoción, pensamiento automático).",
        duracion: "15–25 minutos por pensamiento",
        materiales: ["Ficha de Registro de Pensamientos Automáticos"],
        tecnicas: [
          "Flecha descendente",
          "Preguntas guiadas",
          "Registro de pensamientos",
          "Imágenes mentales",
        ],
        notas:
          "Diferenciar entre emoción ('me siento ansioso') y pensamiento ('voy a fracasar'). Los pensamientos son valoraciones, no hechos.",
      },
      {
        numero: 3,
        titulo: "Evaluación de la evidencia",
        descripcion:
          "Examinar conjuntamente la evidencia que apoya y contradice el pensamiento automático. Preguntas clave: '¿Qué evidencias tienes de que este pensamiento es verdadero?' '¿Qué evidencias tienes de que NO es verdadero?' '¿Estás tomando un hecho como una conclusión?' '¿Qué le dirías a un amigo en esta situación?'",
        duracion: "20–30 minutos",
        materiales: ["Registro de pensamientos con columnas de evidencia"],
        tecnicas: [
          "Preguntas socráticas",
          "Análisis de evidencia",
          "Perspectiva del observador",
          "Técnica del abogado defensor",
        ],
        notas:
          "No rebatir directamente el pensamiento. El objetivo es generar curiosidad y apertura, no convencer al paciente de que está equivocado.",
      },
      {
        numero: 4,
        titulo: "Identificación de distorsiones cognitivas",
        descripcion:
          "Una vez recogida la evidencia, explorar si el pensamiento automático refleja algún patrón distorsionado. Revisar las distorsiones más comunes: catastrofización, pensamiento todo-o-nada, generalización excesiva, lectura mental, personalización, etc.",
        duracion: "10–15 minutos",
        materiales: ["Listado de distorsiones cognitivas", "Ficha de distorsiones"],
        tecnicas: ["Psicoeducación", "Reconocimiento de patrones"],
        notas:
          "No etiquetar al paciente. Las distorsiones son hábitos mentales, no defectos de personalidad.",
      },
      {
        numero: 5,
        titulo: "Generación del pensamiento alternativo",
        descripcion:
          "Desarrollar un pensamiento alternativo más equilibrado, realista y funcional. No se trata de pensar 'positivo', sino de pensar de forma más precisa. Preguntas: '¿Existe otra forma de ver esta situación?' '¿Cuál es el pensamiento más útil y realista que podrías tener?' '¿Qué probabilidad real hay de que ocurra lo que temes?'",
        duracion: "15–20 minutos",
        materiales: ["Registro de pensamientos completo (6 columnas)"],
        tecnicas: [
          "Preguntas socráticas",
          "Decatastrofización",
          "Perspectiva temporal",
          "Ensayo cognitivo",
        ],
        notas:
          "El pensamiento alternativo debe ser creíble para el paciente. Calificar la credibilidad de 0 a 100% antes y después.",
      },
      {
        numero: 6,
        titulo: "Evaluación del cambio emocional",
        descripcion:
          "Pedir al paciente que valore la intensidad de la emoción inicial después del ejercicio. Registrar el cambio. Reflexionar sobre qué facilitó o dificultó el cambio. Asignar el ejercicio de registro de pensamientos como tarea para casa.",
        duracion: "10 minutos",
        materiales: ["Ficha de registro completa"],
        tecnicas: ["Escalas numéricas (0-100)", "Reflexión guiada"],
        notas:
          "No esperar una reducción del 100% del malestar. Incluso una reducción del 20-30% es clínicamente significativa.",
      },
    ],
    fichasRelacionadas: [
      "registro-pensamientos",
      "distorsiones-cognitivas",
      "experimentos-conductuales",
    ],
    evidencia:
      "Nivel de evidencia A para depresión (Beck, 1979; Clark & Beck, 2010). Meta-análisis muestran eficacia superior a lista de espera y comparable a antidepresivos con menor tasa de recaída.",
  },
  {
    slug: "activacion-conductual",
    titulo: "Activación Conductual",
    descripcion:
      "Intervención basada en la teoría del reforzamiento que aumenta el acceso a refuerzo positivo mediante la planificación estructurada de actividades, contrarrestando el ciclo de evitación e inactividad de la depresión.",
    sesiones: "6–12 sesiones",
    indicaciones: [
      "Depresión mayor",
      "Distimia",
      "Anhedonia",
      "Depresión posparto",
      "Comorbilidad depresión-ansiedad",
      "Burnout",
    ],
    contraindicaciones: [
      "Manía o hipomanía activa",
      "Condiciones médicas que limiten la actividad física sin adaptación",
    ],
    pasos: [
      {
        numero: 1,
        titulo: "Psicoeducación sobre depresión y conducta",
        descripcion:
          "Explicar el modelo conductual de la depresión: la inactividad reduce el contacto con refuerzos positivos, lo que mantiene y profundiza el estado de ánimo bajo. La activación rompe este ciclo. Presentar el diagrama de espiral descendente vs. espiral ascendente.",
        duracion: "20–30 minutos",
        materiales: ["Diagrama espiral de la depresión", "Hoja de psicoeducación"],
        notas:
          "Enfatizar: 'No esperamos a sentirnos bien para actuar. Actuamos para sentirnos bien.' Esto es clave para motivar al paciente.",
      },
      {
        numero: 2,
        titulo: "Registro de actividades y estado de ánimo",
        descripcion:
          "Pedir al paciente que registre sus actividades hora a hora durante 1-2 semanas, junto con la valoración del estado de ánimo (0-10) y el nivel de placer/logro (0-10). Esto establece la línea base y ayuda a identificar qué actividades mejoran o empeoran el estado de ánimo.",
        duracion: "Tarea entre sesiones (7-14 días)",
        materiales: ["Diario de actividades y estado de ánimo", "Ficha de autorregistro"],
        tecnicas: ["Automonitoreo", "Registro conductual"],
        notas:
          "Algunos pacientes se resisten. Empezar con registros simplificados (mañana/tarde/noche) si el detallado resulta abrumador.",
      },
      {
        numero: 3,
        titulo: "Análisis funcional de actividades",
        descripcion:
          "Revisar conjuntamente el registro de actividades. Identificar patrones: ¿qué actividades correlacionan con mejor estado de ánimo? ¿Qué actividades se han abandonado desde la depresión? ¿Qué situaciones generan más evitación? Construir el perfil de actividades del paciente.",
        duracion: "25–35 minutos",
        materiales: ["Registro de actividades completado"],
        tecnicas: ["Análisis funcional", "Identificación de patrones", "ABC conductual"],
        notas: "Buscar tanto actividades que generan placer como actividades que generan sensación de logro o dominio.",
      },
      {
        numero: 4,
        titulo: "Inventario de actividades agradables",
        descripcion:
          "Elaborar junto al paciente una lista de actividades que antes disfrutaba o podría disfrutar, ordenadas de menor a mayor dificultad. Incluir actividades sociales, físicas, creativas, de cuidado personal y de logro. Usar la lista de actividades agradables como referencia.",
        duracion: "20–30 minutos",
        materiales: ["Lista de Actividades Agradables", "Ficha de inventario"],
        tecnicas: ["Brainstorming", "Jerarquización de actividades"],
        notas: "Algunos pacientes reportan que 'ya nada les da placer'. Explorar actividades del pasado y actividades pequeñas (tomar café, salir 10 min al sol).",
      },
      {
        numero: 5,
        titulo: "Planificación de actividades semanales",
        descripcion:
          "Crear un plan semanal concreto con actividades específicas, días y horarios. Empezar con actividades pequeñas y factibles. Aplicar principios de graduación: comenzar con mínimo esfuerzo, aumentar progresivamente. Equilibrar actividades de placer y actividades de logro.",
        duracion: "20–25 minutos",
        materiales: ["Plan de Activación Conductual semanal", "Calendario"],
        tecnicas: ["Planificación conductual", "Graduación", "Contrato conductual"],
        notas: "Las actividades deben ser concretas ('caminar 15 minutos el martes a las 9h') no vagas ('hacer ejercicio'). Anticipar obstáculos.",
      },
      {
        numero: 6,
        titulo: "Revisión y ajuste del plan",
        descripcion:
          "En cada sesión, revisar las actividades realizadas vs. planificadas. Explorar qué facilitó la realización y qué dificultades surgieron. Reforzar los logros (por pequeños que sean). Ajustar el plan según el progreso. Identificar pensamientos que interfieren con la activación.",
        duracion: "15–20 minutos",
        materiales: ["Plan de la semana anterior", "Nuevo plan semanal"],
        tecnicas: ["Análisis de barreras", "Resolución de problemas", "Refuerzo verbal"],
        notas: "Validar el esfuerzo más que el resultado. 'Intentarlo ya es un logro.' Conectar con reestructuración cognitiva si aparecen pensamientos bloqueantes.",
      },
    ],
    fichasRelacionadas: [
      "actividades-agradables",
      "plan-activacion",
      "diario-estado-animo",
    ],
    evidencia:
      "Nivel de evidencia A para depresión. Estudios de Lewinsohn (1975), Martell et al. (2001) y el ensayo TRAP-TRAC. Tan eficaz como la terapia cognitiva completa en depresión moderada-severa (Dimidjian et al., 2006).",
  },
  {
    slug: "exposicion-graduada",
    titulo: "Exposición Graduada",
    descripcion:
      "Técnica de habituación y extinción del miedo mediante exposición sistemática y progresiva a estímulos temidos, sin conductas de evitación ni escape. Tratamiento de primera línea para trastornos de ansiedad.",
    sesiones: "8–15 sesiones",
    indicaciones: [
      "Fobias específicas",
      "Fobia social",
      "Trastorno de pánico con agorafobia",
      "TOC",
      "PTSD",
      "Ansiedad a la salud (hipocondría)",
    ],
    contraindicaciones: [
      "Condiciones médicas que contraindiquen activación fisiológica",
      "Disociación severa no tratada",
      "Sin motivación mínima del paciente",
    ],
    pasos: [
      {
        numero: 1,
        titulo: "Psicoeducación sobre ansiedad y evitación",
        descripcion:
          "Explicar la curva de ansiedad (sube, alcanza pico y baja naturalmente si no se evita). Describir cómo la evitación mantiene el miedo a corto plazo pero lo refuerza a largo plazo. Introducir la habituación y la extinción. Usar la metáfora de 'la ola de ansiedad'.",
        duracion: "20–30 minutos",
        materiales: ["Diagrama de curva de ansiedad", "Hoja de psicoeducación sobre el miedo"],
        notas: "Es fundamental que el paciente entienda POR QUÉ es necesario exponerse. La motivación inicial es clave para el éxito.",
      },
      {
        numero: 2,
        titulo: "Construcción de la jerarquía de exposición",
        descripcion:
          "Elaborar conjuntamente una lista de entre 8-15 situaciones temidas, ordenadas de menor a mayor nivel de ansiedad. Usar la Escala SUDS (Subjective Units of Distress Scale, 0-100). Asegurarse de tener ítems en todos los rangos (20-40, 40-60, 60-80, 80-100).",
        duracion: "30–40 minutos",
        materiales: ["Ficha de Jerarquía de Exposición", "Escala SUDS"],
        tecnicas: ["Brainstorming", "Escalación graduada", "Escala SUDS"],
        notas: "Incluir variantes: situación real, imaginal, videos. Ajustar si el paciente sobreestima o subestima el SUDS inicial.",
      },
      {
        numero: 3,
        titulo: "Entrenamiento en técnicas de afrontamiento",
        descripcion:
          "Enseñar técnicas básicas para manejar la ansiedad durante la exposición. Respiración diafragmática (ritmo 4-6-8). Aceptación de sensaciones físicas. Frases de afrontamiento. IMPORTANTE: estas técnicas son complementarias, no sustitutos de la exposición.",
        duracion: "20–25 minutos",
        materiales: ["Guía de respiración diafragmática"],
        tecnicas: ["Respiración controlada", "Autoinstrucciones", "Mindfulness de sensaciones"],
        notas: "Evitar que las técnicas se conviertan en conductas de seguridad. El objetivo es TOLERAR la ansiedad, no eliminarla rápido.",
      },
      {
        numero: 4,
        titulo: "Exposición in vivo o imaginaria (inicio)",
        descripcion:
          "Comenzar por el ítem más bajo de la jerarquía (SUDS ~20-30). El paciente se expone a la situación hasta que la ansiedad se reduzca al menos un 50% o baje a un nivel manejable. Registrar SUDS cada 5 minutos. Permanecer en la situación hasta la habituación. No escapar.",
        duracion: "45–90 minutos por sesión de exposición",
        materiales: ["Ficha de registro SUDS", "Jerarquía de exposición"],
        tecnicas: ["Exposición in vivo", "Exposición imaginaria", "Exposición interoceptiva"],
        notas: "Primera exposición idealmente en sesión, con el terapeuta. Luego pasar a práctica autónoma. Registrar siempre el nivel inicial y final de SUDS.",
      },
      {
        numero: 5,
        titulo: "Progresión por la jerarquía",
        descripcion:
          "Una vez que un ítem produce poca ansiedad (SUDS <20-25 de forma estable), pasar al siguiente. Revisar en cada sesión las tareas de exposición realizadas entre sesiones. Reforzar la valentía del paciente. Analizar situaciones de escape o evitación sutil.",
        duracion: "20 minutos de revisión por sesión",
        materiales: ["Registro de exposiciones", "Jerarquía actualizada"],
        tecnicas: ["Revisión de tareas", "Solución de problemas", "Modelado"],
        notas: "Vigilar las 'conductas de seguridad' sutiles (agarrarse a algo, repetir frases, estar pendiente del teléfono). Deben eliminarse gradualmente.",
      },
      {
        numero: 6,
        titulo: "Prevención de recaídas en exposición",
        descripcion:
          "Al completar la jerarquía, trabajar la prevención de recaídas. Explicar que la ansiedad puede volver temporalmente en situaciones de estrés. Enseñar a responder con exposición, no con evitación. Plan de mantenimiento: exponerse periódicamente a situaciones de nivel medio.",
        duracion: "20–30 minutos",
        materiales: ["Plan de mantenimiento", "Ficha de señales de alerta"],
        tecnicas: ["Psicoeducación", "Plan de acción personal"],
        notas: "El mayor predictor de recaída es la evitación post-tratamiento. El mantenimiento activo es fundamental.",
      },
    ],
    fichasRelacionadas: [
      "jerarquia-exposicion",
      "automonitoreo-ansiedad",
      "plan-seguridad",
    ],
    evidencia:
      "Tratamiento de primera línea (Nivel A) para fobias específicas, fobia social y trastorno de pánico. Meta-análisis de Wolitzky-Taylor et al. (2008) y Chambless & Ollendick (2001). Tasas de remisión del 60-90% según el trastorno.",
  },
  {
    slug: "relajacion-muscular-progresiva",
    titulo: "Relajación Muscular Progresiva (RMP)",
    descripcion:
      "Técnica de Jacobson (1929) basada en la tensión y relajación sistemática de 16 grupos musculares para reducir la tensión física y la activación del sistema nervioso autónomo. Herramienta de autorregulación fundamental.",
    sesiones: "2–4 sesiones de entrenamiento; práctica continua",
    indicaciones: [
      "Ansiedad generalizada",
      "Insomnio",
      "Cefaleas tensionales",
      "Hipertensión leve",
      "Somatizaciones por estrés",
      "Preparación para exposición",
      "Manejo del dolor crónico",
    ],
    contraindicaciones: [
      "Lesiones musculares o articulares agudas",
      "Fibromialgia severa (adaptar con tensión mínima)",
      "Trastornos disociativos (monitorizar de cerca)",
    ],
    pasos: [
      {
        numero: 1,
        titulo: "Preparación y posición",
        descripcion:
          "Ubicar al paciente en una posición cómoda (recostado o sentado con respaldo). Ambiente tranquilo, luz tenue, ropa cómoda. Explicar el procedimiento: se alternará tensión (5-7 segundos) con relajación (20-30 segundos) en cada grupo muscular. Preguntar sobre lesiones o dolor previo.",
        duracion: "5–10 minutos",
        materiales: ["Colchoneta o sillón reclinable", "Guión de relajación"],
        notas: "Tener en cuenta contraindicaciones. Adaptar las instrucciones si hay dolor o limitación física.",
      },
      {
        numero: 2,
        titulo: "Grupos musculares: manos y antebrazos",
        descripcion:
          "Mano dominante: apretar el puño con fuerza (5-7s), notar la tensión, soltar y observar la diferencia (20-30s). Repetir con mano no dominante. Luego doblar ambas manos hacia atrás (tensando la cara dorsal del antebrazo). Soltar y notar la sensación de relajación.",
        duracion: "4–5 minutos",
        tecnicas: ["Tensión-relajación", "Atención plena a sensaciones corporales"],
      },
      {
        numero: 3,
        titulo: "Grupos musculares: brazos y hombros",
        descripcion:
          "Brazos superiores: doblar los codos y tensar bíceps (como hacer un curl). Mantener, soltar. Tríceps: extender los brazos empujando hacia abajo. Hombros: elevar ambos hombros hacia las orejas. Mantener la tensión, notar el esfuerzo, soltar lentamente y sentir la relajación.",
        duracion: "4–5 minutos",
      },
      {
        numero: 4,
        titulo: "Grupos musculares: cara y cuello",
        descripcion:
          "Frente: elevar las cejas lo más alto posible (5-7s), soltar y sentir la frente lisa. Ojos: cerrar con fuerza, soltar. Nariz/mejillas: arrugar la nariz. Boca: apretar los dientes y estirar las comisuras. Cuello: empujar la cabeza hacia atrás contra la silla o colchoneta.",
        duracion: "5–7 minutos",
        notas: "Ir despacio en la cara. Muchos pacientes no son conscientes de la tensión facial. Es una zona muy importante para la ansiedad.",
      },
      {
        numero: 5,
        titulo: "Grupos musculares: pecho, abdomen y espalda",
        descripcion:
          "Pecho: respirar profundo y retener (tensión al expandir el pecho), soltar con larga exhalación. Abdomen: endurecer los músculos del abdomen como si esperara un golpe. Espalda baja: arquear la espalda ligeramente presionando los omóplatos. Notar la diferencia al soltar.",
        duracion: "5–7 minutos",
        notas: "La relajación del pecho suele producir suspiros espontáneos. Esto es normal y positivo. Invitar al paciente a observarlo.",
      },
      {
        numero: 6,
        titulo: "Grupos musculares: piernas y pies",
        descripcion:
          "Muslos: apretar los muslos juntos o contraer los glúteos. Pantorrillas: flexionar los pies hacia arriba tensando pantorrillas. Pies: doblar los dedos hacia abajo como garras. Después de cada grupo, 20-30 segundos de relajación profunda, notando el contraste con la tensión previa.",
        duracion: "5–7 minutos",
      },
      {
        numero: 7,
        titulo: "Relajación total y cierre",
        descripcion:
          "Tras completar todos los grupos, hacer un recorrido mental de cabeza a pies, soltando cualquier tensión residual. 2-3 minutos de respiración lenta y profunda. Conteo de regreso 5-4-3-2-1 para la reactivación progresiva. Pedir al paciente que evalúe el nivel de relajación (0-10).",
        duracion: "10–15 minutos",
        notas: "Prescribir práctica diaria de 15-20 minutos. Al inicio con guión completo; a las 2-3 semanas, versión abreviada (8 grupos); más adelante, relajación por señal.",
      },
    ],
    fichasRelacionadas: ["automonitoreo-ansiedad", "diario-estado-animo"],
    evidencia:
      "Nivel de evidencia A para TAG. Eficaz para insomnio, cefaleas y dolor crónico (evidencia B-C). Berstein & Borkovec (1973) sistematizaron el protocolo. Ampliamente integrada en protocolos para ansiedad y PTSD.",
  },
  {
    slug: "habilidades-sociales",
    titulo: "Entrenamiento en Habilidades Sociales (EHS)",
    descripcion:
      "Programa estructurado para desarrollar competencias interpersonales mediante psicoeducación, modelado, role-play y retroalimentación. Especialmente indicado en fobia social, asertividad y relaciones interpersonales.",
    sesiones: "8–12 sesiones",
    indicaciones: [
      "Fobia social / Ansiedad social",
      "Dificultades asertivas",
      "Aislamiento social en depresión",
      "Habilidades de comunicación en pareja",
      "Déficits interpersonales en TEA (adaptado)",
    ],
    contraindicaciones: [
      "Crisis psicótica activa",
      "Ansiedad social severa sin trabajo cognitivo previo",
    ],
    pasos: [
      {
        numero: 1,
        titulo: "Evaluación de habilidades sociales",
        descripcion:
          "Identificar las áreas de dificultad específicas: iniciar conversaciones, mantenerlas, expresar opiniones, decir no, manejar críticas, hablar en público, etc. Usar role-play diagnóstico, observación y autoinforme. Establecer objetivos concretos y medibles.",
        duracion: "20–30 minutos",
        materiales: ["Inventario de situaciones sociales difíciles", "Escala de Asertividad"],
      },
      {
        numero: 2,
        titulo: "Psicoeducación sobre comunicación asertiva",
        descripcion:
          "Presentar los tres estilos de comunicación: pasivo (ceder siempre, resentimiento), agresivo (imponer, dañar relaciones) y asertivo (expresar necesidades respetando al otro). Explicar los derechos asertivos. El objetivo no es 'ganar' sino comunicarse con respeto mutuo.",
        duracion: "20–25 minutos",
        materiales: ["Hoja de estilos de comunicación", "Lista de derechos asertivos"],
      },
      {
        numero: 3,
        titulo: "Modelado de la habilidad objetivo",
        descripcion:
          "El terapeuta modela la habilidad social que se trabajará en esa sesión (por ejemplo, hacer una petición directa). Demostrar tanto el componente verbal (qué decir) como no verbal (tono, contacto visual, postura, gestos). El paciente observa y luego describe qué notó.",
        duracion: "15–20 minutos",
        tecnicas: ["Modelado en vivo", "Video-modelado", "Análisis de componentes"],
      },
      {
        numero: 4,
        titulo: "Role-play y ensayo conductual",
        descripcion:
          "El paciente practica la habilidad en un role-play con el terapeuta. Empezar con situaciones de baja dificultad. Grabar si es posible (con consentimiento). Practicar múltiples veces, variando la situación. Ensayar también respuestas a reacciones negativas (rechazo, crítica).",
        duracion: "25–35 minutos",
        tecnicas: ["Role-play", "Ensayo conductual", "Inversión de roles"],
        notas: "Ser específico en el escenario del role-play. Cuanto más parecido a la situación real, mayor generalización.",
      },
      {
        numero: 5,
        titulo: "Retroalimentación y corrección",
        descripcion:
          "Proporcionar feedback inmediato y específico: primero señalar lo que hizo bien (reforzar), luego lo que puede mejorar. Usar el principio 'sándwich': positivo-sugerencia-positivo. Si se grabó, revisar el video conjuntamente. El paciente también se autoevalúa.",
        duracion: "10–15 minutos",
        tecnicas: ["Feedback constructivo", "Autoevaluación", "Análisis de video"],
        notas: "Muy importante que el paciente primero se autoevalúe. Muchos se critican excesivamente: la discrepancia paciente-terapeuta es terapéutica.",
      },
      {
        numero: 6,
        titulo: "Generalización y práctica en vivo",
        descripcion:
          "Asignar tareas de práctica en situaciones reales, de menor a mayor dificultad. Registrar la situación, lo que hizo, la reacción del otro y cómo se sintió. Revisar en la siguiente sesión. Solucionar problemas ante dificultades. Celebrar los éxitos.",
        duracion: "10 minutos de planificación",
        materiales: ["Diario de práctica de habilidades sociales"],
        tecnicas: ["Asignación de tareas", "Generalización", "Resolución de problemas"],
      },
    ],
    fichasRelacionadas: ["registro-pensamientos", "experimentos-conductuales"],
    evidencia:
      "Nivel de evidencia A para fobia social (Heimberg, 2002; Clark et al., 2006). Componente clave de los tratamientos basados en evidencia para fobia social, depresión y esquizofrenia. Integrado en el protocolo de Linehan para TLP.",
  },
  {
    slug: "primera-sesion",
    titulo: "Protocolo de Primera Sesión TCC",
    descripcion:
      "Guía estructurada para la sesión inicial que combina evaluación diagnóstica, establecimiento de la alianza terapéutica, formulación cognitiva preliminar y psicoeducación sobre el modelo TCC.",
    sesiones: "1–2 sesiones (evaluación inicial)",
    indicaciones: ["Inicio de cualquier proceso terapéutico en TCC"],
    contraindicaciones: ["Crisis aguda que requiera intervención inmediata antes de la evaluación"],
    pasos: [
      {
        numero: 1,
        titulo: "Bienvenida y encuadre terapéutico",
        descripcion:
          "Recibir al paciente con calidez. Explicar el marco de la terapia: confidencialidad y sus límites, duración y frecuencia de las sesiones, rol activo del paciente, importancia de las tareas entre sesiones. Resolver dudas. Obtener consentimiento informado.",
        duracion: "10–15 minutos",
        materiales: ["Consentimiento informado", "Hoja de información sobre TCC"],
        notas: "El encuadre claro desde el inicio previene malentendidos y establece expectativas realistas.",
      },
      {
        numero: 2,
        titulo: "Evaluación del motivo de consulta",
        descripcion:
          "Explorar el motivo de consulta de forma abierta y empática. Preguntar: '¿Qué te trajo hoy aquí?' '¿Cuándo empezó esto?' '¿Cómo ha afectado tu vida?' '¿Qué has intentado para resolverlo?' Escuchar activamente. Validar la experiencia del paciente antes de cualquier análisis.",
        duracion: "20–30 minutos",
        tecnicas: ["Entrevista motivacional", "Escucha activa", "Preguntas abiertas"],
        notas: "No interrumpir con cuestionarios en los primeros minutos. Dar espacio para que el paciente se sienta escuchado.",
      },
      {
        numero: 3,
        titulo: "Historia clínica y evaluación diagnóstica",
        descripcion:
          "Recoger sistemáticamente: historia del problema (inicio, evolución, factores precipitantes), historial de tratamientos previos, historia familiar, salud física y medicación, consumo de sustancias, recursos y fortalezas del paciente. Descartar ideación suicida si procede.",
        duracion: "20–30 minutos",
        materiales: ["Formulario de historia clínica", "Escala de depresión PHQ-9", "GAD-7"],
        tecnicas: ["Entrevista clínica semi-estructurada", "Instrumentos de screening"],
        notas: "Registrar factores de protección y recursos del paciente, no solo déficits. Esto es base para la formulación cognitiva.",
      },
      {
        numero: 4,
        titulo: "Formulación cognitiva preliminar",
        descripcion:
          "Compartir con el paciente una formulación inicial del problema en términos cognitivo-conductuales. Usar el modelo ABC o el diagrama de mantenimiento. Explicar cómo sus pensamientos, emociones y conductas se interrelacionan y mantienen el problema. Obtener feedback del paciente.",
        duracion: "15–20 minutos",
        materiales: ["Hoja de formulación cognitiva"],
        tecnicas: ["Formulación colaborativa", "Psicoeducación", "Metáforas"],
        notas: "La formulación es un mapa, no un diagnóstico definitivo. Presentarla como hipótesis a contrastar juntos.",
      },
      {
        numero: 5,
        titulo: "Establecimiento de objetivos terapéuticos",
        descripcion:
          "Definir conjuntamente 2-4 objetivos terapéuticos concretos y medibles (SMART). Priorizar según urgencia y motivación del paciente. Distinguir entre objetivos a corto plazo (síntomas) y largo plazo (calidad de vida). Explorar la motivación para el cambio.",
        duracion: "15–20 minutos",
        materiales: ["Hoja de objetivos terapéuticos"],
        tecnicas: ["Entrevista motivacional", "Técnica SMART", "Escala de importancia-confianza"],
        notas: "Los objetivos deben ser del paciente, no del terapeuta. El terapeuta puede guiar pero el paciente debe apropiarse de ellos.",
      },
      {
        numero: 6,
        titulo: "Cierre, plan de tratamiento y tarea inicial",
        descripcion:
          "Resumir lo trabajado en la sesión. Presentar el plan de tratamiento tentativo (número de sesiones, módulos a trabajar). Asignar primera tarea: registro de situaciones difíciles o escala de estado de ánimo. Evaluar la experiencia de la sesión. Confirmar próxima cita.",
        duracion: "10–15 minutos",
        materiales: ["Plan de tratamiento escrito", "Primera ficha de autorregistro"],
        tecnicas: ["Resumen colaborativo", "Escala de sesión"],
        notas: "Terminar con algo que el paciente se lleve: información útil, una pequeña tarea o simplemente la sensación de haber sido escuchado.",
      },
    ],
    fichasRelacionadas: [
      "escala-evaluacion-sesion",
      "registro-pensamientos",
      "diario-estado-animo",
    ],
    evidencia:
      "Basado en los protocolos de evaluación e inicio de Beck (1979), el modelo de Persons (2008) de formulación de caso cognitiva, y las guías NICE para inicio de TCC.",
  },
];
