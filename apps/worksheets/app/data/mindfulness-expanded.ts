import { Worksheet } from "./worksheets";

export const mindfulnessExpandedWorksheets: Worksheet[] = [
  {
    id: "mind-observador",
    category: "mindfulness",
    title: "El Observador: Yo que Observo",
    description: "Cultivo de la perspectiva del observador para desidentificarse de pensamientos y emociones.",
    goal: "Desarrollar la capacidad de observar la experiencia interna sin fusionarse con ella.",
    instructions: "Practica observar tus pensamientos y emociones como si fueras testigo de ellos.",
    fields: [
      {
        id: "comprension_observador",
        label: "¿Qué significa el \"Yo que observa\"?",
        type: "textarea",
        rows: 2,
        placeholder: "Eres quien observa tus pensamientos, no los pensamientos en sí..."
      },
      {
        id: "practica_observacion",
        label: "Practica: Observa durante 5 minutos y registra lo que notas",
        type: "textarea",
        rows: 4,
        placeholder: "¿Qué pensamientos, emociones, sensaciones aparecieron? (sin juzgar)"
      },
      {
        id: "fusion_vs_observacion",
        label: "Diferencia entre estar fusionado y observar",
        type: "textarea",
        rows: 3,
        placeholder: "\"Soy un fracaso\" (fusión) vs \"Noto el pensamiento de que soy un fracaso\" (observación)..."
      },
      {
        id: "aplicacion_vida",
        label: "¿En qué momentos del día puedes practicar observar en lugar de fusionarte?",
        type: "textarea",
        rows: 3,
        placeholder: "Situaciones cotidianas donde puedes activar el observador..."
      }
    ],
    printable: true
  },
  {
    id: "mind-caminar-consciente",
    category: "mindfulness",
    title: "Meditación Caminando",
    description: "Práctica de mindfulness durante el caminar cotidiano.",
    goal: "Integrar la práctica mindfulness en una actividad cotidiana.",
    instructions: "Practica caminar conscientemente y registra tu experiencia.",
    fields: [
      {
        id: "instrucciones",
        label: "Preparación para la meditación caminando",
        type: "textarea",
        rows: 3,
        placeholder: "Elige un lugar tranquilo. Camina más despacio de lo habitual. Nota cada paso..."
      },
      {
        id: "experiencia_cuerpo",
        label: "¿Qué notaste en tu cuerpo mientras caminabas?",
        type: "textarea",
        rows: 3,
        placeholder: "Sensación de los pies en el suelo, movimiento de piernas, respiración..."
      },
      {
        id: "experiencia_mente",
        label: "¿Qué pasó en tu mente durante la práctica?",
        type: "textarea",
        rows: 3,
        placeholder: "¿Se distrajo? ¿Con qué? ¿Cómo volviste al presente?"
      },
      {
        id: "diferencia_normal",
        label: "¿En qué se diferenció de caminar normalmente?",
        type: "textarea",
        rows: 2,
        placeholder: "¿Qué notaste que normalmente pasas por alto?"
      },
      {
        id: "cuando_practicar",
        label: "¿Cuándo puedes incorporar esto en tu rutina?",
        type: "text",
        placeholder: "Al ir al trabajo, al pasear al perro, al ir al baño..."
      }
    ],
    printable: true
  },
  {
    id: "mind-impermanencia",
    category: "mindfulness",
    title: "Impermanencia: Todo Pasa",
    description: "Contemplación de la impermanencia como fuente de liberación y perspectiva.",
    goal: "Desarrollar una relación más flexible con la impermanencia de la experiencia.",
    instructions: "Reflexiona sobre la impermanencia en diferentes áreas de tu vida.",
    fields: [
      {
        id: "que_cambia",
        label: "¿Qué en tu vida ha cambiado en los últimos 5 años?",
        type: "textarea",
        rows: 3,
        placeholder: "Relaciones, trabajo, lugar de residencia, creencias, cuerpo..."
      },
      {
        id: "resistencia_cambio",
        label: "¿Qué cambios te cuesta aceptar en este momento?",
        type: "textarea",
        rows: 3,
        placeholder: "¿Qué estás intentando mantener igual cuando el cambio es inevitable?"
      },
      {
        id: "impermanencia_alivio",
        label: "La impermanencia como alivio: ¿qué difícil también pasará?",
        type: "textarea",
        rows: 3,
        placeholder: "¿Qué malestar o dificultad actual es también impermanente?"
      },
      {
        id: "apreciacion_presente",
        label: "¿Qué en tu vida actual quieres apreciar más precisamente porque es temporal?",
        type: "textarea",
        rows: 3,
        placeholder: "La impermanencia invita a la presencia y la gratitud..."
      }
    ],
    printable: true
  },
  {
    id: "mind-ecuanimidad",
    category: "mindfulness",
    title: "Cultivando la Ecuanimidad",
    description: "Desarrollo de la ecuanimidad como capacidad de mantener el equilibrio ante las altibajos.",
    goal: "Cultivar una actitud de ecuanimidad ante el placer y el dolor.",
    instructions: "Explora qué es la ecuanimidad y cómo cultivarla en tu vida.",
    fields: [
      {
        id: "definicion_personal",
        label: "¿Qué es la ecuanimidad para ti?",
        type: "textarea",
        rows: 2,
        placeholder: "Estabilidad mental ante el placer y el dolor, sin aferrarse ni rechazar..."
      },
      {
        id: "cuando_pierdo_ecuanimidad",
        label: "Situaciones donde pierdes la ecuanimidad",
        type: "textarea",
        rows: 3,
        placeholder: "¿Qué te saca fácilmente del centro? ¿Qué te desequilibra?"
      },
      {
        id: "recursos_ecuanimidad",
        label: "Recursos que me ayudan a mantener el equilibrio",
        type: "textarea",
        rows: 3,
        placeholder: "Respiración, perspectiva, valores, práctica contemplativa..."
      },
      {
        id: "practica_diaria",
        label: "Práctica diaria de ecuanimidad",
        type: "textarea",
        rows: 3,
        placeholder: "¿Cómo puedes practicar mantenerte centrado/a en lo cotidiano?"
      }
    ],
    printable: true
  },
  {
    id: "mind-autocompasion-formal",
    category: "mindfulness",
    title: "Práctica Formal de Autocompasión",
    description: "Meditación estructurada de autocompasión basada en el trabajo de Kristin Neff.",
    goal: "Desarrollar la autocompasión como práctica formal de meditación.",
    instructions: "Sigue los tres componentes de la autocompasión en esta práctica.",
    fields: [
      {
        id: "componente1",
        label: "1. Mindfulness: Reconocer el sufrimiento",
        type: "textarea",
        rows: 3,
        placeholder: "\"En este momento estoy sufriendo...\" ¿Qué estás experimentando ahora?"
      },
      {
        id: "componente2",
        label: "2. Humanidad compartida: No estás solo/a",
        type: "textarea",
        rows: 3,
        placeholder: "\"El sufrimiento es parte de la experiencia humana...\" ¿Qué significa esto para ti?"
      },
      {
        id: "componente3",
        label: "3. Amabilidad hacia uno mismo/a",
        type: "textarea",
        rows: 3,
        placeholder: "\"Que pueda ser amable conmigo mismo/a...\" ¿Qué amabilidad te ofreces?"
      },
      {
        id: "frase_autocompasion",
        label: "Tu frase de autocompasión personalizada",
        type: "textarea",
        rows: 2,
        placeholder: "Una frase que incluya los tres componentes, con tus palabras..."
      }
    ],
    printable: true
  },
  {
    id: "mind-mente-principiante",
    category: "mindfulness",
    title: "Mente de Principiante",
    description: "Práctica de observar la experiencia cotidiana como si fuera la primera vez.",
    goal: "Cultivar la mente de principiante para ver la vida con frescura y apertura.",
    instructions: "Practica la mente de principiante con objetos cotidianos y situaciones habituales.",
    fields: [
      {
        id: "que_es",
        label: "¿Qué es la mente de principiante?",
        type: "textarea",
        rows: 2,
        placeholder: "Ver cada momento como nuevo, sin suposiciones previas..."
      },
      {
        id: "practica_objeto",
        label: "Elige un objeto cotidiano y obsérvalo como si nunca lo hubieras visto",
        type: "textarea",
        rows: 4,
        placeholder: "Describe el objeto: color, textura, forma, peso, uso... como si fuera extraterrestres explicando a otros..."
      },
      {
        id: "practica_persona",
        label: "¿Cómo podrías ver a alguien cercano con mente de principiante?",
        type: "textarea",
        rows: 3,
        placeholder: "¿Qué verías de nuevo si no estuviera filtrado por tus suposiciones sobre esa persona?"
      },
      {
        id: "aplicacion",
        label: "Áreas de tu vida donde la mente de principiante podría ayudarte",
        type: "textarea",
        rows: 3,
        placeholder: "Relaciones, trabajo, rutinas... ¿Qué podrías ver diferente?"
      }
    ],
    printable: true
  },
  {
    id: "mind-descanso-consciente",
    category: "mindfulness",
    title: "Descanso Consciente",
    description: "Práctica de pausas conscientes durante el día para restablecer el equilibrio.",
    goal: "Integrar momentos breves de mindfulness a lo largo del día.",
    instructions: "Practica la técnica STOP en diferentes momentos del día.",
    fields: [
      {
        id: "tecnica_stop",
        label: "La técnica STOP explicada en tus palabras",
        type: "textarea",
        rows: 3,
        placeholder: "S: Para. T: Toma aire. O: Observa. P: Procede. ¿Qué significa cada paso para ti?"
      },
      {
        id: "momentos_stop",
        label: "Momentos del día donde practicaré STOP",
        type: "checklist",
        options: [{ id: "antes_de_cada_comida", label: "Antes de cada comida" }, { id: "al_despertar", label: "Al despertar" }, { id: "antes_de_dormir", label: "Antes de dormir" }, { id: "al_cambiar_de_tarea", label: "Al cambiar de tarea" }, { id: "antes_de_reuniones", label: "Antes de reuniones" }, { id: "al_coger_el_m_vil", label: "Al coger el móvil" }, { id: "en_la_ducha", label: "En la ducha" }, { id: "al_cruzar_puertas", label: "Al cruzar puertas" }]
      },
      {
        id: "registro_practica",
        label: "Registro de mis momentos STOP hoy",
        type: "table",
        columns: [
          { key: "momento", label: "Momento del día" },
          { key: "que_noti", label: "¿Qué noté?" },
          { key: "efecto", label: "¿Qué efecto tuvo?" }
        ],
        rows_count: 4
      }
    ],
    printable: true
  },
  {
    id: "mind-meditacion-bondad",
    category: "mindfulness",
    title: "Meditación de Bondad Amorosa",
    description: "Práctica de Loving-Kindness (Metta) para cultivar el amor y la compasión.",
    goal: "Desarrollar sentimientos de amor y benevolencia hacia uno mismo y los demás.",
    instructions: "Sigue las frases de la meditación Metta, comenzando por ti mismo.",
    fields: [
      {
        id: "frases_propias",
        label: "Mis frases de bondad amorosa personalizadas",
        type: "textarea",
        rows: 4,
        placeholder: "\"Que yo sea feliz. Que yo esté en paz. Que yo esté libre de sufrimiento...\"\nAdapta estas frases a lo que más resuene contigo..."
      },
      {
        id: "experiencia_hacia_mi",
        label: "¿Cómo fue dirigir bondad hacia ti mismo/a?",
        type: "textarea",
        rows: 3,
        placeholder: "¿Fue fácil o difícil? ¿Qué resistencias surgieron?"
      },
      {
        id: "experiencia_hacia_otros",
        label: "¿Cómo fue extender la bondad a otros (ser querido, neutro, difícil)?",
        type: "textarea",
        rows: 3,
        placeholder: "¿Qué diferencia notaste según a quién dirigías la meditación?"
      },
      {
        id: "impacto_general",
        label: "Impacto general de la práctica en cómo te sientes",
        type: "textarea",
        rows: 2,
        placeholder: "¿Cómo quedaste después de la meditación?"
      }
    ],
    printable: true
  },
  {
    id: "mind-mindfulness-relaciones",
    category: "mindfulness",
    title: "Mindfulness en las Relaciones",
    description: "Aplicación de la atención plena a las interacciones con los demás.",
    goal: "Mejorar la calidad de las relaciones a través de la presencia consciente.",
    instructions: "Practica la escucha plena y la presencia en tus relaciones.",
    fields: [
      {
        id: "escucha_habitual",
        label: "¿Cómo escuchas habitualmente en una conversación?",
        type: "checklist",
        options: [{ id: "pienso_en_mi_respuesta_mientra", label: "Pienso en mi respuesta mientras el otro habla" }, { id: "me_distraigo_con_el_m_vil", label: "Me distraigo con el móvil" }, { id: "juzgo_lo_que_dicen", label: "Juzgo lo que dicen" }, { id: "me_aburro", label: "Me aburro" }, { id: "termino_las_frases_del_otro", label: "Termino las frases del otro" }, { id: "escucho_principalmente", label: "Escucho principalmente" }, { id: "estoy_totalmente_presente", label: "Estoy totalmente presente" }]
      },
      {
        id: "escucha_plena",
        label: "Practica escucha plena con alguien hoy. ¿Qué notaste?",
        type: "textarea",
        rows: 4,
        placeholder: "¿Qué es diferente cuando escuchas sin preparar tu respuesta? ¿Qué apareció?"
      },
      {
        id: "presencia_relaciones",
        label: "¿Cómo afecta tu presencia (o ausencia) a las relaciones?",
        type: "textarea",
        rows: 3,
        placeholder: "¿Cómo responden los demás cuando estás realmente presente?"
      },
      {
        id: "compromiso",
        label: "Compromiso de presencia consciente en mis relaciones",
        type: "textarea",
        rows: 2,
        placeholder: "¿Qué práctica concreta incorporarás en tus interacciones?"
      }
    ],
    printable: true
  },
  {
    id: "mind-aceptacion-radical",
    category: "mindfulness",
    title: "Aceptación Radical",
    description: "Práctica de aceptación profunda de la realidad tal como es, sin resignación.",
    goal: "Desarrollar la capacidad de aceptar la realidad presente sin resistencia innecesaria.",
    instructions: "Distingue entre aceptación y resignación, y practica la aceptación radical.",
    fields: [
      {
        id: "aceptacion_vs_resignacion",
        label: "¿Cuál es la diferencia entre aceptación y resignación?",
        type: "textarea",
        rows: 3,
        placeholder: "Aceptar no es aprobar ni rendirse. Es reconocer lo que es para poder actuar desde ahí..."
      },
      {
        id: "que_resisto",
        label: "¿Qué en tu vida estás resistiendo o negando?",
        type: "textarea",
        rows: 3,
        placeholder: "¿Qué realidades difíciles rechazas en lugar de aceptar?"
      },
      {
        id: "coste_resistencia",
        label: "¿Cuál es el coste de esta resistencia?",
        type: "textarea",
        rows: 3,
        placeholder: "¿Cuánta energía gastas en luchar contra lo que ya es?"
      },
      {
        id: "practica_aceptacion",
        label: "Practica decir: \"Es lo que es\" sobre algo que resistes. ¿Qué surge?",
        type: "textarea",
        rows: 3,
        placeholder: "¿Qué cambia cuando aceptas en lugar de resistir?"
      }
    ],
    printable: true
  }
];
