import { Worksheet } from "./worksheets";

export const couplesExpanded2Worksheets: Worksheet[] = [
  {
    id: "couples-metas-compartidas",
    category: "couples-relationships",
    title: "Metas y Sueños Compartidos",
    description: "Exploración de las aspiraciones individuales y compartidas de la pareja.",
    goal: "Identificar metas comunes y crear una visión compartida de futuro.",
    instructions: "Cada miembro completa su parte individualmente, luego comparte y dialoga.",
    fields: [
      {
        id: "metas_individuales_1",
        label: "Persona 1: Mis metas personales para los próximos 5 años",
        type: "textarea",
        rows: 3,
        placeholder: "Carrera, crecimiento personal, salud, viajes..."
      },
      {
        id: "metas_individuales_2",
        label: "Persona 2: Mis metas personales para los próximos 5 años",
        type: "textarea",
        rows: 3,
        placeholder: "Carrera, crecimiento personal, salud, viajes..."
      },
      {
        id: "metas_comunes",
        label: "Metas que tenemos en común",
        type: "textarea",
        rows: 3,
        placeholder: "¿Qué sueños compartimos? ¿Qué queremos construir juntos?"
      },
      {
        id: "diferencias_metas",
        label: "Diferencias en nuestras metas y cómo las negociamos",
        type: "textarea",
        rows: 3,
        placeholder: "¿Cómo podemos apoyar las metas individuales sin comprometer la relación?"
      },
      {
        id: "plan_accion",
        label: "Un paso concreto hacia nuestros sueños compartidos",
        type: "text",
        placeholder: "Algo que haremos juntos en el próximo mes..."
      }
    ],
    printable: true
  },
  {
    id: "couples-historial-relacion",
    category: "couples-relationships",
    title: "Historia de Nuestra Relación",
    description: "Revisión positiva de la historia de la pareja para fortalecer el vínculo.",
    goal: "Reconectar con los momentos positivos de la relación y el enamoramiento inicial.",
    instructions: "Respondan juntos o por separado y luego compartan sus respuestas.",
    fields: [
      {
        id: "como_nos_conocimos",
        label: "¿Cómo nos conocimos y qué me gustó de ti al principio?",
        type: "textarea",
        rows: 3,
        placeholder: "Describe el comienzo de la relación con detalle..."
      },
      {
        id: "momentos_especiales",
        label: "3 momentos especiales de nuestra relación",
        type: "textarea",
        rows: 4,
        placeholder: "Momentos que atesoras y que definen vuestra historia juntos..."
      },
      {
        id: "superado_juntos",
        label: "Dificultades que hemos superado juntos",
        type: "textarea",
        rows: 3,
        placeholder: "¿Qué nos dice haber superado estos retos sobre nuestra relación?"
      },
      {
        id: "como_ha_crecido",
        label: "¿Cómo ha crecido y evolucionado nuestra relación?",
        type: "textarea",
        rows: 3,
        placeholder: "¿En qué habéis mejorado? ¿Cómo os habéis adaptado?"
      }
    ],
    printable: true
  },
  {
    id: "couples-necesidades-emocionales",
    category: "couples-relationships",
    title: "Necesidades Emocionales en la Pareja",
    description: "Exploración de las necesidades emocionales de cada miembro y cómo satisfacerlas.",
    goal: "Comunicar y negociar necesidades emocionales de forma constructiva.",
    instructions: "Cada persona identifica sus necesidades y cómo el otro puede contribuir.",
    fields: [
      {
        id: "necesidades_1",
        label: "Persona 1: Mis necesidades emocionales en la relación",
        type: "checklist",
        options: [{ id: "afecto_f_sico", label: "Afecto físico" }, { id: "palabras_de_aprecio", label: "Palabras de aprecio" }, { id: "tiempo_de_calidad", label: "Tiempo de calidad" }, { id: "ayuda_pr_ctica", label: "Ayuda práctica" }, { id: "espacios_de_autonom_a", label: "Espacios de autonomía" }, { id: "seguridad_y_estabilidad", label: "Seguridad y estabilidad" }, { id: "admiraci_n_y_respeto", label: "Admiración y respeto" }, { id: "escucha_activa", label: "Escucha activa" }, { id: "aventura_y_novedad", label: "Aventura y novedad" }, { id: "comunicaci_n_profunda", label: "Comunicación profunda" }]
      },
      {
        id: "necesidades_1_descripcion",
        label: "Persona 1: Cómo me gustaría que se satisficieran estas necesidades",
        type: "textarea",
        rows: 3,
        placeholder: "Sé específico/a sobre qué acciones concretas te harían sentir amado/a..."
      },
      {
        id: "necesidades_2",
        label: "Persona 2: Mis necesidades emocionales en la relación",
        type: "checklist",
        options: [{ id: "afecto_f_sico", label: "Afecto físico" }, { id: "palabras_de_aprecio", label: "Palabras de aprecio" }, { id: "tiempo_de_calidad", label: "Tiempo de calidad" }, { id: "ayuda_pr_ctica", label: "Ayuda práctica" }, { id: "espacios_de_autonom_a", label: "Espacios de autonomía" }, { id: "seguridad_y_estabilidad", label: "Seguridad y estabilidad" }, { id: "admiraci_n_y_respeto", label: "Admiración y respeto" }, { id: "escucha_activa", label: "Escucha activa" }, { id: "aventura_y_novedad", label: "Aventura y novedad" }, { id: "comunicaci_n_profunda", label: "Comunicación profunda" }]
      },
      {
        id: "necesidades_2_descripcion",
        label: "Persona 2: Cómo me gustaría que se satisficieran estas necesidades",
        type: "textarea",
        rows: 3,
        placeholder: "Sé específico/a sobre qué acciones concretas te harían sentir amado/a..."
      },
      {
        id: "acuerdos",
        label: "Acuerdos que establecemos para satisfacer las necesidades mutuamente",
        type: "textarea",
        rows: 3,
        placeholder: "Compromisos concretos de cada uno..."
      }
    ],
    printable: true
  },
  {
    id: "couples-perdona-y-sana",
    category: "couples-relationships",
    title: "Proceso de Perdón en la Pareja",
    description: "Guía estructurada para trabajar el perdón después de una ruptura de confianza.",
    goal: "Facilitar el proceso de perdón genuino para sanar heridas relacionales.",
    instructions: "Este proceso es gradual. No hay que forzar el perdón; se trabaja la disposición hacia él.",
    therapistNote: "El perdón no significa que la conducta fue aceptable. Es un proceso personal de liberación del resentimiento.",
    fields: [
      {
        id: "herida",
        label: "La herida que necesito perdonar",
        type: "textarea",
        rows: 3,
        placeholder: "Describe lo que ocurrió y cómo te afectó..."
      },
      {
        id: "impacto",
        label: "Cómo me ha afectado esta herida",
        type: "textarea",
        rows: 3,
        placeholder: "Emociones, comportamientos, pensamientos que ha generado en ti..."
      },
      {
        id: "comprension",
        label: "¿Puedo entender qué llevó al otro a actuar así? (sin justificar)",
        type: "textarea",
        rows: 3,
        placeholder: "Intentar comprender el contexto sin excusar la conducta..."
      },
      {
        id: "que_necesito",
        label: "¿Qué necesito del otro para poder perdonar?",
        type: "textarea",
        rows: 3,
        placeholder: "Reconocimiento, disculpa, cambio de conducta, comprensión..."
      },
      {
        id: "beneficio_perdon",
        label: "¿Por qué el perdón me beneficiaría a mí?",
        type: "textarea",
        rows: 3,
        placeholder: "¿Qué ganarías tú (no el otro) si pudieras soltar el resentimiento?"
      }
    ],
    printable: true
  },
  {
    id: "couples-responsabilidad",
    category: "couples-relationships",
    title: "Mi Responsabilidad en el Conflicto",
    description: "Exploración honesta del propio papel en los patrones conflictivos de la pareja.",
    goal: "Desarrollar la capacidad de asumir responsabilidad sin caer en la autocrítica destructiva.",
    instructions: "Reflexiona honestamente sobre tu contribución a los conflictos de la pareja.",
    fields: [
      {
        id: "patron_conflicto",
        label: "Patrón de conflicto más frecuente en nuestra relación",
        type: "textarea",
        rows: 3,
        placeholder: "¿Cómo suelen comenzar y escalar nuestros conflictos?"
      },
      {
        id: "mi_contribucion",
        label: "¿Cómo contribuyo yo a este patrón?",
        type: "textarea",
        rows: 3,
        placeholder: "Sin culpa, ¿qué haces o dejas de hacer que alimenta el conflicto?"
      },
      {
        id: "disparadores_personales",
        label: "Mis disparadores personales en los conflictos",
        type: "textarea",
        rows: 3,
        placeholder: "¿Qué te activa especialmente? ¿Por qué crees que es así?"
      },
      {
        id: "cambio_posible",
        label: "¿Qué puedo cambiar yo en cómo reacciono?",
        type: "textarea",
        rows: 3,
        placeholder: "Una conducta concreta que podrías cambiar..."
      },
      {
        id: "comunicar_cambio",
        label: "¿Cómo comunicaré este cambio a mi pareja?",
        type: "textarea",
        rows: 2,
        placeholder: "¿Cómo harás saber a tu pareja que estás trabajando en esto?"
      }
    ],
    printable: true
  },
  {
    id: "couples-amor-cotidiano",
    category: "couples-relationships",
    title: "El Amor en lo Cotidiano",
    description: "Identificación y cultivo de pequeños actos de amor en la rutina diaria.",
    goal: "Fortalecer la conexión emocional a través de gestos cotidianos.",
    instructions: "Explora cómo expresas y recibes amor en la vida diaria de la pareja.",
    fields: [
      {
        id: "actos_amor_doy",
        label: "Actos de amor cotidianos que yo ofrezco",
        type: "textarea",
        rows: 3,
        placeholder: "¿Qué pequeñas cosas haces regularmente para expresar amor?"
      },
      {
        id: "actos_amor_recibo",
        label: "Actos de amor cotidianos que recibo de mi pareja",
        type: "textarea",
        rows: 3,
        placeholder: "¿Qué hace tu pareja que te hace sentir amado/a?"
      },
      {
        id: "mas_significativo",
        label: "El acto de amor cotidiano más significativo para mí",
        type: "textarea",
        rows: 2,
        placeholder: "¿Qué pequeño gesto tiene más impacto en cómo te sientes?"
      },
      {
        id: "nuevo_gesto",
        label: "Un nuevo gesto de amor que me gustaría incorporar",
        type: "textarea",
        rows: 2,
        placeholder: "Algo pequeño y concreto que podrías empezar a hacer..."
      },
      {
        id: "pedir_pareja",
        label: "Un gesto que me gustaría pedirle a mi pareja",
        type: "textarea",
        rows: 2,
        placeholder: "¿Qué podrías pedirle con amabilidad que te haría sentir más amado/a?"
      }
    ],
    printable: true
  },
  {
    id: "couples-intimidad-emocional",
    category: "couples-relationships",
    title: "Intimidad Emocional: Preguntas de Conexión",
    description: "Preguntas profundas para cultivar la intimidad emocional en la pareja.",
    goal: "Aumentar la vulnerabilidad y la intimidad emocional entre los miembros de la pareja.",
    instructions: "Respondan estas preguntas el uno al otro en un momento tranquilo.",
    fields: [
      {
        id: "pregunta1",
        label: "¿Cuál es el miedo más grande que tienes en esta relación?",
        type: "textarea",
        rows: 3,
        placeholder: "Responde con honestidad y vulnerabilidad..."
      },
      {
        id: "pregunta2",
        label: "¿Qué es lo que más necesitas de mí que a veces no obtienes?",
        type: "textarea",
        rows: 3,
        placeholder: "Responde con honestidad y vulnerabilidad..."
      },
      {
        id: "pregunta3",
        label: "¿Hay algo que llevas tiempo queriendo decirme y no has podido?",
        type: "textarea",
        rows: 3,
        placeholder: "Responde con honestidad y vulnerabilidad..."
      },
      {
        id: "pregunta4",
        label: "¿Qué es lo que más admiras de mí?",
        type: "textarea",
        rows: 3,
        placeholder: "Sé específico/a y generoso/a..."
      },
      {
        id: "reflexion",
        label: "¿Cómo te sientes después de compartir estas respuestas?",
        type: "textarea",
        rows: 3,
        placeholder: "¿Qué ha surgido en esta conversación?"
      }
    ],
    printable: true
  },
  {
    id: "couples-tiempo-calidad",
    category: "couples-relationships",
    title: "Plan de Tiempo de Calidad",
    description: "Diseño intencional de tiempo de calidad compartido para nutrir la relación.",
    goal: "Priorizar el tiempo de conexión genuina frente a la coexistencia paralela.",
    instructions: "Planifiquen juntos actividades que nutran la conexión de pareja.",
    fields: [
      {
        id: "diferencia_calidad",
        label: "¿Qué diferencia el tiempo de calidad del tiempo pasado juntos sin más?",
        type: "textarea",
        rows: 2,
        placeholder: "¿Qué hace que un momento compartido sea de calidad?"
      },
      {
        id: "actividades_conexion",
        label: "Actividades que nos conectan como pareja",
        type: "textarea",
        rows: 3,
        placeholder: "¿Qué hacen juntos que fortalece su vínculo?"
      },
      {
        id: "obstaculos",
        label: "Obstáculos para el tiempo de calidad",
        type: "checklist",
        options: [{ id: "pantallas_y_tecnolog_a", label: "Pantallas y tecnología" }, { id: "trabajo_y_cansancio", label: "Trabajo y cansancio" }, { id: "hijos_y_familia", label: "Hijos y familia" }, { id: "diferentes_horarios", label: "Diferentes horarios" }, { id: "distancias", label: "Distancias" }, { id: "falta_de_planificaci_n", label: "Falta de planificación" }, { id: "rutina_aburrida", label: "Rutina aburrida" }]
      },
      {
        id: "plan_mensual",
        label: "Plan de tiempo de calidad para el próximo mes",
        type: "table",
        columns: [
          { key: "actividad", label: "Actividad" },
          { key: "fecha", label: "Fecha tentativa" },
          { key: "responsable", label: "¿Quién lo organiza?" }
        ],
        rows_count: 4
      },
      {
        id: "compromiso_digital",
        label: "Acuerdo sobre el uso de tecnología durante el tiempo juntos",
        type: "textarea",
        rows: 2,
        placeholder: "¿Qué acuerdan sobre los móviles y pantallas cuando están juntos?"
      }
    ],
    printable: true
  },
  {
    id: "couples-dinero-relacion",
    category: "couples-relationships",
    title: "Dinero y Relación",
    description: "Exploración de las actitudes hacia el dinero y la gestión financiera en pareja.",
    goal: "Reducir los conflictos sobre dinero mediante la comprensión y el acuerdo mutuo.",
    instructions: "Exploren sus actitudes hacia el dinero y establezcan acuerdos claros.",
    fields: [
      {
        id: "creencias_dinero_1",
        label: "Persona 1: ¿Qué significa el dinero para ti? ¿Cómo lo aprendiste?",
        type: "textarea",
        rows: 3,
        placeholder: "¿Qué mensajes recibiste sobre el dinero en tu familia de origen?"
      },
      {
        id: "creencias_dinero_2",
        label: "Persona 2: ¿Qué significa el dinero para ti? ¿Cómo lo aprendiste?",
        type: "textarea",
        rows: 3,
        placeholder: "¿Qué mensajes recibiste sobre el dinero en tu familia de origen?"
      },
      {
        id: "diferencias_estilo",
        label: "Diferencias en nuestros estilos financieros",
        type: "textarea",
        rows: 3,
        placeholder: "¿Uno ahorra más y el otro gasta más? ¿Cómo esto genera tensión?"
      },
      {
        id: "acuerdos_financieros",
        label: "Acuerdos financieros que queremos establecer",
        type: "textarea",
        rows: 3,
        placeholder: "Gastos compartidos, ahorros, decisiones individuales, presupuesto..."
      }
    ],
    printable: true
  },
  {
    id: "couples-crianza-pareja",
    category: "couples-relationships",
    title: "Pareja y Crianza: Alineación Parental",
    description: "Exploración de valores y estilos de crianza en parejas con hijos.",
    goal: "Alinear estilos de crianza y reducir conflictos relacionados con los hijos.",
    instructions: "Compartan sus valores de crianza y negocien diferencias.",
    fields: [
      {
        id: "valores_crianza",
        label: "Los 3 valores más importantes que quiero transmitir a nuestros hijos",
        type: "textarea",
        rows: 3,
        placeholder: "¿Qué es lo más importante que quieres enseñar como padre/madre?"
      },
      {
        id: "diferencias_estilo_crianza",
        label: "Diferencias en nuestros estilos de crianza",
        type: "textarea",
        rows: 3,
        placeholder: "¿En qué puntos tienen enfoques distintos? ¿Cómo afecta esto a la pareja?"
      },
      {
        id: "acuerdos_crianza",
        label: "Acuerdos sobre crianza que podemos establecer",
        type: "textarea",
        rows: 3,
        placeholder: "Reglas, límites, normas que acuerdan conjuntamente..."
      },
      {
        id: "cuidar_pareja",
        label: "¿Cómo cuidamos nuestra relación de pareja siendo también padres?",
        type: "textarea",
        rows: 3,
        placeholder: "Estrategias para mantener la relación de pareja con hijos..."
      }
    ],
    printable: true
  },
  {
    id: "couples-enojo-sano",
    category: "couples-relationships",
    title: "Expresión Sana del Enojo en la Pareja",
    description: "Aprender a expresar la rabia de forma saludable sin dañar la relación.",
    goal: "Transformar la expresión destructiva del enojo en comunicación constructiva.",
    instructions: "Reflexiona sobre cómo manejas el enojo y practica formas más saludables.",
    fields: [
      {
        id: "estilo_enojo",
        label: "¿Cómo expreso habitualmente el enojo con mi pareja?",
        type: "checklist",
        options: [{ id: "gritar_o_elevar_la_voz", label: "Gritar o elevar la voz" }, { id: "silencio_o_retirada", label: "Silencio o retirada" }, { id: "sarcasmo_o_iron_a", label: "Sarcasmo o ironía" }, { id: "cr_tica_o_ataques", label: "Crítica o ataques" }, { id: "expresi_n_directa_y_calmada", label: "Expresión directa y calmada" }, { id: "explosi_n_y_luego_arrepentimie", label: "Explosión y luego arrepentimiento" }, { id: "represi_n", label: "Represión" }, { id: "llanto", label: "Llanto" }]
      },
      {
        id: "origen_patron",
        label: "¿De dónde viene este patrón? ¿Cómo se manejaba el enojo en tu familia?",
        type: "textarea",
        rows: 3,
        placeholder: "¿Qué aprendiste sobre el enojo en tu familia de origen?"
      },
      {
        id: "impacto_pareja",
        label: "¿Cómo afecta mi forma de expresar el enojo a mi pareja?",
        type: "textarea",
        rows: 3,
        placeholder: "¿Qué dice tu pareja sobre cómo te comportas cuando te enojas?"
      },
      {
        id: "expresion_sana",
        label: "¿Cómo me gustaría expresar el enojo de forma más sana?",
        type: "textarea",
        rows: 3,
        placeholder: "Pausa, respiración, usar \"yo\" en lugar de \"tú\", pedir tiempo..."
      },
      {
        id: "acuerdo_enojo",
        label: "Acuerdo con mi pareja para los momentos de enojo",
        type: "textarea",
        rows: 3,
        placeholder: "¿Qué señales usarán para pedir pausa? ¿Cómo se reconectarán después?"
      }
    ],
    printable: true
  },
  {
    id: "couples-vision-futuro",
    category: "couples-relationships",
    title: "Visión Compartida de Futuro",
    description: "Construcción de una visión de futuro común que guíe las decisiones de la pareja.",
    goal: "Alinear las expectativas sobre el futuro para fortalecer el proyecto de vida en común.",
    instructions: "Imaginen juntos el futuro que quieren construir como pareja.",
    fields: [
      {
        id: "imagen_5anos",
        label: "Imagen de nuestra relación en 5 años",
        type: "textarea",
        rows: 4,
        placeholder: "¿Dónde vivirán? ¿Cómo será su día a día? ¿Qué habrán construido?"
      },
      {
        id: "imagen_20anos",
        label: "Imagen de nuestra relación en 20 años",
        type: "textarea",
        rows: 4,
        placeholder: "¿Qué tipo de pareja quieren ser? ¿Qué legado dejan?"
      },
      {
        id: "diferencias_vision",
        label: "Diferencias en nuestra visión y cómo las negociamos",
        type: "textarea",
        rows: 3,
        placeholder: "¿En qué puntos la visión de futuro difiere? ¿Cómo llegan a acuerdos?"
      },
      {
        id: "proximo_paso",
        label: "Un paso concreto hacia esa visión compartida",
        type: "text",
        placeholder: "Algo que pueden hacer en el próximo mes..."
      }
    ],
    printable: true
  },
  {
    id: "couples-aprecio-gratitud",
    category: "couples-relationships",
    title: "Aprecio y Gratitud en la Pareja",
    description: "Práctica de expresar aprecio y gratitud para fortalecer el vínculo.",
    goal: "Aumentar las expresiones de aprecio mutuo como factor protector de la relación.",
    instructions: "Compartan explícitamente lo que aprecian el uno del otro.",
    fields: [
      {
        id: "cualidades_admiro",
        label: "Cualidades de mi pareja que más admiro",
        type: "textarea",
        rows: 3,
        placeholder: "¿Qué características de tu pareja te generan admiración o respeto?"
      },
      {
        id: "gracias_recientes",
        label: "Cosas por las que me gustaría dar gracias a mi pareja esta semana",
        type: "textarea",
        rows: 3,
        placeholder: "Grandes o pequeñas, ¿qué ha hecho tu pareja que aprecias?"
      },
      {
        id: "impacto_positivo",
        label: "Impacto positivo que mi pareja tiene en mi vida",
        type: "textarea",
        rows: 3,
        placeholder: "¿Cómo sería tu vida sin tu pareja? ¿Qué aporta?"
      },
      {
        id: "expresar_aprecio",
        label: "¿Cómo expresaré este aprecio esta semana?",
        type: "textarea",
        rows: 2,
        placeholder: "Una forma concreta de comunicarle tu aprecio..."
      }
    ],
    printable: true
  },
  {
    id: "couples-sexualidad-pareja",
    category: "couples-relationships",
    title: "Comunicación sobre Sexualidad en la Pareja",
    description: "Espacio seguro para explorar y comunicar necesidades y deseos en el ámbito íntimo.",
    goal: "Mejorar la comunicación sobre intimidad física y satisfacción sexual en la pareja.",
    instructions: "Completen este ejercicio en un momento de calma y apertura mutua.",
    therapistNote: "Crear un contexto de seguridad y no-juicio antes de trabajar este material.",
    fields: [
      {
        id: "satisfaccion_actual",
        label: "¿Cómo describirías la satisfacción en vuestra intimidad actualmente?",
        type: "textarea",
        rows: 3,
        placeholder: "Sin juicio, ¿cómo está este aspecto de la relación?"
      },
      {
        id: "necesidades_intimas",
        label: "¿Qué necesidades o deseos me gustaría comunicar?",
        type: "textarea",
        rows: 3,
        placeholder: "¿Qué te gustaría que fuera diferente o que se explorara más?"
      },
      {
        id: "barreras_comunicacion",
        label: "¿Qué nos cuesta hablar de intimidad? ¿Por qué?",
        type: "textarea",
        rows: 3,
        placeholder: "Vergüenza, miedo al rechazo, mensajes aprendidos..."
      },
      {
        id: "acuerdo_comunicacion",
        label: "Acuerdo para seguir hablando de este tema con apertura",
        type: "textarea",
        rows: 2,
        placeholder: "¿Cómo crearán un espacio seguro para estas conversaciones?"
      }
    ],
    printable: true
  }
];
