import Navigation from "../components/navigation";
import HeroSection from "../components/hero-section";
import BreakfastSection from "../components/breakfast-section";
import Footer from "../components/footer";

export default function Breakfast() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <BreakfastSection />
      </main>
      <Footer />
    </div>
  );
}