import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between p-4 shadow-md bg-white">
      <h1 className="text-xl font-bold text-[#9A3324]">Brenda's Lashes</h1>

      {/* Botón móvil */}
      <button className="md:hidden p-2 rounded-md bg-white hover:bg-[#fef7f6] transition">
        <Menu className="w-6 h-6 text-[#9A3324]" />
      </button>

      {/* Menú escritorio */}
      <nav className="hidden md:flex gap-6 text-sm text-[#9A3324] font-medium">
        <a href="#galeria" className="hover:text-[#7b291d] transition">Galería</a>
        <a href="#servicios" className="hover:text-[#7b291d] transition">Servicios</a>
        <a href="#agendar" className="hover:text-[#7b291d] transition">Agendar</a>
      </nav>
    </header>
  );
}
