import PageHeader from "@/components/PageHeader";
import Link from "next/link";

const secciones = [
  {
    titulo: "Configuración técnica óptima",
    icono: "💻",
    color: "border-blue-200 bg-blue-50",
    items: [
      { titulo: "Plataforma", desc: "Usa una plataforma con cifrado de extremo a extremo. Recomendadas: Signal (videollamada), Whereby, o la plataforma de tu institución. Evita WhatsApp para sesiones clínicas." },
      { titulo: "Encuadre visual", desc: "Asegúrate de que tu fondo sea neutro y profesional. La cámara a la altura de los ojos. Iluminación frontal natural o lámpara suave. Evita ventanas detrás." },
      { titulo: "Audio", desc: "Micrófono de calidad o auriculares con micrófono. Habitación sin eco. Avisa antes de la sesión si hay ruido ambiental." },
      { titulo: "Plan B", desc: "Ten siempre acordado un plan alternativo si la llamada se corta: número de teléfono del paciente, plataforma de respaldo. Comunícalo explícitamente al paciente." },
    ],
  },
  {
    titulo: "Alianza terapéutica por pantalla",
    icono: "🤝",
    color: "border-emerald-200 bg-emerald-50",
    items: [
      { titulo: "Los primeros 5 minutos", desc: "Empieza con una breve conexión personal antes del trabajo clínico. Pregunta cómo está, si está en un espacio privado, si hay algo que necesite antes de empezar. La pantalla hace más necesaria la conexión explícita." },
      { titulo: "Contacto visual adaptado", desc: "Mira directamente a la cámara cuando quieras transmitir presencia, no a la imagen del paciente. Asiente frecuentemente con la cabeza para señalar que escuchas." },
      { titulo: "Verificar comprensión", desc: "En online se pierde el 70% de la comunicación no verbal. Pregunta más explícitamente: '¿Cómo te ha quedado lo que hemos hablado?' '¿Hay algo que no haya entendido bien?'" },
      { titulo: "Cierre explícito", desc: "El cierre de sesión online necesita ser más intencionado. Dedica los últimos 5-7 minutos a cerrar activamente: resumir, tarea, cómo está el paciente antes de colgar." },
    ],
  },
  {
    titulo: "Adaptación de técnicas TCC",
    icono: "🔧",
    color: "border-purple-200 bg-purple-50",
    items: [
      { titulo: "Registro de pensamientos compartido", desc: "Usa Google Docs o Notion compartido para que el paciente llene la ficha mientras la sesión está activa. Ambos ven y editan el mismo documento en tiempo real." },
      { titulo: "Exposición por videollamada", desc: "La exposición in vivo puede adaptarse: el paciente realiza la exposición mientras mantiene la llamada activa. Tú das apoyo en tiempo real. Para jerarquías de exposición, el paciente comparte pantalla y van revisando juntos." },
      { titulo: "Relajación guiada", desc: "Funciona excelentemente en online. El paciente puede tumbarse. Avisa que puede cerrar los ojos. Habla más despacio que en presencial. Verifica al final que vuelve a conectar." },
      { titulo: "Role-play y habilidades sociales", desc: "El role-play funciona bien por videollamada. De hecho, para algunos pacientes con fobia social es más fácil empezar por aquí que en presencial." },
    ],
  },
  {
    titulo: "Manejo de crisis en teleterapia",
    icono: "🛡️",
    color: "border-red-200 bg-red-50",
    items: [
      { titulo: "Protocolo de seguridad previo", desc: "Antes de la primera sesión online, recoge: dirección física del paciente, nombre y teléfono de una persona de contacto, teléfono de emergencias de su zona. Ten estos datos a mano en cada sesión." },
      { titulo: "Evaluación de riesgo suicida", desc: "Si detectas ideación suicida, verifica que el paciente está en un espacio seguro. Mantén la llamada activa mientras activas el protocolo de crisis. No cuelgues hasta verificar seguridad." },
      { titulo: "Paciente que desaparece", desc: "Si el paciente se desconecta abruptamente durante una sesión de crisis: intenta reconectar de inmediato por teléfono. Si no responde, activa el contacto de emergencia que tienes registrado." },
      { titulo: "Límites claros del encuadre online", desc: "Explica desde el inicio qué ocurre en caso de crisis severa: la teleterapia tiene límites y en ciertos casos requerirá presencialidad o derivación a urgencias." },
    ],
  },
  {
    titulo: "Fichas y materiales digitales",
    icono: "📄",
    color: "border-amber-200 bg-amber-50",
    items: [
      { titulo: "Fichas interactivas en pantalla", desc: "Usa las fichas de esta app directamente en sesión: el paciente las rellena en su dispositivo mientras compartes pantalla o mientras os enviáis el link." },
      { titulo: "Compartir materiales", desc: "Envía los PDFs de las fichas por correo antes o después de la sesión. Usa un almacenamiento seguro (no WhatsApp para documentos clínicos)." },
      { titulo: "Pizarra virtual", desc: "Para el modelo cognitivo o mapas de pensamiento, usa Miro, Jamboard o simplemente un documento de texto compartido. La pizarra virtual puede ser más dinámica que la física." },
      { titulo: "Grabar la sesión (con consentimiento)", desc: "Algunos pacientes se benefician de revisar partes de la sesión. Si tu marco legal y ético lo permite, y con consentimiento explícito, una grabación puede ser herramienta terapéutica." },
    ],
  },
  {
    titulo: "Autocuidado del terapeuta online",
    icono: "🌿",
    color: "border-teal-200 bg-teal-50",
    items: [
      { titulo: "Fatiga de pantalla", desc: "Las sesiones online son más agotadoras. Programa pausas de 15 minutos entre sesiones. Reduce el número máximo de sesiones diarias respecto al presencial." },
      { titulo: "Transiciones", desc: "Sin los desplazamientos físicos, las transiciones entre sesiones son más difusas. Crea rituales de inicio y fin: 5 minutos de preparación antes de cada sesión, 5 minutos de cierre después." },
      { titulo: "Supervisión online", desc: "La supervisión es especialmente importante en teleterapia por las limitaciones del encuadre. Mantén supervisión regular y consulta los casos complejos." },
    ],
  },
];

const fichasOnline = [
  { id: "registro-pensamientos", nombre: "Registro de pensamientos automáticos" },
  { id: "diario-estado-animo", nombre: "Diario de estado de ánimo" },
  { id: "actividades-agradables", nombre: "Lista de actividades agradables" },
  { id: "plan-activacion-conductual", nombre: "Plan de activación conductual" },
  { id: "escala-evaluacion-sesion", nombre: "Escala de evaluación de sesión" },
  { id: "plan-seguridad-emocional", nombre: "Plan de seguridad emocional" },
];

export default function TeleterapiaPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-10">
      <PageHeader
        title="Kit de Adaptación a Teleterapia"
        description="Todo lo que necesitas para mantener la efectividad clínica de la TCC en formato online: configuración técnica, adaptación de técnicas, manejo de crisis y autocuidado del terapeuta."
        badge="💻 Teleterapia"
      />

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

      {/* Fichas recomendadas para online */}
      <div className="mt-8 bg-[#1e3a5f] rounded-2xl p-6">
        <h2 className="text-white font-bold text-lg mb-2">Fichas recomendadas para teleterapia</h2>
        <p className="text-white/70 text-sm mb-4">Estas fichas funcionan especialmente bien en formato digital durante la videollamada.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
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
