import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="flex items-center justify-between p-4 shadow-md bg-white">
      <h1 className="text-xl font-bold text-primary">Lash Booking</h1>
      <button className="md:hidden">
        <Menu className="text-primary" />
      </button>
      <nav className="hidden md:flex gap-6 text-sm text-primary font-medium">
        <a href="#galeria">Galería</a>
        <a href="#agendar">Agendar</a>
      </nav>
    </header>
  );
}
