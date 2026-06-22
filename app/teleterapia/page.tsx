import PageHeader from "@/components/PageHeader";
import Link from "next/link";

const checklist = {
  preSession: [
    "Conexión a internet estable comprobada (>10 Mbps recomendado)",
    "Cámara a la altura de los ojos, iluminación frontal",
    "Fondo neutro y profesional (o fondo virtual sin distracciones)",
    "Auriculares con micrófono conectados y probados",
    "Plataforma de videollamada abierta y lista",
    "Plataforma de respaldo acordada con el paciente (teléfono/otra app)",
    "Dirección física del paciente y contacto de emergencia a mano",
    "Historial y notas de sesiones anteriores revisados",
    "Fichas o materiales de la sesión preparados y listos para compartir",
    "Móvil en silencio, notificaciones desactivadas",
    "Puerta cerrada y privacidad garantizada",
    "Agua cerca para la sesión",
  ],
  firstSession: [
    "Confirmada privacidad del paciente en su espacio",
    "Explicado el encuadre online y sus limitaciones",
    "Recogida dirección física completa del paciente",
    "Recogido nombre y teléfono de contacto de emergencia",
    "Explicado protocolo si la conexión se corta",
    "Confirmado que el paciente tiene el número de teléfono del terapeuta",
    "Explicado qué ocurre en caso de crisis severa",
    "Obtenido consentimiento informado específico para teleterapia",
    "Explorada adecuación de la teleterapia para este paciente",
    "Acordado canal seguro para comunicación entre sesiones",
  ],
};

