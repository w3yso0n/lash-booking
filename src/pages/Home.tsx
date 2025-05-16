import MainLayout from "@/components/Layout/MainLayout";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import BookingCalendar from "@/components/BookingCalendar";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Servicios from "@/components/Servicios";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <MainLayout>
      <Navbar />

      <div className="">
        <Hero />
      </div>

      <section className=" py-1 bg-gray-100">
        <Gallery />
      </section>
 <Servicios />
      <section className=" lg:px-24 bg-gray-100">
        <BookingCalendar />
      </section>
      <Footer />
      <WhatsAppFloat />
    </MainLayout>
  );
}
