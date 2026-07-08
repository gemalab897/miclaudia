import { Worksheet } from "./worksheets";

export const anxietyDepressionExpanded2Worksheets: Worksheet[] = [
  {
    id: "anx-dep-baja-motivacion",
    category: "anxiety-depression",
    title: "Activación Conductual para la Baja Motivación",
    description: "Planificación gradual de actividades para romper el ciclo de inactividad y depresión.",
    goal: "Aumentar la activación conductual mediante actividades pequeñas y alcanzables.",
    instructions: "Planifica actividades graduales, comenzando por las más simples.",
    fields: [
      {
        id: "nivel_actual",
        label: "Nivel de motivación actual (0-10)",
        type: "scale",
        min: 0,
        max: 10
      },
      {
        id: "actividades_antes",
        label: "Actividades que disfrutabas antes de la depresión",
        type: "textarea",
        rows: 3,
        placeholder: "Lista actividades que te gustaban aunque ahora no tengas ganas..."
      },
      {
        id: "plan_semana",
        label: "Actividades planificadas para esta semana",
        type: "table",
        columns: [
          { key: "actividad", label: "Actividad" },
          { key: "dia", label: "Día" },
          { key: "duracion", label: "Duración" },
          { key: "realizada", label: "¿Realizada?" }
        ],
        rows_count: 7
      },
      {
        id: "barreras",
        label: "Barreras anticipadas y cómo las manejaré",
        type: "textarea",
        rows: 3,
        placeholder: "¿Qué podría impedirme? ¿Cómo lo afrontaré?"
      }
    ],
    printable: true
  },
  {
    id: "anx-dep-preocupacion-productiva",
    category: "anxiety-depression",
    title: "Preocupación Productiva vs. Improductiva",
    description: "Aprende a distinguir entre preocupaciones que puedes solucionar y las que no.",
    goal: "Redirigir la energía de preocupaciones improductivas hacia acciones concretas.",
    instructions: "Clasifica tus preocupaciones y desarrolla un plan de acción cuando sea posible.",
    fields: [
      {
        id: "lista_preocupaciones",
        label: "Lista de preocupaciones actuales",
        type: "textarea",
        rows: 4,
        placeholder: "Escribe todo lo que te preocupa sin filtrar..."
      },
      {
        id: "clasificacion",
        label: "Clasificación de preocupaciones",
        type: "table",
        columns: [
          { key: "preocupacion", label: "Preocupación" },
          { key: "tipo", label: "Productiva/Improductiva" },
          { key: "accion", label: "Acción posible" }
        ],
        rows_count: 5
      },
      {
        id: "tiempo_preocupacion",
        label: "Tiempo programado para preocuparme (\"worry time\")",
        type: "text",
        placeholder: "Ej: 15 minutos a las 5pm"
      },
      {
        id: "distraccion_resto",
        label: "¿Qué haré cuando la preocupación llegue fuera del tiempo programado?",
        type: "textarea",
        rows: 2,
        placeholder: "Técnicas de distracción o aplazamiento..."
      }
    ],
    printable: true
  },
  {
    id: "anx-dep-autocompasion",
    category: "anxiety-depression",
    title: "Autocompasión en la Depresión y Ansiedad",
    description: "Desarrollo de una relación más amable y compasiva con uno mismo durante el malestar.",
    goal: "Reducir la autocrítica y cultivar la autocompasión como herramienta terapéutica.",
    instructions: "Practica responder a tu sufrimiento con la misma amabilidad que darías a un amigo.",
    fields: [
      {
        id: "autocritica_habitual",
        label: "¿Cómo te hablas a ti mismo/a cuando tienes dificultades?",
        type: "textarea",
        rows: 3,
        placeholder: "Escribe las frases autocríticas más frecuentes..."
      },
      {
        id: "amigo_imaginario",
        label: "Si un amigo estuviera en tu misma situación, ¿qué le dirías?",
        type: "textarea",
        rows: 3,
        placeholder: "¿Cómo hablarías con alguien que quieres que está sufriendo?"
      },
      {
        id: "reencuadre_compasivo",
        label: "Reformulación compasiva de tus pensamientos autocríticos",
        type: "textarea",
        rows: 3,
        placeholder: "Reescribe las críticas con voz amable y comprensiva..."
      },
      {
        id: "humanidad_comun",
        label: "¿Hay otras personas que sufren algo similar? ¿Qué significa esto?",
        type: "textarea",
        rows: 3,
        placeholder: "Reflexiona sobre la humanidad compartida en el sufrimiento..."
      },
      {
        id: "frase_autocompasiva",
        label: "Mi frase de autocompasión personalizada",
        type: "text",
        placeholder: "Una frase que me recuerde ser amable conmigo mismo/a..."
      }
    ],
    printable: true
  },
  {
    id: "anx-dep-exposicion-gradual",
    category: "anxiety-depression",
    title: "Jerarquía de Exposición Gradual",
    description: "Creación de un plan de exposición gradual para situaciones evitadas por ansiedad.",
    goal: "Reducir la evitación y enfrentar gradualmente situaciones generadoras de ansiedad.",
    instructions: "Lista situaciones temidas y ordénalas de menor a mayor dificultad.",
    fields: [
      {
        id: "situaciones_evitadas",
        label: "Situaciones que evito debido a la ansiedad",
        type: "textarea",
        rows: 4,
        placeholder: "Lista todas las situaciones, lugares o actividades que evitas..."
      },
      {
        id: "jerarquia",
        label: "Jerarquía de exposición (0=sin ansiedad, 100=máxima ansiedad)",
        type: "table",
        columns: [
          { key: "paso", label: "Paso" },
          { key: "situacion", label: "Situación" },
          { key: "ansiedad", label: "Nivel (0-100)" }
        ],
        rows_count: 8
      },
      {
        id: "primer_paso",
        label: "Mi primer paso de exposición esta semana",
        type: "textarea",
        rows: 2,
        placeholder: "Descripción detallada del primer paso que practicarás..."
      },
      {
        id: "registro_exposicion",
        label: "Registro de práctica de exposición",
        type: "textarea",
        rows: 3,
        placeholder: "¿Qué ocurrió? ¿Cuál fue tu nivel de ansiedad antes, durante y después?"
      }
    ],
    printable: true
  },
  {
    id: "anx-dep-rumiacion",
    category: "anxiety-depression",
    title: "Manejo de la Rumiación",
    description: "Estrategias para interrumpir y transformar los patrones de rumiación depresiva.",
    goal: "Reducir la rumiación y aumentar la flexibilidad mental.",
    instructions: "Identifica tus patrones de rumiación y practica las técnicas de interrupción.",
    fields: [
      {
        id: "temas_rumiacion",
        label: "Temas principales de mi rumiación",
        type: "textarea",
        rows: 3,
        placeholder: "¿Sobre qué piensas repetitivamente? ¿Cuándo suele ocurrir?"
      },
      {
        id: "tipo_rumiacion",
        label: "Tipo de rumiación que reconozco en mí",
        type: "checklist",
        options: [
          { id: "culpa_y_autorreproche", label: "Culpa y autorreproche" },
          { id: "an_lisis_de_por_qu_me_siento_a", label: "Análisis de por qué me siento así" },
          { id: "comparaci_n_con_c_mo_era_antes", label: "Comparación con cómo era antes" },
          { id: "predicciones_negativas_sobre_e", label: "Predicciones negativas sobre el futuro" },
          { id: "preguntas_sin_respuesta_por_qu", label: "Preguntas sin respuesta (¿por qué yo?)" },
          { id: "revisi_n_de_conversaciones_pas", label: "Revisión de conversaciones pasadas" }
        ]
      },
      {
        id: "tecnicas_interrupcion",
        label: "Técnicas de interrupción que voy a practicar",
        type: "checklist",
        options: [
          { id: "tiempo_designado_para_rumiar", label: "Tiempo designado para rumiar" },
          { id: "distracci_n_activa", label: "Distracción activa" },
          { id: "mindfulness_observar_sin_engan", label: "Mindfulness (observar sin engancharse)" },
          { id: "acci_n_concreta_hacer_algo", label: "Acción concreta (hacer algo)" },
          { id: "escribir_en_un_diario", label: "Escribir en un diario" },
          { id: "hablar_con_alguien", label: "Hablar con alguien" }
        ]
      },
      {
        id: "diferencia_reflexion",
        label: "¿Cuál es la diferencia entre rumiar y reflexionar útilmente?",
        type: "textarea",
        rows: 3,
        placeholder: "¿Cómo distingues pensar de forma útil de dar vueltas sin avanzar?"
      }
    ],
    printable: true
  },
  {
    id: "anx-dep-crisis-ansiedad",
    category: "anxiety-depression",
    title: "Plan de Crisis para la Ansiedad Aguda",
    description: "Protocolo paso a paso para manejar episodios de ansiedad intensa o ataques de pánico.",
    goal: "Disponer de un plan claro para afrontar episodios de ansiedad aguda.",
    instructions: "Practica este plan antes de necesitarlo para que sea automático en el momento de crisis.",
    fields: [
      {
        id: "senales_crisis",
        label: "Señales de que se acerca una crisis de ansiedad",
        type: "textarea",
        rows: 3,
        placeholder: "¿Cuáles son las primeras señales físicas y mentales?"
      },
      {
        id: "paso1",
        label: "Paso 1: Reconocer y aceptar",
        type: "textarea",
        rows: 2,
        placeholder: "\"Esto es ansiedad. Es molesta pero no peligrosa. Pasará.\" Escribe tu versión..."
      },
      {
        id: "paso2",
        label: "Paso 2: Respiración de emergencia",
        type: "textarea",
        rows: 2,
        placeholder: "Describe la técnica de respiración que usarás (4-7-8, diafragmática, etc.)"
      },
      {
        id: "paso3",
        label: "Paso 3: Grounding (conectar con el presente)",
        type: "textarea",
        rows: 2,
        placeholder: "5 cosas que ves, 4 que tocas, 3 que escuchas, 2 que hueles, 1 que saboreas..."
      },
      {
        id: "paso4",
        label: "Paso 4: Acción post-crisis",
        type: "textarea",
        rows: 2,
        placeholder: "¿Qué harás una vez que la ansiedad baje?"
      },
      {
        id: "frases_crisis",
        label: "Frases de apoyo para usar en la crisis",
        type: "textarea",
        rows: 3,
        placeholder: "\"Esto pasará. Estoy a salvo. Puedo manejarlo.\""
      }
    ],
    printable: true
  },
  {
    id: "anx-dep-logros-diarios",
    category: "anxiety-depression",
    title: "Registro de Logros y Victorias Diarias",
    description: "Seguimiento diario de logros, por pequeños que sean, para combatir la visión negativa de la depresión.",
    goal: "Contrarrestar el sesgo negativista de la depresión registrando evidencias de logro.",
    instructions: "Registra diariamente al menos tres logros, independientemente de su tamaño.",
    fields: [
      {
        id: "explicacion",
        label: "¿Por qué es importante registrar logros en la depresión?",
        type: "textarea",
        rows: 2,
        placeholder: "La depresión distorsiona la percepción. Registrar logros da evidencia objetiva..."
      },
      {
        id: "registro_semanal",
        label: "Registro semanal de logros",
        type: "table",
        columns: [
          { key: "dia", label: "Día" },
          { key: "logro1", label: "Logro 1" },
          { key: "logro2", label: "Logro 2" },
          { key: "logro3", label: "Logro 3" }
        ],
        rows_count: 7
      },
      {
        id: "patrones",
        label: "Patrones que noto en mis logros",
        type: "textarea",
        rows: 3,
        placeholder: "¿Qué áreas de logro aparecen más? ¿Qué te dice esto de ti?"
      }
    ],
    printable: true
  },
  {
    id: "anx-dep-higiene-mental",
    category: "anxiety-depression",
    title: "Higiene Mental y Rutinas de Bienestar",
    description: "Establecimiento de hábitos diarios que apoyan la salud mental.",
    goal: "Crear una rutina de bienestar que prevenga recaídas y apoye la recuperación.",
    instructions: "Diseña una rutina diaria que incluya actividades protectoras de tu salud mental.",
    fields: [
      {
        id: "rutina_manana",
        label: "Mi rutina de mañana ideal",
        type: "textarea",
        rows: 3,
        placeholder: "¿Qué actividades te gustaría hacer cada mañana para empezar bien el día?"
      },
      {
        id: "habitos_protectores",
        label: "Hábitos protectores que quiero incorporar",
        type: "checklist",
        options: [
          { id: "ejercicio_f_sico_regular", label: "Ejercicio físico regular" },
          { id: "sue_o_consistente", label: "Sueño consistente" },
          { id: "alimentaci_n_equilibrada", label: "Alimentación equilibrada" },
          { id: "conexi_n_social", label: "Conexión social" },
          { id: "tiempo_en_la_naturaleza", label: "Tiempo en la naturaleza" },
          { id: "pr_ctica_de_mindfulness", label: "Práctica de mindfulness" },
          { id: "actividades_creativas", label: "Actividades creativas" },
          { id: "l_mites_con_pantallas_y_notici", label: "Límites con pantallas y noticias" },
          { id: "tiempo_de_ocio_y_descanso", label: "Tiempo de ocio y descanso" },
          { id: "pr_ctica_espiritual_o_de_medit", label: "Práctica espiritual o de meditación" }
        ]
      },
      {
        id: "rutina_noche",
        label: "Mi rutina de noche para desconectar",
        type: "textarea",
        rows: 3,
        placeholder: "Actividades para cerrar el día y preparar el sueño..."
      },
      {
        id: "plan_recaida",
        label: "Plan si la rutina se rompe",
        type: "textarea",
        rows: 2,
        placeholder: "¿Qué harás cuando no puedas seguir la rutina un día?"
      }
    ],
    printable: true
  },
  {
    id: "anx-dep-pensamiento-catastrofico",
    category: "anxiety-depression",
    title: "Desdramatización del Pensamiento Catastrófico",
    description: "Técnica para evaluar de forma realista las predicciones catastróficas.",
    goal: "Reducir el pensamiento catastrófico evaluando probabilidades y consecuencias reales.",
    instructions: "Cuando tengas un pensamiento catastrófico, sigue las preguntas guía.",
    fields: [
      {
        id: "catastrofe_imaginada",
        label: "¿Cuál es la catástrofe que imaginas?",
        type: "textarea",
        rows: 2,
        placeholder: "Describe el peor escenario que tu mente imagina..."
      },
      {
        id: "probabilidad",
        label: "¿Cuál es la probabilidad real de que ocurra? (0-100%)",
        type: "text",
        placeholder: "Basándote en hechos, no en sentimientos..."
      },
      {
        id: "si_ocurriera",
        label: "Si ocurriera, ¿qué harías?",
        type: "textarea",
        rows: 3,
        placeholder: "¿Qué recursos tendrías? ¿Cómo lo manejarías?"
      },
      {
        id: "lo_peor_tolerable",
        label: "¿Podrías tolerar lo peor si ocurriera?",
        type: "textarea",
        rows: 2,
        placeholder: "¿Has superado cosas difíciles antes? ¿Qué te dice eso?"
      },
      {
        id: "escenario_probable",
        label: "¿Cuál es el escenario más probable?",
        type: "textarea",
        rows: 2,
        placeholder: "Si no la catástrofe, ¿qué es lo que probablemente pasará?"
      }
    ],
    printable: true
  },
  {
    id: "anx-dep-esquema-valores",
    category: "anxiety-depression",
    title: "Mapa de Valores y Dirección Vital",
    description: "Identificación de valores personales para orientar la acción incluso en presencia de síntomas.",
    goal: "Conectar con valores personales como guía de acción cuando la motivación está baja.",
    instructions: "Identifica tus valores más importantes y cómo vivirlos a pesar de los síntomas.",
    fields: [
      {
        id: "areas_vida",
        label: "Áreas de vida que más valoras",
        type: "checklist",
        options: [{ id: "familia", label: "Familia" }, { id: "pareja", label: "Pareja" }, { id: "amistades", label: "Amistades" }, { id: "trabajo_carrera", label: "Trabajo/Carrera" }, { id: "salud", label: "Salud" }, { id: "creatividad", label: "Creatividad" }, { id: "espiritualidad", label: "Espiritualidad" }, { id: "comunidad", label: "Comunidad" }, { id: "aprendizaje", label: "Aprendizaje" }, { id: "ocio", label: "Ocio" }, { id: "naturaleza", label: "Naturaleza" }]
      },
      {
        id: "valores_principales",
        label: "Mis 3-5 valores más importantes",
        type: "textarea",
        rows: 3,
        placeholder: "¿Qué es lo que más importa en tu vida? ¿Qué quieres representar?"
      },
      {
        id: "conflicto_sintomas",
        label: "¿Cómo interfieren la ansiedad/depresión con vivir tus valores?",
        type: "textarea",
        rows: 3,
        placeholder: "¿Qué te impiden hacer los síntomas?"
      },
      {
        id: "acciones_valores",
        label: "Acciones concretas alineadas con mis valores esta semana",
        type: "textarea",
        rows: 3,
        placeholder: "Pasos pequeños que puedo dar en dirección a lo que valoro..."
      }
    ],
    printable: true
  },
  {
    id: "anx-dep-pensamiento-dicotomico",
    category: "anxiety-depression",
    title: "Superando el Pensamiento Todo-o-Nada",
    description: "Identificación y reestructuración del pensamiento dicotómico en la ansiedad y depresión.",
    goal: "Desarrollar pensamiento más flexible y matizado.",
    instructions: "Identifica pensamientos todo-o-nada y busca perspectivas más equilibradas.",
    fields: [
      {
        id: "ejemplos_dicotomicos",
        label: "Ejemplos de mi pensamiento todo-o-nada",
        type: "textarea",
        rows: 3,
        placeholder: "\"O lo hago perfecto o es un fracaso\", \"Nadie me quiere\", \"Todo sale mal\"..."
      },
      {
        id: "escala_gris",
        label: "Si usaras una escala del 0 al 100, ¿dónde estaría realmente?",
        type: "textarea",
        rows: 3,
        placeholder: "Para cada pensamiento, busca el punto real en la escala..."
      },
      {
        id: "matices",
        label: "¿Qué matices o excepciones existen?",
        type: "textarea",
        rows: 3,
        placeholder: "¿Hay casos donde esto NO se cumple? ¿Hay partes buenas y malas?"
      },
      {
        id: "pensamiento_flexible",
        label: "Versión más flexible y realista del pensamiento",
        type: "textarea",
        rows: 3,
        placeholder: "Reformula cada pensamiento dicotómico de forma más matizada..."
      }
    ],
    printable: true
  },
  {
    id: "anx-dep-autocuidado-emocional",
    category: "anxiety-depression",
    title: "Plan de Autocuidado Emocional",
    description: "Diseño de un plan personalizado de autocuidado para mantener el bienestar emocional.",
    goal: "Establecer prácticas regulares de autocuidado como prevención y manejo de síntomas.",
    instructions: "Identifica qué te recarga emocionalmente y crea un plan sostenible.",
    fields: [
      {
        id: "recarga_emocional",
        label: "¿Qué actividades te recargan emocionalmente?",
        type: "textarea",
        rows: 3,
        placeholder: "Actividades que restauran tu energía y bienestar..."
      },
      {
        id: "senales_agotamiento",
        label: "Señales de que necesito más autocuidado",
        type: "textarea",
        rows: 3,
        placeholder: "¿Cómo sabes cuando estás emocionalmente agotado/a?"
      },
      {
        id: "plan_diario",
        label: "Práctica diaria de autocuidado (5-15 minutos)",
        type: "textarea",
        rows: 2,
        placeholder: "Una práctica pequeña y consistente que puedas hacer cada día..."
      },
      {
        id: "plan_semanal",
        label: "Actividad semanal de autocuidado (más extensa)",
        type: "textarea",
        rows: 2,
        placeholder: "Una actividad más larga para recargar a lo largo de la semana..."
      },
      {
        id: "compromisos",
        label: "Me comprometo a...",
        type: "textarea",
        rows: 2,
        placeholder: "Escribe un compromiso específico contigo mismo/a..."
      }
    ],
    printable: true
  },
  {
    id: "anx-dep-gratitud-conductual",
    category: "anxiety-depression",
    title: "Gratitud Conductual",
    description: "Práctica de gratitud activa que va más allá de listar pensamientos positivos.",
    goal: "Aumentar la experiencia de gratitud mediante acciones concretas.",
    instructions: "Practica la gratitud no solo pensándola sino viviéndola con acciones.",
    fields: [
      {
        id: "gratitud_personas",
        label: "Personas por las que siento gratitud y por qué",
        type: "textarea",
        rows: 3,
        placeholder: "¿Quién ha tenido impacto positivo en tu vida?"
      },
      {
        id: "carta_gratitud",
        label: "Carta de gratitud a alguien importante",
        type: "textarea",
        rows: 5,
        placeholder: "Escribe una carta expresando tu gratitud genuina..."
      },
      {
        id: "gratitud_dificultades",
        label: "¿Puedes encontrar algo valioso en las dificultades actuales?",
        type: "textarea",
        rows: 3,
        placeholder: "No es obligatorio, pero ¿hay algo que hayas aprendido o ganado?"
      },
      {
        id: "accion_gratitud",
        label: "Acción de gratitud que realizaré esta semana",
        type: "textarea",
        rows: 2,
        placeholder: "Algo concreto que harás para expresar gratitud a alguien..."
      }
    ],
    printable: true
  }
];
