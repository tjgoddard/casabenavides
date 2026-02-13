import Navigation from "../components/navigation";
import BreakfastSection from "../components/breakfast-section";
import Footer from "../components/footer";

export default function Breakfast() {
  return (
    <div className="min-h-screen pb-14 md:pb-0">
      <Navigation />
      <main className="pt-24 md:pt-28">
        <BreakfastSection />
      </main>
      <Footer />
    </div>
  );
}