const secciones = [
  {
    titulo: "Configuración técnica óptima",
    icono: "💻",
    color: "border-blue-200 bg-blue-50",
    items: [
      { titulo: "Plataforma segura", desc: "Usa una plataforma con cifrado de extremo a extremo. Opciones clínicas recomendadas: Doxy.me (gratuita, sin instalación, diseñada para salud), Whereby, Zoom for Healthcare, o la plataforma de tu institución. Evita WhatsApp o Skype para sesiones clínicas." },
      { titulo: "Encuadre visual", desc: "Cámara a la altura de los ojos (no picado ni contrapicado). Iluminación frontal natural o lámpara suave — nunca con ventana detrás. El paciente debe verte como si estuvieras al mismo nivel, no por encima." },
      { titulo: "Audio de calidad", desc: "Auriculares con micrófono reducen el eco y mejoran la privacidad. Habitación sin reverberación. Avisa al paciente si hay ruido ambiental inevitable. El audio malo dificulta la conexión emocional más que el vídeo malo." },
      { titulo: "Plan B obligatorio", desc: "Antes de cada sesión, confirma: número de teléfono del paciente, plataforma de respaldo acordada, y qué hacer si la llamada se corta en medio de una crisis. Practica el cambio a plan B al menos una vez con cada paciente." },
      { titulo: "Velocidad de conexión", desc: "Mínimo 5 Mbps de subida/bajada. Usa cable ethernet si es posible. Cierra aplicaciones que consumen ancho de banda. Si hay cortes frecuentes, considera pasar a audio solo — la voz sin vídeo es mejor que un vídeo cortado." },
      { titulo: "Sala de espera virtual", desc: "Algunas plataformas tienen sala de espera — úsala para mantener el encuadre. El paciente entra cuando tú le admites, igual que en presencial. Esto refuerza el límite terapéutico y el encuadre profesional." },
    ],
  },
  {
    titulo: "Alianza terapéutica por pantalla",
    icono: "🤝",
    color: "border-emerald-200 bg-emerald-50",
    items: [
      { titulo: "Los primeros 5 minutos", desc: "Empieza con una breve conexión personal antes del trabajo clínico. Pregunta cómo está, si está en un espacio privado, si hay algo que necesite antes de empezar. La pantalla hace más necesaria la conexión explícita — no supongas que ya está." },
      { titulo: "Contacto visual adaptado", desc: "Mira directamente a la cámara (no a la imagen del paciente) cuando quieras transmitir presencia y escucha activa. Asiente frecuentemente con la cabeza. Haz más gestos faciales que en presencial para compensar la pérdida de lenguaje corporal." },
      { titulo: "Verificar comprensión con más frecuencia", desc: "En online se pierde el 70% de la comunicación no verbal. Pregunta más explícitamente y con más frecuencia: '¿Cómo te ha quedado lo que hemos hablado?' '¿Hay algo que no haya quedado claro?' No asumas que el silencio es comprensión." },
      { titulo: "Pausas intencionales", desc: "Las pausas online son más incómodas que en presencial. Normalízalas: 'Voy a dejar un momento de silencio para que puedas procesar.' El paciente puede interpretar el silencio como desconexión técnica si no lo avisas." },
      { titulo: "Cierre explícito y ritual", desc: "El cierre de sesión online necesita ser más intencionado que en presencial. Dedica los últimos 7-10 minutos a cerrar activamente: resumir, acordar tarea, cómo está el paciente antes de colgar. No termines abruptamente." },
      { titulo: "Nombre del paciente más frecuente", desc: "Usar el nombre del paciente con más frecuencia que en presencial refuerza la conexión y ayuda a mantener la atención. La pantalla crea distancia — el nombre la reduce." },
    ],
  },
  {
    titulo: "Adaptación de técnicas TCC",
    icono: "🔧",
    color: "border-purple-200 bg-purple-50",
    items: [
      { titulo: "Compartir pantalla como pizarra", desc: "Para el modelo cognitivo, mapas de pensamientos o jerarquías de exposición, comparte tu pantalla con un Google Docs o Word. El paciente ve cómo escribes en tiempo real — es más dinámico que la pizarra física." },
      { titulo: "Fichas colaborativas en tiempo real", desc: "Comparte el link de una ficha de esta app con el paciente. Ambos podéis verla simultáneamente. El paciente la rellena en su dispositivo mientras habláis — mucho más eficaz que dictarle respuestas." },
      { titulo: "Exposición con apoyo en tiempo real", desc: "El paciente realiza la exposición en su entorno natural mientras mantiene la videollamada activa. Tú das apoyo y mides el SUDS en tiempo real. Para fobias situacionales (ascensores, supermercados), el paciente puede llevar el móvil durante la exposición." },
      { titulo: "Relajación y mindfulness guiados", desc: "Funcionan excelentemente en online — el paciente puede tumbarse en su sofá o cama. Avisa que puede cerrar los ojos. Habla más despacio que en presencial. Espera antes de terminar para verificar que vuelve gradualmente." },
      { titulo: "Role-play y habilidades sociales", desc: "El role-play funciona bien por videollamada. Para fobia social, la videollamada puede ser ella misma una exposición progresiva. Para habilidades de comunicación, la pantalla añade un nivel de distancia que a veces facilita el inicio." },
      { titulo: "Tareas entre sesiones digitales", desc: "Envía las fichas por correo antes de la sesión para que el paciente las tenga preparadas. Usa Google Forms o las fichas de esta app para que el paciente registre sus tareas y puedas verlas antes de la sesión." },
    ],
  },
];

