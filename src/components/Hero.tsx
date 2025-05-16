import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative py-20 text-center text-white">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 bg-[url('/galeria/bg.jpg')] bg-cover bg-center brightness-50"></div>

      {/* Contenido */}
      <div className="relative z-10 px-4">
        <h2 className="text-5xl font-bold mb-4">Bienestar, Belleza y Rehabilitación</h2>
        <p className="text-lg mb-6">Agéndate fácil, revisa mi trabajo y cotiza en segundos</p>
        <a href="#agendar">
          <Button className="!bg-[#9A3324] !text-white border-transparent hover:!bg-[#7b291d] transition-colors">
            Reservar ahora
          </Button>
        </a>
      </div>
    </section>
  );
}
