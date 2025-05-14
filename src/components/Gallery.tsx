import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

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
    <section id="galeria" className="py-12 px-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-primary text-center mb-8">Galería de Pestañas</h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {trabajos.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={img.alt}
            onClick={() => setImagenSeleccionada(img.src)}
            className="cursor-pointer rounded-xl shadow-md hover:scale-105 transition-transform duration-300 object-cover h-60 w-full"
          />
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
