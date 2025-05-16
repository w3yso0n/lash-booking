import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { motion } from "framer-motion";

const trabajos = [
  { src: "/galeria/1.jpg", alt: "Pestañas clásicas" },
  { src: "/galeria/2.jpg", alt: "Volumen ruso" },
  { src: "/galeria/3.jpg", alt: "Efecto natural" },
  { src: "/galeria/4.jpg", alt: "Cat eye" },
  { src: "/galeria/5.jpg", alt: "Híbridas" },
  { src: "/galeria/6.jpg", alt: "Retoque" },
];

export default function Gallery() {
  const [imagenSeleccionada, setImagenSeleccionada] = useState<string | null>(null);

  return (
    <section
      id="galeria"
      className="py-20 px-4 sm:px-6 md:px-10 lg:px-24 bg-gradient-to-br from-white via-[#fef7f6] to-[#fbe9e7]"
    >
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl font-extrabold text-[#9A3324]"
        >
          Galería de Servicios
        </motion.h2>
        <p className="text-gray-600 mt-2 text-sm sm:text-base max-w-xl mx-auto">
          Descubre algunos de los resultados que hemos logrado con nuestras clientas. Cada diseño refleja belleza, dedicación y técnica.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {trabajos.map((img, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="relative overflow-hidden rounded-3xl shadow-xl group cursor-pointer border border-white/30 backdrop-blur-lg"
            onClick={() => setImagenSeleccionada(img.src)}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="object-cover w-full transition-transform duration-300 group-hover:scale-105"
            />

            {/* Descripción elegante siempre visible */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/20 backdrop-blur-md rounded-xl px-3 py-2 text-white text-sm font-medium shadow-md border border-white/10 transition duration-300 group-hover:scale-105">
              <p className="text-center tracking-wide drop-shadow-sm">{img.alt}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <Dialog open={!!imagenSeleccionada} onOpenChange={() => setImagenSeleccionada(null)}>
        <DialogContent className="max-w-4xl bg-transparent shadow-none p-0">
          {imagenSeleccionada && (
            <img src={imagenSeleccionada} alt="Ampliada" className="w-full h-auto rounded-lg" />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
