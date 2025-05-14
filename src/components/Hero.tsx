import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="bg-primary text-black py-20 text-center">
      <h2 className="text-5xl font-bold mb-4">Luce unas pestañas espectaculares</h2>
      <p className="text-lg mb-6">Agéndate fácil, revisa mi trabajo y cotiza en segundos</p>
      <Button variant="secondary" size="lg" className="text-primary">
        Ver galería
      </Button>
    </section>
  );
}
