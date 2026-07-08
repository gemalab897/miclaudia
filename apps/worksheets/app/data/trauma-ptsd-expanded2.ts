import { Worksheet } from "./worksheets";

export const traumaPtsdExpanded2Worksheets: Worksheet[] = [
  {
    id: "trauma-linea-tiempo",
    category: "trauma-ptsd",
    title: "Línea de Tiempo Traumática",
    description: "Mapeo visual de eventos traumáticos y su impacto a lo largo del tiempo.",
    goal: "Obtener una perspectiva temporal de experiencias traumáticas y recursos de afrontamiento.",
    instructions: "Coloca eventos significativos en la línea de tiempo, incluyendo traumas y momentos de fortaleza.",
    fields: [
      {
        id: "infancia",
        label: "Infancia (0-12 años): eventos importantes",
        type: "textarea",
        rows: 3,
        placeholder: "Describe eventos significativos..."
      },
      {
        id: "adolescencia",
        label: "Adolescencia (13-17 años): eventos importantes",
        type: "textarea",
        rows: 3,
        placeholder: "Describe eventos significativos..."
      },
      {
        id: "adultez_temprana",
        label: "Adultez temprana (18-30 años): eventos importantes",
        type: "textarea",
        rows: 3,
        placeholder: "Describe eventos significativos..."
      },
      {
        id: "adultez",
        label: "Adultez (30+ años): eventos importantes",
        type: "textarea",
        rows: 3,
        placeholder: "Describe eventos significativos..."
      },
      {
        id: "recursos",
        label: "Momentos de fortaleza y recursos identificados",
        type: "textarea",
        rows: 3,
        placeholder: "¿Qué te ayudó a sobrevivir y adaptarte?"
      }
    ],
    printable: true
  },
  {
    id: "trauma-estabilizacion",
    category: "trauma-ptsd",
    title: "Plan de Estabilización",
    description: "Herramientas y estrategias para mantener la estabilidad emocional durante el trabajo traumático.",
    goal: "Crear un conjunto personalizado de recursos de estabilización.",
    instructions: "Identifica tus señales de alarma y las estrategias que te ayudan a estabilizarte.",
    fields: [
      {
        id: "senales_alarma",
        label: "Mis señales de alarma (pensamientos, sensaciones, conductas)",
        type: "textarea",
        rows: 3,
        placeholder: "¿Cómo sabes que estás desestabilizándote?"
      },
      {
        id: "estrategias_fisicas",
        label: "Estrategias de estabilización físicas",
        type: "checklist",
        options: [{ id: "respiraci_n_diafragm_tica", label: "Respiración diafragmática" }, { id: "t_cnica_5_4_3_2_1", label: "Técnica 5-4-3-2-1" }, { id: "contacto_con_el_suelo_groundin", label: "Contacto con el suelo (grounding)" }, { id: "ejercicio_f_sico_suave", label: "Ejercicio físico suave" }, { id: "temperatura_agua_fr_a_caliente", label: "Temperatura (agua fría/caliente)" }, { id: "movimiento_r_tmico", label: "Movimiento rítmico" }]
      },
      {
        id: "estrategias_cognitivas",
        label: "Estrategias de estabilización cognitivas",
        type: "textarea",
        rows: 3,
        placeholder: "Frases de orientación al presente, recordatorios de seguridad..."
      },
      {
        id: "personas_apoyo",
        label: "Personas de apoyo (nombre y contacto)",
        type: "textarea",
        rows: 3,
        placeholder: "¿A quién puedes llamar cuando necesitas apoyo?"
      },
      {
        id: "lugar_seguro",
        label: "Mi lugar seguro (descripción detallada)",
        type: "textarea",
        rows: 3,
        placeholder: "Describe un lugar real o imaginario donde te sientes seguro/a..."
      }
    ],
    printable: true
  },
  {
    id: "trauma-creencias-nucleares",
    category: "trauma-ptsd",
    title: "Identificación de Creencias Nucleares Traumáticas",
    description: "Exploración de creencias profundas sobre uno mismo, el mundo y los demás derivadas del trauma.",
    goal: "Identificar y comenzar a cuestionar creencias nucleares negativas relacionadas con el trauma.",
    instructions: "Reflexiona honestamente sobre las creencias que el trauma ha generado en ti.",
    fields: [
      {
        id: "creencias_yo",
        label: "Creencias sobre mí mismo/a",
        type: "textarea",
        rows: 3,
        placeholder: "Ej: Soy débil, no valgo, soy culpable..."
      },
      {
        id: "creencias_mundo",
        label: "Creencias sobre el mundo",
        type: "textarea",
        rows: 3,
        placeholder: "Ej: El mundo es peligroso, no hay lugar seguro..."
      },
      {
        id: "creencias_otros",
        label: "Creencias sobre los demás",
        type: "textarea",
        rows: 3,
        placeholder: "Ej: No se puede confiar en nadie, todos me harán daño..."
      },
      {
        id: "origen_creencias",
        label: "¿De dónde vienen estas creencias?",
        type: "textarea",
        rows: 3,
        placeholder: "¿Qué experiencias las originaron?"
      },
      {
        id: "evidencia_alternativa",
        label: "Evidencia que contradice estas creencias",
        type: "textarea",
        rows: 3,
        placeholder: "¿Hay momentos en que estas creencias no se cumplieron?"
      }
    ],
    printable: true
  },
  {
    id: "trauma-ventana-tolerancia",
    category: "trauma-ptsd",
    title: "Ventana de Tolerancia",
    description: "Comprensión y manejo de la activación del sistema nervioso en el contexto del trauma.",
    goal: "Aprender a reconocer y regular los estados de activación relacionados con el trauma.",
    instructions: "Identifica cómo se manifiesta la hiperactivación e hipoactivación en tu cuerpo y mente.",
    fields: [
      {
        id: "hiperactivacion",
        label: "Signos de hiperactivación (demasiada activación)",
        type: "checklist",
        options: [{ id: "ansiedad_p_nico", label: "Ansiedad/pánico" }, { id: "irritabilidad_rabia", label: "Irritabilidad/rabia" }, { id: "hipervigilancia", label: "Hipervigilancia" }, { id: "pensamientos_acelerados", label: "Pensamientos acelerados" }, { id: "insomnio", label: "Insomnio" }, { id: "respuesta_de_sobresalto", label: "Respuesta de sobresalto" }, { id: "flashbacks", label: "Flashbacks" }, { id: "disociaci_n", label: "Disociación" }]
      },
      {
        id: "hipoactivacion",
        label: "Signos de hipoactivación (poca activación)",
        type: "checklist",
        options: [{ id: "entumecimiento_emocional", label: "Entumecimiento emocional" }, { id: "disociaci_n_desconexi_n", label: "Disociación/desconexión" }, { id: "fatiga_extrema", label: "Fatiga extrema" }, { id: "dificultad_para_pensar", label: "Dificultad para pensar" }, { id: "sensaci_n_de_vac_o", label: "Sensación de vacío" }, { id: "movimientos_lentos", label: "Movimientos lentos" }, { id: "dificultad_para_hablar", label: "Dificultad para hablar" }]
      },
      {
        id: "zona_tolerancia",
        label: "¿Cómo se siente estar dentro de mi ventana de tolerancia?",
        type: "textarea",
        rows: 3,
        placeholder: "Describe cómo te sientes cuando estás equilibrado/a..."
      },
      {
        id: "regulacion_hacia_arriba",
        label: "Estrategias para aumentar la activación (si estoy muy abajo)",
        type: "textarea",
        rows: 2,
        placeholder: "Movimiento, estimulación sensorial, contacto social..."
      },
      {
        id: "regulacion_hacia_abajo",
        label: "Estrategias para reducir la activación (si estoy muy arriba)",
        type: "textarea",
        rows: 2,
        placeholder: "Respiración, grounding, movimiento lento..."
      }
    ],
    printable: true
  },
  {
    id: "trauma-narrativa",
    category: "trauma-ptsd",
    title: "Narrativa del Trauma",
    description: "Construcción gradual de una narrativa coherente de la experiencia traumática.",
    goal: "Integrar la experiencia traumática en una narrativa de vida coherente.",
    instructions: "Con el apoyo de tu terapeuta, escribe sobre el trauma utilizando las secciones guía.",
    therapistNote: "Esta hoja debe usarse solo cuando el cliente está estabilizado y dentro de su ventana de tolerancia. Proceder gradualmente.",
    fields: [
      {
        id: "antes",
        label: "Antes del trauma: ¿cómo era tu vida?",
        type: "textarea",
        rows: 4,
        placeholder: "Describe tu vida, tus rutinas, tus relaciones antes de la experiencia..."
      },
      {
        id: "durante",
        label: "Durante el trauma: ¿qué sucedió? (con tus palabras, a tu ritmo)",
        type: "textarea",
        rows: 5,
        placeholder: "Escribe lo que puedas. No tienes que incluir todo en una sola sesión..."
      },
      {
        id: "despues",
        label: "Después del trauma: ¿cómo te afectó?",
        type: "textarea",
        rows: 4,
        placeholder: "¿Cómo cambió tu vida, tus relaciones, tu visión de ti mismo/a?"
      },
      {
        id: "ahora",
        label: "Ahora: ¿cómo ves esta experiencia hoy?",
        type: "textarea",
        rows: 3,
        placeholder: "¿Qué significado le das? ¿Qué has aprendido sobre ti mismo/a?"
      }
    ],
    printable: true
  },
  {
    id: "trauma-duelo-perdidas",
    category: "trauma-ptsd",
    title: "Duelo por las Pérdidas del Trauma",
    description: "Reconocimiento y procesamiento de las pérdidas asociadas a la experiencia traumática.",
    goal: "Validar y procesar el duelo por lo que el trauma arrebató.",
    instructions: "Reflexiona sobre las diferentes pérdidas que el trauma ha traído a tu vida.",
    fields: [
      {
        id: "perdidas_identidad",
        label: "Pérdidas en mi identidad y autoconcepto",
        type: "textarea",
        rows: 3,
        placeholder: "¿Qué parte de quién eras se perdió con el trauma?"
      },
      {
        id: "perdidas_relaciones",
        label: "Pérdidas en relaciones y vínculos",
        type: "textarea",
        rows: 3,
        placeholder: "¿Qué relaciones se dañaron o perdieron?"
      },
      {
        id: "perdidas_capacidades",
        label: "Pérdidas en capacidades y funcionamiento",
        type: "textarea",
        rows: 3,
        placeholder: "¿Qué podías hacer antes que ahora es difícil?"
      },
      {
        id: "perdidas_futuro",
        label: "Pérdidas en sueños y planes de futuro",
        type: "textarea",
        rows: 3,
        placeholder: "¿Qué planes o sueños se vieron afectados?"
      },
      {
        id: "reconocimiento",
        label: "Mensaje de reconocimiento a ti mismo/a por estas pérdidas",
        type: "textarea",
        rows: 3,
        placeholder: "¿Qué quieres decirte sobre lo que has perdido y sobrevivido?"
      }
    ],
    printable: true
  },
  {
    id: "trauma-recursos-internos",
    category: "trauma-ptsd",
    title: "Inventario de Recursos Internos",
    description: "Identificación de fortalezas, habilidades y recursos personales desarrollados a pesar del trauma.",
    goal: "Reconocer la resiliencia y los recursos internos para la recuperación.",
    instructions: "Identifica las capacidades y fortalezas que te han ayudado a sobrevivir y adaptarte.",
    fields: [
      {
        id: "fortalezas_personales",
        label: "Mis fortalezas personales",
        type: "checklist",
        options: [{ id: "valent_a", label: "Valentía" }, { id: "persistencia", label: "Persistencia" }, { id: "creatividad", label: "Creatividad" }, { id: "empat_a", label: "Empatía" }, { id: "inteligencia", label: "Inteligencia" }, { id: "humor", label: "Humor" }, { id: "adaptabilidad", label: "Adaptabilidad" }, { id: "intuici_n", label: "Intuición" }, { id: "determinaci_n", label: "Determinación" }, { id: "compasi_n", label: "Compasión" }]
      },
      {
        id: "habilidades_afrontamiento",
        label: "Habilidades de afrontamiento que he desarrollado",
        type: "textarea",
        rows: 3,
        placeholder: "¿Qué estrategias has aprendido para manejar el trauma?"
      },
      {
        id: "logros_supervivencia",
        label: "Logros de supervivencia (cosas que has superado)",
        type: "textarea",
        rows: 3,
        placeholder: "¿Qué has conseguido a pesar del trauma?"
      },
      {
        id: "valores_guia",
        label: "Valores que me guían",
        type: "textarea",
        rows: 3,
        placeholder: "¿Qué es importante para ti? ¿Qué te da dirección?"
      },
      {
        id: "uso_recursos",
        label: "¿Cómo puedo usar estos recursos en mi recuperación?",
        type: "textarea",
        rows: 3,
        placeholder: "Planes concretos para apoyarte en fortalezas existentes..."
      }
    ],
    printable: true
  },
  {
    id: "trauma-seguridad-corporal",
    category: "trauma-ptsd",
    title: "Reconexión con el Cuerpo Seguro",
    description: "Ejercicios para restablecer una relación segura y positiva con el propio cuerpo tras el trauma.",
    goal: "Reducir la disociación somática y reconectar con el cuerpo de forma segura.",
    instructions: "Realiza estos ejercicios en un lugar seguro, a tu propio ritmo.",
    fields: [
      {
        id: "relacion_cuerpo_actual",
        label: "¿Cómo describirías tu relación con tu cuerpo ahora mismo?",
        type: "textarea",
        rows: 3,
        placeholder: "¿Sientes desconexión, vergüenza, miedo, neutralidad?"
      },
      {
        id: "zonas_seguras",
        label: "Partes del cuerpo que sientes como seguras o neutrales",
        type: "textarea",
        rows: 2,
        placeholder: "¿Hay partes del cuerpo que puedes notar sin angustia?"
      },
      {
        id: "sensaciones_placenteras",
        label: "Sensaciones físicas que puedes disfrutar o tolerar",
        type: "textarea",
        rows: 2,
        placeholder: "Calor del sol, textura suave, ritmo de la respiración..."
      },
      {
        id: "ejercicio_grounding",
        label: "Ejercicio de grounding corporal (descripción de tu experiencia)",
        type: "textarea",
        rows: 3,
        placeholder: "Nota 5 cosas que puedes tocar ahora mismo. ¿Cómo se sienten?"
      },
      {
        id: "cuidado_corporal",
        label: "Actos de cuidado corporal que puedo practicar",
        type: "textarea",
        rows: 3,
        placeholder: "Movimiento suave, descanso, nutrición, higiene como autocuidado..."
      }
    ],
    printable: true
  },
  {
    id: "trauma-disparadores",
    category: "trauma-ptsd",
    title: "Mapa de Disparadores",
    description: "Identificación sistemática de disparadores traumáticos y plan de manejo.",
    goal: "Conocer los disparadores para anticiparlos y manejarlos eficazmente.",
    instructions: "Registra los disparadores que has identificado y tus estrategias de respuesta.",
    fields: [
      {
        id: "disparadores_sensoriales",
        label: "Disparadores sensoriales",
        type: "table",
        columns: [
          { key: "sentido", label: "Sentido" },
          { key: "disparador", label: "Disparador específico" },
          { key: "respuesta", label: "Respuesta que genera" }
        ],
        rows_count: 5
      },
      {
        id: "disparadores_situacionales",
        label: "Disparadores situacionales (lugares, personas, fechas)",
        type: "textarea",
        rows: 3,
        placeholder: "¿Qué situaciones te recuerdan al trauma?"
      },
      {
        id: "disparadores_internos",
        label: "Disparadores internos (pensamientos, emociones, sensaciones)",
        type: "textarea",
        rows: 3,
        placeholder: "¿Qué estados internos activan la respuesta traumática?"
      },
      {
        id: "plan_manejo",
        label: "Plan de manejo para disparadores frecuentes",
        type: "textarea",
        rows: 4,
        placeholder: "¿Qué harás cuando encuentres estos disparadores?"
      }
    ],
    printable: true
  },
  {
    id: "trauma-carta-superviviente",
    category: "trauma-ptsd",
    title: "Carta del Superviviente",
    description: "Escritura terapéutica dirigida a uno mismo desde una perspectiva de supervivencia y fortaleza.",
    goal: "Consolidar la identidad de superviviente y reconocer el propio valor y resiliencia.",
    instructions: "Escríbete una carta a ti mismo/a reconociendo lo que has superado.",
    fields: [
      {
        id: "carta",
        label: "Mi carta de superviviente",
        type: "textarea",
        rows: 12,
        placeholder: "Querido/a [tu nombre]...\n\nQuiero que sepas que has sobrevivido...\n\nLo que has soportado...\n\nLo que admiro de ti...\n\nLo que deseo para tu futuro..."
      },
      {
        id: "mensaje_central",
        label: "El mensaje más importante de esta carta",
        type: "textarea",
        rows: 3,
        placeholder: "Si pudieras resumir en pocas palabras lo que quieres recordar..."
      },
      {
        id: "cuando_leer",
        label: "¿Cuándo leerás esta carta?",
        type: "text",
        placeholder: "En momentos difíciles, una vez a la semana..."
      }
    ],
    printable: true
  },
  {
    id: "trauma-red-apoyo",
    category: "trauma-ptsd",
    title: "Red de Apoyo en el Trauma",
    description: "Mapeo y fortalecimiento de la red de apoyo social durante la recuperación.",
    goal: "Identificar y activar recursos sociales de apoyo para la recuperación traumática.",
    instructions: "Mapea las personas y recursos que forman tu red de apoyo.",
    fields: [
      {
        id: "apoyo_emocional",
        label: "Personas que me ofrecen apoyo emocional",
        type: "table",
        columns: [
          { key: "nombre", label: "Nombre/Relación" },
          { key: "tipo_apoyo", label: "Tipo de apoyo" },
          { key: "contacto", label: "Cómo contactar" }
        ],
        rows_count: 4
      },
      {
        id: "apoyo_practico",
        label: "Personas que me ayudan de forma práctica",
        type: "textarea",
        rows: 3,
        placeholder: "¿Quién puede ayudarte con tareas cotidianas cuando estás desbordado/a?"
      },
      {
        id: "profesionales",
        label: "Profesionales de mi equipo terapéutico",
        type: "textarea",
        rows: 3,
        placeholder: "Terapeuta, psiquiatra, médico, trabajador social..."
      },
      {
        id: "grupos_apoyo",
        label: "Grupos de apoyo o comunidades",
        type: "textarea",
        rows: 2,
        placeholder: "Grupos online o presenciales de supervivientes..."
      },
      {
        id: "barreras_apoyo",
        label: "Barreras para pedir ayuda y cómo las puedo superar",
        type: "textarea",
        rows: 3,
        placeholder: "¿Qué te impide pedir apoyo? ¿Cómo podrías superarlo?"
      }
    ],
    printable: true
  },
  {
    id: "trauma-significado",
    category: "trauma-ptsd",
    title: "Búsqueda de Significado",
    description: "Exploración del significado y propósito que emerge de la experiencia traumática.",
    goal: "Construir un significado personal de la experiencia traumática que apoye la recuperación.",
    instructions: "Reflexiona sobre el significado que das a tu experiencia traumática.",
    fields: [
      {
        id: "significado_actual",
        label: "¿Qué significado tiene esta experiencia para ti ahora?",
        type: "textarea",
        rows: 4,
        placeholder: "No hay respuestas correctas. ¿Cómo entiendes lo que pasó?"
      },
      {
        id: "cambios_perspectiva",
        label: "¿Cómo ha cambiado tu perspectiva sobre la vida?",
        type: "textarea",
        rows: 3,
        placeholder: "¿Valoras algo diferente? ¿Ves la vida de otra manera?"
      },
      {
        id: "crecimiento_postraumatico",
        label: "Áreas de crecimiento postraumático identificadas",
        type: "checklist",
        options: [{ id: "mayor_apreciaci_n_de_la_vida", label: "Mayor apreciación de la vida" }, { id: "relaciones_m_s_profundas", label: "Relaciones más profundas" }, { id: "mayor_fuerza_personal_reconoci", label: "Mayor fuerza personal reconocida" }, { id: "nuevas_posibilidades", label: "Nuevas posibilidades" }, { id: "desarrollo_espiritual_filos_fi", label: "Desarrollo espiritual/filosófico" }, { id: "m_s_compasi_n_hacia_otros", label: "Más compasión hacia otros" }]
      },
      {
        id: "legado",
        label: "¿Qué legado quieres que deje esta experiencia?",
        type: "textarea",
        rows: 3,
        placeholder: "¿Qué quieres que esta experiencia signifique para tu vida futura?"
      }
    ],
    printable: true
  }
];
