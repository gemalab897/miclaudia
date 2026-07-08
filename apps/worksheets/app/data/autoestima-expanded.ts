import { Worksheet } from "./worksheets";

export const autoestimaExpandedWorksheets: Worksheet[] = [
  {
    id: "ae-comparacion-social",
    category: "self-esteem",
    title: "Liberarse de la Comparación Social",
    description: "Estrategias para reducir el impacto de las comparaciones con otros en la autoestima.",
    goal: "Desarrollar una perspectiva más autorreferida y menos dependiente de la comparación.",
    instructions: "Reflexiona sobre tus patrones de comparación y practica alternativas.",
    fields: [
      {
        id: "con_quien_comparas",
        label: "¿Con quién te comparas habitualmente?",
        type: "textarea",
        rows: 3,
        placeholder: "Personas en redes sociales, amigos, compañeros, familia..."
      },
      {
        id: "areas_comparacion",
        label: "Áreas donde más te comparas",
        type: "checklist",
        options: [{ id: "xito_profesional", label: "Éxito profesional" }, { id: "apariencia_f_sica", label: "Apariencia física" }, { id: "relaciones", label: "Relaciones" }, { id: "dinero", label: "Dinero" }, { id: "inteligencia", label: "Inteligencia" }, { id: "habilidades", label: "Habilidades" }, { id: "vida_social", label: "Vida social" }, { id: "logros_acad_micos", label: "Logros académicos" }]
      },
      {
        id: "efecto_comparacion",
        label: "¿Qué efecto tiene la comparación en ti?",
        type: "textarea",
        rows: 3,
        placeholder: "¿Cómo te sientes? ¿Qué pensamientos genera?"
      },
      {
        id: "sesgo_comparacion",
        label: "¿Con qué parte de los demás te comparas?",
        type: "textarea",
        rows: 2,
        placeholder: "Tendemos a comparar nuestro interior con el exterior de los demás..."
      },
      {
        id: "alternativa",
        label: "Alternativa: compararte con tu propio pasado",
        type: "textarea",
        rows: 3,
        placeholder: "¿En qué has mejorado respecto a ti mismo/a hace un año?"
      }
    ],
    printable: true
  },
  {
    id: "ae-perfeccionismo-sano",
    category: "self-esteem",
    title: "Del Perfeccionismo a la Excelencia Sana",
    description: "Diferenciación entre el perfeccionismo disfuncional y la búsqueda saludable de la excelencia.",
    goal: "Reducir el perfeccionismo dañino y cultivar estándares realistas de excelencia.",
    instructions: "Explora tu relación con el perfeccionismo y sus costes.",
    fields: [
      {
        id: "manifestaciones_perfeccionismo",
        label: "¿Cómo se manifiesta el perfeccionismo en tu vida?",
        type: "checklist",
        options: [{ id: "nunca_termino_las_tareas", label: "Nunca termino las tareas" }, { id: "procrastino_por_miedo_a_hacerl", label: "Procrastino por miedo a hacerlo mal" }, { id: "me_autocritico_mucho", label: "Me autocritico mucho" }, { id: "evito_intentar_cosas_nuevas", label: "Evito intentar cosas nuevas" }, { id: "necesito_la_aprobaci_n_de_otro", label: "Necesito la aprobación de otros" }, { id: "trabajo_en_exceso", label: "Trabajo en exceso" }, { id: "todo_o_nada", label: "Todo o nada" }]
      },
      {
        id: "costes",
        label: "¿Cuáles son los costes del perfeccionismo en tu vida?",
        type: "textarea",
        rows: 3,
        placeholder: "¿Qué pierdes por el perfeccionismo? ¿Qué te impide?"
      },
      {
        id: "diferencia",
        label: "¿Cuál es la diferencia entre perfeccionismo y excelencia?",
        type: "textarea",
        rows: 3,
        placeholder: "¿Qué significaría buscar lo mejor de ti sin la autocrítica destructiva?"
      },
      {
        id: "estandar_suficiente",
        label: "¿Cuál sería un estándar \"suficientemente bueno\" en tu área de excelencia?",
        type: "textarea",
        rows: 3,
        placeholder: "¿Qué nivel de calidad sería realista y satisfactorio sin ser perfeccionista?"
      }
    ],
    printable: true
  },
  {
    id: "ae-identidad-positiva",
    category: "self-esteem",
    title: "Construcción de Identidad Positiva",
    description: "Exploración y ampliación de la identidad personal más allá de los roles y los logros.",
    goal: "Desarrollar una identidad sólida y multidimensional que no dependa solo del rendimiento.",
    instructions: "Explora diferentes dimensiones de quién eres.",
    fields: [
      {
        id: "roles",
        label: "Mis roles actuales en la vida",
        type: "textarea",
        rows: 2,
        placeholder: "Hijo/a, pareja, profesional, amigo/a, ciudadano/a..."
      },
      {
        id: "mas_que_roles",
        label: "¿Quién soy más allá de mis roles?",
        type: "textarea",
        rows: 3,
        placeholder: "¿Cómo describirías quién eres si no pudieras mencionar tus roles?"
      },
      {
        id: "valores_identidad",
        label: "Valores que definen mi identidad",
        type: "textarea",
        rows: 3,
        placeholder: "¿Qué principios y valores guían cómo eres en el mundo?"
      },
      {
        id: "caracteristicas_estables",
        label: "Características personales estables que me definen",
        type: "textarea",
        rows: 3,
        placeholder: "Rasgos que te acompañan independientemente de lo que logres..."
      },
      {
        id: "quien_quiero_ser",
        label: "¿Quién quiero seguir siendo o llegar a ser?",
        type: "textarea",
        rows: 3,
        placeholder: "Tu visión de tu identidad en continuo crecimiento..."
      }
    ],
    printable: true
  },
  {
    id: "ae-critica-interna",
    category: "self-esteem",
    title: "Transformando al Crítico Interno",
    description: "Trabajo con la voz crítica interna para transformarla en un aliado compasivo.",
    goal: "Reducir el impacto del crítico interno y desarrollar una voz interior más compasiva.",
    instructions: "Personifica y trabaja con tu crítico interno.",
    fields: [
      {
        id: "critico_descripcion",
        label: "Describe tu crítico interno",
        type: "textarea",
        rows: 3,
        placeholder: "Si tuvieras que darle una forma, ¿cómo sería? ¿Cómo habla?"
      },
      {
        id: "mensajes_critico",
        label: "Mensajes más frecuentes de tu crítico interno",
        type: "textarea",
        rows: 3,
        placeholder: "¿Qué te dice más a menudo? Escribe sus palabras exactas..."
      },
      {
        id: "origen_critico",
        label: "¿De dónde viene esta voz?",
        type: "textarea",
        rows: 3,
        placeholder: "¿A quién te recuerda? ¿Qué experiencias la formaron?"
      },
      {
        id: "voz_compasiva",
        label: "¿Qué diría una voz más compasiva en respuesta?",
        type: "textarea",
        rows: 3,
        placeholder: "Responde al crítico con amabilidad y comprensión..."
      },
      {
        id: "carta_critico",
        label: "Carta al crítico interno",
        type: "textarea",
        rows: 5,
        placeholder: "Reconoce su intención (protegerte) pero establece límites sobre cómo te habla..."
      }
    ],
    printable: true
  },
  {
    id: "ae-asertividad",
    category: "self-esteem",
    title: "Asertividad y Autoestima",
    description: "Conexión entre la asertividad y la autoestima: aprender a expresarse respetándose.",
    goal: "Fortalecer la asertividad como expresión de autorespeto.",
    instructions: "Evalúa tu nivel de asertividad y practica en situaciones concretas.",
    fields: [
      {
        id: "estilo_comunicacion",
        label: "Mi estilo de comunicación habitual",
        type: "checklist",
        options: [{ id: "asertivo_expreso_mis_necesidad", label: "Asertivo (expreso mis necesidades con respeto)" }, { id: "pasivo_cedo_mis_necesidades_pa", label: "Pasivo (cedo mis necesidades para evitar conflicto)" }, { id: "agresivo_impongo_mis_necesidad", label: "Agresivo (impongo mis necesidades sin respetar a otros)" }, { id: "pasivo_agresivo_expreso_indire", label: "Pasivo-agresivo (expreso indirectamente el descontento)" }]
      },
      {
        id: "situaciones_dificiles",
        label: "Situaciones donde más me cuesta ser asertivo/a",
        type: "textarea",
        rows: 3,
        placeholder: "¿En qué contextos o con qué personas tienes más dificultades?"
      },
      {
        id: "miedo_asertividad",
        label: "¿Qué temes que ocurra si eres más asertivo/a?",
        type: "textarea",
        rows: 3,
        placeholder: "Rechazo, conflicto, que no te quieran, parecer egoísta..."
      },
      {
        id: "practica_asertiva",
        label: "Una situación para practicar la asertividad esta semana",
        type: "textarea",
        rows: 3,
        placeholder: "¿Qué dirás? ¿A quién? ¿Cómo lo harás?"
      }
    ],
    printable: true
  },
  {
    id: "ae-autoconocimiento",
    category: "self-esteem",
    title: "Autoconocimiento: Mis Luces y Sombras",
    description: "Exploración equilibrada de las fortalezas y áreas de desarrollo personal.",
    goal: "Desarrollar un autoconcepto realista que integre aspectos positivos y áreas de crecimiento.",
    instructions: "Explora tus fortalezas y áreas de desarrollo con honestidad y sin juicio.",
    fields: [
      {
        id: "mis_luces",
        label: "Mis fortalezas y cualidades positivas",
        type: "textarea",
        rows: 4,
        placeholder: "¿Qué se te da bien? ¿Qué dicen los demás que valoran de ti?"
      },
      {
        id: "mis_sombras",
        label: "Mis áreas de desarrollo y limitaciones",
        type: "textarea",
        rows: 4,
        placeholder: "¿En qué áreas tienes más dificultades? Sin autocrítica excesiva..."
      },
      {
        id: "equilibrio",
        label: "¿Cómo integras ambas partes en tu autoconcepto?",
        type: "textarea",
        rows: 3,
        placeholder: "¿Puedes aceptar que eres un ser complejo con luces y sombras?"
      },
      {
        id: "sombras_que_trabajar",
        label: "Una \"sombra\" que quiero trabajar (con compasión)",
        type: "textarea",
        rows: 3,
        placeholder: "¿Cómo abordarás esta área de desarrollo con amabilidad?"
      }
    ],
    printable: true
  },
  {
    id: "ae-proposito-significado",
    category: "self-esteem",
    title: "Propósito y Significado como Fundamento de la Autoestima",
    description: "Conexión entre el sentido de propósito y una autoestima estable.",
    goal: "Anclar la autoestima en el significado personal más que en el rendimiento externo.",
    instructions: "Reflexiona sobre tu propósito y cómo conecta con tu autoestima.",
    fields: [
      {
        id: "cuando_me_siento_bien",
        label: "¿Cuándo te sientes más satisfecho/a contigo mismo/a?",
        type: "textarea",
        rows: 3,
        placeholder: "¿Qué actividades o momentos te hacen sentir que eres quien quieres ser?"
      },
      {
        id: "contribucion",
        label: "¿Cómo contribuyes al bienestar de los demás o del mundo?",
        type: "textarea",
        rows: 3,
        placeholder: "Tu impacto en familia, trabajo, comunidad, medio ambiente..."
      },
      {
        id: "proposito_personal",
        label: "Mi propósito personal (o lo que se acerca a ello)",
        type: "textarea",
        rows: 3,
        placeholder: "¿Para qué sientes que estás aquí? ¿Qué quieres aportar?"
      },
      {
        id: "autoestima_proposito",
        label: "¿Cómo se relaciona tu propósito con cómo te sientes contigo mismo/a?",
        type: "textarea",
        rows: 3,
        placeholder: "¿Cuándo vives con propósito, cómo afecta a tu autoestima?"
      }
    ],
    printable: true
  },
  {
    id: "ae-afirmaciones-accion",
    category: "self-esteem",
    title: "Afirmaciones de Acción",
    description: "Creación de afirmaciones basadas en acciones y valores, no en afirmaciones vacías.",
    goal: "Desarrollar afirmaciones personales auténticas y basadas en evidencia.",
    instructions: "Crea afirmaciones que reflejen quién eres en acción, no sólo quien quieres ser.",
    fields: [
      {
        id: "problema_afirmaciones",
        label: "¿Por qué las afirmaciones vacías no siempre funcionan?",
        type: "textarea",
        rows: 2,
        placeholder: "\"Soy maravilloso\" puede crear más disonancia si no lo crees..."
      },
      {
        id: "evidencias_reales",
        label: "Evidencias reales de mis cualidades positivas",
        type: "textarea",
        rows: 4,
        placeholder: "Momentos específicos donde demostraste valentía, bondad, competencia..."
      },
      {
        id: "afirmaciones_accion",
        label: "Mis afirmaciones de acción personalizadas",
        type: "textarea",
        rows: 4,
        placeholder: "\"He demostrado que...\", \"Soy capaz de... porque...\", \"Cada vez que... muestro que...\""
      },
      {
        id: "practica_diaria",
        label: "¿Cómo y cuándo las practicarás?",
        type: "textarea",
        rows: 2,
        placeholder: "Momento del día, duración, formato (escrito, dicho en voz alta, etc.)..."
      }
    ],
    printable: true
  },
  {
    id: "ae-limites-autoestima",
    category: "self-esteem",
    title: "Límites Sanos y Autoestima",
    description: "Exploración de la relación entre establecer límites y el respeto hacia uno mismo.",
    goal: "Fortalecer la capacidad de establecer límites como expresión de autoestima.",
    instructions: "Reflexiona sobre tus patrones de límites y practica el establecimiento de nuevos.",
    fields: [
      {
        id: "donde_faltan_limites",
        label: "Áreas donde me cuesta establecer límites",
        type: "checklist",
        options: [{ id: "en_el_trabajo", label: "En el trabajo" }, { id: "con_familia", label: "Con familia" }, { id: "con_amigos", label: "Con amigos" }, { id: "en_pareja", label: "En pareja" }, { id: "con_el_tiempo_propio", label: "Con el tiempo propio" }, { id: "con_el_dinero", label: "Con el dinero" }, { id: "con_las_responsabilidades_de_o", label: "Con las responsabilidades de otros" }, { id: "en_redes_sociales", label: "En redes sociales" }]
      },
      {
        id: "porque_cuestan",
        label: "¿Por qué te cuesta establecer límites?",
        type: "textarea",
        rows: 3,
        placeholder: "Miedo al rechazo, culpa, necesidad de aprobación, creencias sobre ser buena persona..."
      },
      {
        id: "limites_que_necesito",
        label: "Límites que necesito establecer en mi vida ahora",
        type: "textarea",
        rows: 3,
        placeholder: "¿Qué te está costando bienestar? ¿Qué necesitas cambiar?"
      },
      {
        id: "como_establecerlos",
        label: "¿Cómo estableceré uno de estos límites?",
        type: "textarea",
        rows: 3,
        placeholder: "Qué dirás, a quién, cuándo, cómo manejarás la respuesta..."
      }
    ],
    printable: true
  }
];
