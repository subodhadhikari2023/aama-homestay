import Hero from "@/components/Hero";
import Rooms from "@/components/Rooms";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";
import Location from "@/components/Location";
import StickyWhatsApp from "@/components/StickyWhatsApp";

export default function Home() {
  return (
    <main>
      <Hero />
      <Rooms />
      <Services />
      <Reviews />
      <Location />
      <StickyWhatsApp />
    </main>
  );
}