const casosGestion = [
  {
    situacion: "El paciente está en crisis durante la sesión",
    indicadores: "Llanto intenso que no cede, disociación visible, menciona autolesión o suicidio activo.",
    accion: "1) Verifica que está en un espacio seguro. 2) Mantén la llamada activa. 3) Habla despacio y claro: '¿Estás en un lugar seguro ahora mismo?' 4) Si hay riesgo inmediato: pide que llame al 112 mientras mantienes tú la llamada, o activa el contacto de emergencia que tienes registrado. 5) No cuelgues hasta verificar seguridad.",
    prevenir: "Recoger siempre dirección y contacto de emergencia en primera sesión. Tener el plan de crisis acordado antes de que ocurra.",
  },
  {
    situacion: "La conexión se corta en mitad de una crisis",
    indicadores: "El paciente se desconecta abruptamente sin aviso, especialmente en un momento emocional intenso.",
    accion: "1) Intenta reconectar inmediatamente por la plataforma. 2) Si no responde en 2 minutos, llama al teléfono. 3) Si no responde al teléfono, envía mensaje de texto. 4) Si no hay respuesta en 10 minutos y el riesgo era alto, activa el contacto de emergencia. 5) Documenta todo el proceso.",
    prevenir: "Acordar explícitamente en primera sesión qué harás si la conexión se corta. El paciente debe saber que intentarás reconectar.",
  },
  {
    situacion: "El paciente no tiene privacidad real",
    indicadores: "Se escucha a alguien en su espacio, baja la voz repentinamente, mira hacia los lados con nerviosismo.",
    accion: "1) Pregunta directamente: '¿Estás en un espacio privado donde puedes hablar con libertad?' 2) Si no puede hablar: acuerda un código ('di sí si todo está bien') o posterga la sesión. 3) Trabaja la sesión a nivel superficial si no hay privacidad. 4) Nunca presiones para continuar si hay riesgo de ser escuchado.",
    prevenir: "En primera sesión, hablar sobre la importancia de la privacidad y planificar cómo el paciente la garantizará.",
  },
  {
    situacion: "El paciente muestra signos de disociación",
    indicadores: "Mirada perdida, respuestas muy lentas, desconexión del contenido emocional que estaban trabajando.",
    accion: "1) Interrumpe el contenido: '¿Sigues aquí conmigo?' 2) Usa técnicas de grounding verbales: '¿Puedes decirme 3 cosas que ves ahora mismo?' 3) Pide que haga algo físico: levantarse, tocar algo con temperatura. 4) Reduce la intensidad del contenido. 5) No continúes con material trauma/difícil hasta que vuelva a estar presente.",
    prevenir: "Establecer con el paciente las señales de disociación y el protocolo acordado antes de trabajar material difícil.",
  },
  {
    situacion: "El terapeuta detecta consumo de alcohol o sustancias",
    indicadores: "Habla pastosa, pensamiento desorganizado, referencias al consumo reciente, confiesa haber consumido.",
    accion: "1) No continúes la sesión clínica sustantiva. 2) Verifica seguridad inmediata: '¿Estás solo/a? ¿Estás seguro/a?' 3) Acorta la sesión amablemente: 'Hoy no vamos a poder trabajar en los temas habituales. Lo dejamos aquí y seguimos el próximo día.' 4) Si hay riesgo de seguridad: activa protocolo de crisis. 5) Aborda el episodio en la siguiente sesión sin juicio.",
    prevenir: "Incluir en el encuadre online que las sesiones requieren estar en condiciones de participar plenamente.",
  },
];

const guiaBienvenida = {
  intro: "Texto adaptable para enviar al paciente antes de la primera sesión online:",
  partes: [
    {
      titulo: "Antes de la primera sesión",
      contenido: `Hola [nombre],

Antes de nuestra primera sesión online, me gustaría compartirte algunas indicaciones para que todo funcione bien.

ESPACIO: Busca un lugar privado donde nadie pueda escucharte. Pon un cartel en la puerta si es necesario. Si vives con otras personas, coméntales que tendrás una reunión importante.

DISPOSITIVO: Puedes usar ordenador, tablet o móvil. Si usas móvil, colócalo en un soporte — no lo tengas en la mano. Cierra otras aplicaciones.

CONEXIÓN: Conéctate con 5 minutos de antelación para comprobar que todo funciona. Tenemos el teléfono como respaldo si hay problemas técnicos.

PRIVACIDAD: Todo lo que hablemos es confidencial. Asegúrate de que no haya altavoces o dispositivos que puedan grabarte sin tu conocimiento.

Si tienes cualquier duda técnica antes de la sesión, escríbeme.`,
    },
    {
      titulo: "Qué esperar de las sesiones online",
      contenido: `Las sesiones online tienen algunas diferencias respecto a las presenciales:

✓ Duración igual: 50-60 minutos
✓ Misma confidencialidad que en presencial
✓ Misma efectividad para la mayoría de casos
✓ Posibilidad de usar fichas y materiales digitales durante la sesión

Diferencias a tener en cuenta:
— A veces se producen pequeños cortes técnicos (es normal, los gestionaremos)
— Al inicio puede sentirse algo diferente — eso es completamente normal
— Es importante cerrar otras pestañas y poner el móvil en silencio

En caso de urgencia fuera de sesión: [número de teléfono o protocolo de urgencias].`,
    },
  ],
};

