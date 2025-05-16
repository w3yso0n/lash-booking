import { useState } from "react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const horarios = [
  "10:00 AM", "11:00 AM", "12:00 PM",
  "01:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"
];

// ⚠️ CAMBIA este número por el tuyo, sin espacios ni guiones
const NUMERO_WHATSAPP = "523310502957";

export default function BookingCalendar() {
  const [fechaSeleccionada, setFechaSeleccionada] = useState<Date | undefined>();
  const [horarioSeleccionado, setHorarioSeleccionado] = useState<string>("");
  const [nombre, setNombre] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleWhatsApp = () => {
    if (!fechaSeleccionada || !horarioSeleccionado || !nombre ) {
      alert("Completa todos los campos antes de continuar.");
      return;
    }

    const fecha = format(fechaSeleccionada, "PPPP");
    const resumen = `Hola 👋 Me gustaría agendar una cita en *San Sebastián Spa* 💆‍♀️✨\n\n🗓 *Fecha:* ${fecha}\n🕒 *Hora:* ${horarioSeleccionado}\n🙋‍♀️ *Nombre:* ${nombre}\n📱\n📝 *Servicio requerido:* ${mensaje || "No especificado"}\n\n¿Está disponible este horario?`;

    const url = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(resumen)}`;
    window.open(url, "_blank");
  };

  return (
    <section id="agendar" className="p-6 bg-white rounded-xl shadow max-w-3xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4 text-primary">Agendar una cita</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <p className="font-medium mb-2">Selecciona un día:</p>
          <DayPicker
            mode="single"
            selected={fechaSeleccionada}
            onSelect={(date) => setFechaSeleccionada(date ?? undefined)}
            disabled={{ before: new Date() }}
          />
        </div>

        <div>
          {fechaSeleccionada ? (
            <>
              <p className="font-medium mb-2">Selecciona una hora:</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {horarios.map((hora) => (
                  <Button
                    key={hora}
                    variant={horarioSeleccionado === hora ? "default" : "outline"}
                    onClick={() => setHorarioSeleccionado(hora)}
                    className={`text-sm ${horarioSeleccionado === hora ? "ring-2 ring-primary" : ""}`}
                  >
                    {hora}
                  </Button>
                ))}
              </div>

              <Input
                placeholder="Tu nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                className="mb-3"
              />
              <Textarea
                placeholder="Notas para tu cita (opcional)"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                className="mb-3"
              />

              <Button
                onClick={handleWhatsApp}
                className="w-full bg-primary text-black"
              >
                Agendar por WhatsApp
              </Button>
            </>
          ) : (
            <p className="text-gray-500 italic mt-6">Selecciona una fecha para ver los horarios disponibles.</p>
          )}
        </div>
      </div>
    </section>
  );
}
