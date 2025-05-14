import { HeartHandshake, Sparkles, Smile, Leaf } from "lucide-react";

const servicios = [
  {
    icon: <Sparkles className="w-8 h-8 text-primary" />,
    titulo: "Extensiones de Pestañas",
    descripcion: "Diseños personalizados para resaltar tu mirada.",
  },
  {
    icon: <Smile className="w-8 h-8 text-primary" />,
    titulo: "Masaje Relajante",
    descripcion: "Desconecta del estrés con técnicas suaves y reconfortantes.",
  },
  {
    icon: <HeartHandshake className="w-8 h-8 text-primary" />,
    titulo: "Masaje Descontracturante",
    descripcion: "Alivia tensiones musculares y mejora tu movilidad.",
  },
  {
    icon: <Leaf className="w-8 h-8 text-primary" />,
    titulo: "Terapia Física y Rehabilitación",
    descripcion: "Recupera tu bienestar con sesiones guiadas y profesionales.",
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="bg-white py-16 px-6 md:px-10 lg:px-24">
      <h2 className="text-3xl font-bold text-center text-primary mb-10">Nuestros Servicios</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {servicios.map((servicio, idx) => (
          <div
            key={idx}
            className="bg-gray-50 rounded-xl shadow-md p-6 hover:shadow-xl transition duration-300 text-center"
          >
            <div className="mb-4 flex justify-center">{servicio.icon}</div>
            <h3 className="text-lg font-semibold mb-2 text-primary">{servicio.titulo}</h3>
            <p className="text-sm text-gray-600">{servicio.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