const protocoloCrisis = [
  {
    paso: "01",
    titulo: "Detección temprana",
    desc: "Señales de alerta: el paciente menciona ideación suicida, autolesión reciente, crisis de pánico severa o disociación intensa. No minimices ninguna señal verbal.",
    color: "bg-red-50 border-red-200",
    numColor: "bg-red-500",
  },
  {
    paso: "02",
    titulo: "Verificar seguridad inmediata",
    desc: "Pregunta directamente: '¿Estás en un lugar seguro ahora mismo?' '¿Hay algo en tu entorno inmediato que represente un riesgo?' Mantén voz calmada y ritmo lento.",
    color: "bg-orange-50 border-orange-200",
    numColor: "bg-orange-500",
  },
  {
    paso: "03",
    titulo: "Mantener la conexión",
    desc: "No cuelgues bajo ningún concepto hasta verificar seguridad. Si la llamada se cae, llama inmediatamente al teléfono. Si no responde en 2 minutos, activa el contacto de emergencia.",
    color: "bg-amber-50 border-amber-200",
    numColor: "bg-amber-500",
  },
  {
    paso: "04",
    titulo: "Activar red de apoyo",
    desc: "Pide al paciente que contacte a su persona de apoyo mientras mantienes la llamada. Si el riesgo es alto: pide que llame al 112 o al 024 (línea de atención a conducta suicida). Ofrécete a esperar mientras hace la llamada.",
    color: "bg-yellow-50 border-yellow-200",
    numColor: "bg-yellow-600",
  },
  {
    paso: "05",
    titulo: "Derivación a urgencias si es necesario",
    desc: "Si el riesgo es inminente y el paciente no puede garantizar su seguridad: activa directamente el contacto de emergencia registrado, o indica al paciente que llame al 112. Documenta todo lo ocurrido.",
    color: "bg-blue-50 border-blue-200",
    numColor: "bg-blue-500",
  },
  {
    paso: "06",
    titulo: "Documentación y seguimiento",
    desc: "Tras la crisis: documenta todo el episodio (hora, evaluación de riesgo, acciones tomadas, estado al finalizar). Contacta con el paciente al día siguiente. Consulta el caso en supervisión.",
    color: "bg-purple-50 border-purple-200",
    numColor: "bg-purple-500",
  },
];

const recursos = [
  {
    categoria: "Plataformas de videollamada clínica",
    icono: "📹",
    color: "bg-blue-50 border-blue-200",
    items: [
      { nombre: "Doxy.me", desc: "Gratuita, sin instalación, diseñada para salud. Sala de espera virtual. HIPAA-compliant." },
      { nombre: "Whereby", desc: "Sencilla, sin descarga, con sala fija. Plan gratuito suficiente para práctica individual." },
      { nombre: "Zoom for Healthcare", desc: "La más conocida. Versión específica con acuerdo BAA para cumplimiento HIPAA." },
      { nombre: "Google Meet", desc: "Fácil de usar, integrada con Google Calendar. Buena opción para instituciones con G Suite." },
    ],
  },
  {
    categoria: "Herramientas de colaboración en sesión",
    icono: "🛠️",
    color: "bg-emerald-50 border-emerald-200",
    items: [
      { nombre: "Google Docs compartido", desc: "Para registros de pensamientos colaborativos, formulaciones cognitivas y notas de sesión." },
      { nombre: "Miro / FigJam", desc: "Pizarras virtuales para mapas conceptuales, modelo ABC, cadenas de conducta, jerarquías." },
      { nombre: "Google Forms", desc: "Para que el paciente complete cuestionarios o fichas entre sesiones y tú recibas las respuestas." },
      { nombre: "Notion", desc: "Para crear un espacio compartido paciente-terapeuta con recursos, tareas y progreso." },
    ],
  },
  {
    categoria: "Recursos para el paciente entre sesiones",
    icono: "📱",
    color: "bg-purple-50 border-purple-200",
    items: [
      { nombre: "Headspace / Calm", desc: "Apps de meditación guiada para práctica de mindfulness entre sesiones." },
      { nombre: "Daylio / Bearable", desc: "Apps de registro de estado de ánimo y síntomas. Útiles como diario emocional estructurado." },
      { nombre: "Woebot", desc: "Chatbot de TCC para apoyo entre sesiones. No sustituye la terapia, complementa el trabajo." },
      { nombre: "PTSD Coach (VA)", desc: "App gratuita del Departamento de Veteranos de EEUU para síntomas de trauma. Muy completa." },
    ],
  },
  {
    categoria: "Gestión de la práctica online",
    icono: "📋",
    color: "bg-amber-50 border-amber-200",
    items: [
      { nombre: "SimplePractice", desc: "Plataforma integral: videollamadas, historia clínica, notas, facturación. Diseñada para psicólogos." },
      { nombre: "TheraPlatform", desc: "Alternativa con pizarra virtual integrada, especialmente útil para TCC y trabajo con fichas." },
      { nombre: "Calendly", desc: "Gestión de citas online. El paciente reserva directamente en tu disponibilidad — evita emails." },
      { nombre: "Docusign / HelloSign", desc: "Para obtener consentimientos informados firmados digitalmente antes de la primera sesión." },
    ],
  },
];

