import PageHeader from "@/components/PageHeader";

const secciones = [
  {
    id: "setup",
    titulo: "Configuración técnica recomendada",
    icono: "🖥️",
    color: "#2563eb",
    contenido: [
      {
        subtitulo: "Plataformas de videollamada",
        items: [
          "Zoom (clínico): cifrado de extremo a extremo, sala de espera, compartir pantalla para fichas",
          "Whereby: sin instalación para el paciente, link fijo de consulta",
          "Microsoft Teams: si trabajas en institución o hospital",
          "Signal o WhatsApp Video: solo como alternativa de emergencia (no recomendado para sesiones regulares)",
        ],
      },
      {
        subtitulo: "Condiciones óptimas del espacio",
        items: [
          "Cámara al nivel de los ojos — evita el efecto de inferioridad/superioridad",
          "Fondo neutro o ligeramente borroso — minimiza distracciones visuales",
          "Iluminación frontal, nunca desde atrás — la luz de la ventana detrás genera silueta",
          "Auriculares con micrófono — mejora la calidad de audio y la privacidad",
          "Cartel de 'En sesión' fuera de la puerta — protege la confidencialidad",
        ],
      },
      {
        subtitulo: "Consentimiento informado específico para teleterapia",
        items: [
          "Informar sobre los límites de la confidencialidad en entornos digitales",
          "Acordar el protocolo de desconexión técnica (¿llamada telefónica?)",
          "Especificar la política de grabación (habitualmente prohibida)",
          "Indicar que el paciente también debe estar en un espacio privado",
          "Plan de crisis: número de emergencias, psiquiatra de guardia, persona de contacto",
        ],
      },
    ],
  },
  {
    id: "alianza",
    titulo: "Alianza terapéutica online",
    icono: "🤝",
    color: "#10b981",
    contenido: [
      {
        subtitulo: "Desafíos específicos de la pantalla",
        items: [
          "El contacto visual directo es imposible: mirar a la cámara ≠ mirar los ojos del paciente",
          "Las microexpresiones faciales son más difíciles de leer a través de la pantalla",
          "El silencio terapéutico puede sentirse incómodo y malinterpretarse como problema técnico",
          "La presencia física y el lenguaje corporal completo no están disponibles",
          "La regulación emocional compartida (coregulación) es más difícil",
        ],
      },
      {
        subtitulo: "Estrategias para fortalecer la alianza online",
        items: [
          "Verbalizar más: nombrar las emociones que percibes ('pareces pensativo en este momento')",
          "Preguntar explícitamente por la experiencia del formato ('¿cómo te está resultando la teleterapia?')",
          "Usar la función de compartir pantalla para fichas y materiales — aumenta la sensación de trabajo conjunto",
          "Comenzar cada sesión con 2-3 minutos de conexión genuina, más que en presencial",
          "Al final: preguntar siempre si hay algo que haya quedado pendiente de decir",
        ],
      },
    ],
  },
  {
    id: "tecnicas",
    titulo: "Adaptación de técnicas TCC",
    icono: "🔧",
    color: "#7c3aed",
    contenido: [
      {
        subtitulo: "Técnicas que funcionan igual o mejor online",
        items: [
          "Reestructuración cognitiva: compartir pantalla con el registro de pensamientos",
          "Psicoeducación: posibilidad de compartir recursos, vídeos y lecturas en tiempo real",
          "Registro de pensamientos y tareas: el paciente puede mostrar sus registros por cámara",
          "Diálogo socrático: sin pérdidas significativas respecto al presencial",
          "Biblioterapia y materiales escritos: más fácil de entregar y revisar",
        ],
      },
      {
        subtitulo: "Técnicas que requieren adaptación",
        items: [
          "Relajación muscular progresiva: guiarla verbalmente; el terapeuta no puede observar la tensión real",
          "EMDR: posible online con algunas adaptaciones (estimulación auditiva, autotapping), pero debatido",
          "Role-play y exposición en imaginación: funciona bien; exposición en vivo requiere planificación adicional",
          "Técnicas somáticas: explicar cuidadosamente, el terapeuta no puede modelar en vivo",
          "Mindfulness guiado: funciona bien, el paciente puede cerrar los ojos",
        ],
      },
      {
        subtitulo: "Técnicas que se complican online",
        items: [
          "Exposición en vivo acompañada: necesita coordinación adicional o trabajo in situ",
          "Trabajo corporal intenso: las limitaciones de la cámara reducen la observación clínica",
          "Sesiones con familiares: gestionar múltiples personas en pantalla es más complejo",
        ],
      },
    ],
  },
  {
    id: "crisis",
    titulo: "Manejo de crisis por pantalla",
    icono: "🚨",
    color: "#dc2626",
    contenido: [
      {
        subtitulo: "Protocolo ante riesgo suicida",
        items: [
          "ANTES de cada paciente de riesgo: tener a mano número de teléfono directo del paciente",
          "Conocer la dirección física del paciente para poder contactar a servicios de emergencia",
          "Acordar explícitamente un plan de seguridad al inicio del tratamiento online",
          "Si el riesgo es inmediato: mantener al paciente en pantalla mientras llamas al 112 en otro dispositivo",
          "Tener identificado el centro de salud mental o urgencias más cercano al paciente",
        ],
      },
      {
        subtitulo: "Protocolo ante fallo técnico",
        items: [
          "Acordar al inicio: 'Si nos desconectamos, te llamo en 2 minutos al [número]'",
          "Tener siempre el teléfono del paciente visible durante la sesión",
          "Si la reconexión falla repetidamente: continuar la sesión por teléfono",
          "No esperar más de 3-4 minutos sin establecer contacto alternativo",
        ],
      },
      {
        subtitulo: "Pacientes en situación de riesgo para teleterapia",
        items: [
          "Psicosis activa: el formato online puede aumentar desconfianza o confusión",
          "Ideación suicida activa con plan: valorar cuidadosamente, puede requerir presencial",
          "Trastorno disociativo severo: la pantalla puede complicar el trabajo con partes",
          "Pacientes sin espacio privado en casa: domicilio violento o sin intimidad",
        ],
      },
    ],
  },
  {
    id: "poblaciones",
    titulo: "Consideraciones por población",
    icono: "👥",
    color: "#0891b2",
    contenido: [
      {
        subtitulo: "Niños y adolescentes",
        items: [
          "Sesiones más cortas (30-40 min) y con más actividades visuales",
          "Implicar a los padres/tutores en parte de la sesión cuando sea necesario",
          "Usar herramientas interactivas: pizarra virtual, compartir juegos de reflexión",
          "Verificar que tienen privacidad real (los padres no escuchan la sesión)",
        ],
      },
      {
        subtitulo: "Adultos mayores",
        items: [
          "Dedicar tiempo extra a la configuración técnica en las primeras sesiones",
          "Letra e imágenes más grandes al compartir pantalla",
          "Verificar que el audio es claro — pueden tener dificultades de audición",
          "Valorar si prefieren el teléfono como alternativa a la videollamada",
        ],
      },
      {
        subtitulo: "Trauma complejo y TEPT",
        items: [
          "El espacio seguro es más difícil de establecer online — dedicar más tiempo a ello",
          "La disociación durante la sesión requiere habilidades específicas del terapeuta",
          "Acordar señales no verbales para indicar dificultad (levantar la mano)",
          "Tener especial cuidado con la exposición al trauma: el paciente está solo en su entorno",
        ],
      },
    ],
  },
];

