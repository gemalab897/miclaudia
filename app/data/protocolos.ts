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
  {
    slug: "protocolo-panico",
    titulo: "Protocolo para Trastorno de Pánico",
    descripcion: "Protocolo específico para el tratamiento del trastorno de pánico basado en el modelo cognitivo de Clark (1986). Combina psicoeducación, reestructuración cognitiva y exposición interoceptiva para eliminar el círculo vicioso del pánico.",
    sesiones: "6–10 sesiones",
    indicaciones: [
      "Trastorno de pánico con o sin agorafobia",
      "Ataques de pánico recurrentes",
      "Ansiedad por la salud con síntomas físicos prominentes",
      "Hipocondría con activación autonómica",
    ],
    contraindicaciones: [
      "Condición médica activa que explique los síntomas físicos (descartar primero)",
      "Trastorno bipolar en fase maníaca",
      "Abuso activo de sustancias",
    ],
    pasos: [
      {
        numero: 1,
        titulo: "Psicoeducación sobre el pánico y el modelo cognitivo",
        descripcion: "Explicar el círculo vicioso del pánico: sensación física → interpretación catastrófica → más ansiedad → más sensaciones. La clave es que el pánico no es peligroso sino el resultado de interpretar erróneamente la activación del sistema nervioso autónomo. Usar la metáfora de la alarma de incendios defectuosa: suena sin que haya fuego. Explicar la fisiología: para qué sirve la adrenalina, por qué taquicardia/mareo/entumecimiento son adaptativas, por qué son inocuas.",
        duracion: "30–40 minutos",
        materiales: ["Diagrama del círculo vicioso del pánico", "Folleto sobre el pánico", "Explicación fisiológica"],
        tecnicas: ["Psicoeducación", "Normalización", "Metáfora de la alarma"],
        notas: "La psicoeducación sola ya es terapéutica para muchos pacientes. Asegurarse de que han tenido evaluación médica previa que descarte causa orgánica.",
      },
      {
        numero: 2,
        titulo: "Identificar las interpretaciones catastrofistas específicas",
        descripcion: "Cada paciente tiene sus interpretaciones particulares: 'me da un infarto', 'me voy a desmayar', 'me vuelvo loco', 'pierdo el control'. Identificar exactamente cuál es la interpretación de cada sensación. Usar el registro de ataques: situación, sensaciones físicas, pensamientos automáticos exactos, conducta, consecuencias.",
        duracion: "20–30 minutos",
        materiales: ["Registro de ataques de pánico"],
        tecnicas: ["Identificación de pensamientos automáticos", "Análisis funcional"],
        notas: "El nivel de especificidad importa: 'tengo miedo' no es suficiente. Necesitamos saber exactamente qué catastrófico creen que ocurrirá.",
      },
      {
        numero: 3,
        titulo: "Reestructuración cognitiva de las interpretaciones",
        descripcion: "Trabajar cada interpretación con evidencia: ¿Cuántos ataques ha tenido? ¿Cuántos infartos reales? Aportar información fisiológica clave: en el pánico la presión arterial sube, por lo que el desmayo es fisiológicamente casi imposible. El 'volverse loco' no funciona así: la psicosis no aparece de repente en un episodio de ansiedad. El 'perder el control' nunca ha ocurrido a pesar de creerlo en cada ataque.",
        duracion: "30–40 minutos",
        materiales: ["Hoja de evidencia a favor/en contra", "Información fisiológica del pánico"],
        tecnicas: ["Cuestionamiento socrático", "Evidencia empírica", "Psicoeducación fisiológica"],
        notas: "El dato de que la presión sube en el pánico es especialmente potente para el miedo al desmayo. Verificar siempre con el paciente que la alternativa le resulta creíble, no solo intelectual.",
      },
      {
        numero: 4,
        titulo: "Exposición interoceptiva",
        descripcion: "Provocar de forma voluntaria las sensaciones temidas para aprender que no son peligrosas. Construir jerarquía de ejercicios: girar en silla (mareo/vértigo), respirar por pajita (sensación de ahogo), hiperventilación controlada (entumecimiento, irrealidad, mareo), hacer ejercicio intenso (taquicardia). Empezar por los menos temidos. Realizar en sesión primero, luego como tarea. Objetivo: las mismas sensaciones con diferente significado ya no generan miedo.",
        duracion: "30–45 minutos por sesión de exposición",
        materiales: ["Jerarquía de exposición interoceptiva", "Registro SUDS"],
        tecnicas: ["Exposición interoceptiva", "Prevención de respuesta", "Procesamiento post-exposición"],
        notas: "Es la técnica diferencial del tratamiento del pánico. Muchos pacientes se resisten: explicar el fundamento antes. Nunca forzar. La exposición debe llegar al nivel suficiente de activación para que sea efectiva.",
      },
      {
        numero: 5,
        titulo: "Identificar y eliminar conductas de seguridad",
        descripcion: "Las conductas de seguridad mantienen el pánico al confirmar implícitamente que hay peligro: llevar agua, teléfono siempre accesible, evitar el ejercicio, llevar acompañante, sentarse cerca de la salida. Hacer inventario completo de conductas de seguridad del paciente. Eliminarlas sistemáticamente: primero las más pequeñas, luego las más significativas. El objetivo es mostrar que el peligro no existía.",
        duracion: "20–30 minutos",
        materiales: ["Lista de conductas de seguridad"],
        tecnicas: ["Análisis funcional", "Experimentos conductuales", "Exposición sin conductas de seguridad"],
        notas: "Las conductas de seguridad son con frecuencia el mantenedor más potente. Muchos pacientes no las habían identificado como parte del problema.",
      },
      {
        numero: 6,
        titulo: "Exposición situacional a lugares y situaciones evitadas",
        descripcion: "Una vez que las sensaciones ya no son tan temidas, recuperar los lugares y situaciones evitados: metro, supermercado, cine, quedarse solo en casa. Construir jerarquía por nivel de dificultad (SUDS) y trabajar de menor a mayor. Usar la exposición sin conductas de seguridad. Procesar cognitivamente después de cada exposición: ¿qué esperabas que ocurriera? ¿qué ocurrió realmente?",
        duracion: "Tarea semanal continua entre sesiones",
        materiales: ["Jerarquía de exposición situacional", "Registro de exposición"],
        tecnicas: ["Exposición in vivo", "Prevención de respuesta", "Experimentos conductuales"],
        notas: "La exposición situacional puede hacerse en paralelo con la interoceptiva o después. Depende del caso.",
      },
      {
        numero: 7,
        titulo: "Manejo del ataque cuando ocurre",
        descripcion: "Aunque el objetivo no es 'controlar' el pánico sino no temerle, proporcionar herramientas de manejo activo: respiración diafragmática lenta (no como escape sino como regulación), tarjetas de manejo con recordatorios, ensayo mental de afrontar un ataque. El mensaje clave: 'Esto es pánico, no peligro. Si no le añado más miedo, pasará en 10 minutos.'",
        duracion: "20–30 minutos",
        materiales: ["Tarjetas de manejo del pánico", "Guía de respiración diafragmática"],
        tecnicas: ["Respiración diafragmática", "Tarjetas de manejo", "Ensayo mental"],
        notas: "Cuidado con que las técnicas de manejo se conviertan en conductas de seguridad. La respiración debe usarse como regulación, no como escape del pánico.",
      },
    ],
    fichasRelacionadas: ["registro-panico", "exposicion-graduada", "registro-pensamientos"],
    evidencia: "Basado en el modelo cognitivo del pánico de Clark (1986) y el protocolo de tratamiento de Barlow y Craske (2000). Clasificado como tratamiento de primera línea por la APA y las guías NICE.",
  },
  {
    slug: "tcci-insomnio",
    titulo: "TCC-I: Terapia Cognitivo-Conductual para el Insomnio",
    descripcion: "Protocolo de primera línea para el insomnio crónico. Más efectivo que la medicación hipnótica a largo plazo, sin efectos secundarios ni dependencia. Combina control de estímulos, restricción de sueño e higiene del sueño con reestructuración cognitiva.",
    sesiones: "4–8 sesiones",
    indicaciones: [
      "Insomnio crónico primario (> 3 meses)",
      "Insomnio de conciliación, mantenimiento o despertar precoz",
      "Insomnio comórbido con ansiedad o depresión",
      "Pacientes que quieren reducir o eliminar medicación hipnótica",
    ],
    contraindicaciones: [
      "Apnea del sueño no tratada (derivar primero a neumología)",
      "Trastorno bipolar (la restricción de sueño puede precipitar manía)",
      "Epilepsia (la privación de sueño puede desencadenar crisis)",
    ],
    pasos: [
      {
        numero: 1,
        titulo: "Evaluación y diario de sueño",
        descripcion: "Evaluar el patrón de sueño completo con el diario de sueño durante 1-2 semanas antes de intervenir: hora de acostarse, latencia de inicio, número y duración de despertares, hora de levantarse, calidad subjetiva (1-10), siestas. Calcular la eficiencia de sueño (tiempo dormido / tiempo en cama × 100). Valor normal > 85%. Evaluar creencias disfuncionales sobre el sueño con el DBAS (Dysfunctional Beliefs and Attitudes about Sleep).",
        duracion: "1-2 semanas de recogida de datos",
        materiales: ["Diario de sueño", "Escala DBAS", "Calculadora de eficiencia"],
        tecnicas: ["Diario de sueño", "Evaluación de creencias"],
        notas: "La eficiencia de sueño es el dato clave: si es < 85%, la restricción de sueño está indicada. No intervenir antes de tener al menos 7-14 días de datos.",
      },
      {
        numero: 2,
        titulo: "Higiene del sueño",
        descripcion: "Establecer las condiciones básicas para el sueño: 1) Horario fijo de levantarse todos los días (incluso fines de semana), 2) Reservar la cama solo para dormir y sexo, 3) Evitar pantallas 1 hora antes, 4) Temperatura fresca en la habitación, 5) Evitar cafeína después de las 14:00, 6) No hacer siestas largas (máximo 20 minutos antes de las 15:00), 7) Ejercicio regular pero no en las 3 horas antes de dormir. Revisarlas una a una con el paciente.",
        duracion: "20–30 minutos",
        materiales: ["Lista de higiene del sueño", "Plan personalizado"],
        tecnicas: ["Psicoeducación", "Planificación conductual"],
        notas: "La higiene del sueño sola raramente es suficiente para el insomnio crónico, pero es la base necesaria para las otras intervenciones.",
      },
      {
        numero: 3,
        titulo: "Control de estímulos",
        descripcion: "Recondicionar la asociación cama-sueño que se ha deteriorado. Reglas: 1) Ir a la cama solo cuando se tenga sueño real, 2) Si no está dormido en 20 minutos, levantarse y hacer algo tranquilo (leer, escuchar música suave) hasta tener sueño, 3) Repetir las veces que sea necesario, 4) Levantarse a la misma hora siempre, 5) No mirar el reloj. La resistencia más frecuente: 'Si me levanto me despierto más'. Respuesta: la cama asociada al insomnio es mucho peor.",
        duracion: "30 minutos de instrucción + práctica diaria",
        materiales: ["Instrucciones de control de estímulos"],
        tecnicas: ["Control de estímulos", "Recondiccionamiento"],
        notas: "El control de estímulos es especialmente efectivo para el insomnio de conciliación. Requiere persistencia: los primeros días el sueño puede empeorar antes de mejorar.",
      },
      {
        numero: 4,
        titulo: "Restricción de sueño",
        descripcion: "La técnica más potente de la TCC-I. Limitar el tiempo en cama al tiempo real que el paciente duerme (según el diario). Si duerme 5 horas, la ventana de sueño inicial es de 5 horas (ej: 1:00-6:00 AM). La restricción aumenta la presión homeostática de sueño, facilitando el inicio y mantenimiento. Criterios de ajuste: si eficiencia > 90% dos semanas seguidas, ampliar 15-30 minutos. Si eficiencia < 80%, reducir. Nunca menos de 5 horas.",
        duracion: "Práctica diaria durante 2-4 semanas",
        materiales: ["Diario de sueño", "Calculadora de eficiencia", "Protocolo de ajuste"],
        tecnicas: ["Restricción de sueño", "Titulación progresiva"],
        notas: "Genera mucha resistencia y fatiga inicial. Advertir al paciente: las primeras 1-2 semanas son difíciles pero son parte del proceso. Contraindicada en bipolar y epilepsia.",
      },
      {
        numero: 5,
        titulo: "Reestructuración cognitiva de creencias sobre el sueño",
        descripcion: "Las creencias disfuncionales más comunes: 'Necesito 8 horas', 'Si duermo poco el día será un desastre', 'Tengo el sueño roto', 'Mi cuerpo no sabe dormir'. Trabajar cada una con evidencia: ¿Cuánto duerme la media de la población? ¿Ha funcionado con menos de 8 horas alguna vez? Introducir la 'paradoja del esfuerzo': cuanto más se intenta dormir, más se activa. Practicar la intención paradójica: acostarse intentando mantenerse despierto.",
        duracion: "30–40 minutos",
        materiales: ["DBAS completado", "Hoja de reestructuración", "Datos de investigación sobre sueño"],
        tecnicas: ["Reestructuración cognitiva", "Intención paradójica", "Desdramatización"],
        notas: "Las creencias sobre 'necesitar 8 horas' son muy resistentes. La evidencia de que el paciente ha funcionado con menos horas muchas veces es el argumento más efectivo.",
      },
      {
        numero: 6,
        titulo: "Manejo de la activación cognitiva nocturna",
        descripcion: "El insomnio de mantenimiento frecuentemente involucra activación cognitiva nocturna: el cerebro 'repasa' listas y preocupaciones. Técnicas: 1) Tiempo de preocupación programado (30 min al atardecer para escribir preocupaciones y planes), 2) Técnica del cuaderno: escribir la lista de mañana antes de dormir, 3) Distracción cognitiva (contar hacia atrás, visualización), 4) Mindfulness del sueño: observar los pensamientos sin engancharse.",
        duracion: "20–30 minutos",
        materiales: ["Diario de preocupaciones", "Guía de mindfulness del sueño"],
        tecnicas: ["Tiempo de preocupación", "Mindfulness", "Distracción cognitiva"],
        notas: "El tiempo de preocupación programado es una de las técnicas más efectivas para el insomnio de mantenimiento por activación cognitiva.",
      },
    ],
    fichasRelacionadas: ["registro-sueno", "diario-estado-animo"],
    evidencia: "La TCC-I tiene Grado A de evidencia (NICE, APA, ESS). Más efectiva que la medicación hipnótica a largo plazo (Morin et al., 2006). Efectos se mantienen a los 2 años post-tratamiento.",
  },
  {
    slug: "protocolo-ira",
    titulo: "Protocolo para el Manejo de la Ira",
    descripcion: "Protocolo TCC para el manejo de la ira patológica: explosiones descontroladas, agresividad verbal o conductual, resentimiento crónico. Combina identificación de señales de alerta, regulación fisiológica, reestructuración cognitiva y entrenamiento en asertividad.",
    sesiones: "6–10 sesiones",
    indicaciones: [
      "Trastorno explosivo intermitente",
      "Dificultades de regulación emocional con ira predominante",
      "Problemas de agresividad en contexto laboral o familiar",
      "Ira como síntoma de depresión, PTSD o dolor crónico",
    ],
    contraindicaciones: [
      "Violencia física activa hacia personas (requiere protocolo de seguridad adicional)",
      "Trastorno antisocial de personalidad severo",
      "Intoxicación activa por sustancias",
    ],
    pasos: [
      {
        numero: 1,
        titulo: "Evaluación y psicoeducación sobre la ira",
        descripcion: "Evaluar el patrón de ira: disparadores, frecuencia, intensidad, forma de expresión, consecuencias. Introducir el modelo ABC: la ira explosiva no es causada por las situaciones sino por las interpretaciones (injusticia, falta de respeto, incompetencia). Distinguir entre la ira como señal (función válida) y la ira explosiva como respuesta desproporcionada. Crear el mapa de la ira del paciente: disparadores → pensamientos → sensaciones físicas → conducta → consecuencias.",
        duracion: "40–50 minutos",
        materiales: ["Mapa de la ira", "Registro de episodios de ira"],
        tecnicas: ["Evaluación funcional", "Psicoeducación", "Validación de la ira como señal"],
        notas: "La alianza terapéutica con estos pacientes requiere validar la ira como señal legítima antes de cuestionar la forma de expresarla. Suelen llegar a la defensiva esperando ser juzgados.",
      },
      {
        numero: 2,
        titulo: "Termómetro de la ira y señales de alerta",
        descripcion: "Construir el termómetro de ira personalizado (0-10). El paciente identifica sus señales específicas en cada nivel: nivel 3 (tensión muscular, pensamientos de irritación), nivel 5 (pensamientos recurrentes de injusticia, voz más alta), nivel 7 (calor facial, pensamiento 'voy a explotar'). La intervención debe ocurrir al nivel 3-5, antes de que la escalada sea irreversible. Identificar las señales corporales, cognitivas y conductuales de cada nivel.",
        duracion: "30–40 minutos",
        materiales: ["Termómetro de ira personalizado"],
        tecnicas: ["Conciencia interoceptiva", "Identificación de señales tempranas"],
        notas: "La mayoría de pacientes no ha identificado nunca las fases de la escalada: creen que 'de repente' estallan. Descubrir que hay señales tempranas es el primer paso para el control.",
      },
      {
        numero: 3,
        titulo: "Tiempo fuera y regulación fisiológica",
        descripcion: "El tiempo fuera como herramienta de intervención temprana: cuando la ira llega al nivel 5, pedir pausar la situación por 15-20 minutos para regularse. Distinguir del escape (huir del conflicto permanentemente) del tiempo fuera (volver con más recursos). Técnicas de regulación fisiológica: respiración diafragmática lenta, actividad física intensa como descarga, técnicas de relajación muscular rápida. Identificar cuál es el mejor regulador fisiológico para ese paciente.",
        duracion: "30–40 minutos",
        materiales: ["Protocolo de tiempo fuera", "Guía de respiración"],
        tecnicas: ["Tiempo fuera", "Respiración diafragmática", "Actividad física como regulación"],
        notas: "El compromiso de aplicar el tiempo fuera antes de que sea tarde (nivel 5, no nivel 8) es crucial. Practicar la comunicación del tiempo fuera ('Necesito 15 minutos') para que la otra parte no lo interprete como huida.",
      },
      {
        numero: 4,
        titulo: "Reestructuración cognitiva de pensamientos de injusticia",
        descripcion: "Trabajar los pensamientos más frecuentes: '¿Me está faltando al respeto deliberadamente?' Introducir la 'técnica de la intención': distinguir entre conducta maliciosa intencional e incompetencia/torpeza sin intención. La mayoría de las veces la gente es torpe, no maliciosa. Trabajar las exigencias absolutistas ('debe' hacerlo bien, 'tiene que' respetarme) vs. preferencias (me gustaría que...). Cuestionar la creencia 'si reacciono con ira, la gente me respeta más'.",
        duracion: "30–40 minutos",
        materiales: ["Registro de pensamientos de ira", "Hoja de reestructuración"],
        tecnicas: ["Cuestionamiento socrático", "Técnica de la intención", "Distinguir exigencias de preferencias"],
        notas: "La distinción entre intención maliciosa e incompetencia sin intención es uno de los momentos más impactantes del tratamiento para estos pacientes.",
      },
      {
        numero: 5,
        titulo: "Comunicación asertiva de la ira",
        descripcion: "La ira no expresada se acumula; la ira explosiva daña. La asertividad es el punto medio. Fórmula asertiva: 'Cuando ocurre [conducta específica], yo me siento [emoción], y necesito [petición concreta].' Trabajar la diferencia entre atacar a la persona ('eres un irresponsable') y describir la conducta ('cuando llegas tarde sin avisar, yo me siento ignorado'). Role-plays de situaciones reales del paciente.",
        duracion: "40–50 minutos (role-plays)",
        materiales: ["Guía de comunicación asertiva", "Fórmula asertiva"],
        tecnicas: ["Modelado", "Role-play", "Retroalimentación"],
        notas: "Los pacientes con ira explosiva frecuentemente no han tenido modelo de comunicación emocional asertiva. El role-play en sesión es esencial para practicar antes de aplicar en situaciones reales.",
      },
      {
        numero: 6,
        titulo: "Manejo del resentimiento crónico",
        descripcion: "El resentimiento crónico entre episodios es un mantenedor fundamental de la ira: actúa como 'gasolina'. Trabajar la función del resentimiento: ¿le ayuda a resolver la injusticia o solo a revivir el malestar? Técnicas: carta sin enviar (para liberar la emoción sin consecuencias relacionales), perspectiva temporal ('¿importará esto en 5 años?'), trabajo de la aceptación de lo que no se puede cambiar.",
        duracion: "30–40 minutos",
        materiales: ["Guía de la carta sin enviar"],
        tecnicas: ["Carta sin enviar", "Perspectiva temporal", "Aceptación"],
        notas: "La carta sin enviar no es para perdonar moralmente al otro sino para liberarse del peso emocional que el resentimiento supone para uno mismo.",
      },
    ],
    fichasRelacionadas: ["registro-ira", "registro-pensamientos"],
    evidencia: "Basado en el Anger Management de Novaco (1975), el modelo cognitivo de Deffenbacher y el protocolo de regulación emocional de Linehan. Evidencia sólida para trastorno explosivo intermitente y ira en PTSD.",
  },
  {
    slug: "protocolo-duelo",
    titulo: "Protocolo para el Duelo Complicado",
    descripcion: "Protocolo basado en el modelo de tareas del duelo de Worden y elementos de Terapia de Procesamiento del Duelo (CPT-G) para el tratamiento del duelo complicado o prolongado. Combina exposición gradual al dolor, reestructuración cognitiva y reconstrucción de sentido vital.",
    sesiones: "8–16 sesiones",
    indicaciones: [
      "Trastorno de duelo prolongado (> 12 meses en adultos, > 6 meses en niños)",
      "Duelo complicado con evitación intensa",
      "Duelo con pérdida de sentido vital o identidad",
      "Duelo con culpa o rabia significativas",
    ],
    contraindicaciones: [
      "Duelo agudo reciente (< 2-3 meses): dar tiempo al proceso natural",
      "Riesgo suicida activo sin estabilización previa",
      "Episodio depresivo mayor severo sin tratamiento farmacológico",
    ],
    pasos: [
      {
        numero: 1,
        titulo: "Acogida, evaluación y creación del espacio seguro",
        descripcion: "El primer objetivo es crear un espacio en que el paciente pueda hablar de la pérdida sin que nadie cambie de tema. Muchas personas en duelo complicado no han podido hablar del ser querido abiertamente. Evaluar: tipo de pérdida, relación con el fallecido, circunstancias de la muerte, factores de riesgo (muerte súbita, violenta, ambivalencia en la relación, dependencia funcional). Escala de duelo: ICG o PG-13. No introducir ninguna intervención en esta primera sesión.",
        duracion: "50 minutos — toda la sesión de escucha",
        materiales: ["ICG (Inventario de Duelo Complicado)", "PG-13"],
        tecnicas: ["Escucha activa", "Validación emocional"],
        notas: "La primera sesión debe ser principalmente de escucha. La prisa por intervenir es el error más frecuente con pacientes en duelo.",
      },
      {
        numero: 2,
        titulo: "Psicoeducación sobre el duelo y el duelo complicado",
        descripcion: "Explicar el modelo de las 4 tareas del duelo de Worden: 1) Aceptar la realidad de la pérdida, 2) Elaborar el dolor del duelo, 3) Adaptarse al mundo sin el ser querido, 4) Encontrar una conexión duradera mientras se emprende una nueva vida. Explicar la diferencia entre duelo normal y complicado: no es una cuestión de amor sino de bloqueo en alguna tarea. Trabajar el mito de 'el tiempo lo cura todo': el tiempo solo cura si se procesa activamente.",
        duracion: "30–40 minutos",
        materiales: ["Folleto sobre las tareas del duelo", "Diagrama del duelo complicado"],
        tecnicas: ["Psicoeducación", "Normalización"],
        notas: "El modelo de tareas es más útil que el de etapas porque orienta la intervención: ¿en qué tarea está atascado el paciente?",
      },
      {
        numero: 3,
        titulo: "Exposición gradual al dolor: trabajar la evitación",
        descripcion: "El duelo complicado frecuentemente involucra evitación del dolor: no hablar del fallecido, evitar fotos, lugares, música asociada. La evitación a corto plazo reduce el dolor pero a largo plazo lo congela. Construir jerarquía de exposición: desde hablar del fallecido en terapia hasta visitar el cementerio. Introducir la escritura expresiva como herramienta de procesamiento: escribir sobre el ser querido, sobre el momento de la muerte, sobre la vida sin él/ella.",
        duracion: "Práctica continua entre sesiones",
        materiales: ["Jerarquía de exposición al duelo", "Guía de escritura expresiva"],
        tecnicas: ["Exposición gradual", "Escritura expresiva", "Prevención de respuesta evitativa"],
        notas: "Distinguir entre el dolor que procesa (llanto catártico, narrativa coherente) y el dolor que rumiación (bucle sin resolución). El primero avanza, el segundo se estanca.",
      },
      {
        numero: 4,
        titulo: "Reestructuración cognitiva de creencias bloqueadoras",
        descripcion: "Las creencias más frecuentes que bloquean el duelo: 'avanzar es traicionarle', 'si dejo de sufrir, significa que no le quería', 'nunca podré ser feliz sin él/ella', 'fue culpa mía'. Trabajar cada una con cuestionamiento socrático. Pregunta clave: '¿Qué querría el ser querido para ti?' La mayoría de personas describen que el fallecido habría querido su felicidad. Separar el amor (que dura) del sufrimiento (que puede transformarse).",
        duracion: "30–40 minutos",
        materiales: ["Hoja de reestructuración del duelo"],
        tecnicas: ["Cuestionamiento socrático", "Perspectiva del ser querido", "Separar amor de sufrimiento"],
        notas: "La creencia 'avanzar = traicionar' es el núcleo cognitivo más frecuente y el que más bloquea el proceso. Debe abordarse explícitamente.",
      },
      {
        numero: 5,
        titulo: "Reconstrucción de identidad y sentido vital",
        descripcion: "En duelos complicados frecuentemente hay una identidad construida alrededor del rol perdido (esposa/o, madre/padre, cuidador/a). Trabajar la pregunta: ¿Quién eres tú más allá de ese rol? Explorar valores, intereses, capacidades que existían antes o independientemente del fallecido. Diseñar un plan de activación conductual muy gradual para reintroducir actividades con sentido. Trabajar el significado de la pérdida: ¿qué quieres hacer con el tiempo que te queda?",
        duracion: "40–50 minutos",
        materiales: ["Mapa de identidad", "Exploración de valores", "Plan de activación"],
        tecnicas: ["Mapa de identidad", "Activación conductual", "Trabajo de valores"],
        notas: "No precipitar: la reconstrucción de identidad no puede ocurrir antes de haber procesado suficientemente el dolor. Si se introduce demasiado pronto, el paciente lo vive como 'pasar página'.",
      },
      {
        numero: 6,
        titulo: "Encontrar conexión duradera y cerrar el proceso",
        descripcion: "La cuarta tarea del duelo: encontrar una conexión duradera con el fallecido mientras se emprende una nueva vida. El objetivo no es 'olvidar' sino transformar la relación: de una presencia física a una presencia interior. Técnicas: ritual de conexión diario (conversar internamente con el fallecido), carta de integración (escribirle contando cómo está y prometiéndole vivir la vida), identificar el legado o los valores del fallecido que el paciente puede encarnar.",
        duracion: "40–50 minutos",
        materiales: ["Guía de la carta de integración"],
        tecnicas: ["Ritual de conexión", "Carta de integración", "Legado"],
        notas: "El cierre del duelo no significa que ya no se eche de menos al fallecido. Significa que se puede vivir con plenitud a pesar de la ausencia.",
      },
    ],
    fichasRelacionadas: ["ficha-duelo", "plan-seguridad-emocional"],
    evidencia: "Basado en el modelo de tareas del duelo de Worden (2009), la Terapia del Duelo Complicado de Shear (2005) y la Terapia de Duelo Prolongado de Boelen (2010). La TCC para el duelo complicado tiene Grado B de evidencia.",
  },
];