const eticaLegal = [
  {
    titulo: "Consentimiento informado específico para teleterapia",
    desc: "El consentimiento para teleterapia debe ser diferente al presencial. Debe incluir: riesgos específicos del formato online (confidencialidad técnica, limitaciones ante crisis), protocolo de crisis, plan B tecnológico, y política de grabación. Obtenerlo siempre por escrito antes de la primera sesión.",
    icono: "📝",
  },
  {
    titulo: "Competencia jurisdiccional y licencias",
    desc: "En España, puedes hacer teleterapia con pacientes en cualquier comunidad autónoma si tienes el número de colegiado. Para pacientes en el extranjero, es necesario verificar la legislación del país del paciente. Algunos países (EEUU, Alemania, Francia) tienen restricciones estrictas.",
    icono: "⚖️",
  },
  {
    titulo: "Protección de datos (RGPD)",
    desc: "Las plataformas que uses deben cumplir el RGPD. Necesitas tener un Registro de Actividades de Tratamiento. Las videoconferencias no deben grabarse sin consentimiento explícito. Los datos clínicos almacenados en la nube deben estar en servidores europeos o con garantías equivalentes.",
    icono: "🔒",
  },
  {
    titulo: "Historia clínica digital",
    desc: "La historia clínica digital tiene los mismos requisitos legales que la física: custodia 5 años mínimo, acceso restringido, copia de seguridad. Usa siempre herramientas con contraseña y cifrado. Evita guardar datos clínicos en Google Drive o Dropbox sin cifrado adicional.",
    icono: "🗂️",
  },
  {
    titulo: "Adecuación del paciente para teleterapia",
    desc: "No todos los pacientes son adecuados para teleterapia online. Contraindicaciones relativas: psicosis activa, riesgo suicida alto activo, trastornos graves de personalidad en fase aguda, pacientes sin acceso a espacio privado, dependencia grave de sustancias activa. Evalúa caso a caso.",
    icono: "🩺",
  },
  {
    titulo: "Seguro de responsabilidad civil",
    desc: "Verifica que tu seguro de responsabilidad civil cubre la práctica online. Algunos seguros excluyen expresamente la teleterapia o tienen condiciones específicas (solo pacientes en el mismo país, exclusiones por crisis no presenciales). Consulta con tu colegio profesional.",
    icono: "🛡️",
  },
  {
    titulo: "Confidencialidad técnica",
    desc: "Informa al paciente de los riesgos técnicos que pueden afectar a la confidencialidad: grabaciones no autorizadas, terceros en la misma red WiFi, historial del navegador. Recomienda que use auriculares y WiFi privada. Tú también debes hacerlo.",
    icono: "🔐",
  },
  {
    titulo: "Documentación de crisis",
    desc: "En teleterapia, la documentación de episodios de crisis es especialmente importante desde el punto de vista legal. Documenta siempre: fecha y hora, evaluación de riesgo realizada, acciones tomadas, estado del paciente al finalizar, y el seguimiento posterior. Ante cualquier incidente, consulta con tu colegio.",
    icono: "📋",
  },
];