export default function TeleterapiaPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <PageHeader
        title="Guía de Teleterapia TCC"
        description="Kit completo para psicólogos que practican TCC online. Configuración, alianza terapéutica, adaptación de técnicas y manejo de crisis por pantalla."
        badge="Guía completa"
        badgeColor="bg-cyan-600"
      />

      {/* Quick stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {[
          { valor: "~80%", texto: "eficacia equivalente al presencial en TCC (metaanálisis 2021)" },
          { valor: "↑", texto: "adherencia al tratamiento en poblaciones con movilidad reducida" },
          { valor: "✓", texto: "validado para depresión, ansiedad, TOC e insomnio" },
          { valor: "NICE", texto: "recomienda teleterapia TCC como alternativa válida" },
        ].map((stat) => (
          <div key={stat.texto} className="bg-white rounded-2xl border border-slate-100 p-4 text-center">
            <div className="text-2xl font-bold text-cyan-600 mb-1">{stat.valor}</div>
            <div className="text-xs text-slate-500 leading-tight">{stat.texto}</div>
          </div>
        ))}
      </div>

      {/* Sections */}
      <div className="space-y-6">
        {secciones.map((seccion) => (
          <div key={seccion.id} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            {/* Section header */}
            <div
              className="px-6 py-4 flex items-center gap-4"
              style={{ borderLeft: `4px solid ${seccion.color}` }}
            >
              <span className="text-2xl">{seccion.icono}</span>
              <h2 className="font-bold text-[#1e3a5f] text-lg">{seccion.titulo}</h2>
            </div>

            {/* Section content */}
            <div className="p-6 pt-0 grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              {seccion.contenido.map((bloque) => (
                <div key={bloque.subtitulo}>
                  <h3
                    className="text-sm font-bold mb-3 pb-2 border-b"
                    style={{ color: seccion.color, borderColor: `${seccion.color}25` }}
                  >
                    {bloque.subtitulo}
                  </h3>
                  <ul className="space-y-2">
                    {bloque.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-slate-600 leading-relaxed">
                        <span
                          className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: seccion.color }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Evidence note */}
      <div className="mt-8 bg-slate-50 border border-slate-200 rounded-2xl p-5">
        <p className="text-sm font-semibold text-slate-700 mb-2">Base de evidencia</p>
        <div className="space-y-1">
          {[
            "Carlbring P et al. (2018). Internet-based vs face-to-face CBT. World Psychiatry, 17, 160-171.",
            "Fernández-Álvarez J et al. (2021). Videoconferencing psychotherapy during the pandemic. Psicothema, 33, 212-220.",
            "NICE (2022). Common mental health problems: identification and pathways to care. CG123.",
          ].map((ref) => (
            <p key={ref} className="text-xs text-slate-500 leading-relaxed">{ref}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
