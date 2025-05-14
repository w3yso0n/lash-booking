import MainLayout from "@/components/Layout/MainLayout";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import BookingCalendar from "@/components/BookingCalendar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <MainLayout>
      <Navbar />

      <div className="pt-16">
        <Hero />
      </div>

      {/* <section className="px-4 md:px-10 lg:px-24 py-12 bg-gray-100">
        <Gallery />
      </section> */}

      <section className="px-4 md:px-10 lg:px-24 py-12 bg-gray-100">
        <BookingCalendar />
      </section>

      <WhatsAppFloat />
    </MainLayout>
  );
}