const autocuidado = [
  {
    titulo: "Límite de sesiones diarias",
    desc: "Las sesiones online son entre un 20-30% más agotadoras que las presenciales por el mayor esfuerzo de atención sostenida. Reduce tu máximo diario respecto al presencial. Muchos terapeutas que dan 7-8 sesiones presenciales bajan a 5-6 online.",
    icono: "⏱️",
  },
  {
    titulo: "Pausas entre sesiones obligatorias",
    desc: "Programa al menos 15 minutos entre sesiones, no 5. Usa ese tiempo para alejarte de la pantalla: estira, sal unos minutos, bebe agua. La transición entre sesiones online es más difícil que en presencial porque el cambio de espacio físico no existe.",
    icono: "☕",
  },
  {
    titulo: "Rituales de inicio y cierre del día",
    desc: "Sin desplazamientos, el día de trabajo online comienza y termina de forma difusa. Crea rituales claros: 10 minutos de preparación antes de la primera sesión (revisar notas, respirar, intención del día), y un ritual de cierre al final (notas, desconexión del espacio de trabajo, actividad física o de ocio).",
    icono: "🌅",
  },
  {
    titulo: "Espacio físico dedicado",
    desc: "Si es posible, trabaja siempre en el mismo espacio físico y dedícalo exclusivamente al trabajo. Cuando termines, abandona físicamente ese espacio. La separación física ayuda a la separación mental. Evita hacer teleterapia desde el sofá o la cama.",
    icono: "🏠",
  },
  {
    titulo: "Fatiga de pantalla (Zoom fatigue)",
    desc: "Las videollamadas son más agotadoras porque requieren un procesamiento cognitivo mayor del lenguaje no verbal. Síntomas: dificultad de concentración, irritabilidad, dolor de cabeza al final del día. Remedios: cámara en off en reuniones que no sean sesiones, más descansos, días sin pantalla.",
    icono: "👁️",
  },
  {
    titulo: "Supervisión regular — especialmente online",
    desc: "La teleterapia requiere más supervisión, no menos. Las limitaciones del encuadre online generan situaciones clínicas complejas que es importante consultar. Programa supervisión regular (al menos mensual) y lleva a supervisión los casos que presentan dificultades en el formato online.",
    icono: "👥",
  },
  {
    titulo: "Conexión con colegas",
    desc: "La teleterapia puede ser solitaria. Busca grupos de intervisión con otros terapeutas que también trabajen online. El aislamiento del terapeuta online es un riesgo real para el bienestar profesional y la calidad clínica.",
    icono: "🌐",
  },
  {
    titulo: "Atención al cuerpo",
    desc: "8 horas sentado frente a una pantalla deteriora la postura y genera tensión muscular. Invierte en una buena silla y escritorio a la altura correcta. Haz pausas activas cada 90 minutos: 5 minutos de movimiento. El cuerpo del terapeuta es una herramienta clínica.",
    icono: "🧘",
  },
];

const fichasOnline = [
  { id: "registro-pensamientos", nombre: "Registro de pensamientos automáticos" },
  { id: "diario-estado-animo", nombre: "Diario de estado de ánimo" },
  { id: "actividades-agradables", nombre: "Lista de actividades agradables" },
  { id: "plan-activacion-conductual", nombre: "Plan de activación conductual" },
  { id: "plan-seguridad-emocional", nombre: "Plan de seguridad emocional" },
  { id: "ptsd-grounding", nombre: "Técnicas de grounding (PTSD)" },
  { id: "tlp-habilidades-crisis", nombre: "Habilidades DBT para crisis" },
  { id: "sueno-higiene", nombre: "Plan de higiene del sueño" },
];

