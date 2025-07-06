import Navigation from "@/components/navigation";
import BreakfastSection from "@/components/breakfast-section";
import Footer from "@/components/footer";

export default function Breakfast() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <BreakfastSection />
      </main>
      <Footer />
    </div>
  );
}