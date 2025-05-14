import { Facebook, Instagram, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-black py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <h4 className="text-lg font-bold mb-2">Ubicación</h4>
          <p>Calle Margarita #253</p>
          <p>Col. Jardines de San Sebastián</p>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-2">Contacto</h4>
          <p className="flex items-center gap-2">
            <Phone className="w-4 h-4" /> 523310502957
          </p>
          <p className="flex items-center gap-2">
            <MapPin className="w-4 h-4" /> Guadalajara, Jalisco
          </p>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-2">Síguenos</h4>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-5 h-5 hover:text-gray-200" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram className="w-5 h-5 hover:text-gray-200" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 text-xs opacity-70">
        © {new Date().getFullYear()} San Sebastián Spa · Todos los derechos reservados
      </div>
    </footer>
  );
}