export default function TeleterapiaPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <PageHeader
        title="Guía Completa de Teleterapia"
        description="Mejores prácticas, protocolos, recursos y consideraciones éticas para ofrecer TCC de calidad en formato online."
        badge="💻 Teleterapia"
      />

      {/* ── Secciones principales ── */}
      <div className="space-y-6">
        {secciones.map((seccion) => (
          <div key={seccion.titulo} className={`rounded-2xl border ${seccion.color} overflow-hidden`}>
            <div className="px-6 py-4 border-b border-inherit flex items-center gap-3">
              <span className="text-2xl">{seccion.icono}</span>
              <h2 className="font-bold text-[#1e3a5f] text-lg">{seccion.titulo}</h2>
            </div>
            <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
              {seccion.items.map((item) => (
                <div key={item.titulo} className="bg-white rounded-xl p-4 shadow-sm">
                  <h3 className="font-semibold text-[#1e3a5f] text-sm mb-1.5">{item.titulo}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* ── Checklist ── */}
      <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden">
        <div className="px-6 py-4 border-b border-slate-200 flex items-center gap-3">
          <span className="text-2xl">✅</span>
          <h2 className="font-bold text-[#1e3a5f] text-lg">Checklist de Sesión</h2>
        </div>
        <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-[#1e3a5f] text-sm mb-3 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-blue-500 text-white text-[10px] flex items-center justify-center font-bold">A</span>
              Antes de cada sesión
            </h3>
            <ul className="space-y-2">
              {checklist.preSession.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="w-4 h-4 rounded border-2 border-slate-300 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-[#1e3a5f] text-sm mb-3 flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-emerald-500 text-white text-[10px] flex items-center justify-center font-bold">P</span>
              Primera sesión online (extra)
            </h3>
            <ul className="space-y-2">
              {checklist.firstSession.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="w-4 h-4 rounded border-2 border-slate-300 flex-shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Guía de bienvenida ── */}
      <div className="mt-6 rounded-2xl border border-indigo-200 bg-indigo-50 overflow-hidden">
        <div className="px-6 py-4 border-b border-indigo-200 flex items-center gap-3">
          <span className="text-2xl">👋</span>
          <h2 className="font-bold text-[#1e3a5f] text-lg">Guía de Bienvenida para el Paciente</h2>
        </div>
        <div className="p-5">
          <p className="text-sm text-indigo-700 mb-4 font-medium">{guiaBienvenida.intro}</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {guiaBienvenida.partes.map((parte) => (
              <div key={parte.titulo} className="bg-white rounded-xl p-4 shadow-sm">
                <h3 className="font-semibold text-[#1e3a5f] text-sm mb-3">{parte.titulo}</h3>
                <pre className="text-xs text-gray-600 leading-relaxed whitespace-pre-wrap font-sans">{parte.contenido}</pre>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Protocolo de crisis ── */}
      <div className="mt-6 rounded-2xl border border-red-200 bg-red-50 overflow-hidden">
        <div className="px-6 py-4 border-b border-red-200 flex items-center gap-3">
          <span className="text-2xl">🚨</span>
          <h2 className="font-bold text-[#1e3a5f] text-lg">Protocolo de Crisis Online — Paso a Paso</h2>
        </div>
        <div className="p-5 space-y-3">
          {protocoloCrisis.map((paso) => (
            <div key={paso.paso} className={`rounded-xl border ${paso.color} p-4 flex gap-4`}>
              <div className={`w-8 h-8 rounded-full ${paso.numColor} text-white text-sm font-bold flex items-center justify-center flex-shrink-0`}>
                {paso.paso}
              </div>
              <div>
                <h3 className="font-semibold text-[#1e3a5f] text-sm mb-1">{paso.titulo}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{paso.desc}</p>
              </div>
            </div>
          ))}
          <div className="bg-red-600 rounded-xl p-4 mt-2">
            <p className="text-white text-sm font-semibold">Teléfonos clave:</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mt-2">
              {[
                { nombre: "Emergencias", num: "112" },
                { nombre: "Conducta suicida", num: "024" },
                { nombre: "SAMUR / SEM", num: "061" },
                { nombre: "Violencia género", num: "016" },
              ].map((t) => (
                <div key={t.nombre} className="bg-white/15 rounded-lg px-3 py-2 text-center">
                  <div className="text-white font-bold text-lg leading-none">{t.num}</div>
                  <div className="text-white/80 text-[10px] mt-0.5">{t.nombre}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Casos prácticos de gestión */}
        <div className="px-5 pb-5">
          <h3 className="font-bold text-[#1e3a5f] text-sm mb-3 mt-2">Casos prácticos — ¿Cómo gestionar estas situaciones?</h3>
          <div className="space-y-3">
            {casosGestion.map((caso) => (
              <details key={caso.situacion} className="bg-white rounded-xl shadow-sm overflow-hidden group">
                <summary className="px-4 py-3 cursor-pointer font-semibold text-sm text-[#1e3a5f] flex items-center justify-between list-none">
                  <span>⚠️ {caso.situacion}</span>
                  <svg className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-4 pb-4 pt-1 border-t border-slate-100 space-y-2">
                  <div>
                    <span className="text-xs font-semibold text-red-500 uppercase tracking-wide">Indicadores</span>
                    <p className="text-sm text-gray-600 mt-1">{caso.indicadores}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-blue-500 uppercase tracking-wide">Qué hacer</span>
                    <p className="text-sm text-gray-600 mt-1">{caso.accion}</p>
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-emerald-500 uppercase tracking-wide">Cómo prevenirlo</span>
                    <p className="text-sm text-gray-600 mt-1">{caso.prevenir}</p>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>

      {/* ── Recursos digitales ── */}
      <div className="mt-6 rounded-2xl border border-sky-200 bg-sky-50 overflow-hidden">
        <div className="px-6 py-4 border-b border-sky-200 flex items-center gap-3">
          <span className="text-2xl">🌐</span>
          <h2 className="font-bold text-[#1e3a5f] text-lg">Recursos Digitales Recomendados</h2>
        </div>
        <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
          {recursos.map((cat) => (
            <div key={cat.categoria} className={`rounded-xl border ${cat.color} p-4`}>
              <h3 className="font-semibold text-[#1e3a5f] text-sm mb-3 flex items-center gap-2">
                <span>{cat.icono}</span>{cat.categoria}
              </h3>
              <div className="space-y-2">
                {cat.items.map((item) => (
                  <div key={item.nombre} className="bg-white rounded-lg px-3 py-2">
                    <span className="text-xs font-bold text-[#1e3a5f]">{item.nombre}</span>
                    <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Ética y legal ── */}
      <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 overflow-hidden">
        <div className="px-6 py-4 border-b border-amber-200 flex items-center gap-3">
          <span className="text-2xl">⚖️</span>
          <h2 className="font-bold text-[#1e3a5f] text-lg">Consideraciones Éticas y Legales</h2>
        </div>
        <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
          {eticaLegal.map((item) => (
            <div key={item.titulo} className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <span className="text-xl flex-shrink-0">{item.icono}</span>
                <div>
                  <h3 className="font-semibold text-[#1e3a5f] text-sm mb-1.5">{item.titulo}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Autocuidado ── */}
      <div className="mt-6 rounded-2xl border border-teal-200 bg-teal-50 overflow-hidden">
        <div className="px-6 py-4 border-b border-teal-200 flex items-center gap-3">
          <span className="text-2xl">🌿</span>
          <h2 className="font-bold text-[#1e3a5f] text-lg">Autocuidado del Terapeuta Online</h2>
        </div>
        <div className="p-5 grid grid-cols-1 md:grid-cols-2 gap-4">
          {autocuidado.map((item) => (
            <div key={item.titulo} className="bg-white rounded-xl p-4 shadow-sm flex gap-3">
              <span className="text-xl flex-shrink-0">{item.icono}</span>
              <div>
                <h3 className="font-semibold text-[#1e3a5f] text-sm mb-1.5">{item.titulo}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Fichas recomendadas ── */}
      <div className="mt-6 bg-[#1e3a5f] rounded-2xl p-6">
        <h2 className="text-white font-bold text-lg mb-2">Fichas recomendadas para teleterapia</h2>
        <p className="text-white/70 text-sm mb-4">Fichas que funcionan especialmente bien en formato digital durante la videollamada.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          {fichasOnline.map((f) => (
            <Link
              key={f.id}
              href={`/fichas/${f.id}`}
              className="bg-white/10 hover:bg-white/20 transition-colors rounded-xl px-4 py-3 text-sm text-white/90 hover:text-white font-medium"
            >
              {f.nombre}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
