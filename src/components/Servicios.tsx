import { HeartHandshake, Sparkles, Smile, Leaf } from "lucide-react";
import { motion } from "framer-motion";

const servicios = [
  {
    icon: <Sparkles className="w-10 h-10 text-[#9A3324]" />,
    titulo: "Extensiones de Pestañas",
    descripcion: "Diseños personalizados para resaltar tu mirada.",
  },
  {
    icon: <Smile className="w-10 h-10 text-[#9A3324]" />,
    titulo: "Masaje Relajante",
    descripcion: "Desconecta del estrés con técnicas suaves y reconfortantes.",
  },
  {
    icon: <HeartHandshake className="w-10 h-10 text-[#9A3324]" />,
    titulo: "Masaje Descontracturante",
    descripcion: "Alivia tensiones musculares y mejora tu movilidad.",
  },
  {
    icon: <Leaf className="w-10 h-10 text-[#9A3324]" />,
    titulo: "Terapia Física y Rehabilitación",
    descripcion: "Recupera tu bienestar con sesiones guiadas y profesionales.",
  },
];

export default function Servicios() {
  return (
    <section
      id="servicios"
      className="relative py-20 px-6 md:px-10 lg:px-24 bg-gradient-to-br from-white via-[#fef7f6] to-[#fbe9e7]"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-[#9A3324] mb-12 tracking-tight"
        >
          Nuestros Servicios
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {servicios.map((servicio, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white rounded-2xl shadow-lg p-6 text-center hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              <div className="mb-4 flex justify-center items-center">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {servicio.icon}
                </motion.div>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-[#9A3324] tracking-wide">
                {servicio.titulo}
              </h3>
              <p className="text-sm text-gray-600">{servicio.descripcion}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
